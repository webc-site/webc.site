# Capa emergente de código de verificación

Ventana emergente de código de verificación basada en clic gráfico.

- Combinado con BoxX para implementar interacción de ventana emergente y soporte ESC/cerrado
- Haga clic en el destino según la imagen de fondo
- Admite deshacer paso a clic y mecanismo de reintento automático
- usar
  * Red pública:`https://captcha.webc.pub`
  * Implementación privada: [captcha_srv](https://crates.io/crates/captcha_srv)

## Usa la demostración

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Después de la verificación, envía el token al backend
  console.log("Verificación aprobada Token:", token);
}
```

## valor de retorno

Llamar a la función devuelve `Promise<string | undefined>`:
- **Verificación aprobada**: devuelve la cadena de token del código de verificación codificada en Base64URL (sin relleno).
- **Cerrar o Cancelar**: Regresar a `undefined`.

## Proceso de verificación y cancelación de back-end

1. **Validación de activador**: llamadas de frontend `Captcha()`.
2. **Obtener gráfico**: `Captcha.js` Inicie `GET /` en `captcha_srv` para obtener la imagen y el ID en los que se hizo clic.
3. **Verificación de coordenadas**: después de que el usuario completa el clic, `Captcha.js` inicia `POST /` a `captcha_srv` para verificar las coordenadas. Si la verificación es exitosa, se devolverá un token codificado en Base64URL.
4. **Verificación de back-end**: el front-end envía el token al backend del sitio web y el backend llama a `captcha_srv` y `GET /verify/{token}` para verificar y destruir el token de inmediato.

### Instrucciones de cancelación de back-end

Después de que el backend del sitio web recibe el `token` enviado por el front-end, debe iniciar una solicitud al servicio `captcha_srv`:

- **Solicitar interfaz**:`GET /verify/{token}`
- **Parámetro de ruta**: `token` (cadena Base64URL devuelta por el front-end)
- **Resultado devuelto**: `1` significa que la verificación fue aprobada y válida (se destruirá automáticamente); `0` significa no válido o ha sido cancelado.