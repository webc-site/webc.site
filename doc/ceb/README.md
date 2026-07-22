# WebC.site

## Unsa ni?

### Kini usa ka lumad nga librarya sa sangkap sa web

Gipalambo base sa [mga sangkap sa web](https://developer.mozilla.org/docs/Web/API/Web_components), kini independente sa runtime ug angay alang sa tanan nga mga balangkas.

Labi nga na-optimize alang sa gidak-on (usa sa ikanapulo ang gidak-on sa parehas nga sikat nga mga librarya).

Nagsuporta sa 75 ka mga pinulongan. Mahimo kang direktang mag-import og js ug css para sa online nga paggamit, o makadugang sa mga component sa imong proyekto kon gikinahanglan para sa sekondaryang kalamboan.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Kini ang component library development framework

Kini ang static nga blog nga bersyon sa [storybook](https://storybook.js.org).

Ang pagtukod og component library makapauswag sa internal development efficiency sa kompaniya ug makatukod og brand image sa technical circle.

Base sa [webc.site](https://github.com/webc-site/webc.site), ang mga team dali nga makahimo sa ilang kaugalingong component library ug i-publish kini sa [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), ug uban pa.

Sa samang higayon, ang gitukod nga gambalay sa paghubad dali nga makaamgo sa internasyonalisasyon sa mga sangkap ug mga dokumento, aron ang imong mamiminaw sa produkto dili na mabugkos sa pinulongan.

### Kini usa ka bag-ong paradigm sa pag-uswag sa unahan alang sa panahon sa artificial intelligence

Ang framework kay built-in `.agents/skills`, nga nagtugot sa artificial intelligence sa pagtabang kanimo sa paghimo og bag-ong mga component sa usa ka click sumala sa labing maayo nga mga gawi.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Tugoti ang front-end nga code nga mausab gikan sa usa ka dili malungtarong basura nga bukid sa programming sa atmospera ngadto sa usa ka standard nga bahin nga mahimong mamentinar ug balikbalik nga evolve sa taas nga termino.

Tungod sa mga kinaiya sa pag-uswag nga gitabangan sa artipisyal nga paniktik, among gisugyot ug gidesinyo ang usa ka bag-ong paradigm sa pag-uswag sa unahan:

1. **Ang tanan kay usa ka web component**
2. **Ang component kinahanglan nga independente sa back-end nga data link, ug ang data interface nabutyag isip callback function**

Niining paagiha, ang artificial intelligence makamugna og peke nga datos ug magpakita sa lain-laing estado sa mga component sa demo page.

Pagbulag sa component development ug data interface, inubanan sa [webc.site component framework](https://github.com/webc-site/webc.site) Laing major feature:

**Ang matag component mahimong magsugod sa development server nga independente ug mo-develop ug mag-debug sa demo page**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Kini nagpamenos sa front-end nga link para sa pagpalambo ug pag-debug sa matag component ngadto sa `0`.

Niining paagiha, ang artificial intelligence-assisted development tools ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) ug uban pa), malingaw ka sa bug-os nga awtomatikong pag-develop, dili na ako mag-login sa pag-debug, ug dili na ako mag-abli sa mga hinungdan sa pag-log in status, ruta sa agianan, ug uban pa).

Kung gusto nimo makontrol ang artificial intelligence ug makunhuran ang mga gasto ug madugangan ang kahusayan, kinahanglan nimo ang usa ka bag-ong paradigm nga nagpamenos sa pag-uswag ug pag-debug sa palibot sa matag sangkap.

---

# Wala pa ako nagsugod sa pagsulat sa TODO

### librarya sa sangkap sa web

#### Katapusan nga pag-optimize sa gidak-on

Pananglitan, alang sa virtual scroll bar component, itandi ang gidak-on sa sikat nga [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) nga script ug estilo human sa `gz`, sama sa gipakita sa mosunod nga lamesa:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Ang bahin sa virtual scroll bar sa `webc.site` kay `OverlayScrollbars` lang sa `10%`.

#### Independyente ang runtime

Gitukod sa mga sumbanan [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), ang webc.site component library natural nga runtime-agnostic. Naggamit ka man og React, Vue, Angular, Svelte, o usa ka tradisyonal nga purong HTML/JS nga proyekto, ang tanan nga mga component mahimong direktang modagan sa browser sama sa lumad nga HTML tags, nga walay panginahanglan sa secondary packaging alang sa usa ka piho nga framework.

##### Pagtandi sa shadcn

Ang [shadcn/ui](https://ui.shadcn.com) nagsagop sa code distribution mode, nga nagkinahanglan nga imong kopyahon ang component code direkta ngadto sa imong kaugalingong proyekto. Hugot kini nga gigapos sa React ecosystem ug espesipikong mga kadena sa himan sa pagtukod (sama sa Tailwind CSS), ug dili magamit sa mga frameworks. Adunay usab kini piho nga mga kinahanglanon alang sa pag-configure sa engineering sa proyekto.

Ug ang bahin sa `webc.site`:
- **Cross-framework universal**: Pagsulat kausa ug mahimong direkta nga ipaila ug ipadagan sa bisan unsang front-end nga gambalay (bisan ang usa ka framework-free nga palibot).
- **Environment zero dependency**: Walay espesipikong mga gamit sa pagputos o CSS preprocessors ang gikinahanglan, i-import lang ang giipon nga static nga mga file ug kini magamit sa gawas sa kahon.

## Awtomatiko nga pag-uswag ug pag-debug

### Lokal nga pag-uswag ug pag-debug

Ang matag web page nga component nagsuporta sa pagsugod sa development server nga independente, nga naghatag ug gamay nga development ug debugging environment:

- **Paghimo og bag-ong component**: Run `./sh/new.js [css|js] [component name]` para dali nga makamugna og component development skeleton (lakip ang demo page ug internationalization configuration).
- **Independent debugging**: Pagdalagan `./dev.js [component name]` (o pagdagan `./dev.js` direkta) aron masugdan ang Vite development server ug awtomatik nga ablihan ang demo page sa component sa browser. Nagsuporta sa component hot update (HMR). Tungod kay ang development ug data links kay decoupled, adunay zero development front-end link, nga haom kaayo alang sa AI (sama sa Claude Code, Google Antigravity, ug uban pa) aron sa pagtabang sa hingpit nga automatic development ug browser debugging.

### Imantala ang component library

#### webc dist

Ang proseso sa pagputos ug pagpatik kay automated kaayo:
- **Static resource packaging**: Ang pagpadagan `./sh/dist.js` (nga mao, ang pagpatuman sa `webc dist` nga buluhaton) mahimong awtomatik nga ma-scan ang tanang component sa web page ubos sa `src/`, i-compile, i-compress ug i-output kini ngadto sa `dist/` directory. Kini nga direktoryo adunay mga JS/CSS nga mga file alang sa pag-apod-apod sa produksiyon, usa ka demo site nga andam na alang sa pag-deploy sa GitHub Pages o Cloudflare Pages, ug awtomatik nga namugna `_redirects` ug `404.html` routing files.
- **NPM Publish**: Run `./sh/npmDist.js`, ang script awtomatik nga magdumala sa component dependencies, increment ang package version number, ug i-execute ang `npm publish` sa usa ka click human makompleto ang packaging aron ma-publish ang component library ngadto sa NPM.

### Ang plataporma maoy responsable sa paghubad

Ang balangkas adunay built-in nga awtomatiko nga mga proseso sa paghubad:
1. I-configure ang mga lagda sa paghubad (sama sa gigikanan nga lengguwahe, target nga lengguwahe ug direktoryo nga hubaron) sa `tran.yml` sa direktoryo sa gamut sa proyekto.
2. Gamita ang mga placeholder sa mga sangkap o dokumento nga dili kinahanglan nga mag-hardcode sa daghang mga pinulongan sa imong code.
3. Pagdalagan `./sh/tran.js`, ug ang makina sa paghubad awtomatik nga mokuha sa teksto ug motawag sa serbisyo sa paghubad sa WebC alang sa pagproseso, awtomatik nga makamugna og YAML translation entries ug README documentation sa lain-laing mga pinulongan.

### mga variable sa palibot

Kung maghimo ug automated nga paghubad, kinahanglan nimong i-configure ang mosunod nga mga variable sa palibot aron tugutan ang pag-access sa API sa paghubad:

- **`WEBC_SITE_TOKEN`** (o **`WEBC_TOKEN`**): Authentication key nga gigamit sa pag-access sa `webc.site` Automated Translation API. Mahimong ma-injected isip environment variable o isulat `token` sa `~/.config/webc.site.yml` configuration file sa home directory sa lokal nga user.