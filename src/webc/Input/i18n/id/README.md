# Kotak masukan yang secara otomatis mengganti status placeholder

- Tampilkan placeholder saat tidak dimasukkan
- Placeholder dengan lancar menskalakan dan melayang di atas saat mengetik konten
- Implementasi CSS murni, tidak ada ketergantungan JavaScript
- Default dengan latar belakang kaca buram dan transisi hover

## Gunakan demonya

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## persyaratan struktural

- Wadah: Gunakan elemen kelas `.Input` untuk menghosting kotak masukan dan label.
- Kotak masukan: elemen `input`, `placeholder=" "` (placeholder berisi spasi) harus disetel untuk memicu peralihan status.
- Tag tip: elemen `label`, tepat setelah `input`.

## kelas gaya

- `.Input`: Gaya dasar, menyediakan struktur kotak masukan dan animasi transisi.
- `.Lg`: Sorotan/gaya modifikasi kaca buram.