# Vahvistuskoodin ponnahdusikkuna

Graafiseen napsautukseen perustuva vahvistuskoodin ponnahdusikkuna.

- Yhdessä BoxX:n kanssa toteuttamaan ponnahdusikkunoiden vuorovaikutus ja ESC/sulje-tuki
- Napsauta kohdetta taustakuvan perusteella
- Tukee askelnapsautuksen kumoamista ja automaattista uudelleenyritysmekanismia
- käyttää
  * Julkinen verkko:`https://captcha.webc.pub`
  * Yksityinen käyttöönotto: [captcha_srv](https://crates.io/crates/captcha_srv)

## Käytä demoa

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Vahvistuksen jälkeen lähetä tunnus taustajärjestelmään
  console.log("Vahvistus hyväksytty Token:", tunnus);
}
```

## palautusarvo

Funktion kutsuminen palauttaa `Promise<string | undefined>`:
- **Vahvistus hyväksytty**: Palauttaa Base64URL-koodatun (ei täyttöä) vahvistuskoodin merkkijonon.
- **Sulje tai peruuta**: Palaa osoitteeseen `undefined`.

## Varmennusprosessi ja taustan poisto

1. **Laipaisimen vahvistus**: käyttöliittymäkutsut `Captcha()`.
2. **Hae kaavio**: `Captcha.js` Aloita `GET /` `captcha_srv` saadaksesi napsautetun kuvan ja tunnuksen.
3. **Koordinaattien vahvistus**: Kun käyttäjä on napsauttanut, `Captcha.js` aloittaa `POST /` - `captcha_srv` koordinaattien vahvistamiseksi. Jos vahvistus onnistuu, Base64URL-koodattu Token palautetaan.
4. **Taustavarmistus**: Käyttöliittymä lähettää tunnuksen verkkosivuston taustajärjestelmään, ja taustaohjelma kutsuu `captcha_srv` ja `GET /verify/{token}` vahvistaakseen ja tuhotakseen tunnuksen kerralla.

### Takaosan poistoohjeet

Kun verkkosivuston taustaohjelma vastaanottaa käyttöliittymän lähettämän `token`, sen on aloitettava pyyntö `captcha_srv` -palvelulle:

- **Pyydä käyttöliittymä**:`GET /verify/{token}`
- **Path-parametri**: `token` (käyttöliittymän palauttama Base64URL-merkkijono)
- **Palautustulos**: `1` tarkoittaa, että vahvistus on hyväksytty ja kelvollinen (tuhoaa automaattisesti); `0` tarkoittaa virheellistä tai se on poistettu.