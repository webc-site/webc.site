# route.js

Správa front-end smerovania na jednej stránke

## nowUrl()

Získajte aktuálnu cestu URL s odstránenou úvodnou lomkou

Návratová hodnota: aktuálny reťazec cesty

## route(hook)

Zaregistrujte spätné počúvanie pre zmeny trasy. Pri registrácii sa vykoná raz s aktuálnou cestou.

parameter:
- `hook` : Funkcia spätného volania sledovania trasy
  - parameter
    - `url` : aktuálna cesta
    - `pre` : posledná cesta

Návratová hodnota: Neregistrovaná funkcia čistenia

## setPre(url)

Uložte poslednú zaznamenanú adresu URL

parameter:
- `url` : reťazec cesty

## preUrl()

Získajte adresu URL posledného záznamu

Návratová hodnota: posledný reťazec cesty

## refresh(url)

Vynútiť spustenie všetkých spätných volaní počúvania trasy na zadanej ceste a aktualizovať pred

parameter:
- `url` : cieľová cesta, predvolená aktuálna cesta

## removeSlash(url)

Odstráňte lomky z hlavičiek cesty

parameter:
- `url` : reťazec cesty

Návratová hodnota: cesta po odstránení úvodnej lomky

## setUrl(url)

Aktualizujte stav adresy URL panela s adresou prehliadača

parameter:
- `url` : cieľová cesta

Návratová hodnota: 1, ak sa cesta skutočne zmení

## goto(url)

Aktualizujte adresu prehliadača a spustite obnovenie trasy

parameter:
- `url` : cieľová cesta