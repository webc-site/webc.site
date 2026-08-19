# Autentifikácia prihlásenia a registrácie

Integrujte registráciu a prihlásenie e-mailu a čísla mobilného telefónu, overenie overovacím kódom, prihlásenie heslom a rýchle prihlásenie tretích strán.

- Podporuje prepínanie kariet medzi e-mailovou adresou a číslom mobilného telefónu
- Plávajúce etikety s textúrou tekutého skla
- Podporuje výber predvoľby pre viacero krajín a odpočítavanie overovacieho kódu SMS
- Podporujte rýchle prihlásenie OAuth tretích strán a viazané pokyny

## Použite demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vrátiť stavový kód: 1 pre registráciu overovacieho kódu, 2 pre prihlásenie pomocou hesla alebo vrátiť pole prihlásenia tretej strany ["google", "apple"]
  return 2;
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
- `cc`: medzinárodná predvoľba (predvolená hodnota 86)
- `onMail(mail)`: Spätné volanie na kontrolu e-mailu
- `onSignup(mail, name, password)`: Zaregistrujte spätné volanie
- `onLogin(mail, password)`: Spätné volanie pri prihlásení pomocou hesla
- `onSmsSend(phone, cc)`: Odoslať spätné volanie s verifikačným kódom SMS
- `onSmsVerify(phone, cc, code)`: Spätné volanie s verifikačným kódom SMS
- `onPassport(provider)`: Spätné volanie rýchleho prihlásenia tretej strany
- `onReset(mail)`: Spätné volanie na obnovenie zabudnutého hesla