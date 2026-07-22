# WebC.site

## Zer da hau?

### Hau jatorrizko web osagaien liburutegia da

[Web osagaiak](https://developer.mozilla.org/docs/Web/API/Web_components) oinarrituta garatua, exekuzio denbora independentea da eta esparru guztietarako egokia da.

Tamainarako oso optimizatua (antzeko liburutegi ezagunen tamainaren hamarren bat).

75 hizkuntza onartzen ditu. Zuzenean inporta ditzakezu js eta css linean erabiltzeko, edo osagaiak gehitu zure proiektuari bigarren mailako garapenerako behar den moduan.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Hau da osagai liburutegien garapen-esparrua

Hau [storybook](https://storybook.js.org) blogaren bertsio estatikoa da.

Osagai liburutegi bat eraikitzeak konpainiaren barne garapenaren eraginkortasuna hobetu dezake eta zirkulu teknikoan marka-irudia eraiki dezake.

[webc.site](https://github.com/webc-site/webc.site) oinarrituta, taldeek erraz sor ditzakete beren osagaien liburutegiak eta [github orria](https://pages.github.com), [cloudflare orria](https://pages.cloudflare.com) eta abarretan argitara ditzakete. Argitaratutako osagaiak linean arazketa daitezke [codepen.io](https://codepen.io) eta [jsfiddle](https://jsfiddle.net).

Aldi berean, integratutako itzulpen-esparruak osagai eta dokumentuen nazioartekotzea azkar gauzatu dezake, zure produktuen publikoa hizkuntzari lotuta egon ez dadin.

### Hau front-end garapenaren paradigma berria da adimen artifizialaren garairako

Esparrua `.agents/skills` barneratuta dago, eta adimen artifizialak praktika onen arabera osagai berriak garatzen lagun diezazuke.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Utzi front-end kodea epe luzera mantendu eta modu iteratiboki eboluzionatu daitekeen atal estandar batera aldatzea.

Adimen artifizialak lagundutako garapenaren ezaugarriak ikusita, front-end garapen paradigma berri bat proposatu eta diseinatu genuen:

1. **Dena web osagai bat da**
2. **Osagaiak back-end datu-loturatik independentea izan behar du, eta datu-interfazea dei-itzulpen funtzio gisa azaltzen da**

Modu honetan, adimen artifizialak datu faltsuak sor ditzake eta osagaien egoera desberdinak erakutsi demo orrian.

Osagaien garapena eta datuen interfazea bereiztea, [webc.site osagaien esparrua](https://github.com/webc-site/webc.site) Beste ezaugarri nagusi bat:

**Osagai bakoitzak garapen zerbitzaria modu independentean abiarazi dezake eta demo orrian garatu eta araztea**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Honek osagai bakoitzaren garapenerako eta arazketarako frontend esteka `0`ra murrizten du.

Modu honetan, adimen artifizialak lagundutako garapen tresnak ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Kursorea](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) eta abar), erabat automatikoki garatzea, datuak eta arakatzaileak jada ez blokeatzeko faktore irekiz gozatu dezakezu. saioa hasteko egoera, bideen bideratzea, etab.).

Adimen artifiziala kontrolatu eta kostuak murriztu eta eraginkortasuna areagotu nahi baduzu, osagai bakoitzaren garapen eta arazketa ingurunea minimizatzen duen paradigma berri bat behar duzu.

---

# Oraindik ez naiz TODO idazten hasi

### Web osagaien liburutegia

#### Azken tamainaren optimizazioa

Esate baterako, korritze-barra birtualeko osagairako, alderatu [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) script eta estilo ezagunaren tamaina `gz` ondorengo taulan agertzen den moduan:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

`webc.site`ren korritze-barra birtualaren osagaia `OverlayScrollbars`ren `10%` baino ez da.

#### Runtime independentea

[Web osagaiak](https://developer.mozilla.org/docs/Web/API/Web_components) estandarretan eraikia, webc.site osagaien liburutegia exekuzio-denbora ez da berez. React, Vue, Angular, Svelte edo ohiko HTML/JS proiektu hutsa erabiltzen ari zaren ala ez, osagai guztiak zuzenean arakatzailean exekutatu daitezke jatorrizko HTML etiketak bezala, esparru zehatz baterako bigarren paketatzerik beharrik gabe.

##### Shadcn-ekin alderatzea

[shadcn/ui](https://ui.shadcn.com) kodea banatzeko modua hartzen du, eta horrek osagaien kodea zuzenean zure proiektura kopiatzea eskatzen du. React ekosistemari eta eraikuntza-tresna kate espezifikoei (adibidez, Tailwind CSS) oso lotuta dago, eta ezin da esparru guztietan erabili. Proiektuaren ingeniaritza konfiguratzeko baldintza batzuk ere baditu.

Eta `webc.site`-ren osagaia:
- **Cross-framework unibertsala**: behin idatzi eta zuzenean sartu eta exekutatu daiteke edozein frontend esparrutan (baita markorik gabeko ingurune batean ere).
- **Inguruaren zero menpekotasuna**: Ez da ontziratzeko tresna zehatzik edo CSS aurreprozesadorerik behar, konpilatutako fitxategi estatikoak inportatu besterik ez dago eta kutxatik kanpo erabil daiteke.

## Garapen eta arazketa automatizatua

### Tokiko garapena eta arazketa

Web-orrietako osagai bakoitzak garapen-zerbitzaria modu independentean abiaraztea onartzen du, garapen eta arazketa-ingurune minimo bat eskainiz:

- **Sortu osagai berri bat**: Exekutatu `./sh/new.js [css|js] [osagaiaren izena]` osagaien garapenaren hezurdura azkar sortzeko (demo orria eta nazioartekotze konfigurazioa barne).
- **Arazte independentea**: Exekutatu `./dev.js [osagaiaren izena]` (edo exekutatu `./dev.js` zuzenean) Vite garapen zerbitzaria abiarazteko eta osagaiaren demo orria automatikoki irekitzeko arakatzailean. Osagaien eguneraketa beroa (HMR) onartzen du. Garapena eta datu-loturak desakoplatuta daudenez, zero garapeneko front-end esteka dago, oso egokia AIrako (adibidez, Claude Code, Google Antigravity, etab.) garapen guztiz automatikoan eta arakatzailearen arazketan laguntzeko.

### Osagaien liburutegia argitaratu

#### webc dist

Enbalatzeko eta argitaratzeko prozesua oso automatizatuta dago:
- **Baliabide estatikoen bilketa**: `./sh/dist.js` exekutatzen (hau da, `webc dist` zeregina exekutatzen baduzu) `src/` azpian dauden web-orrietako osagai guztiak automatikoki eskaneatu, konpilatu, konprimitu eta `dist/` direktoriora atera ditzake. Direktorio honek produkzioa banatzeko JS/CSS fitxategiak ditu, GitHub Pages edo Cloudflare Pages-etan hedatzeko prest dagoen demo gune bat eta automatikoki sortutako `_redirects` eta `404.html` bideratze-fitxategiak.
- **NPM Publish**: Exekutatu `./sh/npmDist.js`, script-ak automatikoki kudeatuko ditu osagaien mendekotasunak, paketearen bertsio-zenbakia handituko du eta `npm publish` exekutatu egingo du klik batekin paketea osatu ondoren osagaien liburutegia NPM-n argitaratzeko.

### Plataformak itzulpenaz arduratzen da

Esparruak itzulpen automatikoko prozesuak ditu:
1. Konfiguratu itzulpen-arauak (adibidez, iturburu-hizkuntza, xede-hizkuntza eta itzuli beharreko direktorioa) proiektuaren erro-direktorioan `tran.yml` atalean.
2. Erabili leku-markak osagai edo dokumentuetan zure kodean hainbat hizkuntza gogor kodetu behar izan gabe.
3. Exekutatu `./sh/tran.js`, eta itzulpen-motorrak testua automatikoki aterako du eta WebC itzulpen-zerbitzura deituko du prozesatzeko, YAML itzulpen-sarrerak eta README dokumentazioa hainbat hizkuntzatan sortuz automatikoki.

### ingurune-aldagaiak

Itzulpen automatikoa egiterakoan, ingurune-aldagai hauek konfiguratu behar dituzu itzulpen APIrako sarbidea baimentzeko:

- **`WEBC_SITE_TOKEN`** (edo **`WEBC_TOKEN`**): `webc.site` Automated Translation APIra sartzeko erabiltzen den autentifikazio-gakoa. Inguruko aldagai gisa txerta daiteke edo `token` idatzi daiteke erabiltzailearen etxeko direktorioko `~/.config/webc.site.yml` konfigurazio fitxategian.