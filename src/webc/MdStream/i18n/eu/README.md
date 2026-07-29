# Markdown testuaren erreprodukzioa erreproduzitzea

- Aztertu eta errendatu Markdown modu mailakatuan
- Kolaboratu korritze-elementu nagusiarekin, edukia pantailatik gainditzen denean automatikoki korritzeko
- Pausatu korritze automatikoa klik egitean edo gora korritzean, berreki ezazu behera korritzean
- Bistaratu automatikoki idazketaren egoera-adierazleak

## Erabili demoa

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Datuak errendatzea itzultzen den sorgailu asinkronoaren funtzioaren bidez
el.gen = async function* () {
  eman "# titulua\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    Ilde "- th" + i + " term\n";
  }
};
</script>
```

## jabetza

| atributuaren izena | mota | ilustratu |
| :--- | :--- | :--- |
| `gen` | `Function` | Iterador/sorgailu asinkrono bat itzultzen duen funtzioa, edukia garbitu eta berriro errendatzen duena ezarri ondoren |

## estiloa

| Klasea/Etiketa | ilustratu |
| :--- | :--- |
| `Md` | Klasea automatikoki gehitzen zaio osagaiari muntatzean, ezarri Markdown estiloa |
| `i.T` | Idazketa egoeraren adierazlea automatikoki gehitzen da amaieran datuak sartzerakoan |