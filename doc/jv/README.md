# WebC.site

## Apa iki?

### Iki minangka perpustakaan komponen web asli

Dikembangaké adhedhasar [komponen web](https://developer.mozilla.org/docs/Web/API/Web_components), iku runtime sawijining lan cocok kanggo kabeh frameworks.

Dioptimalake banget kanggo ukuran (ukuran sepersepuluh saka perpustakaan populer sing padha).

Ndhukung 75 basa. Sampeyan bisa langsung ngimpor js lan css kanggo panggunaan online, utawa nambah komponen menyang proyek sing dibutuhake kanggo pangembangan sekunder.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Iki minangka kerangka pangembangan perpustakaan komponen

Iki minangka versi blog statis saka [buku cerita](https://storybook.js.org).

Mbangun perpustakaan komponen bisa nambah efisiensi pangembangan internal perusahaan lan mbangun citra merek ing bunder teknis.

Adhedhasar [webc.site](https://github.com/webc-site/webc.site), tim bisa nggawe perpustakaan komponen dhewe kanthi gampang lan nerbitake menyang [kaca github](https://pages.github.com), [kaca cloudflare](https://pages.cloudflare.com), lsp. Komponen sing diterbitake bisa didebug online ing [codepen.io](https://codepen.io) lan [jsfiddle](https://jsfiddle.net).

Ing wektu sing padha, kerangka terjemahan sing dibangun kanthi cepet bisa nyadari internasionalisasi komponen lan dokumen, supaya pamirsa produk sampeyan ora kaiket maneh karo basa.

### Iki minangka paradigma anyar pangembangan front-end kanggo jaman intelijen buatan

Kerangka kasebut dibangun ing `.agents/skills`, ngidini intelijen buatan mbantu sampeyan ngembangake komponen anyar kanthi siji klik miturut praktik paling apik.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Ayo kode ngarep-mburi ngganti saka gunung sampah unsustainable program atmosfer menyang bagean standar sing bisa maintained lan iteratively ngalami évolusi liwat long term.

Amarga karakteristik pangembangan sing dibantu intelijen buatan, kita ngusulake lan ngrancang paradigma pangembangan ngarep anyar:

1. **Kabeh minangka komponen web**
2. **Komponèn kudu bebas saka pranala data mburi, lan antarmuka data kapapar minangka fungsi callback**

Kanthi cara iki, intelijen buatan bisa ngasilake data palsu lan nampilake macem-macem negara komponen ing kaca demo.

Pemisahan pangembangan komponen lan antarmuka data, digabungake karo [kerangka komponen webc.site](https://github.com/webc-site/webc.site) Fitur utama liyane:

**Saben komponen bisa miwiti server pangembangan kanthi mandiri lan ngembangake lan debug ing kaca demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Iki nyuda link ngarep-mburi kanggo pangembangan lan debugging saben komponen dadi `0`.

Kanthi cara iki, alat pangembangan dibantu intelijen buatan ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), sampeyan bisa nikmati pangembangan kanthi otomatis lan ora ana maneh browser sing diblokir kanthi otomatis, ora ana maneh debugging data, lan ora ana maneh browser sing diblokir. status, rute dalan, lsp).

Yen sampeyan pengin ngontrol intelijen buatan lan nyuda biaya lan nambah efisiensi, sampeyan butuh paradigma anyar sing nyilikake lingkungan pangembangan lan debugging saben komponen.

---

# Aku durung miwiti nulis TODO

### Pustaka komponen web

#### Optimasi ukuran Ultimate

Contone, kanggo komponen gulung bar virtual, mbandhingake ukuran skrip lan gaya [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) sing populer sawise `gz`, kaya sing ditampilake ing tabel ing ngisor iki:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

`webc.site`komponen virtual scroll bar mung `OverlayScrollbars``10%`.

#### Runtime independen

Dibangun ing standar [Komponèn Web](https://developer.mozilla.org/docs/Web/API/Web_components), perpustakaan komponen webc.site alamiah runtime-agnostik. Apa sampeyan nggunakake React, Vue, Angular, Svelte, utawa proyek HTML/JS murni tradisional, kabeh komponen bisa langsung mlaku ing browser kaya tag HTML asli, tanpa perlu kemasan sekunder kanggo kerangka tartamtu.

##### Perbandingan karo shadcn

[shadcn/ui](https://ui.shadcn.com) nganggo mode distribusi kode, sing mbutuhake sampeyan nyalin kode komponen langsung menyang proyek sampeyan dhewe. Iki kaiket banget karo ekosistem React lan rantai alat konstruksi khusus (kayata Tailwind CSS), lan ora bisa digunakake ing kerangka kerja. Uga nduweni syarat tartamtu kanggo konfigurasi teknik proyek.

Lan komponen `webc.site`:
- **Cross-framework universal**: Tulis sapisan lan bisa langsung ngenalaken lan mbukak ing sembarang framework ngarep-mburi (malah lingkungan framework-free).
- **Ketergantungan nol lingkungan**: Ora ana piranti kemasan khusus utawa preprocessors CSS sing dibutuhake, mung ngimpor file statis sing wis dikompilasi lan bisa digunakake metu saka kothak.

## Pangembangan lan debugging otomatis

### Pangembangan lan debugging lokal

Saben komponen kaca web ndhukung miwiti server pangembangan kanthi mandiri, nyedhiyakake lingkungan pangembangan lan debugging minimal:

- **Gawe komponèn anyar**: Jalanake `./sh/new.js [css|js] [jeneng komponen]` kanggo nggawe kerangka pangembangan komponen kanthi cepet (kalebu kaca demo lan konfigurasi internasionalisasi).
- **Debugging independen**: Run `./dev.js [component name]` (utawa mbukak `./dev.js` langsung) kanggo miwiti server pangembangan Vite lan kanthi otomatis mbukak kaca demo komponen ing browser. Ndhukung nganyari komponen panas (HMR). Amarga pranala pangembangan lan data dipisahake, ana link front-end pangembangan nol, sing cocok banget kanggo AI (kayata Claude Code, Google Antigravity, lan liya-liyane) kanggo ngewangi pangembangan otomatis lan debugging browser.

### Nerbitake perpustakaan komponen

#### webc dist

Proses pengemasan lan penerbitan otomatis banget:
- **Paket sumber daya statis**: Mlaku `./sh/dist.js` (yaiku, nglakokaké `webc dist` tugas) bisa kanthi otomatis mindai kabeh komponen kaca web ing `src/`, ngumpulake, kompres lan output menyang direktori `dist/`. Direktori iki ngemot file JS/CSS kanggo distribusi produksi, situs demo sing siap disebarake menyang GitHub Pages utawa Cloudflare Pages, lan kanthi otomatis nggawe file rute `_redirects` lan `404.html`.
- **NPM Publish**: Run `./sh/npmDist.js`, script bakal kanthi otomatis nangani dependensi komponen, nambah nomer versi paket, lan nglakokaké `npm publish` karo siji klik sawise packaging wis rampung kanggo nerbitaké perpustakaan komponen kanggo NPM.

### Platform kasebut tanggung jawab kanggo terjemahan

Kerangka kasebut nduweni proses terjemahan otomatis sing dibangun:
1. Konfigurasi aturan terjemahan (kayata basa sumber, basa target lan direktori sing arep diterjemahake) ing `tran.yml` ing direktori root project.
2. Gunakake placeholder ing komponen utawa dokumen tanpa kudu hardcode pirang-pirang basa ing kode sampeyan.
3. Jalanake `./sh/tran.js`, lan mesin terjemahan bakal kanthi otomatis ngekstrak teks lan nelpon layanan terjemahan WebC kanggo diproses, kanthi otomatis ngasilake entri terjemahan YAML lan dokumentasi README ing macem-macem basa.

### variabel lingkungan

Nalika nindakake terjemahan otomatis, sampeyan kudu ngatur variabel lingkungan ing ngisor iki kanggo ngidini akses menyang API terjemahan:

- **`WEBC_SITE_TOKEN`** (utawa **`WEBC_TOKEN`**): Kunci otentikasi sing digunakake kanggo ngakses `webc.site` Automated Translation API. Bisa disuntikake minangka variabel lingkungan utawa ditulis `token` ing berkas konfigurasi `~/.config/webc.site.yml` ing direktori ngarep pangguna lokal.