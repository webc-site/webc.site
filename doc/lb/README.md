# WebC.site

## Wat ass dat?

### Dëst ass eng gebierteg Webkomponentbibliothéik

Entwéckelt baséiert op [Web Komponenten](https://developer.mozilla.org/docs/Web/API/Web_components), et ass Runtime onofhängeg a gëeegent fir all Kaderen.

Extrem optimiséiert fir d'Gréisst (een Zéngtel vun der Gréisst vun ähnlechen populäre Bibliothéiken).

Ënnerstëtzt 75 Sproochen. Dir kënnt js an css direkt importéieren fir online ze benotzen, oder Komponenten op Äre Projet addéieren wéi néideg fir sekundär Entwécklung.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dëst ass de Komponent Bibliothéik Entwécklung Kader

Dëst ass déi statesch Blog Versioun vum [Storybook](https://storybook.js.org).

Bauen vun enger Komponentebibliothéik kann d'intern Entwécklungseffizienz vun der Firma verbesseren an e Markenbild am technesche Krees bauen.

Baséierend op [webc.site](https://github.com/webc-site/webc.site), kënnen d'Equipen einfach hir eege Komponentbibliothéiken erstellen an se op [github Säit](https://pages.github.com), [Cloudflare Säit](https://pages.cloudflare.com), etc.. Déi publizéiert Komponente kënnen online op [codepen.io](https://codepen.io) an [jsfiddle](https://jsfiddle.net) debugged ginn.

Zur selwechter Zäit kann den agebaute Iwwersetzungskader séier d'Internationaliséierung vu Komponenten an Dokumenter realiséieren, sou datt Äre Produktpublikum net méi u Sprooch gebonnen ass.

### Dëst ass en neie Paradigma vun der Front-End Entwécklung fir d'Ära vun der kënschtlecher Intelligenz

De Kader ass agebaut `.agents/skills`, wat kënschtlech Intelligenz erlaabt Iech nei Komponenten mat engem Klick ze entwéckelen no beschten Praktiken.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Loosst de Front-End Code vun engem onhaltbaren Dreckbierg vun der Atmosphärprogramméierung an e Standarddeel änneren deen iwwer laangfristeg erhale ka ginn an iterativ evoluéiert.

Am Hibléck op d'Charakteristiken vun der kënschtlecher Intelligenz-assistéierter Entwécklung, hu mir en neit Front-End Entwécklungsparadigma proposéiert an entworf:

1. **Alles ass e Webkomponent**
2. ** D'Komponente muss onofhängeg vum Back-End Datelink sinn, an d'Dateninterface ass als Callback Funktioun ausgesat **

Op dës Manéier kann kënschtlech Intelligenz gefälschte Donnéeën generéieren a verschidde Staate vu Komponenten op der Demo Säit weisen.

Trennung vun Komponententwécklung an Dateninterface, kombinéiert mat [webc.site Komponent Kader](https://github.com/webc-site/webc.site) Eng aner grouss Feature:

** All Komponent kann den Entwécklungsserver onofhängeg starten an op der Demo Säit entwéckelen an debuggen **.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dëst reduzéiert de Front-End Link fir Entwécklung an Debugging vun all Komponent op `0`.

An dëser Aart a Weis, kënschtlech Intelligenz-assistéiert Entwécklung Tools ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), Dir kënnt genéisst net méi vollautomatesch Entwécklung duerch verschidde Browser ze blockéieren an opzemaachen. (Backend Daten, Login Status, Wee Routing, etc.).

Wann Dir kënschtlech Intelligenz kontrolléiere wëllt an d'Käschte reduzéieren an d'Effizienz erhéijen, braucht Dir en neit Paradigma dat d'Entwécklung an d'Debugging-Ëmfeld vun all Komponent miniméiert.

---

# Ech hunn nach net ugefaang TODO ze schreiwen

### Web Komponent Bibliothéik

#### Ultimate Gréisst Optimisatioun

Zum Beispill, fir déi virtuell Scrollbar Komponent, vergläicht d'Gréisst vum populäre [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) Skript a Stil no `gz`, wéi an der folgender Tabell gewisen:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 v    |

De virtuelle Scrollbar-Komponent vun `webc.site` ass nëmmen `OverlayScrollbars`s `10%`.

#### Runtime onofhängeg

Gebaut op Standarden [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), ass d'webc.site Komponentbibliothéik natierlech runtime-agnostesch. Egal ob Dir React, Vue, Angular, Svelte oder en traditionelle pure HTML / JS Projet benotzt, all Komponente kënnen direkt am Browser lafen wéi gebierteg HTML Tags, ouni de Besoin fir sekundär Verpakung fir e spezifesche Kader.

##### Verglach mat shadcn

[shadcn / ui](https://ui.shadcn.com) adoptéiert de Code Verdeelungsmodus, wat erfuerdert datt Dir de Komponentcode direkt an Ären eegene Projet kopéiert. Et ass enk gebonnen un de React Ökosystem a spezifesche Konstruktiounsinstrumentketten (wéi Tailwind CSS), a kann net iwwer Kaderen benotzt ginn. Et huet och bestëmmte Viraussetzunge fir Projet Engineering Configuratioun.

An de Bestanddeel vun `webc.site`:
- ** Cross-Framework Universal **: Schreift eemol a kann direkt agefouert ginn a lafen an all Front-End Kader (och e Kader-gratis Ëmfeld).
- ** Ëmfeld Null Ofhängegkeet **: Keng spezifesch Verpackungsinstrumenter oder CSS Preprocessors sinn erfuerderlech, importéiert just déi kompiléiert statesch Dateien an et kann aus der Këscht benotzt ginn.

## Automatiséiert Entwécklung an Debugging

### Lokal Entwécklung an Debugging

All Websäit Komponent ënnerstëtzt den Entwécklungsserver onofhängeg unzefänken, bitt e minimalen Entwécklungs- an Debugging-Ëmfeld:

- ** Schafen eng nei Komponent **: Run <b class = "CODE">./sh/new.js [css | js] [Komponent Numm]` fir séier eng Komponent Entwécklung Skelett Generéiere (dorënner Demo Säit an Internationaliséierung Configuratioun).
- **Onofhängeg Debugging**: Run `./dev.js [Component name]` (oder lafen `./dev.js` direkt) fir de Vite Entwécklungsserver ze starten an automatesch d'Demo Säit vun der Komponent am Browser opzemaachen. Ënnerstëtzt Komponent Hot Update (HMR). Well d'Entwécklung an d'Datelinks entkoppelt sinn, gëtt et null Entwécklung Front-End Link, wat ganz gëeegent ass fir AI (wéi Claude Code, Google Antigravity, etc.) fir an der vollautomatescher Entwécklung a Browser Debugging ze hëllefen.

### Verëffentlechen Komponent Bibliothéik

#### webc dist

De Verpackungs- a Verëffentlechungsprozess ass héich automatiséiert:
- **Statesch Ressourceverpackung**: Lafen `./sh/dist.js` (dat ass, d'Ausféierung vun der `webc dist` Aufgab) kann automatesch all Websäit Komponente ënner `src/` scannen, kompiléieren, kompriméieren an ausginn an de `dist/` Verzeechnes. Dëse Verzeichnis enthält JS/CSS-Dateien fir d'Produktiounsverdeelung, en Demo-Site prett fir op GitHub Pages oder Cloudflare Pages z'installéieren, an automatesch generéiert `_redirects` an `404.html` Routingdateien.
- **NPM Publish**: Run `./sh/npmDist.js`, de Skript handhabt automatesch d'Komponentabhängegkeeten, erhéicht d'Packageversiounsnummer an fuert `npm publish` mat engem Klick aus nodeems d'Verpakung fäerdeg ass fir d'Komponentebibliothéik op NPM ze publizéieren.

### D'Plattform ass verantwortlech fir d'Iwwersetzung

De Kader huet agebaute automatiséiert Iwwersetzungsprozesser:
1. Konfiguréieren Iwwersetzungsregelen (wéi Quellsprooch, Zilsprooch an Verzeechnes fir ze iwwersetzen) an `tran.yml` am Projet Root Verzeechnes.
2. Benotzt Plazhalter a Komponenten oder Dokumenter ouni datt Dir verschidde Sproochen an Ärem Code hardcodéiere musst.
3. Run `./sh/tran.js`, an den Iwwersetzungsmotor extrahéiert automatesch den Text an rufft de WebC Iwwersetzungsservice fir d'Veraarbechtung un, generéiert automatesch YAML Iwwersetzungs-Entréen an README Dokumentatioun a verschiddene Sproochen.

### Ëmweltverännerlechen

Wann Dir automatiséiert Iwwersetzung ausféiert, musst Dir déi folgend Ëmfeldvariablen konfiguréieren fir den Zougang zu der Iwwersetzungs-API ze autoriséieren:

- **`WEBC_SITE_TOKEN`** (oder **`WEBC_TOKEN`**): Authentifikatiounsschlëssel benotzt fir Zougang zu `webc.site` Automatiséiert Iwwersetzungs-API. Kann als Ëmfeldvariabel injizéiert ginn oder geschriwwe ginn `token` an der `~/.config/webc.site.yml` Konfiguratiounsdatei am Heemverzeichnis vum lokalen Benotzer.