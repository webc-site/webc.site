# Demonstracja

Zapoznaj się z `src/webc/BoxX/demo` i opracuj wersję demonstracyjną komponentu w `src/webc/component name/demo/`

`demo/_.pug`, podszablon demonstracyjny

Uwzględnione są tylko minimalistyczne znaczniki komponentów, nie jest wymagana cała strona, a import stylów i skryptów jest zabroniony. Struktura zostanie automatycznie wstrzyknięta (np. `demo/_.styl`, `demo/_.js`).

Nie pisz tytułu (np. nie pisz demo xxx), nie pisz nazwy komponentu, nie wprowadzaj komponentu, napisz tylko status przypadku użycia wersji demonstracyjnej (jeśli nie ma statusu, nie pisz tytułu)

Element główny `_.pug` używa `main.demo.Lg` , który zdefiniował styl w `demo/_.styl` i nie definiuje stylu samego `main.demo.Lg`.

Kontener komponentu displayowego powinien być wyrównany z `main.demo.Lg`, a pomiędzy nimi nie powinno być `margin` i `padding`, gdyż `main.demo` sam w sobie już ustawił `padding`, a ustawienie go na puste zostanie powtórzone.

`demo/_.styl` Jeśli istnieje tylko jeden komponent wyświetlacza, jego kontener nie będzie miał ramki zewnętrznej, a jedynie ustawiony będzie `max-width` (ponieważ kontener prezentacji automatycznie doda ramkę zewnętrzną). W przypadku większej liczby kontenerów istnieje możliwość oddzielenia kontenera ramą zewnętrzną.

Nie pisz `img` w `demo/_.pug`, użyj `demo/_.styl`, aby ustawić obraz tła

Jeśli komponent ma wiele formularzy, wyświetl je w kolejności (np. ładowanie, puste dane, dane, błędy itp.), elastyczny układ pionowy

`demo/_.styl`: `stylus` styl strony demonstracyjnej, postępuj zgodnie ze specyfikacją kodu i estetyką projektu [./styl.md](./styl.md)

Jeśli nie napiszesz `@import '../_.styl'`, aby zaimportować komponent, który chcesz zademonstrować, zostanie on automatycznie wstrzyknięty; zabronione jest używanie `@import` w `demo/_.styl` do importowania innych stylów komponentów. Jeśli demo zależy od innych komponentów (takich jak przycisk `.Btn`), zaimportuj zależne komponenty poprzez `import "../../Btn.js"` w `demo/_.js`.

`demo/_.js`: Wywołaj skrypt, format `export default (root) => { ... }`, parametr `root` to host (`document` lub element główny kontenera piaskownicy)

`D.createElement` jest zabronione, użyj `newEl` wspomnianego przez [./js.md](./js.md)

Użycie `js` jest zabronione w `c-t` oraz w celu umiędzynarodowienia `fLang`

Jeśli `../component name.js` (`../component name.js` ma wyświetlić sam komponent, a inne zależne komponenty wymagane przez demo nadal muszą zostać zaimportowane), wymagane jest tylko `import` i nie jest importowana żadna konkretna treść, którą można pominąć (framework automatycznie ją wstrzyknie)

`pug` Nie ma potrzeby importowania `js` i `styl` , framework automatycznie je wstrzyknie