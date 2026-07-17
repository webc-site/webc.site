# fetchLang.js

Asinhrono učitajte jezičke pakete i povežite povratne pozive za ažuriranje

## fetchLang(getDict)

Kreirajte slušalac jezičkog paketa da asinhrono dobije jezički paket i izvrši povratni poziv za osvježavanje kada se jezik promijeni

parametar:
- `getDict` : Dobijte asinkronu funkciju jezičkog paketa
  - parametar
    - `code` : kod jezika
  - Povratna vrijednost: rječnik jezičnog paketa

Povratna vrijednost: funkcija za registraciju povratnog poziva za osvježavanje
- parametar
  - `refresh` : Osvježite funkciju povratnog poziva kada se jezik ažurira
    - parametar
      - `i18n` : objekt rječnika jezičkog paketa
      - `code` : Trenutni kod jezika
- Povratna vrijednost: funkcija za poništavanje registracije povratnog poziva za osvježavanje