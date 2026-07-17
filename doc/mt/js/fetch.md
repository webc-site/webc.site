# fetch.js

Funzjoni tal-għodda tat-talba tan-netwerk ibbażata fuq l-inkapsulament tal-fetch

## F(url, opt)

Ibgħat talba tan-netwerk u rritorna oġġett ta 'rispons

parametru:
- `url` : Indirizz tat-talba
- `opt` : `fetch` oġġetti għażliet

Valur tar-ritorn: Oġġett tar-rispons

## f(attr)

Funzjoni ta' ordni ogħla li tkebbeb talba u teżamina l-kontenut ritornat f'format speċifikat

parametru:
- `attr` : isem tal-attribut tal-parsing tal-korp tar-rispons

Valur tar-ritorn: funzjoni biex titlob u parse l-kontenut b'mod mhux sinkroniku
  - parametru
    - `url` : Indirizz tat-talba
    - `opt` : `fetch` oġġetti għażliet
  - Valur tar-ritorn: kontenut parsed

## fTxt

Ibgħat talba għan-netwerk u rritorna l-korp tar-rispons f'format ta' test

parametru:
- `url` : Indirizz tat-talba
- `opt` : `fetch` oġġetti għażliet

Valur tar-ritorn: test tar-rispons

## fJson(url, opt)

Ibgħat talba tan-netwerk u analiża u rritorna l-korp tar-rispons f'format JSON

parametru:
- `url` : Indirizz tat-talba
- `opt` : `fetch` oġġetti għażliet

Valur tar-ritorn: oġġett JSON parsed

## fBin(url, opt)

Ibgħat talba tan-netwerk u rritorna l-korp tar-rispons bħala firxa ta 'byte binarja

parametru:
- `url` : Indirizz tat-talba
- `opt` : `fetch` oġġetti għażliet

Valur tar-ritorn: firxa ta' byte