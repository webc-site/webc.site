---
name: jsdoc
description: Documento src/js generato automaticamente
---

## Esegui i passaggi

1. Esegui `./sh/jsDoc.js` per visualizzare le funzioni con documentazione mancante (se non c'è output, non è necessario aggiungerlo).
2. In base all'elenco dei file di output, leggere i documenti e i codici esistenti uno per uno e completarli (elaborarli in sequenza e spezzarli uno per uno).

## Requisiti di documentazione

Se l'esportazione è una funzione, scrivi
- Parametri e valori restituiti:
  - Scrivi le descrizioni corrispondenti solo se sono presenti parametri o valori restituiti, altrimenti non scriverli.
  - I parametri vengono introdotti utilizzando elenchi non ordinati.
  - Se il valore restituito è un array, utilizza un elenco non ordinato per descriverlo uno per uno (altrimenti scrivi direttamente, `Valore restituito: descrizione`, solo una riga).
  - Se i parametri o il valore restituito sono funzioni, utilizzare elenchi subordinati per descrivere i parametri e restituire i valori (se non ce ne sono, non scriverli).

Se l'esportazione è una costante, introduci di cosa si tratta, solo una riga

- Utilizza un linguaggio conciso e professionale ed evita l'uso di aggettivi.
- Revisionare il documento esistente, non riscriverlo completamente

## modello di formato

Scrivi ogni nome una sola volta per evitare duplicazioni e cerca di esprimerlo chiaramente in una riga. Il formato di riferimento è il seguente

```
# nome del file

## Nome della funzione (parametro)

Descrizione dell'uso

parametro:
- `xx`: Scopo
  - parametro
    - `a`: Scopo
  - Valore restituito: descrizione

Valore restituito: Descrizione
```