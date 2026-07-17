---
name: webc
---

Segui il processo, fai un piano e sviluppalo passo dopo passo per evitare omissioni

1. Esegui `./sh/new.js nome componente tipo progetto` e crea una cartella del componente nella directory `src`
   Il tipo di progetto può essere `css` (componente di puro stile), `js` (componente di pagina web)
   Rendere maiuscola la prima lettera del nome del componente

2. Leggi le specifiche di codifica per `.agents/doc/code` e poi sviluppa.

   In `_.styl`, prima `@import "../nome componente/_.styl"` per importare le dipendenze. Si prega di seguire gli standard di codifica e l'estetica del design di [./styl.md](./styl.md).

   Modifica gli stili di altri componenti e invece importali direttamente, usa `@import` all'inizio e disabilita `extend`.

   È vietato scrivere lo stile utilizzato per la dimostrazione in `nome componente/_.styl` e scritto in `demo/_.styl`.

   Per il componente `js`, sviluppalo secondo il processo [webc.js.md](./webc.js.md) (elimina `nome componente/_.js` per componenti di puro stile)

3. Premi [demo.md](./demo.md) dimostrazione dello sviluppo del processo

4. Esegui `./test.sh` della directory principale. Correggi errori e allarmi, estrai funzioni, ottimizza il codice ed evita duplicazioni e ridondanze. Per le specifiche del codice, vedere `.agents/doc/code/js.md`

5. Leggi [dbg.md](./dbg.md) ed esegui il debug dei componenti in base al processo

6. Seguire il processo [i18n.md](./i18n.md) per implementare l'internazionalizzazione di componenti e dimostrazioni e scrivere documenti

7. Testare nuovamente e ottimizzare il codice

8. Apri un agente secondario e chiama `.agents/skills/js_review/SKILL.md` per rivedere e ottimizzare il codice.

9. Debug di nuovo