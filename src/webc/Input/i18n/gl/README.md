# Caixa de entrada que cambia automaticamente o estado do marcador de posición

- Mostrar o marcador de posición cando non se introduza
- Os marcadores de posición escalan e flotan suavemente por riba ao escribir contido
- Implementación pura de CSS, sen dependencias de JavaScript

## Use a demostración

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Correo electrónico</label>
</b>
```

## requisitos estruturais

- Contedor: utiliza elementos da clase `.Input` para aloxar caixas de entrada e etiquetas.
- Caixa de entrada: `input` elemento, `placeholder=" "` (un marcador de posición que contén un espazo) debe estar configurado para activar o cambio de estado.
- Etiqueta de consello: elemento `label`, inmediatamente despois de `input`.

## clase de estilo

- `.Input`: estilo básico, que proporciona estrutura de caixa de entrada e animación de transición.
- `.Lg`: estilo de modificación de vidro esmerilado/destacado.