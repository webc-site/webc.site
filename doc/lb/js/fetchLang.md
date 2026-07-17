# fetchLang.js

Asynchron Luede Sproochepacken a binden Update Callbacks

## fetchLang(getDict)

Erstellt e Sproochepack Nolauschterer fir asynchron de Sproochepack ze kréien an e Refresh Callback auszeféieren wann d'Sprooch ännert

parameter:
- `getDict` : Kritt déi asynchron Funktioun vum Sproochepaket
  - parameter
    - `code` : Sproochcode
  - Retour Wäert: Sprooch Pak Wierderbuch

Retour Wäert: Funktioun fir aschreiwen refresh callback
- parameter
  - `refresh` : Erfrëschen d'Rufffunktioun wann d'Sprooch aktualiséiert gëtt
    - parameter
      - `i18n` : Sproochepack Wierderbuchobjekt
      - `code` : Aktuelle Sproochcode
- Retourwäert: Funktioun fir den Erfrëschungscall ze registréieren