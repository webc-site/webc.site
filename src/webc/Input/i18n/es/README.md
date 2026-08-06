# Cuadro de entrada que cambia automáticamente el estado del marcador de posición

- Mostrar marcador de posición cuando no se ingresa
- Los marcadores de posición escalan suavemente y flotan arriba al escribir contenido
- Implementación de CSS puro, sin dependencias de JavaScript
- Predeterminado con fondo de vidrio esmerilado y transición de desplazamiento

## Usa la demostración

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Correo electrónico</label>
</b>
```

## requisitos estructurales

- Contenedor: utilice elementos de la clase `.Input` para alojar cuadros de entrada y etiquetas.
- Cuadro de entrada: se debe configurar `input` elemento, `placeholder=" "` (un marcador de posición que contiene un espacio) para activar el cambio de estado.
- Etiqueta de sugerencia: elemento `label`, inmediatamente después de `input`.

## clase de estilo

- `.Input`: Estilo básico, que proporciona estructura de cuadro de entrada y animación de transición.
- `.Lg`: Estilo de modificación de vidrio resaltado/esmerilado.