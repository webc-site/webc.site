# fetchLang.js

Laad taalpakketten asynchroon en bind update-callbacks

## fetchLang(getDict)

Maak een taalpakketlistener om het taalpakket asynchroon op te halen en een vernieuwingscallback uit te voeren wanneer de taal verandert

parameter:
- `getDict` : Haal de asynchrone functie van het taalpakket op
  - parameter
    - `code`: taalcode
  - Retourwaarde: woordenboek met taalpakketten

Retourwaarde: functie om vernieuwingscallback te registreren
- parameter
  - `refresh` : Callback-functie vernieuwen wanneer de taal wordt bijgewerkt
    - parameter
      - `i18n` : Woordenboekobject voor taalpakketten
      - `code` : Huidige taalcode
- Retourwaarde: functie om de vernieuwingscallback ongedaan te maken