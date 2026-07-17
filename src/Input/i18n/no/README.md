# Inndataboks som automatisk bytter plassholderstatus

- Vis plassholder når den ikke er angitt
- Plassholdere skaleres jevnt og flyter over når du skriver innhold
- Ren CSS-implementering, ingen JavaScript-avhengigheter
- Standard med frostet glassbakgrunn og sveveovergang

## Bruk demoen

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-post</label>
</b>
```

## strukturelle krav

- Beholder: Bruk elementer fra `.Input`-klassen som vert for inndatabokser og etiketter.
- Inndataboks: `input` element, `placeholder=" "` (en plassholder som inneholder et mellomrom) må settes for å utløse tilstandsbryteren.
- Tips-tag: `label` element, umiddelbart etter `input`.

## stilklasse

- `.Input`: Grunnleggende stil, gir inndataboksstruktur og overgangsanimasjon.
- `.Lg`: Modifikasjonsstil for utheving/mattet glass.