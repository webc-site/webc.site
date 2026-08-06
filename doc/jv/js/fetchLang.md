# fetchLang.js

Asynchronously mbukak paket basa lan ikatan nganyari callbacks

## fetchLang(getDict)

Gawe pendengar paket basa supaya entuk paket basa kanthi ora sinkron lan nglakokake panggilan maneh refresh nalika basa diganti

parameter:
- `getDict` : Entuk fungsi asinkron saka paket basa
  - paramèter
    - `code` : kode basa
  - Nilai bali: kamus paket basa

Nilai bali: fungsi kanggo ndhaftar refresh callback
- paramèter
  - `refresh` : Refresh fungsi callback nalika basa dianyari
    - paramèter
      - `i18n` : Objek kamus paket basa
      - `code` : Kode basa saiki
- Nilai bali: fungsi kanggo mbatalake registrasi refresh callback