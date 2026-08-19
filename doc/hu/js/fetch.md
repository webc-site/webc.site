# fetch.js

Hálózati kérelmező eszköz funkció a beágyazás lekérése alapján

## F(url, opt)

Hálózati kérés küldése és válaszobjektum visszaadása

paraméter:
- `url` : Cím kérése
- `opt` : `fetch` opcióobjektum

Visszatérési érték: Válaszobjektum

## f(attr)

Egy magasabb rendű függvény, amely becsomagolja a kérést, és meghatározott formátumban elemzi a visszaküldött tartalmat

paraméter:
- `attr` : választörzs elemzési attribútum neve

Visszatérési érték: funkció a tartalom aszinkron kérésére és elemzésére
  - paraméter
    - `url` : Cím kérése
    - `opt` : `fetch` opcióobjektum
  - Visszatérési érték: elemzett tartalom

## fTxt

Küldjön el egy hálózati kérelmet, és küldje vissza a válasz törzsét szöveges formátumban

paraméter:
- `url` : Cím kérése
- `opt` : `fetch` opcióobjektum

Visszatérési érték: válaszszöveg

## fJson(url, opt)

Küldjön el egy hálózati kérelmet, elemezze és adja vissza a válasz törzsét JSON formátumban

paraméter:
- `url` : Cím kérése
- `opt` : `fetch` opcióobjektum

Visszatérési érték: elemzett JSON-objektum

## fBin(url, opt)

Küldjön el egy hálózati kérelmet, és adja vissza a válasz törzsét bináris bájttömbként

paraméter:
- `url` : Cím kérése
- `opt` : `fetch` opcióobjektum

Visszatérési érték: bájttömb