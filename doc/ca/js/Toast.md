# Toast.js

Missatge emergent de brindis

## toast(render, timeout)

Mostra la finestra emergent d'indicacions estàndard

paràmetre:
- `render` : funció de renderització, utilitzada per personalitzar el contingut emergent
  - paràmetre
    - `el` : element DOM de la finestra emergent
- `timeout`: retard en segons per a l'apagat automàtic, predeterminat 9, sense tancament automàtic quan 0

Valor de retorn: element DOM de la finestra emergent

## toastErr(render, timeout)

Mostra el missatge d'error emergent

paràmetre:
- `render` : funció de renderització, utilitzada per personalitzar el contingut emergent
  - paràmetre
    - `el` : element DOM de la finestra emergent
- `timeout`: retard en segons per a l'apagat automàtic, predeterminat 9, sense tancament automàtic quan 0

Valor de retorn: element DOM de la finestra emergent d'error