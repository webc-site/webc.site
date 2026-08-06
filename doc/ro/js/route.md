# route.js

Gestionarea rutei front-end cu o singură pagină

## nowUrl()

Obțineți calea URL curentă cu bara oblică principală eliminată

Valoare returnată: șirul de cale curent

## route(hook)

Înregistrați apelul de ascultare pentru modificări de rută. La înregistrare, acesta va fi executat o dată cu calea curentă.

parametru:
- `hook` : funcția de apel invers pentru monitorizarea rutei
  - parametru
    - `url` : calea curentă
    - `pre` : ultima cale

Valoare returnată: funcție de curățare neînregistrată

## setPre(url)

Salvați ultima adresă URL înregistrată

parametru:
- `url` : șir de cale

## preUrl()

Obțineți adresa URL a ultimei înregistrări

Valoare returnată: ultimul șir de cale

## refresh(url)

Forțați ca toate apelurile de ascultare a rutei să fie declanșate pe calea specificată și actualizați înainte

parametru:
- `url` : cale țintă, cale curentă implicită

## removeSlash(url)

Eliminați barele oblice din anteturile căilor

parametru:
- `url` : șir de cale

Valoarea de returnare: cale după eliminarea barei oblice principale

## setUrl(url)

Actualizați starea adresei URL a barei de adrese ale browserului

parametru:
- `url` : cale țintă

Valoarea returnată: 1 dacă calea se schimbă efectiv

## goto(url)

Actualizați adresa browserului și declanșați o reîmprospătare a rutei

parametru:
- `url` : cale țintă