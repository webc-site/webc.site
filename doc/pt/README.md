# WebC.site

## O que é isso?

### Esta é uma biblioteca nativa de componentes da web

Desenvolvido com base em [componentes web](https://developer.mozilla.org/docs/Web/API/Web_components), é independente do tempo de execução e adequado para todos os frameworks.

Extremamente otimizado em tamanho (um décimo do tamanho de bibliotecas populares semelhantes).

Suporta 75 idiomas. Você pode importar js e css diretamente para uso online ou adicionar componentes ao seu projeto conforme necessário para desenvolvimento secundário.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Esta é a estrutura de desenvolvimento da biblioteca de componentes

Esta é a versão estática do blog [livro de histórias](https://storybook.js.org).

Construir uma biblioteca de componentes pode melhorar a eficiência do desenvolvimento interno da empresa e construir uma imagem de marca no círculo técnico.

Com base em [webc.site](https://github.com/webc-site/webc.site), as equipes podem criar facilmente suas próprias bibliotecas de componentes e publicá-las em [página github](https://pages.github.com), [página cloudflare](https://pages.cloudflare.com) etc. Os componentes publicados podem ser depurados on-line em [codepen.io](https://codepen.io) e [jsfiddle](https://jsfiddle.net).

Ao mesmo tempo, a estrutura de tradução integrada pode realizar rapidamente a internacionalização de componentes e documentos, para que o público do seu produto não fique mais limitado pelo idioma.

### Este é um novo paradigma de desenvolvimento front-end para a era da inteligência artificial

A estrutura é integrada `.agents/skills`, permitindo que a inteligência artificial ajude você a desenvolver novos componentes com um clique, de acordo com as melhores práticas.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Deixe o código front-end mudar de uma montanha de lixo insustentável de programação atmosférica para uma parte padrão que pode ser mantida e evoluída iterativamente no longo prazo.

Tendo em vista as características do desenvolvimento assistido por inteligência artificial, propusemos e desenhamos um novo paradigma de desenvolvimento front-end:

1. **Tudo é um componente da web**
2. **O componente deve ser independente do link de dados de back-end e a interface de dados é exposta como uma função de retorno de chamada**

Dessa forma, a inteligência artificial pode gerar dados falsos e exibir diferentes estados dos componentes na página de demonstração.

Separação de desenvolvimento de componentes e interface de dados, combinada com [estrutura de componentes webc.site](https://github.com/webc-site/webc.site) Outro recurso importante:

**Cada componente pode iniciar o servidor de desenvolvimento de forma independente e desenvolver e depurar na página de demonstração**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Isso reduz o link front-end para desenvolvimento e depuração de cada componente para `0`.

Dessa forma, ferramentas de desenvolvimento assistidas por inteligência artificial ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), você pode desfrutar de desenvolvimento totalmente automático, depuração de navegador aberto e não ser mais bloqueado por vários fatores confusos (dados de back-end, status de login, caminho roteamento, etc.).

Se você deseja controlar a inteligência artificial e reduzir custos e aumentar a eficiência, precisa de um novo paradigma que minimize o ambiente de desenvolvimento e depuração de cada componente.

---

# Ainda não comecei a escrever TODO

### Biblioteca de componentes da web

#### Otimização de tamanho final

Por exemplo, para o componente da barra de rolagem virtual, compare o tamanho do popular script [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) e o estilo após `gz`, conforme mostrado na tabela a seguir:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880B    |

O componente da barra de rolagem virtual de `webc.site` é apenas o `10%` de `OverlayScrollbars`.

#### Independente do tempo de execução

Construída com base nos padrões [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), a biblioteca de componentes webc.site é naturalmente independente do tempo de execução. Esteja você usando React, Vue, Angular, Svelte ou um projeto tradicional HTML/JS puro, todos os componentes podem ser executados diretamente no navegador como tags HTML nativas, sem a necessidade de empacotamento secundário para uma estrutura específica.

##### Comparação com shadcn

[shadcn/ui](https://ui.shadcn.com) adota o modo de distribuição de código, que exige que você copie o código do componente diretamente em seu próprio projeto. Ele está fortemente vinculado ao ecossistema React e a cadeias de ferramentas de construção específicas (como Tailwind CSS) e não pode ser usado em estruturas. Ele também possui certos requisitos para configuração de engenharia do projeto.

E o componente de `webc.site`:
- **Cross-framework universal**: Escreva uma vez e pode ser introduzido e executado diretamente em qualquer estrutura front-end (até mesmo em um ambiente sem estrutura).
- **Dependência zero do ambiente**: Não são necessárias ferramentas de empacotamento específicas ou pré-processadores CSS, basta importar os arquivos estáticos compilados e eles podem ser usados ​​imediatamente.

## Desenvolvimento e depuração automatizados

### Desenvolvimento local e depuração

Cada componente da página web suporta iniciar o servidor de desenvolvimento de forma independente, fornecendo um ambiente mínimo de desenvolvimento e depuração:

- **Crie um novo componente**: Execute `./sh/new.js [css|js] [nome do componente]` para gerar rapidamente um esqueleto de desenvolvimento de componente (incluindo página de demonstração e configuração de internacionalização).
- **Depuração independente**: Execute `./dev.js [nome do componente]` (ou execute `./dev.js` diretamente) para iniciar o servidor de desenvolvimento Vite e abrir automaticamente a página de demonstração do componente no navegador. Suporta atualização a quente de componentes (HMR). Como o desenvolvimento e os links de dados são dissociados, não há link de front-end de desenvolvimento, o que é muito adequado para IA (como Claude Code, Google Antigravity, etc.) para auxiliar no desenvolvimento totalmente automático e na depuração do navegador.

### Publicar biblioteca de componentes

#### webc dist

O processo de empacotamento e publicação é altamente automatizado:
- **Embalagem de recursos estáticos**: executar `./sh/dist.js` (ou seja, executar a tarefa `webc dist`) pode verificar automaticamente todos os componentes da página da web em `src/`, compilá-los, compactá-los e enviá-los para o diretório `dist/`. Este diretório contém arquivos JS/CSS para distribuição de produção, um site de demonstração pronto para implantação em GitHub Pages ou Cloudflare Pages e arquivos de roteamento `_redirects` e `404.html` gerados automaticamente.
- **Publicação NPM**: execute `./sh/npmDist.js`, o script tratará automaticamente as dependências do componente, incrementará o número da versão do pacote e executará `npm publish` com um clique após a conclusão do empacotamento para publicar a biblioteca de componentes no NPM.

### A plataforma é responsável pela tradução

A estrutura possui processos de tradução automatizados integrados:
1. Configure regras de tradução (como idioma de origem, idioma de destino e diretório a ser traduzido) em `tran.yml` no diretório raiz do projeto.
2. Use espaços reservados em componentes ou documentos sem precisar codificar vários idiomas em seu código.
3. Execute `./sh/tran.js` e o mecanismo de tradução extrairá automaticamente o texto e chamará o serviço de tradução WebC para processamento, gerando automaticamente entradas de tradução YAML e documentação README em vários idiomas.

### variáveis ​​de ambiente

Ao realizar a tradução automática, você precisa configurar as seguintes variáveis ​​de ambiente para autorizar o acesso à API de tradução:

- **`WEBC_SITE_TOKEN`** (ou **`WEBC_TOKEN`**): chave de autenticação usada para acessar a `webc.site` API de tradução automática. Pode ser injetado como uma variável de ambiente ou escrito `token` no arquivo de configuração `~/.config/webc.site.yml` no diretório inicial do usuário local.