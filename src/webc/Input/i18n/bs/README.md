# Okvir za unos koji automatski mijenja stanje čuvara mjesta

- Prikaži rezervirano mjesto kada nije uneseno
- Čuvari mjesta glatko se skaliraju i lebde iznad kada kucate sadržaj
- Čista CSS implementacija, bez JavaScript zavisnosti

## Koristite demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## strukturni zahtjevi

- Kontejner: Koristite elemente klase `.Input` za smještaj okvira za unos i oznaka.
- Okvir za unos: `input` element, `placeholder=" "` (čuvar mjesta koji sadrži razmak) mora biti postavljen da aktivira prekidač stanja.
- Oznaka savjeta: `label` element, odmah nakon `input`.

## stilska klasa

- `.Input`: Osnovni stil, pruža strukturu okvira za unos i animaciju prijelaza.
- `.Lg`: Istaknuti/matirano staklo stil modifikacije.