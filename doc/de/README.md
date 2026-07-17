# WebC.site

## Was ist das?

### Dies ist eine native Webkomponentenbibliothek

Es wurde auf Basis von [Webkomponenten](https://developer.mozilla.org/docs/Web/API/Web_components) entwickelt, ist laufzeitunabhängig und für alle Frameworks geeignet.

Extrem größenoptimiert (ein Zehntel der Größe ähnlich beliebter Bibliotheken).

Unterstützt 75 Sprachen. Sie können js und css direkt für die Online-Nutzung importieren oder nach Bedarf Komponenten zu Ihrem Projekt für die sekundäre Entwicklung hinzufügen.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Dies ist das Entwicklungsframework für die Komponentenbibliothek

Dies ist die statische Blog-Version von [storybook](https://storybook.js.org).

Der Aufbau einer Komponentenbibliothek kann die interne Entwicklungseffizienz des Unternehmens verbessern und ein Markenimage im technischen Kreis aufbauen.

Basierend auf [webc.site](https://github.com/webc-site/webc.site) können Teams ganz einfach ihre eigenen Komponentenbibliotheken erstellen und diese auf [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) usw. veröffentlichen. Die veröffentlichten Komponenten können online auf [codepen.io](https://codepen.io) und [jsfiddle](https://jsfiddle.net) debuggt werden.

Gleichzeitig kann das integrierte Übersetzungsframework die Internationalisierung von Komponenten und Dokumenten schnell realisieren, sodass Ihr Produktpublikum nicht mehr an die Sprache gebunden ist.

### Dies ist ein neues Paradigma der Front-End-Entwicklung für das Zeitalter der künstlichen Intelligenz

Das Framework ist `.agents/skills` integriert und ermöglicht es Ihnen mit künstlicher Intelligenz, mit einem Klick neue Komponenten gemäß Best Practices zu entwickeln.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Lassen Sie den Front-End-Code von einem nicht nachhaltigen Müllberg an Atmosphärenprogrammierung zu einem Standardteil werden, der langfristig gewartet und iterativ weiterentwickelt werden kann.

Angesichts der Merkmale der durch künstliche Intelligenz unterstützten Entwicklung haben wir ein neues Front-End-Entwicklungsparadigma vorgeschlagen und entworfen:

1. **Alles ist eine Webkomponente**
2. **Die Komponente muss unabhängig von der Back-End-Datenverbindung sein und die Datenschnittstelle wird als Rückruffunktion verfügbar gemacht**

Auf diese Weise kann künstliche Intelligenz gefälschte Daten generieren und unterschiedliche Zustände von Komponenten auf der Demoseite anzeigen.

Trennung von Komponentenentwicklung und Datenschnittstelle, kombiniert mit [webc.site Component Framework](https://github.com/webc-site/webc.site) Ein weiteres wichtiges Feature:

**Jede Komponente kann den Entwicklungsserver unabhängig starten und auf der Demoseite entwickeln und debuggen**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Dadurch wird der Front-End-Link für die Entwicklung und das Debuggen jeder Komponente auf `0` reduziert.

Auf diese Weise können Sie mithilfe künstlicher Intelligenz unterstützter Entwicklungstools ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) usw.) vollautomatische Entwicklung und offenes Browser-Debugging genießen und werden nicht länger durch verschiedene unordentliche Faktoren (Backend-Daten, Anmeldestatus, Pfadrouting usw.) blockiert.

Wenn Sie künstliche Intelligenz steuern, Kosten senken und die Effizienz steigern möchten, benötigen Sie ein neues Paradigma, das die Entwicklungs- und Debugging-Umgebung jeder Komponente minimiert.

---

# Ich habe noch nicht angefangen, TODO zu schreiben

### Webkomponentenbibliothek

#### Ultimative Größenoptimierung

Vergleichen Sie beispielsweise für die virtuelle Bildlaufleistenkomponente die Größe des beliebten Skripts [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) und den Stil nach `gz`, wie in der folgenden Tabelle gezeigt:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 v    |

Die virtuelle Bildlaufleistenkomponente von `webc.site` ist nur die `10%` von `OverlayScrollbars`.

#### Laufzeitunabhängig

Die webc.site-Komponentenbibliothek basiert auf den Standards [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) und ist von Natur aus laufzeitunabhängig. Unabhängig davon, ob Sie React, Vue, Angular, Svelte oder ein herkömmliches reines HTML/JS-Projekt verwenden, können alle Komponenten wie native HTML-Tags direkt im Browser ausgeführt werden, ohne dass eine sekundäre Verpackung für ein bestimmtes Framework erforderlich ist.

##### Vergleich mit shadcn

[shadcn/ui](https://ui.shadcn.com) übernimmt den Codeverteilungsmodus, bei dem Sie den Komponentencode direkt in Ihr eigenes Projekt kopieren müssen. Es ist eng an das React-Ökosystem und bestimmte Konstruktionstoolketten (wie Tailwind CSS) gebunden und kann nicht Framework-übergreifend verwendet werden. Es gelten auch bestimmte Anforderungen für die projekttechnische Konfiguration.

Und die Komponente von `webc.site`:
- **Framework-übergreifend universell**: Einmal geschrieben und kann direkt in jedem Front-End-Framework eingeführt und ausgeführt werden (sogar in einer Framework-freien Umgebung).
- **Umgebungsunabhängigkeit**: Es sind keine speziellen Verpackungstools oder CSS-Präprozessoren erforderlich. Importieren Sie einfach die kompilierten statischen Dateien und sie können sofort verwendet werden.

## Automatisierte Entwicklung und Fehlerbehebung

### Lokale Entwicklung und Debugging

Jede Webseitenkomponente unterstützt das unabhängige Starten des Entwicklungsservers und bietet so eine minimale Entwicklungs- und Debugging-Umgebung:

- **Erstellen Sie eine neue Komponente**: Führen Sie `./sh/new.js [css|js] [Komponentenname]` aus, um schnell ein Komponentenentwicklungsgerüst zu generieren (einschließlich Demoseite und Internationalisierungskonfiguration).
- **Unabhängiges Debuggen**: Führen Sie `./dev.js [Komponentenname]` aus (oder führen Sie `./dev.js` direkt aus), um den Vite-Entwicklungsserver zu starten und automatisch die Demoseite der Komponente im Browser zu öffnen. Unterstützt Component Hot Update (HMR). Da Entwicklungs- und Datenverbindungen entkoppelt sind, gibt es keine Entwicklungs-Front-End-Verbindung, was sich sehr gut für KI (wie Claude Code, Google Antigravity usw.) eignet, um die vollautomatische Entwicklung und das Browser-Debugging zu unterstützen.

### Komponentenbibliothek veröffentlichen

#### webc dist

Der Verpackungs- und Veröffentlichungsprozess ist hochgradig automatisiert:
- **Statische Ressourcenverpackung**: Durch Ausführen von `./sh/dist.js` (d. h. Ausführen der Aufgabe `webc dist`) können alle Webseitenkomponenten unter `src/` automatisch gescannt, kompiliert, komprimiert und im Verzeichnis `dist/` ausgegeben werden. Dieses Verzeichnis enthält JS/CSS-Dateien für die Produktionsverteilung, eine Demo-Site, die für die Bereitstellung auf GitHub Pages oder Cloudflare Pages bereit ist, sowie automatisch generierte `_redirects`- und `404.html`-Routing-Dateien.
- **NPM-Veröffentlichung**: Führen Sie `./sh/npmDist.js` aus. Das Skript verarbeitet Komponentenabhängigkeiten automatisch, erhöht die Versionsnummer des Pakets und führt `npm publish` mit einem Klick aus, nachdem die Verpackung abgeschlossen ist, um die Komponentenbibliothek in NPM zu veröffentlichen.

### Für die Übersetzung ist die Plattform verantwortlich

Das Framework verfügt über integrierte automatisierte Übersetzungsprozesse:
1. Konfigurieren Sie Übersetzungsregeln (z. B. Quellsprache, Zielsprache und zu übersetzendes Verzeichnis) in `tran.yml` im Projektstammverzeichnis.
2. Verwenden Sie Platzhalter in Komponenten oder Dokumenten, ohne mehrere Sprachen in Ihrem Code fest codieren zu müssen.
3. Führen Sie `./sh/tran.js` aus, und die Übersetzungs-Engine extrahiert automatisch den Text und ruft den WebC-Übersetzungsdienst zur Verarbeitung auf, wodurch automatisch YAML-Übersetzungseinträge und README-Dokumentation in verschiedenen Sprachen generiert werden.

### Umgebungsvariablen

Wenn Sie eine automatisierte Übersetzung durchführen, müssen Sie die folgenden Umgebungsvariablen konfigurieren, um den Zugriff auf die Übersetzungs-API zu autorisieren:

- **`WEBC_SITE_TOKEN`** (oder **`WEBC_TOKEN`**): Authentifizierungsschlüssel, der für den Zugriff auf die `webc.site` API für automatisierte Übersetzungen verwendet wird. Kann als Umgebungsvariable eingefügt oder `token` in die `~/.config/webc.site.yml`-Konfigurationsdatei im Home-Verzeichnis des lokalen Benutzers geschrieben werden.