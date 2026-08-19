# Specyfikacja kodu JS

## styl kodowania

- Prosty, elegancki i wydajny, wykorzystujący najnowocześniejszą składnię js
- Podziel zbyt długie funkcje, a projekt interfejsu powinien zapewniać niskie sprzężenie i wysoką spójność.
- Używaj więcej tablic + pętli/forEach/map i pisz mniej powtarzalny kod
- Nie pisz komentarzy do funkcji w prostym kodzie, aby uniknąć nadmiernych komentarzy. Złożona logika i specjalne potrzeby są wyjaśnione w wyrafinowanym języku chińskim.
- Powtarzający się kod jest dzielony na funkcje, aby zmniejszyć redundancję. Na przykład `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` można zapisać jako `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklaracja zmiennej: Połącz wiele kolejnych deklaracji `const` w jedną instrukcję. Zamiast pisać w trzech linijkach, napisz `const a=1, b=2, c=3;`
- Przetwarzanie asynchroniczne: użyj `await`, zabroń używania wywołań łańcuchowych `.then`
- Nie generuj automatycznie kodu obsługi wyjątków, nie zapisuj automatycznie `try...catch` (`try ... catch` jest obsługiwane ręcznie, istniejące `try catch` nie powinno być usuwane)
- Najpierw czyste funkcje: pisz tylko czyste funkcje, nigdy klasy
- Używaj funkcji strzałkowych `const funcName = () => {}` i nie używaj słowa kluczowego `function` (z wyjątkiem generatorów); jeśli możesz użyć .bind do powiązania parametrów, unikaj definiowania funkcji
- Ponowne wykorzystanie kodu: zwracaj uwagę na ponowne użycie, wyodrębniaj więcej małych funkcji i zdecydowanie unikaj dużej liczby podobnych lub wklejanych struktur kodu.
- Dostęp do obiektów: nadaj priorytet przy użyciu przypisania destrukturyzacji w celu wyodrębnienia wymaganych atrybutów, unikaj wielokrotnego używania kropek wewnętrznie w celu uzyskania dostępu do głębokich i zagnieżdżonych atrybutów oraz łącz powtarzające się opcjonalne oceny łańcuchowe
- Nie używaj obiektów dla parametrów funkcji, nie pisz `{a,b,c}`, pisz `a, b, c`; jeśli istnieje wiele opcjonalnych parametrów, użyj [[liczba elementów konfiguracji, elementów konfiguracji], [liczba elementów konfiguracji, elementów konfiguracji],..] W tym paradygmacie elementy konfiguracji są definiowane za pomocą stałych numerycznych
- W przypadku zwrotów wielowartościowych użyj tablicy `[a,b,c]` zamiast `{a,b,c}`. Jeśli istnieje więcej niż 3 zwracane wartości, użyj stałych numerycznych, aby zdefiniować znaczenie pozycyjne.
- Nie ma potrzeby, aby ciąg znaków reprezentował stan. Aby zdefiniować stan, użyj stałych numerycznych
- Nie jest używany żaden szablon ciągu znaków (``), stosowane jest łączenie ciągów (+), z wyjątkiem importu (wygodne dla analizy statycznej Vite)
- W przypadku pętli, jeśli potrzebujesz numeru seryjnego, użyj `++i` zamiast `i++`
- Unikaj niepotrzebnego`?.` i zabraniaj programowania defensywnego
- Nazwa zmiennej nie musi być liczbą mnogą i kończy się na `_li` wskazującym listę.

## Konwencja nazewnictwa

- Nazewnictwo podąża za minimalizmem. Używaj krótkich, ale znaczących nazw, na przykład: użyj `rm` zamiast `remove`, `delete`, `del`. Należy jednak również unikać popadania w skrajności, np.: nie używać pojedynczej litery `m` zamiast `map`
- Staraj się używać wyłącznie czasowników w nazewnictwie funkcji. Jeśli możesz użyć jednego słowa, aby to wyrazić, nie używaj dwóch słów. Rzeczowniki znajdują odzwierciedlenie w nazwach plików. Jeśli chcesz dodać czasownik do nazwy pliku, umieść rzeczownik na początku, a czasownik na końcu. Na przykład: `profileSet.js` zamiast `setProfile.js`
- Nazwy zmiennych: użyj stylu podkreślenia (snake_case), na przykład `user_auth_token`
- Nazwa funkcji: Użyj małych liter camelCase (camelCase), na przykład `userData`
- Parametry funkcji: jeśli jest to funkcja wywołania zwrotnego, nazwij ją małymi literami wielbłądzimi, na przykład `onChange`
- W definicjach stałych na poziomie modułu zastosowano styl podkreślenia wielkimi literami `UPPER_SNAKE_CASE`
- Nie pisz `get`, takich bezsensownych przedrostków jak: napisz `cookieByHeader` zamiast `getCookie`
- Stałe globalne/na poziomie modułu: użyj stylu podkreślenia wielkimi literami (UPPER_SNAKE_CASE), np. `CODE_TO_ID`, `ID_TO_LANG`

## Mechanizm modułowy

- Import: Importuj funkcje dokładnie na żądanie, zabraniaj bezpośredniego importu całego modułu (unikaj `import * as x` lub importuj duże obiekty)
- Eksportuj: Wyłącz eksport obiektów. Eksportuj funkcje i zmienne jako jednostki, np. `export const X=1, abc=()=>{};`. Spróbuj połączyć je ze stałą + przecinkiem, aby zadeklarować wyeksportowaną treść. Jeśli plik ma tylko jedną funkcję, użyj `export default`
- Jeśli nie musisz wewnętrznie wywoływać domyślnej funkcji eksportu, unikaj najpierw deklarowania stałych, a następnie eksportowania ich na końcu pliku.
- Rozpoznawanie ścieżki: Podczas uzyskiwania bieżącej ścieżki katalogu należy użyć `import.meta.dirname`

## błąd

- Unikaj błędów w ciągach znaków i używaj const do deklarowania stałych kodów błędów.
- Jeśli chcesz zwrócić błędne informacje o danych, użyj [kod błędu, komunikat o błędzie,...] W ten sposób komunikat o błędzie nie będzie opisem tekstowym, ale wartością liczbową (taką jak [PLIK_OVERSIZE, rozmiar_pliku, maksymalny_rozmiar])
-

## Spróbuj użyć interfejsów API zgodnych z przeglądarką

- Szyfrowanie i deszyfrowanie: Wymuś użycie natywnego interfejsu Web Crypto API
- Dane binarne: gdy masz do czynienia z danymi binarnymi, staraj się używać `Uint8Array` jednakowo