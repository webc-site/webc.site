# route.js

Enkeltside front-end routing management

## nowUrl()

Få den aktuelle URL-sti med den førende skråstreg fjernet

Returværdi: aktuel stistreng

## route(hook)

Registrer det lyttende tilbagekald for ruteændringer. Ved registrering udføres den én gang med den aktuelle sti.

parameter:
- `hook` : Ruteovervågnings-tilbagekaldsfunktion
  - parameter
    - `url` : nuværende sti
    - `pre` : sidste sti

Returværdi: Uregistreret oprydningsfunktion

## setPre(url)

Gem den sidst registrerede URL

parameter:
- `url` : stistreng

## preUrl()

Hent URL'en til den sidste post

Returværdi: sidste stistreng

## refresh(url)

Tving alle rutelyttetilbagekald til at blive udløst på den angivne sti og opdater før

parameter:
- `url` : målsti, standard aktuel sti

## removeSlash(url)

Fjern skråstreger fra stioverskrifter

parameter:
- `url` : stistreng

Returværdi: sti efter fjernelse af den indledende skråstreg

## setUrl(url)

Opdater browserens adresselinjes URL-status

parameter:
- `url` : målsti

Returværdi: 1, hvis stien faktisk ændres

## goto(url)

Opdater browseradressen og udløs en ruteopdatering

parameter:
- `url` : målsti