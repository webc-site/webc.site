# fetchLang.js

Ladda språkpaket asynkront och bind uppdateringsåteruppringningar

## fetchLang(getDict)

Skapa en språkpaketsavlyssnare för att asynkront hämta språkpaketet och utföra en uppdateringsåteruppringning när språket ändras

parameter:
- `getDict` : Hämta den asynkrona funktionen för språkpaketet
  - parameter
    - `code` : språkkod
  - Returvärde: språkpaketets ordbok

Returvärde: funktion för att registrera refresh callback
- parameter
  - `refresh` : Uppdatera återuppringningsfunktionen när språket uppdateras
    - parameter
      - `i18n` : Språkpaketets ordboksobjekt
      - `code` : Aktuell språkkod
- Returvärde: funktion för att avregistrera uppdateringsåteruppringningen