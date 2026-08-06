# route.js

Ġestjoni tar-rotot front-end ta 'paġna waħda

## nowUrl()

Ikseb il-mogħdija tal-URL attwali bit-tmejla ewlenija mneħħija

Valur tar-ritorn: sekwenza tal-mogħdija kurrenti

## route(hook)

Irreġistra r-callback tas-smigħ għal bidliet fir-rotta. Meta tirreġistra, se tiġi eżegwita darba bil-mogħdija attwali.

parametru:
- `hook` : Funzjoni ta' callback tal-monitoraġġ tar-rotta
  - parametru
    - `url` : mogħdija kurrenti
    - `pre` : l-aħħar mogħdija

Valur tar-ritorn: Funzjoni ta' tindif mhux irreġistrata

## setPre(url)

Issejvja l-aħħar URL irreġistrat

parametru:
- `url` : sekwenza tal-mogħdija

## preUrl()

Ikseb il-URL tal-aħħar rekord

Valur tar-ritorn: l-aħħar string tal-mogħdija

## refresh(url)

Ġegħlu r-rotot kollha li jisimgħu callbacks biex jiġu attivati ​​fil-mogħdija speċifikata u aġġorna minn qabel

parametru:
- `url` : mogħdija fil-mira, mogħdija kurrenti default

## removeSlash(url)

Neħħi slashes mill-headers tal-mogħdija

parametru:
- `url` : sekwenza tal-mogħdija

Valur tar-ritorn: mogħdija wara li tneħħi l-linja mmejla ewlenija

## setUrl(url)

Aġġorna l-istatus tal-URL tal-bar tal-indirizz tal-browser

parametru:
- `url` : mogħdija fil-mira

Valur tar-ritorn: 1 jekk il-mogħdija fil-fatt tinbidel

## goto(url)

Aġġorna l-indirizz tal-brawżer u qajjem aġġornament tar-rotta

parametru:
- `url` : mogħdija fil-mira