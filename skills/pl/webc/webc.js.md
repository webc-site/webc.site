
  W przypadku komponentu `js` użyj `Light DOM`, aby zaimplementować komponent w `src/component name/_.js`.

  Użyj ścieżek względnych, aby zaimportować inne komponenty, takie jak: `import "../component name/_.js"` (`js` nie importuje `styl`, framework automatycznie go wstrzyknie).

  `this` Zdefiniuj tylko natywną funkcję wywołania zwrotnego komponentu WWW, pozostałe zapisz jako niezależne funkcje, przekaż `this` i wymagane parametry.

  Oprócz zewnętrznych interfejsów, aby ułatwić optymalizację wstrząsania drzewami i kompresję kodu, zabronione jest wiązanie niestandardowych atrybutów prywatnych z `this` (użyj `this.$` do funkcji rozładowywania), a funkcje wyższego rzędu mogą być używane do zwracania domknięć do przechowywania zmiennych pośrednich.

  Nie pisz `constructor`, atrybut uzyskany jest w `connectedCallback`.


  Aby ponownie wykorzystać funkcje publiczne w `src/js/`, zobacz [./js.md](./js.md).

  W przypadku kontenerów użyj `slot` zamiast atrybutów.
  Jeśli chcesz załadować dane, udostępnij interfejs ładowania wyższej warstwie w postaci asynchronicznej funkcji wywołania zwrotnego i użyj komentarzy, aby wskazać format zwracanej wartości.
  Komponenty muszą unikać wycieków pamięci. `disconnectedCallback` scal zdarzenia dezinstalacji w jedną funkcję `this.$` i nie pisz wielu funkcji dezinstalacji.
  Wartość zwracana przez interfejs może być pojedynczą wartością, tablicą lub tablicą tablic, a nie obiektem.
  Jeśli komponent ma wiele stanów, użyj wielowierszowych komentarzy, aby jasno opisać format danych każdego stanu. (Nie poprzedzaj każdego wiersza komentarza znakiem `*`)
  Przełączanie stanu przy użyciu stałych numerycznych (zdefiniowanych jako `const.js`).
  Podczas ładowania wywołania zwrotnego wyświetl animację z `const xx = newEl('b');xx.className="Ing"` i `@import "../Ing/_.styl"` w `_.styl`