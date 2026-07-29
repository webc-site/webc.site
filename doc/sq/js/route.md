# route.js

Menaxhimi i rrugëtimit me një faqe të përparme

## nowUrl()

Merrni shtegun aktual të URL-së me të hequr prerjen kryesore

Vlera e kthimit: vargu aktual i rrugës

## route(hook)

Regjistroni kthimin e dëgjimit për ndryshimet e rrugës. Gjatë regjistrimit, ai do të ekzekutohet një herë me shtegun aktual.

parametri:
- `hook` : Funksioni i kthimit të thirrjes së monitorimit të rrugës
  - parametri
    - `url` : rruga aktuale
    - `pre` : rruga e fundit

Vlera e kthimit: Funksioni i pastrimit i paregjistruar

## setPre(url)

Ruani URL-në e fundit të regjistruar

parametri:
- `url` : varg shtegu

## preUrl()

Merrni URL-në e regjistrimit të fundit

Vlera e kthimit: vargu i rrugës së fundit

## refresh(url)

Detyro që të gjitha thirrjet kthyese të dëgjimit të rrugës të aktivizohen në shtegun e specifikuar dhe përditëso paraprakisht

parametri:
- `url` : shtegu i synuar, shtegu aktual i parazgjedhur

## removeSlash(url)

Hiq prerjet nga kokat e shtigjeve

parametri:
- `url` : varg shtegu

Vlera e kthimit: rruga pas heqjes së vijës së pjerrët kryesore

## setUrl(url)

Përditëso statusin e URL-së së shiritit të adresave të shfletuesit

parametri:
- `url` : shtegu i synuar

Vlera e kthimit: 1 nëse rruga në të vërtetë ndryshon

## goto(url)

Përditësoni adresën e shfletuesit dhe aktivizoni një rifreskim të rrugës

parametri:
- `url` : shtegu i synuar