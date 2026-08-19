# Dimostrazione

Fare riferimento a `src/webc/BoxX/demo` e sviluppare una demo del componente in `src/webc/nome componente/demo/`

`demo/_.pug`, modello secondario demo

`c-t` è un tag internazionalizzato personalizzato, che deve essere rientrato in una riga separata come nodo figlio (è severamente vietato scrivere nella stessa riga):
Esempio corretto:
```pug
button.Btn(type="button")
  nome della chiave c-t
```

Sono inclusi solo i tag dei componenti minimalisti, non è richiesta una pagina completa ed è vietata l'importazione di stili e script. Il framework si inietterà automaticamente (come `demo/_.styl`, `demo/_.js`).

Non scrivere un titolo (ad esempio, non scrivere xxx demo), non scrivere il nome del componente, non introdurre il componente, scrivere solo lo stato del caso d'uso della demo (se non c'è lo stato, non scrivere il titolo)

L'elemento radice di `_.pug` utilizza `main.demo.Lg` , che ha definito lo stile in `demo/_.styl` e non definisce lo stile di `main.demo.Lg` stesso.

Il contenitore del componente display dovrebbe essere allineato con `main.demo.Lg` e non dovrebbero esserci `margin` e `padding` tra di loro, perché `main.demo` stesso ha già impostato `padding` e l'impostazione vuota verrà ripetuta.

`demo/_.styl` Se è presente un solo componente di visualizzazione, il suo contenitore non avrà una cornice esterna e imposterà solo `max-width` (perché il contenitore della presentazione aggiungerà automaticamente una cornice esterna). Se ce ne sono più, il contenitore può essere separato da un telaio esterno.

Non scrivere `img` in `demo/_.pug`, usa `demo/_.styl` per impostare l'immagine di sfondo

Se il componente ha più moduli, visualizzali in ordine (ad esempio caricamento, dati vuoti, dati, non riusciti, ecc.), layout verticale flessibile

`demo/_.styl`: `stylus` stile della pagina demo, seguire le specifiche del codice e l'estetica del design di [./styl.md](./styl.md)

Se non si scrive `@import '../_.styl'` per importare il componente da dimostrare, verrà automaticamente iniettato; è vietato utilizzare `@import` in `demo/_.styl` per importare altri stili di componenti. Se la demo dipende da altri componenti (come il pulsante `.Btn`), importa i componenti dipendenti tramite `import "../../Btn.js"` in `demo/_.js`.

`demo/_.js`: chiama lo script, formato `export default (root) => { ... }`, il parametro `root` è l'host (`document` o l'elemento root del contenitore sandbox)

`D.createElement` è vietato, utilizzare `newEl` menzionato da [./js.md](./js.md)

`js` è vietato l'uso in `c-t` e per l'internazionalizzazione `fLang`

Se `../component name.js` (`../component name.js` deve visualizzare il componente stesso e altri componenti dipendenti richiesti dalla demo devono ancora essere importati), è richiesto solo `import` e non viene importato alcun contenuto specifico, che può essere omesso (il framework lo inietterà automaticamente)

`pug` Non è necessario importare `js` e `styl`, il framework li inietterà automaticamente