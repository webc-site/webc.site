# Kutia hyrëse që ndërron automatikisht gjendjen e mbajtësit të vendndodhjes

- Shfaq mbajtësin e vendit kur nuk është futur
- Vendmbajtësit shkallëzohen pa probleme dhe notojnë lart kur shkruani përmbajtje
- Zbatim i pastër CSS, pa varësi nga JavaScript

## Përdorni demonstrimin

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## kërkesat strukturore

- Container: Përdorni elementë të klasës `.Input` për të pritur kutitë e hyrjes dhe etiketat.
- Kutia e hyrjes: elementi `input`, `placeholder=" "` (një vendmbajtes që përmban një hapësirë) duhet të vendoset për të aktivizuar çelësin e gjendjes.
- Etiketa këshillë: elementi `label`, menjëherë pas `input`.

## klasë stili

- `.Input`: Stili bazë, që siguron strukturën e kutisë së hyrjes dhe animacionin e tranzicionit.
- `.Lg`: Stili i modifikimit të xhamit të theksuar/të ngrirë.