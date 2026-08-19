# md/streamRender.js

Markdown streaming rendering

## default(container, source)

Streaming rendering teks Markdown menyang wadhah DOM sing ditemtokake, ndhukung efek kursor mesin tik lan nggulung otomatis

parameter:
- `container` : DOM unsur wadah hosting isi render
- `source` : Sumber data teks ReadableStream

Nilai bali:

- `cancel` : Fungsi kanggo mungkasi rendering lan maca stream data
- `setStop` : Fungsi kanggo nyetel apa arep ngaso gulung otomatis
  - paramèter
    - `val` : Nilai boolean arep ngaso utawa ora