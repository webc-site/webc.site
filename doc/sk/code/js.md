# Špecifikácia kódu JS

## štýl kódovania

- Jednoduché, elegantné a efektívne s použitím najmodernejšej syntaxe js
- Rozdeľte príliš dlhé funkcie a dizajn rozhrania by mal mať nízku väzbu a vysokú súdržnosť.
- Viac používajte polia + slučky/pre každého/mapu a píšte menej opakujúci sa kód
- Nepíšte komentáre funkcií v jednoduchom kóde, aby ste sa vyhli nadmerným komentárom. Zložitá logika a špeciálne potreby sú vysvetlené v rafinovanej čínštine.
- Opakovaný kód je abstrahovaný do funkcií, aby sa znížila nadbytočnosť. Napríklad `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` možno napísať ako `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklarácia premennej: Skombinujte viaceré po sebe idúce `const` deklarácie do jedného príkazu. Namiesto toho, aby ste to písali do troch riadkov, napíšte `const a=1, b=2, c=3;`
- Asynchrónne spracovanie: použite `await`, zakážte používanie reťazových volaní `.then`
- Negenerovať automaticky kód spracovania výnimiek, nepísať automaticky `try...catch` (`try ... catch` sa udržiava manuálne, existujúce `try catch` by sa nemalo vymazať)
- Najprv čisté funkcie: píšte iba čisté funkcie, nikdy nie triedy
- Použite šípkové funkcie `const funcName = () => {}` a nepoužívajte kľúčové slovo `function` (okrem generátorov); ak môžete použiť .bind na viazanie parametrov, vyhnite sa definovaniu funkcií
- Opätovné použitie kódu: Venujte pozornosť opätovnému použitiu, extrahujte viac malých funkcií a rozhodne sa vyhnite veľkému počtu podobných alebo kopírovaním vložených štruktúr kódu.
- Prístup k objektu: Uprednostňujte používanie deštruktívneho priradenia na extrahovanie požadovaných atribútov, vyhýbajte sa opakovanému internému používaniu bodiek na prístup k hlbokým a vnoreným atribútom a zlučujte opakované voliteľné reťazové úsudky
- Nepoužívať objekty pre parametre funkcií, nepísať `{a,b,c}`, písať `a, b, c`; ak existuje veľa voliteľných parametrov, použite [[počet konfiguračných položiek, konfiguračných položiek], [počet konfiguračných položiek, konfiguračných položiek],..] V tejto paradigme sú konfiguračné položky definované číselnými konštantami
- Pre návraty s viacerými hodnotami použite pole `[a,b,c]` namiesto `{a,b,c}`. Ak existujú viac ako 3 návratové hodnoty, definujte význam polohy pomocou číselných konštánt.
- Na vyjadrenie stavu nie je potrebný reťazec, na definovanie stavu použite číselné konštanty
- Nepoužíva sa šablóna reťazca (``), používa sa zreťazenie reťazcov (+), okrem importu (vhodné pre statickú analýzu Vite)
- Pre slučku, ak potrebujete sériové číslo, použite `++i` namiesto `i++`
- Vyhnite sa zbytočným`?.`a zakážte obranné programovanie
- Názov premennej nemusí byť množné číslo a končí na `_li` na označenie zoznamu.

## Konvencia pomenovania

- Pomenovanie sleduje minimalizmus. Použite krátke, ale zmysluplné názvy, napríklad: použite `rm` namiesto `remove`, `delete`, `del`. Mali by ste sa však vyhnúť aj extrémom, napríklad: nepoužívajte jediné písmeno `m` namiesto `map`
- Pokúste sa použiť iba slovesá v pomenovaní funkcií. Ak to dokážete vyjadriť jedným slovom, nepoužívajte dve slová. Podstatné mená sa odrážajú v názvoch súborov. Ak potrebujete k názvu súboru pridať sloveso, uveďte podstatné meno ako prvé a sloveso ako posledné. Napríklad: `profileSet.js` namiesto `setProfile.js`
- Názov premennej: použite štýl podčiarknutia (prípad_hada), napríklad `user_auth_token`; ak je premenná funkcia, použite štýl pomenovania s malými písmenami ťavy
- Názov funkcie: Použite malé písmená camelCase (camelCase), napríklad `userData`
- Parametre funkcie: Ak ide o funkciu spätného volania, pomenujte ju malými písmenami ťavy, napríklad `onChange`
- Definície konštánt na úrovni modulu používajú štýl podčiarknutia veľkými písmenami `UPPER_SNAKE_CASE`
- Nepíšte `get`, také nezmyselné predpony, ako napríklad: napíšte `cookieByHeader` namiesto `getCookie`
- Globálne/modulové konštanty: použite štýl podčiarknutia veľkými písmenami (UPPER_SNAKE_CASE), napr. `CODE_TO_ID`, `ID_TO_LANG`

## Modulárny mechanizmus

- Import: Presný import funkcií na požiadanie, zákaz priameho importu celého modulu (vyhnite sa `import * as x` alebo importujte veľké objekty)
- Export: Zakázať export objektov. Exportujte funkcie a premenné ako jednotky, napríklad `export const X=1, abc=()=>{};`. Skúste ich skombinovať so znakom const + čiarka, aby ste deklarovali exportovaný obsah. Ak má súbor iba jednu funkciu, použite `export default`
- Ak nepotrebujete interne volať predvolenú funkciu exportu, vyhnite sa najprv deklarovaniu konštánt a ich následnému exportu na konci súboru.
- Rozlíšenie cesty: Pri získavaní aktuálnej cesty k adresáru je potrebné použiť `import.meta.dirname`

## omyl

- Vyhnite sa reťazcovým chybám a použite const na deklarovanie konštantných chybových kódov.
- Ak potrebujete vrátiť nesprávne údaje, použite [chybový kód, chybové hlásenie,...] Chybové hlásenie tak nie je textový popis, ale číselná hodnota (napríklad [FILE_OVERSIZE, file_size, max_size])
-

## Skúste použiť rozhrania API kompatibilné s prehliadačom

- Šifrovanie a dešifrovanie: Vynútiť použitie natívneho webového rozhrania API kryptomien
- Binárne údaje: Pri práci s binárnymi údajmi sa snažte používať `Uint8Array` jednotne