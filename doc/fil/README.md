# WebC.site

## Ano ito?

### Ito ay isang katutubong library ng web component

Binuo batay sa [mga bahagi ng web](https://developer.mozilla.org/docs/Web/API/Web_components), ito ay independyente sa runtime at angkop para sa lahat ng mga balangkas.

Lubos na na-optimize para sa laki (isang ikasampu ng laki ng mga katulad na sikat na aklatan).

Sinusuportahan ang 75 mga wika. Maaari kang direktang mag-import ng js at css para sa online na paggamit, o magdagdag ng mga bahagi sa iyong proyekto kung kinakailangan para sa pangalawang pag-unlad.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ito ang component library development framework

Ito ang static na bersyon ng blog ng [storybook](https://storybook.js.org).

Ang pagbuo ng isang bahaging aklatan ay maaaring mapabuti ang kahusayan ng panloob na pag-unlad ng kumpanya at bumuo ng isang imahe ng tatak sa teknikal na bilog.

Batay sa [webc.site](https://github.com/webc-site/webc.site), madaling makakagawa ang mga team ng sarili nilang component library at mai-publish ang mga ito sa [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), atbp. Maaaring i-debug online ang mga na-publish na component sa [codepen.io](https://codepen.io) at [jsfiddle](https://jsfiddle.net).

Kasabay nito, mabilis na maisasakatuparan ng built-in na balangkas ng pagsasalin ang internasyonalisasyon ng mga bahagi at dokumento, upang ang iyong audience ng produkto ay hindi na nakatali sa wika.

### Ito ay isang bagong paradigm ng front-end development para sa panahon ng artificial intelligence

Ang framework ay built-in na `.agents/skills`, na nagpapahintulot sa artificial intelligence na tulungan kang bumuo ng mga bagong bahagi sa isang pag-click ayon sa pinakamahuhusay na kagawian.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Hayaang magbago ang front-end code mula sa isang hindi napapanatiling bundok ng basura ng programming sa kapaligiran patungo sa isang karaniwang bahagi na maaaring mapanatili at paulit-ulit na umunlad sa mahabang panahon.

Dahil sa mga katangian ng pag-unlad na tinulungan ng artipisyal na katalinuhan, iminungkahi at idinisenyo namin ang isang bagong paradigm sa pag-unlad sa harapan:

1. **Lahat ay bahagi ng web**
2. **Ang bahagi ay dapat na independiyente sa back-end na link ng data, at ang data interface ay nakalantad bilang isang callback function**

Sa ganitong paraan, ang artificial intelligence ay maaaring makabuo ng pekeng data at magpakita ng iba't ibang estado ng mga bahagi sa pahina ng demo.

Paghihiwalay ng component development at data interface, na sinamahan ng [webc.site component framework](https://github.com/webc-site/webc.site) Isa pang pangunahing feature:

**Maaaring simulan ng bawat bahagi ang development server nang nakapag-iisa at bumuo at mag-debug sa pahina ng demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Binabawasan nito ang front-end na link para sa pag-develop at pag-debug ng bawat bahagi sa `0`.

Sa ganitong paraan, ang mga tool sa pag-develop na tinulungan ng artificial intelligence ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) atbp.), masisiyahan ka sa ganap na awtomatikong pag-develop, pag-debug ng iba't ibang mga pag-login, pag-debug ng iba't ibang mga pag-log in, at hindi na ako nakabukas sa browser. katayuan, pagruruta ng landas, atbp.).

Kung gusto mong kontrolin ang artificial intelligence at bawasan ang mga gastos at pataasin ang kahusayan, kailangan mo ng bagong paradigm na nagpapaliit sa development at debugging environment ng bawat component.

---

# Hindi pa ako nagsimulang magsulat ng TODO

### Library ng bahagi ng web

#### Ultimate size optimization

Halimbawa, para sa virtual na bahagi ng scroll bar, ihambing ang laki ng sikat na [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) na script at istilo pagkatapos ng `gz`, tulad ng ipinapakita sa sumusunod na talahanayan:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Ang bahagi ng virtual scroll bar ng `webc.site` ay ang `10%` lang ng `OverlayScrollbars`.

#### Independyente ang runtime

Itinayo sa mga pamantayan [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), ang library ng bahagi ng webc.site ay natural na runtime-agnostic. Gumagamit ka man ng React, Vue, Angular, Svelte, o isang tradisyunal na purong HTML/JS na proyekto, ang lahat ng mga bahagi ay maaaring direktang tumakbo sa browser tulad ng mga native na tag ng HTML, nang hindi nangangailangan ng pangalawang packaging para sa isang partikular na framework.

##### Paghahambing sa shadcn

Ang [shadcn/ui](https://ui.shadcn.com) ay gumagamit ng code distribution mode, na nangangailangan sa iyong direktang kopyahin ang component code sa sarili mong proyekto. Ito ay mahigpit na nakatali sa React ecosystem at mga partikular na construction tool chain (gaya ng Tailwind CSS), at hindi magagamit sa mga frameworks. Mayroon din itong ilang mga kinakailangan para sa pagsasaayos ng engineering ng proyekto.

At ang bahagi ng `webc.site`:
- **Cross-framework universal**: Sumulat nang isang beses at maaaring direktang ipakilala at patakbuhin sa anumang front-end na framework (kahit isang framework-free na kapaligiran).
- **Environment zero dependency**: Walang kinakailangang mga partikular na tool sa packaging o CSS preprocessors, i-import lang ang pinagsama-samang mga static na file at magagamit ito sa labas ng kahon.

## Awtomatikong pag-unlad at pag-debug

### Lokal na pag-unlad at pag-debug

Ang bawat bahagi ng web page ay sumusuporta sa pagsisimula ng development server nang nakapag-iisa, na nagbibigay ng minimal na development at debugging environment:

- **Gumawa ng bagong bahagi**: Patakbuhin ang `./sh/new.js [css|js] [pangalan ng bahagi]` upang mabilis na makabuo ng skeleton ng pagbuo ng bahagi (kabilang ang demo page at pagsasaayos ng internationalization).
- **Independent debugging**: Patakbuhin ang `./dev.js [component name]` (o direktang patakbuhin ang `./dev.js`) upang simulan ang Vite development server at awtomatikong buksan ang demo page ng component sa browser. Sinusuportahan ang component hot update (HMR). Dahil decoupled ang mga link ng development at data, walang pag-develop sa front-end na link, na napaka-angkop para sa AI (gaya ng Claude Code, Google Antigravity, atbp.) upang tumulong sa ganap na awtomatikong pag-develop at pag-debug ng browser.

### I-publish ang component library

#### webc dist

Ang proseso ng packaging at pag-publish ay lubos na awtomatiko:
- **Static resource packaging**: Ang pagpapatakbo ng `./sh/dist.js` (iyon ay, ang pagpapatupad ng `webc dist` na gawain) ay maaaring awtomatikong i-scan ang lahat ng bahagi ng web page sa ilalim ng `src/`, i-compile, i-compress at i-output ang mga ito sa direktoryo ng `dist/`. Naglalaman ang direktoryo na ito ng mga JS/CSS file para sa pamamahagi ng produksyon, isang demo site na handa para sa pag-deploy sa Mga Pahina ng GitHub o Mga Pahina sa Cloudflare, at awtomatikong nakabuo ng mga file sa pagruruta ng `_redirects` at `404.html`.
- **NPM Publish**: Patakbuhin ang `./sh/npmDist.js`, awtomatikong hahawakan ng script ang mga dependency ng component, dagdagan ang numero ng bersyon ng package, at isasagawa ang `npm publish` sa isang click pagkatapos makumpleto ang packaging upang i-publish ang component library sa NPM.

### Ang platform ay responsable para sa pagsasalin

Ang balangkas ay may built-in na mga awtomatikong proseso ng pagsasalin:
1. I-configure ang mga panuntunan sa pagsasalin (tulad ng pinagmulang wika, target na wika at direktoryo na isasalin) sa `tran.yml` sa root directory ng proyekto.
2. Gumamit ng mga placeholder sa mga bahagi o dokumento nang hindi kinakailangang mag-hardcode ng maraming wika sa iyong code.
3. Patakbuhin ang `./sh/tran.js`, at awtomatikong i-extract ng translation engine ang text at tatawagan ang serbisyo ng pagsasalin ng WebC para sa pagproseso, awtomatikong bubuo ng mga entry sa pagsasalin ng YAML at dokumentasyon ng README sa iba't ibang wika.

### mga variable ng kapaligiran

Kapag nagsasagawa ng awtomatikong pagsasalin, kailangan mong i-configure ang mga sumusunod na variable ng kapaligiran upang pahintulutan ang pag-access sa translation API:

- **`WEBC_SITE_TOKEN`** (o **`WEBC_TOKEN`**): Authentication key na ginamit upang ma-access ang `webc.site` Automated Translation API. Maaaring i-inject bilang environment variable o isulat ang `token` sa `~/.config/webc.site.yml` configuration file sa home directory ng lokal na user.