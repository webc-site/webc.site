# Spesifikasi kode JS

## gaya coding

- Prasaja, elegan lan efisien, nggunakake sintaks js paling modern
- Pisah fungsi sing dawa banget, lan desain antarmuka kudu kopling kurang lan kohesi dhuwur.
- Gunakake arrays + loops / forEach / map liyane lan nulis kode kurang bola-bali
- Aja nulis komentar fungsi ing kode prasaja supaya komentar gedhe banget. Logika Komplek lan kabutuhan khusus diterangake ing basa Cina olahan.
- Kode bola-bali diabstraksi dadi fungsi kanggo nyuda redundansi. Contone, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` bisa ditulis minangka `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Pranyatan variabel: Gabungke pirang-pirang pranyatan `const` berturut-turut dadi siji statement. Tinimbang nulis ing telung baris, nulis `const a=1, b=2, c=3;`
- Pangolahan asinkron: gunakake `await`, larang panggunaan `.then` panggilan berantai
- Aja kanthi otomatis nggawe kode penanganan pangecualian, aja kanthi otomatis nulis `try...catch` (`try ... catch` dijaga kanthi manual, sing ana `try catch` ora kena dibusak)
- Fungsi murni pisanan: mung nulis fungsi murni, ora tau kelas
- Gunakake fungsi panah `const funcName = () => {}` lan aja nganggo tembung kunci `function` (kajaba generator); yen sampeyan bisa nggunakake .bind kanggo ngiket paramèter, supaya nemtokake fungsi
- Gunakake maneh kode: Priksa manawa nggunakake maneh, ekstrak fungsi sing luwih cilik, lan kanthi tegas ngindhari akeh struktur kode sing padha utawa disalin.
- Akses obyek: Prioritas nggunakake tugas ngrusak kanggo ngekstrak atribut sing dibutuhake, aja bola-bali nggunakake titik-titik ing njero kanggo ngakses atribut sing jero lan bersarang, lan nggabungake keputusan rantai opsional sing bola-bali
- Aja nggunakake obyek kanggo parameter fungsi, aja nulis `{a,b,c}`, tulis `a, b, c`; yen ana akeh parameter opsional, gunakake [[jumlah item konfigurasi, item konfigurasi], [jumlah item konfigurasi, item konfigurasi],..] Ing paradigma iki, item konfigurasi ditetepake kanthi konstanta angka.
- Kanggo ngasilake multi-nilai, gunakake array `[a,b,c]` tinimbang `{a,b,c}`. Yen ana luwih saka 3 nilai bali, gunakake konstanta numerik kanggo nemtokake makna posisi.
- Ora perlu senar kanggo makili negara, nggunakake konstanta numerik kanggo nemtokake negara
- Ora ana cithakan string (``) digunakake, concatenation string (+) digunakake, kajaba kanggo impor (trep kanggo analisis statis Vite)
- Kanggo loop, yen sampeyan butuh nomer seri, gunakake `++i` tinimbang `i++`
- Ngindhari sing ora perlu`?.` lan nglarang program pertahanan
- Jeneng variabel ora perlu jamak, lan dipungkasi nganggo `_li` kanggo nunjukake dhaptar.

## Konvensi jeneng

- Jeneng kasebut ngupayakake minimalisme. Gunakake jeneng sing cendhak nanging migunani, contone: gunakake `rm` tinimbang `remove`, `delete`, `del`. Nanging, sampeyan uga kudu ngindhari ekstrem, contone: aja nganggo huruf siji `m` tinimbang `map`
- Coba gunakake mung kriya ing jeneng fungsi. Yen sampeyan bisa nggunakake tembung siji, aja nganggo rong tembung. Nouns dibayangke ing jeneng berkas. Yen sampeyan perlu kanggo nambah kriya kanggo jeneng berkas, mangga sijine tembung pisanan lan kriya pungkasan. Contone: `profileSet.js` tinimbang `setProfile.js`
- Jeneng variabel: gunakake gaya garis ngisor (snake_case), contone `user_auth_token`; yen variabel minangka fungsi, gunakake gaya jeneng cilik unta
- Jeneng fungsi: Gunakake camelCase huruf cilik (camelCase), contone `userData`
- Parameter fungsi: Yen iku fungsi callback, jenenge nganggo huruf cilik unta, kayata `onChange`
- Dhéfinisi konstanta tingkat modul nggunakake gaya garis ngisor huruf gedhe `UPPER_SNAKE_CASE`
- Aja nulis `get`, prefiks sing ora ana artine, kayata: tulis `cookieByHeader` tinimbang `getCookie`
- Konstanta tingkat global/modul: gunakake gaya garis ngisor huruf gedhe (UPPER_SNAKE_CASE), f.eks. `CODE_TO_ID`, `ID_TO_LANG`

## Mekanisme modular

- Impor: Impor fungsi kanthi akurat nalika dikarepake, nglarang ngimpor langsung kabeh modul (supaya `import * as x` utawa ngimpor obyek gedhe)
- Ekspor: Pateni ekspor obyek. Ekspor fungsi lan variabel minangka unit, kayata `export const X=1, abc=()=>{};`. Coba gabungke karo const + koma kanggo ngumumake konten sing diekspor. Yen file mung nduweni siji fungsi, gunakake `export default`
- Kajaba sampeyan kudu nelpon fungsi standar ekspor ing njero, aja nyatakake konstanta dhisik banjur ngekspor ing mburi file.
- Resolusi jalur: Nalika entuk path direktori saiki, `import.meta.dirname` kudu digunakake

## salah

- Ngindhari kesalahan senar lan gunakake const kanggo ngumumake kode kesalahan konstan.
- Yen sampeyan kudu mbalekake informasi data sing salah, gunakake [kode kesalahan, pesen kesalahan, ...] Kanthi cara iki, pesen kesalahan dudu deskripsi teks, nanging nilai numerik (kayata [FILE_OVERSIZE, file_size, max_size])
-

## Coba gunakake API sing cocog karo browser

- Enkripsi lan dekripsi: Meksa nggunakake API Web Crypto asli
- Data biner: Nalika nangani binar, coba gunakake `Uint8Array` kanthi seragam