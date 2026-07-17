# fetchLang.js

Asynchrónne načítavanie jazykových balíkov a viazanie spätných volaní aktualizácie

## fetchLang(getDict)

Vytvorte poslucháč jazykových balíkov, aby ste asynchrónne získali jazykový balík a vykonali spätné volanie obnovenia, keď sa jazyk zmení

parameter:
- `getDict` : Získajte asynchrónnu funkciu jazykového balíka
  - parameter
    - `code` : kód jazyka
  - Návratová hodnota: slovník jazykového balíka

Návratová hodnota: funkcia na registráciu spätného volania obnovenia
- parameter
  - `refresh` : Obnoviť funkciu spätného volania po aktualizácii jazyka
    - parameter
      - `i18n` : Objekt slovníka jazykového balíka
      - `code` : Aktuálny kód jazyka
- Návratová hodnota: funkcia na zrušenie registrácie spätného volania obnovenia