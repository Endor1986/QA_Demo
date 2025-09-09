# Testplan 

## Ziel

Nachweis klassischer Testverfahren (Black-Box, Grenzwertanalyse, White-Box, Regression) anhand einer kleinen Bestell-API.

## Scope

* /orders: Validierung, Preisberechnung, Fehlerfälle
* Validierungsfunktionen (PLZ, Menge)
* Rechenlogik (Mehrwertsteuer, Rundung)

## Verfahren

* Äquivalenzklassen \& Grenzwerte (PLZ, Menge)
* Entscheidungstabellen (Rabatte – später)
* White-Box (Validatoren)
* Regression (Bugs fixen -> Tests bleiben)

## Entry/Exit

* Entry: Repo gebaut, npm install läuft, API startet
* Exit: Mind. 8 Testfälle grün; bekannte Bugs gefixt oder dokumentiert
