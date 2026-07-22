# WebC.site

## co je to?

### Toto je nativní knihovna webových komponent

Vyvinutý na základě [webových komponent](https://developer.mozilla.org/docs/Web/API/Web_components), je nezávislý na běhu a vhodný pro všechny rámce.

Extrémně optimalizované pro velikost (jedna desetina velikosti podobných populárních knihoven).

Podporuje 75 jazyků. Můžete přímo importovat js a css pro online použití nebo přidat komponenty do projektu podle potřeby pro sekundární vývoj.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Toto je rámec pro vývoj knihovny komponent

Toto je statická blogová verze [příběhové knihy](https://storybook.js.org).

Vybudování knihovny komponent může zlepšit efektivitu interního vývoje společnosti a vybudovat image značky v technickém kruhu.

Na základě [webc.site](https://github.com/webc-site/webc.site) mohou týmy snadno vytvářet své vlastní knihovny komponent a publikovat je na [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) atd. Publikované komponenty lze ladit online na [codepen.io](https://codepen.io) a [jsfiddle](https://jsfiddle.net).

Vestavěný překladatelský rámec zároveň dokáže rychle realizovat internacionalizaci komponent a dokumentů, takže vaše produktové publikum již nebude vázáno jazykem.

### Toto je nové paradigma vývoje front-endu pro éru umělé inteligence

Rámec je vestavěný `.agents/skills` a umožňuje umělé inteligenci pomoci vyvíjet nové komponenty jediným kliknutím podle osvědčených postupů.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Nechte front-endový kód změnit se z neudržitelné hory odpadků programování atmosféry na standardní součást, kterou lze dlouhodobě udržovat a iterativně vyvíjet.

S ohledem na vlastnosti vývoje s pomocí umělé inteligence jsme navrhli a navrhli nové front-endové vývojové paradigma:

1. **Vše je webová komponenta**
2. ** Komponenta musí být nezávislá na datovém spoji typu back-end a datové rozhraní je vystaveno jako funkce zpětného volání**

Umělá inteligence tak může generovat falešná data a zobrazovat různé stavy komponent na ukázkové stránce.

Oddělení vývoje komponent a datového rozhraní v kombinaci s [webc.site component framework](https://github.com/webc-site/webc.site) Další hlavní rys:

**Každá komponenta může spustit vývojový server samostatně a vyvíjet a ladit na ukázkové stránce**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

To redukuje front-end odkaz pro vývoj a ladění každé komponenty na `0`.

Tímto způsobem si můžete užívat vývojové nástroje podporované umělou inteligencí ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) atd.), můžete si užívat plně automatické blokování různých faktorů (faktory blokování zpětného přihlášení a ladění otevřených dat, nepořádek). stav, směrování cesty atd.).

Pokud chcete ovládat umělou inteligenci a snižovat náklady a zvyšovat efektivitu, potřebujete nové paradigma, které minimalizuje vývojové a ladící prostředí každé komponenty.

---

# Ještě jsem nezačal psát TODO

### Knihovna webových komponent

#### Maximální optimalizace velikosti

Například pro komponentu virtuálního posuvníku porovnejte velikost oblíbeného skriptu [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) a styl za `gz`, jak ukazuje následující tabulka:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Komponenta virtuálního posuvníku `webc.site` je pouze `10%` `OverlayScrollbars`.

#### Nezávislé na běhu

Knihovna komponent webc.site, postavená na standardech [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), je přirozeně agnostická za běhu. Ať už používáte React, Vue, Angular, Svelte nebo tradiční čistý HTML/JS projekt, všechny komponenty mohou běžet přímo v prohlížeči jako nativní HTML tagy, bez potřeby sekundárního balení pro konkrétní framework.

##### Srovnání s shadcn

[shadcn/ui](https://ui.shadcn.com) přebírá režim distribuce kódu, který vyžaduje, abyste zkopírovali kód součásti přímo do vašeho vlastního projektu. Je pevně svázán s ekosystémem React a specifickými řetězci konstrukčních nástrojů (jako je Tailwind CSS) a nelze jej používat napříč frameworky. Má také určité požadavky na konfiguraci projektového inženýrství.

A komponenta `webc.site`:
- **Univerzální mezirámec**: Zapište jednou a lze jej přímo zavést a spustit v libovolném rozhraní front-end (dokonce i v prostředí bez frameworku).
- **Prostředí nulová závislost**: Nejsou vyžadovány žádné specifické balicí nástroje ani preprocesory CSS, stačí importovat zkompilované statické soubory a lze je použít ihned po vybalení.

## Automatizovaný vývoj a ladění

### Lokální vývoj a ladění

Každá komponenta webové stránky podporuje spuštění vývojového serveru nezávisle a poskytuje minimální vývojové a ladicí prostředí:

- **Vytvořte novou komponentu**: Spusťte `./sh/new.js [css|js] [název komponenty]` a rychle vygenerujte kostru vývoje komponenty (včetně ukázkové stránky a konfigurace internacionalizace).
- **Nezávislé ladění**: Spusťte `./dev.js [název komponenty]` (nebo spusťte přímo `./dev.js`), čímž spustíte vývojový server Vite a automaticky otevřete ukázkovou stránku komponenty v prohlížeči. Podporuje aktualizaci komponent za provozu (HMR). Vzhledem k tomu, že vývojové a datové odkazy jsou odděleny, neexistuje žádné front-endové propojení vývoje, které je velmi vhodné pro AI (jako je Claude Code, Google Antigravity atd.), aby napomáhalo plně automatickému vývoji a ladění prohlížeče.

### Publikovat knihovnu komponent

#### webc dist

Proces balení a publikování je vysoce automatizovaný:
- **Statické balení zdrojů**: Spuštění `./sh/dist.js` (tj. provedení úlohy `webc dist`) může automaticky prohledat všechny komponenty webové stránky pod `src/`, zkompilovat, komprimovat a odeslat je do adresáře `dist/`. Tento adresář obsahuje soubory JS/CSS pro produkční distribuci, ukázkový web připravený k nasazení na stránky GitHub nebo Cloudflare a automaticky generované směrovací soubory `_redirects` a `404.html`.
- **NPM Publish**: Spusťte `./sh/npmDist.js`, skript automaticky zpracuje závislosti komponent, zvýší číslo verze balíčku a spustí `npm publish` jedním kliknutím po dokončení balení, aby publikoval knihovnu komponent do NPM.

### Platforma je zodpovědná za překlad

Rámec má vestavěné procesy automatického překladu:
1. Nakonfigurujte pravidla překladu (jako je zdrojový jazyk, cílový jazyk a adresář k překladu) v `tran.yml` v kořenovém adresáři projektu.
2. Použijte zástupné symboly v komponentách nebo dokumentech, aniž byste museli v kódu napevno kódovat více jazyků.
3. Spusťte `./sh/tran.js` a překladatelský stroj automaticky extrahuje text a zavolá překladatelskou službu WebC ke zpracování, přičemž automaticky vygeneruje položky překladu YAML a dokumentaci README v různých jazycích.

### proměnné prostředí

Při provádění automatického překladu je třeba nakonfigurovat následující proměnné prostředí, abyste autorizovali přístup k překladovému rozhraní API:

- **`WEBC_SITE_TOKEN`** (nebo **`WEBC_TOKEN`**): Ověřovací klíč používaný pro přístup k rozhraní `webc.site` Automated Translation API. Lze vložit jako proměnnou prostředí nebo zapsat `token` do konfiguračního souboru `~/.config/webc.site.yml` v domovském adresáři místního uživatele.