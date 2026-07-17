# WebC.site

## Che cos'è questo?

### Questa è una libreria di componenti Web nativa

Sviluppato sulla base di [componenti web](https://developer.mozilla.org/docs/Web/API/Web_components), è indipendente dal runtime e adatto a tutti i framework.

Estremamente ottimizzato per le dimensioni (un decimo delle dimensioni di librerie popolari simili).

Supporta 75 lingue. Puoi importare direttamente js e css per l'utilizzo online o aggiungere componenti al tuo progetto secondo necessità per lo sviluppo secondario.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Questo è il framework di sviluppo della libreria dei componenti

Questa è la versione statica del blog di [storybook](https://storybook.js.org).

La creazione di una libreria di componenti può migliorare l'efficienza dello sviluppo interno dell'azienda e costruire un'immagine di marca nel circolo tecnico.

Basandosi su [webc.site](https://github.com/webc-site/webc.site), i team possono facilmente creare le proprie librerie di componenti e pubblicarle su [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com), ecc. È possibile eseguire il debug dei componenti pubblicati online su [codepen.io](https://codepen.io) e [jsfiddle](https://jsfiddle.net).

Allo stesso tempo, il framework di traduzione integrato può realizzare rapidamente l'internazionalizzazione di componenti e documenti, in modo che il pubblico del tuo prodotto non sia più vincolato dalla lingua.

### Questo è un nuovo paradigma di sviluppo front-end per l’era dell’intelligenza artificiale

Il framework è `.agents/skills` integrato e consente all'intelligenza artificiale di aiutarti a sviluppare nuovi componenti con un clic secondo le migliori pratiche.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Lascia che il codice front-end cambi da una montagna di spazzatura insostenibile di programmazione atmosferica in una parte standard che può essere mantenuta ed evoluta in modo iterativo a lungo termine.

Date le caratteristiche dello sviluppo assistito dall'intelligenza artificiale, abbiamo proposto e progettato un nuovo paradigma di sviluppo front-end:

1. **Tutto è un componente web**
2. **Il componente deve essere indipendente dal collegamento dati back-end e l'interfaccia dati è esposta come funzione di callback**

In questo modo l'intelligenza artificiale può generare dati falsi e visualizzare diversi stati dei componenti nella pagina demo.

Separazione dello sviluppo dei componenti e dell'interfaccia dati, combinata con [webc.site componente framework](https://github.com/webc-site/webc.site) Un'altra caratteristica importante:

**Ogni componente può avviare il server di sviluppo in modo indipendente ed eseguire lo sviluppo e il debug sulla pagina demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Ciò riduce il collegamento front-end per lo sviluppo e il debug di ciascun componente a `0`.

In questo modo, gli strumenti di sviluppo assistiti dall'intelligenza artificiale ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) ecc.), puoi godere di uno sviluppo completamente automatico, del debug aperto del browser e di non essere più bloccato da vari fattori disordinati (dati di backend, stato di accesso, routing del percorso, ecc.).

Se vuoi controllare l’intelligenza artificiale, ridurre i costi e aumentare l’efficienza, hai bisogno di un nuovo paradigma che riduca al minimo l’ambiente di sviluppo e debug di ciascun componente.

---

# Non ho ancora iniziato a scrivere TODO

### Libreria di componenti Web

#### Ottimizzazione delle dimensioni definitiva

Ad esempio, per il componente barra di scorrimento virtuale, confronta la dimensione del popolare script e stile [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) dopo `gz`, come mostrato nella tabella seguente:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐1880 a.C    |

Il componente della barra di scorrimento virtuale di `webc.site` è solo `10%` di `OverlayScrollbars`.

#### Indipendente dal tempo di esecuzione

Costruita sugli standard [Componenti Web](https://developer.mozilla.org/docs/Web/API/Web_components), la libreria dei componenti webc.site è naturalmente indipendente dal runtime. Che tu stia utilizzando React, Vue, Angular, Svelte o un tradizionale progetto HTML/JS puro, tutti i componenti possono essere eseguiti direttamente nel browser come tag HTML nativi, senza la necessità di un packaging secondario per un framework specifico.

##### Confronto con shadcn

[shadcn/ui](https://ui.shadcn.com) adotta la modalità di distribuzione del codice, che richiede di copiare il codice del componente direttamente nel proprio progetto. È strettamente legato all'ecosistema React e a specifiche catene di strumenti di costruzione (come Tailwind CSS) e non può essere utilizzato tra framework. Presenta inoltre determinati requisiti per la configurazione dell'ingegneria del progetto.

E il componente di `webc.site`:
- **Universale a più framework**: viene scritto una volta e può essere introdotto ed eseguito direttamente in qualsiasi framework front-end (anche in un ambiente privo di framework).
- **Dipendenza zero dall'ambiente**: non sono richiesti strumenti di packaging specifici o preprocessori CSS, basta importare i file statici compilati e può essere utilizzato immediatamente.

## Sviluppo e debug automatizzati

### Sviluppo locale e debug

Ogni componente della pagina Web supporta l'avvio del server di sviluppo in modo indipendente, fornendo un ambiente minimo di sviluppo e debug:

- **Crea un nuovo componente**: esegui `./sh/new.js [css|js] [nome componente]` per generare rapidamente una struttura di sviluppo del componente (inclusa la pagina demo e la configurazione di internazionalizzazione).
- **Debug indipendente**: esegui `./dev.js [nome componente]` (o esegui `./dev.js` direttamente) per avviare il server di sviluppo Vite e aprire automaticamente la pagina demo del componente nel browser. Supporta l'aggiornamento a caldo dei componenti (HMR). Poiché i collegamenti di sviluppo e dati sono disaccoppiati, non esiste alcun collegamento front-end di sviluppo, che è molto adatto per l'intelligenza artificiale (come Claude Code, Google Antigravity, ecc.) per assistere nello sviluppo completamente automatico e nel debug del browser.

### Pubblica la libreria dei componenti

#### webc dist

Il processo di confezionamento e pubblicazione è altamente automatizzato:
- **Packaging di risorse statiche**: l'esecuzione di `./sh/dist.js` (ovvero l'esecuzione dell'attività `webc dist`) può scansionare automaticamente tutti i componenti della pagina Web in `src/`, compilarli, comprimerli e inviarli alla directory `dist/`. Questa directory contiene file JS/CSS per la distribuzione di produzione, un sito demo pronto per la distribuzione su GitHub Pages o Cloudflare Pages e file di routing `_redirects` e `404.html` generati automaticamente.
- **Pubblicazione NPM**: esegui `./sh/npmDist.js`, lo script gestirà automaticamente le dipendenze dei componenti, incrementerà il numero di versione del pacchetto ed eseguirà `npm publish` con un clic al termine del confezionamento per pubblicare la libreria dei componenti su NPM.

### La piattaforma è responsabile della traduzione

Il framework dispone di processi di traduzione automatizzati integrati:
1. Configura le regole di traduzione (come lingua di origine, lingua di destinazione e directory da tradurre) in `tran.yml` nella directory principale del progetto.
2. Utilizza i segnaposto nei componenti o nei documenti senza dover codificare più lingue nel codice.
3. Esegui `./sh/tran.js` e il motore di traduzione estrarrà automaticamente il testo e chiamerà il servizio di traduzione WebC per l'elaborazione, generando automaticamente voci di traduzione YAML e documentazione README in varie lingue.

### variabili d'ambiente

Quando si esegue la traduzione automatica, è necessario configurare le seguenti variabili di ambiente per autorizzare l'accesso all'API di traduzione:

- **`WEBC_SITE_TOKEN`** (o **`WEBC_TOKEN`**): chiave di autenticazione utilizzata per accedere all'`webc.site` API di traduzione automatica. Può essere inserito come variabile di ambiente o scritto `token` nel file di configurazione `~/.config/webc.site.yml` nella directory home dell'utente locale.