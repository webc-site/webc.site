# Kaxxa tad-dħul li taqleb awtomatikament l-istat tal-placeholder

- Uri placeholder meta ma tiddaħħalx
- Placeholders bla xkiel jiskalaw u jżommu f'wiċċ l-ilma 'l fuq meta jittajpja kontenut
- Implimentazzjoni CSS pura, l-ebda dipendenzi JavaScript

## Uża d-demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## rekwiżiti strutturali

- Kontenitur: Uża elementi tal-klassi `.Input` biex tospita kaxxi u tikketti tad-dħul.
- Kaxxa tad-dħul: `input` element, `placeholder=" "` (placeholder li jkun fih spazju) għandu jiġi ssettjat biex iqanqal is-swiċċ tal-istat.
- Tikketta tal-ponta: `label` element, immedjatament wara `input`.

## klassi tal-istil

- `.Input`: Stil bażiku, li jipprovdi struttura tal-kaxxa tal-input u animazzjoni tat-tranżizzjoni.
- `.Lg`: Stil ta' modifika tal-ħġieġ immarkat/frosted.