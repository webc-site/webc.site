# md/streamRender.js

Markdown streaming renderelés

## default(container, source)

Markdown szöveg streamelése a megadott DOM tárolóba, írógép kurzor effektusok és automatikus görgetés támogatása

paraméter:
- `container` : DOM-tárolóelem, amely megjelenített tartalmat tartalmaz
- `source` : ReadableStream szöveges adatforrás

Visszatérési érték:

- `cancel` : A renderelés és az adatfolyam olvasás leállítására szolgáló funkció
- `setStop` : Az automatikus görgetés szüneteltetésének beállítására szolgáló funkció
  - paraméter
    - `val` : Logikai érték, hogy szüneteltesse-e vagy sem