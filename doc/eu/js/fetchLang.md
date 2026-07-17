# fetchLang.js

Kargatu hizkuntza paketeak modu asinkronoan eta lotu eguneratze-deiak

## fetchLang(getDict)

Sortu hizkuntza paketeen entzule bat hizkuntza paketea modu asinkronoan lortzeko eta freskatze dei bat exekutatzeko hizkuntza aldatzen denean

parametroa:
- `getDict` : Lortu hizkuntza paketearen funtzio asinkronoa
  - parametroa
    - `code` : hizkuntza-kodea
  - Itzultzeko balioa: hizkuntza paketearen hiztegia

Itzultzeko balioa: freskatze-deia erregistratzeko funtzioa
- parametroa
  - `refresh`: freskatu deia-itzultzeko funtzioa hizkuntza eguneratzen denean
    - parametroa
      - `i18n` : Hizkuntza paketearen hiztegi objektua
      - `code` : egungo hizkuntza-kodea
- Itzultzeko balioa: freskatze-deia kentzeko funtzioa