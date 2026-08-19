# route.js

Vieno puslapio priekinio maršruto valdymas

## nowUrl()

Gaukite dabartinį URL kelią pašalinę pasvirąjį brūkšnį

Grąžinama vertė: dabartinio kelio eilutė

## route(hook)

Užregistruokite klausymo atgalinį skambutį maršruto pakeitimams. Registruojantis jis bus vykdomas vieną kartą su esamu keliu.

parametras:
- `hook` : maršruto stebėjimo atgalinio skambinimo funkcija
  - parametras
    - `url` : dabartinis kelias
    - `pre` : paskutinis kelias

Grąžinama vertė: neregistruota valymo funkcija

## setPre(url)

Išsaugokite paskutinį įrašytą URL

parametras:
- `url` : kelio eilutė

## preUrl()

Gaukite paskutinio įrašo URL

Grąžinama vertė: paskutinė kelio eilutė

## refresh(url)

Priverstinai suaktyvinti visus maršruto klausymo atgalinius skambučius nurodytu keliu ir atnaujinti iš anksto

parametras:
- `url` : tikslinis kelias, numatytasis dabartinis kelias

## removeSlash(url)

Pašalinkite pasviruosius brūkšnius iš kelio antraščių

parametras:
- `url` : kelio eilutė

Grąžinama vertė: kelias pašalinus pirminį pasvirąjį brūkšnį

## setUrl(url)

Atnaujinti naršyklės adreso juostos URL būseną

parametras:
- `url` : tikslinis kelias

Grąžinama vertė: 1, jei kelias iš tikrųjų pasikeičia

## goto(url)

Atnaujinkite naršyklės adresą ir suaktyvinkite maršruto atnaujinimą

parametras:
- `url` : tikslinis kelias