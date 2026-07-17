# Barra de navegación superior que se contrae o expande automáticamente cuando se desplaza la página

- **Ocultar automáticamente**: Ocultar automáticamente al desplazarse hacia abajo en la página.
- **Expansión automática**: se muestra automáticamente cuando la página se desplaza hacia arriba o la barra de desplazamiento desaparece.
- **Optimización del rendimiento**: utilice `requestAnimationFrame` para acelerar el desplazamiento.
- **Liberar recursos**: los observadores y detectores de eventos se eliminan automáticamente cuando se destruye el componente.

## Usa la demostración

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Enlace</a>
    </c-nav>
    <div class="content">Desliza hacia abajo para ocultar la navegación, desliza hacia arriba para mostrarla</div>
  </c-vs>
</main>
<style>
  main {
    position: relative;
    height: 300px;
    border: 1px solid #000;
  }
  c-nav {
    background: #fffc;
    backdrop-filter: blur(4px);
    border-bottom: 1px solid #ccc;
  }
  .content {
    height: 200dvh;
    background: linear-gradient(to bottom, #fff, #ccc);
    padding: 80px 20px 20px;
    color: #666;
    text-align: center;
  }
</style>
```

## Instrucciones de uso

Debe usarse como elemento hijo o descendiente de `<c-vs>`.

## estado de estilo

El componente cambia los siguientes nombres de clase dentro de sí mismo:

- `D`: Mostrar estado (deslizar hacia abajo o en la parte superior).
- `I`: El estado de transición está oculto.
- `H`: Estado oculto.

## variables de estilo

- `--top`: Actualizado automáticamente por el componente a un valor negativo de altura, utilizado para posicionamiento y transición.