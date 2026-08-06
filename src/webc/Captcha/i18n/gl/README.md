# Capa emerxente do código de verificación

Ventá emerxente do código de verificación baseada nun clic gráfico.

- Combinado con BoxX para implementar a interacción de ventás emerxentes e soporte ESC/close
- Fai clic no destino en función da imaxe de fondo
- Admite desfacer clic paso a paso e mecanismo de reintento automático
- usar
  * Rede pública:`https://captcha.webc.pub`
  * Implementación privada: [captcha_srv](https://crates.io/crates/captcha_srv)

## Use a demostración

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Despois da verificación, envíe o token ao backend
  console.log("Ficha de verificación pasada:", token);
}
```

## valor de retorno

Ao chamar á función devolve `Promise<string | undefined>`:
- **Verificación superada**: devolve o código de verificación codificado Base64URL (sen recheo) Cadea de token.
- **Pechar ou cancelar**: volve a `undefined`.

## Proceso de verificación e cancelación de back-end

1. **Validación do activador**: chamadas de frontend `Captcha()`.
2. **Obter gráfica**: `Captcha.js` Inicia `GET /` para `captcha_srv` para obter a imaxe e o ID no que se fai clic.
3. **Verificación de coordenadas**: despois de que o usuario complete o clic, `Captcha.js` inicia `POST /` a `captcha_srv` para verificar as coordenadas. Se a verificación se realiza correctamente, devolverase un token codificado Base64URL.
4. **Verificación de back-end**: o front-end envía o token ao backend do sitio web e o backend chama a `captcha_srv` e `GET /verify/{token}` para verificar e destruír o token á vez.

### Instrucións de cancelación de back-end

Despois de que o backend do sitio web reciba o `token` enviado polo front-end, debe iniciar unha solicitude ao servizo `captcha_srv`:

- **Interface de solicitude**:`GET /verify/{token}`
- **Parámetro de ruta**: `token` (cadea Base64URL devolta pola interface)
- **Resultado de devolución**: `1` significa que a verificación foi superada e válida (destruirase automaticamente); `0` significa que non é válido ou foi cancelado.