# JS-codespecificatie

## codeerstijl

- Eenvoudig, elegant en efficiënt, met behulp van de modernste js-syntaxis
- Als u te lange functies opsplitst, moet het interface-ontwerp een lage koppeling en hoge cohesie hebben.
- Gebruik meer arrays + loops/forEach/map en schrijf minder repetitieve code
- Schrijf geen functieopmerkingen in eenvoudige code om overmatig commentaar te voorkomen. Complexe logica en speciale behoeften worden in verfijnd Chinees uitgelegd.
- Herhaalde code wordt geabstraheerd in functies om redundantie te verminderen. `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` kan bijvoorbeeld worden geschreven als `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variabele declaratie: Combineer meerdere opeenvolgende `const` declaraties in één statement. In plaats van het in drie regels te schrijven, schrijft u `const a=1, b=2, c=3;`
- Asynchrone verwerking: gebruik `await`, verbied het gebruik van `.then` kettingaanroepen
- Genereer niet automatisch code voor het afhandelen van uitzonderingen, schrijf niet automatisch `try...catch` (`try ... catch` wordt handmatig onderhouden, bestaande `try catch` mag niet worden verwijderd)
- Eerst pure functies: schrijf alleen pure functies, nooit klassen
- Gebruik pijlfuncties `const funcName = () => {}` en gebruik niet het trefwoord `function` (behalve generatoren); als u .bind kunt gebruiken om parameters te binden, vermijd dan het definiëren van functies
- Hergebruik van code: Besteed aandacht aan hergebruik, extraheer meer kleine functies en vermijd resoluut een groot aantal vergelijkbare of gekopieerde codestructuren.
- Objecttoegang: Geef prioriteit aan het gebruik van destructurerende toewijzing om vereiste attributen te extraheren, vermijd herhaaldelijk intern gebruik van punten om toegang te krijgen tot diepe en geneste attributen, en voeg herhaalde optionele ketenbeoordelingen samen
- Gebruik geen objecten voor functieparameters, schrijf niet `{a,b,c}`, schrijf `a, b, c`; als er veel optionele parameters zijn, gebruik dan [[aantal configuratie-items, configuratie-items], [aantal configuratie-items, configuratie-items],..] In dit paradigma worden configuratie-items gedefinieerd met numerieke constanten
- Voor retourneringen met meerdere waarden gebruikt u array `[a,b,c]` in plaats van `{a,b,c}`. Als er meer dan 3 retourwaarden zijn, gebruik dan numerieke constanten om de positionele betekenis te definiëren.
- Er is geen string nodig om de staat weer te geven; gebruik numerieke constanten om de staat te definiëren
- Er wordt geen tekenreekssjabloon (``) gebruikt, tekenreeksaaneenschakeling (+) wordt gebruikt, behalve voor import (handig voor statische analyse van Vite)
- For loop: als je een serienummer nodig hebt, gebruik dan `++i` in plaats van `i++`
- Vermijd onnodig`?.` en verbied defensieve programmering
- De variabelenaam hoeft geen meervoud te zijn en eindigt met `_li` om een ​​lijst aan te geven.

## Naamgevingsconventie

- De naamgeving streeft naar minimalisme. Gebruik korte maar betekenisvolle namen, bijvoorbeeld: gebruik `rm` in plaats van `remove`, `delete`, `del`. Je moet echter ook voorkomen dat je tot het uiterste gaat, bijvoorbeeld: gebruik geen enkele letter `m` in plaats van `map`
- Probeer alleen werkwoorden te gebruiken bij het benoemen van functies. Als je één woord kunt gebruiken om het uit te drukken, gebruik dan niet twee woorden. Zelfstandige naamwoorden worden weerspiegeld in bestandsnamen. Als u een werkwoord aan de bestandsnaam moet toevoegen, plaatst u het zelfstandig naamwoord eerst en het werkwoord als laatste. Bijvoorbeeld: `profileSet.js` in plaats van `setProfile.js`
- Variabelenaam: gebruik de onderstrepingsstijl (snake_case), bijvoorbeeld `user_auth_token`; als de variabele een functie is, gebruik dan de naamgevingsstijl in kleine letters
- Functienaam: Gebruik kleine letters camelCase (camelCase), bijvoorbeeld `userData`
- Functieparameters: als het een callback-functie is, noem deze dan in kleine letters camel, zoals `onChange`
- Constante definities op moduleniveau gebruiken de onderstreepte stijl `UPPER_SNAKE_CASE` in hoofdletters
- Schrijf geen `get`, zulke betekenisloze voorvoegsels, zoals: schrijf `cookieByHeader` in plaats van `getCookie`
- Globale/module-niveau constanten: gebruik hoofdletters en onderstreepte stijl (UPPER_SNAKE_CASE), b.v. `CODE_TO_ID`, `ID_TO_LANG`

## Modulair mechanisme

- Importeren: importeer functies nauwkeurig op aanvraag, verbied directe import van de hele module (vermijd `import * as x` of importeer grote objecten)
- Exporteren: Schakel het exporteren van objecten uit. Exporteer functies en variabelen als eenheden, zoals `export const X=1, abc=()=>{};`. Probeer ze te combineren met een const + komma om de geëxporteerde inhoud te declareren. Als een bestand slechts één functie heeft, gebruik dan `export default`
- Tenzij u de exportstandaardfunctie intern moet aanroepen, moet u voorkomen dat u eerst constanten declareert en deze vervolgens aan het einde van het bestand exporteert.
- Padresolutie: bij het verkrijgen van het huidige mappad moet `import.meta.dirname` worden gebruikt

## fout

- Vermijd stringfouten en gebruik const om constante foutcodes te declareren.
- Als u verkeerde gegevensinformatie moet retourneren, gebruikt u [foutcode, foutmelding,...] Op deze manier is de foutmelding geen tekstbeschrijving, maar een numerieke waarde (zoals [FILE_OVERSIZE, file_size, max_size])
-

## Probeer browser-compatibele API's te gebruiken

- Codering en decodering: Forceer het gebruik van de native Web Crypto API
- Binaire gegevens: Probeer `Uint8Array` uniform te gebruiken als u met binaire gegevens werkt