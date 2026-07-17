# WebC.site

## Vad är det här?

### Detta är ett inbyggt webbkomponentbibliotek

Utvecklat baserat på [webkomponenter](https://developer.mozilla.org/docs/Web/API/Web_components), är det körtidsoberoende och lämpar sig för alla ramverk.

Extremt optimerad för storlek (en tiondel av storleken på liknande populära bibliotek).

Stöder 75 språk. Du kan direkt importera js och css för onlineanvändning, eller lägga till komponenter till ditt projekt efter behov för sekundär utveckling.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Detta är komponentbibliotekets utvecklingsramverk

Detta är den statiska bloggversionen av [storybook](https://storybook.js.org).

Att bygga ett komponentbibliotek kan förbättra företagets interna utvecklingseffektivitet och bygga en varumärkesimage i den tekniska cirkeln.

Baserat på [webc.site](https://github.com/webc-site/webc.site) kan team enkelt skapa sina egna komponentbibliotek och publicera dem på [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), etc. De publicerade komponenterna kan felsökas online på [codepen.io](https://codepen.io) och [jsfiddle](https://jsfiddle.net).

Samtidigt kan det inbyggda översättningsramverket snabbt realisera internationaliseringen av komponenter och dokument, så att din produktpublik inte längre är bunden av språket.

### Detta är ett nytt paradigm för frontend-utveckling för artificiell intelligenss era

Ramverket är inbyggt `.agents/skills`, vilket gör att artificiell intelligens kan hjälpa dig att utveckla nya komponenter med ett klick enligt bästa praxis.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Låt front-end-koden förändras från ett ohållbart skräpberg av atmosfärsprogrammering till en standarddel som kan underhållas och iterativt utvecklas på lång sikt.

Med tanke på egenskaperna hos artificiell intelligens-assisterad utveckling föreslog och designade vi ett nytt front-end-utvecklingsparadigm:

1. **Allt är en webbkomponent**
2. **Komponenten måste vara oberoende av back-end datalänken, och datagränssnittet är exponerat som en återuppringningsfunktion**

På så sätt kan artificiell intelligens generera falska data och visa olika tillstånd för komponenter på demosidan.

Separation av komponentutveckling och datagränssnitt, kombinerat med [webc.site component framework](https://github.com/webc-site/webc.site) En annan viktig funktion:

**Varje komponent kan starta utvecklingsservern självständigt och utveckla och felsöka på demosidan**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Detta reducerar front-end-länken för utveckling och felsökning av varje komponent till `0`.

På det här sättet, artificiell intelligens-assisterade utvecklingsverktyg ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), kan du njuta av helautomatisk utveckling av webbläsare och inte längre felsöka, blockera webbläsare och inte längre blockera webbläsare. (backend-data, inloggningsstatus, vägdirigering, etc.).

Om du vill kontrollera artificiell intelligens och minska kostnaderna och öka effektiviteten behöver du ett nytt paradigm som minimerar utvecklings- och felsökningsmiljön för varje komponent.

---

# Jag har inte börjat skriva TODO än

### Webbkomponentbibliotek

#### Ultimat storleksoptimering

Till exempel, för den virtuella rullningslistens komponent, jämför storleken på det populära [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skriptet och stilen efter `gz`, som visas i följande tabell:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 f.Kr    |

`webc.site`s virtuella rullningslistkomponent är endast `OverlayScrollbars`s `10%`.

#### Körtidsoberoende

Byggt på standarder [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), är komponentbiblioteket webc.site naturligtvis körtidsagnostiskt. Oavsett om du använder React, Vue, Angular, Svelte eller ett traditionellt rent HTML/JS-projekt, kan alla komponenter köras direkt i webbläsaren som inbyggda HTML-taggar, utan behov av sekundärt paket för ett specifikt ramverk.

##### Jämförelse med shadcn

[shadcn/ui](https://ui.shadcn.com) använder koddistributionsläget, vilket kräver att du kopierar komponentkoden direkt till ditt eget projekt. Det är hårt bundet till Reacts ekosystem och specifika konstruktionsverktygskedjor (som Tailwind CSS), och kan inte användas över ramverk. Den har också vissa krav för projektteknisk konfiguration.

Och komponenten i `webc.site`:
- **Krossöverskridande universell**: Skriv en gång och kan direkt introduceras och köras i alla front-end-ramverk (även en ramfri miljö).
- **Noll miljöberoende**: Inga specifika paketeringsverktyg eller CSS-förprocessorer krävs, bara importera de kompilerade statiska filerna så kan de användas direkt.

## Automatiserad utveckling och felsökning

### Lokal utveckling och felsökning

Varje webbsideskomponent stöder att starta utvecklingsservern oberoende, vilket ger en minimal utvecklings- och felsökningsmiljö:

- **Skapa en ny komponent**: Kör `./sh/new.js [css|js] [komponentnamn]` för att snabbt skapa ett komponentutvecklingsskelett (inklusive demosida och internationaliseringskonfiguration).
- **Oberoende felsökning**: Kör `./dev.js [komponentnamn]` (eller kör `./dev.js` direkt) för att starta Vite-utvecklingsservern och automatiskt öppna komponentens demosida i webbläsaren. Stöder component hot update (HMR). Eftersom utveckling och datalänkar är frikopplade, finns det noll utvecklingsfront-end-länk, vilket är mycket lämpligt för AI (som Claude Code, Google Antigravity, etc.) för att hjälpa till med helautomatisk utveckling och webbläsarfelsökning.

### Publicera komponentbibliotek

#### webc dist

Förpackningen och publiceringsprocessen är mycket automatiserad:
- **Statisk resurspaketering**: Att köra `./sh/dist.js` (det vill säga att utföra `webc dist`-uppgiften) kan automatiskt skanna alla webbsideskomponenter under `src/`, kompilera, komprimera och mata ut dem till `dist/`-katalogen. Den här katalogen innehåller JS/CSS-filer för produktionsdistribution, en demowebbplats redo att distribueras till GitHub-sidor eller Cloudflare-sidor och automatiskt genererade `_redirects` och `404.html` routingfiler.
- **NPM Publicera**: Kör `./sh/npmDist.js`, skriptet kommer automatiskt att hantera komponentberoende, öka paketets versionsnummer och exekvera `npm publish` med ett klick efter att paketeringen är klar för att publicera komponentbiblioteket till NPM.

### Plattformen ansvarar för översättningen

Ramverket har inbyggda automatiserade översättningsprocesser:
1. Konfigurera översättningsregler (som källspråk, målspråk och katalog som ska översättas) i `tran.yml` i projektets rotkatalog.
2. Använd platshållare i komponenter eller dokument utan att behöva hårdkoda flera språk i din kod.
3. Kör `./sh/tran.js` och översättningsmotorn extraherar automatiskt texten och anropar WebC-översättningstjänsten för bearbetning, och genererar automatiskt YAML-översättningsposter och README-dokumentation på olika språk.

### miljövariabler

När du utför automatisk översättning måste du konfigurera följande miljövariabler för att auktorisera åtkomst till översättnings-API:

- **`WEBC_SITE_TOKEN`** (eller **`WEBC_TOKEN`**): Autentiseringsnyckel som används för att komma åt `webc.site` Automated Translation API. Kan injiceras som en miljövariabel eller skrivas `token` i `~/.config/webc.site.yml` konfigurationsfilen i den lokala användarens hemkatalog.