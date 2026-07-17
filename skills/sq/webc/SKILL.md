---
name: webc
---

Ndiqni procesin, bëni një plan dhe zhvilloni hap pas hapi për të shmangur lëshimet

1. Ekzekutoni `./sh/new.js emrin e komponentit të llojit të projektit` dhe krijoni një dosje komponenti nën drejtorinë `src`
   Lloji i projektit mund të jetë `css` (komponent i stilit të pastër), `js` (komponent i faqes së internetit)
   Shkruani shkronjën e parë të emrit të komponentit

2. Lexoni specifikimet e kodimit për `.agents/doc/code` dhe më pas zhvilloni.

   Në `_.styl`, së pari `@import "../component name/_.styl"` për të importuar varësitë. Ju lutemi ndiqni standardet e kodimit dhe estetikën e dizajnit të [./styl.md](./styl.md).

   Modifikoni stilet e komponentëve të tjerë dhe në vend të kësaj importojini ato drejtpërdrejt, përdorni `@import` në fillim dhe çaktivizoni `extend`.

   Stili i përdorur për demonstrim është i ndaluar të shkruhet në `emri i komponentit/_.styl` dhe të shkruhet në `demo/_.styl`.

   Për komponentin `js`, zhvillojeni atë sipas procesit [webc.js.md](./webc.js.md) (ju lutemi fshini `emrin e komponentit/_.js` për komponentët e stilit të pastër)

3. Shtypni [demo.md](./demo.md) demonstrimi i zhvillimit të procesit

4. Ekzekutoni `./test.sh` e drejtorisë rrënjësore. Rregulloni gabimet dhe alarmet, nxjerrni funksionet, optimizoni kodin dhe shmangni dyfishimin dhe tepricën. Për specifikimet e kodit, shihni `.agents/doc/code/js.md`

5. Lexoni [dbg.md](./dbg.md) dhe korrigjoni përbërësit sipas procesit

6. Ndiqni procesin [i18n.md](./i18n.md) për të zbatuar ndërkombëtarizimin e komponentëve dhe demonstrimeve dhe për të shkruar dokumente

7. Provoni përsëri dhe optimizoni kodin

8. Hapni një nën-agjent dhe telefononi `.agents/skills/js_review/SKILL.md` për të rishikuar dhe optimizuar kodin.

9. Korrigjimi përsëri