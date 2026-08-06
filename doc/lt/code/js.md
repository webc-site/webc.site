# JS kodo specifikacija

## kodavimo stilius

- Paprasta, elegantiška ir efektyvi, naudojant moderniausią js sintaksę
- Padalinkite per ilgas funkcijas, o sąsajos dizainas turėtų būti mažas sujungimas ir didelė sanglauda.
- Daugiau naudokite masyvus + kilpas/forEach/map ir rašykite mažiau pasikartojančio kodo
- Nerašykite funkcijų komentarų paprastu kodu, kad išvengtumėte perteklinių komentarų. Sudėtinga logika ir specialieji poreikiai paaiškinami rafinuota kinų kalba.
- Pakartotinis kodas yra abstrahuojamas į funkcijas, kad būtų sumažintas perteklius. Pavyzdžiui, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` gali būti parašytas kaip `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Kintamojo deklaracija: sujunkite kelias iš eilės `const` deklaracijas į vieną teiginį. Užuot rašę trimis eilutėmis, parašykite `const a=1, b=2, c=3;`
- Asinchroninis apdorojimas: naudoti `await`, uždrausti naudoti `.then` grandininius skambučius
- Automatiškai negeneruoti išimčių tvarkymo kodo, automatiškai nerašyti `try...catch` (`try ... catch` tvarkoma rankiniu būdu, esamas `try catch` neturėtų būti ištrintas)
- Pirmiausia grynos funkcijos: rašykite tik grynas funkcijas, o ne klases
- Naudokite rodyklių funkcijas `const funcName = () => {}` ir nenaudokite `function` raktinio žodžio (išskyrus generatorius); jei galite naudoti .bind parametrams susieti, venkite apibrėžti funkcijas
- Pakartotinis kodo naudojimas: atkreipkite dėmesį į pakartotinį naudojimą, išskirkite daugiau mažų funkcijų ir ryžtingai venkite daugybės panašių arba nukopijuotų kodo struktūrų.
- Prieiga prie objekto: suteikite pirmenybę naikinimo priskyrimui, kad išgautumėte reikiamus atributus, venkite pakartotinai naudoti taškus, kad pasiektumėte giluminius ir įdėtus atributus, ir sujunkite pasikartojančius pasirenkamus grandinės sprendimus.
- Nenaudokite objektų funkcijų parametrams, nerašykite `{a,b,c}`, rašykite `a, b, c`; jei yra daug pasirenkamų parametrų, naudokite [[konfigūracijos elementų skaičius, konfigūracijos elementai], [konfigūracijos elementų skaičius, konfigūracijos elementai],..] Šioje paradigmoje konfigūracijos elementai apibrėžiami skaitinėmis konstantomis
- Kelių reikšmių grąžinimui naudokite masyvą `[a,b,c]`, o ne `{a,b,c}`. Jei yra daugiau nei 3 grąžinamos reikšmės, naudokite skaitines konstantas, kad apibrėžtumėte padėties reikšmę.
- Nereikia eilutės, kuri pavaizduotų būseną, naudokite skaitines konstantas būsenai apibrėžti
- Nenaudojamas joks eilutės šablonas (``), naudojamas eilučių sujungimas (+), išskyrus importavimą (patogus Vite statinei analizei)
- Ciklui, jei reikia serijos numerio, naudokite `++i` vietoj `i++`
- Venkite bereikalingo`?.`ir uždrausti gynybinį programavimą
- Kintamojo pavadinimas nebūtinai turi būti daugiskaitos ir baigiasi `_li`, kad būtų nurodytas sąrašas.

## Vardų suteikimo konvencija

- Pavadinimas siekia minimalizmo. Naudokite trumpus, bet prasmingus pavadinimus, pavyzdžiui: naudokite `rm` vietoj `remove`, `delete`, `del`. Tačiau taip pat neturėtumėte pulti į kraštutinumus, pavyzdžiui: nenaudokite vienos raidės `m` vietoj `map`
- Pabandykite naudoti tik veiksmažodžius suteikdami funkcijas. Jei galite jį išreikšti vienu žodžiu, nenaudokite dviejų žodžių. Daiktavardžiai atsispindi failų pavadinimuose. Jei prie failo pavadinimo reikia pridėti veiksmažodį, pirmiausia nurodykite daiktavardį ir paskutinį. Pavyzdžiui: `profileSet.js` vietoj `setProfile.js`
- Kintamųjų pavadinimai: naudokite apatinio brūkšnio stilių (snake_case), pvz., `user_auth_token`
- Funkcijos pavadinimas: naudokite mažąsias camelCase (camelCase), pavyzdžiui, `userData`
- Funkcijos parametrai: jei tai atgalinio skambinimo funkcija, pavadinkite ją mažosiomis kupranugario didžiosiomis raidėmis, pvz., `onChange`
- Modulio lygio pastovūs apibrėžimai naudoja didžiųjų raidžių pabraukimo stilių `UPPER_SNAKE_CASE`
- Nerašykite `get`, tokių beprasmių priešdėlių, pvz.: Rašykite `cookieByHeader` vietoj `getCookie`
- Visuotinės/modulio lygio konstantos: naudokite didžiųjų raidžių pabraukimo stilių (UPPER_SNAKE_CASE), pvz. `CODE_TO_ID`, `ID_TO_LANG`

## Modulinis mechanizmas

- Importavimas: tiksliai importuokite funkcijas pagal poreikį, uždrauskite tiesioginį viso modulio importą (venkite `import * as x` arba importuokite didelius objektus)
- Eksportuoti: išjungti objektų eksportą. Eksportuokite funkcijas ir kintamuosius kaip vienetus, pvz., `export const X=1, abc=()=>{};`. Pabandykite juos sujungti su const + kableliu, kad deklaruotumėte eksportuotą turinį. Jei failas turi tik vieną funkciją, naudokite `export default`
- Nebent jums reikia iškviesti numatytąją eksportavimo funkciją viduje, venkite pirmiausia deklaruoti konstantas ir tada eksportuoti jas failo pabaigoje.
- Kelio skyra: kai gaunamas dabartinis katalogo kelias, reikia naudoti `import.meta.dirname`

## klaida

- Venkite eilučių klaidų ir naudokite const, kad deklaruotumėte pastovius klaidų kodus.
- Jei reikia grąžinti neteisingą duomenų informaciją, naudokite [klaidos kodas, klaidos pranešimas,...] Tokiu būdu klaidos pranešimas yra ne tekstinis aprašymas, o skaitinė reikšmė (pvz., [FILE_OVERSIZE, failo dydis, maks._dydis])
-

## Pabandykite naudoti su naršykle suderinamas API

- Šifravimas ir iššifravimas: priverskite naudoti savąją Web Crypto API
- Dvejetainiai duomenys: dirbdami su dvejetainiais, stenkitės vienodai naudoti `Uint8Array`