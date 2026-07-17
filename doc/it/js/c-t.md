# c-t.js

Internazionalizzazione dell'HTML

Il tag `<c-t>key</c-t>` è personalizzato e `key` è la chiave del pacchetto lingua.

## cTranSet(el, genUrl)

Imposta il testo per `c-t`.

parametro:
- `el` : elemento root, globale può essere passato in `document`
- `genUrl` : funzione per ottenere il dizionario del pacchetto lingua
  - parametro
    - `code`: codice della lingua
  - Valore restituito: un oggetto dizionario del pacchetto lingua o una Promessa che si risolve in questo oggetto