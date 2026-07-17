# WebC.site

## Què és això?

### Aquesta és una biblioteca de components web nativa

Desenvolupat basat en [components web](https://developer.mozilla.org/docs/Web/API/Web_components), és independent del temps d'execució i adequat per a tots els frameworks.

Extremadament optimitzat per a la mida (una dècima part de la mida de biblioteques populars similars).

Admet 75 idiomes. Podeu importar directament js i css per utilitzar-los en línia o afegir components al vostre projecte segons sigui necessari per al desenvolupament secundari.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Aquest és el marc de desenvolupament de la biblioteca de components

Aquesta és la versió estàtica del bloc de [llibre de contes](https://storybook.js.org).

La creació d'una biblioteca de components pot millorar l'eficiència del desenvolupament intern de l'empresa i crear una imatge de marca en el cercle tècnic.

A partir de [webc.site](https://github.com/webc-site/webc.site), els equips poden crear fàcilment les seves pròpies biblioteques de components i publicar-les a [pàgina github](https://pages.github.com), [pàgina cloudflare](https://pages.cloudflare.com), etc. Els components publicats es poden depurar en línia a [codepen.io](https://codepen.io) i [jsfiddle](https://jsfiddle.net).

Al mateix temps, el marc de traducció integrat pot adonar-se ràpidament de la internacionalització de components i documents, de manera que el vostre públic de productes ja no està lligat per l'idioma.

### Aquest és un nou paradigma de desenvolupament front-end per a l'era de la intel·ligència artificial

El marc està integrat `.agents/skills`, la qual cosa permet que la intel·ligència artificial us ajudi a desenvolupar nous components amb un sol clic segons les millors pràctiques.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Deixeu que el codi frontal canviï d'una muntanya d'escombraries insostenible de programació d'atmosfera a una part estàndard que es pugui mantenir i evolucionar de manera iterativa a llarg termini.

Tenint en compte les característiques del desenvolupament assistit per intel·ligència artificial, vam proposar i dissenyar un nou paradigma de desenvolupament frontal:

1. **Tot és un component web**
2. **El component ha de ser independent de l'enllaç de dades de fons i la interfície de dades s'exposa com una funció de devolució de trucada**

D'aquesta manera, la intel·ligència artificial pot generar dades falses i mostrar diferents estats de components a la pàgina de demostració.

Separació del desenvolupament de components i la interfície de dades, combinada amb [webc.site component framework](https://github.com/webc-site/webc.site) Una altra característica important:

**Cada component pot iniciar el servidor de desenvolupament de manera independent i desenvolupar i depurar a la pàgina de demostració**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Això redueix l'enllaç frontal per al desenvolupament i la depuració de cada component a `0`.

D'aquesta manera, les eines de desenvolupament assistits per intel·ligència artificial ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands), etc.), podeu gaudir d'un desenvolupament totalment automàtic, desbloqueig de dades i de diversos factors del navegador ja no s'obren estat d'inici de sessió, ruta de ruta, etc.).

Si voleu controlar la intel·ligència artificial i reduir costos i augmentar l'eficiència, necessiteu un nou paradigma que minimitzi l'entorn de desenvolupament i depuració de cada component.

---

# Encara no he començat a escriure TODO

### Biblioteca de components web

#### Optimització de mida definitiva

Per exemple, per al component de la barra de desplaçament virtual, compareu la mida del popular script [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) i l'estil després de `gz`, tal com es mostra a la taula següent:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 a    |

El component de la barra de desplaçament virtual de `webc.site` només és el `10%` de `OverlayScrollbars`.

#### Independent del temps d'execució

Construïda sobre els estàndards [Components web](https://developer.mozilla.org/docs/Web/API/Web_components), la biblioteca de components webc.site és naturalment independent del temps d'execució. Tant si utilitzeu React, Vue, Angular, Svelte o un projecte HTML/JS pur tradicional, tots els components es poden executar directament al navegador com etiquetes HTML natives, sense necessitat d'embalatge secundari per a un marc específic.

##### Comparació amb shadcn

[shadcn/ui](https://ui.shadcn.com) adopta el mode de distribució del codi, que requereix que copieu el codi del component directament al vostre propi projecte. Està estretament lligat a l'ecosistema React i a cadenes d'eines de construcció específiques (com ara Tailwind CSS) i no es pot utilitzar en diferents marcs. També té certs requisits per a la configuració d'enginyeria del projecte.

I el component de `webc.site`:
- **Cross-framework universal**: escriu una vegada i es pot introduir directament i executar-se en qualsevol marc frontal (fins i tot un entorn sense marc).
- **Dependència zero de l'entorn**: no calen eines d'embalatge específiques ni preprocessadors CSS, només cal importar els fitxers estàtics compilats i es poden utilitzar de manera immediata.

## Desenvolupament i depuració automatitzats

### Desenvolupament local i depuració

Cada component de la pàgina web admet l'inici del servidor de desenvolupament de manera independent, proporcionant un entorn mínim de desenvolupament i depuració:

- **Creeu un component nou**: executeu `./sh/new.js [css|js] [nom del component]` per generar ràpidament un esquelet de desenvolupament de components (incloent la pàgina de demostració i la configuració d'internacionalització).
- **Depuració independent**: executeu `./dev.js [nom del component]` (o executeu `./dev.js` directament) per iniciar el servidor de desenvolupament de Vite i obrir automàticament la pàgina de demostració del component al navegador. Admet l'actualització en calent de components (HMR). Com que els enllaços de desenvolupament i dades estan desacoblats, hi ha un enllaç frontal de desenvolupament zero, que és molt adequat per a la IA (com ara Claude Code, Google Antigravity, etc.) per ajudar en el desenvolupament totalment automàtic i la depuració del navegador.

### Publicar la biblioteca de components

#### webc dist

El procés d'embalatge i publicació està altament automatitzat:
- **Embalatge de recursos estàtic**: executar `./sh/dist.js` (és a dir, executar la tasca `webc dist`) pot analitzar automàticament tots els components de la pàgina web a `src/`, compilar-los, comprimir-los i enviar-los al directori `dist/`. Aquest directori conté fitxers JS/CSS per a la distribució de producció, un lloc de demostració preparat per al desplegament a GitHub Pages o Cloudflare Pages i fitxers d'encaminament `_redirects` i `404.html` generats automàticament.
- **Publicació de NPM**: executeu `./sh/npmDist.js`, l'script gestionarà automàticament les dependències dels components, augmentarà el número de versió del paquet i executarà `npm publish` amb un sol clic després que s'hagi completat l'empaquetament per publicar la biblioteca de components a NPM.

### La plataforma és responsable de la traducció

El marc té processos de traducció automatitzats integrats:
1. Configureu les regles de traducció (com ara l'idioma d'origen, l'idioma d'arribada i el directori que cal traduir) a `tran.yml` al directori arrel del projecte.
2. Utilitzeu marcadors de posició en components o documents sense haver de codificar diversos idiomes al vostre codi.
3. Executeu `./sh/tran.js` i el motor de traducció extreu automàticament el text i trucarà al servei de traducció WebC per processar-lo, generant automàticament entrades de traducció YAML i documentació README en diversos idiomes.

### variables d'entorn

Quan feu una traducció automàtica, heu de configurar les variables d'entorn següents per autoritzar l'accés a l'API de traducció:

- **`WEBC_SITE_TOKEN`** (o **`WEBC_TOKEN`**): clau d'autenticació que s'utilitza per accedir a l'API de traducció automàtica `webc.site`. Es pot injectar com a variable d'entorn o escriure `token` al fitxer de configuració `~/.config/webc.site.yml` del directori d'inici de l'usuari local.