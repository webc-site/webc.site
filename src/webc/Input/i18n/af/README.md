# Invoerkassie wat outomaties plekhouerstatus verander

- Wys plekhouer wanneer dit nie ingevoer is nie
- Plekhouers skaal glad en sweef bo wanneer inhoud tik
- Suiwer CSS-implementering, geen JavaScript-afhanklikhede nie
- Verstek met matglas-agtergrond en beweeg-oorgang

## Gebruik die demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-pos</label>
</b>
```

## strukturele vereistes

- Houer: Gebruik elemente van die `.Input` klas om invoerbokse en etikette te huisves.
- Invoerkassie: `input` element, `placeholder=" "` ('n plekhouer wat 'n spasie bevat) moet gestel word om die toestandskakelaar te aktiveer.
- Wenk tag: `label` element, onmiddellik na `input`.

## styl klas

- `.Input`: Basiese styl, verskaf invoerkasstruktuur en oorgangsanimasie.
- `.Lg`: Verlig-/rypglas-modifikasiestyl.