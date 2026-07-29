---
name: jsdoc
description: dokumen src/js digawe kanthi otomatis
---

## Mlaku-mlaku

1. Jalanake `./sh/jsDoc.js` kanggo ndeleng fungsi kanthi dokumentasi sing ilang (yen ora ana output, ora perlu ditambahake).
2. Miturut dhaptar file output, waca dokumen lan kode sing wis ana siji-sijine lan jangkepi (proses kanthi urut lan rusak siji-siji).

## Syarat dokumentasi

Yen ekspor minangka fungsi, tulisen
- Parameter lan nilai bali:
  - Mung nulis deskripsi sing cocog yen ana paramèter utawa nilai bali, yen ora, aja nulis.
  - Parameter dienal nggunakake dhaptar unordered.
  - Yen nilai bali minangka array, gunakake dhaptar sing ora diurutake kanggo njlèntrèhaké siji-siji (yen ora, tulis langsung, `Return value: description`, mung siji baris).
  - Yen paramèter utawa nilai bali minangka fungsi, gunakake dhaptar sub-unordered kanggo njlèntrèhaké paramèter lan nilai bali (yen ora ana, aja nulis).

Yen ekspor iku pancet, introduce apa iku, mung siji baris

- Gunakake basa sing ringkes lan profesional lan aja nganggo adjectives.
- Revisi dokumen sing wis ana, aja rampung nulis ulang

## format cithakan

Tulis saben jeneng mung sapisan kanggo ngindhari duplikasi lan coba tulisake kanthi jelas ing siji baris. Format referensi kaya ing ngisor iki

```
# jeneng berkas

## Jeneng fungsi (parameter)

Katrangan panggunaan

parameter:
- `xx` : Tujuan
  - paramèter
    - `a` : Tujuan
  - Nilai bali: katrangan

Nilai bali: Katrangan
```