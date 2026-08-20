# Autentifikácia prihlásenia a registrácie

Integrujte registráciu a prihlásenie e-mailu a čísla mobilného telefónu, overenie overovacím kódom, prihlásenie heslom a rýchle prihlásenie tretích strán.

- Podpora zadávania e-mailu a čísla mobilného telefónu
- Plávajúce etikety s textúrou tekutého skla
- Podpora odpočítavania SMS overovacieho kódu
- Podporujte rýchle prihlásenie OAuth tretích strán a viazané pokyny

## Použite demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onSignup = async (mail, name, password, code) => {
  return [0, mail, name, code];
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Autentifikácia bola úspešná:", e.detail);
});
</script>
```

## stavová konštanta

- `0` (`STATE_MAIL`): Zadanie e-mailu
- `1` (`STATE_CODE`): E-mailová registrácia verifikačného kódu
- `2` (`STATE_PASSWD`): E-mailové prihlasovacie heslo
- `10` (`STATE_PHONE`): Zadajte číslo mobilného telefónu
- `11` (`STATE_SMS_CODE`): Overenie pomocou SMS overovacieho kódu
- `Array` (`OAUTH_HINT`): Zoznam sprievodcov prihlásením tretej strany

## Vlastnosti a háčikové funkcie

- `step`: aktuálny stav (číslo alebo pole)
- `mail`: E-mail
- `phone`: číslo mobilného telefónu
- `onSignup(mail, name, password, code)`: Zaregistrujte spätné volanie
- `onResend(mail)`: Znova odoslať spätné volanie verifikačného kódu
- `onLogin(mail, password)`: Spätné volanie pri prihlásení pomocou hesla
- `onSmsSend(phone)`: Odoslať spätné volanie s verifikačným kódom SMS
- `onSmsVerify(phone, code)`: Spätné volanie s verifikačným kódom SMS
- `onPassport(provider)`: Spätné volanie rýchleho prihlásenia tretej strany
- `onReset(mail)`: Spätné volanie na obnovenie zabudnutého hesla