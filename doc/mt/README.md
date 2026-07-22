# WebC.site

## X'inhu dan?

### Din hija librerija nattiva tal-komponenti tal-web

Żviluppat ibbażat fuq [komponenti tal-web](https://developer.mozilla.org/docs/Web/API/Web_components), huwa runtime indipendenti u adattat għall-oqfsa kollha.

Estremament ottimizzat għad-daqs (wieħed minn għaxra tad-daqs ta 'libreriji popolari simili).

Jappoġġja 75 lingwa. Tista 'timporta direttament js u css għall-użu onlajn, jew iżżid komponenti mal-proġett tiegħek kif meħtieġ għall-iżvilupp sekondarju.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dan huwa l-qafas tal-iżvilupp tal-librerija tal-komponenti

Din hija l-verżjoni statika tal-blog ta' [ktieb tal-istejjer](https://storybook.js.org).

Il-bini ta 'librerija tal-komponenti jista' jtejjeb l-effiċjenza tal-iżvilupp intern tal-kumpanija u jibni immaġni tal-marka fiċ-ċirku tekniku.

Ibbażat fuq [webc.site](https://github.com/webc-site/webc.site), it-timijiet jistgħu faċilment joħolqu l-libreriji tal-komponenti tagħhom stess u jippubblikawhom għal [paġna github](https://pages.github.com), [paġna cloudflare](https://pages.cloudflare.com), eċċ Il-komponenti ppubblikati jistgħu jiġu debugged onlajn fuq [codepen.io](https://codepen.io) u [jsfiddle](https://jsfiddle.net).

Fl-istess ħin, il-qafas tat-traduzzjoni mibni jista 'malajr jirrealizza l-internazzjonalizzazzjoni tal-komponenti u d-dokumenti, sabiex l-udjenza tal-prodott tiegħek ma tibqax marbuta bil-lingwa.

### Din hija paradigma ġdida ta 'żvilupp front-end għall-era ta' intelliġenza artifiċjali

Il-qafas huwa mibni ġewwa `.agents/skills`, li jippermetti li l-intelliġenza artifiċjali tgħinek tiżviluppa komponenti ġodda bi klikk waħda skont l-aħjar prattiki.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Ħalli l-kodiċi ta 'quddiem jinbidel minn muntanja ta' żibel mhux sostenibbli ta 'programmazzjoni ta' atmosfera għal parti standard li tista 'tinżamm u evolviet b'mod iterattiv fuq medda twila ta' żmien.

Fid-dawl tal-karatteristiċi tal-iżvilupp assistit mill-intelliġenza artifiċjali, ipproponejna u ddisinja paradigma ġdida ta 'żvilupp front-end:

1. **Kollox huwa komponent tal-web**
2. **Il-komponent għandu jkun indipendenti mill-link tad-data back-end, u l-interface tad-data hija esposta bħala funzjoni ta 'callback**

B'dan il-mod, l-intelliġenza artifiċjali tista 'tiġġenera data falza u turi stati differenti ta' komponenti fuq il-paġna demo.

Separazzjoni tal-iżvilupp tal-komponenti u l-interface tad-dejta, flimkien ma' [qafas tal-komponenti webc.site](https://github.com/webc-site/webc.site) Karatteristika ewlenija oħra:

**Kull komponent jista 'jibda s-server ta' żvilupp b'mod indipendenti u jiżviluppa u jiddebuggja fuq il-paġna demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dan inaqqas il-link front-end għall-iżvilupp u d-debugging ta' kull komponent għal `0`.

B'dan il-mod, għodod ta 'żvilupp megħjuna bl-intelliġenza artifiċjali ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) eċċ.), tista' tgawdi żvilupp kompletament awtomatiku, dejta m'għadhiex b'fatturi ta' debugging differenti status tal-login, rotta tal-passaġġ, eċċ.).

Jekk trid tikkontrolla l-intelliġenza artifiċjali u tnaqqas l-ispejjeż u żżid l-effiċjenza, għandek bżonn paradigma ġdida li timminimizza l-iżvilupp u l-ambjent tad-debugging ta 'kull komponent.

---

# Għadni ma bdejtx nikteb TODO

### Librerija tal-komponenti tal-web

#### Ottimizzazzjoni tad-daqs aħħari

Pereżempju, għall-komponent tal-iscroll bar virtwali, qabbel id-daqs tal-iskritt popolari [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) u l-istil wara `gz`, kif muri fit-tabella li ġejja:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Il-komponent virtwali tal-iscroll bar ta' `webc.site` huwa biss `OverlayScrollbars` ta' `10%`.

#### Runtime indipendenti

