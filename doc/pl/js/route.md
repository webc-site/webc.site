# route.js

Zarządzanie routingiem z poziomu jednej strony

## nowUrl()

Pobierz bieżącą ścieżkę adresu URL z usuniętym ukośnikiem wiodącym

Wartość zwracana: bieżący ciąg ścieżki

## route(hook)

Zarejestruj odsłuchowe wywołanie zwrotne dotyczące zmian trasy. Podczas rejestracji zostanie ona wykonana jednokrotnie z bieżącą ścieżką.

parametr:
- `hook` : Funkcja wywołania zwrotnego monitorowania trasy
  - parametr
    - `url` : bieżąca ścieżka
    - `pre` : ostatnia ścieżka

Wartość zwracana: Niezarejestrowana funkcja czyszczenia

## setPre(url)

Zapisz ostatni zarejestrowany adres URL

parametr:
- `url` : ciąg ścieżki

## preUrl()

Uzyskaj adres URL ostatniego rekordu

Wartość zwracana: ostatni ciąg ścieżki

## refresh(url)

Wymuś wyzwolenie wszystkich wywołań zwrotnych nasłuchiwania tras na określonej ścieżce i zaktualizuj pre

parametr:
- `url` : ścieżka docelowa, domyślna bieżąca ścieżka

## removeSlash(url)

Usuń ukośniki z nagłówków ścieżek

parametr:
- `url` : ciąg ścieżki

Wartość zwracana: ścieżka po usunięciu ukośnika wiodącego

## setUrl(url)

Zaktualizuj stan adresu URL paska adresu przeglądarki

parametr:
- `url` : ścieżka docelowa

Wartość zwracana: 1, jeśli ścieżka faktycznie się zmienia

## goto(url)

Zaktualizuj adres przeglądarki i wywołaj odświeżenie trasy

parametr:
- `url` : ścieżka docelowa