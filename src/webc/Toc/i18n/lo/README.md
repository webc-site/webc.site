# Directory Navigation Component

- ແຜນຜັງ Flex ແນວຕັ້ງ
- ຮອງຮັບວັດຈະນານຸກົມເພື່ອຜ່ານຂໍ້ມູນໄດເລກະທໍລີ
- ຄລິກເພື່ອໂຫຼດຂໍ້ຄວາມ Markdown ໂດຍອັດຕະໂນມັດ
- ກຳລັງໂຫຼດສະຖານະສະແດງພາບເຄື່ອນໄຫວ Ing

## ໃຊ້ຕົວຢ່າງ

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "ໃຊ້ອົງປະກອບ"
};
</script>
```

## ການໂຕ້ຕອບ

### ຄຸນສົມບັດແລະວິທີການ

- `toc.li`: ກໍານົດວັດຖຸໄດເລກະທໍລີ ຫຼືລາຍການລາຍການ, ເຊັ່ນ `{ key: title }`
- `toc.mdUrl`: ຕັ້ງຟັງຊັນການສ້າງ URL ການຮ້ອງຂໍ `(key, lang) => url` ຫຼືສະຕຣິງນຳໜ້າ
- `toc.target`: ຕັ້ງຄ່າ ຫຼືເຊື່ອມໂຍງໂຫນດເນື້ອຫາເປົ້າໝາຍ (ເຊັ່ນ: `c-md`), ອັດຕະໂນມັດຈັດການ `ing`ການລໍຖ້າ ແລະການຕື່ມເນື້ອຫາ
- `toc.load(key)`: ກະຕຸ້ນການໂຫຼດກະແຈທີ່ສອດຄ້ອງກັນດ້ວຍຕົນເອງ