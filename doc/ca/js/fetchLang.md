# fetchLang.js

Carregueu paquets d'idioma de manera asíncrona i enllaceu les devolucions de trucada d'actualització

## fetchLang(getDict)

Creeu un oient del paquet d'idioma per obtenir el paquet d'idioma de manera asíncrona i executar una devolució de trucada d'actualització quan l'idioma canvia

paràmetre:
- `getDict` : obteniu la funció asíncrona del paquet d'idioma
  - paràmetre
    - `code` : codi d'idioma
  - Valor de retorn: diccionari del paquet d'idiomes

Valor de retorn: funció per registrar la devolució de trucada d'actualització
- paràmetre
  - `refresh`: actualitza la funció de devolució de trucada quan s'actualitza l'idioma
    - paràmetre
      - `i18n` : objecte diccionari del paquet d'idioma
      - `code` : codi d'idioma actual
- Valor de retorn: funció per anul·lar el registre de la devolució de trucada d'actualització