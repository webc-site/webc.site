# fetchLang.js

Nyelvi csomagok aszinkron betöltése és frissítési visszahívások összerendelése

## fetchLang(getDict)

Hozzon létre egy nyelvi csomag figyelőt a nyelvi csomag aszinkron lekéréséhez és frissítési visszahívás végrehajtásához, amikor a nyelv megváltozik

paraméter:
- `getDict` : Szerezze be a nyelvi csomag aszinkron függvényét
  - paraméter
    - `code` : nyelvi kód
  - Visszatérési érték: nyelvi csomag szótár

Visszatérési érték: funkció a frissítési visszahívás regisztrálásához
- paraméter
  - `refresh` : A visszahívási funkció frissítése a nyelv frissítésekor
    - paraméter
      - `i18n` : Nyelvi csomag szótárobjektum
      - `code` : Jelenlegi nyelvkód
- Visszatérési érték: funkció a frissítési visszahívás regisztrációjának törléséhez