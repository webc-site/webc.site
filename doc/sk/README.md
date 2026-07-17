# WebC.site

## čo je to?

### Toto je natívna knižnica webových komponentov

Vyvinutý na základe [webových komponentov](https://developer.mozilla.org/docs/Web/API/Web_components), je nezávislý na behu a je vhodný pre všetky rámce.

Extrémne optimalizované na veľkosť (jedna desatina veľkosti podobných populárnych knižníc).

Podporuje 75 jazykov. Môžete priamo importovať js a css pre online použitie alebo pridať komponenty do svojho projektu podľa potreby pre sekundárny vývoj.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Toto je rámec vývoja knižnice komponentov

Toto je verzia statického blogu [príbehy](https://storybook.js.org).

Budovanie knižnice komponentov môže zlepšiť efektivitu interného vývoja spoločnosti a vybudovať imidž značky v technickom kruhu.

Na základe [webc.site](https://github.com/webc-site/webc.site) môžu tímy jednoducho vytvárať svoje vlastné knižnice komponentov a publikovať ich na [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) atď. Zverejnené komponenty možno ladiť online na [codepen.io](https://codepen.io) a [jsfiddle](https://jsfiddle.net).

Zároveň môže vstavaný prekladateľský rámec rýchlo realizovať internacionalizáciu komponentov a dokumentov, takže vaše produktové publikum už nie je viazané jazykom.

### Toto je nová paradigma front-end vývoja pre éru umelej inteligencie

Rámec je vstavaný `.agents/skills`, čo umožňuje umelej inteligencii pomôcť vám vyvíjať nové komponenty jediným kliknutím podľa osvedčených postupov.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Dovoľte, aby sa front-end kód zmenil z neudržateľného programovania odpadkovej hory na štandardnú časť, ktorú možno dlhodobo udržiavať a opakovane vyvíjať.

Vzhľadom na charakteristiky vývoja podporovaného umelou inteligenciou sme navrhli a navrhli novú paradigmu front-end vývoja:

1. **Všetko je webový komponent**
2. **Komponent musí byť nezávislý od koncového dátového spojenia a dátové rozhranie je vystavené ako funkcia spätného volania**

Umelá inteligencia tak dokáže generovať falošné dáta a zobrazovať rôzne stavy komponentov na ukážkovej stránke.

Oddelenie vývoja komponentov a dátového rozhrania v kombinácii s [webc.site komponent framework](https://github.com/webc-site/webc.site) Ďalšia hlavná vlastnosť:

**Každý komponent môže spustiť vývojový server nezávisle a vyvíjať a ladiť na ukážkovej stránke**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Toto redukuje front-end prepojenie na vývoj a ladenie každého komponentu na `0`.

Týmto spôsobom, vývojové nástroje podporované umelou inteligenciou ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) atď.), môžete si užiť plne automatické blokovanie vývoja pomocou spätného prihlasovania a ladenia otvorených údajov v prehliadači. stav, smerovanie cesty atď.).

Ak chcete ovládať umelú inteligenciu a znižovať náklady a zvyšovať efektivitu, potrebujete novú paradigmu, ktorá minimalizuje vývojové a ladiace prostredie každého komponentu.

---

# Ešte som nezačal písať TODO

### Knižnica webových komponentov

#### Dokonalá optimalizácia veľkosti

Napríklad pre komponent virtuálneho posúvača porovnajte veľkosť obľúbeného skriptu [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) a štýl po `gz`, ako je uvedené v nasledujúcej tabuľke:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 pred Kr    |

Virtuálny posúvač `webc.site` je len `10%` `OverlayScrollbars`.

#### Nezávislé od behu

Knižnica komponentov webc.site, postavená na štandardoch [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), je prirodzene agnostika za behu. Či už používate React, Vue, Angular, Svelte alebo tradičný čistý HTML/JS projekt, všetky komponenty môžu bežať priamo v prehliadači ako natívne HTML tagy, bez potreby sekundárneho balenia pre konkrétny framework.

##### Porovnanie so shadcn

[shadcn/ui](https://ui.shadcn.com) používa režim distribúcie kódu, ktorý vyžaduje skopírovanie kódu komponentu priamo do vášho vlastného projektu. Je úzko spätý s ekosystémom React a špecifickými reťazcami stavebných nástrojov (ako je Tailwind CSS) a nemožno ho použiť v rôznych rámcoch. Má tiež určité požiadavky na konfiguráciu projektového inžinierstva.

A komponent `webc.site`:
- **Cross-framework universal**: Napíšte raz a možno ho priamo zaviesť a spustiť v akomkoľvek front-end frameworku (dokonca aj v prostredí bez frameworku).
- **Nulová závislosť prostredia**: Nevyžadujú sa žiadne špecifické baliace nástroje ani predprocesory CSS, stačí importovať skompilované statické súbory a môžete ich použiť hneď po vybalení.

## Automatizovaný vývoj a ladenie

### Miestny vývoj a ladenie

Každý komponent webovej stránky podporuje spustenie vývojového servera nezávisle a poskytuje minimálne vývojové a ladiace prostredie:

- **Vytvorte nový komponent**: Spustite `./sh/new.js [css|js] [názov komponentu]` a rýchlo vygenerujte kostru vývoja komponentu (vrátane ukážkovej stránky a konfigurácie internacionalizácie).
- **Nezávislé ladenie**: Spustite `./dev.js [názov komponentu]` (alebo priamo spustite `./dev.js`), čím spustíte vývojový server Vite a automaticky otvoríte ukážkovú stránku komponentu v prehliadači. Podporuje aktualizáciu komponentov (HMR). Keďže vývojové a dátové prepojenia sú oddelené, je tu nulový front-endový odkaz na vývoj, ktorý je veľmi vhodný pre AI (napríklad Claude Code, Google Antigravity atď.) na pomoc pri plne automatickom vývoji a ladení prehliadača.

### Publikovanie knižnice komponentov

#### webc dist

Proces balenia a publikovania je vysoko automatizovaný:
- **Statické balenie zdrojov**: Spustenie `./sh/dist.js` (to znamená vykonanie úlohy `webc dist`) môže automaticky skenovať všetky komponenty webovej stránky pod `src/`, kompilovať, komprimovať a odosielať do adresára `dist/`. Tento adresár obsahuje súbory JS/CSS na produkčnú distribúciu, ukážkovú lokalitu pripravenú na nasadenie na stránky GitHub alebo Cloudflare a automaticky generované smerovacie súbory `_redirects` a `404.html`.
- **NPM Publish**: Spustite `./sh/npmDist.js`, skript automaticky spracuje závislosti komponentov, zvýši číslo verzie balíka a spustí `npm publish` jedným kliknutím po dokončení balenia, čím publikuje knižnicu komponentov do NPM.

### Platforma je zodpovedná za preklad

Rámec má vstavané procesy automatického prekladu:
1. Nakonfigurujte pravidlá prekladu (ako je zdrojový jazyk, cieľový jazyk a adresár na preklad) v `tran.yml` v koreňovom adresári projektu.
2. Použite zástupné symboly v komponentoch alebo dokumentoch bez toho, aby ste museli vo svojom kóde napevno zakódovať viacero jazykov.
3. Spustite `./sh/tran.js` a prekladový nástroj automaticky extrahuje text a zavolá prekladateľskú službu WebC na spracovanie, pričom automaticky vygeneruje položky prekladu YAML a dokumentáciu README v rôznych jazykoch.

### premenné prostredia

Pri vykonávaní automatického prekladu musíte nakonfigurovať nasledujúce premenné prostredia na autorizáciu prístupu k prekladovému API:

- **`WEBC_SITE_TOKEN`** (alebo **`WEBC_TOKEN`**): Autentifikačný kľúč používaný na prístup k `webc.site` API pre automatický preklad. Dá sa vložiť ako premenná prostredia alebo zapísať `token` do konfiguračného súboru `~/.config/webc.site.yml` v domovskom adresári lokálneho používateľa.