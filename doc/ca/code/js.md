# Especificació del codi JS

## estil de codificació

- Simple, elegant i eficient, utilitzant la sintaxi js més moderna
- Dividiu les funcions massa llargues i el disseny de la interfície hauria de ser un acoblament baix i una alta cohesió.
- Utilitzeu més matrius + loops/forEach/map i escriviu menys codi repetitiu
- No escriviu comentaris de funció en codi senzill per evitar comentaris excessius. La lògica complexa i les necessitats especials s'expliquen en xinès refinat.
- El codi repetit s'abstraeix en funcions per reduir la redundància. Per exemple, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` es pot escriure com a `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Declaració de variables: combina diverses declaracions consecutives `const` en una sola declaració. En lloc d'escriure'l en tres línies, escriviu `const a=1, b=2, c=3;`
- Processament asíncron: utilitzeu `await`, prohibeu l'ús de trucades en cadena `.then`
- No generi automàticament el codi de gestió d'excepcions, no escriviu automàticament `try...catch` (`try ... catch` es manté manualment, `try catch` existent no s'ha de suprimir)
- Funcions pures primer: només escriu funcions pures, mai classes
- Utilitzeu les funcions de fletxa `const funcName = () => {}` i no utilitzeu la paraula clau `function` (excepte els generadors); si podeu utilitzar .bind per vincular paràmetres, eviteu definir funcions
- Reutilització del codi: presteu atenció a la reutilització, extreu més funcions petites i eviteu decididament un gran nombre d'estructures de codi similars o enganxades.
- Accés a objectes: prioritzeu l'ús de l'assignació de desestructuració per extreure els atributs necessaris, eviteu utilitzar repetidament els punts internament per accedir a atributs profunds i imbricats i fusioneu els judicis de cadena opcionals repetits.
- No utilitzeu objectes per a paràmetres de funció, no escriviu `{a,b,c}`, escriviu `a, b, c`; si hi ha molts paràmetres opcionals, utilitzeu [[nombre d'elements de configuració, elements de configuració], [nombre d'elements de configuració, elements de configuració],..] En aquest paradigma, els elements de configuració es defineixen amb constants numèriques
- Per a les devolucions de diversos valors, utilitzeu la matriu `[a,b,c]` en lloc de `{a,b,c}`. Si hi ha més de 3 valors de retorn, utilitzeu constants numèriques per definir el significat posicional.
- No cal una cadena per representar l'estat, utilitzeu constants numèriques per definir l'estat
- No s'utilitza cap plantilla de cadena (``), s'utilitza la concatenació de cadenes (+), excepte per a la importació (convenient per a l'anàlisi estàtica de Vite)
- Per al bucle, si necessiteu un número de sèrie, utilitzeu `++i` en lloc de `i++`
- Eviteu`?.`innecessaris i prohibeu la programació defensiva
- El nom de la variable no ha de ser plural i acaba amb `_li` per indicar una llista.

## Convenció de nomenclatura

- La denominació persegueix el minimalisme. Utilitzeu noms curts però significatius, per exemple: utilitzeu `rm` en comptes de `remove`, `delete`, `del`. Tanmateix, també hauríeu d'evitar anar a extrems, per exemple: no utilitzeu una sola lletra `m` en comptes de `map`
- Intenteu utilitzar només verbs en la denominació de funcions. Si podeu utilitzar una paraula per expressar-la, no feu servir dues paraules. Els substantius es reflecteixen en els noms dels fitxers. Si necessiteu afegir un verb al nom del fitxer, poseu el nom primer i el verb al final. Per exemple: `profileSet.js` en lloc de `setProfile.js`
- Nom de la variable: utilitzeu l'estil de subratllat (snake_case), per exemple `user_auth_token`; si la variable és una funció, utilitzeu l'estil de denominació en minúscula
- Nom de la funció: utilitzeu camelCase en minúscules (camelCase), per exemple `userData`
- Paràmetres de la funció: si es tracta d'una funció de devolució de trucada, anomena-la en minúscules, com ara `onChange`
- Les definicions de constants a nivell de mòdul utilitzen l'estil de subratllat en majúscules `UPPER_SNAKE_CASE`
- No escriviu `get`, prefixos sense sentit, com ara: escriviu `cookieByHeader` en comptes de `getCookie`
- Constants globals/de nivell de mòdul: utilitzeu l'estil de subratllat en majúscules (UPPER_SNAKE_CASE), p. ex. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanisme modular

- Importació: importa les funcions amb precisió a petició, prohibeix la importació directa de tot el mòdul (evita `import * as x` o importa objectes grans)
- Exporta: desactiva l'exportació d'objectes. Exporta funcions i variables com a unitats, com ara `export const X=1, abc=()=>{};`. Intenta combinar-los amb una const + coma per declarar el contingut exportat. Si un fitxer només té una funció, utilitzeu `export default`
- A menys que hàgiu de cridar internament a la funció per defecte d'exportació, eviteu declarar constants primer i després exportar-les al final del fitxer.
- Resolució del camí: en obtenir el camí del directori actual, s'ha d'utilitzar `import.meta.dirname`

## error

- Eviteu errors de cadena i utilitzeu const per declarar codis d'error constants.
- Si necessiteu retornar informació de dades incorrecta, utilitzeu [codi d'error, missatge d'error,...] D'aquesta manera, el missatge d'error no és una descripció de text, sinó un valor numèric (com ara [FILE_OVERSIZE, file_size, max_size])
-

## Proveu d'utilitzar API compatibles amb el navegador

- Xifratge i desxifrat: força l'ús de l'API Web Crypto nativa
- Dades binàries: quan tracteu amb binàries, proveu d'utilitzar `Uint8Array` de manera uniforme