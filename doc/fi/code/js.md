# JS-koodin määrittely

## koodaustyyli

- Yksinkertaista, tyylikästä ja tehokasta moderneimmalla js-syntaksilla
- Jaa liian pitkät toiminnot, ja käyttöliittymän suunnittelun tulisi olla alhainen kytkentä ja korkea koheesio.
- Käytä taulukoita + silmukoita/forEach/map enemmän ja kirjoita vähemmän toistuvaa koodia
- Älä kirjoita funktiokommentteja yksinkertaisella koodilla välttääksesi liialliset kommentit. Monimutkainen logiikka ja erityistarpeet selitetään hienostuneella kiinalla.
- Toistuva koodi abstrahoidaan funktioiksi redundanssin vähentämiseksi. Esimerkiksi `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` voidaan kirjoittaa muodossa `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Muuttujan ilmoitus: Yhdistä useita peräkkäisiä `const` -ilmoituksia yhdeksi lauseeksi. Sen sijaan, että kirjoitat sen kolmella rivillä, kirjoita `const a=1, b=2, c=3;`
- Asynkroninen käsittely: käytä `await`, estä `.then` ketjukutsujen käyttö
- Älä luo automaattisesti poikkeuskäsittelykoodia, älä kirjoita automaattisesti `try...catch` (`try ... catch` ylläpidetään manuaalisesti, olemassa olevaa `try catch` ei pidä poistaa)
- Puhtaat funktiot ensin: kirjoita vain puhtaita funktioita, ei koskaan luokkia
- Käytä nuolifunktioita `const funcName = () => {}` äläkä käytä `function` avainsanaa (paitsi generaattorit); Jos voit käyttää .bind-parametreja, vältä funktioiden määrittelyä
- Koodin uudelleenkäyttö: Kiinnitä huomiota uudelleenkäyttöön, poimi lisää pieniä toimintoja ja vältä päättäväisesti suurta määrää samanlaisia ​​tai kopioimalla liitettyjä koodirakenteita.
- Objektin käyttöoikeus: Priorisoi rakennemuutosmäärityksen avulla vaadittujen attribuuttien poimimiseksi, vältä sisäisten pisteiden toistuvaa käyttöä syvällisten ja sisäkkäisten attribuuttien käyttämiseksi ja yhdistä toistuvia valinnaisia ​​ketjuarvioita.
- Älä käytä objekteja funktioparametreina, älä kirjoita `{a,b,c}`, kirjoita `a, b, c`; jos valinnaisia ​​parametreja on useita, käytä [[konfiguraatiokohteiden lukumäärä, konfigurointikohteet], [määrittelykohteiden lukumäärä, konfigurointikohteet],..] Tässä paradigmassa konfiguraatiokohteet määritellään numeerisilla vakioilla
- Käytä moniarvoisten palautusten yhteydessä taulukkoa `[a,b,c]` arvon `{a,b,c}` sijaan. Jos palautusarvoja on enemmän kuin 3, käytä numeerisia vakioita paikkamerkityksen määrittämiseen.
- Merkkijonoa ei tarvita kuvaamaan tilaa, käytä numeerisia vakioita tilan määrittämiseen
- Merkkijonomallia (``) ei käytetä, merkkijonojen ketjutusta (+) käytetään paitsi tuontia varten (kätevä Viten staattista analyysiä varten)
- Jos tarvitset sarjanumeron silmukalle, käytä `++i` -tunnusta `i++`:n sijaan
- Vältä tarpeetonta`?.` ja kiellä puolustava ohjelmointi
- Muuttujan nimen ei tarvitse olla monikkoa, ja se päättyy `_li`:een osoittamaan luetteloa.

## Nimeämissopimus

- Nimeämisessä tavoitellaan minimalismia. Käytä lyhyitä mutta merkityksellisiä nimiä, esimerkiksi: käytä `rm` `remove`, `delete`, `del` sijaan. Kannattaa kuitenkin välttää menemistä äärimmäisyyksiin, esimerkiksi: älä käytä yhtä kirjainta `m` `map`:n sijaan.
- Yritä käyttää funktioiden nimeämisessä vain verbejä. Jos voit ilmaista sen yhdellä sanalla, älä käytä kahta sanaa. Substantiivit näkyvät tiedostojen nimissä. Jos haluat lisätä verbin tiedoston nimeen, laita substantiivi ensin ja verbi viimeiseksi. Esimerkki: `profileSet.js` `setProfile.js` sijaan
- Muuttujan nimi: käytä alleviivausta (snake_case), esimerkiksi `user_auth_token`; jos muuttuja on funktio, käytä pientä kamelin kirjainten nimeämistyyliä
- Toiminnon nimi: Käytä pieniä kirjaimia camelCase (camelCase), esimerkiksi `userData`
- Toimintoparametrit: jos se on takaisinsoittofunktio, nimeä se pienillä kamelin kirjaimilla, kuten `onChange`
- Moduulitason vakiomääritykset käyttävät isoja alleviivauksia `UPPER_SNAKE_CASE`
- Älä kirjoita `get`, sellaisia ​​merkityksettömiä etuliitteitä, kuten: kirjoita `cookieByHeader` `getCookie` sijaan
- Yleiset/moduulitason vakiot: käytä isoja alleviivauksia (UPPER_SNAKE_CASE), esim. `CODE_TO_ID`, `ID_TO_LANG`

## Modulaarinen mekanismi

- Tuo: Tuo toimintoja tarkasti pyynnöstä, estä koko moduulin suora tuonti (vältä `import * as x` tai tuo suuria objekteja)
- Vienti: Poista objektien vienti käytöstä. Vie funktiot ja muuttujat yksiköinä, kuten `export const X=1, abc=()=>{};`. Yritä yhdistää ne const + pilkulla ilmoittaaksesi viedyn sisällön. Jos tiedostossa on vain yksi funktio, käytä `export default`
- Ellei viennin oletusfunktiota tarvitse kutsua sisäisesti, vältä vakioiden ilmoittamista ensin ja niiden vientiä sitten tiedoston lopussa.
- Polun resoluutio: Kun haetaan nykyistä hakemistopolkua, `import.meta.dirname` on käytettävä

## virhe

- Vältä merkkijonovirheitä ja käytä const ilmoittaaksesi vakiovirhekoodit.
- Jos haluat palauttaa vääriä tietoja, käytä [virhekoodi, virheilmoitus,...] Näin virheilmoitus ei ole tekstikuvaus, vaan numeerinen arvo (kuten [TIEDOSTON_YLISUOTTA, tiedoston_koko, max_koko])
-

## Yritä käyttää selaimen kanssa yhteensopivia sovellusliittymiä

- Salaus ja salauksen purku: Pakota käyttämään alkuperäistä Web Crypto API:ta
- Binaaridata: Kun käsittelet binääritietoa, yritä käyttää `Uint8Array` yhtenäisesti