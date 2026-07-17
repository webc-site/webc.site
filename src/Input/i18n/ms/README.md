# Kotak input yang menukar keadaan pemegang tempat secara automatik

- Tunjukkan ruang letak apabila tidak dimasukkan
- Pemegang tempat dengan lancar berskala dan terapung di atas apabila menaip kandungan
- Pelaksanaan CSS tulen, tiada kebergantungan JavaScript
- Lalai dengan latar belakang kaca beku dan peralihan tuding

## Gunakan demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mel</label>
</b>
```

## keperluan struktur

- Bekas: Gunakan elemen kelas `.Input` untuk mengehoskan kotak input dan label.
- Kotak input: `input` elemen, `placeholder=" "` (pemegang tempat yang mengandungi ruang) mesti ditetapkan untuk mencetuskan suis keadaan.
- Teg petua: `label` elemen, sejurus selepas `input`.

## kelas gaya

- `.Input`: Gaya asas, menyediakan struktur kotak input dan animasi peralihan.
- `.Lg`: Gaya pengubahsuaian kaca serlahkan/fros.