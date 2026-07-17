# WebC.site

## Hvað er þetta?

### Þetta er innbyggt vefhlutasafn

Hannað byggt á [vefhlutum](https://developer.mozilla.org/docs/Web/API/Web_components), það er óháð keyrslutíma og hentar öllum ramma.

Mjög fínstillt fyrir stærð (einn tíundi af stærð svipuð vinsæl bókasöfn).

Styður 75 tungumál. Þú getur flutt inn js og css beint til notkunar á netinu, eða bætt íhlutum við verkefnið þitt eftir þörfum fyrir aukaþróun.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Þetta er þróunarrammi íhlutasafnsins

Þetta er kyrrstæð bloggútgáfa af [sögubók](https://storybook.js.org).

Að byggja upp íhlutasafn getur bætt innri þróunarskilvirkni fyrirtækisins og byggt upp vörumerkjaímynd í tæknihringnum.

Byggt á [webc.site](https://github.com/webc-site/webc.site), geta lið auðveldlega búið til sín eigin íhlutasöfn og birt þau á [github síðu](https://pages.github.com), [cloudflare síðu](https://pages.cloudflare.com), o.s.frv. Hægt er að kemba útgefnu íhlutina á netinu á [codepen.io](https://codepen.io) og [jsfiddle](https://jsfiddle.net).

Á sama tíma getur innbyggði þýðingarramminn fljótt gert sér grein fyrir alþjóðavæðingu íhluta og skjala, þannig að vöruhópurinn þinn er ekki lengur bundinn af tungumáli.

### Þetta er ný hugmyndafræði framhliðarþróunar fyrir tímum gervigreindar

Ramminn er innbyggður `.agents/skills`, sem gerir gervigreind kleift að hjálpa þér að þróa nýja íhluti með einum smelli í samræmi við bestu starfsvenjur.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Láttu framendakóðann breytast úr ósjálfbæru ruslafjalli af andrúmsloftsforritun yfir í staðlaðan hluta sem hægt er að viðhalda og þróa ítrekað til lengri tíma litið.

Með hliðsjón af einkennum gervigreindarstuddrar þróunar, lögðum við til og hönnuðum nýja framhliðarþróunarhugmynd:

1. **Allt er vefhluti**
2. **Hlutinn verður að vera óháður bakendagagnatenglinum og gagnaviðmótið er afhjúpað sem svarhringingaraðgerð**

Þannig getur gervigreind búið til fölsuð gögn og sýnt mismunandi stöðu íhluta á kynningarsíðunni.

Aðskilnaður íhlutaþróunar og gagnaviðmóts, ásamt [webc.site component framework](https://github.com/webc-site/webc.site) Annar mikilvægur eiginleiki:

**Hver hluti getur ræst þróunarþjóninn sjálfstætt og þróað og villuleit á kynningarsíðunni**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Þetta minnkar framendatengilinn fyrir þróun og villuleit hvers íhluta í `0`.

Á þennan hátt, gervigreindarstýrð þróunarverkfæri ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Bendill](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) o.s.frv.), þú getur notið fullkomlega sjálfvirkrar þróunar með því að opna vafra og ekki lengur kemba vafra, (bakendagögn, innskráningarstaða, leiðarleið osfrv.).

Ef þú vilt stjórna gervigreind og draga úr kostnaði og auka skilvirkni þarftu nýja hugmyndafræði sem lágmarkar þróun og villuleitarumhverfi hvers íhluta.

---

# Ég er ekki enn byrjuð að skrifa TODO

### Vefhlutasafn

#### Fullkomin stærðar fínstilling

Til dæmis, fyrir sýndarskrunarstikuhlutann, berðu saman stærð vinsæla [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skriftu og stíl á eftir `gz`, eins og sýnt er í eftirfarandi töflu:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 f.Kr    |

Raunverulegur skrunstikuhluti `webc.site` er aðeins `10%` frá `OverlayScrollbars`.

#### Óháð keyrslutíma

Byggt á stöðlum [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), er webc.site íhlutasafnið náttúrulega ótímabundið. Hvort sem þú ert að nota React, Vue, Angular, Svelte eða hefðbundið hreint HTML/JS verkefni, geta allir íhlutir keyrt beint í vafranum eins og innfædd HTML merki, án þess að þörf sé á aukaumbúðum fyrir ákveðinn ramma.

##### Samanburður við shadcn

[shadcn/ui](https://ui.shadcn.com) notar kóðadreifingarhaminn, sem krefst þess að þú afritar íhlutakóðann beint inn í þitt eigið verkefni. Það er þétt bundið við React vistkerfið og sérstakar byggingarverkfærakeðjur (eins og Tailwind CSS), og er ekki hægt að nota það þvert á ramma. Það hefur einnig ákveðnar kröfur um uppsetningu verkfræði.

Og hluti `webc.site`:
- **Alhliða þverramma**: Skrifaðu einu sinni og hægt er að kynna það beint og keyra í hvaða framenda ramma sem er (jafnvel rammalaust umhverfi).
- **Núll háð umhverfisins**: Engin sérstök pökkunarverkfæri eða CSS forvinnsluforrit eru nauðsynleg, flyttu bara inn samansettar kyrrstæður skrár og það er hægt að nota þær úr kassanum.

## Sjálfvirk þróun og villuleit

### Staðbundin þróun og villuleit

Hver vefsíðuhluti styður að ræsa þróunarþjóninn sjálfstætt, sem veitir lágmarks þróunar- og villuleitarumhverfi:

- **Búðu til nýjan íhlut**: Keyrðu `./sh/new.js [css|js] [heiti hluta]` til að búa til íhlutaþróunarbeinagrind (þar á meðal kynningarsíðu og alþjóðavæðingarstillingar).
- **Sjálfstæð kembiforrit**: Keyrðu `./dev.js [heiti hluta]` (eða keyrðu `./dev.js` beint) til að ræsa Vite þróunarþjóninn og opna sjálfkrafa kynningarsíðu íhlutans í vafranum. Styður component hot update (HMR). Vegna þess að þróunar- og gagnatenglar eru aftengdir, er núll þróunarframhlið hlekkur, sem er mjög hentugur fyrir gervigreind (eins og Claude Code, Google Antigravity, osfrv.) til að aðstoða við fullsjálfvirka þróun og villuleit í vafra.

### Birta íhlutasafn

#### webc dist

Pökkunar- og útgáfuferlið er mjög sjálfvirkt:
- **Statísk auðlindapökkun**: Með því að keyra `./sh/dist.js` (þ.e. að framkvæma `webc dist` verkefnið) geturðu skannað sjálfkrafa alla vefsíðuhluti undir `src/`, safnað saman, þjappað og gefið út í `dist/` möppuna. Þessi mappa inniheldur JS/CSS skrár fyrir framleiðsludreifingu, kynningarsíðu sem er tilbúin til dreifingar á GitHub síður eða Cloudflare síður og sjálfkrafa myndaðar `_redirects` og `404.html` leiðarskrár.
- **NPM Publish**: Keyrðu `./sh/npmDist.js`, handritið mun sjálfkrafa meðhöndla ósjálfstæði íhluta, hækka pakkaútgáfunúmerið og keyra `npm publish` með einum smelli eftir að pökkun er lokið til að birta íhlutasafnið til NPM.

### Vettvangurinn ber ábyrgð á þýðingar

Ramminn hefur innbyggt sjálfvirkt þýðingarferli:
1. Stilltu þýðingarreglur (eins og frummál, markmál og skrá sem á að þýða) í `tran.yml` í rótarskrá verkefnisins.
2. Notaðu staðgengla í íhlutum eða skjölum án þess að þurfa að harðkóða mörg tungumál í kóðanum þínum.
3. Keyrðu `./sh/tran.js`, og þýðingarvélin mun sjálfkrafa draga textann út og hringja í WebC þýðingarþjónustuna til vinnslu og býr sjálfkrafa til YAML þýðingarfærslur og README skjöl á ýmsum tungumálum.

### umhverfisbreytur

Þegar þú framkvæmir sjálfvirka þýðingu þarftu að stilla eftirfarandi umhverfisbreytur til að heimila aðgang að þýðingar API:

- **`WEBC_SITE_TOKEN`** (eða **`WEBC_TOKEN`**): Auðkenningarlykill notaður til að fá aðgang að `webc.site` sjálfvirkri þýðingaforritaskilum. Hægt að sprauta inn sem umhverfisbreytu eða skrifa `token` í `~/.config/webc.site.yml` stillingarskrána í heimaskrá staðbundins notanda.