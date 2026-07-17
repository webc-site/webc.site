# WebC.site

## Wat is dit?

### Dit is 'n inheemse webkomponent-biblioteek

Ontwikkel op grond van [webkomponente](https://developer.mozilla.org/docs/Web/API/Web_components), is dit runtime-onafhanklik en geskik vir alle raamwerke.

Uiters geoptimaliseer vir grootte (een tiende van die grootte van soortgelyke gewilde biblioteke).

Ondersteun 75 tale. Jy kan js en css direk invoer vir aanlyn gebruik, of komponente by jou projek voeg soos nodig vir sekondêre ontwikkeling.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dit is die komponent-biblioteekontwikkelingsraamwerk

Dit is die statiese blogweergawe van [storieboek](https://storybook.js.org).

Die bou van 'n komponentbiblioteek kan die maatskappy se interne ontwikkelingsdoeltreffendheid verbeter en 'n handelsmerkbeeld in die tegniese kring bou.

Op grond van [webc.site](https://github.com/webc-site/webc.site), kan spanne maklik hul eie komponentbiblioteke skep en dit publiseer na [github-bladsy](https://pages.github.com), [wolkflare-bladsy](https://pages.cloudflare.com), ens. Die gepubliseerde komponente kan aanlyn op [codepen.io](https://codepen.io) en [jsfiddle](https://jsfiddle.net) ontfout word.

Terselfdertyd kan die ingeboude vertaalraamwerk vinnig die internasionalisering van komponente en dokumente realiseer, sodat jou produkgehoor nie meer aan taal gebonde is nie.

### Dit is 'n nuwe paradigma van front-end ontwikkeling vir die era van kunsmatige intelligensie

Die raamwerk is ingebou `.agents/skills`, wat kunsmatige intelligensie toelaat om jou te help om nuwe komponente te ontwikkel met een klik volgens beste praktyke.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Laat die voorkantkode verander van 'n onvolhoubare vullisberg van atmosfeerprogrammering in 'n standaarddeel wat oor die lang termyn in stand gehou en iteratief ontwikkel kan word.

In die lig van die kenmerke van kunsmatige intelligensie-ondersteunde ontwikkeling, het ons 'n nuwe front-end-ontwikkelingsparadigma voorgestel en ontwerp:

1. **Alles is 'n webkomponent**
2. **Die komponent moet onafhanklik van die back-end-dataskakel wees, en die data-koppelvlak word blootgestel as 'n terugbelfunksie**

Op hierdie manier kan kunsmatige intelligensie vals data genereer en verskillende toestande van komponente op die demo-bladsy vertoon.

Skeiding van komponentontwikkeling en data-koppelvlak, gekombineer met [webc.site komponentraamwerk](https://github.com/webc-site/webc.site) Nog 'n belangrike kenmerk:

**Elke komponent kan die ontwikkelingsbediener onafhanklik begin en op die demo-bladsy ontwikkel en ontfout**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dit verminder die front-end-skakel vir ontwikkeling en ontfouting van elke komponent na `0`.

Op hierdie manier, kunsmatige intelligensie-gesteunde ontwikkelingsnutsmiddels ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) ens.), kan jy geniet deur verskeie outomatiese ontfouting en oop blaaier te blokkeer deur nie meer te ontblaai nie. (agtergronddata, aanmeldstatus, padroetering, ens.).

As jy kunsmatige intelligensie wil beheer en koste wil verminder en doeltreffendheid wil verhoog, het jy 'n nuwe paradigma nodig wat die ontwikkeling en ontfoutingsomgewing van elke komponent minimaliseer.

---

# Ek het nog nie begin skryf TODO nie

### Web komponent biblioteek

#### Uiteindelike grootte optimalisering

Byvoorbeeld, vir die virtuele rolbalk-komponent, vergelyk die grootte van die gewilde [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skrif en styl na `gz`, soos in die volgende tabel getoon:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 v.C    |

`webc.site` se virtuele rolbalk-komponent is slegs `OverlayScrollbars` se `10%`.

#### Looptyd onafhanklik

Gebou op standaarde [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), die webc.site komponent biblioteek is natuurlik runtime-agnosties. Of jy nou React, Vue, Angular, Svelte of 'n tradisionele suiwer HTML/JS-projek gebruik, alle komponente kan direk in die blaaier loop soos inheemse HTML-etikette, sonder die behoefte aan sekondêre verpakking vir 'n spesifieke raamwerk.

##### Vergelyking met shadcn

[shadcn/ui](https://ui.shadcn.com) neem die kodeverspreidingsmodus aan, wat vereis dat jy die komponentkode direk na jou eie projek moet kopieer. Dit is stewig gebonde aan die React-ekosisteem en spesifieke konstruksiegereedskapkettings (soos Tailwind CSS), en kan nie oor raamwerke gebruik word nie. Dit het ook sekere vereistes vir projekingenieurskonfigurasie.

En die komponent van `webc.site`:
- **Kruisraamwerk universeel**: Skryf een keer en kan direk bekendgestel en uitgevoer word in enige voorkantraamwerk (selfs 'n raamwerkvrye omgewing).
- **Omgewing nul-afhanklikheid**: Geen spesifieke verpakkingsinstrumente of CSS-voorverwerkers word vereis nie, voer net die saamgestelde statiese lêers in en dit kan uit die boks gebruik word.

## Outomatiese ontwikkeling en ontfouting

### Plaaslike ontwikkeling en ontfouting

Elke webbladkomponent ondersteun die begin van die ontwikkelingsbediener onafhanklik, wat 'n minimale ontwikkeling- en ontfoutingsomgewing bied:

- **Skep 'n nuwe komponent**: Begin `./sh/new.js [css|js] [komponentnaam]` om vinnig 'n komponentontwikkelingskelet te genereer (insluitend demonstrasiebladsy en internasionaliseringsopstelling).
- **Onafhanklike ontfouting**: Begin `./dev.js [komponentnaam]` (of hardloop `./dev.js` direk) om die Vite-ontwikkelingsbediener te begin en maak outomaties die demonstrasiebladsy van die komponent in die blaaier oop. Ondersteun komponent warm update (HMR). Omdat ontwikkeling- en dataskakels ontkoppel is, is daar 'n nul-ontwikkeling-front-end-skakel, wat baie geskik is vir KI (soos Claude Code, Google Antigravity, ens.) om te help met ten volle outomatiese ontwikkeling en blaaier-ontfouting.

### Publiseer komponentbiblioteek

#### webc dist

Die verpakking en publikasieproses is hoogs geoutomatiseerd:
- **Statiese hulpbronverpakking**: Deur `./sh/dist.js` uit te voer (dit wil sê om die `webc dist` taak uit te voer) kan alle webbladkomponente onder `src/` outomaties skandeer, saamstel, saamgepers en uitstuur na die `dist/` gids. Hierdie gids bevat JS/CSS-lêers vir produksieverspreiding, 'n demonstrasiewebwerf wat gereed is vir ontplooiing na GitHub Pages of Cloudflare Pages, en outomaties gegenereerde `_redirects` en `404.html` roetelêers.
- **NPM Publiseer**: Begin `./sh/npmDist.js`, die skrip sal outomaties komponentafhanklikhede hanteer, die pakketweergawenommer verhoog en `npm publish` uitvoer met een klik nadat verpakking voltooi is om die komponentbiblioteek na NPM te publiseer.

### Die platform is verantwoordelik vir vertaling

Die raamwerk het ingeboude outomatiese vertaalprosesse:
1. Stel vertaalreëls (soos brontaal, teikentaal en gids wat vertaal moet word) op in `tran.yml` in die projekhoofgids.
2. Gebruik plekhouers in komponente of dokumente sonder om verskeie tale in jou kode hard te kodeer.
3. Begin `./sh/tran.js`, en die vertaalenjin sal outomaties die teks onttrek en die WebC-vertaaldiens oproep vir verwerking, wat outomaties YAML-vertaalinskrywings en README-dokumentasie in verskeie tale genereer.

### omgewingsveranderlikes

Wanneer u outomatiese vertaling uitvoer, moet u die volgende omgewingsveranderlikes opstel om toegang tot die vertaal-API te magtig:

- **`WEBC_SITE_TOKEN`** (of **`WEBC_TOKEN`**): Stawingsleutel wat gebruik word om toegang tot die `webc.site` Outomatiese Vertaling API te verkry. Kan as 'n omgewingsveranderlike ingespuit word of geskryf word `token` in die `~/.config/webc.site.yml` konfigurasielêer in die plaaslike gebruiker se tuisgids.