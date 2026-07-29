---
name: jsdoc
description: dokument src/js samodejno ustvarjen
---

## Tekaški koraki

1. Zaženite `./sh/jsDoc.js` za ogled funkcij z manjkajočo dokumentacijo (če ni izhoda, ga ni treba dodati).
2. Glede na seznam izhodnih datotek preberite obstoječe dokumente in kode enega za drugim in jih dokončajte (obdelajte jih v zaporedju in jih zlomite enega za drugim).

## Zahteve glede dokumentacije

Če je izvoz funkcija, napišite
- Parametri in vrnjene vrednosti:
  - Ustrezne opise napišite le, če obstajajo parametri ali vrnjene vrednosti, sicer jih ne pišite.
  - Parametri so uvedeni z uporabo neurejenih seznamov.
  - Če je vrnjena vrednost matrika, uporabite neurejen seznam, da jo opišete enega za drugim (sicer napišite neposredno, `Vrnjena vrednost: opis`, samo eno vrstico).
  - Če so parametri ali vrnjena vrednost funkcije, uporabite pod-neurejene sezname za opis parametrov in vrnjenih vrednosti (če jih ni, jih ne pišite).

Če je izvoz konstanta, vnesite, kaj je, samo eno vrstico

- Uporabljajte jedrnat, strokoven jezik in se izogibajte uporabi pridevnikov.
- Popravite obstoječi dokument, ne prepišite ga v celoti

## predlogo oblikovanja

Vsako ime napišite samo enkrat, da se izognete podvajanju, in ga poskušajte jasno izraziti v eni vrstici. Referenčna oblika je naslednja

```
# ime datoteke

## Ime funkcije (parameter)

Opis uporabe

parameter:
- `xx` : Namen
  - parameter
    - `a` : Namen
  - Vrnjena vrednost: opis

Vrnjena vrednost: Opis
```