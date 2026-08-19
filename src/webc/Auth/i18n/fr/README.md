# Connexion et enregistrement d'authentification

Intégrez l'enregistrement et la connexion par e-mail et par numéro de téléphone mobile, la vérification du code de vérification, la connexion par mot de passe et la connexion rapide par un tiers.

- Prend en charge le changement d'onglet entre l'adresse e-mail et le numéro de téléphone mobile
- Étiquettes flottantes avec texture de verre liquide
- Prend en charge la sélection de l'indicatif régional multi-pays et le compte à rebours du code de vérification SMS
- Prise en charge de la connexion rapide OAuth tiers et des conseils liés

## Utilisez la démo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Renvoie le code d'état : 1 pour l'enregistrement du code de vérification, 2 pour la connexion par mot de passe ou renvoie un tableau de connexion tiers ["google", "apple"]
  return 2;
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
- `cc` : indicatif international (86 par défaut)
- `onMail(mail)` : rappel de vérification par e-mail
- `onSignup(mail, name, password)` : enregistrement du rappel
- `onLogin(mail, password)` : rappel de connexion par mot de passe
- `onSmsSend(phone, cc)` : envoyer un rappel du code de vérification par SMS
- `onSmsVerify(phone, cc, code)` : Rappel du code de vérification par SMS de vérification
- `onPassport(provider)` : rappel de connexion rapide tiers
- `onReset(mail)` : rappel de réinitialisation du mot de passe oublié