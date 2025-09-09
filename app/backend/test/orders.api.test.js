
import request from "supertest";
import "../src/server.js"; // startet Server auf 3001

const api = request("http://localhost:3001");

describe("POST /orders", () => {
  test("rejects invalid zip (contract + validation)", async () => {
    const res = await api.post("/orders").send({
      items: [{ sku: "SKU-2", price: 10.0, qty: 1 }],
      address: { zip: "1234" } // sollte 5-stellig sein
    });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error", "invalid-zip"); // Contract-Mismatch sichtbar
  });

  test("rejects qty > 10", async () => {
    const res = await api.post("/orders").send({
      items: [{ sku: "SKU-2", price: 10.0, qty: 11 }],
      address: { zip: "12345" }
    });
    // Erwartet 400, wird aktuell fehlschlagen, weil Server 201 akzeptiert -> Test zeigt Bug
    expect(res.status).toBe(400);
  });
});
