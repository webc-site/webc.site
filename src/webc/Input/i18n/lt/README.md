# Įvesties laukelis, kuris automatiškai perjungia rezervuotos vietos būseną

- Rodyti rezervuotąją vietą, kai neįvestas
- Vietos žymos sklandžiai keičiasi ir slankioja aukščiau, kai rašote turinį
- Grynas CSS diegimas, jokių „JavaScript“ priklausomybių

## Naudokite demonstracinę versiją

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">El. paštas</label>
</b>
```

## struktūriniai reikalavimai

- Sudėtinis rodinys: naudokite `.Input` klasės elementus įvesties laukeliams ir etiketėms priglobti.
- Įvesties laukelis: `input` elementas, `placeholder=" "` (vietos rezervavimo ženklas, kuriame yra tarpas) turi būti nustatytas, kad suaktyvintų būsenos jungiklį.
- Patarimo žyma: `label` elementas, iškart po `input`.

## stiliaus klasė

- `.Input`: pagrindinis stilius, suteikiantis įvesties laukelio struktūrą ir perėjimo animaciją.
- `.Lg`: paryškinimo / matinio stiklo modifikavimo stilius.