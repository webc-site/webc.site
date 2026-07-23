# fetchLang.js

Asinkrono učitavanje jezičnih paketa i vezanje povratnih poziva ažuriranja

## fetchLang(getDict)

Stvorite slušatelja jezičnog paketa za asinkrono dobivanje jezičnog paketa i izvršavanje povratnog poziva osvježavanja kada se jezik promijeni

parametar:
- `getDict` : Dobijte asinkronu funkciju jezičnog paketa
  - parametar
    - `code` : kod jezika
  - Povratna vrijednost: rječnik jezičnog paketa

Povratna vrijednost: funkcija za registraciju povratnog poziva osvježavanja
- parametar
  - `refresh` : Osvježi funkciju povratnog poziva kada se jezik ažurira
    - parametar
      - `i18n` : Objekt rječnika jezičnog paketa
      - `code` : Trenutačni jezični kod
- Povratna vrijednost: funkcija za poništavanje povratnog poziva osvježavanja