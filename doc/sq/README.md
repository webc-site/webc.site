# WebC.site

## Çfarë është kjo?

### Kjo është një bibliotekë amtare e komponentëve të uebit

Zhvilluar bazuar në [komponentët e uebit](https://developer.mozilla.org/docs/Web/API/Web_components), është i pavarur nga koha e ekzekutimit dhe i përshtatshëm për të gjitha kornizat.

Jashtëzakonisht i optimizuar për madhësinë (një e dhjeta e madhësisë së bibliotekave të ngjashme të njohura).

Mbështet 75 gjuhë. Ju mund të importoni drejtpërdrejt js dhe css për përdorim në internet, ose të shtoni komponentë në projektin tuaj sipas nevojës për zhvillim dytësor.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ky është kuadri i zhvillimit të bibliotekës së komponentit

Ky është versioni statik i blogut të [storybook](https://storybook.js.org).

Ndërtimi i një biblioteke komponentësh mund të përmirësojë efikasitetin e zhvillimit të brendshëm të kompanisë dhe të ndërtojë një imazh të markës në rrethin teknik.

Bazuar në [webc.site](https://github.com/webc-site/webc.site), ekipet mund të krijojnë lehtësisht bibliotekat e tyre të komponentëve dhe t'i publikojnë ato në [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), etj. Komponentët e publikuar mund të korrigjohen në internet në [codepen.io](https://codepen.io) dhe [jsfiddle](https://jsfiddle.net).

Në të njëjtën kohë, korniza e integruar e përkthimit mund të realizojë shpejt ndërkombëtarizimin e komponentëve dhe dokumenteve, në mënyrë që audienca e produktit tuaj të mos jetë më e kufizuar nga gjuha.

### Kjo është një paradigmë e re e zhvillimit të front-end për epokën e inteligjencës artificiale

Korniza është e integruar `.agents/skills`, duke lejuar inteligjencën artificiale t'ju ndihmojë të zhvilloni komponentë të rinj me një klikim sipas praktikave më të mira.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Lëreni kodin e pjesës së përparme të ndryshojë nga një mal i paqëndrueshëm i programimit të atmosferës në një pjesë standarde që mund të mbahet dhe të zhvillohet në mënyrë të përsëritur për një afat të gjatë.

Duke pasur parasysh karakteristikat e zhvillimit të asistuar nga inteligjenca artificiale, ne propozuam dhe projektuam një paradigmë të re të zhvillimit të frontit:

1. **Gjithçka është një komponent ueb**
2. **Përbërësi duhet të jetë i pavarur nga lidhja e të dhënave në fund të fundit dhe ndërfaqja e të dhënave ekspozohet si një funksion kthimi i thirrjes**

Në këtë mënyrë, inteligjenca artificiale mund të gjenerojë të dhëna të rreme dhe të shfaqë gjendje të ndryshme të komponentëve në faqen demo.

Ndarja e zhvillimit të komponentëve dhe ndërfaqes së të dhënave, e kombinuar me [webc.site komponent frame](https://github.com/webc-site/webc.site) Një veçori tjetër kryesore:

**Çdo komponent mund të nisë serverin e zhvillimit në mënyrë të pavarur dhe të zhvillojë dhe korrigjojë në faqen demo **.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Kjo redukton lidhjen e përparme për zhvillimin dhe korrigjimin e çdo komponenti në `0`.

Në këtë mënyrë, mjetet e zhvillimit të asistuara nga inteligjenca artificiale ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etj.), ju mund të shijoni zhvillime të ndryshme të hapura dhe të bllokuara plotësisht automatikisht. (të dhënat e fundit, statusi i hyrjes, kursi i rrugës, etj.).

Nëse dëshironi të kontrolloni inteligjencën artificiale dhe të zvogëloni kostot dhe të rrisni efikasitetin, keni nevojë për një paradigmë të re që minimizon mjedisin e zhvillimit dhe korrigjimit të çdo komponenti.

---

# Nuk kam filluar ende të shkruaj TODO

### Biblioteka e komponentëve të uebit

#### Optimizimi përfundimtar i madhësisë

Për shembull, për komponentin e shiritit të lëvizjes virtuale, krahasoni madhësinë e skriptit dhe stilit të njohur [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) pas `gz`, siç tregohet në tabelën e mëposhtme:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Komponenti virtual i shiritit të lëvizjes së `webc.site` është vetëm `10%` i `OverlayScrollbars`.

#### Kohëzgjatja e pavarur

E ndërtuar mbi standardet [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), biblioteka e komponentëve webc.site është natyrisht agnostike në kohën e funksionimit. Pavarësisht nëse jeni duke përdorur React, Vue, Angular, Svelte ose një projekt tradicional të pastër HTML/JS, të gjithë komponentët mund të ekzekutohen drejtpërdrejt në shfletues si etiketat origjinale HTML, pa pasur nevojë për paketim dytësor për një kornizë specifike.

##### Krahasimi me shadcn

[shadcn/ui](https://ui.shadcn.com) miraton mënyrën e shpërndarjes së kodit, e cila kërkon që ju të kopjoni kodin e komponentit direkt në projektin tuaj. Ai është i lidhur ngushtë me ekosistemin React dhe zinxhirët e veglave specifike të ndërtimit (si p.sh. Tailwind CSS) dhe nuk mund të përdoret nëpër korniza. Ai gjithashtu ka kërkesa të caktuara për konfigurimin inxhinierik të projektit.

Dhe komponenti i `webc.site`:
- **Universal i ndër-kornizës**: Shkruaj një herë dhe mund të prezantohet dhe ekzekutohet drejtpërdrejt në çdo kornizë të përparme (madje edhe në një mjedis pa kornizë).
- **Varësia e mjedisit zero **: Nuk kërkohen mjete specifike paketimi ose parapërpunues CSS, thjesht importoni skedarët statikë të përpiluar dhe mund të përdoren jashtë kutisë.

## Zhvillimi dhe korrigjimi i automatizuar

### Zhvillimi dhe korrigjimi lokal

Çdo komponent i faqes së internetit mbështet nisjen e serverit të zhvillimit në mënyrë të pavarur, duke siguruar një mjedis minimal zhvillimi dhe korrigjimi:

- **Krijoni një komponent të ri**: Ekzekutoni `./sh/new.js [css|js] [emri i komponentit]` për të gjeneruar shpejt një skelet të zhvillimit të komponentit (duke përfshirë faqen demo dhe konfigurimin e ndërkombëtarizimit).
- **Debugimi i pavarur**: Ekzekutoni `./dev.js [emri i komponentit]` (ose ekzekutoni `./dev.js` drejtpërdrejt) për të nisur serverin e zhvillimit Vite dhe për të hapur automatikisht faqen demo të komponentit në shfletues. Mbështet përditësimin e nxehtë të komponentit (HMR). Për shkak se lidhjet e zhvillimit dhe të të dhënave janë të shkëputura, nuk ka lidhje zero të zhvillimit, e cila është shumë e përshtatshme për AI (si për shembull Claude Code, Google Antigravity, etj.) për të ndihmuar në zhvillimin plotësisht automatik dhe korrigjimin e shfletuesit.

### Publikimi i bibliotekës së komponentëve

#### webc dist

Procesi i paketimit dhe publikimit është shumë i automatizuar:
- **Paketimi statik i burimeve**: Ekzekutimi i `./sh/dist.js` (d.m.th., ekzekutimi i detyrës `webc dist`) mund të skanojë automatikisht të gjithë përbërësit e faqes së internetit nën `src/`, t'i kompilojë, t'i kompresojë dhe t'i nxjerrë në direktorinë `dist/`. Kjo direktori përmban skedarë JS/CSS për shpërndarje prodhimi, një sajt demo të gatshëm për vendosje në Faqet GitHub ose Faqet Cloudflare dhe skedarët e rrugëtimit të gjeneruar automatikisht `_redirects` dhe `404.html`.
- **NPM Publish**: Ekzekutoni `./sh/npmDist.js`, skripti do të trajtojë automatikisht varësitë e komponentëve, do të rrisë numrin e versionit të paketës dhe do të ekzekutojë `npm publish` me një klik pasi të përfundojë paketimi për të publikuar bibliotekën e komponentëve në NPM.

### Platforma është përgjegjëse për përkthimin

Korniza ka procese të automatizuara të përkthimit të integruara:
1. Konfiguro rregullat e përkthimit (të tilla si gjuha e burimit, gjuha e synuar dhe direktoria që do të përkthehet) në `tran.yml` në direktorinë rrënjë të projektit.
2. Përdorni mbajtësit e vendeve në komponentë ose dokumente pa pasur nevojë të kodoni disa gjuhë në kodin tuaj.
3. Ekzekutoni `./sh/tran.js` dhe motori i përkthimit do të nxjerrë automatikisht tekstin dhe do të thërrasë shërbimin e përkthimit WebC për përpunim, duke gjeneruar automatikisht hyrjet e përkthimit YAML dhe dokumentacionin README në gjuhë të ndryshme.

### variablat e mjedisit

Kur kryeni përkthim të automatizuar, duhet të konfiguroni variablat e mëposhtëm të mjedisit për të autorizuar aksesin në API të përkthimit:

- **`WEBC_SITE_TOKEN`** (ose **`WEBC_TOKEN`**): Çelësi i vërtetimit i përdorur për të hyrë në API-në e përkthimit të automatizuar `webc.site`. Mund të injektohet si një variabël mjedisi ose të shkruhet `token` në skedarin e konfigurimit `~/.config/webc.site.yml` në drejtorinë kryesore të përdoruesit lokal.