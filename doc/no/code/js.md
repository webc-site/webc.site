# JS-kodespesifikasjon

## kodestil

- Enkel, elegant og effektiv, med den mest moderne js-syntaksen
- Del altfor lange funksjoner, og grensesnittdesignet skal være lav kobling og høy kohesjon.
- Bruk arrays + loops/forEach/map mer og skriv mindre repeterende kode
- Ikke skriv funksjonskommentarer i enkel kode for å unngå overdrevne kommentarer. Kompleks logikk og spesielle behov er forklart på raffinert kinesisk.
- Gjentatt kode abstraheres til funksjoner for å redusere redundans. For eksempel kan `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` skrives som `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variabel erklæring: Kombiner flere påfølgende `const` erklæringer til én setning. I stedet for å skrive det på tre linjer, skriv `const a=1, b=2, c=3;`
- Asynkron behandling: bruk `await`, forby bruk av `.then` kjedeanrop
- Ikke generer unntakshåndteringskode automatisk, ikke skriv `try...catch` automatisk (`try ... catch` vedlikeholdes manuelt, eksisterende `try catch` skal ikke slettes)
- Rene funksjoner først: skriv bare rene funksjoner, aldri klasser
- Bruk pilfunksjoner `const funcName = () => {}` og ikke bruk `function` nøkkelordet (unntatt generatorer); Hvis du kan bruke .bind for å binde parametere, unngå å definere funksjoner
- Kodegjenbruk: Vær oppmerksom på gjenbruk, trekk ut flere små funksjoner, og unngå resolutt et stort antall lignende eller kopiert limte kodestrukturer.
- Objekttilgang: Prioriter bruk av destruktureringstilordning for å trekke ut nødvendige attributter, unngå gjentatt bruk av prikker internt for å få tilgang til dype og nestede attributter, og slå sammen gjentatte valgfrie kjedevurderinger
- Ikke bruk objekter for funksjonsparametere, ikke skriv `{a,b,c}`, skriv `a, b, c`; hvis det er mange valgfrie parametere, bruk [[antall konfigurasjonselementer, konfigurasjonselementer], [antall konfigurasjonselementer, konfigurasjonselementer],..] I dette paradigmet er konfigurasjonselementer definert med numeriske konstanter
- For returer med flere verdier, bruk array `[a,b,c]` i stedet for `{a,b,c}`. Hvis det er mer enn 3 returverdier, bruk numeriske konstanter for å definere posisjonsbetydningen.
- Det er ikke behov for en streng for å representere tilstanden, bruk numeriske konstanter for å definere tilstanden
- Ingen strengmal (``) brukes, strengsammenkobling (+) brukes, bortsett fra import (praktisk for statisk Vite-analyse)
- For loop, hvis du trenger et serienummer, bruk `++i` i stedet for `i++`
- Unngå unødvendig`?.` og forby defensiv programmering
- Variabelnavnet trenger ikke være flertall, og slutter med `_li` for å indikere en liste.

## Navnekonvensjon

- Navngivningen forfølger minimalisme. Bruk korte, men meningsfulle navn, for eksempel: bruk `rm` i stedet for `remove`, `delete`, `del`. Du bør imidlertid også unngå å gå til ekstremer, for eksempel: ikke bruk en enkelt bokstav `m` i stedet for `map`
- Prøv å bruke bare verb i funksjonsnavn. Hvis du kan bruke ett ord for å uttrykke det, ikke bruk to ord. Substantiv gjenspeiles i filnavn. Hvis du trenger å legge til et verb i filnavnet, sett substantivet først og verbet sist. For eksempel: `profileSet.js` i stedet for `setProfile.js`
- Variabelnavn: bruk understrekingsstil (snake_case), for eksempel `user_auth_token`
- Funksjonsnavn: Bruk små bokstaver camelCase (camelCase), for eksempel `userData`
- Funksjonsparametere: Hvis det er en tilbakeringingsfunksjon, navngi den med små bokstaver, for eksempel `onChange`
- Konstantdefinisjoner på modulnivå bruker understreking med store bokstaver `UPPER_SNAKE_CASE`
- Ikke skriv `get`, slike meningsløse prefikser, som: skriv `cookieByHeader` i stedet for `getCookie`
- Globale konstanter/konstanter på modulnivå: bruk understreking med store bokstaver (UPPER_SNAKE_CASE), f.eks. `CODE_TO_ID`, `ID_TO_LANG`

## Modulær mekanisme

- Import: Importer funksjoner nøyaktig på forespørsel, forby direkte import av hele modulen (unngå `import * as x` eller importer store objekter)
- Eksport: Deaktiver eksport av objekter. Eksporter funksjoner og variabler som enheter, for eksempel `export const X=1, abc=()=>{};`. Prøv å kombinere dem med en const + komma for å deklarere det eksporterte innholdet. Hvis en fil bare har én funksjon, bruk `export default`
- Med mindre du trenger å kalle eksportstandardfunksjonen internt, unngå å deklarere konstanter først og deretter eksportere dem på slutten av filen.
- Baneoppløsning: Når du får den gjeldende katalogbanen, må `import.meta.dirname` brukes

## feil

- Unngå strengfeil og bruk const for å erklære konstante feilkoder.
- Hvis du trenger å returnere feil datainformasjon, bruk [feilkode, feilmelding,...] På denne måten er ikke feilmeldingen en tekstbeskrivelse, men en numerisk verdi (som [FILE_OVERSIZE, file_size, max_size])
-

## Prøv å bruke nettleserkompatible APIer

- Kryptering og dekryptering: Tving bruk av native Web Crypto API
- Binære data: Når du arbeider med binær, prøv å bruke `Uint8Array` enhetlig