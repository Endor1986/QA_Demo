import { calcTotal } from "../src/price.js";

// Test mit Rundung -> zeigt, warum der Bug zunächst "unsichtbar" bleibt
test("calcTotal mit Rundung wirkt korrekt", () => {
    const total = calcTotal([
        { price: 0.1, qty: 1 },
        { price: 0.2, qty: 1 }
    ]);
    const rounded = Math.round(total * 100) / 100;
    expect(rounded).toBe(0.36); // ? grün
});

// Test ohne Rundung -> deckt Float-Ungenauigkeit auf
test("calcTotal zeigt Float-Ungenauigkeit", () => {
    const total = calcTotal([
        { price: 0.1, qty: 1 },
        { price: 0.2, qty: 1 }
    ]);
    expect(total).toBe(0.36); 
});
