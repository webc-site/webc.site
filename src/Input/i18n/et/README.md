# Sisestuskast, mis vahetab automaatselt kohahoidja olekut

- Kuva kohahoidja, kui pole sisestatud
- Kohahoidjad skaleeruvad sujuvalt ja hõljuvad sisu sisestamisel üleval
- Puhas CSS-i juurutamine, JavaScripti sõltuvusteta

## Kasutage demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Meil</label>
</b>
```

## struktuursed nõuded

- Konteiner: kasutage sisestuskastide ja siltide majutamiseks klassi `.Input` elemente.
- Sisestuskast: `input` element, `placeholder=" "` (tühikut sisaldav kohatäide) tuleb seadistada olekulüliti käivitamiseks.
- Vihje märgend: element `label`, vahetult pärast `input`.

## stiiliklass

- `.Input`: põhistiil, mis pakub sisestuskasti struktuuri ja üleminekuanimatsiooni.
- `.Lg`: esiletõstmise/mattklaasi muutmisstiil.