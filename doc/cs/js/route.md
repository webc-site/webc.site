# route.js

Jednostránková front-endová správa směrování

## nowUrl()

Získejte aktuální cestu URL s odstraněným úvodním lomítkem

Návratová hodnota: aktuální řetězec cesty

## route(hook)

Zaregistrujte zpětný poslech pro změny trasy. Při registraci se provede jednou s aktuální cestou.

parametr:
- `hook` : Funkce zpětného volání sledování trasy
  - parametr
    - `url` : aktuální cesta
    - `pre` : poslední cesta

Návratová hodnota: Neregistrovaná funkce čištění

## setPre(url)

Uložte poslední zaznamenanou adresu URL

parametr:
- `url` : řetězec cesty

## preUrl()

Získejte adresu URL posledního záznamu

Návratová hodnota: poslední řetězec cesty

## refresh(url)

Vynutit, aby se všechna zpětná volání naslouchající trase spouštěla ​​na zadané cestě a aktualizovat předběžně

parametr:
- `url` : cílová cesta, výchozí aktuální cesta

## removeSlash(url)

Odstraňte lomítka ze záhlaví cesty

parametr:
- `url` : řetězec cesty

Návratová hodnota: cesta po odstranění úvodního lomítka

## setUrl(url)

Aktualizujte stav adresy URL řádku prohlížeče

parametr:
- `url` : cílová cesta

Návratová hodnota: 1, pokud se cesta skutečně změní

## goto(url)

Aktualizujte adresu prohlížeče a spusťte aktualizaci trasy

parametr:
- `url` : cílová cesta