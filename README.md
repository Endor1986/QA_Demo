# QA Demo – Backend + Tests (Starter)

Dieses Starterpaket zeigt, wie man ein kleines API-Backend mit **bewusst eingebauten Bugs** erstellt und diese mit **Unit-, API- und (später) E2E-Tests** aufdeckt.

## Ziel
Dieses Projekt soll zeigen, wie man systematisch Testverfahren (Black-Box, Grenzwertanalyse, White-Box, Regression) 
in einem kleinen Node/Express-Projekt anwendet und dokumentiert. 
Die Fehler sind **bewusst eingebaut**, um den Wert von Tests sichtbar zu machen.

## Inhalt
- Express-API mit Endpunkt `POST /orders`
- Bugs in Preisberechnung (Float), Validierung (PLZ, Menge), Contract-Mismatch
- Jest + Supertest Tests, die die Bugs sichtbar machen

## Quickstart

CMD
cd app/backend
npm install
npm test
npm run dev  # startet die API auf http://localhost:3001

## Struktur:

qa-demo/
├── app/
│   └── backend/         # Testbereich        
├── docs/
│   ├── teststrategie.md # Strategie
│   ├── testplan.md      # Plan
│   ├── testcases.md     # Matrix
│   ├── buglog.md        # Fehlerliste
│   ├── reporting.md     # Tages-/Abschlussberichte
│   ├── pdf/             # alles für das PDF
│   │   ├── qa-demo-report.md   # Hauptdokument (Markdown)
│   │   ├── images/             # Screenshots
│   │   │   ├── npm-test.png
│   │   │   ├── curl-zip-bug.png
│   │   │   ├── curl-qty-bug.png
│   │   │   └── curl-stock-bug.png
│   │   └── export/             # hier speicherst du das fertige PDF
│   │       └── qa-demo-report.pdf
└── README.md

## Testbereich:

app/backend/
├── package.json
├── src/
│   ├── server.js
│   ├── price.js
│   └── validators.js
└── test/
    ├── price.test.js
    ├── validators.test.js
    └── orders.api.test.js
