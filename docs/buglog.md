
# Buglog

| ID | Bereich     | Beschreibung                              | Schwere | Status  | Repro |
|----|-------------|--------------------------------------------|---------|---------|-------|
| B1 | Preis       | Float-Rundungsfehler bei 0.1+0.2           | Mittel  | Offen   | T-Preis |
| B2 | Validierung | PLZ akzeptiert 4–7 statt exakt 5           | Hoch    | Offen   | T-PLZ |
| B3 | Validierung | Menge erlaubt 11 statt max 10              | Mittel  | Offen   | T-Menge |
| B4 | Contract    | API sendet `error` statt `message`         | Niedrig | Offen   | T-Contract |
| B5 | Lager       | Keine harte Bestandsprüfung auf Server     | Hoch    | Offen   | T-Stock |
