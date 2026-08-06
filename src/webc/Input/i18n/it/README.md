# Casella di input che cambia automaticamente lo stato del segnaposto

- Mostra il segnaposto quando non inserito
- I segnaposto si ridimensionano e fluttuano uniformemente sopra durante la digitazione del contenuto
- Pura implementazione CSS, nessuna dipendenza JavaScript
- Predefinito con sfondo in vetro smerigliato e transizione al passaggio del mouse

## Utilizza la demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## requisiti strutturali

- Contenitore: utilizza gli elementi della classe `.Input` per ospitare caselle di input ed etichette.
- Casella di input: l'elemento `input`, `placeholder=" "` (un segnaposto contenente uno spazio) deve essere impostato per attivare il cambio di stato.
- Tag tip: elemento `label`, immediatamente dopo `input`.

## lezione di stile

- `.Input`: stile di base, che fornisce la struttura della casella di input e l'animazione della transizione.
- `.Lg`: stile di modifica del vetro evidenziato/smerigliato.