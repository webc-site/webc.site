# WebC.site

## kaj je to

### To je domača knjižnica spletnih komponent

Razvit na podlagi [spletnih komponent](https://developer.mozilla.org/docs/Web/API/Web_components), je neodvisen od izvajalnega časa in primeren za vsa ogrodja.

Izjemno optimizirana za velikost (ena desetina velikosti podobnih priljubljenih knjižnic).

Podpira 75 jezikov. Lahko neposredno uvozite js in css za spletno uporabo ali dodate komponente v svoj projekt, kot je potrebno za sekundarni razvoj.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### To je okvir za razvoj knjižnice komponent

To je statična različica bloga [storybook](https://storybook.js.org).

Izgradnja knjižnice komponent lahko izboljša učinkovitost notranjega razvoja podjetja in zgradi podobo blagovne znamke v tehničnem krogu.

Na podlagi [webc.site](https://github.com/webc-site/webc.site) lahko ekipe preprosto ustvarijo lastne knjižnice komponent in jih objavijo na [strani github](https://pages.github.com), [strani cloudflare](https://pages.cloudflare.com) itd. Objavljene komponente je mogoče odpraviti v spletu na [codepen.io](https://codepen.io) in [jsfiddle](https://jsfiddle.net).

Hkrati lahko vgrajeno prevajalsko ogrodje hitro realizira internacionalizacijo komponent in dokumentov, tako da občinstvo vašega izdelka ni več vezano na jezik.

### To je nova paradigma front-end razvoja za dobo umetne inteligence

Ogrodje je vgrajeno `.agents/skills`, kar omogoča umetni inteligenci, da vam pomaga razviti nove komponente z enim klikom v skladu z najboljšimi praksami.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Naj se sprednja koda spremeni iz nevzdržne gore smeti programiranja atmosfere v standardni del, ki ga je mogoče dolgoročno vzdrževati in iterativno razvijati.

Glede na značilnosti razvoja s pomočjo umetne inteligence smo predlagali in oblikovali novo front-end razvojno paradigmo:

1. **Vse je spletna komponenta**
2. **Komponenta mora biti neodvisna od zaledne podatkovne povezave, podatkovni vmesnik pa je izpostavljen kot funkcija povratnega klica**

Na ta način lahko umetna inteligenca ustvari lažne podatke in prikaže različna stanja komponent na demo strani.

Ločitev razvoja komponente in podatkovnega vmesnika v kombinaciji z [ogrodjem komponente webc.site](https://github.com/webc-site/webc.site) Druga pomembna značilnost:

**Vsaka komponenta lahko samostojno zažene razvojni strežnik ter razvija in odpravlja napake na predstavitveni strani**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

To zmanjša sprednjo povezavo za razvoj in odpravljanje napak vsake komponente na `0`.

Na ta način lahko z razvojnimi orodji, podprtimi z umetno inteligenco ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) itd.), uživate v popolnoma samodejnem razvoju, odprtem odpravljanju napak v brskalniku in vas ne bodo več blokirali različni neurejeni dejavniki (podatki ozadja, status prijave, usmerjanje poti itd.).

Če želite nadzorovati umetno inteligenco ter zmanjšati stroške in povečati učinkovitost, potrebujete novo paradigmo, ki minimizira okolje za razvoj in odpravljanje napak vsake komponente.

---

# Nisem še začel pisati TODO

### Knjižnica spletnih komponent

#### Končna optimizacija velikosti

Na primer, za komponento navideznega drsnega traku primerjajte velikost priljubljenega skripta [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) in slog za `gz`, kot je prikazano v naslednji tabeli:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 b    |

Komponenta navideznega drsnega traku `webc.site` je samo `10%` `OverlayScrollbars`.

#### Neodvisen od časa delovanja

Knjižnica komponent webc.site, zgrajena na standardih [Spletne komponente](https://developer.mozilla.org/docs/Web/API/Web_components), je naravno neodvisna od časa izvajanja. Ne glede na to, ali uporabljate React, Vue, Angular, Svelte ali tradicionalni čisti projekt HTML/JS, se lahko vse komponente izvajajo neposredno v brskalniku kot izvorne oznake HTML, brez potrebe po sekundarnem pakiranju za določen okvir.

##### Primerjava s shadcn

[shadcn/ui](https://ui.shadcn.com) sprejme način distribucije kode, ki zahteva, da kodo komponente kopirate neposredno v svoj projekt. Tesno je vezan na ekosistem React in določene verige orodij za gradnjo (kot je Tailwind CSS) in ga ni mogoče uporabiti v različnih ogrodjih. Ima tudi določene zahteve za konfiguracijo projektnega inženiringa.

In komponenta `webc.site`:
- **Univerzalno med okvirji**: Napišite enkrat in ga je mogoče neposredno uvesti in izvajati v katerem koli sprednjem ogrodju (tudi v okolju brez ogrodja).
- **Ničelna odvisnost od okolja**: Posebna orodja za pakiranje ali predprocesorji CSS niso potrebna, samo uvozite prevedene statične datoteke in že jih lahko uporabite takoj.

## Avtomatiziran razvoj in odpravljanje napak

### Lokalni razvoj in odpravljanje napak

Vsaka komponenta spletne strani podpira neodvisen zagon razvojnega strežnika, kar zagotavlja minimalno okolje za razvoj in odpravljanje napak:

- **Ustvarite novo komponento**: zaženite `./sh/new.js [css|js] [ime komponente]`, da hitro ustvarite razvojno okostje komponente (vključno s predstavitveno stranjo in konfiguracijo internacionalizacije).
- **Neodvisno odpravljanje napak**: Zaženite `./dev.js [ime komponente]` (ali neposredno zaženite `./dev.js`), da zaženete razvojni strežnik Vite in samodejno odprete predstavitveno stran komponente v brskalniku. Podpira vročo posodobitev komponente (HMR). Ker so razvojne in podatkovne povezave ločene, ni nobene razvojne sprednje povezave, kar je zelo primerno za AI (kot je Claude Code, Google Antigravity itd.) za pomoč pri popolnoma samodejnem razvoju in odpravljanju napak brskalnika.

### Objavi knjižnico komponent

#### webc dist

Postopek pakiranja in objave je zelo avtomatiziran:
- **Statično pakiranje virov**: Izvajanje `./sh/dist.js` (to je izvajanje naloge `webc dist`) lahko samodejno pregleda vse komponente spletne strani pod `src/`, jih prevede, stisne in izpiše v imenik `dist/`. Ta imenik vsebuje datoteke JS/CSS za produkcijsko distribucijo, predstavitveno mesto, pripravljeno za uvedbo na straneh GitHub ali Cloudflare, in samodejno ustvarjene usmerjevalne datoteke `_redirects` in `404.html`.
- **Objava NPM**: Zaženite `./sh/npmDist.js`, skript bo samodejno obravnaval odvisnosti komponent, povečal številko različice paketa in izvedel `npm publish` z enim klikom, ko je pakiranje končano, da objavi knjižnico komponent v NPM.

### Za prevod je odgovorna platforma

Ogrodje ima vgrajene postopke avtomatiziranega prevajanja:
1. Konfigurirajte pravila prevajanja (kot so izvorni jezik, ciljni jezik in imenik za prevod) v `tran.yml` v korenskem imeniku projekta.
2. Uporabite ogradne oznake v komponentah ali dokumentih, ne da bi morali v svojo kodo kodirati več jezikov.
3. Zaženite `./sh/tran.js` in prevajalski mehanizem bo samodejno izvlekel besedilo in poklical prevajalsko storitev WebC za obdelavo ter samodejno ustvaril vnose prevodov YAML in dokumentacijo README v različnih jezikih.

### spremenljivke okolja

Pri izvajanju samodejnega prevajanja morate konfigurirati naslednje spremenljivke okolja za odobritev dostopa do API-ja za prevajanje:

- **`WEBC_SITE_TOKEN`** (ali **`WEBC_TOKEN`**): ključ za preverjanje pristnosti, ki se uporablja za dostop do API-ja za samodejno prevajanje `webc.site`. Lahko se vstavi kot spremenljivka okolja ali zapiše `token` v konfiguracijsko datoteko `~/.config/webc.site.yml` v domačem imeniku lokalnega uporabnika.