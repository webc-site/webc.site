# WebC.site

## Mikä tämä on?

### Tämä on natiivi verkkokomponenttikirjasto

[Web-komponenttien](https://developer.mozilla.org/docs/Web/API/Web_components) perusteella kehitetty se on suoritusajasta riippumaton ja sopii kaikkiin kehyksiin.

Erittäin optimoitu koon mukaan (kymmenesosa samankaltaisten suosittujen kirjastojen koosta).

Tukee 75 kieltä. Voit tuoda js- ja css-tiedostoja suoraan verkkokäyttöön tai lisätä komponentteja projektiisi tarpeen mukaan toissijaista kehitystä varten.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Tämä on komponenttikirjaston kehityskehys

Tämä on [tarinakirjan](https://storybook.js.org) staattinen blogiversio.

Komponenttikirjaston rakentaminen voi tehostaa yrityksen sisäistä kehitystä ja rakentaa brändikuvaa teknisessä piirissä.

Sivuston [webc.site](https://github.com/webc-site/webc.site) perusteella tiimit voivat helposti luoda omia komponenttikirjastoja ja julkaista ne [github-sivulla](https://pages.github.com), [cloudflare-sivulla](https://pages.cloudflare.com) jne. Julkaistujen komponenttien viankorjaus onnistuu verkossa [codepen.io](https://codepen.io) ja [jsfiddle](https://jsfiddle.net).

Samalla sisäänrakennettu käännöskehys voi nopeasti toteuttaa komponenttien ja asiakirjojen kansainvälistymisen, jolloin tuoteyleisöäsi ei enää sido kieli.

### Tämä on uusi etupään kehityksen paradigma tekoälyn aikakaudelle

Kehys on sisäänrakennettu `.agents/skills`, joten tekoäly voi auttaa sinua kehittämään uusia komponentteja yhdellä napsautuksella parhaiden käytäntöjen mukaisesti.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Anna käyttöliittymän koodin muuttua kestämättömästä ilmakehän ohjelmoinnin roskavuoresta standardiosiksi, jota voidaan ylläpitää ja jota voidaan kehittää iteratiivisesti pitkällä aikavälillä.

Tekoälyavusteisen kehityksen ominaisuudet huomioon ottaen ehdotimme ja suunnittelimme uuden etupään kehitysparadigman:

1. **Kaikki on verkkokomponentti**
2. **Komponentin on oltava riippumaton taustatietolinkistä, ja dataliitäntä on esillä takaisinsoittotoimintona**

Tällä tavoin tekoäly voi tuottaa väärennettyjä tietoja ja näyttää komponenttien eri tilat esittelysivulla.

Komponenttikehityksen ja datarajapinnan erottaminen, yhdistettynä [webc.site-komponenttikehykseen](https://github.com/webc-site/webc.site) Toinen tärkeä ominaisuus:

**Jokainen komponentti voi käynnistää kehityspalvelimen itsenäisesti ja kehittää ja suorittaa virheenkorjauksen esittelysivulla**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Tämä pienentää kunkin komponentin kehitys- ja virheenkorjauslinkin arvoon `0`.

Tällä tavalla tekoäly-avusteiset kehitystyökalut ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) jne.), voit nauttia täysin automaattisesta kehityksestä, useiden avoimien selaintekijöiden avulla. (taustatiedot, kirjautumisen tila, polun reititys jne.).

Jos haluat hallita tekoälyä ja vähentää kustannuksia ja lisätä tehokkuutta, tarvitset uuden paradigman, joka minimoi kunkin komponentin kehitys- ja virheenkorjausympäristön.

---

# En ole vielä aloittanut TODO:n kirjoittamista

### Web-komponenttikirjasto

#### Lopullinen koon optimointi

Vertaa esimerkiksi virtuaalista vierityspalkkikomponenttia varten suositun [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars)-skriptin kokoa ja tyyliä `gz`:n jälkeen seuraavan taulukon mukaisesti:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 eaa    |

Käyttäjän `webc.site` virtuaalinen vierityspalkkikomponentti on vain `OverlayScrollbars`:n `10%`.

#### Ajoajasta riippumaton

[Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) -standardien varaan rakennettu webc.site-komponenttikirjasto on luonnollisesti agnostinen ajonaikaisesti. Käytätpä sitten Reactia, Vuea, Angularia, Svelteä tai perinteistä puhdasta HTML/JS-projektia, kaikki komponentit voivat toimia suoraan selaimessa natiivien HTML-tunnisteiden tavoin ilman, että tietyn kehyksen toissijaisia ​​pakkauksia tarvitaan.

##### Vertailu shadcn:n kanssa

[shadcn/ui](https://ui.shadcn.com) ottaa käyttöön koodin jakelutilan, joka edellyttää komponentin koodin kopioimista suoraan omaan projektiisi. Se on tiukasti sidottu React-ekosysteemiin ja tiettyihin rakennustyökaluketjuihin (kuten Tailwind CSS), eikä sitä voi käyttää eri kehysten välillä. Sillä on myös tiettyjä vaatimuksia projektisuunnittelun konfiguroinnille.

Ja `webc.site`:n komponentti:
- **Cross-framework universaali**: Kirjoita kerran, ja se voidaan ottaa suoraan käyttöön ja suorittaa missä tahansa käyttöliittymäkehyksessä (jopa kehyksettömässä ympäristössä).
- **Nollariippuvuus ympäristöstä**: Mitään erityisiä pakkaustyökaluja tai CSS-esiprosessoreita ei tarvita, tuo vain käännetyt staattiset tiedostot ja niitä voidaan käyttää heti.

## Automatisoitu kehitys ja virheenkorjaus

### Paikallinen kehitys ja virheenkorjaus

Jokainen verkkosivun komponentti tukee kehityspalvelimen käynnistämistä itsenäisesti tarjoten minimaalisen kehitys- ja virheenkorjausympäristön:

- **Luo uusi komponentti**: Suorita `./sh/new.js [css|js] [komponentin nimi]` luodaksesi nopeasti komponenttien kehitysrungon (mukaan lukien esittelysivu ja kansainvälistymismääritykset).
- **Riippumaton virheenkorjaus**: Suorita `./dev.js [komponentin nimi]` (tai suorita `./dev.js` suoraan) käynnistääksesi Vite-kehityspalvelimen ja avaaksesi komponentin esittelysivun automaattisesti selaimessa. Tukee komponenttien kuumapäivitystä (HMR). Koska kehitys- ja datalinkit on irrotettu toisistaan, on nollakehityksen käyttöliittymä, joka sopii erittäin hyvin tekoälylle (kuten Claude Code, Google Antigravity jne.) auttamaan täysin automaattisessa kehityksessä ja selaimen virheenkorjauksessa.

### Julkaise komponenttikirjasto

#### webc dist

Pakkaus- ja julkaisuprosessi on pitkälle automatisoitu:
- **Staattinen resurssipakkaus**: Suorittamalla `./sh/dist.js` (eli suorittamalla `webc dist` -tehtävän) voidaan automaattisesti skannata kaikki `src/` -sivun komponentit, kääntää, pakata ja tulostaa ne `dist/`-hakemistoon. Tämä hakemisto sisältää JS/CSS-tiedostoja tuotantojakelua varten, esittelysivuston, joka on valmis käyttöönotettavaksi GitHub-sivuille tai Cloudflare Pagesille, sekä automaattisesti luodut `_redirects` ja `404.html` reititystiedostot.
- **NPM Publish**: Suorita `./sh/npmDist.js`, komentosarja käsittelee automaattisesti komponenttiriippuvuudet, lisää paketin versionumeroa ja suorittaa `npm publish` yhdellä napsautuksella, kun pakkaus on valmis, komponenttikirjaston julkaiseminen NPM:lle.

### Alusta vastaa kääntämisestä

Kehyksessä on sisäänrakennetut automaattiset käännösprosessit:
1. Määritä käännössäännöt (kuten lähdekieli, kohdekieli ja käännettävä hakemisto) projektin juurihakemiston kohdassa `tran.yml`.
2. Käytä paikkamerkkejä komponenteissa tai asiakirjoissa ilman, että sinun täytyy koodata useita kieliä koodissasi.
3. Suorita `./sh/tran.js`, ja käännöskone purkaa tekstin automaattisesti ja kutsuu WebC-käännöspalvelun käsittelyä varten luoden automaattisesti YAML-käännösmerkinnät ja README-dokumentaation eri kielillä.

### ympäristömuuttujat

Kun suoritat automaattista käännöstä, sinun on määritettävä seuraavat ympäristömuuttujat valtuuttamaan pääsy käännössovellusliittymään:

- **`WEBC_SITE_TOKEN`** (tai **`WEBC_TOKEN`**): Todennusavain, jota käytetään `webc.site` Automated Translation API:n käyttämiseen. Voidaan syöttää ympäristömuuttujana tai kirjoittaa `token` paikallisen käyttäjän kotihakemiston `~/.config/webc.site.yml` asetustiedostoon.