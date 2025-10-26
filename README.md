<p align="center">
  <strong>QA Demo Backend</strong><br/>
  <em>Kleines Node/Express-Projekt mit absichtlich eingebauten Bugs – zur Demonstration eines vollständigen QA-Prozesses.</em>
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white">
  <img alt="Express" src="https://img.shields.io/badge/Express-4-black?logo=express&logoColor=white">
  <img alt="Tests" src="https://img.shields.io/badge/Tests-Jest%20%2B%20Supertest-99424f">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-lightgrey.svg">
</p>

---

## 🧭 Übersicht

Dieses Repo zeigt den **kompletten QA-Workflow**:  
- Fehler **identifizieren**, **reproduzieren** und **dokumentieren**  
- **Automatisierte Tests** schreiben (Unit & API)  
- **Bugfixes** implementieren und per CI/Tests absichern

➡️ **Alle fünf dokumentierten Bugs (B1–B5) sind behoben** und durch Tests abgesichert.

---

## 🚀 Quickstart

```bash
cd app/backend
npm install
npm test
```

> `npm test` führt Unit- und API-Tests aus.  
> Optional kannst du den Server starten (falls vorhanden): `npm start`.

---

## 📂 Projektstruktur

```text
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
```

---

## 🐞 Buglog

| ID | Bereich     | Beschreibung                          | Schwere | Status     | Repro      |
|----|-------------|----------------------------------------|---------|------------|------------|
| B1 | Preis       | Float-Rundungsfehler bei `0.1 + 0.2`   | Mittel  | ✔️ Gefixt  | T-Preis    |
| B2 | Validierung | PLZ akzeptiert 4–7 statt genau 5      | Hoch    | ✔️ Gefixt  | T-PLZ      |
| B3 | Validierung | Menge erlaubt 11 statt max. 10        | Mittel  | ✔️ Gefixt  | T-Menge    |
| B4 | Contract    | API sendet `error` statt `message`    | Niedrig | ✔️ Gefixt  | T-Contract |
| B5 | Lager       | Keine harte Bestandsprüfung im Server | Hoch    | ✔️ Gefixt  | T-Stock    |

> **T-…** verweist auf die zugehörigen Testfälle/Abschnitte in `test/*.test.js` bzw. in `docs/`.

---

## 📜 Changelog

| Version | Datum  | Änderungen                                                   |
|---------|--------|--------------------------------------------------------------|
| 0.1.0   | Init   | Projekt mit absichtlich eingebauten Bugs (B1–B5)            |
| 0.2.0   | Fix    | ZIP (B2) und Menge (B3) behoben, Tests erweitert            |
| 0.3.0   | Final  | Preis (B1), Contract (B4) und Stock (B5) behoben; alle grün |

---

## ✅ Abschluss

- Alle fünf dokumentierten Bugs wurden **erfolgreich behoben**.  
- **Unit- und API-Tests** laufen vollständig **grün**.  
- Das Projekt zeigt exemplarisch, wie QA-Prozesse mit **Dokumentation**, **Testfällen** und **Bugfixes** transparent und reproduzierbar umgesetzt werden können.  
- Ergebnisse und Dokumentation sind im Repository enthalten und final auf GitHub verfügbar.

---

## 📜 Lizenz
MIT – siehe `LICENSE`.
