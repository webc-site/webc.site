# Vstupné pole, ktoré automaticky prepína stav zástupného symbolu

- Zobraziť zástupný symbol, keď nie je zadaný
- Zástupné symboly sa pri písaní obsahu plynule menia a plávajú nad nimi
- Čistá implementácia CSS, žiadne závislosti od JavaScriptu

## Použite demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## konštrukčné požiadavky

- Kontajner: Použite prvky triedy `.Input` na umiestnenie vstupných polí a štítkov.
- Vstupné pole: prvok `input`, `placeholder=" "` (zástupný znak obsahujúci medzeru) musí byť nastavený na spustenie prepínača stavu.
- Značka tipu: prvok `label`, hneď za `input`.

## štýlová trieda

- `.Input`: Základný štýl poskytujúci štruktúru vstupného poľa a animáciu prechodu.
- `.Lg`: Štýl úpravy zvýraznenia/matného skla.