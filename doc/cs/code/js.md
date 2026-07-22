# Specifikace kódu JS

## styl kódování

- Jednoduché, elegantní a efektivní, využívající nejmodernější syntaxi js
- Rozdělte příliš dlouhé funkce a design rozhraní by měl mít nízkou vazbu a vysokou soudržnost.
- Více používejte pole + loops/forEach/map a pište méně opakující se kód
- Nepište komentáře funkcí v jednoduchém kódu, abyste se vyhnuli přebytečným komentářům. Složitá logika a speciální potřeby jsou vysvětleny v rafinované čínštině.
- Opakovaný kód je abstrahován do funkcí, aby se snížila redundance. Například `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` lze zapsat jako `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklarace proměnné: Kombinujte více po sobě jdoucích `const` deklarací do jednoho příkazu. Namísto psaní na tři řádky napište `const a=1, b=2, c=3;`
- Asynchronní zpracování: použijte `await`, zakažte použití řetězových volání `.then`
- Negenerovat automaticky kód zpracování výjimek, nezapisovat automaticky `try...catch` (`try ... catch` se udržuje ručně, stávající `try catch` by se nemělo mazat)
- Nejprve čisté funkce: pište pouze čisté funkce, nikdy třídy
- Používejte funkce šipek `const funcName = () => {}` a nepoužívejte klíčové slovo `function` (kromě generátorů); pokud můžete použít .bind k navázání parametrů, vyhněte se definování funkcí
- Opětovné použití kódu: Věnujte pozornost opětovnému použití, extrahujte více malých funkcí a rozhodně se vyhněte velkému počtu podobných nebo kopírovaných struktur kódu.
- Přístup k objektu: Upřednostňujte použití destrukčního přiřazení k extrakci požadovaných atributů, vyhněte se opakovanému používání teček interně pro přístup k hlubokým a vnořeným atributům a slučujte opakované volitelné úsudky řetězce
- Nepoužívejte objekty pro parametry funkcí, nepište `{a,b,c}`, pište `a, b, c`; pokud existuje mnoho volitelných parametrů, použijte [[počet položek konfigurace, položky konfigurace], [počet položek konfigurace, položky konfigurace],..] V tomto paradigmatu jsou položky konfigurace definovány pomocí číselných konstant
- Pro návraty s více hodnotami použijte pole `[a,b,c]` namísto `{a,b,c}`. Pokud existují více než 3 návratové hodnoty, použijte k definování pozičního významu číselné konstanty.
- Pro reprezentaci stavu není potřeba řetězec, k definování stavu použijte číselné konstanty
- Není použita žádná šablona řetězce (``), používá se zřetězení řetězců (+), kromě importu (vhodné pro statickou analýzu Vite)
- Pro smyčku, pokud potřebujete sériové číslo, použijte `++i` místo `i++`
- Vyhněte se zbytečným`?.`a zakažte obranné programování
- Název proměnné nemusí být množné číslo a končí na `_li` pro označení seznamu.

## Konvence pojmenování

- Pojmenování sleduje minimalismus. Používejte krátké, ale smysluplné názvy, například: použijte `rm` místo `remove`, `delete`, `del`. Měli byste se však také vyhnout zacházení do extrémů, například: nepoužívejte jediné písmeno `m` místo `map`
- Pokuste se v pojmenování funkcí používat pouze slovesa. Pokud to můžete vyjádřit jedním slovem, nepoužívejte dvě slova. Podstatná jména se odrážejí v názvech souborů. Pokud potřebujete k názvu souboru přidat sloveso, uveďte podstatné jméno jako první a sloveso jako poslední. Například: `profileSet.js` místo `setProfile.js`
- Název proměnné: použijte styl podtržení (snake_case), například `user_auth_token`; pokud je proměnná funkce, použijte styl pojmenování velbloudí malými písmeny
- Název funkce: Použijte malá písmena camelCase (camelCase), například `userData`
- Parametry funkce: Pokud se jedná o funkci zpětného volání, pojmenujte ji malými písmeny velblouda, například `onChange`
- Definice konstant na úrovni modulu používají styl podtržení velkými písmeny `UPPER_SNAKE_CASE`
- Nepište `get`, takové nesmyslné předpony, jako například: napište `cookieByHeader` místo `getCookie`
- Globální/modulové konstanty: použijte styl podtržení velkými písmeny (UPPER_SNAKE_CASE), např. `CODE_TO_ID`, `ID_TO_LANG`

## Modulární mechanismus

- Import: Přesný import funkcí na vyžádání, zákaz přímého importu celého modulu (vyhněte se `import * as x` nebo importujte velké objekty)
- Export: Zakáže export objektů. Export funkcí a proměnných jako jednotek, například `export const X=1, abc=()=>{};`. Zkuste je zkombinovat s const + čárka, abyste deklarovali exportovaný obsah. Pokud má soubor pouze jednu funkci, použijte `export default`
- Pokud nepotřebujete volat výchozí funkci exportu interně, vyhněte se nejprve deklarování konstant a jejich následnému exportu na konci souboru.
- Rozlišení cesty: Při získávání aktuální cesty k adresáři je nutné použít `import.meta.dirname`

## chyba

- Vyhněte se řetězcovým chybám a použijte const k deklaraci konstantních chybových kódů.
- Pokud potřebujete vrátit nesprávné informace o datech, použijte [chybový kód, chybová zpráva,...] Chybová zpráva tak není textový popis, ale číselná hodnota (např. [FILE_OVERSIZE, file_size, max_size])
-

## Zkuste použít rozhraní API kompatibilní s prohlížečem

- Šifrování a dešifrování: Vynutí použití nativního rozhraní Web Crypto API
- Binární data: Při práci s binárními daty se snažte používat `Uint8Array` jednotně