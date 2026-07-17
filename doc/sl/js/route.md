# route.js

Enostransko upravljanje usmerjanja na sprednji strani

## nowUrl()

Pridobite trenutno pot URL z odstranjeno začetno poševnico

Povratna vrednost: trenutni niz poti

## route(hook)

Registrirajte povratni klic poslušanja za spremembe poti. Ob registraciji se izvede enkrat s trenutno potjo.

parameter:
- `hook` : Funkcija povratnega klica za spremljanje poti
  - parameter
    - `url` : trenutna pot
    - `pre` : zadnja pot

Povrnjena vrednost: Neregistrirana funkcija čiščenja

## setPre(url)

Shranite zadnji posneti URL

parameter:
- `url` : niz poti

## preUrl()

Pridobite URL zadnjega zapisa

Povratna vrednost: zadnji niz poti

## refresh(url)

Vsili vse povratne klice poslušanja poti, da se sprožijo na podani poti, in posodobi pred

parameter:
- `url` : ciljna pot, privzeta trenutna pot

## removeSlash(url)

Odstranite poševnice iz glav poti

parameter:
- `url` : niz poti

Vrnjena vrednost: pot po odstranitvi prve poševnice

## setUrl(url)

Posodobite stanje URL naslovne vrstice brskalnika

parameter:
- `url` : ciljna pot

Povratna vrednost: 1, če se pot dejansko spremeni

## goto(url)

Posodobite naslov brskalnika in sprožite osvežitev poti

parameter:
- `url` : ciljna pot