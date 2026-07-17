# Representació en streaming del text Markdown

- Anàlisi i renderització de Markdown de manera incremental
- Coopereu amb l'element principal de desplaçament per desplaçar-vos automàticament quan el contingut sobrepassa la pantalla
- Atureu el desplaçament automàtic quan feu clic o us desplaceu cap amunt, repreneu-ho quan us desplaceu cap avall
- Mostra automàticament els indicadors d'estat d'escriptura

## Utilitzeu la demostració

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Transmissió de dades a través de la funció generadora asíncrona retornada
  el.gen = async function* () {
    rendiment "# títol\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- la " + i + "a entrada\n";
    }
  };
</script>
```

## propietat

| nom de l'atribut | tipus | il·lustrar |
| :--- | :--- | :--- |
| `gen` | `Function` | Funció que retorna un iterador/generador asíncron, esborra el contingut i torna a renderitzar després de configurar |

## estil

| Classe/Etiqueta | il·lustrar |
| :--- | :--- |
| `Md` | La classe s'afegeix automàticament al component quan es munta, estableix l'estil Markdown |
| `i.T` | Indicador d'estat d'escriptura afegit automàticament al final durant l'entrada de dades |