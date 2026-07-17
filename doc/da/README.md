# WebC.site

## Hvad er det her?

### Dette er et indbygget webkomponentbibliotek

Udviklet baseret på [webkomponenter](https://developer.mozilla.org/docs/Web/API/Web_components), er den runtime-uafhængig og egnet til alle frameworks.

Ekstremt optimeret til størrelse (en tiendedel af størrelsen af ​​lignende populære biblioteker).

Understøtter 75 sprog. Du kan importere js og css direkte til onlinebrug eller tilføje komponenter til dit projekt efter behov for sekundær udvikling.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dette er komponentbibliotekets udviklingsramme

Dette er den statiske blogversion af [historiebog](https://storybook.js.org).

Opbygning af et komponentbibliotek kan forbedre virksomhedens interne udviklingseffektivitet og opbygge et brandimage i den tekniske cirkel.

Baseret på [webc.site](https://github.com/webc-site/webc.site), kan teams nemt oprette deres egne komponentbiblioteker og udgive dem til [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) osv. De publicerede komponenter kan fejlsøges online på [codepen.io](https://codepen.io) og [jsfiddle](https://jsfiddle.net).

Samtidig kan den indbyggede oversættelsesramme hurtigt realisere internationaliseringen af ​​komponenter og dokumenter, så dit produktpublikum ikke længere er bundet af sprog.

### Dette er et nyt paradigme for frontend-udvikling til æraen med kunstig intelligens

Rammerne er indbygget `.agents/skills`, hvilket tillader kunstig intelligens at hjælpe dig med at udvikle nye komponenter med et enkelt klik i henhold til bedste praksis.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Lad front-end-koden ændre sig fra et uholdbart affaldsbjerg af atmosfæreprogrammering til en standarddel, der kan vedligeholdes og iterativt udvikles på lang sigt.

I lyset af egenskaberne ved kunstig intelligens-assisteret udvikling foreslog og designede vi et nyt front-end-udviklingsparadigme:

1. **Alt er en webkomponent**
2. **Komponenten skal være uafhængig af backend-datalinket, og datagrænsefladen er eksponeret som en tilbagekaldsfunktion**

På denne måde kan kunstig intelligens generere falske data og vise komponenternes forskellige tilstande på demosiden.

Adskillelse af komponentudvikling og datagrænseflade, kombineret med [webc.site component framework](https://github.com/webc-site/webc.site) En anden vigtig funktion:

**Hver komponent kan starte udviklingsserveren uafhængigt og udvikle og debugge på demosiden**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dette reducerer frontend-linket til udvikling og fejlretning af hver komponent til `0`.

På denne måde, kunstig intelligens-assisteret udviklingsværktøjer ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) osv.), kan du nyde fuldautomatisk udvikling af browsere og ikke længere rodfæste, blokering af browsere, (backend-data, login-status, sti-routing osv.).

Hvis du vil kontrollere kunstig intelligens og reducere omkostningerne og øge effektiviteten, har du brug for et nyt paradigme, der minimerer udviklings- og fejlfindingsmiljøet for hver komponent.

---

# Jeg er ikke begyndt at skrive TODO endnu

### Web komponent bibliotek

#### Ultimativ størrelsesoptimering

For den virtuelle rullepanelkomponent skal du f.eks. sammenligne størrelsen af ​​det populære [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) script og stil efter `gz`, som vist i følgende tabel:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 f.Kr    |

`webc.site`s virtuelle rullepanelkomponent er kun `OverlayScrollbars`s `10%`.

#### Runtime uafhængig

Bygget på standarder [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), er webc.site-komponentbiblioteket naturligvis runtime-agnostisk. Uanset om du bruger React, Vue, Angular, Svelte eller et traditionelt rent HTML/JS-projekt, kan alle komponenter køre direkte i browseren som native HTML-tags uden behov for sekundær emballage til et specifikt framework.

##### Sammenligning med shadcn

[shadcn/ui](https://ui.shadcn.com) anvender kodedistributionstilstanden, som kræver, at du kopierer komponentkoden direkte ind i dit eget projekt. Det er tæt bundet til React-økosystemet og specifikke byggeværktøjskæder (såsom Tailwind CSS), og kan ikke bruges på tværs af rammer. Det har også visse krav til projektingeniørkonfiguration.

Og komponenten af ​​`webc.site`:
- **Universal på tværs af rammer**: Skriv én gang og kan introduceres direkte og køres i enhver frontend-ramme (selv et rammefrit miljø).
- **Miljø nul afhængighed**: Der kræves ingen specifikke pakkeværktøjer eller CSS-forbehandlere, bare importer de kompilerede statiske filer, og det kan bruges ud af æsken.

## Automatiseret udvikling og debugging

### Lokal udvikling og debugging

Hver websidekomponent understøtter start af udviklingsserveren uafhængigt, hvilket giver et minimalt udviklings- og fejlfindingsmiljø:

- **Opret en ny komponent**: Kør `./sh/new.js [css|js] [komponentnavn]` for hurtigt at generere et komponentudviklingsskelet (inklusive demoside og internationaliseringskonfiguration).
- **Uafhængig debugging**: Kør `./dev.js [komponentnavn]` (eller kør `./dev.js` direkte) for at starte Vite-udviklingsserveren og automatisk åbne komponentens demoside i browseren. Understøtter component hot update (HMR). Fordi udvikling og datalinks er afkoblet, er der ingen udviklingsfront-end-link, hvilket er meget velegnet til AI (såsom Claude Code, Google Antigravity osv.) til at hjælpe med fuldautomatisk udvikling og browserfejlretning.

### Udgiv komponentbibliotek

#### webc dist

Pakke- og publiceringsprocessen er stærkt automatiseret:
- **Statisk ressourcepakke**: Kørsel af `./sh/dist.js` (det vil sige udførelse af `webc dist` opgaven) kan automatisk scanne alle websidekomponenter under `src/`, kompilere, komprimere og udlæse dem til `dist/` mappen. Denne mappe indeholder JS/CSS-filer til produktionsdistribution, et demo-site klar til udrulning til GitHub Pages eller Cloudflare Pages og automatisk genererede `_redirects` og `404.html` routingfiler.
- **NPM Publish**: Kør `./sh/npmDist.js`, scriptet vil automatisk håndtere komponentafhængigheder, øge pakkens versionsnummer og udføre `npm publish` med et enkelt klik, efter at pakningen er fuldført, for at udgive komponentbiblioteket til NPM.

### Platformen er ansvarlig for oversættelse

Rammen har indbyggede automatiserede oversættelsesprocesser:
1. Konfigurer oversættelsesregler (såsom kildesprog, målsprog og bibliotek, der skal oversættes) i `tran.yml` i projektets rodbibliotek.
2. Brug pladsholdere i komponenter eller dokumenter uden at skulle hardkode flere sprog i din kode.
3. Kør `./sh/tran.js`, og oversættelsesmaskinen vil automatisk udtrække teksten og kalde WebC-oversættelsestjenesten til behandling, og automatisk generere YAML-oversættelsesindgange og README-dokumentation på forskellige sprog.

### miljøvariabler

Når du udfører automatiseret oversættelse, skal du konfigurere følgende miljøvariabler for at godkende adgang til oversættelses-API'en:

- **`WEBC_SITE_TOKEN`** (eller **`WEBC_TOKEN`**): Godkendelsesnøgle, der bruges til at få adgang til `webc.site` Automated Translation API. Kan injiceres som en miljøvariabel eller skrives `token` i `~/.config/webc.site.yml` konfigurationsfilen i den lokale brugers hjemmemappe.