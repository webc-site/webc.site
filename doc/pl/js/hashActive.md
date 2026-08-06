# hashActive.js

Podświetlanie linków nawigacyjnych w oparciu o zakotwiczenia URL i przewijanie rzutni

## default(link_li, cls)

Automatycznie podświetlaj linki nawigacyjne odpowiadające aktualnie widocznemu obszarowi na podstawie pozycji przewijania strony i zmian punktu zakotwiczenia adresu URL.

parametr:
- `link_li` : Lista elementów DOM łącza nawigacyjnego
- `cls` : Nazwa aktywnej klasy CSS, domyślna `"A"`

Wartość zwracana: Anuluj wszystkie funkcje czyszczenia odsłuchu