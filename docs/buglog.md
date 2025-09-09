# Buglog

| ID | Bereich     | Beschreibung                              | Schwere | Status    | Repro      |
|----|-------------|--------------------------------------------|---------|-----------|------------|
| B1 | Preis       | Float-Rundungsfehler bei 0.1+0.2           | Mittel  | ✔️ Gefixt | T-Preis    |
| B2 | Validierung | PLZ akzeptiert 4–7 statt exakt 5           | Hoch    | ✔️ Gefixt | T-PLZ      |
| B3 | Validierung | Menge erlaubt 11 statt max 10              | Mittel  | ✔️ Gefixt | T-Menge    |
| B4 | Contract    | API sendet `error` statt `message`         | Niedrig | ✔️ Gefixt | T-Contract |
| B5 | Lager       | Keine harte Bestandsprüfung auf Server     | Hoch    | ✔️ Gefixt | T-Stock    |

