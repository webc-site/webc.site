# Specifica del codice JS

## stile di codifica

- Semplice, elegante ed efficiente, utilizzando la più moderna sintassi js
- Suddividere funzioni eccessivamente lunghe e il design dell'interfaccia dovrebbe essere a basso accoppiamento e alta coesione.
- Usa array + loop/forEach/mappa di più e scrivi codice meno ripetitivo
- Non scrivere commenti sulle funzioni in codice semplice per evitare commenti eccessivi. Logica complessa e bisogni speciali vengono spiegati in un cinese raffinato.
- Il codice ripetuto viene suddiviso in funzioni per ridurre la ridondanza. Ad esempio, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` può essere scritto come `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Dichiarazione di variabile: combina più dichiarazioni `const` consecutive in un'unica istruzione. Invece di scriverlo su tre righe, scrivi `const a=1, b=2, c=3;`
- Elaborazione asincrona: utilizzare `await`, vietare l'uso di `.then` chiamate a catena
- Non generare automaticamente il codice di gestione delle eccezioni, non scrivere automaticamente `try...catch` (`try ... catch` viene mantenuto manualmente, `try catch` esistente non deve essere eliminato)
- Prima le funzioni pure: scrivi solo funzioni pure, mai classi
- Utilizza le funzioni freccia `const funcName = () => {}` e non utilizzare la parola chiave `function` (eccetto i generatori); se puoi utilizzare .bind per associare parametri, evita di definire funzioni
- Riutilizzo del codice: prestare attenzione al riutilizzo, estrarre funzioni più piccole ed evitare risolutamente un gran numero di strutture di codice simili o copiate e incollate.
- Accesso agli oggetti: dai la priorità all'utilizzo dell'assegnazione destrutturante per estrarre gli attributi richiesti, evita di utilizzare ripetutamente punti internamente per accedere ad attributi profondi e nidificati e unisci ripetuti giudizi di catena opzionali
- Non utilizzare oggetti per parametri di funzione, non scrivere `{a,b,c}`, scrivere `a, b, c`; se sono presenti molti parametri facoltativi, utilizzare [[numero di elementi di configurazione, elementi di configurazione], [numero di elementi di configurazione, elementi di configurazione],..] In questo paradigma, gli elementi di configurazione sono definiti con costanti numeriche
- Per restituimenti con più valori, utilizzare l'array `[a,b,c]` invece di `{a,b,c}`. Se sono presenti più di 3 valori restituiti, utilizzare costanti numeriche per definire il significato posizionale.
- Non è necessaria una stringa per rappresentare lo stato, utilizzare costanti numeriche per definire lo stato
- Non viene utilizzato alcun modello di stringa (``), viene utilizzata la concatenazione di stringhe (+), ad eccezione dell'importazione (utile per l'analisi statica di Vite)
- Per il ciclo, se hai bisogno di un numero di serie, usa `++i` invece di `i++`
- Evita`?.` non necessari e proibisci la programmazione difensiva
- Non è necessario che il nome della variabile sia plurale e termina con `_li` per indicare un elenco.

## Convenzione di denominazione

- La denominazione persegue il minimalismo. Utilizza nomi brevi ma significativi, ad esempio: utilizza `rm` invece di `remove`, `delete`, `del`. Tuttavia, dovresti anche evitare di arrivare agli estremi, ad esempio: non utilizzare una sola lettera `m` invece di `map`
- Prova a utilizzare solo verbi nella denominazione delle funzioni. Se puoi usare una parola per esprimerlo, non usare due parole. I sostantivi si riflettono nei nomi dei file. Se è necessario aggiungere un verbo al nome del file, inserire prima il sostantivo e ultimo il verbo. Ad esempio: `profileSet.js` invece di `setProfile.js`
- Nome variabile: usa lo stile sottolineato (snake_case), ad esempio `user_auth_token`; se la variabile è una funzione, utilizzare lo stile di denominazione cammello minuscolo
- Nome della funzione: utilizzare camelCase minuscolo (camelCase), ad esempio `userData`
- Parametri della funzione: se si tratta di una funzione di callback, denominarla in minuscolo cammello, ad esempio `onChange`
- Le definizioni delle costanti a livello di modulo utilizzano lo stile di sottolineatura maiuscola `UPPER_SNAKE_CASE`
- Non scrivere `get`, prefissi senza significato, come: scrivi `cookieByHeader` invece di `getCookie`
- Costanti globali/a livello di modulo: utilizzare lo stile di sottolineatura maiuscola (UPPER_SNAKE_CASE), ad es. `CODE_TO_ID`, `ID_TO_LANG`

## Meccanismo modulare

- Importa: importa funzioni accuratamente su richiesta, proibisci l'importazione diretta dell'intero modulo (evita `import * as x` o importa oggetti di grandi dimensioni)
- Esporta: disabilita l'esportazione di oggetti. Esporta funzioni e variabili come unità, ad esempio `export const X=1, abc=()=>{};`. Prova a combinarli con const + virgola per dichiarare il contenuto esportato. Se un file ha una sola funzione, usa `export default`
- A meno che non sia necessario chiamare internamente la funzione di esportazione predefinita, evitare di dichiarare prima le costanti e poi di esportarle alla fine del file.
- Risoluzione del percorso: quando si ottiene il percorso della directory corrente, è necessario utilizzare `import.meta.dirname`

## errore

- Evita errori di stringa e usa const per dichiarare codici di errore costanti.
- Se è necessario restituire informazioni sui dati errate, utilizzare [codice errore, messaggio di errore,...] In questo modo, il messaggio di errore non è una descrizione testuale, ma un valore numerico (come [FILE_OVERSIZE, file_size, max_size])
-

## Prova a utilizzare API compatibili con il browser

- Crittografia e decrittografia: forza l'uso dell'API Web Crypto nativa
- Dati binari: quando hai a che fare con i dati binari, prova a utilizzare `Uint8Array` in modo uniforme