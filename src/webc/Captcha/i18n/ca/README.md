# Capa emergent del codi de verificació

Finestra emergent del codi de verificació basada en un clic gràfic.

- Combinat amb BoxX per implementar la interacció de la finestra emergent i el suport ESC/tancar
- Feu clic a l'objectiu en funció de la imatge de fons
- Admet desfer clic a pas i mecanisme de reintent automàtic
- utilitzar
  * Xarxa pública:`https://captcha.webc.pub`
  * Desplegament privat: [captcha_srv](https://crates.io/crates/captcha_srv)

## Utilitzeu la demostració

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Després de la verificació, envieu el testimoni al backend
  console.log("Fitxa de verificació aprovada:", testimoni);
}
```

## valor de retorn

La crida a la funció retorna `Promise<string | undefined>`:
- **Verificació superada**: retorna la cadena de testimoni del codi de verificació codificat Base64URL (sense farciment).
- **Tancar o cancel·lar**: torna a `undefined`.

## Procés de verificació i cancel·lació de fons

1. **Validació de l'activador**: el front-end truca a `Captcha()`.
2. **Obtén el gràfic**: `Captcha.js` Inicia `GET /` a `captcha_srv` per obtenir la imatge i l'identificador de clic.
3. **Verificació de coordenades**: després que l'usuari hagi completat el clic, `Captcha.js` inicia `POST /` a `captcha_srv` per verificar les coordenades. Si la verificació té èxit, es retornarà un testimoni codificat Base64URL.
4. **Verificació del back-end**: el front-end envia el testimoni al backend del lloc web i el backend crida a `captcha_srv` i `GET /verify/{token}` per verificar i destruir el testimoni alhora.

### Instruccions de cancel·lació de fons

Després que el backend del lloc web rebi el `token` enviat pel front-end, ha d'iniciar una sol·licitud al servei `captcha_srv`:

- **Interfície de sol·licitud**:`GET /verify/{token}`
- **Paràmetre del camí**: `token` (cadena Base64URL retornada per la portada)
- **Resultat de retorn**: `1` significa que la verificació ha passat i és vàlida (es destruirà automàticament); `0` vol dir que no és vàlid o que s'ha cancel·lat.