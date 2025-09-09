# QA Demo Backend

Ein kleines Node/Express-Projekt mit absichtlich eingebauten Bugs, das den gesamten QA-Prozess demonstriert:  
Von der Fehlererkennung über automatisierte Tests bis hin zur Dokumentation und Behebung.  

➡️ Alle fünf dokumentierten Bugs (B1–B5) wurden behoben und sind durch automatisierte Tests abgesichert.  

---

## 🚀 Quickstart

```bash
cd app/backend
npm install
npm test

📂 Projektstruktur


app/
├── backend/
│   ├── package.json
│   ├── src/
│   │   ├── server.js
│   │   ├── price.js
│   │   └── validators.js
│   └── test/
│       ├── price.test.js
│       ├── validators.test.js
│       └── orders.api.test.js
└── docs/
    ├── testplan.md
    └── bugreport.md

🐞 Buglog

| ID | Bereich     | Beschreibung                          | Schwere | Status    | Repro      |
| -- | ----------- | ------------------------------------- | ------- | --------- | ---------- |
| B1 | Preis       | Float-Rundungsfehler bei 0.1+0.2      | Mittel  | ✔️ Gefixt | T-Preis    |
| B2 | Validierung | PLZ akzeptiert 4–7 statt 5            | Hoch    | ✔️ Gefixt | T-PLZ      |
| B3 | Validierung | Menge erlaubt 11 statt max 10         | Mittel  | ✔️ Gefixt | T-Menge    |
| B4 | Contract    | API sendet `error` statt `message`    | Niedrig | ✔️ Gefixt | T-Contract |
| B5 | Lager       | Keine harte Bestandsprüfung im Server | Hoch    | ✔️ Gefixt | T-Stock    |

📜 Changelog

| Version | Datum   | Änderungen                                                  |
| ------- | ------- | ----------------------------------------------------------- |
| 0.1.0   | Initial | Projekt mit absichtlich eingebauten Bugs (B1–B5)            |
| 0.2.0   | Fix     | ZIP (B2) und Menge (B3) behoben, Tests erweitert            |
| 0.3.0   | Final   | Preis (B1), Contract (B4) und Stock (B5) behoben; alle grün |


✅ Abschluss
Alle fünf dokumentierten Bugs wurden erfolgreich behoben.
Die automatisierten Unit- und API-Tests laufen vollständig grün.
Das Projekt zeigt exemplarisch, wie QA-Prozesse mit Dokumentation, Testfällen und Bugfixes transparent und reproduzierbar umgesetzt werden können.
Die Ergebnisse und die Dokumentation sind ins Repository übernommen und final auf GitHub verfügbar.