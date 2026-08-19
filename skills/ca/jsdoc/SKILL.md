---
name: jsdoc
description: document src/js generat automàticament
---

## Executar passos

1. Executeu `./sh/jsDoc.js` per veure les funcions amb documentació que falta (si no hi ha sortida, no cal afegir-la).
2. D'acord amb la llista de fitxers de sortida, llegiu els documents i codis existents un per un i completeu-los (processiu-los en seqüència i trenqueu-los un per un).

## Requisits de documentació

Si l'exportació és una funció, escriu
- Paràmetres i valors de retorn:
  - Escriviu només les descripcions corresponents si hi ha paràmetres o valors de retorn, en cas contrari no les escriviu.
  - Els paràmetres s'introdueixen mitjançant llistes no ordenades.
  - Si el valor de retorn és una matriu, utilitzeu una llista no ordenada per descriure'l un per un (en cas contrari, escriviu directament, `Valor de retorn: descripció`, només una línia).
  - Si els paràmetres o el valor de retorn són funcions, utilitzeu llistes subordenades per descriure els paràmetres i els valors de retorn (si no n'hi ha, no les escriviu).

Si l'exportació és una constant, introduïu què és, només una línia

- Utilitza un llenguatge concís i professional i evita l'ús d'adjectius.
- Reviseu el document existent, no el reescrigueu completament

## plantilla de format

Escriu cada nom només una vegada per evitar la duplicació i intenta expressar-lo clarament en una línia. El format de referència és el següent

```
# nom del fitxer

## Nom de la funció (paràmetre)

Descripció d'ús

paràmetre:
- `xx` : Propòsit
  - paràmetre
    - `a` : Propòsit
  - Valor de retorn: descripció

Valor de retorn: Descripció
```