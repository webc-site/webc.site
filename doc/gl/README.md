# WebC.site

## Que é isto?

### Esta é unha biblioteca de compoñentes web nativos

Desenvolvido en base a [compoñentes web](https://developer.mozilla.org/docs/Web/API/Web_components), é independente do tempo de execución e axeitado para todos os frameworks.

Extremadamente optimizado para o tamaño (un décimo do tamaño de bibliotecas populares similares).

Soporta 75 idiomas. Podes importar directamente js e css para o seu uso en liña ou engadir compoñentes ao teu proxecto segundo sexa necesario para o desenvolvemento secundario.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Este é o marco de desenvolvemento da biblioteca de compoñentes

Esta é a versión estática do blog de [storybook](https://storybook.js.org).

A construción dunha biblioteca de compoñentes pode mellorar a eficiencia do desenvolvemento interno da empresa e crear unha imaxe de marca no círculo técnico.

Con base en [webc.site](https://github.com/webc-site/webc.site), os equipos poden crear facilmente as súas propias bibliotecas de compoñentes e publicalas en [páxina github](https://pages.github.com), [páxina cloudflare](https://pages.cloudflare.com), etc. Os compoñentes publicados pódense depurar en liña en [codepen.io](https://codepen.io) e [jsfiddle](https://jsfiddle.net).

Ao mesmo tempo, o marco de tradución integrado pode realizar rapidamente a internacionalización de compoñentes e documentos, de xeito que o público do seu produto xa non estea vinculado pola lingua.

### Este é un novo paradigma de desenvolvemento front-end para a era da intelixencia artificial

O marco está integrado `.agents/skills`, o que permite que a intelixencia artificial che axude a desenvolver novos compoñentes cun só clic segundo as mellores prácticas.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Deixa que o código front-end cambie dunha montaña de lixo insostible de programación atmosférica a unha parte estándar que se pode manter e evolucionar de forma iterativa a longo prazo.

Tendo en conta as características do desenvolvemento asistido pola intelixencia artificial, propuxemos e deseñamos un novo paradigma de desenvolvemento front-end:

1. **Todo é un compoñente web**
2. **O compoñente debe ser independente da ligazón de datos do back-end e a interface de datos está exposta como unha función de devolución de chamada**

Deste xeito, a intelixencia artificial pode xerar datos falsos e mostrar diferentes estados de compoñentes na páxina de demostración.

Separación do desenvolvemento de compoñentes e da interface de datos, combinada con [webc.site component framework](https://github.com/webc-site/webc.site) Outra característica importante:

**Cada compoñente pode iniciar o servidor de desenvolvemento de forma independente e desenvolver e depurar na páxina de demostración**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Isto reduce a ligazón front-end para o desenvolvemento e a depuración de cada compoñente a `0`.

Deste xeito, as ferramentas de desenvolvemento asistidas por intelixencia artificial ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), pode gozar de desenvolvemento totalmente automático, bloqueo de datos e varios factores que xa non se poden abrir o navegador. estado de inicio de sesión, ruta de ruta, etc.).

Se queres controlar a intelixencia artificial e reducir custos e aumentar a eficiencia, necesitas un novo paradigma que minimice o ambiente de desenvolvemento e depuración de cada compoñente.

---

# Aínda non comecei a escribir TODO

### Biblioteca de compoñentes web

#### Optimización definitiva de tamaño

Por exemplo, para o compoñente da barra de desprazamento virtual, compare o tamaño do popular script [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) e o estilo despois de `gz`, como se mostra na seguinte táboa:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 a    |

O compoñente da barra de desprazamento virtual de `webc.site` só é o `10%` de `OverlayScrollbars`.

#### Independente do tempo de execución

Construída sobre os estándares [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), a biblioteca de compoñentes webc.site é naturalmente independente do tempo de execución. Tanto se estás a usar React, Vue, Angular, Svelte ou un proxecto HTML/JS puro tradicional, todos os compoñentes poden executarse directamente no navegador como etiquetas HTML nativas, sen necesidade de empaquetado secundario para un marco específico.

##### Comparación con shadcn

[shadcn/ui](https://ui.shadcn.com) adopta o modo de distribución de código, que require que copies o código do compoñente directamente no teu propio proxecto. Está estreitamente ligado ao ecosistema React e ás cadeas de ferramentas de construción específicas (como Tailwind CSS) e non se pode usar en marcos. Tamén ten certos requisitos para a configuración de enxeñaría do proxecto.

E o compoñente de `webc.site`:
- **Cross-framework universal**: escribe unha vez e pódese introducir e executar directamente en calquera framework front-end (incluso nun ambiente sen framework).
- **Dependencia cero do ambiente**: non se necesitan ferramentas específicas de empaquetado nin preprocesadores CSS, só importa os ficheiros estáticos compilados e pódese usar fóra da caixa.

## Desenvolvemento e depuración automatizados

### Desenvolvemento local e depuración

Cada compoñente da páxina web admite o inicio do servidor de desenvolvemento de forma independente, proporcionando un ambiente mínimo de desenvolvemento e depuración:

- **Crear un novo compoñente**: executa `./sh/new.js [css|js] [nome do compoñente]` para xerar rapidamente un esqueleto de desenvolvemento de compoñentes (incluíndo a páxina de demostración e a configuración de internacionalización).
- **Depuración independente**: executa `./dev.js [nome do compoñente]` (ou executa `./dev.js` directamente) para iniciar o servidor de desenvolvemento de Vite e abrir automaticamente a páxina de demostración do compoñente no navegador. Admite actualización en quente de compoñentes (HMR). Debido a que as ligazóns de desenvolvemento e de datos están desacopladas, hai unha ligazón frontal de desenvolvemento cero, que é moi adecuada para a IA (como Claude Code, Google Antigravity, etc.) para axudar no desenvolvemento totalmente automático e na depuración do navegador.

### Publicar a biblioteca de compoñentes

#### webc dist

O proceso de envasado e publicación está altamente automatizado:
- **Embalaxe de recursos estáticos**: a execución de `./sh/dist.js` (é dicir, a execución da tarefa `webc dist`) pode analizar automaticamente todos os compoñentes da páxina web en `src/`, compilalos, comprimilos e envialos ao directorio `dist/`. Este directorio contén ficheiros JS/CSS para a distribución de produción, un sitio de demostración listo para a súa implantación en GitHub Pages ou Cloudflare Pages e ficheiros de enrutamento `_redirects` e `404.html` xerados automaticamente.
- **Publicación de NPM**: executa `./sh/npmDist.js`, o script xestionará automaticamente as dependencias dos compoñentes, incrementará o número de versión do paquete e executará `npm publish` cun clic despois de completar o empaquetado para publicar a biblioteca de compoñentes en NPM.

### A plataforma é responsable da tradución

O marco ten procesos de tradución automatizados integrados:
1. Configure as regras de tradución (como a lingua de orixe, a lingua de destino e o directorio que se vai traducir) en `tran.yml` no directorio raíz do proxecto.
2. Use marcadores de posición en compoñentes ou documentos sen ter que codificar varios idiomas no seu código.
3. Execute `./sh/tran.js`, e o motor de tradución extraerá automaticamente o texto e chamará ao servizo de tradución WebC para o seu procesamento, xerando automaticamente entradas de tradución YAML e documentación README en varios idiomas.

### variables de ambiente

Ao realizar traducións automáticas, cómpre configurar as seguintes variables de ambiente para autorizar o acceso á API de tradución:

- **`WEBC_SITE_TOKEN`** (ou **`WEBC_TOKEN`**): chave de autenticación utilizada para acceder á `webc.site` API de tradución automática. Pódese inxectar como unha variable de ambiente ou escribir `token` no ficheiro de configuración `~/.config/webc.site.yml` no directorio de inicio do usuario local.