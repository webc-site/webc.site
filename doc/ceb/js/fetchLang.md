# fetchLang.js

Asynchronous nga pag-load sa mga pack sa pinulongan ug pagbugkos sa mga callback sa update

## fetchLang(getDict)

Paghimo usa ka tigpaminaw sa pack sa lengguwahe aron makuha ang pack sa lengguwahe ug ipatuman ang usa ka pag-refresh nga callback kung magbag-o ang lengguwahe

parameter:
- `getDict` : Kuhaa ang asynchronous function sa package sa pinulongan
  - parametro
    - `code` : code sa pinulongan
  - Ibalik nga bili: diksyonaryo sa pakete sa pinulongan

Ibalik nga bili: function sa pagparehistro refresh callback
- parametro
  - `refresh` : I-refresh ang function sa callback kung gi-update ang lengguwahe
    - parametro
      - `i18n` : Language pack dictionary object
      - `code` : Kodigo sa pinulongan karon
- Ibalik nga bili: function aron ma-unregister ang refresh callback