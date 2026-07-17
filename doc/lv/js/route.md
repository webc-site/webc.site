# route.js

Vienas lapas priekšgala maršrutēšanas pārvaldība

## nowUrl()

Iegūstiet pašreizējo URL ceļu ar noņemtu slīpsvītru

Atgriešanas vērtība: pašreizējā ceļa virkne

## route(hook)

Reģistrējiet klausīšanās atzvanu maršruta izmaiņām. Reģistrējoties, tas tiks izpildīts vienu reizi ar pašreizējo ceļu.

parametrs:
- `hook` : maršruta uzraudzības atzvanīšanas funkcija
  - parametrs
    - `url` : pašreizējais ceļš
    - `pre` : pēdējais ceļš

Atgriešanas vērtība: nereģistrēta tīrīšanas funkcija

## setPre(url)

Saglabājiet pēdējo ierakstīto URL

parametrs:
- `url` : ceļa virkne

## preUrl()

Iegūstiet pēdējā ieraksta URL

Atgriešanas vērtība: pēdējā ceļa virkne

## refresh(url)

Piespiest visus maršruta klausīšanās atzvanus aktivizēt norādītajā ceļā un atjaunināt iepriekš

parametrs:
- `url` : mērķa ceļš, noklusējuma pašreizējais ceļš

## removeSlash(url)

Noņemiet slīpsvītras no ceļa galvenēm

parametrs:
- `url` : ceļa virkne

Atgrieztā vērtība: ceļš pēc sākuma slīpsvītras noņemšanas

## setUrl(url)

Atjauniniet pārlūkprogrammas adreses joslas URL statusu

parametrs:
- `url` : mērķa ceļš

Atgriešanas vērtība: 1, ja ceļš faktiski mainās

## goto(url)

Atjauniniet pārlūkprogrammas adresi un aktivizējiet maršruta atsvaidzināšanu

parametrs:
- `url` : mērķa ceļš