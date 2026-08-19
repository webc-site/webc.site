# Verification code popup layer

Verification code pop-up window based on graphic click.

- Combined with BoxX to implement pop-up window interaction and ESC/close support
- Click target based on background image
- Supports step click undo and automatic retry mechanism
- Use
  * Public Network:`https://captcha.webc.pub`
  * Private Deployment: [Captcha_srv](https://crates.io/crates/captcha_srv)

## Use the demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // After verification, submit the token to the backend
  console.log("Verification passed Token:", token);
}
```

## Return Value

Calling the function returns `Promise<string | undefined>`:
- **Verification Passed**: Returns the Base64URL encoded (no padding) verification code Token string.
- **Close or Cancel**: Return to `undefined`.

## Verification process and back-end write-off

1. **Trigger validation**: Frontend calls `Captcha()`.
2. **Get chart**: `Captcha.js` Initiate `GET /` to `captcha_srv` to get clicked image and ID.
3. **Coordinate verification**: After the user completes the click, `Captcha.js` initiates `POST /` to `captcha_srv` to verify the coordinates. If the verification is successful, a Base64URL encoded Token will be returned.
4. **Back-end verification**: The front-end submits the Token to the website backend, and the backend calls `captcha_srv` and `GET /verify/{token}` to verify and destroy the Token at once.

### Back-end write-off instructions

After the website backend receives the `token` submitted by the front-end, it needs to initiate a request to the `captcha_srv` service:

- **Request interface**:`GET /verify/{token}`
- **Path parameter**: `token` (Base64URL string returned by the front end)
- **Return result**: `1` means the verification is passed and valid (will be automatically destroyed); `0` means invalid or has been written off.