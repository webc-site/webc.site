# route.js

En sidas front-end routinghantering

## nowUrl()

Hämta den aktuella webbadressens sökväg med det inledande snedstrecket borttaget

Returvärde: aktuell sökvägssträng

## route(hook)

Registrera återuppringningen för ruttändringar. Vid registrering kommer den att utföras en gång med den aktuella sökvägen.

parameter:
- `hook` : Ruttövervakningsfunktion för återuppringning
  - parameter
    - `url` : aktuell sökväg
    - `pre` : sista sökvägen

Returvärde: Oregistrerad rensningsfunktion

## setPre(url)

Spara den senast registrerade URL:en

parameter:
- `url` : sökvägssträng

## preUrl()

Hämta webbadressen till den senaste posten

Returvärde: sista sökvägssträngen

## refresh(url)

Tvinga alla ruttlyssnande återuppringningar att utlösas vid den angivna sökvägen och uppdatera före

parameter:
- `url` : målsökväg, nuvarande standardsökväg

## removeSlash(url)

Ta bort snedstreck från banhuvuden

parameter:
- `url` : sökvägssträng

Returvärde: sökväg efter att det inledande snedstrecket har tagits bort

## setUrl(url)

Uppdatera webbläsarens adressfälts URL-status

parameter:
- `url` : målsökväg

Returvärde: 1 om sökvägen faktiskt ändras

## goto(url)

Uppdatera webbläsaradressen och aktivera en ruttuppdatering

parameter:
- `url` : målsökväg