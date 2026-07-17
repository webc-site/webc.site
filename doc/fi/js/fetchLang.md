# fetchLang.js

Lataa asynkronisesti kielipaketteja ja sido päivityskutsuja

## fetchLang(getDict)

Luo kielipaketin kuuntelija saadaksesi kielipaketin asynkronisesti ja suorittaaksesi päivityksen takaisinkutsun, kun kieli vaihtuu

parametri:
- `getDict` : Hanki kielipaketin asynkroninen toiminto
  - parametri
    - `code` : kielikoodi
  - Palautusarvo: kielipaketin sanakirja

Paluuarvo: toiminto rekisteröidä päivityksen takaisinsoitto
- parametri
  - `refresh` : Päivitä takaisinsoittotoiminto, kun kieli päivitetään
    - parametri
      - `i18n` : Kielipaketin sanakirjaobjekti
      - `code` : Nykyinen kielikoodi
- Paluuarvo: toiminto, joka peruuttaa päivityksen takaisinkutsun rekisteröinnin