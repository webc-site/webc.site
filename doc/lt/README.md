# WebC.site

## kas tai?

### Tai yra vietinė žiniatinklio komponentų biblioteka

Sukurta remiantis [žiniatinklio komponentais] (/0), jis nepriklauso nuo vykdymo laiko ir tinka visoms sistemoms.

Itin optimizuotas pagal dydį (viena dešimtoji panašių populiarių bibliotekų dydžio).

Palaiko 75 kalbas. Galite tiesiogiai importuoti js ir css, kad galėtumėte naudoti internetu, arba pridėti komponentų prie projekto, jei reikia antriniam vystymui.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Tai yra komponentų bibliotekos kūrimo sistema

Tai yra statinio tinklaraščio [siužetinės knygos] (/0) versija.

Komponentų bibliotekos sukūrimas gali pagerinti įmonės vidinės plėtros efektyvumą ir sukurti prekės ženklo įvaizdį techniniame rate.

Remdamosi [webc.site](https://github.com/webc-site/webc.site), komandos gali lengvai sukurti savo komponentų bibliotekas ir paskelbti jas [github puslapyje](https://pages.github.com), [cloudflare puslapyje](https://pages.cloudflare.com) ir kt. Paskelbtus komponentus galima derinti internete adresu [codepen.io](https://codepen.io) ir [jsfiddle](https://jsfiddle.net).

Tuo pačiu metu integruota vertimo sistema gali greitai įgyvendinti komponentų ir dokumentų internacionalizavimą, kad jūsų produktų auditorija nebebūtų suvaržyta kalbos.

### Tai nauja dirbtinio intelekto eros front-end plėtros paradigma

Sistema yra integruota `.agents/skills`, todėl dirbtinis intelektas gali padėti jums vienu spustelėjimu sukurti naujus komponentus pagal geriausią praktiką.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Leiskite priekiniam kodui pasikeisti iš netvaraus atmosferos programavimo kalno į standartinę dalį, kurią galima prižiūrėti ir nuolat tobulinti ilgą laiką.

Atsižvelgdami į dirbtinio intelekto kūrimo ypatybes, pasiūlėme ir sukūrėme naują priekinės kūrimo paradigmą:

1. **Viskas yra žiniatinklio komponentas**
2. **Komponentas turi būti nepriklausomas nuo galinio duomenų ryšio, o duomenų sąsaja turi būti rodoma kaip atgalinio skambinimo funkcija**

Tokiu būdu dirbtinis intelektas gali generuoti netikrus duomenis ir demonstraciniame puslapyje rodyti skirtingas komponentų būsenas.

Komponentų kūrimo ir duomenų sąsajos atskyrimas kartu su [webc.site komponentų sistema](https://github.com/webc-site/webc.site) Kita svarbi savybė:

**Kiekvienas komponentas gali savarankiškai paleisti kūrimo serverį ir kurti bei derinti demonstraciniame puslapyje**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Tai sumažina kiekvieno komponento kūrimo ir derinimo sąsają iki `0`.

Tokiu būdu naudojant dirbtinio intelekto kūrimo įrankius ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) ir tt), galite mėgautis visiškai automatiniu kūrimu, atvirais naršyklės veiksniais ir blokavimu. (backend duomenys, prisijungimo būsena, kelio maršrutas ir kt.).

Jei norite kontroliuoti dirbtinį intelektą ir sumažinti išlaidas bei padidinti efektyvumą, jums reikia naujos paradigmos, kuri sumažintų kiekvieno komponento kūrimo ir derinimo aplinką.

---

# Dar nepradėjau rašyti TODO

### Žiniatinklio komponentų biblioteka

#### Galutinis dydžio optimizavimas

Pavyzdžiui, virtualios slinkties juostos komponento atveju palyginkite populiaraus [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) scenarijaus dydį ir stilių po `gz`, kaip parodyta šioje lentelėje:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 m    |

`webc.site` virtualios slinkties juostos komponentas yra tik `OverlayScrollbars` `10%`.

#### Veikimo laikas nepriklausomas

Sukurta remiantis standartais [Web Components] (/0), webc.site komponentų biblioteka natūraliai yra agnostinė vykdymo metu. Nesvarbu, ar naudojate „React“, „Vue“, „Angular“, „Svelte“, ar tradicinį gryną HTML/JS projektą, visi komponentai gali būti paleisti tiesiai naršyklėje, kaip vietinės HTML žymos, nereikalaujant antrinės pakuotės konkrečiai sistemai.

