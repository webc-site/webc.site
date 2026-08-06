# JS-koodi spetsifikatsioon

## kodeerimisstiil

- Lihtne, elegantne ja tõhus, kasutades kõige kaasaegsemat js-i süntaksit
- Jagage liiga pikad funktsioonid ja liidese disain peaks olema madala sidestusega ja suure sidususega.
- Kasutage massiive + silmuseid/forEach/map rohkem ja kirjutage vähem korduvat koodi
- Ärge kirjutage funktsioonide kommentaare lihtsas koodis, et vältida liigseid kommentaare. Keerulist loogikat ja erivajadusi selgitatakse rafineeritud hiina keeles.
- Korduv kood abstraheeritakse funktsioonideks, et vähendada liiasust. Näiteks `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` saab kirjutada kui `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Muutuja deklaratsioon: ühendage mitu järjestikust `const` deklaratsiooni üheks lauseks. Selle asemel, et kirjutada see kolmes reas, kirjutage `const a=1, b=2, c=3;`
- Asünkroonne töötlemine: kasutage `await`, keelake `.then` ahelkõnede kasutamine
- Ärge genereerige erandite käsitlemise koodi automaatselt, ärge kirjutage automaatselt `try...catch` (`try ... catch` hooldatakse käsitsi, olemasolevat `try catch` ei tohiks kustutada)
- Esmalt puhtad funktsioonid: kirjutage ainult puhtaid funktsioone, mitte kunagi klasse
- Kasutage noolefunktsioone `const funcName = () => {}` ja ärge kasutage `function` märksõna (v.a generaatorid); kui saate parameetrite sidumiseks kasutada .bind, vältige funktsioonide määratlemist
- Koodi taaskasutamine: pöörake tähelepanu korduvkasutusele, ekstraheerige rohkem väikeseid funktsioone ja vältige resoluutselt suurt hulka sarnaseid või kopeeritud koodistruktuure.
- Juurdepääs objektile: seadke prioriteediks destruktureerimisülesanne, et eraldada nõutud atribuudid, vältige korduvat sisemist punktide kasutamist sügavatele ja pesastatud atribuutidele juurdepääsuks ning ühendage korduvad valikulised ahelaotsused
- Ärge kasutage funktsiooni parameetrite jaoks objekte, ärge kirjutage `{a,b,c}`, kirjutage `a, b, c`; kui valikulisi parameetreid on palju, kasutage [[konfiguratsiooniüksuste arv, konfiguratsiooniüksused], [konfiguratsiooniüksuste arv, konfiguratsiooniüksused],..] Selles paradigmas on konfiguratsioonielemendid defineeritud numbriliste konstantidega
- Mitme väärtusega tagastamiseks kasutage massiivi `[a,b,c]`, mitte `{a,b,c}`. Kui tagastusväärtusi on rohkem kui 3, kasutage positsioonilise tähenduse määratlemiseks arvkonstante.
- Oleku esitamiseks pole stringi vaja, oleku määratlemiseks kasutage arvkonstante
- Stringimalle (``) ei kasutata, kasutatakse stringide ühendamist (+), välja arvatud importimisel (mugav Vite staatilise analüüsi jaoks)
- Kui vajate tsükli jaoks seerianumbrit, kasutage `i++` asemel `++i`
- Vältige tarbetut`?.` ja keelake kaitseprogrammeerimine
- Muutuja nimi ei pea olema mitmuses ja loendi tähistamiseks lõpeb see `_li`-ga.

## Nimekokkulepe

- Nimetus taotleb minimalismi. Kasutage lühikesi, kuid tähendusrikkaid nimesid, näiteks: kasutage `rm`, mitte `remove`, `delete`, `del`. Siiski tuleks vältida ka äärmustesse laskumist, näiteks: ära kasuta `map` asemel üht tähte `m`
- Proovige funktsioonide nimetamisel kasutada ainult tegusõnu. Kui saate selle väljendamiseks kasutada ühte sõna, ärge kasutage kahte sõna. Nimisõnad kajastuvad failinimedes. Kui teil on vaja failinimele lisada tegusõna, pange nimisõna esikohale ja tegusõna viimaseks. Näiteks: `profileSet.js` asemel `setProfile.js`
- Muutuja nimi: kasutage allakriipsutusstiili (snake_case), näiteks `user_auth_token`; kui muutuja on funktsioon, kasutage väiketähti kaameli suurtähtede nimetamise stiili
- Funktsiooni nimi: kasutage väiketähti camelCase (camelCase), näiteks `userData`
- Funktsiooni parameetrid: kui see on tagasihelistamise funktsioon, nimetage see kaameli väiketähtedega, näiteks `onChange`
- Moodulitaseme konstantide määratlused kasutavad suurtähtedega allakriipsutusstiili `UPPER_SNAKE_CASE`
- Ärge kirjutage `get`, selliseid mõttetuid eesliiteid, näiteks: kirjutage `cookieByHeader` asemel `getCookie`
- Globaalsed/moodulitaseme konstandid: kasutage suurtähtedega allakriipsutusstiili (UPPER_SNAKE_CASE), nt. `CODE_TO_ID`, `ID_TO_LANG`

## Modulaarne mehhanism

- Import: impordi funktsioonid täpselt nõudmisel, keelake kogu mooduli otsene import (vältige `import * as x` või importige suuri objekte)
- Eksport: keelake objektide eksport. Ekspordi funktsioonid ja muutujad ühikutena, näiteks `export const X=1, abc=()=>{};`. Eksporditud sisu deklareerimiseks proovige neid kombineerida const + komadega. Kui failil on ainult üks funktsioon, kasutage `export default`
- Kui teil pole vaja ekspordi vaikefunktsiooni sisemiselt kutsuda, vältige esmalt konstantide deklareerimist ja seejärel nende eksportimist faili lõpus.
- Tee eraldusvõime: praeguse kataloogi tee hankimisel tuleb kasutada `import.meta.dirname`

## viga

- Vältige stringivigu ja kasutage konstantsete veakoodide deklareerimiseks käsku const.
- Kui teil on vaja tagastada vale andmeteave, kasutage [veakood, veateade,...] Sel viisil ei ole veateade tekstiline kirjeldus, vaid arvväärtus (nt [FILE_OVERSIZE, file_size, max_size])
-

## Proovige kasutada brauseriga ühilduvaid API-sid

- Krüpteerimine ja dekrüpteerimine: sundige kasutama natiivset Web Crypto API-d
- Binaarandmed: binaarandmetega tegelemisel proovige kasutada `Uint8Array` ühtselt