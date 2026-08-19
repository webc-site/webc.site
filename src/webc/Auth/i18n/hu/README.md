# Hitelesítési bejelentkezés és regisztráció

Integrálja az e-mail- és mobiltelefonszám-regisztrációt és bejelentkezést, az ellenőrző kód ellenőrzését, a jelszó-bejelentkezést és a harmadik féltől származó gyors bejelentkezést.

- Támogatja az e-mail cím és a mobiltelefonszám közötti lapváltást
- Lebegő címkék folyékony üveg textúrával
- Támogatja a több ország körzetszámának kiválasztását és az SMS-ellenőrző kód visszaszámlálását
- Támogatja a harmadik féltől származó OAuth gyors bejelentkezést és a kötött útmutatást

## Használd a demót

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Állapotkód visszaküldése: 1 az ellenőrző kód regisztrálásához, 2 a jelszó bejelentkezéshez, vagy visszaküldi harmadik fél bejelentkezési tömbjét ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("A hitelesítés sikeres:", e.detail);
});
</script>
```

## állapot állandó

- `0` (`STATE_MAIL`): E-mail bevitel
- `1` (`STATE_CODE`): E-mail ellenőrző kód regisztráció
- `2` (`STATE_PASSWD`): Jelszó bejelentkezés e-mailben
- `10` (`STATE_PHONE`): Adja meg a mobiltelefonszámot
- `11` (`STATE_SMS_CODE`): SMS-ellenőrző kód ellenőrzése
- `Array` (`OAUTH_HINT`): Harmadik fél bejelentkezési útmutatóinak listája

## Tulajdonságok és horogfunkciók

- `step`: jelenlegi állapot (szám vagy tömb)
- `mail`: E-mail
- `phone`: mobiltelefonszám
- `cc`: nemzetközi hívószám (alapértelmezett 86)
- `onMail(mail)`: E-mail ellenőrzés visszahívás
- `onSignup(mail, name, password)`: Visszahívás regisztrálása
- `onLogin(mail, password)`: Jelszavas bejelentkezés visszahívása
- `onSmsSend(phone, cc)`: SMS-ellenőrző kód visszahívása
- `onSmsVerify(phone, cc, code)`: Ellenőrző SMS ellenőrző kód visszahívás
- `onPassport(provider)`: Harmadik fél gyors bejelentkezési visszahívása
- `onReset(mail)`: Elfelejtett jelszó visszaállítása