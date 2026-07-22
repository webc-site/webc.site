# fetch.js

Fonction d'outil de requête réseau basée sur l'encapsulation de récupération

## F(url, opt)

Envoyer une requête réseau et renvoyer un objet de réponse

paramètre:
- `url` : Adresse de la demande
- `opt` : `fetch` objet d'options

Valeur de retour : objet de réponse

## f(attr)

Une fonction d'ordre supérieur qui encapsule une requête et analyse le contenu renvoyé dans un format spécifié

paramètre:
- `attr` : nom de l'attribut d'analyse du corps de la réponse

Valeur de retour : fonction pour demander et analyser le contenu de manière asynchrone
  - paramètre
    - `url` : Adresse de la demande
    - `opt` : `fetch` objet d'options
  - Valeur de retour : contenu analysé

## fTxt

Envoyer une requête réseau et renvoyer le corps de la réponse au format texte

paramètre:
- `url` : Adresse de la demande
- `opt` : `fetch` objet d'options

Valeur de retour : texte de réponse

## fJson(url, opt)

Envoyer une requête réseau, analyser et renvoyer le corps de la réponse au format JSON

paramètre:
- `url` : Adresse de la demande
- `opt` : `fetch` objet d'options

Valeur de retour : objet JSON analysé

## fBin(url, opt)

Envoyer une requête réseau et renvoyer le corps de la réponse sous forme de tableau d'octets binaires

paramètre:
- `url` : Adresse de la demande
- `opt` : `fetch` objet d'options

Valeur de retour : tableau d'octets