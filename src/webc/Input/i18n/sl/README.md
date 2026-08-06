# Vnosno polje, ki samodejno preklopi stanje ograde

- Pokaži ogrado, ko ni vnesena
- Oznake mesta se med vnašanjem vsebine gladko spreminjajo in lebdijo nad njo
- Čista implementacija CSS, brez odvisnosti od JavaScripta

## Uporabite demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-pošta</label>
</b>
```

## strukturne zahteve

- Vsebnik: uporabite elemente razreda `.Input` za gostovanje vnosnih polj in nalepk.
- Vnosno polje: element `input`, `placeholder=" "` (ograda s presledkom) mora biti nastavljena, da sproži preklop stanja.
- Oznaka nasveta: element `label`, takoj za `input`.

## stilski razred

- `.Input`: Osnovni slog, ki zagotavlja strukturo vnosnega polja in animacijo prehoda.
- `.Lg`: Slog modifikacije poudarkov/matiranega stekla.