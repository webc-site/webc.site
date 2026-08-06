# md/streamRender.js

Markdown oqimli renderlash

## default(container, source)

Belgilangan DOM konteyneriga Markdown matnini oqimli ko'rsatish, yozuv mashinkasi kursor effektlarini va avtomatik aylantirishni qo'llab-quvvatlash

parametr:
- `container` : ko'rsatilgan kontentni joylashtiradigan DOM konteyner elementi
- `source` : ReadableStream matnli maʼlumotlar manbai

Qaytish qiymati:

- `cancel` : Renderlash va ma'lumotlar oqimini o'qishni to'xtatish funksiyasi
- `setStop` : Avtomatik aylantirishni to'xtatib turish yoki to'xtatib turish funksiyasi
  - parametr
    - `val` : Pauza qilinadimi yoki yo'qmi mantiqiy qiymat