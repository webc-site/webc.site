# Vstupní pole, které automaticky přepíná stav zástupného symbolu

- Zobrazit zástupný symbol, když není zadán
- Zástupné symboly se při psaní obsahu plynule mění a vznášejí nad nimi
- Čistá implementace CSS, žádné závislosti na JavaScriptu

## Použijte demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## konstrukční požadavky

- Kontejner: Použijte prvky třídy `.Input` k umístění vstupních polí a štítků.
- Vstupní pole: prvek `input`, `placeholder=" "` (zástupný symbol obsahující mezeru) musí být nastaven tak, aby spustil přepínač stavu.
- Značka tipu: prvek `label`, bezprostředně za `input`.

## stylová třída

- `.Input`: Základní styl poskytující strukturu vstupního pole a animaci přechodu.
- `.Lg`: Styl úpravy zvýraznění/matného skla.