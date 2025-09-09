
import express from "express";
import { calcTotal } from "./price.js";
import { isValidZip, isValidQty } from "./validators.js";

const app = express();
app.use(express.json());

let stock = { "SKU-1": 0, "SKU-2": 100 }; // BUG: SKU-1 hat 0, Backend prüft gleich nicht hart

app.get("/", (req, res) => {
    res.type("text").send("QA Demo API läuft. Endpunkte: GET /health, POST /orders");
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/orders", (req, res) => {
  const { items = [], address = {}, discountCode } = req.body;

  // BUG: keine harte Server-Validierung für negative Preise / manipulierte Felder
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "empty-items" });
  }

  for (const it of items) {
    if (!isValidQty(it.qty)) return res.status(400).json({ error: "invalid-qty" });
    // BUG: keine Lagerprüfung auf dem Server (nur Frontend geplant)
  }

  if (!isValidZip(address.zip || "")) {
    // Contract-Mismatch: UI wird später "message" erwarten
    return res.status(400).json({ error: "invalid-zip" });
  }

  // BUG: Race-condition möglich bei discountCode – hier nur Dummy
  const total = calcTotal(items);

  return res.status(201).json({
    id: "ORDER-" + Date.now(),
    total, // kann durch Float-Bug unpräzise sein
    items
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("API on " + port));
