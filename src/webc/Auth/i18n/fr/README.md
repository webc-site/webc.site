# Connexion et enregistrement d'authentification

Intégrez l'enregistrement et la connexion par e-mail et par numéro de téléphone mobile, la vérification du code de vérification, la connexion par mot de passe et la connexion rapide par un tiers.

- Prise en charge de la saisie d'e-mails et de numéros de téléphone portable
- Étiquettes flottantes avec texture de verre liquide
- Prise en charge du compte à rebours du code de vérification SMS
- Prise en charge de la connexion rapide OAuth tiers et des conseils liés

## Utilisez la démo

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
  console.log("Authentification réussie :", e.detail);
});
</script>
```

## état constant

- `0` (`STATE_MAIL`) : saisie par e-mail
- `1` (`STATE_CODE`) : enregistrement du code de vérification par e-mail
- `2` (`STATE_PASSWD`) : connexion par mot de passe par e-mail
- `10` (`STATE_PHONE`) : saisissez le numéro de téléphone mobile
- `11` (`STATE_SMS_CODE`) : vérification du code de vérification par SMS
- `Array` (`OAUTH_HINT`) : liste des guides de connexion tiers

## Propriétés et fonctions de hook

- `step` : état actuel (numéro ou tableau)
- `mail` : e-mail
- `phone` : numéro de téléphone portable
- `onSignup(mail, name, password, code)` : enregistrement du rappel
- `onResend(mail)` : Renvoyer le rappel du code de vérification
- `onLogin(mail, password)` : rappel de connexion par mot de passe
- `onSmsSend(phone)` : envoyer un rappel du code de vérification par SMS
- `onSmsVerify(phone, code)` : Rappel du code de vérification par SMS de vérification
- `onPassport(provider)` : rappel de connexion rapide tiers
- `onReset(mail)` : rappel de réinitialisation du mot de passe oublié