# Okvir za unos koji automatski mijenja stanje rezerviranog mjesta

- Prikaži rezervirano mjesto kada nije uneseno
- Rezervirana mjesta glatko se skaliraju i lebde iznad prilikom upisivanja sadržaja
- Čista implementacija CSS-a, bez ovisnosti o JavaScriptu

## Koristite demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## strukturni zahtjevi

- Spremnik: Koristite elemente klase `.Input` za smještaj okvira za unos i oznaka.
- Okvir za unos: element `input`, `placeholder=" "` (rezervirano mjesto koje sadrži razmak) mora biti postavljeno za pokretanje promjene stanja.
- Oznaka savjeta: element `label`, odmah nakon `input`.

## stilska klasa

- `.Input`: Osnovni stil, pruža strukturu okvira za unos i animaciju prijelaza.
- `.Lg`: Stil modifikacije istaknutog/mat stakla.