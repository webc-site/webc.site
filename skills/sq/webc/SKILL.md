---
name: webc
---

Ndiqni procesin, bëni një plan dhe zhvilloni hap pas hapi për të shmangur lëshimet

1. Ekzekutoni `./sh/new.js emrin e komponentit të llojit të projektit` dhe krijoni komponentin nën drejtorinë `src/webc`
   Lloji i projektit mund të jetë `css` (komponent i stilit të pastër), `js` (komponent i faqes së internetit)
   Shkruani shkronjën e parë të emrit të komponentit

2. Lexoni specifikimet e kodimit për `.agents/doc/code` dhe më pas zhvilloni.

   Stili i komponentit është shkruar në `_.styl`. Stili i përdorur për demonstrim është shkruar në `demo/_.styl`. Është e ndaluar të shkruhet në `emri i komponentit/_.styl`.

  Përdorimi i `@import` për të importuar stile nga komponentë të tjerë është i ndaluar si në `_.styl` dhe në `demo/_.styl` .

  Ndiqni standardet e kodimit dhe estetikën e dizajnit të [./styl.md](./styl.md).

  Komponentët e varur (dhe stilet e tyre) importohen nëpërmjet `importit "./other components.js"` në `webc/componentname.js`; varësitë për demonstrim importohen nëpërmjet `importit "../../other components.js"` në `demo/_.js`.

   Të gjithë komponentët (përfshirë komponentët e stilit të pastër) duhet të kenë një skedar skripti `e komponentit name.js`. `emri i komponentit.js` i përbërësve të stilit të pastër importon vetëm `_.styl` përkatëse. Për komponentët me logjikë JS, ndiqni procesin [webc.js.md](./webc.js.md) për t'u zhvilluar.

3. Shtypni [demo.md](./demo.md) demonstrimi i zhvillimit të procesit

4. Ekzekutoni `./test.sh` e drejtorisë rrënjësore. Rregulloni gabimet dhe alarmet, nxjerrni funksionet, optimizoni kodin dhe shmangni dyfishimin dhe tepricën. Për specifikimet e kodit, shihni `.agents/doc/code/js.md`

5. Lexoni [dbg.md](./dbg.md) dhe korrigjoni përbërësit sipas procesit

6. Ndiqni procesin [i18n.md](./i18n.md) për të zbatuar ndërkombëtarizimin e komponentëve dhe demonstrimeve dhe për të shkruar dokumente

7. Provoni përsëri dhe optimizoni kodin

8. Hapni një nën-agjent dhe telefononi `.agents/skills/js_review/SKILL.md` për të rishikuar dhe optimizuar kodin.

9. Korrigjimi përsëri