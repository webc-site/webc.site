---
name: jsdoc
description: src/js-document automatisch gegenereerd
---

## Voer stappen uit

1. Voer `./sh/jsDoc.js` uit om functies te bekijken waarvan de documentatie ontbreekt (als er geen uitvoer is, hoeft u deze niet toe te voegen).
2. Lees, volgens de lijst met uitvoerbestanden, de bestaande documenten en codes één voor één en voltooi ze (verwerk ze op volgorde en verbreek ze één voor één).

## Documentatievereisten

Als de export een functie is, schrijft u
- Parameters en retourwaarden:
  - Schrijf alleen overeenkomstige beschrijvingen als er parameters of retourwaarden zijn, schrijf ze anders niet.
  - Parameters worden geïntroduceerd met behulp van ongeordende lijsten.
  - Als de geretourneerde waarde een array is, gebruik dan een ongeordende lijst om deze één voor één te beschrijven (anders schrijft u direct: `Retourwaarde: beschrijving`, slechts één regel).
  - Als de parameters of de retourwaarde functies zijn, gebruik dan sub-ongeordende lijsten om de parameters te beschrijven en waarden terug te geven (als er geen zijn, schrijf ze dan niet).

Als de export een constante is, voer dan in wat het is, slechts één regel

- Gebruik beknopte, professionele taal en vermijd het gebruik van bijvoeglijke naamwoorden.
- Herzie een bestaand document, herschrijf het niet volledig

## formaat sjabloon

Schrijf elke naam slechts één keer om dubbel werk te voorkomen en probeer deze duidelijk in één regel uit te drukken. Het referentieformaat is als volgt

```
# bestandsnaam

## Functienaam (parameter)

Gebruiksbeschrijving

parameter:
- `xx` : Doel
  - parameter
    - `a` : Doel
  - Retourwaarde: beschrijving

Retourwaarde: Beschrijving
```