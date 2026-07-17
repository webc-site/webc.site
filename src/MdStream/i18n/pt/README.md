# Streaming de renderização de texto Markdown

- Analisar e renderizar incrementalmente o Markdown
- Coopere com o elemento pai de rolagem para rolar automaticamente quando o conteúdo exceder a tela
- Pause a rolagem automática ao clicar ou rolar para cima, retome ao rolar para baixo
- Exibir automaticamente indicadores de status de digitação

## Use a demonstração

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming de renderização de dados através da função geradora assíncrona retornada
  el.gen = async function* () {
    rendimento "# título\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      rendimento "- item " + i + "\n";
    }
  };
</script>
```

## propriedade

| nome do atributo | tipo | ilustrar |
| :--- | :--- | :--- |
| `gen` | `Function` | Função que retorna um iterador/gerador assíncrono, limpa o conteúdo e renderiza novamente após a configuração |

## estilo

| Classe/Etiqueta | ilustrar |
| :--- | :--- |
| `Md` | Classe adicionada automaticamente ao componente durante a montagem, defina o estilo Markdown |
| `i.T` | Indicador de status de digitação adicionado automaticamente no final durante a entrada de dados |