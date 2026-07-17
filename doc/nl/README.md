# WebC.site

## Wat is dit?

### Dit is een native webcomponentenbibliotheek

Het is ontwikkeld op basis van [webcomponenten](https://developer.mozilla.org/docs/Web/API/Web_components), is runtime-onafhankelijk en geschikt voor alle frameworks.

Extreem geoptimaliseerd qua grootte (een tiende van de grootte van vergelijkbare populaire bibliotheken).

Ondersteunt 75 talen. U kunt js en css rechtstreeks importeren voor online gebruik, of indien nodig componenten aan uw project toevoegen voor secundaire ontwikkeling.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dit is het ontwikkelingsframework voor componentenbibliotheken

Dit is de statische blogversie van [verhalenboek](https://storybook.js.org).

Het bouwen van een componentenbibliotheek kan de interne ontwikkelingsefficiëntie van het bedrijf verbeteren en een merkimago opbouwen in de technische kring.

Op basis van [webc.site](https://github.com/webc-site/webc.site) kunnen teams eenvoudig hun eigen componentbibliotheken maken en deze publiceren op [github-pagina](https://pages.github.com), [cloudflare-pagina](https://pages.cloudflare.com), enz. De gepubliceerde componenten kunnen online worden gedebugd op [codepen.io](https://codepen.io) en [jsfiddle](https://jsfiddle.net).

Tegelijkertijd kan het ingebouwde vertaalframework de internationalisering van componenten en documenten snel realiseren, zodat uw productpubliek niet langer gebonden is aan taal.

### Dit is een nieuw paradigma van front-end-ontwikkeling voor het tijdperk van kunstmatige intelligentie

Het raamwerk is ingebouwd `.agents/skills`, waardoor kunstmatige intelligentie u kan helpen met één klik nieuwe componenten te ontwikkelen volgens best practices.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Laat de front-endcode veranderen van een onhoudbare afvalberg van atmosfeerprogrammering in een standaardonderdeel dat op de lange termijn kan worden onderhouden en iteratief kan worden ontwikkeld.

Met het oog op de kenmerken van door kunstmatige intelligentie ondersteunde ontwikkeling hebben we een nieuw front-end ontwikkelingsparadigma voorgesteld en ontworpen:

1. **Alles is een webcomponent**
2. **De component moet onafhankelijk zijn van de back-end datalink en de data-interface wordt beschikbaar gesteld als een callback-functie**

Op deze manier kan kunstmatige intelligentie nepgegevens genereren en verschillende statussen van componenten op de demopagina weergeven.

Scheiding van componentontwikkeling en data-interface, gecombineerd met [webc.site componentframework](https://github.com/webc-site/webc.site) Nog een belangrijk kenmerk:

**Elke component kan de ontwikkelingsserver onafhankelijk starten en ontwikkelen en fouten opsporen op de demopagina**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Hierdoor wordt de front-endlink voor ontwikkeling en foutopsporing van elke component teruggebracht tot `0`.

Op deze manier kunt u met door kunstmatige intelligentie ondersteunde ontwikkelingstools ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) enz.) genieten van volledig automatische ontwikkeling, open browser-foutopsporing en niet langer worden geblokkeerd door verschillende rommelige factoren (backend-gegevens, inlogstatus, padroutering, enz.).

Als je de kunstmatige intelligentie wilt beheersen, de kosten wilt verlagen en de efficiëntie wilt verhogen, heb je een nieuw paradigma nodig dat de ontwikkelings- en foutopsporingsomgeving van elk onderdeel minimaliseert.

---

# Ik ben nog niet begonnen met het schrijven van TODO

### Bibliotheek met webcomponenten

#### Ultieme maatoptimalisatie

Vergelijk voor de virtuele schuifbalkcomponent bijvoorbeeld de grootte van het populaire [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars)-script en de stijl na `gz`, zoals weergegeven in de volgende tabel:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 v.Chr    |

De virtuele schuifbalkcomponent van `webc.site` is slechts die van `OverlayScrollbars` `10%`.

#### Runtime-onafhankelijk

De componentenbibliotheek webc.site is gebouwd op standaarden [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) en is uiteraard runtime-agnostisch. Of u nu React, Vue, Angular, Svelte of een traditioneel puur HTML/JS-project gebruikt, alle componenten kunnen rechtstreeks in de browser worden uitgevoerd, net als native HTML-tags, zonder de noodzaak van secundaire verpakkingen voor een specifiek raamwerk.

##### Vergelijking met shadcn

[shadcn/ui](https://ui.shadcn.com) gebruikt de codedistributiemodus, waarbij u de componentcode rechtstreeks naar uw eigen project moet kopiëren. Het is nauw verbonden met het React-ecosysteem en specifieke bouwtoolketens (zoals Tailwind CSS) en kan niet in verschillende frameworks worden gebruikt. Het heeft ook bepaalde vereisten voor de configuratie van projectengineering.

En de component van `webc.site`:
- **Cross-framework universeel**: Schrijf één keer en kan direct worden geïntroduceerd en uitgevoerd in elk front-end framework (zelfs een framework-vrije omgeving).
- **Zonder afhankelijkheid van de omgeving**: Er zijn geen specifieke verpakkingstools of CSS-preprocessors vereist. Importeer gewoon de gecompileerde statische bestanden en deze kunnen kant-en-klaar worden gebruikt.

## Geautomatiseerde ontwikkeling en foutopsporing

### Lokale ontwikkeling en foutopsporing

Elke webpaginacomponent ondersteunt het onafhankelijk starten van de ontwikkelserver, waardoor een minimale ontwikkel- en foutopsporingsomgeving ontstaat:

- **Maak een nieuwe component**: voer `./sh/new.js [css|js] [componentnaam]` uit om snel een componentenontwikkelingsskelet te genereren (inclusief demopagina en internationaliseringsconfiguratie).
- **Onafhankelijke foutopsporing**: Voer `./dev.js [componentnaam]` uit (of voer `./dev.js` rechtstreeks uit) om de Vite-ontwikkelserver te starten en automatisch de demopagina van de component in de browser te openen. Ondersteunt component hot update (HMR). Omdat ontwikkelings- en datakoppelingen zijn ontkoppeld, is er geen front-end-ontwikkelingskoppeling, wat zeer geschikt is voor AI (zoals Claude Code, Google Antigravity, enz.) om te helpen bij volledig automatische ontwikkeling en browserfoutopsporing.

### Componentenbibliotheek publiceren

#### webc dist

Het verpakkings- en publicatieproces is in hoge mate geautomatiseerd:
- **Statische bronverpakking**: het uitvoeren van `./sh/dist.js` (dat wil zeggen: het uitvoeren van de taak `webc dist`) kan automatisch alle webpaginacomponenten onder `src/` scannen, compileren, comprimeren en uitvoeren naar de map `dist/`. Deze map bevat JS/CSS-bestanden voor productiedistributie, een demosite die klaar is voor implementatie op GitHub Pages of Cloudflare Pages, en automatisch gegenereerde `_redirects` en `404.html` routeringsbestanden.
- **NPM Publish**: voer `./sh/npmDist.js` uit, het script verwerkt automatisch de componentafhankelijkheden, verhoogt het pakketversienummer en voert `npm publish` uit met één klik nadat het inpakken is voltooid om de componentenbibliotheek naar NPM te publiceren.

### Het platform is verantwoordelijk voor de vertaling

Het raamwerk heeft ingebouwde geautomatiseerde vertaalprocessen:
1. Configureer vertaalregels (zoals brontaal, doeltaal en directory die moeten worden vertaald) in `tran.yml` in de hoofdmap van het project.
2. Gebruik tijdelijke aanduidingen in componenten of documenten zonder dat u meerdere talen in uw code hoeft te hardcoderen.
3. Voer `./sh/tran.js` uit en de vertaalmachine zal de tekst automatisch extraheren en de WebC-vertaalservice aanroepen voor verwerking, waarbij automatisch YAML-vertaalitems en README-documentatie in verschillende talen worden gegenereerd.

### omgevingsvariabelen

Wanneer u een automatische vertaling uitvoert, moet u de volgende omgevingsvariabelen configureren om toegang tot de vertaal-API te autoriseren:

- **`WEBC_SITE_TOKEN`** (of **`WEBC_TOKEN`**): Authenticatiesleutel die wordt gebruikt om toegang te krijgen tot de `webc.site` Automated Translation API. Kan worden geïnjecteerd als een omgevingsvariabele of `token` worden geschreven in het `~/.config/webc.site.yml` configuratiebestand in de thuismap van de lokale gebruiker.