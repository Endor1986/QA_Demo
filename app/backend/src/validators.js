
export function isValidZip(zip) {
    // ✅ Fix: erlaubt nur noch exakt 5-stellige Postleitzahlen (DE-Format)
    return typeof zip === "string" && /^\d{5}$/.test(zip)
}

export function isValidPassword(pw) {
  // UI wird später 8+ verlangen, hier nur 6+
  return typeof pw === "string" && pw.length >= 6;
}

export function isValidQty(qty) {
   // ✅ Fix: Menge nur 1..10
    return Number.isInteger(qty) && qty >= 1 && qty <= 10;
}
