# WebC.site

## Hva er dette?

### Dette er et innebygd nettkomponentbibliotek

Utviklet basert på [webkomponenter](https://developer.mozilla.org/docs/Web/API/Web_components), er den kjøretidsuavhengig og egnet for alle rammeverk.

Ekstremt optimalisert for størrelse (en tidel av størrelsen på lignende populære biblioteker).

Støtter 75 språk. Du kan importere js og css direkte for online bruk, eller legge til komponenter til prosjektet ditt etter behov for sekundær utvikling.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dette er rammeverket for utvikling av komponentbiblioteket

Dette er den statiske bloggversjonen av [historiebok](https://storybook.js.org).

Å bygge et komponentbibliotek kan forbedre bedriftens interne utviklingseffektivitet og bygge et merkevarebilde i den tekniske sirkelen.

Basert på [webc.site](https://github.com/webc-site/webc.site), kan team enkelt lage sine egne komponentbiblioteker og publisere dem til [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), etc. De publiserte komponentene kan feilsøkes online på [codepen.io](https://codepen.io) og [jsfiddle](https://jsfiddle.net).

Samtidig kan det innebygde oversettelsesrammeverket raskt realisere internasjonaliseringen av komponenter og dokumenter, slik at produktpublikummet ikke lenger er bundet av språk.

### Dette er et nytt paradigme for front-end-utvikling for tiden med kunstig intelligens

Rammeverket er innebygd `.agents/skills`, slik at kunstig intelligens kan hjelpe deg med å utvikle nye komponenter med ett klikk i henhold til beste praksis.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

La front-end-koden endres fra et uholdbart søppelfjell av atmosfæreprogrammering til en standarddel som kan vedlikeholdes og iterativt utvikles over lang sikt.

I lys av egenskapene til kunstig intelligens-assistert utvikling, foreslo og designet vi et nytt front-end utviklingsparadigme:

1. **Alt er en nettkomponent**
2. **Komponenten må være uavhengig av backend-datalinken, og datagrensesnittet er eksponert som en tilbakeringingsfunksjon**

På denne måten kan kunstig intelligens generere falske data og vise ulike tilstander av komponenter på demosiden.

Separasjon av komponentutvikling og datagrensesnitt, kombinert med [webc.site komponentrammeverk](https://github.com/webc-site/webc.site) En annen viktig funksjon:

**Hver komponent kan starte utviklingsserveren uavhengig og utvikle og feilsøke på demosiden**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dette reduserer grensesnittkoblingen for utvikling og feilsøking av hver komponent til `0`.

På denne måten, kunstig intelligens-assistert utviklingsverktøy ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) osv.), kan du glede deg over helautomatisk utvikling av nettleser og ikke lenger rotete blokkering, og ikke lenger rotete blokkering, (backend-data, påloggingsstatus, sti-ruting, etc.).

Hvis du ønsker å kontrollere kunstig intelligens og redusere kostnader og øke effektiviteten, trenger du et nytt paradigme som minimerer utviklings- og feilsøkingsmiljøet for hver komponent.

---

# Jeg har ikke begynt å skrive TODO ennå

### Nettkomponentbibliotek

#### Ultimate størrelsesoptimalisering

For eksempel, for den virtuelle rullefeltkomponenten, sammenligne størrelsen på det populære [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars)-skriptet og stilen etter `gz`, som vist i følgende tabell:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 f.Kr    |

`webc.site`s virtuelle rullefeltkomponent er bare `OverlayScrollbars`s `10%`.

#### Kjøretidsuavhengig

Bygget på standarder [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), er webc.site-komponentbiblioteket naturligvis kjøretidsagnostisk. Enten du bruker React, Vue, Angular, Svelte eller et tradisjonelt rent HTML/JS-prosjekt, kan alle komponenter kjøres direkte i nettleseren som native HTML-tagger, uten behov for sekundær pakking for et spesifikt rammeverk.

##### Sammenligning med shadcn

[shadcn/ui](https://ui.shadcn.com) bruker kodedistribusjonsmodusen, som krever at du kopierer komponentkoden direkte inn i ditt eget prosjekt. Den er tett bundet til React-økosystemet og spesifikke konstruksjonsverktøykjeder (som Tailwind CSS), og kan ikke brukes på tvers av rammeverk. Den har også visse krav til prosjekteringskonfigurasjon.

Og komponenten til `webc.site`:
- **Universell på tvers av rammer**: Skriv én gang og kan introduseres direkte og kjøres i et hvilket som helst frontend-rammeverk (selv et rammefritt miljø).
- **Miljø null avhengighet**: Ingen spesifikke pakkeverktøy eller CSS-forprosessorer er nødvendig, bare importer de kompilerte statiske filene, så kan de brukes ut av esken.

## Automatisert utvikling og feilsøking

### Lokal utvikling og feilsøking

Hver nettsidekomponent støtter oppstart av utviklingsserveren uavhengig, og gir et minimalt utviklings- og feilsøkingsmiljø:

- **Opprett en ny komponent**: Kjør `./sh/new.js [css|js] [komponentnavn]` for raskt å generere et komponentutviklingsskjelett (inkludert demoside og internasjonaliseringskonfigurasjon).
- **Uavhengig feilsøking**: Kjør `./dev.js [komponentnavn]` (eller kjør `./dev.js` direkte) for å starte Vite-utviklingsserveren og åpne demosiden til komponenten automatisk i nettleseren. Støtter component hot update (HMR). Fordi utviklings- og datakoblinger er frakoblet, er det null utviklingsfront-end-lenke, som er veldig egnet for AI (som Claude Code, Google Antigravity, etc.) for å hjelpe til med helautomatisk utvikling og nettleserfeilsøking.

### Publiser komponentbibliotek

#### webc dist

Pakke- og publiseringsprosessen er svært automatisert:
- **Statisk ressursinnpakning**: Å kjøre `./sh/dist.js` (det vil si å utføre `webc dist`-oppgaven) kan automatisk skanne alle nettsidekomponenter under `src/`, kompilere, komprimere og sende dem til `dist/`-katalogen. Denne katalogen inneholder JS/CSS-filer for produksjonsdistribusjon, en demoside klar for distribusjon til GitHub-sider eller Cloudflare-sider, og automatisk genererte `_redirects` og `404.html` rutingfiler.
- **NPM Publish**: Kjør `./sh/npmDist.js`, skriptet vil automatisk håndtere komponentavhengigheter, øke pakkens versjonsnummer og kjøre `npm publish` med ett klikk etter at pakking er fullført for å publisere komponentbiblioteket til NPM.

### Plattformen er ansvarlig for oversettelse

Rammeverket har innebygde automatiserte oversettelsesprosesser:
1. Konfigurer oversettelsesregler (som kildespråk, målspråk og katalog som skal oversettes) i `tran.yml` i prosjektets rotkatalog.
2. Bruk plassholdere i komponenter eller dokumenter uten å måtte hardkode flere språk i koden din.
3. Kjør `./sh/tran.js`, og oversettelsesmotoren vil automatisk trekke ut teksten og ringe WebC-oversettelsestjenesten for behandling, og genererer automatisk YAML-oversettelsesoppføringer og README-dokumentasjon på forskjellige språk.

### miljøvariabler

Når du utfører automatisert oversettelse, må du konfigurere følgende miljøvariabler for å autorisere tilgang til oversettelses-API:

- **`WEBC_SITE_TOKEN`** (eller **`WEBC_TOKEN`**): Autentiseringsnøkkel som brukes for å få tilgang til `webc.site` Automated Translation API. Kan injiseres som en miljøvariabel eller skrives `token` i `~/.config/webc.site.yml` konfigurasjonsfilen i den lokale brukerens hjemmekatalog.