# WebC.site

## Mi ez?

### Ez egy natív webkomponens-könyvtár

A [webkomponensek](https://developer.mozilla.org/docs/Web/API/Web_components) alapján fejlesztették ki, futási időtől független, és minden keretrendszerhez alkalmas.

Rendkívül méretre optimalizált (a hasonló népszerű könyvtárak méretének egytizede).

75 nyelvet támogat. Közvetlenül importálhat js-t és css-t online használatra, vagy hozzáadhat komponenseket a projekthez, ha szükséges a másodlagos fejlesztéshez.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ez a komponens könyvtár fejlesztési keretrendszere

Ez a [történetkönyv](https://storybook.js.org) statikus blogverziója.

A komponenskönyvtár felépítése javíthatja a vállalat belső fejlesztési hatékonyságát és márkaimázst építhet a műszaki körben.

A [webc.site](https://github.com/webc-site/webc.site) alapján a csapatok egyszerűen létrehozhatják saját komponenskönyvtáraikat, és közzétehetik azokat a [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) stb. webhelyen. A közzétett összetevők online hibakereshetők a [codepen.io](https://codepen.io) és [jsfiddle](https://jsfiddle.net) oldalon.

Ugyanakkor a beépített fordítási keretrendszer gyorsan megvalósítja az összetevők és dokumentumok nemzetközivé válását, így termékközönségét már nem köti a nyelv.

### Ez a front-end fejlesztés új paradigmája a mesterséges intelligencia korszakában

A keretrendszer beépített `.agents/skills` lehetővé teszi a mesterséges intelligencia számára, hogy egy kattintással segítsen új komponensek fejlesztésében a legjobb gyakorlatoknak megfelelően.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Hagyja, hogy a front-end kód a légkör programozás fenntarthatatlan szeméthegyéből egy szabványos részgé változzon, amely hosszú távon karbantartható és iteratív módon fejleszthető.

A mesterséges intelligencia által támogatott fejlesztés sajátosságait figyelembe véve új front-end fejlesztési paradigmát javasoltunk és terveztünk:

1. **Minden egy webkomponens**
2. **A komponensnek függetlennek kell lennie a háttér-adatkapcsolattól, és az adatfelületnek visszahívási funkcióként kell megjelennie**

Ily módon a mesterséges intelligencia hamis adatokat generálhat, és az összetevők különböző állapotait jelenítheti meg a bemutató oldalon.

A komponensfejlesztés és az adatfelület szétválasztása, kombinálva a [webc.site összetevő keretrendszerrel](https://github.com/webc-site/webc.site) Egy másik fontos jellemző:

**Minden komponens önállóan indíthatja el a fejlesztőszervert, és a demóoldalon fejlesztheti és hibakeresheti**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Ezzel az egyes összetevők fejlesztéséhez és hibakereséséhez szükséges előtér-hivatkozás `0`-ra csökken.

Ily módon a mesterséges intelligencia által támogatott fejlesztőeszközök ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) stb.), élvezheti a teljesen automatikus fejlesztést, a különböző böngészők általi blokkolásokat, és nem hosszabb ideig tartó nyitva tartást. (háttéradatok, bejelentkezési állapot, útvonal-útválasztás stb.).

Ha irányítani szeretné a mesterséges intelligenciát, csökkenteni szeretné a költségeket és növelni szeretné a hatékonyságot, akkor egy új paradigmára van szüksége, amely minimalizálja az egyes összetevők fejlesztési és hibakeresési környezetét.

---

# Még nem kezdtem el írni a TODO-t

### Webkomponens könyvtár

#### Végső méretoptimalizálás

Például a virtuális görgetősáv komponens esetében hasonlítsa össze a népszerű [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) szkript méretét és a stílust a `gz` után, a következő táblázat szerint:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

A `webc.site` virtuális görgetősáv komponense csak a `OverlayScrollbars` `10%` eleme.

#### Futásidőtől független

A [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) szabványokra épülő webc.site összetevőkönyvtár természetesen futásidejű agnosztikus. Függetlenül attól, hogy React, Vue, Angular, Svelte vagy hagyományos tiszta HTML/JS projektet használ, minden összetevő közvetlenül a böngészőben futhat, mint a natív HTML címkék, anélkül, hogy egy adott keretrendszerhez másodlagos csomagolásra lenne szükség.

##### Összehasonlítás a shadcn-nel

A [shadcn/ui](https://ui.shadcn.com) a kódelosztási módot veszi át, amely megköveteli, hogy az összetevőkódot közvetlenül a saját projektjébe másolja. Szorosan kötődik a React ökoszisztémához és specifikus építési eszközláncokhoz (például a Tailwind CSS-hez), és nem használható kereteken keresztül. Ezenkívül bizonyos követelményeket támaszt a projektmérnöki konfigurációval kapcsolatban.

És a `webc.site` összetevője:
- **Kereteken átívelő univerzális**: Egyszer írható, és közvetlenül bevezethető és futtatható bármely front-end keretrendszerben (még keretrendszer nélküli környezetben is).
- **Zéró környezetfüggőség**: Nincs szükség speciális csomagolóeszközökre vagy CSS-előfeldolgozókra, csak importálja a lefordított statikus fájlokat, és már a dobozból is használható.

## Automatizált fejlesztés és hibakeresés

### Helyi fejlesztés és hibakeresés

Minden weboldal-összetevő támogatja a fejlesztőszerver önálló indítását, minimális fejlesztési és hibakeresési környezetet biztosítva:

- **Hozzon létre egy új összetevőt**: Futtassa a `./sh/new.js [css|js] [összetevő neve]` parancsot, hogy gyorsan létrehozzon egy komponensfejlesztési vázat (beleértve a bemutató oldalt és a nemzetköziesítési konfigurációt).
- **Független hibakeresés**: Futtassa a `./dev.js [összetevő neve]` fájlt (vagy futtassa közvetlenül az `./dev.js` parancsot) a Vite fejlesztői kiszolgáló elindításához és az összetevő bemutató oldalának automatikus megnyitásához a böngészőben. Támogatja a komponens forró frissítését (HMR). Mivel a fejlesztési és adatkapcsolatok szét vannak választva, nincs fejlesztői front-end link, ami nagyon alkalmas az AI-ra (például Claude Code, Google Antigravity stb.), hogy segítse a teljesen automatikus fejlesztést és a böngésző hibakeresését.

### Összetevő könyvtár közzététele

#### webc dist

A csomagolás és a kiadás nagymértékben automatizált:
- **Statikus erőforráscsomagolás**: A `./sh/dist.js` futtatása (vagyis a `webc dist` feladat végrehajtása) képes automatikusan átvizsgálni az `src/` alatt található összes weboldal-összetevőt, lefordítani, tömöríteni és a `dist/` könyvtárba kiadni. Ez a könyvtár JS/CSS-fájlokat tartalmaz az éles terjesztéshez, egy demóhelyet, amely készen áll a GitHub Pages vagy Cloudflare Pages-re való telepítésre, valamint automatikusan generált `_redirects` és `404.html` útválasztó fájlokat.
- **NPM Publish**: Futtassa az `./sh/npmDist.js` parancsot, a szkript automatikusan kezeli az összetevő-függőségeket, növeli a csomag verziószámát, és a csomagolás befejezése után egy kattintással végrehajtja a `npm publish` parancsot, hogy közzétegye az összetevőkönyvtárat az NPM-ben.

### A platform felelős a fordításért

A keretrendszer beépített automatizált fordítási folyamatokkal rendelkezik:
1. Konfigurálja a fordítási szabályokat (például a forrásnyelvet, a célnyelvet és a fordítandó könyvtárat) a projekt gyökérkönyvtárának `tran.yml` részében.
2. Használjon helyőrzőket az összetevőkben vagy dokumentumokban anélkül, hogy több nyelvet kellene kódolnia a kódban.
3. Futtassa az `./sh/tran.js` parancsot, és a fordítómotor automatikusan kibontja a szöveget, és felhívja a WebC fordítószolgáltatást feldolgozásra, automatikusan létrehozva a YAML fordítási bejegyzéseket és a README dokumentációt különböző nyelveken.

### környezeti változók

Automatikus fordítás végrehajtásakor a következő környezeti változókat kell konfigurálnia a fordítási API-hoz való hozzáférés engedélyezéséhez:

- **`WEBC_SITE_TOKEN`** (vagy **`WEBC_TOKEN`**): Az `webc.site` automatikus fordítási API eléréséhez használt hitelesítési kulcs. Beszúrható környezeti változóként, vagy beírható `token` a helyi felhasználó kezdőkönyvtárában lévő `~/.config/webc.site.yml` konfigurációs fájlba.