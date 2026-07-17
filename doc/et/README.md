# WebC.site

## Mis see on?

### See on oma veebikomponentide teek

See on välja töötatud [veebikomponentide](https://developer.mozilla.org/docs/Web/API/Web_components) põhjal, see on käitusajast sõltumatu ja sobib kõikidele raamistikele.

Suuruse jaoks äärmiselt optimeeritud (üks kümnendik sarnaste populaarsete raamatukogude suurusest).

Toetab 75 keelt. Saate otse importida js-i ja css-i võrgus kasutamiseks või lisada oma projektile komponente, kui see on vajalik teiseseks arendamiseks.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### See on komponentide raamatukogu arendusraamistik

See on [luguraamatu](https://storybook.js.org) staatiline ajaveebiversioon.

Komponentide raamatukogu ehitamine võib parandada ettevõtte sisemise arengu efektiivsust ja luua kaubamärgi mainet tehnikaringis.

Tuginedes saidile [webc.site](https://github.com/webc-site/webc.site), saavad meeskonnad hõlpsasti luua oma komponentide teeke ja avaldada need [githubi lehel](https://pages.github.com), [cloudflare'i lehel](https://pages.cloudflare.com) jne. Avaldatud komponente saab veebis siluda saidil [codepen.io](https://codepen.io) ja [jsfiddle](https://jsfiddle.net).

Samal ajal saab sisseehitatud tõlkeraamistik kiiresti realiseerida komponentide ja dokumentide rahvusvahelistumise, nii et teie tootepublik ei ole enam keelega seotud.

### See on tehisintellekti ajastu uus esiotsa arendamise paradigma

Raamistik on sisseehitatud `.agents/skills`, mis võimaldab tehisintellektil aidata teil parimate tavade kohaselt ühe klõpsuga uusi komponente välja töötada.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Laske esiotsa koodil muutuda jätkusuutmatust atmosfääri programmeerimise prügimäest standardseks osaks, mida saab pika aja jooksul hooldada ja iteratiivselt edasi arendada.

Pidades silmas tehisintellekti abil arendamise omadusi, pakkusime välja ja kavandasime uue esiotsa arendusparadigma:

1. **Kõik on veebikomponent**
2. **Komponent peab olema taustaandmelingist sõltumatu ja andmeliides on avatud tagasihelistamise funktsioonina**

Nii saab tehisintellekt genereerida võltsandmeid ja kuvada demolehel komponentide erinevaid olekuid.

Komponentide arenduse ja andmeliidese eraldamine koos [webc.site komponendi raamistikuga](https://github.com/webc-site/webc.site) Teine oluline funktsioon:

**Iga komponent saab iseseisvalt käivitada arendusserveri ning demolehel arendada ja siluda**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

See vähendab iga komponendi arendamiseks ja silumiseks mõeldud esiotsa linki väärtusele `0`.

Sel viisil saate tehisintellekti abiga arendustööriistu ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) jne), nautida täisautomaatset arendustegevust, mitmesugused avatud brauseri tegurid ja mitte enam automaatset arendust, (taustaandmed, sisselogimise olek, tee marsruutimine jne).

Kui soovite tehisintellekti kontrollida ja kulusid vähendada ning efektiivsust tõsta, vajate uut paradigmat, mis minimeerib iga komponendi arendus- ja silumiskeskkonda.

---

# Ma pole veel TODO kirjutamist alustanud

### Veebikomponentide raamatukogu

#### Ülim suuruse optimeerimine

Näiteks virtuaalse kerimisriba komponendi puhul võrrelge populaarse [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skripti suurust ja stiili pärast `gz`, nagu on näidatud järgmises tabelis:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 eKr    |

Kasutaja `webc.site` virtuaalse kerimisriba komponent on ainult `OverlayScrollbars` `10%`.

#### Tööajast sõltumatu

Standarditele [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) rajatud komponentide teek webc.site on loomulikult käitusaja agnostiline. Olenemata sellest, kas kasutate Reacti, Vue, Angular, Svelte'i või traditsioonilist puhast HTML/JS-projekti, saavad kõik komponendid töötada otse brauseris nagu HTML-i natiivsed sildid, ilma et oleks vaja konkreetse raamistiku jaoks teisest pakkimist.

##### Võrdlus shadcn-ga

[shadcn/ui](https://ui.shadcn.com) võtab kasutusele koodi levitamise režiimi, mis nõuab, et kopeeriksite komponendi koodi otse oma projekti. See on tihedalt seotud Reacti ökosüsteemi ja konkreetsete ehitustööriistade kettidega (nt Tailwind CSS) ning seda ei saa kasutada erinevates raamistikes. Sellel on ka teatud nõuded projekti inseneri konfiguratsioonile.

Ja `webc.site` komponent:
- **Frameworkiülene universaalne**: kirjutage üks kord ja seda saab otse tutvustada ja käivitada mis tahes esiotsa raamistikus (isegi raamistikuvabas keskkonnas).
- **Keskkonna nullsõltuvus**: spetsiaalseid pakkimistööriistu ega CSS-i eelprotsessoreid pole vaja, piisab, kui importige kompileeritud staatilised failid ja seda saab juba karbist välja võtta.

## Automatiseeritud arendus ja silumine

### Kohalik arendus ja silumine

Iga veebilehe komponent toetab arendusserveri iseseisvat käivitamist, pakkudes minimaalset arendus- ja silumiskeskkonda:

- **Looge uus komponent**: käivitage `./sh/new.js [css|js] [komponendi nimi]`, et kiiresti luua komponendi arendusskelett (sh demoleht ja rahvusvahelistumise konfiguratsioon).
- **Sõltumatu silumine**: Vite arendusserveri käivitamiseks ja komponendi demolehe automaatseks avamiseks brauseris käivitage `./dev.js [komponendi nimi]` (või käivitage `./dev.js` otse). Toetab komponentide kuuma värskendust (HMR). Kuna arendus- ja andmelingid on lahti ühendatud, on null-arenduse esiotsa link, mis sobib väga hästi AI-le (nagu Claude Code, Google Antigravity jne), et aidata täisautomaatsel arendusel ja brauseri silumisel.

### Komponentide raamatukogu avaldamine

#### webc dist

Pakkimis- ja avaldamisprotsess on kõrgelt automatiseeritud:
- **Staatilise ressursi pakkimine**: `./sh/dist.js` (st ülesande `webc dist` täitmine) võib automaatselt skannida kõiki `src/` all olevaid veebilehe komponente, kompileerida, tihendada ja väljastada need kataloogi `dist/`. See kataloog sisaldab JS/CSS-faile tootmiseks levitamiseks, GitHubi lehtedele või Cloudflare'i lehtedele juurutamiseks valmis demosaiti ning automaatselt genereeritud `_redirects` ja `404.html` marsruutimisfaile.
- **NPM-i avaldamine**: käivitage `./sh/npmDist.js`, skript käsitleb automaatselt komponentide sõltuvusi, suurendab paketi versiooninumbrit ja käivitab ühe klõpsuga `npm publish` pärast pakkimise lõpetamist, et avaldada komponentide teek NPM-is.

### Platvorm vastutab tõlkimise eest

Raamistikul on sisseehitatud automatiseeritud tõlkeprotsessid:
1. Konfigureerige tõlkereeglid (nt lähtekeel, sihtkeel ja tõlgitav kataloog) projekti juurkataloogis `tran.yml`.
2. Kasutage komponentides või dokumentides kohahoidjaid, ilma et peaksite koodis mitut keelt kõvasti kodeerima.
3. Käivitage `./sh/tran.js` ja tõlkemootor eraldab teksti automaatselt ja kutsub töötlemiseks WebC tõlketeenuse, genereerides automaatselt YAML-i tõlkekirjed ja README dokumentatsiooni erinevates keeltes.

### keskkonnamuutujad

Automaattõlke tegemisel peate tõlke API-le juurdepääsu lubamiseks konfigureerima järgmised keskkonnamuutujad:

- **`WEBC_SITE_TOKEN`** (või **`WEBC_TOKEN`**): autentimisvõti, mida kasutatakse `webc.site` automaattõlke API-le juurdepääsuks. Saab sisestada keskkonnamuutujana või kirjutada `token` `~/.config/webc.site.yml` konfiguratsioonifaili kohaliku kasutaja kodukataloogis.