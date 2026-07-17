# Kothak input sing kanthi otomatis ngalih status placeholder

- Tampilake placeholder nalika ora mlebu
- Placeholder ukurane lancar lan ngambang ing ndhuwur nalika ngetik konten
- Implementasi CSS murni, ora ana dependensi JavaScript

## Gunakake demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## syarat struktural

- Wadah: Gunakake unsur kelas `.Input` kanggo dadi tuan rumah kothak lan label input.
- Kothak input: `input` elemen, `placeholder=" "` (placeholder sing ngemot spasi) kudu disetel kanggo micu switch negara.
- Tag tip: `label` elemen, langsung sawise `input`.

## kelas gaya

- `.Input`: Gaya dhasar, nyedhiyakake struktur kothak input lan animasi transisi.
- `.Lg`: Gaya modifikasi kaca sorot/beku.