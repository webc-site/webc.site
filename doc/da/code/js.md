# JS-kodespecifikation

## kodningsstil

- Enkel, elegant og effektiv ved at bruge den mest moderne js-syntaks
- Opdel alt for lange funktioner, og grænsefladedesignet skal være lav kobling og høj sammenhæng.
- Brug arrays + loops/forEach/map mere og skriv mindre gentagende kode
- Skriv ikke funktionskommentarer i simpel kode for at undgå overdrevne kommentarer. Kompleks logik og særlige behov forklares på raffineret kinesisk.
- Gentagen kode abstraheres til funktioner for at reducere redundans. For eksempel kan `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` skrives som `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variabel erklæring: Kombiner flere på hinanden følgende `const` erklæringer til en erklæring. I stedet for at skrive det på tre linjer, skriv `const a=1, b=2, c=3;`
- Asynkron behandling: brug `await`, forbyd brugen af ​​`.then` kædekald
- Generer ikke automatisk undtagelseshåndteringskode, skriv ikke automatisk `try...catch` (`try ... catch` vedligeholdes manuelt, eksisterende `try catch` bør ikke slettes)
- Rene funktioner først: skriv kun rene funktioner, aldrig klasser
- Brug pilefunktioner `const funcName = () => {}` og brug ikke nøgleordet `function` (undtagen generatorer); Hvis du kan bruge .bind til at binde parametre, skal du undgå at definere funktioner
- Kodegenbrug: Vær opmærksom på genbrug, udtræk flere små funktioner, og undgå resolut et stort antal lignende eller copy-indsatte kodestrukturer.
- Objektadgang: Prioriter at bruge destruktureringstildeling til at udtrække nødvendige attributter, undgå gentagne gange at bruge prikker internt for at få adgang til dybe og indlejrede attributter, og flet gentagne valgfrie kædedomme
- Brug ikke objekter til funktionsparametre, skriv ikke `{a,b,c}`, skriv `a, b, c`; hvis der er mange valgfrie parametre, brug [[antal konfigurationselementer, konfigurationselementer], [antal konfigurationselementer, konfigurationselementer],..] I dette paradigme er konfigurationselementer defineret med numeriske konstanter
- Til returnering af flere værdier skal du bruge array `[a,b,c]` i stedet for `{a,b,c}`. Hvis der er mere end 3 returværdier, skal du bruge numeriske konstanter til at definere den positionelle betydning.
- Der er ikke behov for en streng til at repræsentere tilstanden, brug numeriske konstanter til at definere tilstanden
- Der bruges ingen strengskabelon (``), strengsammenkædning (+) bruges, undtagen import (praktisk til statisk Vite-analyse)
- For loop, hvis du har brug for et serienummer, skal du bruge `++i` i stedet for `i++`
- Undgå unødvendig`?.` og forbyd defensiv programmering
- Variabelnavnet behøver ikke at være flertal, og slutter med `_li` for at angive en liste.

## Navnekonvention

- Navngivningen forfølger minimalisme. Brug korte, men meningsfulde navne, for eksempel: brug `rm` i stedet for `remove`, `delete`, `del`. Du bør dog også undgå at gå til ekstremer, for eksempel: Brug ikke et enkelt bogstav `m` i stedet for `map`
- Prøv kun at bruge verber i funktionsnavngivning. Hvis du kan bruge ét ord til at udtrykke det, skal du ikke bruge to ord. Navneord afspejles i filnavne. Hvis du har brug for at tilføje et verbum til filnavnet, skal du sætte navneordet først og udsagnsordet sidst. For eksempel: `profileSet.js` i stedet for `setProfile.js`
- Variabelnavn: brug understregningsstil (snake_case), for eksempel `user_auth_token`; hvis variablen er en funktion, skal du bruge små bogstaver til navngivning af kamel
- Funktionsnavn: Brug små bogstaver camelCase (camelCase), for eksempel `userData`
- Funktionsparametre: Hvis det er en tilbagekaldsfunktion, skal du navngive den med små kamelbogstaver, såsom `onChange`
- Konstantdefinitioner på modulniveau bruger understregningsstil med store bogstaver `UPPER_SNAKE_CASE`
- Skriv ikke `get`, sådanne meningsløse præfikser, såsom: skriv `cookieByHeader` i stedet for `getCookie`
- Globale konstanter/konstanter på modulniveau: brug understregningsstil med store bogstaver (UPPER_SNAKE_CASE), f.eks. `CODE_TO_ID`, `ID_TO_LANG`

## Modulær mekanisme

- Import: Importer funktioner nøjagtigt efter behov, forbyd direkte import af hele modulet (undgå `import * as x` eller importer store objekter)
- Eksport: Deaktiver eksport af objekter. Eksporter funktioner og variabler som enheder, såsom `export const X=1, abc=()=>{};`. Prøv at kombinere dem med et const + komma for at erklære det eksporterede indhold. Hvis en fil kun har én funktion, skal du bruge `export default`
- Medmindre du skal kalde eksportstandardfunktionen internt, skal du undgå at erklære konstanter først og derefter eksportere dem i slutningen af ​​filen.
- Stiopløsning: Når du henter den aktuelle mappesti, skal `import.meta.dirname` bruges

## fejl

- Undgå strengfejl og brug const til at erklære konstante fejlkoder.
- Hvis du skal returnere forkerte dataoplysninger, skal du bruge [fejlkode, fejlmeddelelse,...] På denne måde er fejlmeddelelsen ikke en tekstbeskrivelse, men en numerisk værdi (såsom [FILE_OVERSIZE, file_size, max_size])
-

## Prøv at bruge browser-kompatible API'er

- Kryptering og dekryptering: Tving brugen af ​​native Web Crypto API
- Binære data: Når du har at gøre med binære data, så prøv at bruge `Uint8Array` ensartet