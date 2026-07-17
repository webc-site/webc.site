# fetch.js

Funzione dello strumento di richiesta di rete basata sull'incapsulamento del recupero

## F(url, opt)

Invia una richiesta di rete e restituisce un oggetto di risposta

parametro:
- `url`: Richiedi indirizzo
- `opt` : `fetch` oggetto opzioni

Valore restituito: oggetto risposta

## f(attr)

Una funzione di ordine superiore che esegue il wrapper di una richiesta e analizza il contenuto restituito in un formato specificato

parametro:
- `attr`: nome dell'attributo di analisi del corpo della risposta

Valore restituito: funzione per richiedere e analizzare in modo asincrono il contenuto
  - parametro
    - `url`: Richiedi indirizzo
    - `opt` : `fetch` oggetto opzioni
  - Valore restituito: contenuto analizzato

## fTxt

Invia una richiesta di rete e restituisce il corpo della risposta in formato testo

parametro:
- `url`: Richiedi indirizzo
- `opt` : `fetch` oggetto opzioni

Valore restituito: testo di risposta

## fJson(url, opt)

Invia una richiesta di rete e analizza e restituisce il corpo della risposta in formato JSON

parametro:
- `url`: Richiedi indirizzo
- `opt` : `fetch` oggetto opzioni

Valore restituito: oggetto JSON analizzato

## fBin(url, opt)

Invia una richiesta di rete e restituisce il corpo della risposta come un array di byte binario

parametro:
- `url`: Richiedi indirizzo
- `opt` : `fetch` oggetto opzioni

Valore restituito: array di byte