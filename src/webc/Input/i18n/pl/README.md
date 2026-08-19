# Pole wprowadzania, które automatycznie przełącza stan symbolu zastępczego

- Pokaż symbol zastępczy, jeśli nie został wprowadzony
- Elementy zastępcze płynnie skalują się i unoszą nad nimi podczas wpisywania treści
- Czysta implementacja CSS, bez zależności JavaScript
- Domyślnie z tłem z matowego szkła i przejściem po najechaniu myszką

## Skorzystaj z wersji demonstracyjnej

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## wymagania strukturalne

- Kontener: użyj elementów klasy `.Input` do przechowywania pól wejściowych i etykiet.
- Pole wejściowe: element `input`, `placeholder=" "` (symbol zastępczy zawierający spację) musi być ustawiony, aby wywołać zmianę stanu.
- Znacznik wskazówki: element `label`, bezpośrednio po `input`.

## klasa stylu

- `.Input`: Podstawowy styl, zapewniający strukturę pola wejściowego i animację przejścia.
- `.Lg`: Styl modyfikacji podświetlenia/matowego szkła.