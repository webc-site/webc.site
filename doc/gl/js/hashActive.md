# hashActive.js

Resaltado da ligazón de navegación baseado nas áncoras de URL e no desprazamento da vista

## default(link_li, cls)

Resalte automaticamente as ligazóns de navegación correspondentes á área visible actualmente en función da posición de desprazamento da páxina e dos cambios no punto de ancoraxe do URL.

parámetro:
- `link_li` : Lista de elementos DOM da ligazón de navegación
- `cls` : nome de clase CSS activo, `"A"` predeterminado

Valor de retorno: cancela todas as funcións de limpeza de escoita