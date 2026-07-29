# hashActive.js

Resaltado de enlaces de navegación basado en anclajes de URL y desplazamiento en la ventana gráfica

## default(link_li, cls)

Resalte automáticamente los enlaces de navegación correspondientes al área actualmente visible según la posición de desplazamiento de la página y los cambios en el punto de anclaje de la URL.

parámetro:
- `link_li`: Lista de elementos DOM del enlace de navegación
- `cls`: nombre de clase CSS activo, predeterminado `"A"`

Valor de retorno: cancelar todas las funciones de limpieza de escucha