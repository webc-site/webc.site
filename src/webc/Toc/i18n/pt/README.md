# Componente de navegação de diretório

- Layout flexível vertical
- Dicionário de suporte para passar dados de diretório
- Clique para carregar automaticamente o texto Markdown
- Carregando exibição de status Animação Ing

## Use a demonstração

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Usar componentes"
};
</script>
```

## interface

### Propriedades e métodos

- `toc.li`: Define um objeto de diretório ou lista de entradas, como `{ key: title }`
- `toc.mdUrl`: definir função de geração de URL de solicitação `(key, lang) => url` ou string de prefixo
- `toc.target`: Defina ou associe o nó de conteúdo de destino (como `c-md`), processe automaticamente `ing` espera e preenchimento de conteúdo
- `toc.load(key)`: Aciona manualmente o carregamento da chave correspondente