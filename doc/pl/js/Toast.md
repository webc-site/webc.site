# Toast.js

Wyskakujący komunikat z prośbą o wyświetlenie toastu

## toast(render, timeout)

Pokaż standardowe wyskakujące okienko z monitem

parametr:
- `render` : Funkcja renderowania używana do dostosowywania zawartości wyskakujących okienek
  - parametr
    - `el` : Element DOM wyskakującego okna
- `timeout` : Opóźnienie w sekundach automatycznego wyłączania, domyślnie 9, brak automatycznego wyłączania, gdy 0

Wartość zwracana: element DOM wyskakującego okna

## toastErr(render, timeout)

Pokaż wyskakujące okienko z komunikatem o błędzie

parametr:
- `render` : Funkcja renderowania używana do dostosowywania zawartości wyskakujących okienek
  - parametr
    - `el` : Element DOM wyskakującego okna
- `timeout` : Opóźnienie w sekundach automatycznego wyłączania, domyślnie 9, brak automatycznego wyłączania, gdy 0

Wartość zwracana: element DOM wyskakującego okna błędu