Mibnija fuq standards [Komponenti tal-Web](https://developer.mozilla.org/docs/Web/API/Web_components), il-librerija tal-komponenti webc.site hija naturalment runtime-agnostika. Kemm jekk qed tuża React, Vue, Angular, Svelte, jew proġett HTML/JS pur tradizzjonali, il-komponenti kollha jistgħu jaħdmu direttament fil-browser bħal tags HTML indiġeni, mingħajr il-ħtieġa ta 'ippakkjar sekondarju għal qafas speċifiku.

##### Tqabbil ma shadcn

[shadcn/ui](https://ui.shadcn.com) jadotta l-mod ta 'distribuzzjoni tal-kodiċi, li jeħtieġ li tikkopja l-kodiċi tal-komponent direttament fil-proġett tiegħek stess. Hija marbuta sew mal-ekosistema React u mal-ktajjen speċifiċi tal-għodda tal-kostruzzjoni (bħal Tailwind CSS), u ma tistax tintuża madwar l-oqfsa. Għandu wkoll ċerti rekwiżiti għall-konfigurazzjoni tal-inġinerija tal-proġett.

U l-komponent ta' `webc.site`:
- **Cross-framework universal**: Ikteb darba u tista' tiġi introdotta direttament u mmexxija fi kwalunkwe qafas front-end (anke ambjent mingħajr qafas).
- **Dipendenza żero fuq l-ambjent**: M'huma meħtieġa l-ebda għodda speċifika ta 'ppakkjar jew preproċessuri CSS, jimporta biss il-fajls statiċi kkompilati u jistgħu jintużaw barra mill-kaxxa.

## Żvilupp awtomatizzat u debugging

### Żvilupp lokali u debugging

Kull komponent tal-paġna tal-web jappoġġja l-bidu tas-server tal-iżvilupp b'mod indipendenti, u jipprovdi ambjent minimu ta' żvilupp u debugging:

- **Oħloq komponent ġdid**: Mexxi `./sh/new.js [css|js] [isem tal-komponent]` biex tiġġenera malajr skeletru tal-iżvilupp tal-komponenti (inkluża paġna demo u konfigurazzjoni tal-internazzjonalizzazzjoni).
- **Debugging indipendenti**: Mexxi `./dev.js [isem tal-komponent]` (jew mexxi `./dev.js` direttament) biex tibda s-server tal-iżvilupp Vite u tiftaħ awtomatikament il-paġna demo tal-komponent fil-browser. Jappoġġja l-aġġornament sħun tal-komponenti (HMR). Minħabba li l-iżvilupp u r-rabtiet tad-dejta huma diżakkoppjati, hemm rabta ta 'quddiem ta' żvilupp żero, li hija adattata ħafna għall-AI (bħal Claude Code, Google Antigravity, eċċ.) biex tassisti fl-iżvilupp kompletament awtomatiku u d-debugging tal-browser.

### Ippubblika librerija tal-komponenti

#### webc dist

Il-proċess tal-ippakkjar u l-pubblikazzjoni huwa awtomatizzat ħafna:
- **Ippakkjar tar-riżorsi statiċi**: It-tħaddim `./sh/dist.js` (jiġifieri, l-eżekuzzjoni tal-kompitu `webc dist`) jista 'awtomatikament jiskennja l-komponenti kollha tal-paġna web taħt `src/`, jikkompila, jikkompressa u joħroġhom fid-direttorju `dist/`. Dan id-direttorju fih fajls JS/CSS għad-distribuzzjoni tal-produzzjoni, sit demo lest għall-iskjerament fil-Paġni GitHub jew il-Paġni Cloudflare, u fajls ta' routing `_redirects` u `404.html` ġġenerati awtomatikament.
- **NPM Publish**: Mexxi `./sh/npmDist.js`, l-iskript se jimmaniġġja awtomatikament id-dipendenzi tal-komponenti, iżid in-numru tal-verżjoni tal-pakkett, u tesegwixxi `npm publish` bi klikk waħda wara li jitlesta l-ippakkjar biex tippubblika l-librerija tal-komponenti lil NPM.

### Il-pjattaforma hija responsabbli għat-traduzzjoni

Il-qafas fih proċessi ta' traduzzjoni awtomatizzati:
1. Ikkonfigura r-regoli tat-traduzzjoni (bħal lingwa tas-sors, lingwa fil-mira u direttorju li jrid jiġi tradott) f'`tran.yml` fid-direttorju tal-għeruq tal-proġett.
2. Uża placeholders f'komponenti jew dokumenti mingħajr ma jkollok hardcode diversi lingwi fil-kodiċi tiegħek.
3. Mexxi `./sh/tran.js`, u l-magna tat-traduzzjoni awtomatikament sejra t-test u ċċempel lis-servizz tat-traduzzjoni tal-WebC għall-ipproċessar, u tiġġenera awtomatikament entrati ta 'traduzzjoni YAML u dokumentazzjoni README f'diversi lingwi.

### varjabbli ambjentali

Meta twettaq traduzzjoni awtomatizzata, trid tikkonfigura l-varjabbli ambjentali li ġejjin biex tawtorizza l-aċċess għall-API tat-traduzzjoni:

- **`WEBC_SITE_TOKEN`** (jew **`WEBC_TOKEN`**): Ċavetta ta' awtentikazzjoni użata biex taċċessa l-API ta' Traduzzjoni Awtomatizzata `webc.site`. Jista 'jiġi injettat bħala varjabbli ambjentali jew miktub `token` fil-fajl ta' konfigurazzjoni `~/.config/webc.site.yml` fid-direttorju tad-dar tal-utent lokali.