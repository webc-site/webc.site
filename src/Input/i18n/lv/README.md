# Ievades lodziņš, kas automātiski pārslēdz viettura stāvokli

- Rādīt vietturi, kad tas nav ievadīts
- Vietturi vienmērīgi mērogojas un peld augšā, rakstot saturu
- Tīra CSS ieviešana, bez JavaScript atkarības

## Izmantojiet demonstrāciju

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-pasts</label>
</b>
```

## strukturālās prasības

- Konteiners: izmantojiet `.Input` klases elementus, lai mitinātu ievades lodziņus un etiķetes.
- Ievades lodziņš: `input` elements, `placeholder=" "` (vietturis, kas satur atstarpi) ir jāiestata, lai aktivizētu stāvokļa slēdzi.
- Padoma tags: elements `label`, tūlīt aiz `input`.

## stila klase

- `.Input`: pamata stils, kas nodrošina ievades lodziņa struktūru un pārejas animāciju.
- `.Lg`: izcelt/matēta stikla modifikācijas stils.