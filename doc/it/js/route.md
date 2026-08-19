# route.js

Gestione del routing front-end a pagina singola

## nowUrl()

Ottieni il percorso URL corrente senza la barra iniziale

Valore restituito: stringa del percorso corrente

## route(hook)

Registra la richiamata in ascolto per i cambi di percorso. Al momento della registrazione, verrà eseguito una volta con il percorso corrente.

parametro:
- `hook`: funzione di callback per il monitoraggio del percorso
  - parametro
    - `url`: percorso corrente
    - `pre` : ultimo percorso

Valore restituito: funzione di pulizia non registrata

## setPre(url)

Salva l'ultimo URL registrato

parametro:
- `url` : stringa del percorso

## preUrl()

Ottieni l'URL dell'ultimo record

Valore restituito: ultima stringa del percorso

## refresh(url)

Forza l'attivazione di tutte le richiamate di ascolto del percorso nel percorso specificato e aggiorna pre

parametro:
- `url`: percorso di destinazione, percorso corrente predefinito

## removeSlash(url)

Rimuovi le barre dalle intestazioni dei percorsi

parametro:
- `url` : stringa del percorso

Valore restituito: percorso dopo aver rimosso la barra iniziale

## setUrl(url)

Aggiorna lo stato dell'URL della barra degli indirizzi del browser

parametro:
- `url`: percorso di destinazione

Valore restituito: 1 se il percorso cambia effettivamente

## goto(url)

Aggiorna l'indirizzo del browser e attiva un aggiornamento del percorso

parametro:
- `url`: percorso di destinazione