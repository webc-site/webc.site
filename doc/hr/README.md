# WebC.site

## Što je ovo?

### Ovo je izvorna biblioteka web komponenti

Razvijen na temelju [web komponenti](https://developer.mozilla.org/docs/Web/API/Web_components), neovisan je o vremenu izvođenja i prikladan za sve okvire.

Izuzetno optimiziran za veličinu (jedna desetina veličine sličnih popularnih biblioteka).

Podržava 75 jezika. Možete izravno uvesti js i css za online upotrebu ili dodati komponente svom projektu prema potrebi za sekundarni razvoj.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ovo je okvir za razvoj knjižnice komponenti

Ovo je statična blog verzija [knjige priča](https://storybook.js.org).

Izgradnja biblioteke komponenti može poboljšati učinkovitost internog razvoja tvrtke i izgraditi imidž robne marke u tehničkom krugu.

Na temelju [webc.site](https://github.com/webc-site/webc.site), timovi mogu jednostavno stvoriti vlastite biblioteke komponenti i objaviti ih na [github stranici](https://pages.github.com), [cloudflare stranici](https://pages.cloudflare.com), itd. Objavljene komponente mogu se otkloniti na mreži na [codepen.io](https://codepen.io) i [jsfiddle](https://jsfiddle.net).

Istodobno, ugrađeni prevoditeljski okvir može brzo ostvariti internacionalizaciju komponenti i dokumenata, tako da publika vašeg proizvoda više nije vezana jezikom.

### Ovo je nova paradigma front-end razvoja za eru umjetne inteligencije

Okvir je ugrađen `.agents/skills`, omogućujući umjetnoj inteligenciji da vam pomogne u razvoju novih komponenti jednim klikom u skladu s najboljom praksom.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Neka se front-end kod promijeni iz neodržive planine smeća atmosferskog programiranja u standardni dio koji se može dugoročno održavati i iterativno razvijati.

S obzirom na karakteristike razvoja potpomognutog umjetnom inteligencijom, predložili smo i dizajnirali novu front-end razvojnu paradigmu:

1. **Sve je web komponenta**
2. **Komponenta mora biti neovisna o pozadinskoj podatkovnoj vezi, a podatkovno sučelje izloženo je kao funkcija povratnog poziva**

Na taj način umjetna inteligencija može generirati lažne podatke i prikazati različita stanja komponenti na demo stranici.

Odvajanje razvoja komponenti i podatkovnog sučelja, u kombinaciji s [okvirom komponente webc.site](https://github.com/webc-site/webc.site) Još jedna glavna značajka:

**Svaka komponenta može samostalno pokrenuti razvojni poslužitelj te razvijati i ispravljati pogreške na demo stranici**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Ovo smanjuje prednju vezu za razvoj i otklanjanje pogrešaka svake komponente na `0`.

Na ovaj način, razvojni alati potpomognuti umjetnom inteligencijom ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) itd.), možete uživati u potpuno automatskom razvoju, otklanjanju pogrešaka u otvorenom pregledniku i više vas neće blokirati razni neuredni čimbenici (pozadinski podaci, status prijave, usmjeravanje staze itd.).

Ako želite kontrolirati umjetnu inteligenciju i smanjiti troškove i povećati učinkovitost, potrebna vam je nova paradigma koja minimalizira razvoj i okruženje za otklanjanje pogrešaka svake komponente.

---

# Još nisam počeo pisati TODO

### Knjižnica web komponenti

#### Konačna optimizacija veličine

Na primjer, za komponentu virtualne trake za pomicanje, usporedite veličinu popularne skripte [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) i stil nakon `gz`, kao što je prikazano u sljedećoj tablici:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880. pr    |

Virtualna klizna komponenta `webc.site` samo je `10%` `OverlayScrollbars`.

#### Neovisan o vremenu izvođenja

Izgrađena na standardima [web-komponente](https://developer.mozilla.org/docs/Web/API/Web_components), biblioteka komponenti webc.site prirodno je neovisna o vremenu izvođenja. Bez obzira koristite li React, Vue, Angular, Svelte ili tradicionalni čisti HTML/JS projekt, sve komponente mogu se izvoditi izravno u pregledniku poput izvornih HTML oznaka, bez potrebe za sekundarnim pakiranjem za određeni okvir.

##### Usporedba sa shadcn

[shadcn/ui](https://ui.shadcn.com) usvaja način distribucije koda, koji zahtijeva kopiranje koda komponente izravno u vlastiti projekt. Čvrsto je povezan s ekosustavom React i specifičnim lancima alata za konstrukciju (kao što je Tailwind CSS) i ne može se koristiti u više okvira. Također ima određene zahtjeve za konfiguraciju projektnog inženjeringa.

I komponenta `webc.site`:
- **Univerzalno za više okvira**: Napišite jednom i možete ga izravno predstaviti i pokrenuti u bilo kojem front-end okviru (čak i okruženju bez okvira).
- **Nulta ovisnost o okruženju**: nisu potrebni nikakvi posebni alati za pakiranje ili CSS predprocesori, samo uvezite kompajlirane statičke datoteke i možete ih upotrebljavati odmah.

## Automatizirani razvoj i otklanjanje pogrešaka

### Lokalni razvoj i otklanjanje pogrešaka

Svaka komponenta web stranice podržava neovisno pokretanje razvojnog poslužitelja, pružajući minimalno okruženje za razvoj i otklanjanje pogrešaka:

- **Stvorite novu komponentu**: Pokrenite `./sh/new.js [css|js] [naziv komponente]` za brzo generiranje razvojnog kostura komponente (uključujući demo stranicu i konfiguraciju internacionalizacije).
- **Nezavisno otklanjanje pogrešaka**: Pokrenite `./dev.js [naziv komponente]` (ili pokrenite `./dev.js` izravno) da biste pokrenuli razvojni poslužitelj Vite i automatski otvorili demo stranicu komponente u pregledniku. Podržava vruće ažuriranje komponente (HMR). Budući da su razvojne i podatkovne veze odvojene, ne postoji razvojna prednja veza, što je vrlo prikladno za AI (kao što je Claude Code, Google Antigravity itd.) za pomoć u potpuno automatskom razvoju i otklanjanju pogrešaka u pregledniku.

### Objavite biblioteku komponenti

#### webc dist

Proces pakiranja i objavljivanja visoko je automatiziran:
- **Statično pakiranje resursa**: Pokretanje `./sh/dist.js` (tj. izvršavanje zadatka `webc dist`) može automatski skenirati sve komponente web stranice pod `src/`, prevesti ih, komprimirati i poslati ih u direktorij `dist/`. Ovaj direktorij sadrži JS/CSS datoteke za produkcijsku distribuciju, demo stranicu spremnu za implementaciju na GitHub stranice ili Cloudflare stranice i automatski generirane `_redirects` i `404.html` datoteke za usmjeravanje.
- **NPM Objava**: Pokrenite `./sh/npmDist.js`, skripta će automatski obraditi ovisnosti o komponentama, povećati broj verzije paketa i izvršiti `npm publish` jednim klikom nakon dovršetka pakiranja kako bi se biblioteka komponenti objavila na NPM-u.

### Za prijevod je odgovorna platforma

Okvir ima ugrađene automatizirane procese prevođenja:
1. Konfigurirajte pravila prijevoda (kao što su izvorni jezik, ciljni jezik i direktorij koji treba prevesti) u `tran.yml` u korijenskom direktoriju projekta.
2. Koristite rezervirana mjesta u komponentama ili dokumentima bez potrebe za kodiranjem više jezika u svom kodu.
3. Pokrenite `./sh/tran.js` i prevoditeljski mehanizam će automatski izdvojiti tekst i pozvati uslugu prevođenja WebC na obradu, automatski generirajući YAML unose prijevoda i README dokumentaciju na raznim jezicima.

### varijable okoline

Prilikom izvođenja automatiziranog prijevoda morate konfigurirati sljedeće varijable okruženja za autorizaciju pristupa API-ju za prevođenje:

- **`WEBC_SITE_TOKEN`** (ili **`WEBC_TOKEN`**): Ključ za provjeru autentičnosti koji se koristi za pristup `webc.site` API-ju za automatsko prevođenje. Može se ubaciti kao varijabla okruženja ili napisati `token` u `~/.config/webc.site.yml` konfiguracijskoj datoteci u početnom direktoriju lokalnog korisnika.