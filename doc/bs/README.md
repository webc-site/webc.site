# WebC.site

## sta je ovo?

### Ovo je izvorna biblioteka web komponenti

Razvijen na osnovu [web komponente](https://developer.mozilla.org/docs/Web/API/Web_components), neovisan je o vremenu izvođenja i pogodan za sve okvire.

Izuzetno optimiziran za veličinu (jedna desetina veličine sličnih popularnih biblioteka).

Podržava 75 jezika. Možete direktno uvesti js i css za online upotrebu ili dodati komponente svom projektu po potrebi za sekundarni razvoj.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ovo je okvir za razvoj biblioteke komponenti

Ovo je statična blog verzija [storybook](https://storybook.js.org).

Izgradnja biblioteke komponenti može poboljšati efikasnost internog razvoja kompanije i izgraditi imidž brenda u tehničkom krugu.

Na osnovu [webc.site](https://github.com/webc-site/webc.site), timovi mogu lako kreirati sopstvene biblioteke komponenti i objaviti ih na [github stranici](https://pages.github.com), [cloudflare stranici](https://pages.cloudflare.com), itd. Objavljene komponente mogu se debagovati na mreži na [codepen.io](https://codepen.io) i [jsfiddle](https://jsfiddle.net).

U isto vrijeme, ugrađeni okvir za prevođenje može brzo realizirati internacionalizaciju komponenti i dokumenata, tako da vaša publika proizvoda više nije vezana jezikom.

### Ovo je nova paradigma front-end razvoja za eru vještačke inteligencije

Okvir je ugrađen `.agents/skills`, omogućavajući vještačkoj inteligenciji da vam pomogne da razvijete nove komponente jednim klikom u skladu sa najboljim praksama.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Pustite da se front-end kod promijeni iz neodrživog smeća atmosferskog programiranja u standardni dio koji se može održavati i iterativno razvijati na dugi rok.

S obzirom na karakteristike razvoja potpomognutog umjetnom inteligencijom, predložili smo i dizajnirali novu front-end razvojnu paradigmu:

1. **Sve je web komponenta**
2. **Komponenta mora biti nezavisna od pozadinske podatkovne veze, a podatkovni interfejs je izložen kao funkcija povratnog poziva**

Na taj način, umjetna inteligencija može generirati lažne podatke i prikazati različita stanja komponenti na demo stranici.

Razdvajanje razvoja komponente i interfejsa podataka, u kombinaciji sa [webc.site komponentni okvir](https://github.com/webc-site/webc.site) Još jedna glavna karakteristika:

**Svaka komponenta može samostalno pokrenuti razvojni server i razvijati i otklanjati greške na demo stranici**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Ovo smanjuje front-end vezu za razvoj i otklanjanje grešaka svake komponente na `0`.

Na ovaj način, razvojni alati potpomognuti umjetnom inteligencijom ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) više ne možete uživati u potpunom otvaranju pretraživača, bez automatskog blokiranja, itd. različiti neuredni faktori (pozadinski podaci, status prijave, usmjeravanje putanje, itd.).

Ako želite kontrolirati umjetnu inteligenciju i smanjiti troškove i povećati efikasnost, potrebna vam je nova paradigma koja minimizira razvoj i okruženje za otklanjanje grešaka svake komponente.

---

# Još nisam počeo da pišem TODO

### Biblioteka web komponenti

#### Vrhunska optimizacija veličine

Na primjer, za komponentu virtuelne trake za pomicanje, uporedite veličinu popularne [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skripte i stila nakon `gz`, kao što je prikazano u sljedećoj tabeli:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880. B    |

Virtuelna komponenta trake za pomicanje `webc.site` je samo `OverlayScrollbars``10%`.

#### Neovisno o vremenu izvođenja

Izgrađena na standardima [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), biblioteka komponenti webc.site je prirodno agnostična za vrijeme izvršavanja. Bilo da koristite React, Vue, Angular, Svelte ili tradicionalni čisti HTML/JS projekat, sve komponente se mogu pokrenuti direktno u pretraživaču poput izvornih HTML oznaka, bez potrebe za sekundarnim pakiranjem za određeni okvir.

##### Poređenje sa shadcn

[shadcn/ui](https://ui.shadcn.com) usvaja režim distribucije koda, koji zahteva da kopirate kod komponente direktno u svoj projekat. Čvrsto je vezan za React ekosistem i specifične lance alata za izgradnju (kao što je Tailwind CSS), i ne može se koristiti u različitim okvirima. Također ima određene zahtjeve za konfiguraciju projektnog inženjeringa.

I komponenta `webc.site`:
- **Univerzalno za više okvira**: Napišite jednom i može se direktno uvesti i pokrenuti u bilo kojem front-end okviru (čak i u okruženju bez okvira).
- **Nulta zavisnost od okruženja**: Nisu potrebni posebni alati za pakovanje ili CSS pretprocesori, samo uvezite kompajlirane statičke datoteke i možete ih koristiti izvan kutije.

## Automatski razvoj i otklanjanje grešaka

### Lokalni razvoj i otklanjanje grešaka

Svaka komponenta web stranice podržava nezavisno pokretanje razvojnog servera, pružajući minimalno okruženje za razvoj i otklanjanje grešaka:

- **Kreirajte novu komponentu**: Pokrenite `./sh/new.js [css|js] [ime komponente]` da brzo generišete kostur razvoja komponente (uključujući demo stranicu i konfiguraciju internacionalizacije).
- **Nezavisno otklanjanje grešaka**: Pokrenite `./dev.js [ime komponente]` (ili pokrenite `./dev.js` direktno) da pokrenete Vite razvojni server i automatski otvorite demo stranicu komponente u pretraživaču. Podržava vruće ažuriranje komponenti (HMR). Budući da su razvojni i podatkovni linkovi odvojeni, nema razvojne front-end veze, što je vrlo pogodno za AI (kao što je Claude Code, Google Antigravity, itd.) da pomogne u potpuno automatskom razvoju i otklanjanju grešaka u pretraživaču.

### Objavite biblioteku komponenti

#### webc dist

Proces pakiranja i objavljivanja je visoko automatiziran:
- **Statičko pakovanje resursa**: Pokretanje `./sh/dist.js` (to jest, izvršavanje zadatka `webc dist`) može automatski skenirati sve komponente web stranice pod `src/`, kompajlirati, komprimirati i izvesti ih u `dist/` direktorij. Ovaj direktorij sadrži JS/CSS datoteke za proizvodnu distribuciju, demo lokaciju spremnu za implementaciju na GitHub stranice ili Cloudflare stranice i automatski generirane `_redirects` i `404.html` datoteke za rutiranje.
- **NPM Publish**: Pokrenite `./sh/npmDist.js`, skripta će automatski rukovati ovisnostima komponenti, povećati broj verzije paketa i izvršiti `npm publish` jednim klikom nakon što je pakiranje završeno da objavi biblioteku komponenti u NPM-u.

### Platforma je odgovorna za prevođenje

Okvir ima ugrađene automatizirane procese prevođenja:
1. Konfigurirajte pravila prevođenja (kao što su izvorni jezik, ciljni jezik i direktorij za prevođenje) u `tran.yml` u korijenskom direktoriju projekta.
2. Koristite čuvare mjesta u komponentama ili dokumentima bez potrebe da čvrsto kodirate više jezika u svom kodu.
3. Pokrenite `./sh/tran.js` i mehanizam za prevođenje će automatski izdvojiti tekst i pozvati WebC uslugu prevođenja na obradu, automatski generirajući YAML unose prijevoda i README dokumentaciju na različitim jezicima.

### varijable okruženja

Prilikom izvođenja automatiziranog prijevoda, morate konfigurirati sljedeće varijable okruženja da ovlastite pristup API-ju za prevođenje:

- **`WEBC_SITE_TOKEN`** (ili **`WEBC_TOKEN`**): Ključ za autentifikaciju koji se koristi za pristup `webc.site` API-ju za automatsko prevođenje. Može se ubaciti kao varijabla okruženja ili napisati `token` u `~/.config/webc.site.yml` konfiguracijski fajl u kućnom direktoriju lokalnog korisnika.