# fetchLang.js

Laai taalpakkette asinchronies en bind opdatering-terugroepe

## fetchLang(getDict)

Skep 'n taalpakketluisteraar om die taalpakket asinchronies te verkry en 'n herlaai-terugbel uit te voer wanneer die taal verander

parameter:
- `getDict` : Kry die asynchrone funksie van die taalpakket
  - parameter
    - `code` : taalkode
  - Terugkeerwaarde: taalpakketwoordeboek

Retourwaarde: funksie om herlaai-terugbel te registreer
- parameter
  - `refresh` : Herlaai terugbelfunksie wanneer taal opgedateer word
    - parameter
      - `i18n` : Taalpakket woordeboekvoorwerp
      - `code` : Huidige taalkode
- Retourwaarde: funksie om die herlaai-terugbel te deregistreer