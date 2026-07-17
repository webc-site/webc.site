# Toast.js

Gesaan mesej pop timbul roti bakar

## toast(render, timeout)

Tunjukkan tetingkap pop timbul gesaan standard

parameter:
- `render` : Fungsi pemaparan, digunakan untuk menyesuaikan kandungan pop timbul
  - parameter
    - `el` : Elemen DOM tetingkap timbul
- `timeout` : Tunda saat untuk penutupan automatik, lalai 9, tiada penutupan automatik apabila 0

Nilai pulangan: Elemen DOM tetingkap timbul

## toastErr(render, timeout)

Tunjukkan pop timbul mesej ralat

parameter:
- `render` : Fungsi pemaparan, digunakan untuk menyesuaikan kandungan pop timbul
  - parameter
    - `el` : Elemen DOM tetingkap timbul
- `timeout` : Tunda saat untuk penutupan automatik, lalai 9, tiada penutupan automatik apabila 0

Nilai pulangan: Elemen DOM tetingkap timbul ralat