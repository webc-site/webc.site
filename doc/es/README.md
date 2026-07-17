# WebC.site

## ¿Qué es esto?

### Esta es una biblioteca de componentes web nativa.

Desarrollado en base a [componentes web](https://developer.mozilla.org/docs/Web/API/Web_components), es independiente del tiempo de ejecución y adecuado para todos los marcos.

Extremadamente optimizado para el tamaño (una décima parte del tamaño de bibliotecas populares similares).

Admite 75 idiomas. Puede importar js y css directamente para uso en línea o agregar componentes a su proyecto según sea necesario para el desarrollo secundario.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Este es el marco de desarrollo de la biblioteca de componentes.

Esta es la versión estática del blog de [libro de cuentos](https://storybook.js.org).

La creación de una biblioteca de componentes puede mejorar la eficiencia del desarrollo interno de la empresa y crear una imagen de marca en el círculo técnico.

Basado en [webc.site](https://github.com/webc-site/webc.site), los equipos pueden crear fácilmente sus propias bibliotecas de componentes y publicarlas en [página de github](https://pages.github.com), [página de cloudflare](https://pages.cloudflare.com), etc. Los componentes publicados se pueden depurar en línea en [codepen.io](https://codepen.io) y [jsfiddle](https://jsfiddle.net).

Al mismo tiempo, el marco de traducción incorporado puede realizar rápidamente la internacionalización de componentes y documentos, de modo que la audiencia de su producto ya no esté limitada por el idioma.

### Este es un nuevo paradigma de desarrollo front-end para la era de la inteligencia artificial

El marco está integrado `.agents/skills`, lo que permite que la inteligencia artificial le ayude a desarrollar nuevos componentes con un solo clic de acuerdo con las mejores prácticas.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Dejemos que el código frontal pase de ser una montaña de basura insostenible de programación atmosférica a una parte estándar que pueda mantenerse y evolucionar de forma iterativa a largo plazo.

Teniendo en cuenta las características del desarrollo asistido por inteligencia artificial, propusimos y diseñamos un nuevo paradigma de desarrollo front-end:

1. **Todo es un componente web**
2. **El componente debe ser independiente del enlace de datos back-end y la interfaz de datos se expone como una función de devolución de llamada**

De esta forma, la inteligencia artificial puede generar datos falsos y mostrar diferentes estados de los componentes en la página de demostración.

Separación del desarrollo de componentes y la interfaz de datos, combinada con [marco de componentes webc.site](https://github.com/webc-site/webc.site) Otra característica importante:

**Cada componente puede iniciar el servidor de desarrollo de forma independiente y desarrollar y depurar en la página de demostración**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Esto reduce el enlace de front-end para el desarrollo y la depuración de cada componente a `0`.

De esta manera, las herramientas de desarrollo asistidas por inteligencia artificial ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands), etc.), pueden disfrutar de un desarrollo totalmente automático, abrir la depuración del navegador y ya no verse bloqueados por varios factores desordenados (datos de backend, inicio de sesión). estado, ruta de ruta, etc.).

Si desea controlar la inteligencia artificial y reducir costos y aumentar la eficiencia, necesita un nuevo paradigma que minimice el entorno de desarrollo y depuración de cada componente.

---

# Aún no he empezado a escribir TODO

### Biblioteca de componentes web

#### Optimización de tamaño definitiva

Por ejemplo, para el componente de barra de desplazamiento virtual, compare el tamaño del popular script [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) y el estilo después de `gz`, como se muestra en la siguiente tabla:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

El componente de barra de desplazamiento virtual de `webc.site` es sólo el `10%` de `OverlayScrollbars`.

#### Independiente del tiempo de ejecución

Construida sobre estándares [Componentes web](https://developer.mozilla.org/docs/Web/API/Web_components), la biblioteca de componentes webc.site es naturalmente independiente del tiempo de ejecución. Ya sea que esté utilizando React, Vue, Angular, Svelte o un proyecto tradicional HTML/JS puro, todos los componentes pueden ejecutarse directamente en el navegador como etiquetas HTML nativas, sin la necesidad de un paquete secundario para un marco específico.

##### Comparación con shadcn

[shadcn/ui](https://ui.shadcn.com) adopta el modo de distribución de código, que requiere que copie el código del componente directamente en su propio proyecto. Está estrechamente vinculado al ecosistema React y a cadenas de herramientas de construcción específicas (como Tailwind CSS) y no se puede utilizar en todos los marcos. También tiene ciertos requisitos para la configuración de ingeniería del proyecto.

Y el componente de `webc.site`:
- **Universal entre marcos**: se escribe una vez y se puede introducir y ejecutar directamente en cualquier marco de front-end (incluso en un entorno sin marco).
- **Entorno de dependencia cero**: no se requieren herramientas de empaquetado específicas ni preprocesadores de CSS, solo importe los archivos estáticos compilados y podrá usarlos de inmediato.

## Desarrollo y depuración automatizados

### Desarrollo local y depuración.

Cada componente de la página web admite el inicio del servidor de desarrollo de forma independiente, lo que proporciona un entorno mínimo de desarrollo y depuración:

- **Cree un nuevo componente**: ejecute `./sh/new.js [css|js] [nombre del componente]` para generar rápidamente un esqueleto de desarrollo de componentes (incluida la página de demostración y la configuración de internacionalización).
- **Depuración independiente**: ejecute `./dev.js [nombre del componente]` (o ejecute `./dev.js` directamente) para iniciar el servidor de desarrollo Vite y abrir automáticamente la página de demostración del componente en el navegador. Admite actualización en caliente de componentes (HMR). Debido a que los enlaces de desarrollo y datos están desacoplados, no hay ningún enlace de desarrollo frontal, lo cual es muy adecuado para la IA (como Claude Code, Google Antigravity, etc.) para ayudar en el desarrollo totalmente automático y la depuración del navegador.

### Publicar biblioteca de componentes

#### webc dist

El proceso de empaquetado y publicación está altamente automatizado:
- **Empaquetado de recursos estáticos**: ejecutar `./sh/dist.js` (es decir, ejecutar la tarea `webc dist`) puede escanear automáticamente todos los componentes de la página web en `src/`, compilarlos, comprimirlos y enviarlos al directorio `dist/`. Este directorio contiene archivos JS/CSS para distribución de producción, un sitio de demostración listo para implementar en GitHub Pages o Cloudflare Pages, y archivos de enrutamiento `_redirects` y `404.html` generados automáticamente.
- **Publicación de NPM**: ejecute `./sh/npmDist.js`, el script manejará automáticamente las dependencias de los componentes, incrementará el número de versión del paquete y ejecutará `npm publish` con un clic después de completar el empaquetado para publicar la biblioteca de componentes en NPM.

### La plataforma se encarga de la traducción.

El marco tiene procesos de traducción automatizados integrados:
1. Configure las reglas de traducción (como el idioma de origen, el idioma de destino y el directorio a traducir) en `tran.yml` en el directorio raíz del proyecto.
2. Utilice marcadores de posición en componentes o documentos sin tener que codificar varios idiomas en su código.
3. Ejecute `./sh/tran.js` y el motor de traducción extraerá automáticamente el texto y llamará al servicio de traducción WebC para procesarlo, generando automáticamente entradas de traducción YAML y documentación README en varios idiomas.

### variables de entorno

Al realizar una traducción automática, debe configurar las siguientes variables de entorno para autorizar el acceso a la API de traducción:

- **`WEBC_SITE_TOKEN`** (o **`WEBC_TOKEN`**): clave de autenticación utilizada para acceder a la API de traducción automática `webc.site`. Puede inyectarse como una variable de entorno o escribirse `token` en el archivo de configuración `~/.config/webc.site.yml` en el directorio de inicio del usuario local.