export function calcTotal(items) {
    // items: [{ price: 0.1, qty: 1 }, ...]

    // BUG: Summenbildung mit Float ? Rundungsfehler (0.1 + 0.2 = 0.30000000000000004)
    // const sum = items.reduce((acc, it) => acc + it.price * it.qty, 0);

    // FIX: Summenbildung in Cent (Integer) ? vermeidet Rundungsfehler
    const sumInCents = items.reduce((acc, it) => {
        return acc + Math.round(it.price * 100) * it.qty;
    }, 0);

    // BUG: Mehrwertsteuer mit Float ? ungenaue Beträge
    // const withVat = sum * 1.19;

    // FIX: Mehrwertsteuer in Cent berechnen und runden
    const withVatInCents = Math.round(sumInCents * 1.19);

    // BUG: Rückgabe als Float mit möglichen Ungenauigkeiten
    // return withVat;

    // FIX: Rückgabe sauber in Euro
    return withVatInCents / 100;
}
