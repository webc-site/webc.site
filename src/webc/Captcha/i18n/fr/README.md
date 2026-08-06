# Couche contextuelle du code de vérification

Fenêtre contextuelle du code de vérification basée sur un clic graphique.

- Combiné avec BoxX pour implémenter l'interaction des fenêtres contextuelles et la prise en charge ESC/fermeture
- Cible de clic basée sur l'image d'arrière-plan
- Prend en charge l'annulation du clic étape par étape et le mécanisme de nouvelle tentative automatique
- utiliser
  * Réseau public :`https://captcha.webc.pub`
  * Déploiement privé : [captcha_srv](https://crates.io/crates/captcha_srv)

## Utilisez la démo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Après vérification, soumettez le token au backend
  console.log("Vérification réussie Jeton :", jeton);
}
```

## valeur de retour

L'appel de la fonction renvoie `Promise<string | undefined>` :
- **Vérification réussie** : renvoie la chaîne de jeton du code de vérification codé en Base64URL (sans remplissage).
- **Fermer ou Annuler** : revenir à `undefined`.

## Processus de vérification et radiation back-end

1. **Validation du déclencheur** : appels frontaux `Captcha()`.
2. **Obtenir le graphique** : `Captcha.js` lancez `GET /` vers `captcha_srv` pour obtenir l'image et l'identifiant cliqués.
3. **Vérification des coordonnées** : une fois que l'utilisateur a terminé le clic, `Captcha.js` lance `POST /` à `captcha_srv` pour vérifier les coordonnées. Si la vérification réussit, un jeton codé en Base64URL sera renvoyé.
4. **Vérification back-end** : le front-end soumet le jeton au backend du site Web, et le backend appelle `captcha_srv` et `GET /verify/{token}` pour vérifier et détruire le jeton immédiatement.

### Instructions de radiation back-end

Une fois que le backend du site Web a reçu le `token` soumis par le front-end, il doit lancer une requête auprès du service `captcha_srv` :

- **Interface de requête** :`GET /verify/{token}`
- **Paramètre Path** : `token` (chaîne Base64URL renvoyée par le frontal)
- **Résultat renvoyé** : `1` signifie que la vérification est réussie et valide (sera automatiquement détruite) ; `0` signifie invalide ou a été radié.