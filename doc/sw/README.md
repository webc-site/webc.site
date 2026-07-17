# WebC.site

## Hii ni nini?

### Hii ni maktaba asili ya sehemu ya wavuti

Imeundwa kulingana na [vijenzi vya wavuti](https://developer.mozilla.org/docs/Web/API/Web_components), ni huru wakati wa utekelezaji na inafaa kwa mifumo yote.

Imeboreshwa sana kwa ukubwa (sehemu moja ya kumi ya ukubwa wa maktaba zinazofanana).

Inaauni lugha 75. Unaweza kuingiza moja kwa moja js na css kwa matumizi ya mtandaoni, au kuongeza vipengele kwenye mradi wako kama inavyohitajika kwa uendelezaji wa pili.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Hii ni sehemu ya mfumo wa maendeleo ya maktaba

Hili ni toleo tuli la blogu ya [kitabu cha hadithi](https://storybook.js.org).

Kuunda maktaba ya sehemu kunaweza kuboresha ufanisi wa maendeleo ya ndani ya kampuni na kujenga taswira ya chapa katika mduara wa kiufundi.

Kulingana na [webc.site](https://github.com/webc-site/webc.site), timu zinaweza kuunda maktaba za vijenzi vyao kwa urahisi na kuzichapisha kwenye [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), n.k. Vipengee vilivyochapishwa vinaweza kutatuliwa mtandaoni kwenye [codepen.io](https://codepen.io) na [jsfiddle](https://jsfiddle.net).

Wakati huo huo, mfumo wa tafsiri uliojengewa ndani unaweza kutambua kwa haraka ujumuishaji wa vipengele na hati za kimataifa, ili hadhira ya bidhaa yako isifungwe tena na lugha.

### Hii ni dhana mpya ya maendeleo ya mbele kwa enzi ya akili ya bandia

Mfumo huu umejengewa ndani `.agents/skills`, ukiruhusu akili bandia kukusaidia kuunda vipengee vipya kwa mbofyo mmoja kulingana na mbinu bora.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Acha msimbo wa mwisho wa mbele ubadilike kutoka kwenye mlima wa takataka usioendelevu wa programu ya anga hadi sehemu ya kawaida inayoweza kudumishwa na kubadilishwa mara kwa mara kwa muda mrefu.

Kwa kuzingatia sifa za ukuzaji wa usaidizi wa akili bandia, tulipendekeza na kuunda dhana mpya ya maendeleo ya mbele:

1. **Kila kitu ni sehemu ya wavuti**
2. **Kipengele lazima kiwe huru kutokana na kiungo cha data cha nyuma, na kiolesura cha data kinafichuliwa kama kitendakazi cha kupiga simu**

Kwa njia hii, akili ya bandia inaweza kutoa data bandia na kuonyesha hali tofauti za vipengee kwenye ukurasa wa onyesho.

Mgawanyo wa uundaji wa kipengee na kiolesura cha data, pamoja na [mfumo wa sehemu ya tovuti](https://github.com/webc-site/webc.site) Kipengele kingine kikuu:

**Kila sehemu inaweza kuanzisha seva ya usanidi kwa kujitegemea na kukuza na kutatua kwenye ukurasa wa onyesho**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Hii inapunguza kiungo cha mbele cha ukuzaji na utatuzi wa kila kijenzi hadi `0`.

Kwa njia hii, zana za ukuzaji zinazosaidiwa na akili bandia ([Msimbo wa Claude](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) n.k.), na huwezi kufurahia uundaji wa uboreshaji wa kivinjari kiotomatiki kwa kutumia vipengele mbalimbali vilivyozuiwa kiotomatiki tena. (data ya nyuma, hali ya kuingia, uelekezaji wa njia, n.k.).

Ikiwa unataka kudhibiti akili ya bandia na kupunguza gharama na kuongeza ufanisi, unahitaji dhana mpya ambayo inapunguza maendeleo na utatuzi wa mazingira ya kila sehemu.

---

# Bado sijaanza kuandika TODO

### Maktaba ya sehemu ya wavuti

#### Uboreshaji wa ukubwa wa mwisho

Kwa mfano, kwa kijenzi cha upau wa kusogeza pepe, linganisha ukubwa wa hati na mtindo maarufu wa [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) baada ya `gz`, kama inavyoonyeshwa kwenye jedwali lifuatalo:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Kipengele cha upau wa kusogeza wa `webc.site` ni `OverlayScrollbars` `10%` pekee.

#### Muda wa kukimbia unajitegemea

Imeundwa kwa misingi ya viwango [Vipengele vya Wavuti](https://developer.mozilla.org/docs/Web/API/Web_components), maktaba ya sehemu ya tovuti kwa kawaida ni ya wakati wa kutekelezwa. Iwe unatumia React, Vue, Angular, Svelte, au mradi wa kawaida wa HTML/JS, vipengee vyote vinaweza kuendeshwa moja kwa moja kwenye kivinjari kama vile lebo asilia za HTML, bila kuhitaji ufungaji wa pili wa mfumo mahususi.

##### Kulinganisha na shadcn

[shadcn/ui](https://ui.shadcn.com) inachukua hali ya usambazaji wa msimbo, ambayo inakuhitaji unakili msimbo wa sehemu moja kwa moja kwenye mradi wako mwenyewe. Imefungwa kwa mfumo ikolojia wa React na minyororo mahususi ya zana za ujenzi (kama vile Tailwind CSS), na haiwezi kutumika katika mifumo yote. Pia ina mahitaji fulani ya usanidi wa uhandisi wa mradi.

Na sehemu ya `webc.site`:
- **Muundo mtambuka kwa wote**: Andika mara moja na unaweza kutambulishwa moja kwa moja na kuendeshwa katika mfumo wowote wa mbele (hata mazingira yasiyo na mfumo).
- **Utegemezi sufuri wa Mazingira**: Hakuna zana mahususi za upakiaji au vichakataji awali vya CSS vinavyohitajika, ingiza tu faili tuli zilizokusanywa na zinaweza kutumika nje ya kisanduku.

## Ukuzaji otomatiki na utatuzi

### Maendeleo ya eneo na utatuzi

Kila sehemu ya ukurasa wa wavuti inasaidia kuanzisha seva ya ukuzaji kwa kujitegemea, ikitoa maendeleo kidogo na mazingira ya utatuzi:

- **Unda kijenzi kipya**: Endesha `./sh/new.js [css|js] [component name]` ili kuzalisha kwa haraka kiunzi cha kijenzi cha kijenzi (ikiwa ni pamoja na ukurasa wa onyesho na usanidi wa kimataifa).
- **Utatuzi wa kujitegemea**: Endesha `./dev.js [component name]` (au endesha `./dev.js` moja kwa moja) ili kuanzisha seva ya ukuzaji Vite na ufungue kiotomati ukurasa wa onyesho wa kijenzi kwenye kivinjari. Inasaidia sasisho la sehemu moto (HMR). Kwa sababu viungo vya ukuzaji na data vimetenganishwa, hakuna kiungo cha mwisho cha uundaji sifuri, ambacho kinafaa sana kwa AI (kama vile Msimbo wa Claude, Google Antigravity, n.k.) kusaidia katika uundaji otomatiki kikamilifu na utatuzi wa kivinjari.

### Chapisha maktaba ya sehemu

#### webc dist

Mchakato wa ufungaji na uchapishaji ni wa kiotomatiki sana:
- **Ufungaji wa rasilimali tuli**: Uendeshaji `./sh/dist.js` (yaani, kutekeleza `webc dist` kazi) kunaweza kuchanganua kiotomatiki vijenzi vyote vya ukurasa wa wavuti chini ya `src/`, kukusanya, kubana na kuzitoa kwenye saraka ya `dist/`. Saraka hii ina faili za JS/CSS kwa usambazaji wa uzalishaji, tovuti ya onyesho iliyo tayari kutumwa kwa Kurasa za GitHub au Kurasa za Cloudflare, na kuzalishwa kiotomatiki `_redirects` na `404.html` faili za kuelekeza.
- **NPM Chapisha**: Endesha `./sh/npmDist.js`, hati itashughulikia kiotomatiki vitegemezi vya vijenzi, kuongeza nambari ya toleo la kifurushi, na kutekeleza `npm publish` kwa mbofyo mmoja baada ya upakiaji kukamilika ili kuchapisha maktaba ya kijenzi kwa NPM.

### Jukwaa linawajibika kwa tafsiri

Mfumo huo una michakato ya tafsiri ya kiotomatiki iliyojumuishwa:
1. Sanidi sheria za utafsiri (kama vile lugha-chanzo, lugha lengwa na saraka itakayotafsiriwa) katika `tran.yml` katika saraka ya msingi ya mradi.
2. Tumia vishikilia nafasi katika vipengee au hati bila kulazimika kuweka msimbo kwa lugha nyingi katika msimbo wako.
3. Endesha `./sh/tran.js`, na injini ya kutafsiri itatoa maandishi kiotomatiki na kupiga simu kwa huduma ya utafsiri ya WebC ili kuchakatwa, na kuzalisha kiotomatiki maingizo ya tafsiri ya YAML na nyaraka za README katika lugha mbalimbali.

### vigezo vya mazingira

Unapofanya tafsiri ya kiotomatiki, unahitaji kusanidi anuwai za mazingira ili kuidhinisha ufikiaji wa API ya tafsiri:

- **`WEBC_SITE_TOKEN`** (au **`WEBC_TOKEN`**): Kitufe cha Uthibitishaji kinatumika kufikia `webc.site` API ya Tafsiri Kiotomatiki. Inaweza kudungwa kama kigezo cha mazingira au kuandikwa `token` katika `~/.config/webc.site.yml` faili ya usanidi katika saraka ya nyumbani ya mtumiaji wa ndani.