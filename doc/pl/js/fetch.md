# fetch.js

Funkcja narzędzia żądania sieciowego oparta na enkapsulacji pobierania

## F(url, opt)

Wyślij żądanie sieciowe i zwróć obiekt odpowiedzi

parametr:
- `url` : Żądaj adresu
- `opt` : `fetch` obiekt opcji

Wartość zwracana: Obiekt odpowiedzi

## f(attr)

Funkcja wyższego rzędu, która otacza żądanie i analizuje zwróconą treść w określonym formacie

parametr:
- `attr` : nazwa atrybutu analizy treści odpowiedzi

Wartość zwracana: funkcja asynchronicznego żądania i analizowania treści
  - parametr
    - `url` : Żądaj adresu
    - `opt` : `fetch` obiekt opcji
  - Wartość zwracana: przeanalizowana treść

## fTxt

Wyślij żądanie sieciowe i zwróć treść odpowiedzi w formacie tekstowym

parametr:
- `url` : Żądaj adresu
- `opt` : `fetch` obiekt opcji

Wartość zwracana: tekst odpowiedzi

## fJson(url, opt)

Wyślij żądanie sieciowe, przeanalizuj i zwróć treść odpowiedzi w formacie JSON

parametr:
- `url` : Żądaj adresu
- `opt` : `fetch` obiekt opcji

Wartość zwracana: przeanalizowany obiekt JSON

## fBin(url, opt)

Wyślij żądanie sieciowe i zwróć treść odpowiedzi jako tablicę bajtów binarnych

parametr:
- `url` : Żądaj adresu
- `opt` : `fetch` obiekt opcji

Wartość zwracana: tablica bajtów