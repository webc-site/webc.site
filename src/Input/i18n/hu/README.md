# Beviteli mező, amely automatikusan váltja a helyőrző állapotát

- Helyőrző megjelenítése, ha nincs megadva
- A helyőrzők simán skálázódnak és fent lebegnek tartalom beírásakor
- Tiszta CSS-megvalósítás, JavaScript-függőségek nélkül

## Használd a demót

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## szerkezeti követelmények

- Tároló: Használja az `.Input` osztály elemeit beviteli mezők és címkék tárolására.
- Beviteli mező: `input` elem, `placeholder=" "` (szóközt tartalmazó helyőrző) be kell állítani az állapotváltó aktiválásához.
- Tippcímke: `label` elem, közvetlenül a `input` után.

## stílus osztály

- `.Input`: Alapstílus, beviteli mező szerkezete és átmenet animáció.
- `.Lg`: Kiemelés/mattüveg módosítási stílus.