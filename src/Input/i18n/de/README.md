# Eingabefeld, das den Platzhalterstatus automatisch wechselt

- Platzhalter anzeigen, wenn nicht eingegeben
- Platzhalter werden beim Eingeben von Inhalten reibungslos skaliert und schweben darüber
- Reine CSS-Implementierung, keine JavaScript-Abhängigkeiten
- Standardmäßig mit Milchglashintergrund und Hover-Übergang

## Nutzen Sie die Demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-Mail</label>
</b>
```

## bauliche Anforderungen

- Container: Verwenden Sie Elemente der Klasse `.Input`, um Eingabefelder und Beschriftungen zu hosten.
- Eingabefeld: `input`-Element, `placeholder=" "` (ein Platzhalter, der ein Leerzeichen enthält) muss festgelegt werden, um den Statuswechsel auszulösen.
- Tipp-Tag: `label`-Element, unmittelbar nach `input`.

## Stilklasse

- `.Input`: Basisstil, der die Struktur des Eingabefelds und die Übergangsanimation bereitstellt.
- `.Lg`: Modifikationsstil für Hervorhebung/Milchglas.