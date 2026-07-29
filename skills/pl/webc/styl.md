Użyj standardowego `css`, nie pisz `css` zaczynającego się od `-webkit-` (framework automatycznie go wstrzyknie)

Twórz style komponentów za pomocą nowoczesnych `css` funkcji, takich jak `css nesting` , `flex` itp.

Dla tej samej wartości można zapisać, zdefiniować i ponownie wykorzystać wiele selektorów CSS w jednym miejscu, a funkcja `stylus` jest wyłączona.

Jednostką pikseli jest `px`, a wartość musi być liczbą całkowitą.

Postępuj zgodnie z estetyką najnowszego szkła Liquid Glass firmy Apple

`svg` Umieść obraz w folderze `svg` i użyj go w `styl` ze ścieżką względną

Nie używaj cieni zewnętrznych, częściej używaj cieni wewnętrznych, a cienie wewnętrzne nie powinny być przemieszczane.

Nie ustawiaj `font-family`

`stylus` Używa tylko najbardziej podstawowych zmiennych i formatu składni wcięć, bez zaawansowanych funkcji

Zabrania się używania `@import` do importowania innych stylów komponentów (w tym komponentów `_.styl` i `demo/_.styl`); style zależne od komponentu są importowane poprzez plik JS komponentu