# Input Këscht déi automatesch Plazhalter Staat schalt

- Weist Plazhalter wann net aginn
- Plazhalter skaléieren glat a schwiewen uewen wann Dir Inhalt tippt
- Pure CSS Implementatioun, keng JavaScript Ofhängegkeeten

## Benotzt d'Demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-Mail</label>
</b>
```

## strukturell Ufuerderunge

- Container: Benotzt Elementer vun der `.Input` Klass fir Inputboxen an Etiketten ze hosten.
- Input Box: `input` Element, `placeholder=" "` (e Plazhalter deen e Raum enthält) muss agestallt ginn fir de Staatsschalter auszeléisen.
- Tipptag: `label` Element, direkt no `input`.

## Stil Klass

- `.Input`: Basisstil, bitt Inputbox Struktur an Iwwergangsanimatioun.
- `.Lg`: Highlight / Frosted Glas Modifikatioun Stil.