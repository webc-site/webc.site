# fetchLang.js

Carica in modo asincrono i Language Pack e associa i callback di aggiornamento

## fetchLang(getDict)

Crea un listener del Language Pack per ottenere il Language Pack in modo asincrono ed eseguire un callback di aggiornamento quando la lingua cambia

parametro:
- `getDict` : Ottieni la funzione asincrona del pacchetto lingua
  - parametro
    - `code`: codice della lingua
  - Valore restituito: dizionario del pacchetto lingua

Valore restituito: funzione per registrare la richiamata di aggiornamento
- parametro
  - `refresh`: aggiorna la funzione di callback quando la lingua viene aggiornata
    - parametro
      - `i18n`: oggetto dizionario del pacchetto lingua
      - `code`: codice della lingua corrente
- Valore restituito: funzione per annullare la registrazione della richiamata di aggiornamento