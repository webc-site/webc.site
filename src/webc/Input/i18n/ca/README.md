# Quadre d'entrada que canvia automàticament l'estat del marcador de posició

- Mostra el marcador de posició quan no s'ha introduït
- Els marcadors de posició escalen i floten sense problemes per sobre quan s'escriu contingut
- Implementació pura de CSS, sense dependències de JavaScript

## Utilitzeu la demostració

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Correu electrònic</label>
</b>
```

## requisits estructurals

- Contenidor: utilitzeu elements de la classe `.Input` per allotjar caixes d'entrada i etiquetes.
- Quadre d'entrada: l'element `input`, `placeholder=" "` (un marcador de posició que conté un espai) s'ha de configurar per activar el canvi d'estat.
- Etiqueta de consell: element `label`, immediatament després de `input`.

## classe d'estil

- `.Input`: estil bàsic, que proporciona estructura de quadres d'entrada i animació de transició.
- `.Lg`: estil de modificació de vidre esmerilat/destacat.