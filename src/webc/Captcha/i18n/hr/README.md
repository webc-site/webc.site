# Skočni sloj kontrolnog koda

Skočni prozor s kontrolnim kodom na temelju grafičkog klika.

- U kombinaciji s BoxX za implementaciju interakcije skočnih prozora i ESC/close podrške
- Cilj klika na temelju pozadinske slike
- Podržava poništavanje koraka klikom i automatski mehanizam ponovnog pokušaja
- koristiti
  * Javna mreža:`https://captcha.webc.pub`
  * Privatna implementacija: [captcha_srv](https://crates.io/crates/captcha_srv)

## Koristite demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Nakon provjere, pošaljite token u pozadinu
  console.log("Provjera prošla Token:", token);
}
```

## povratna vrijednost

Pozivanje funkcije vraća `Promise<string | undefined>`:
- **Provjera uspjela**: Vraća Base64URL kodiran (bez ispune) niz tokena za provjeru koda.
- **Zatvori ili Odustani**: Povratak na `undefined`.

## Proces verifikacije i povratni otpis

1. **Provjera valjanosti okidača**: Frontend poziva `Captcha()`.
2. **Preuzmite grafikon**: `Captcha.js` Pokrenite `GET /` do `captcha_srv` da biste dobili kliknutu sliku i ID.
3. **Provjera koordinata**: Nakon što korisnik završi klik, `Captcha.js` pokreće `POST /` do `captcha_srv` za provjeru koordinata. Ako je provjera uspješna, bit će vraćen Base64URL kodirani token.
4. **Pozadinska provjera**: Sučelje šalje Token pozadini web stranice, a pozadina poziva `captcha_srv` i `GET /verify/{token}` kako bi provjerili i uništili Token odjednom.

### Pozadinske upute za otpis

Nakon što pozadina web-mjesta primi `token` koju je dostavio front-end, mora pokrenuti zahtjev prema usluzi `captcha_srv`:

- **Zatraži sučelje**:`GET /verify/{token}`
- **Parametar staze**: `token` (Base64URL niz koji vraća sučelje)
- **Vrati rezultat**: `1` znači da je provjera prošla i važeća (bit će automatski uništena); `0` znači nevažeće ili je otpisano.