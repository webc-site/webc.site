# fetchLang.js

Asynchronicznie ładuj pakiety językowe i wiąż wywołania zwrotne aktualizacji

## fetchLang(getDict)

Utwórz odbiornik pakietu językowego, aby asynchronicznie uzyskać pakiet językowy i wykonać wywołanie zwrotne odświeżania w przypadku zmiany języka

parametr:
- `getDict` : Pobiera funkcję asynchroniczną pakietu językowego
  - parametr
    - `code` : kod języka
  - Wartość zwracana: słownik pakietu językowego

Wartość zwracana: funkcja rejestrująca wywołanie zwrotne odświeżania
- parametr
  - `refresh` : Odśwież funkcję wywołania zwrotnego po aktualizacji języka
    - parametr
      - `i18n` : Obiekt słownika pakietu językowego
      - `code` : Bieżący kod języka
- Wartość zwracana: funkcja wyrejestrowania wywołania zwrotnego odświeżania