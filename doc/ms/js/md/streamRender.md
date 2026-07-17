# md/streamRender.js

Penstriman penurunan harga

## default(container, source)

Menstrim pemaparan teks Markdown ke dalam bekas DOM yang ditentukan, menyokong kesan kursor mesin taip dan menatal automatik

parameter:
- `container` : Pengehosan elemen kontena DOM kandungan yang diberikan
- `source` : Sumber data teks ReadableStream

Nilai pulangan:

- `cancel` : Berfungsi untuk menghentikan pemaparan dan pembacaan strim data
- `setStop` : Fungsi untuk menetapkan sama ada hendak menjeda tatal automatik
  - parameter
    - `val` : Nilai Boolean sama ada hendak dijeda atau tidak