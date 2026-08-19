# Sloj iskačućeg koda za potvrdu

Iskačući prozor za verifikacioni kod zasnovan na grafičkom kliku.

- U kombinaciji sa BoxX-om za implementaciju interakcije iskačućih prozora i podrške za ESC/zatvaranje
- Kliknite na cilj na osnovu pozadinske slike
- Podržava mehanizam poništavanja koraka klika i automatskog ponovnog pokušaja
- koristiti
  * Javna mreža:`https://captcha.webc.pub`
  * Privatno raspoređivanje: [captcha_srv](https://crates.io/crates/captcha_srv)

## Koristite demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Nakon verifikacije, dostavite token u pozadinu
  console.log("Verifikacija je prošla Token:", token);
}
```

## povratna vrijednost

Pozivanje funkcije vraća `Promise<string | undefined>`:
- **Verifikacija je prošla**: Vraća Base64URL kodiran (bez dopuna) verifikacioni kod string tokena.
- **Zatvori ili otkaži**: Povratak na `undefined`.

## Proces verifikacije i back-end otpis

1. **Provjera okidača**: Frontend pozivi `Captcha()`.
2. **Nabavite grafikon**: `Captcha.js` Pokrenite `GET /` na `captcha_srv` da biste dobili sliku i ID na klik.
3. **Provjera koordinata**: Nakon što korisnik završi klik, `Captcha.js` pokreće `POST /` na `captcha_srv` da potvrdi koordinate. Ako je verifikacija uspješna, token kodiran Base64URL će biti vraćen.
4. **Pozadinska provjera**: Front-end šalje token pozadinskom dijelu web stranice, a backend poziva `captcha_srv` i `GET /verify/{token}` da verifikuju i unište token odjednom.

### Back-end upute za otpis

Nakon što backend web stranice primi `token` koji je predao front-end, mora pokrenuti zahtjev za uslugu `captcha_srv`:

- **Interfejs zahtjeva**:`GET /verify/{token}`
- **Parametar putanje**: `token` (niz Base64URL koji vraća prednji kraj)
- **Vrati rezultat**: `1` znači da je provjera prošla i važeća (automatski će biti uništena); `0` znači nevažeći ili je otpisan.