##### Palyginimas su shadcn

[shadcn/ui](https://ui.shadcn.com) priima kodo platinimo režimą, kurį naudojant reikia nukopijuoti komponento kodą tiesiai į savo projektą. Jis glaudžiai susietas su „React“ ekosistema ir konkrečiomis statybos įrankių grandinėmis (pvz., „Tailwind CSS“) ir negali būti naudojamas įvairiose sistemose. Jis taip pat turi tam tikrus reikalavimus projekto inžinerinei konfigūracijai.

Ir `webc.site` komponentas:
- **Universalus keliuose rėmuose**: parašykite vieną kartą ir galite tiesiogiai pristatyti bei paleisti bet kurioje sąsajoje (net ir aplinkoje be rėmų).
- **Nepriklausomybė nuo aplinkos**: nereikia jokių specialių pakavimo įrankių ar CSS pirminių procesorių, tiesiog importuokite sukompiliuotus statinius failus ir juos galėsite naudoti iš karto.

## Automatizuotas kūrimas ir derinimas

### Vietinė plėtra ir derinimas

Kiekvienas tinklalapio komponentas palaiko kūrimo serverio paleidimą savarankiškai, suteikdamas minimalią kūrimo ir derinimo aplinką:

- **Sukurkite naują komponentą**: paleiskite `./sh/new.js [css|js] [komponento pavadinimas]`, kad greitai sugeneruotumėte komponento kūrimo skeletą (įskaitant demonstracinį puslapį ir internacionalizavimo konfigūraciją).
- **Nepriklausomas derinimas**: paleiskite `./dev.js [komponento pavadinimas]` (arba paleiskite `./dev.js` tiesiogiai), kad paleistumėte Vite kūrimo serverį ir automatiškai atidarytumėte komponento demonstracinį puslapį naršyklėje. Palaiko komponentų karštąjį atnaujinimą (HMR). Kadangi kūrimo ir duomenų nuorodos yra atsietos, nėra kūrimo priekinės sąsajos, kuri labai tinka AI (pvz., Claude Code, Google Antigravity ir kt.), kad padėtų visiškai automatiniam kūrimui ir naršyklės derinimui.

### Paskelbkite komponentų biblioteką

#### webc dist

Pakavimo ir leidybos procesas yra labai automatizuotas:
- **Statinis išteklių paketas**: Vykdant `./sh/dist.js` (ty vykdant `webc dist` užduotį) galima automatiškai nuskaityti visus tinklalapio komponentus, esančius `src/`, kompiliuoti, suspausti ir išvesti juos į `dist/` katalogą. Šiame kataloge yra JS/CSS failai, skirti gamybiniam platinimui, demonstracinė svetainė, paruošta diegti „GitHub“ puslapiuose arba „Cloudflare“ puslapiuose, ir automatiškai sugeneruoti `_redirects` ir `404.html` maršruto failai.
- **NPM Publish**: paleiskite `./sh/npmDist.js`, scenarijus automatiškai tvarkys komponentų priklausomybes, padidins paketo versijos numerį ir vienu spustelėjimu vykdys `npm publish`, kai supakavimas bus baigtas, kad paskelbtų komponentų biblioteką NPM.

### Platforma yra atsakinga už vertimą

Sistemoje yra integruoti automatiniai vertimo procesai:
1. Konfigūruokite vertimo taisykles (pvz., šaltinio kalbą, tikslinę kalbą ir verčiamą katalogą) `tran.yml` projekto šakniniame kataloge.
2. Komponentuose ar dokumentuose naudokite vietos rezervavimo ženklus, nereikės koduoti kelių kalbų kode.
3. Paleiskite `./sh/tran.js` ir vertimo variklis automatiškai išskirs tekstą ir iškvies WebC vertimo tarnybą apdoroti, automatiškai generuodamas YAML vertimo įrašus ir README dokumentaciją įvairiomis kalbomis.

### aplinkos kintamieji

Vykdydami automatinį vertimą, turite sukonfigūruoti šiuos aplinkos kintamuosius, kad įgalintumėte prieigą prie vertimo API:

- **`WEBC_SITE_TOKEN`** (arba **`WEBC_TOKEN`**): autentifikavimo raktas, naudojamas norint pasiekti `webc.site` automatinio vertimo API. Galima įvesti kaip aplinkos kintamąjį arba įrašyti `token` į `~/.config/webc.site.yml` konfigūracijos failą vietinio vartotojo namų kataloge.