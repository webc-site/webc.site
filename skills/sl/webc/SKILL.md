---
name: webc
---

Sledite procesu, naredite načrt in razvijajte korak za korakom, da se izognete izpustitvam

1. Zaženite `./sh/new.js ime komponente tipa projekta` in ustvarite mapo komponente v imeniku `src`
   Vrsta projekta je lahko `css` (komponenta čistega sloga), `js` (komponenta spletne strani)
   Prvo črko imena komponente napišite z veliko začetnico

2. Preberite specifikacije kodiranja za `.agents/doc/code` in nato razvijajte.

   V `_.styl` najprej `@import "../ime komponente/_.styl"` za uvoz odvisnosti. Upoštevajte standarde kodiranja in estetiko oblikovanja [./styl.md](./styl.md).

   Spremenite sloge drugih komponent in jih namesto tega uvozite neposredno, uporabite `@import` na začetku in onemogočite `extend`.

   Sloga, uporabljenega za predstavitev, je prepovedano zapisati v `ime komponente/_.styl` in zapisati v `demo/_.styl`.

   Za komponento `js` jo razvijte v skladu s postopkom [webc.js.md](./webc.js.md) (izbrišite `ime komponente/_.js` za komponente čistega sloga)

3. Pritisnite [demo.md](./demo.md) predstavitev razvoja procesa

4. Zaženi `./test.sh` korenskega imenika. Odpravite napake in alarme, ekstrahirajte funkcije, optimizirajte kodo in se izognite podvajanju in redundanci. Za specifikacije kode glejte `.agents/doc/code/js.md`

5. Preberite [dbg.md](./dbg.md) in razhroščite komponente v skladu s postopkom

6. Sledite postopku [i18n.md](./i18n.md) za izvedbo internacionalizacije komponent in predstavitev ter pisanje dokumentov

7. Ponovno preizkusite in optimizirajte kodo

8. Odprite podzastopnika in pokličite `.agents/skills/js_review/SKILL.md`, da pregledate in optimizirate kodo.

9. Ponovno odpravljanje napak