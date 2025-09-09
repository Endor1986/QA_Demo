
// BUG: Preise als Float statt Cent-Integer -> 0.1 + 0.2 Problem
export function calcTotal(items) {
  // items: [{price: 0.1, qty: 1}, ...]
  const sum = items.reduce((acc, it) => acc + it.price * it.qty, 0);
  // BUG: naive Mehrwertsteuer
  const withVat = sum * 1.19;
  return withVat; // z.B. 0.30000000000000004 statt 0.30
}
