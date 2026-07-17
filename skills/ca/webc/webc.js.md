
  Per al component `js`, utilitzeu `Light DOM` per implementar el component a `src/component name/_.js`.

  Utilitzeu camins relatius per importar altres components, com ara: `import "../component name/_.js"` (`js` no importa `styl`, el marc l'injectarà automàticament).

  `this` Definiu només la funció de devolució de trucada nativa del component web, escriviu les altres com a funcions independents, introduïu `this` i els paràmetres necessaris.

  A més de les interfícies exposades externament, per tal de facilitar l'optimització de tremolor i la compressió de codi, està prohibit lligar atributs privats personalitzats a `this` (utilitza `this.$` per a les funcions de descàrrega), i les funcions d'ordre superior es poden utilitzar per retornar tancaments per contenir variables intermèdies.

  No escriviu `constructor`, l'atribut s'obté a `connectedCallback`.


  Consulteu [./js.md](./js.md) per reutilitzar les funcions públiques a `src/js/`

  Per als contenidors, utilitzeu `slot` en comptes d'atributs.
  Si necessiteu carregar dades, exposa la interfície de càrrega a la capa superior en forma d'una funció de devolució de trucada asíncrona i utilitza els comentaris per indicar el format del valor de retorn.
  Els components han d'evitar fuites de memòria. `disconnectedCallback` combina els esdeveniments de desinstal·lació en una funció `this.$` i no escriviu diverses funcions de desinstal·lació.
  El valor de retorn de la interfície pot ser un valor únic, una matriu o una matriu de matrius, no un objecte.
  Si el component té diversos estats, utilitzeu comentaris de diverses línies per descriure clarament el format de dades de cada estat. (No antecediu cada línia de comentaris amb `*`)
  Canvi d'estat, utilitzant constants numèriques (definides com a `const.js`).
  Mentre es carrega la trucada, mostra l'animació amb `const xx = newEl('b');xx.className="Ing"` i `@import "../Ing/_.styl"` a `_.styl`