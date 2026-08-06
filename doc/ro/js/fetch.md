# fetch.js

Funcția instrumentului de solicitare a rețelei bazată pe încapsularea fetch

## F(url, opt)

Trimiteți o solicitare de rețea și returnați un obiect de răspuns

parametru:
- `url` : adresa de solicitare
- `opt` : `fetch` obiect opțiuni

Valoare returnată: obiect răspuns

## f(attr)

O funcție de ordin superior care include o solicitare și analizează conținutul returnat într-un format specificat

parametru:
- `attr` : numele atributului de analiză a corpului răspunsului

Valoarea returnată: funcție pentru a solicita și analiza conținut în mod asincron
  - parametru
    - `url` : adresa de solicitare
    - `opt` : `fetch` obiect opțiuni
  - Valoarea returnată: conținut analizat

## fTxt

Trimiteți o solicitare de rețea și returnați corpul răspunsului în format text

parametru:
- `url` : adresa de solicitare
- `opt` : `fetch` obiect opțiuni

Valoare returnată: text de răspuns

## fJson(url, opt)

Trimiteți o solicitare de rețea și analizați și returnați corpul răspunsului în format JSON

parametru:
- `url` : adresa de solicitare
- `opt` : `fetch` obiect opțiuni

Valoare returnată: obiect JSON analizat

## fBin(url, opt)

Trimiteți o solicitare de rețea și returnați corpul răspunsului ca o matrice de octeți binari

parametru:
- `url` : adresa de solicitare
- `opt` : `fetch` obiect opțiuni

Valoare returnată: matrice de octeți