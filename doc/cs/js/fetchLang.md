# fetchLang.js

Asynchronně načítat jazykové balíčky a vázat zpětná volání aktualizace

## fetchLang(getDict)

Vytvořte posluchač jazykových balíčků pro asynchronní získání jazykového balíčku a provedení zpětného volání aktualizace, když se jazyk změní

parametr:
- `getDict` : Získejte asynchronní funkci jazykového balíčku
  - parametr
    - `code` : kód jazyka
  - Návratová hodnota: slovník jazykového balíčku

Návratová hodnota: funkce pro registraci zpětného volání aktualizace
- parametr
  - `refresh` : Obnovit funkci zpětného volání při aktualizaci jazyka
    - parametr
      - `i18n` : Objekt slovníku jazykové sady
      - `code` : Aktuální kód jazyka
- Návratová hodnota: funkce pro zrušení registrace zpětného volání aktualizace