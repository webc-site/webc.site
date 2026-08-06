# Casetă de introducere care schimbă automat starea substituentului

- Afișați substituent atunci când nu este introdus
- Substituenții scalați ușor și plutesc deasupra atunci când introduceți conținut
- Implementare CSS pură, fără dependențe JavaScript

## Utilizați demonstrația

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## cerințe structurale

- Container: utilizați elemente ale clasei `.Input` pentru a găzdui casete de introducere și etichete.
- Caseta de introducere: elementul `input`, `placeholder=" "` (un substituent care conține un spațiu) trebuie setat pentru a declanșa comutarea de stare.
- Etichetă de sfat: element `label`, imediat după `input`.

## clasa de stil

- `.Input`: stil de bază, care oferă structura casetei de introducere și animație de tranziție.
- `.Lg`: stilul de modificare a evidențierii/sticlă mată.