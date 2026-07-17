# c-t.js

Internacionalització HTML

L'etiqueta `<c-t>key</c-t>` està personalitzada i `key` és la clau del paquet d'idioma.

## cTranSet(el, genUrl)

Estableix el text per a `c-t`.

paràmetre:
- `el` : element arrel, global es pot passar a `document`
- `genUrl` : funció per obtenir el diccionari del paquet d'idiomes
  - paràmetre
    - `code` : codi d'idioma
  - Valor de retorn: un objecte de diccionari del paquet d'idioma o una Promesa que resol aquest objecte