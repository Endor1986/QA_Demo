
import { calcTotal } from "../src/price.js";

test("calcTotal uses precise math (should fail first)", () => {
  const total = calcTotal([{ price: 0.1, qty: 1 }, { price: 0.2, qty: 1 }]);
  // Erwartung: 0.30 * 1.19 = 0.357 -> auf 2 Nachkommastellen 0.36
  const rounded = Math.round(total * 100) / 100;
  expect(rounded).toBe(0.36); // Erst rot -> zeigt Float-Thema
});
