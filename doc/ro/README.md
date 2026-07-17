# WebC.site

## Ce-i asta?

### Aceasta este o bibliotecă de componente web nativă

Dezvoltat pe baza [componentelor web](https://developer.mozilla.org/docs/Web/API/Web_components), este independent de rulare și potrivit pentru toate cadrele.

Extrem de optimizat pentru dimensiune (o zecime din dimensiunea bibliotecilor similare populare).

Suporta 75 de limbi. Puteți importa direct js și css pentru utilizare online sau puteți adăuga componente la proiectul dvs. după cum este necesar pentru dezvoltarea secundară.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Acesta este cadrul de dezvoltare a bibliotecii de componente

Aceasta este versiunea statică de blog a [cartei de povești](https://storybook.js.org).

Construirea unei biblioteci de componente poate îmbunătăți eficiența dezvoltării interne a companiei și poate construi o imagine de marcă în cercul tehnic.

Pe baza [webc.site](https://github.com/webc-site/webc.site), echipele își pot crea cu ușurință propriile biblioteci de componente și le pot publica în [pagina github](https://pages.github.com), [pagina cloudflare](https://pages.cloudflare.com), etc. Componentele publicate pot fi depanate online pe [codepen.io](https://codepen.io) și [jsfiddle](https://jsfiddle.net).

În același timp, cadrul de traducere încorporat poate realiza rapid internaționalizarea componentelor și documentelor, astfel încât publicul dumneavoastră de produse să nu mai fie legat de limbă.

### Aceasta este o nouă paradigmă de dezvoltare front-end pentru era inteligenței artificiale

Cadrul este încorporat `.agents/skills`, permițând inteligenței artificiale să vă ajute să dezvoltați noi componente cu un singur clic, conform celor mai bune practici.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Lăsați codul front-end să se schimbe dintr-un munte de gunoi nesustenabil de programare a atmosferei într-o parte standard care poate fi menținută și evoluată iterativ pe termen lung.

Având în vedere caracteristicile dezvoltării asistate de inteligența artificială, am propus și proiectat o nouă paradigmă de dezvoltare front-end:

1. **Totul este o componentă web**
2. **Componenta trebuie să fie independentă de legătura de date back-end, iar interfața de date este expusă ca o funcție de apel invers**

În acest fel, inteligența artificială poate genera date false și poate afișa diferite stări ale componentelor pe pagina demo.

Separarea dezvoltării componentelor și a interfeței de date, combinată cu [cadru pentru componente webc.site](https://github.com/webc-site/webc.site) O altă caracteristică majoră:

**Fiecare componentă poate porni independent serverul de dezvoltare și poate dezvolta și depana pe pagina demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Acest lucru reduce legătura front-end pentru dezvoltarea și depanarea fiecărei componente la `0`.

În acest fel, instrumentele de dezvoltare asistate de inteligență artificială ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), vă puteți bucura de dezvoltare complet automată, de blocare a datelor și de diverși factori de depanare a browserului, nemaifiind blocarea datelor în spate starea de conectare, rutarea căii etc.).

Dacă doriți să controlați inteligența artificială și să reduceți costurile și să creșteți eficiența, aveți nevoie de o nouă paradigmă care să minimizeze mediul de dezvoltare și depanare al fiecărei componente.

---

# Încă nu am început să scriu TODO

### Biblioteca de componente web

#### Optimizare maximă a dimensiunilor

De exemplu, pentru componenta bară de defilare virtuală, comparați dimensiunea scriptului și stilul popular [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) după `gz`, așa cum se arată în următorul tabel:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Componenta barei de defilare virtuală a lui `webc.site` este numai `OverlayScrollbars` a lui `10%`.

#### Independent de rulare

Construită pe standarde [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), biblioteca de componente webc.site este în mod natural independentă de runtime. Indiferent dacă utilizați React, Vue, Angular, Svelte sau un proiect tradițional pur HTML/JS, toate componentele pot rula direct în browser ca etichete HTML native, fără a fi nevoie de un pachet secundar pentru un cadru specific.

##### Comparatie cu shadcn

[shadcn/ui](https://ui.shadcn.com) adoptă modul de distribuție a codului, care necesită să copiați codul componentei direct în propriul proiect. Este strâns legat de ecosistemul React și de lanțurile specifice de instrumente de construcție (cum ar fi Tailwind CSS) și nu poate fi utilizat în cadrul cadrelor. Are, de asemenea, anumite cerințe pentru configurarea ingineriei de proiect.

Și componenta `webc.site`:
- **Cross-framework universal**: Scrieți o singură dată și poate fi introdus direct și rulat în orice cadru front-end (chiar și într-un mediu fără cadru).
- **Dependență zero de mediu**: Nu sunt necesare instrumente specifice de ambalare sau preprocesoare CSS, trebuie doar să importați fișierele statice compilate și pot fi folosite imediat.

## Dezvoltare automată și depanare

### Dezvoltare locală și depanare

Fiecare componentă a paginii web acceptă pornirea serverului de dezvoltare în mod independent, oferind un mediu minim de dezvoltare și depanare:

- **Creați o componentă nouă**: rulați `./sh/new.js [css|js] [numele componente]` pentru a genera rapid un schelet de dezvoltare a componentelor (inclusiv pagina demo și configurația de internaționalizare).
- **Depanare independentă**: rulați `./dev.js [numele componentei]` (sau rulați `./dev.js` direct) pentru a porni serverul de dezvoltare Vite și deschideți automat pagina demo a componentei în browser. Suportă actualizarea la cald a componentelor (HMR). Deoarece dezvoltarea și legăturile de date sunt decuplate, există o legătură front-end de dezvoltare zero, care este foarte potrivită pentru AI (cum ar fi Claude Code, Google Antigravity etc.) pentru a ajuta la dezvoltarea complet automată și la depanarea browserului.

### Publicați biblioteca de componente

#### webc dist

Procesul de ambalare și publicare este extrem de automatizat:
- **Ambalarea resurselor statice**: rularea `./sh/dist.js` (adică executarea sarcinii `webc dist`) poate scana automat toate componentele paginii web din `src/`, le poate compila, comprima și scoate în directorul `dist/`. Acest director conține fișiere JS/CSS pentru distribuție de producție, un site demonstrativ gata pentru implementare în Pagini GitHub sau Pagini Cloudflare și fișiere de rutare `_redirects` și `404.html` generate automat.
- **NPM Publish**: Rulați `./sh/npmDist.js`, scriptul va gestiona automat dependențele componentelor, va incrementa numărul versiunii pachetului și va executa `npm publish` cu un singur clic după finalizarea ambalării pentru a publica biblioteca de componente în NPM.

### Platforma este responsabilă de traducere

Cadrul are procese de traducere automată încorporate:
1. Configurați regulile de traducere (cum ar fi limba sursă, limba țintă și directorul de tradus) în `tran.yml` din directorul rădăcină al proiectului.
2. Utilizați substituenți în componente sau documente fără a fi nevoie să codificați mai multe limbi în codul dvs.
3. Rulați `./sh/tran.js`, iar motorul de traducere va extrage automat textul și va apela serviciul de traducere WebC pentru procesare, generând automat intrări de traducere YAML și documentație README în diferite limbi.

### variabile de mediu

Când efectuați traducerea automată, trebuie să configurați următoarele variabile de mediu pentru a autoriza accesul la API-ul de traducere:

- **`WEBC_SITE_TOKEN`** (sau **`WEBC_TOKEN`**): cheie de autentificare utilizată pentru a accesa `webc.site` Automated Translation API. Poate fi injectat ca variabilă de mediu sau poate fi scris `token` în fișierul de configurare `~/.config/webc.site.yml` din directorul principal al utilizatorului local.