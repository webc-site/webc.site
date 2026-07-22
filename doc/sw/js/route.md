# route.js

Usimamizi wa uelekezaji wa ukurasa mmoja wa mwisho

## nowUrl()

Pata njia ya sasa ya URL na mfgo unaoongoza umeondolewa

Thamani ya kurejesha: mfuatano wa njia ya sasa

## route(hook)

Sajili simu ya kurudi nyuma kwa mabadiliko ya njia. Wakati wa kusajili, itatekelezwa mara moja na njia ya sasa.

kigezo:
- `hook` : Kitendaji cha ufuatiliaji wa njia
  - kigezo
    - `url` : njia ya sasa
    - `pre` : njia ya mwisho

Thamani ya kurejesha: Kitendakazi cha kusafisha ambacho hakijasajiliwa

## setPre(url)

Hifadhi URL ya mwisho iliyorekodiwa

kigezo:
- `url` : mfuatano wa njia

## preUrl()

Pata URL ya rekodi ya mwisho

Thamani ya kurudisha: mfuatano wa njia ya mwisho

## refresh(url)

Lazimisha simu zote za usikilizaji wa njia kuanzishwa kwa njia iliyobainishwa na usasishe mapema

kigezo:
- `url` : njia inayolengwa, njia chaguomsingi ya sasa

## removeSlash(url)

Ondoa mikwaju kutoka kwa vichwa vya njia

kigezo:
- `url` : mfuatano wa njia

Thamani ya kurudi: njia baada ya kuondoa mkwaju unaoongoza

## setUrl(url)

Sasisha hali ya upau wa anwani ya kivinjari

kigezo:
- `url` : njia inayolengwa

Thamani ya kurejesha: 1 ikiwa njia itabadilika

## goto(url)

Sasisha anwani ya kivinjari na uanzishe uonyeshaji upya wa njia

kigezo:
- `url` : njia inayolengwa