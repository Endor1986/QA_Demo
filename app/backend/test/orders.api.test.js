import request from "supertest";
import app from "../src/server.js";

const api = request(app);

describe("POST /orders", () => {
    // B4: Contract – soll 'message' liefern, Server gibt noch 'error' -> Test wird rot
    test("rejects invalid zip (contract + validation)", async () => {
        const res = await api.post("/orders").send({
            items: [{ sku: "SKU-2", price: 10.0, qty: 1 }],
            address: { zip: "1234" }
        });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("message", "invalid-zip"); // rot bis Server angepasst
    });

    // B3: Menge – bereits gefixt 
    test("rejects qty > 10", async () => {
        const res = await api.post("/orders").send({
            items: [{ sku: "SKU-2", price: 10.0, qty: 11 }],
            address: { zip: "12345" }
        });
        expect(res.status).toBe(400);
    });

    // B5: Stock – fehlt noch -> Test wird rot
    test("rejects order when stock is 0", async () => {
        const res = await api.post("/orders").send({
            items: [{ sku: "SKU-1", price: 10.0, qty: 1 }], // SKU-1 hat stock=0
            address: { zip: "12345" }
        });
        expect(res.status).toBe(409); // rot bis Lagerprüfung implementiert
    });
});
