
import { isValidZip, isValidQty } from "../src/validators.js";

test("zip must be exactly 5 digits (shows current bug)", () => {
  expect(isValidZip("1234")).toBe(false); // sollte false sein, ist aktuell true -> Test zeigt Bug
  expect(isValidZip("12345")).toBe(true);
  expect(isValidZip("123456")).toBe(false);
});

test("qty max 10 (off-by-one bug)", () => {
  expect(isValidQty(10)).toBe(true);
  expect(isValidQty(11)).toBe(false); // aktuell true -> Test deckt Bug auf
});
