
export function isValidZip(zip) {
  // BUG: akzeptiert 4–7 statt exakt 5
  return typeof zip === "string" && zip.length >= 4 && zip.length <= 7 && /^\d+$/.test(zip);
}

export function isValidPassword(pw) {
  // UI wird später 8+ verlangen, hier nur 6+
  return typeof pw === "string" && pw.length >= 6;
}

export function isValidQty(qty) {
  // BUG: off-by-one – erlaubt 11 statt max 10
  return Number.isInteger(qty) && qty >= 1 && qty <= 11;
}
