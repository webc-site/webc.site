# md/streamRender.js

Render streaming penurunan harga

## default(container, source)

Streaming rendering teks Markdown ke dalam wadah DOM yang ditentukan, mendukung efek kursor mesin tik dan pengguliran otomatis

parameter:
- `container` : Elemen kontainer DOM yang menghosting konten yang dirender
- `source` : Sumber data teks ReadableStream

Nilai pengembalian:

- `cancel` : Berfungsi untuk menghentikan rendering dan pembacaan aliran data
- `setStop` : Berfungsi untuk mengatur apakah akan menjeda pengguliran otomatis
  - parameter
    - `val` : Nilai Boolean apakah akan dijeda atau tidak