---
name: jsdoc
description: Dokument src/js wygenerowany automatycznie
---

## Uruchom kroki

1. Uruchom `./sh/jsDoc.js`, aby wyświetlić funkcje z brakującą dokumentacją (jeśli nie ma danych wyjściowych, nie ma potrzeby ich dodawania).
2. Zgodnie z listą plików wyjściowych czytaj po kolei istniejące dokumenty i kody i uzupełniaj je (przetwarzaj je po kolei i rozbijaj po kolei).

## Wymagania dotyczące dokumentacji

Jeśli eksport jest funkcją, napisz
- Parametry i wartości zwracane:
  - Pisz odpowiednie opisy tylko wtedy, gdy istnieją parametry lub wartości zwracane, w przeciwnym razie nie pisz ich.
  - Parametry wprowadza się za pomocą list nieuporządkowanych.
  - Jeśli zwracaną wartością jest tablica, użyj nieuporządkowanej listy, aby opisać ją jeden po drugim (w przeciwnym razie napisz bezpośrednio, `Zwracana wartość: opis`, tylko jedna linia).
  - Jeśli parametrami lub wartością zwracaną są funkcje, do opisu parametrów i wartości zwracanych należy zastosować listy podnieuporządkowane (jeśli nie ma, nie zapisuj ich).

Jeżeli eksport jest stały, wprowadź co to jest, tylko jedną linię

- Używaj zwięzłego, profesjonalnego języka i unikaj przymiotników.
- Dokonaj przeglądu istniejącego dokumentu, nie przepisuj go całkowicie

## szablon formatu

Każde imię napisz tylko raz, aby uniknąć powielania, i staraj się je wyraźnie wyrazić w jednym wierszu. Format odniesienia jest następujący

```
# nazwa pliku

## Nazwa funkcji (parametr)

Opis użycia

parametr:
- `xx` : Cel
  - parametr
    - `a` : Cel
  - Wartość zwracana: opis

Wartość zwracana: Opis
```