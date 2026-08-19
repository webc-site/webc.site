# md/streamRender.js

Renderització de streaming Markdown

## default(container, source)

Renderització en continu del text Markdown al contenidor DOM especificat, compatible amb efectes de cursor de màquina d'escriure i desplaçament automàtic

paràmetre:
- `container` : element contenidor DOM que allotja contingut representat
- `source` : font de dades de text ReadableStream

Valor de retorn:

- `cancel` : funció per aturar la representació i la lectura del flux de dades
- `setStop` : funció per definir si s'atura el desplaçament automàtic
  - paràmetre
    - `val` : valor booleà si s'ha de posar en pausa o no