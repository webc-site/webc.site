---
name: webc
---

Postępuj zgodnie z procesem, zrób plan i rozwijaj krok po kroku, aby uniknąć pominięć

1. Uruchom `./sh/new.js nazwa komponentu typu projektu` i utwórz folder komponentu w katalogu `src`
   Typ projektu może być `css` (komponent czystego stylu), `js` (komponent strony internetowej)
   Pierwszą literę nazwy komponentu zapisz wielką literą

2. Przeczytaj specyfikacje kodowania dla `.agents/doc/code`, a następnie opracuj.

   W `_.styl` najpierw `@import "../component name/_.styl"`, aby zaimportować zależności. Prosimy przestrzegać standardów kodowania i estetyki projektu [./styl.md](./styl.md).

   Zmodyfikuj style innych komponentów i zamiast tego importuj je bezpośrednio, użyj `@import` na początku i wyłącz `extend`.

   Zabrania się zapisywania stylu użytego do demonstracji w `nazwa komponentu/_.styl` i zapisywania w `demo/_.styl`.

   W przypadku komponentu `js` opracuj go zgodnie z procesem [webc.js.md](./webc.js.md) (w przypadku komponentów o czystym stylu usuń `component name/_.js`)

3. Naciśnij [demo.md](./demo.md) demonstrację rozwoju procesu

4. Uruchom `./test.sh` katalogu głównego. Naprawiaj błędy i alarmy, wyodrębniaj funkcje, optymalizuj kod i unikaj powielania i nadmiarowości. Aby zapoznać się ze specyfikacjami kodu, zobacz `.agents/doc/code/js.md`

5. Przeczytaj [dbg.md](./dbg.md) i debuguj komponenty zgodnie z procesem

6. Postępuj zgodnie z procesem [i18n.md](./i18n.md), aby wdrożyć internacjonalizację komponentów i demonstracji oraz napisać dokumenty

7. Przetestuj ponownie i zoptymalizuj kod

8. Otwórz subagenta i zadzwoń do `.agents/skills/js_review/SKILL.md`, aby sprawdzić i zoptymalizować kod.

9. Debugowanie ponownie