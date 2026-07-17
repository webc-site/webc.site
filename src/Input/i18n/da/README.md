# Inputboks, der automatisk skifter pladsholdertilstand

- Vis pladsholder, når den ikke er indtastet
- Pladsholdere skaleres jævnt og svæver over, når du skriver indhold
- Ren CSS-implementering, ingen JavaScript-afhængigheder
- Standard med matteret glasbaggrund og svæveovergang

## Brug demoen

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## strukturelle krav

- Container: Brug elementer fra klassen `.Input` til at være vært for inputbokse og etiketter.
- Indtastningsfelt: `input` element, `placeholder=" "` (en pladsholder, der indeholder et mellemrum) skal indstilles for at udløse tilstandsskifteren.
- Tip-tag: `label` element, umiddelbart efter `input`.

## stil klasse

- `.Input`: Grundlæggende stil, der giver inputboksstruktur og overgangsanimation.
- `.Lg`: Fremhæv/materet glas modifikationsstil.