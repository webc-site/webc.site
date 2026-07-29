# fetchLang.js

Tgħabbi b'mod asinkroniku pakketti tal-lingwa u torbot callbacks tal-aġġornament

## fetchLang(getDict)

Oħloq semmiegħa tal-pakkett tal-lingwa biex tikseb il-pakkett tal-lingwa b'mod asinkroniku u tesegwixxi callback ta' aġġornament meta l-lingwa tinbidel

parametru:
- `getDict` : Ikseb il-funzjoni asinkronika tal-pakkett tal-lingwa
  - parametru
    - `code` : kodiċi tal-lingwa
  - Valur tar-ritorn: dizzjunarju tal-pakkett tal-lingwa

Valur tar-ritorn: funzjoni biex tirreġistra callback ta' aġġornament
- parametru
  - `refresh` : Aġġorna l-funzjoni ta' callback meta l-lingwa tiġi aġġornata
    - parametru
      - `i18n` : Oġġett dizzjunarju tal-pakkett tal-lingwa
      - `code` : Kodiċi tal-lingwa attwali
- Valur tar-ritorn: funzjoni li tneħħi r-reġistrazzjoni tar-callback tal-aġġornament