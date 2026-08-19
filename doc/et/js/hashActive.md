# hashActive.js

Navigeerimislinkide esiletõstmine URL-i ankrute ja vaateava kerimise põhjal

## default(link_li, cls)

Tõstke automaatselt esile navigeerimislingid, mis vastavad hetkel nähtavale alale, lähtudes lehe kerimise positsioonist ja URL-i ankurpunkti muutustest.

parameeter:
- `link_li` : Navigeerimislingi DOM-i elementide loend
- `cls` : aktiivse CSS-klassi nimi, vaikimisi `"A"`

Tagastusväärtus: tühistage kõik kuulamise puhastusfunktsioonid