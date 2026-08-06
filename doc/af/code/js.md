# JS kode spesifikasie

## kodering styl

- Eenvoudig, elegant en doeltreffend, met behulp van die mees moderne js-sintaksis
- Verdeel té lang funksies, en die koppelvlakontwerp moet lae koppeling en hoë kohesie wees.
- Gebruik skikkings + lusse/virElke/kaart meer en skryf minder herhalende kode
- Moenie funksie-opmerkings in eenvoudige kode skryf om oormatige opmerkings te vermy nie. Komplekse logika en spesiale behoeftes word in verfynde Chinees verduidelik.
- Herhaalde kode word in funksies geabstraheer om oortolligheid te verminder. Byvoorbeeld, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` kan geskryf word as `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Veranderlike verklaring: Kombineer veelvuldige opeenvolgende `const` verklarings in een stelling. In plaas daarvan om dit in drie reëls te skryf, skryf `const a=1, b=2, c=3;`
- Asinchroniese verwerking: gebruik `await`, verbied die gebruik van `.then` kettingoproepe
- Moenie outomaties uitsonderingshanteringskode genereer nie, moenie outomaties `try...catch` skryf nie (`try ... catch` word met die hand onderhou, bestaande `try catch` moet nie uitgevee word nie)
- Eerstens suiwer funksies: skryf slegs suiwer funksies, nooit klasse nie
- Gebruik pylfunksies `const funcName = () => {}` en moenie die `function` sleutelwoord gebruik nie (behalwe kragopwekkers); As jy .bind kan gebruik om parameters te bind, vermy om funksies te definieer
- Kode hergebruik: Gee aandag aan hergebruik, onttrek meer klein funksies, en vermy beslis 'n groot aantal soortgelyke of kopieergeplakte kodestrukture.
- Objektoegang: Prioritiseer die gebruik van destruktureringsopdrag om vereiste eienskappe te onttrek, vermy herhaaldelike gebruik van kolletjies intern om toegang tot diep en geneste eienskappe te verkry, en voeg herhaalde opsionele kettingoordele saam
- Moenie voorwerpe vir funksieparameters gebruik nie, moenie `{a,b,c}` skryf nie, skryf `a, b, c`; as daar baie opsionele parameters is, gebruik [[aantal konfigurasie-items, konfigurasie-items], [aantal konfigurasie-items, konfigurasie-items],..] In hierdie paradigma word konfigurasie-items gedefinieer met numeriese konstantes
- Vir multi-waarde opbrengste, gebruik skikking `[a,b,c]` in plaas van `{a,b,c}`. As daar meer as 3 terugkeerwaardes is, gebruik numeriese konstantes om die posisionele betekenis te definieer.
- Daar is geen behoefte aan 'n string om die toestand voor te stel nie, gebruik numeriese konstantes om die toestand te definieer
- Geen string sjabloon (``) word gebruik nie, string aaneenskakeling (+) word gebruik, behalwe vir invoer (gerieflik vir Vite statiese analise)
- Vir lus, as jy 'n reeksnommer benodig, gebruik `++i` in plaas van `i++`
- Vermy onnodige`?.` en verbied defensiewe programmering
- Die veranderlike naam hoef nie meervoud te wees nie, en eindig met `_li` om 'n lys aan te dui.

## Naamkonvensie

- Die naamgewing streef na minimalisme. Gebruik kort maar betekenisvolle name, byvoorbeeld: gebruik `rm` in plaas van `remove`, `delete`, `del`. Jy moet egter ook vermy om tot uiterstes te gaan, byvoorbeeld: moenie 'n enkele letter `m` in plaas van `map` gebruik nie
- Probeer om slegs werkwoorde in funksiebenoeming te gebruik. As jy een woord kan gebruik om dit uit te druk, moenie twee woorde gebruik nie. Selfstandige naamwoorde word in lêername weerspieël. As jy 'n werkwoord by die lêernaam moet voeg, plaas asseblief die selfstandige naamwoord eerste en die werkwoord laaste. Byvoorbeeld: `profileSet.js` in plaas van `setProfile.js`
- Veranderlike naam: gebruik onderstreepstyl (slanggeval), byvoorbeeld `user_auth_token`; as die veranderlike 'n funksie is, gebruik kleinletters kameelletters benoemstyl
- Funksienaam: Gebruik kleinletters camelCase (camelCase), byvoorbeeld `userData`
- Funksie parameters: As dit 'n terugbelfunksie is, noem dit in kleinletters kameelletters, soos `onChange`
- Module-vlak konstante definisies gebruik hoofletter onderstreep styl `UPPER_SNAKE_CASE`
- Moenie `get` skryf nie, sulke betekenislose voorvoegsels, soos: skryf `cookieByHeader` in plaas van `getCookie`
- Globale/modulevlakkonstantes: gebruik hoofletter-onderstreepstyl (UPPER_SNAKE_CASE), bv. `CODE_TO_ID`, `ID_TO_LANG`

## Modulêre meganisme

- Invoer: Voer funksies akkuraat in op aanvraag, verbied direkte invoer van die hele module (vermy `import * as x` of voer groot voorwerpe in)
- Uitvoer: Deaktiveer uitvoer van voorwerpe. Voer funksies en veranderlikes uit as eenhede, soos `export const X=1, abc=()=>{};`. Probeer om hulle met 'n konst + komma te kombineer om die uitgevoerde inhoud te verklaar. As 'n lêer net een funksie het, gebruik `export default`
- Tensy jy die uitvoer verstek funksie intern moet oproep, vermy eers konstantes en voer dit dan aan die einde van die lêer uit.
- Padresolusie: Wanneer die huidige gidspad verkry word, moet `import.meta.dirname` gebruik word

## fout

- Vermy stringfoute en gebruik const om konstante foutkodes te verklaar.
- As jy verkeerde data-inligting moet terugstuur, gebruik [foutkode, foutboodskap,...] Op hierdie manier is die foutboodskap nie 'n teksbeskrywing nie, maar 'n numeriese waarde (soos [FILE_OVERSIZE, file_size, max_size])
-

## Probeer om blaaierversoenbare API's te gebruik

- Enkripsie en dekripsie: Dwing die gebruik van inheemse Web Crypto API
- Binêre data: Wanneer jy met binêre handel, probeer om `Uint8Array` eenvormig te gebruik