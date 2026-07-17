# md/streamRender.js

Renderowanie strumieniowe Markdown

## default(container, source)

Strumieniowe renderowanie tekstu Markdown do określonego kontenera DOM, obsługujące efekty kursora maszyny do pisania i automatyczne przewijanie

parametr:
- `container` : element kontenera DOM hostujący renderowaną treść
- `source` : Źródło danych tekstowych ReadableStream

Wartość zwracana:

- `cancel` : Funkcja zatrzymująca renderowanie i odczytywanie strumienia danych
- `setStop` : Funkcja umożliwiająca ustawienie wstrzymania automatycznego przewijania
  - parametr
    - `val` : Wartość logiczna, czy wstrzymać, czy nie