# WebC.site

## Co to jest?

### To jest natywna biblioteka komponentów sieciowych

Opracowany w oparciu o [komponenty sieciowe](https://developer.mozilla.org/docs/Web/API/Web_components), jest niezależny od czasu wykonania i odpowiedni dla wszystkich frameworków.

Niezwykle zoptymalizowany pod kątem rozmiaru (jedna dziesiąta rozmiaru podobnych popularnych bibliotek).

Obsługuje 75 języków. Możesz bezpośrednio importować pliki js i css do użytku online lub dodawać komponenty do swojego projektu, jeśli są potrzebne do dalszego rozwoju.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### To jest środowisko programowania bibliotek komponentów

To jest statyczna wersja blogowa [książki z opowieściami](https://storybook.js.org).

Zbudowanie biblioteki komponentów może poprawić efektywność rozwoju wewnętrznego firmy i zbudować wizerunek marki w środowisku technicznym.

W oparciu o [webc.site](https://github.com/webc-site/webc.site) zespoły mogą łatwo tworzyć własne biblioteki komponentów i publikować je na [stronie github](https://pages.github.com), [stronie cloudflare](https://pages.cloudflare.com) itp. Opublikowane komponenty można debugować online w [codepen.io](https://codepen.io) i [jsfiddle](https://jsfiddle.net).

Jednocześnie wbudowane ramy tłumaczeniowe mogą szybko realizować internacjonalizację komponentów i dokumentów, dzięki czemu odbiorcy Twojego produktu nie będą już ograniczeni językiem.

### To nowy paradygmat rozwoju front-endu na erę sztucznej inteligencji

Framework jest wbudowany `.agents/skills`, dzięki czemu sztuczna inteligencja pomaga w opracowywaniu nowych komponentów jednym kliknięciem, zgodnie z najlepszymi praktykami.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Pozwól, aby kod front-endu zmienił się z niezrównoważonej góry śmieci programowania atmosfery w standardową część, którą można utrzymywać i iteracyjnie rozwijać w dłuższej perspektywie.

Mając na uwadze cechy rozwoju wspomaganego sztuczną inteligencją, zaproponowaliśmy i zaprojektowaliśmy nowy paradygmat rozwoju front-end:

1. **Wszystko jest komponentem sieciowym**
2. **Komponent musi być niezależny od wewnętrznego łącza danych, a interfejs danych jest udostępniany jako funkcja wywołania zwrotnego**

W ten sposób sztuczna inteligencja może generować fałszywe dane i wyświetlać różne stany komponentów na stronie demonstracyjnej.

Oddzielenie rozwoju komponentów i interfejsu danych w połączeniu z [strukturą komponentów webc.site](https://github.com/webc-site/webc.site) Kolejna ważna cecha:

**Każdy komponent może niezależnie uruchomić serwer programistyczny oraz programować i debugować na stronie demonstracyjnej**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Zmniejsza to łącze front-end do programowania i debugowania każdego komponentu do `0`.

W ten sposób narzędzia programistyczne wspomagane sztuczną inteligencją ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) itp.), możesz cieszyć się w pełni automatycznym programowaniem, debugowaniem otwartej przeglądarki i nie być już blokowanym przez różne nieporządne czynniki (dane zaplecza, status logowania, ścieżka routingu itp.).

Jeśli chcesz kontrolować sztuczną inteligencję oraz redukować koszty i zwiększać wydajność, potrzebujesz nowego paradygmatu, który minimalizuje środowisko programistyczne i debugowania każdego komponentu.

---

# Nie zacząłem jeszcze pisać TODO

### Biblioteka komponentów sieciowych

#### Optymalna optymalizacja rozmiaru

Na przykład w przypadku komponentu wirtualnego paska przewijania porównaj rozmiar popularnego skryptu i styl [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) po `gz`, jak pokazano w poniższej tabeli:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 r. p.n.e    |

Komponent wirtualnego paska przewijania `webc.site` jest tylko komponentem `OverlayScrollbars` `10%`.

#### Niezależny od czasu działania

Zbudowana w oparciu o standardy [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) biblioteka komponentów webc.site jest w naturalny sposób niezależna od środowiska wykonawczego. Niezależnie od tego, czy używasz React, Vue, Angular, Svelte, czy tradycyjnego projektu czystego HTML/JS, wszystkie komponenty mogą działać bezpośrednio w przeglądarce jak natywne znaczniki HTML, bez potrzeby dodatkowego pakowania dla określonego frameworka.

##### Porównanie z shadcn

[shadcn/ui](https://ui.shadcn.com) przyjmuje tryb dystrybucji kodu, który wymaga skopiowania kodu komponentu bezpośrednio do własnego projektu. Jest ściśle powiązany z ekosystemem React i określonymi łańcuchami narzędzi konstrukcyjnych (takimi jak CSS Tailwind) i nie można go używać między frameworkami. Ma również pewne wymagania dotyczące konfiguracji inżynierskiej projektu.

Oraz komponent `webc.site`:
- **Uniwersalny między frameworkami**: Napisz raz i można go bezpośrednio wprowadzić i uruchomić w dowolnym frameworku front-end (nawet w środowisku bez frameworków).
- **Zależność od środowiska zerowego**: Nie są wymagane żadne specjalne narzędzia do pakowania ani preprocesory CSS, wystarczy zaimportować skompilowane pliki statyczne i można z nich korzystać od razu po wyjęciu z pudełka.

## Zautomatyzowane programowanie i debugowanie

### Lokalny rozwój i debugowanie

Każdy komponent strony internetowej obsługuje niezależne uruchamianie serwera programistycznego, zapewniając minimalne środowisko programistyczne i debugowania:

- **Utwórz nowy komponent**: Uruchom `./sh/new.js [css|js] [nazwa komponentu]`, aby szybko wygenerować szkielet rozwoju komponentu (w tym stronę demonstracyjną i konfigurację internacjonalizacji).
- **Niezależne debugowanie**: Uruchom `./dev.js [nazwa komponentu]` (lub uruchom bezpośrednio `./dev.js`), aby uruchomić serwer programistyczny Vite i automatycznie otworzyć stronę demonstracyjną komponentu w przeglądarce. Obsługuje gorącą aktualizację komponentów (HMR). Ponieważ łącza programistyczne i dane są oddzielone, nie ma żadnego łącza programistycznego, które jest bardzo odpowiednie dla sztucznej inteligencji (takiej jak Claude Code, Google Antigravity itp.), aby pomóc w w pełni automatycznym programowaniu i debugowaniu przeglądarki.

### Opublikuj bibliotekę komponentów

#### webc dist

Proces pakowania i wydawniczy jest wysoce zautomatyzowany:
- **Statyczne pakowanie zasobów**: Uruchomienie `./sh/dist.js` (tzn. wykonanie zadania `webc dist`) może automatycznie przeskanować wszystkie komponenty strony internetowej w `src/`, skompilować, skompresować i wyprowadzić je do katalogu `dist/`. Ten katalog zawiera pliki JS/CSS do dystrybucji produkcyjnej, witrynę demonstracyjną gotową do wdrożenia w GitHub Pages lub Cloudflare Pages oraz automatycznie wygenerowane pliki routingu `_redirects` i `404.html`.
- **NPM Publish**: Uruchom `./sh/npmDist.js`, skrypt automatycznie obsłuży zależności komponentów, zwiększy numer wersji pakietu i wykona `npm publish` jednym kliknięciem po zakończeniu pakowania, aby opublikować bibliotekę komponentów w NPM.

### Za tłumaczenie odpowiada platforma

Framework posiada wbudowane automatyczne procesy tłumaczeniowe:
1. Skonfiguruj reguły tłumaczenia (takie jak język źródłowy, język docelowy i katalog do przetłumaczenia) w `tran.yml` w katalogu głównym projektu.
2. Używaj symboli zastępczych w komponentach lub dokumentach bez konieczności kodowania wielu języków w swoim kodzie.
3. Uruchom `./sh/tran.js`, a silnik tłumaczenia automatycznie wyodrębni tekst i wywoła usługę tłumaczeniową WebC w celu przetworzenia, automatycznie generując wpisy tłumaczeń YAML i dokumentację README w różnych językach.

### zmienne środowiskowe

Podczas wykonywania tłumaczenia automatycznego należy skonfigurować następujące zmienne środowiskowe, aby autoryzować dostęp do interfejsu API tłumaczenia:

- **`WEBC_SITE_TOKEN`** (lub **`WEBC_TOKEN`**): klucz uwierzytelniający używany do uzyskania dostępu do interfejsu API `webc.site` tłumaczenia automatycznego. Można wstrzyknąć jako zmienną środowiskową lub zapisać `token` w pliku konfiguracyjnym `~/.config/webc.site.yml` w katalogu domowym użytkownika lokalnego.