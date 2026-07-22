# Inmatningsruta som automatiskt byter platshållarstatus

- Visa platshållare när den inte anges
- Platshållare skalas smidigt och flyter ovanför när du skriver innehåll
- Ren CSS-implementering, inga JavaScript-beroenden
- Standard med frostat glasbakgrund och svävningsövergång

## Använd demon

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-post</label>
</b>
```

## strukturella krav

- Behållare: Använd element från klassen `.Input` för att vara värd för inmatningsrutor och etiketter.
- Inmatningsruta: `input` element, `placeholder=" "` (en platshållare som innehåller ett mellanslag) måste ställas in för att utlösa tillståndsomkopplaren.
- Tipstagg: `label` element, omedelbart efter `input`.

## stilklass

- `.Input`: Grundläggande stil, ger struktur för inmatningsruta och övergångsanimering.
- `.Lg`: Modifieringsstil för highlight/frostat glas.