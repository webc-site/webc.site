# WebC.site

## Beth yw hyn?

### Llyfrgell gydrannau gwe frodorol yw hon

Wedi'i ddatblygu ar sail [cydrannau gwe](https://developer.mozilla.org/docs/Web/API/Web_components), mae'n amser rhedeg annibynnol ac yn addas ar gyfer pob fframwaith.

Wedi'i optimeiddio'n fawr o ran maint (un rhan o ddeg maint llyfrgelloedd poblogaidd tebyg).

Yn cefnogi 75 o ieithoedd. Gallwch fewnforio js a css yn uniongyrchol i'w defnyddio ar-lein, neu ychwanegu cydrannau at eich prosiect yn ôl yr angen ar gyfer datblygiad eilaidd.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dyma'r fframwaith datblygu llyfrgell cydrannol

Dyma fersiwn blog sefydlog o [llyfr stori](https://storybook.js.org).

Gall adeiladu llyfrgell gydrannau wella effeithlonrwydd datblygu mewnol y cwmni ac adeiladu delwedd brand yn y cylch technegol.

Yn seiliedig ar [webc.site] (/0), gall timau greu eu llyfrgelloedd cydrannau eu hunain yn hawdd a'u cyhoeddi i [tudalen github](https://pages.github.com), [tudalen cloudflare] (/2), ac ati. Gellir dadfygio'r cydrannau cyhoeddedig ar-lein ar [codepen.io](https://codepen.io) a [jsfiddle](https://jsfiddle.net).

Ar yr un pryd, gall y fframwaith cyfieithu adeiledig sylweddoli rhyngwladoli cydrannau a dogfennau yn gyflym, fel nad yw cynulleidfa eich cynnyrch bellach yn rhwym gan iaith.

### Mae hwn yn batrwm newydd o ddatblygiad pen blaen ar gyfer oes deallusrwydd artiffisial

Mae'r fframwaith wedi'i ymgorffori `.agents/skills`, gan ganiatáu deallusrwydd artiffisial i'ch helpu i ddatblygu cydrannau newydd gydag un clic yn unol ag arferion gorau.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Gadewch i'r cod pen blaen newid o fod yn fynydd sbwriel anghynaliadwy o raglennu awyrgylch i ran safonol y gellir ei chynnal a'i hesblygu'n ailadroddol dros y tymor hir.

Yn wyneb nodweddion datblygiad a gynorthwyir gan ddeallusrwydd artiffisial, fe wnaethom gynnig a dylunio patrwm datblygu pen blaen newydd:

1. **Mae popeth yn gydran gwe**
2. **Rhaid i'r gydran fod yn annibynnol ar y cyswllt data pen ôl, ac mae'r rhyngwyneb data yn cael ei amlygu fel swyddogaeth galw'n ôl**

Yn y modd hwn, gall deallusrwydd artiffisial gynhyrchu data ffug ac arddangos gwahanol gyflyrau cydrannau ar y dudalen arddangos.

Gwahanu datblygiad cydrannau a rhyngwyneb data, ynghyd â [fframwaith cydran webc.site](https://github.com/webc-site/webc.site) Prif nodwedd arall:

**Gall pob cydran gychwyn y gweinydd datblygu yn annibynnol a datblygu a dadfygio ar y dudalen demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Mae hyn yn lleihau'r cyswllt pen blaen ar gyfer datblygu a dadfygio pob cydran i `0`.

Yn y modd hwn, offer datblygu a gynorthwyir gan ddeallusrwydd artiffisial ([Cod Claude] (/0), [OpenAI Codex] (/1), [Google Antigravity] (/2), [Cursor] (/3), [Syrffio Gwynt] (/4), [Devin] (/5), [OpenHands] (/6) ac ati), gallwch fwynhau datblygiad cwbl awtomatig, rhwystrau wrth gefn data amrywiol, a ffactorau difa chwilod porwr agored heb eu blocio mwyach. statws mewngofnodi, llwybro llwybr, ac ati).

Os ydych chi am reoli deallusrwydd artiffisial a lleihau costau a chynyddu effeithlonrwydd, mae angen patrwm newydd arnoch sy'n lleihau amgylchedd datblygu a dadfygio pob cydran.

---

# Dydw i ddim wedi dechrau ysgrifennu TODO eto

### Llyfrgell cydrannau gwe

#### Optimeiddio maint yn y pen draw

Er enghraifft, ar gyfer y gydran bar sgrolio rhithwir, cymharwch faint y sgript boblogaidd [OverlayScrollbars] (/0) a'r arddull ar ôl `gz`, fel y dangosir yn y tabl canlynol:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Dim ond `OverlayScrollbars` `10%` yw cydran bar sgrolio rhithwir `webc.site`.

#### Rhedeg annibynnol

Wedi'i adeiladu ar safonau [Cydrannau Gwe](https://developer.mozilla.org/docs/Web/API/Web_components), mae'r llyfrgell gydrannau webc.site yn naturiol amser rhedeg-agnostig. P'un a ydych chi'n defnyddio React, Vue, Angular, Svelte, neu brosiect HTML/JS pur traddodiadol, gall yr holl gydrannau redeg yn uniongyrchol yn y porwr fel tagiau HTML brodorol, heb fod angen pecynnu eilaidd ar gyfer fframwaith penodol.

##### Cymharer â shadcn

Mae [shadcn/ui] (/0) yn mabwysiadu'r modd dosbarthu cod, sy'n gofyn ichi gopïo'r cod cydran yn uniongyrchol i'ch prosiect eich hun. Mae wedi'i rwymo'n dynn i ecosystem React a chadwyni offer adeiladu penodol (fel Tailwind CSS), ac ni ellir ei ddefnyddio ar draws fframweithiau. Mae ganddo hefyd ofynion penodol ar gyfer cyfluniad peirianneg prosiect.

A chydran `webc.site`:
- ** Traws-fframwaith cyffredinol**: Ysgrifennwch unwaith a gellir ei gyflwyno'n uniongyrchol a'i redeg mewn unrhyw fframwaith pen blaen (hyd yn oed amgylchedd heb fframwaith).
- **Dibyniaeth sero ar yr amgylchedd**: Nid oes angen unrhyw offer pecynnu penodol na rhagbroseswyr CSS, dim ond mewnforio'r ffeiliau sefydlog a luniwyd a gellir eu defnyddio allan o'r blwch.

## Datblygiad awtomataidd a dadfygio

### Datblygu lleol a dadfygio

Mae pob cydran tudalen we yn cefnogi cychwyn y gweinydd datblygu yn annibynnol, gan ddarparu amgylchedd datblygu a dadfygio lleiaf posibl:

- **Creu cydran newydd**: Rhedeg `./sh/new.js [css|js] [enw'r gydran]` i gynhyrchu sgerbwd datblygu cydran yn gyflym (gan gynnwys tudalen arddangos a chyfluniad rhyngwladoli).
- ** Dadfygio annibynnol**: Rhedeg `./dev.js [enw'r gydran]` (neu redeg `./dev.js` yn uniongyrchol) i gychwyn y gweinydd datblygu Vite ac agor tudalen demo'r gydran yn y porwr yn awtomatig. Yn cefnogi diweddariad poeth cydran (HMR). Oherwydd bod cysylltiadau datblygu a data wedi'u datgysylltu, nid oes unrhyw gyswllt pen blaen datblygiad, sy'n addas iawn ar gyfer AI (fel Cod Claude, Google Antigravity, ac ati) i gynorthwyo â datblygiad cwbl awtomatig a dadfygio porwr.

### Cyhoeddi llyfrgell gydrannau

#### webc dist

Mae'r broses becynnu a chyhoeddi yn awtomataidd iawn:
- **Pecynnu adnoddau statig**: Gall rhedeg `./sh/dist.js` (hynny yw, cyflawni'r dasg `webc dist`) sganio holl gydrannau'r dudalen we o dan `src/` yn awtomatig, eu llunio, eu cywasgu a'u hallbynnu i'r cyfeiriadur `dist/`. Mae'r cyfeiriadur hwn yn cynnwys ffeiliau JS/CSS i'w dosbarthu, gwefan arddangos sy'n barod i'w defnyddio ar GitHub Pages neu Cloudflare Pages, ac a gynhyrchir yn awtomatig `_redirects` a `404.html` ffeiliau llwybro.
- ** NPM Publish**: Rhedeg `./sh/npmDist.js`, bydd y sgript yn trin dibyniaethau cydran yn awtomatig, yn cynyddu rhif fersiwn y pecyn, ac yn gweithredu `npm publish` gydag un clic ar ôl i'r pecynnu gael ei gwblhau i gyhoeddi'r llyfrgell gydrannau i NPM.

### Mae'r platfform yn gyfrifol am gyfieithu

Mae’r fframwaith yn cynnwys prosesau cyfieithu awtomataidd:
1. Ffurfweddu rheolau cyfieithu (megis iaith ffynhonnell, iaith darged a chyfeiriadur i'w cyfieithu) yn `tran.yml` yng nghyfeiriadur gwraidd y prosiect.
2. Defnyddiwch ddalfannau mewn cydrannau neu ddogfennau heb orfod codio ieithoedd lluosog yn galed yn eich cod.
3. Rhedeg `./sh/tran.js`, a bydd y peiriant cyfieithu yn echdynnu'r testun yn awtomatig ac yn galw gwasanaeth cyfieithu WebC i'w brosesu, gan gynhyrchu cofnodion cyfieithu YAML a dogfennaeth README mewn amrywiol ieithoedd yn awtomatig.

### newidynnau amgylchedd

Wrth berfformio cyfieithu awtomataidd, mae angen i chi ffurfweddu'r newidynnau amgylchedd canlynol i awdurdodi mynediad i'r API cyfieithu:

- **`WEBC_SITE_TOKEN`** (neu **`WEBC_TOKEN`**): Allwedd ddilysu a ddefnyddir i gyrchu `webc.site` API Cyfieithu Awtomataidd. Gellir ei chwistrellu fel newidyn amgylchedd neu ei ysgrifennu `token` yn y ffeil ffurfweddu `~/.config/webc.site.yml` yng nghyfeiriadur cartref y defnyddiwr lleol.