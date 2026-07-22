# Leku-markaren egoera automatikoki aldatzen duen sarrera-koadroa

- Erakutsi leku-marka sartzen ez denean
- Leku-markak leunki eskalatzen eta flotatzen dira gainean edukia idaztean
- CSS inplementazio hutsa, JavaScript menpekotasunik gabe

## Erabili demoa

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Posta elektronikoa</label>
</b>
```

## egitura-eskakizunak

- Edukiontzia: erabili `.Input` klaseko elementuak sarrera-koadroak eta etiketak ostatzeko.
- Sarrera-koadroa: `input` elementua, `placeholder=" "` (espazio bat duen leku-marka) ezarri behar da egoera-aldaketa abiarazteko.
- Aholku etiketa: `label` elementua, `input` berehala.

## estilo klasea

- `.Input`: oinarrizko estiloa, sarrera-koadroaren egitura eta trantsizio-animazioa eskaintzen ditu.
- `.Lg`: Nabarmendu/edizio izoztua aldatzeko estiloa.