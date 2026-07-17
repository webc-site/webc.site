# JS-kodspecifikation

## kodningsstil

- Enkel, elegant och effektiv, med den modernaste js-syntaxen
- Dela upp alltför långa funktioner, och gränssnittsdesignen ska vara låg koppling och hög sammanhållning.
- Använd arrayer + loops/forEach/map mer och skriv mindre repetitiv kod
- Skriv inte funktionskommentarer i enkel kod för att undvika överdrivna kommentarer. Komplex logik och speciella behov förklaras på förfinad kinesiska.
- Upprepad kod abstraheras till funktioner för att minska redundans. Till exempel kan `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` skrivas som `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variabel deklaration: Kombinera flera på varandra följande `const` deklarationer till en sats. Istället för att skriva det på tre rader, skriv `const a=1, b=2, c=3;`
- Asynkron bearbetning: använd `await`, förbjud användningen av `.then` kedjeanrop
- Generera inte undantagshanteringskod automatiskt, skriv inte automatiskt `try...catch` (`try ... catch` underhålls manuellt, befintliga `try catch` ska inte tas bort)
- Rena funktioner först: skriv bara rena funktioner, aldrig klasser
- Använd pilfunktioner `const funcName = () => {}` och använd inte nyckelordet `function` (förutom generatorer); Om du kan använda .bind för att binda parametrar, undvik att definiera funktioner
- Återanvändning av kod: Var uppmärksam på återanvändning, extrahera fler små funktioner och undvik resolut ett stort antal liknande eller kopierade kodstrukturer.
- Objektåtkomst: Prioritera att använda destruktureringstilldelning för att extrahera nödvändiga attribut, undvik att upprepade gånger använda punkter internt för att komma åt djupa och kapslade attribut och slå samman upprepade valfria kedjebedömningar
- Använd inte objekt för funktionsparametrar, skriv inte `{a,b,c}`, skriv `a, b, c`; om det finns många valfria parametrar, använd [[antal konfigurationsobjekt, konfigurationsobjekt], [antal konfigurationsobjekt, konfigurationsobjekt],..] I detta paradigm definieras konfigurationsobjekt med numeriska konstanter
- För returer med flera värden, använd array `[a,b,c]` istället för `{a,b,c}`. Om det finns fler än 3 returvärden, använd numeriska konstanter för att definiera den positionella betydelsen.
- Det finns inget behov av en sträng för att representera tillståndet, använd numeriska konstanter för att definiera tillståndet
- Ingen strängmall (``) används, strängsammansättning (+) används, förutom för import (bekvämt för Vite statisk analys)
- För loop, om du behöver ett serienummer, använd `++i` istället för `i++`
- Undvik onödig`?.`och förbjud defensiv programmering
- Variabelnamnet behöver inte vara plural, och slutar med `_li` för att indikera en lista.

## Namnkonvention

- Namnet eftersträvar minimalism. Använd korta men meningsfulla namn, till exempel: använd `rm` istället för `remove`, `delete`, `del`. Men du bör också undvika att gå till extremer, till exempel: använd inte en enda bokstav `m` istället för `map`
- Försök att bara använda verb i funktionsnamn. Om du kan använda ett ord för att uttrycka det, använd inte två ord. Substantiv återspeglas i filnamn. Om du behöver lägga till ett verb till filnamnet, skriv substantivet först och verbet sist. Till exempel: `profileSet.js` istället för `setProfile.js`
- Variabelnamn: använd understreckstil (snake_case), till exempel `user_auth_token`
- Funktionsnamn: Använd gemener camelCase (camelCase), till exempel `userData`
- Funktionsparametrar: Om det är en återuppringningsfunktion, namnge den med gemener, till exempel `onChange`
- Konstantdefinitioner på modulnivå använder versaler understruket stil `UPPER_SNAKE_CASE`
- Skriv inte `get`, sådana meningslösa prefix, som: skriv `cookieByHeader` istället för `getCookie`
- Globala konstanter/konstanter på modulnivå: använd stil med versaler (UPPER_SNAKE_CASE), t.ex. `CODE_TO_ID`, `ID_TO_LANG`

## Modulär mekanism

- Import: Importera fungerar korrekt på begäran, förbjud direkt import av hela modulen (undvik `import * as x` eller importera stora objekt)
- Export: Inaktivera export av objekt. Exportera funktioner och variabler som enheter, till exempel `export const X=1, abc=()=>{};`. Försök att kombinera dem med ett const + kommatecken för att deklarera det exporterade innehållet. Om en fil bara har en funktion, använd `export default`
- Om du inte behöver anropa exportstandardfunktionen internt, undvik att deklarera konstanter först och sedan exportera dem i slutet av filen.
- Sökvägsupplösning: När den aktuella katalogsökvägen hämtas måste `import.meta.dirname` användas

## misstag

- Undvik strängfel och använd const för att deklarera konstanta felkoder.
- Om du behöver returnera felaktig datainformation, använd [felkod, felmeddelande,...] På så sätt är felmeddelandet inte en textbeskrivning, utan ett numeriskt värde (som [FILE_OVERSIZE, file_size, max_size])
-

## Försök att använda webbläsarkompatibla API:er

- Kryptering och dekryptering: Tvinga fram användningen av inbyggt Web Crypto API
- Binära data: När du hanterar binär data, försök att använda `Uint8Array` enhetligt