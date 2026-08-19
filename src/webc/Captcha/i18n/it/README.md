# Livello popup del codice di verifica

Finestra pop-up del codice di verifica basata sul clic grafico.

- Combinato con BoxX per implementare l'interazione con la finestra pop-up e il supporto ESC/chiudi
- Fare clic sul target in base all'immagine di sfondo
- Supporta l'annullamento tramite clic e il meccanismo di ripetizione automatica
- utilizzo
  * Rete pubblica:`https://captcha.webc.pub`
  * Distribuzione privata: [captcha_srv](https://crates.io/crates/captcha_srv)

## Utilizza la demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Dopo la verifica, invia il token al backend
  console.log("Verifica superata Token:", token);
}
```

## valore restituito

La chiamata alla funzione restituisce `Promise<string | undefined>`:
- **Verifica superata**: restituisce la stringa token del codice di verifica codificato Base64URL (senza riempimento).
- **Chiudi o Annulla**: torna a `undefined`.

## Processo di verifica e cancellazione del back-end

1. **Convalida del trigger**: chiamate frontend `Captcha()`.
2. **Ottieni grafico**: `Captcha.js` Avvia da `GET /` a `captcha_srv` per ottenere l'immagine e l'ID su cui è stato fatto clic.
3. **Verifica delle coordinate**: dopo che l'utente ha completato il clic, `Captcha.js` avvia `POST /` su `captcha_srv` per verificare le coordinate. Se la verifica ha esito positivo, verrà restituito un token codificato Base64URL.
4. **Verifica back-end**: il front-end invia il token al backend del sito web e il backend chiama `captcha_srv` e `GET /verify/{token}` per verificare e distruggere immediatamente il token.

### Istruzioni per la cancellazione del back-end

Dopo che il backend del sito web riceve il `token` inviato dal front-end, deve avviare una richiesta al servizio `captcha_srv`:

- **Interfaccia di richiesta**:`GET /verify/{token}`
- **Parametro percorso**: `token` (stringa Base64URL restituita dal front-end)
- **Risultato restituito**: `1` significa che la verifica è stata superata e valida (verrà automaticamente distrutto); `0` significa non valido o è stato cancellato.