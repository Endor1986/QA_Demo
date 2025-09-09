import express from "express";
import { calcTotal } from "./price.js";
import { isValidZip, isValidQty } from "./validators.js";

const app = express();
app.use(express.json());

// BUG: SKU-1 hat 0, aber Backend prüft nicht → Bestellungen trotzdem möglich
let stock = { "SKU-1": 0, "SKU-2": 100 };

app.get("/", (req, res) => {
    res.type("text").send("QA Demo API läuft. Endpunkte: GET /health, POST /orders");
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/orders", (req, res) => {
    const { items = [], address = {}, discountCode } = req.body;

    // BUG: keine harte Server-Validierung für leere Items
    // return res.status(400).json({ error: "empty-items" });

    // FIX: konsistentes Fehlerobjekt mit "message"
    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "empty-items" });
    }

    for (const it of items) {
        // BUG: Fehlerfeld bisher inkonsistent ("error")
        // if (!isValidQty(it.qty)) return res.status(400).json({ error: "invalid-qty" });

        // FIX: konsistentes Feld "message"
        if (!isValidQty(it.qty)) {
            return res.status(400).json({ message: "invalid-qty" });
        }

        // BUG: keine Lagerprüfung
        // FIX: Lager prüfen → wenn 0 → 409 Conflict
        if (!stock[it.sku] || stock[it.sku] === 0) {
            return res.status(409).json({ message: "out-of-stock" });
        }
    }

    // BUG: Contract-Mismatch → "error"
    // return res.status(400).json({ error: "invalid-zip" });

    // FIX: konsistentes Feld "message"
    if (!isValidZip(address.zip || "")) {
        return res.status(400).json({ message: "invalid-zip" });
    }

    // BUG: Race-condition möglich bei discountCode – hier nur Dummy
    const total = calcTotal(items);

    return res.status(201).json({
        id: "ORDER-" + Date.now(),
        total, // jetzt präzise durch Fix in price.js
        items
    });
});

const port = process.env.PORT || 3001;

// nur lauschen, wenn wir NICHT im Test laufen
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log("API on " + port));
}

export default app;
