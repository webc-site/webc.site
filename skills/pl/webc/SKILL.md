---
name: webc
---

Postępuj zgodnie z procesem, zrób plan i rozwijaj krok po kroku, aby uniknąć pominięć

1. Uruchom `./sh/new.js nazwa komponentu typu projektu` i utwórz komponent w katalogu `src/webc`
   Typ projektu może być `css` (komponent czystego stylu), `js` (komponent strony internetowej)
   Pierwszą literę nazwy komponentu zapisz wielką literą

2. Przeczytaj specyfikacje kodowania dla `.agents/doc/code`, a następnie opracuj.

   Styl komponentu jest zapisany w `_.styl`. Styl używany do demonstracji jest zapisany w `demo/_.styl`. Zabronione jest zapisywanie go w `nazwa komponentu/_.styl`.

  Używanie `@import` do importowania stylów z innych komponentów jest zabronione zarówno w `_.styl` jak i `demo/_.styl` .

  Postępuj zgodnie ze standardami kodowania i estetyką projektu [./styl.md](./styl.md).

  Zależne komponenty (i ich style) są importowane poprzez `import "./other Components.js"` w `webc/componentname.js`; zależności do celów demonstracyjnych są importowane poprzez `import "../../other Components.js"` w `demo/_.js`.

   Wszystkie komponenty (w tym komponenty czystego stylu) muszą mieć plik skryptowy `nazwa komponentu.js`. `nazwa komponentu.js` komponentów w czystym stylu importuje tylko odpowiedni komponent `_.styl`. W przypadku komponentów z logiką JS postępuj zgodnie z procesem [webc.js.md](./webc.js.md), aby je opracować.

3. Naciśnij [demo.md](./demo.md) demonstrację rozwoju procesu

4. Uruchom `./test.sh` katalogu głównego. Naprawiaj błędy i alarmy, wyodrębniaj funkcje, optymalizuj kod i unikaj powielania i nadmiarowości. Aby zapoznać się ze specyfikacjami kodu, zobacz `.agents/doc/code/js.md`

5. Przeczytaj [dbg.md](./dbg.md) i debuguj komponenty zgodnie z procesem

6. Postępuj zgodnie z procesem [i18n.md](./i18n.md), aby wdrożyć internacjonalizację komponentów i demonstracji oraz napisać dokumenty

7. Przetestuj ponownie i zoptymalizuj kod

8. Otwórz subagenta i zadzwoń do `.agents/skills/js_review/SKILL.md`, aby sprawdzić i zoptymalizować kod.

9. Debugowanie ponownie