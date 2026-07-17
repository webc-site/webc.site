# c-t.js

HTML:n kansainvälistyminen

Tunniste `<c-t>key</c-t>` on mukautettu, ja `key` on kielipaketin avain.

## cTranSet(el, genUrl)

Aseta teksti kohteelle `c-t`.

parametri:
- `el` : juurielementti, yleinen voidaan välittää kohdassa `document`
- `genUrl` : toiminto kielipaketin sanakirjan saamiseksi
  - parametri
    - `code` : kielikoodi
  - Palautusarvo: kielipaketin sanakirjaobjekti tai lupaus, joka ratkaisee tämän objektin