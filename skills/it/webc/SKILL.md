---
name: webc
---

Segui il processo, fai un piano e sviluppalo passo dopo passo per evitare omissioni

1. Esegui `./sh/new.js nome componente tipo progetto` e crea il componente nella directory `src/webc`
   Il tipo di progetto può essere `css` (componente di puro stile), `js` (componente di pagina web)
   Rendere maiuscola la prima lettera del nome del componente

2. Leggi le specifiche di codifica per `.agents/doc/code` e poi sviluppa.

   Lo stile del componente è scritto in `_.styl`. Lo stile utilizzato per la dimostrazione è scritto in `demo/_.styl`. È vietato scriverlo in `nome componente/_.styl`.

  L'utilizzo di `@import` per importare stili da altri componenti è proibito sia in `_.styl` che in `demo/_.styl` .

  Segui gli standard di codifica e l'estetica del design di [./styl.md](./styl.md).

  I componenti dipendenti (e i relativi stili) vengono importati tramite `import "./other Components.js"` in `webc/componentname.js`; le dipendenze per la dimostrazione vengono importate tramite `import "../../other Components.js"` in `demo/_.js`.

   Tutti i componenti (inclusi i componenti di puro stile) devono avere un file script `nome componente.js`. Il `nome componente.js` dei componenti in puro stile importa solo il corrispondente `_.styl`. Per i componenti con logica JS, segui il processo [webc.js.md](./webc.js.md) per lo sviluppo.

3. Premi [demo.md](./demo.md) dimostrazione dello sviluppo del processo

4. Esegui `./test.sh` della directory principale. Correggi errori e allarmi, estrai funzioni, ottimizza il codice ed evita duplicazioni e ridondanze. Per le specifiche del codice, vedere `.agents/doc/code/js.md`

5. Leggi [dbg.md](./dbg.md) ed esegui il debug dei componenti in base al processo

6. Seguire il processo [i18n.md](./i18n.md) per implementare l'internazionalizzazione di componenti e dimostrazioni e scrivere documenti

7. Testare nuovamente e ottimizzare il codice

8. Apri un agente secondario e chiama `.agents/skills/js_review/SKILL.md` per rivedere e ottimizzare il codice.

9. Debug di nuovo