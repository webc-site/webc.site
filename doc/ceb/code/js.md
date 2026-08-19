# Espesipikasyon sa JS code

## estilo sa coding

- Yano, elegante ug episyente, gamit ang pinakabag-o nga js syntax
- Pagbahin sa sobra ka taas nga mga gimbuhaton, ug ang disenyo sa interface kinahanglan nga ubos nga pagdugtong ug taas nga panaghiusa.
- Gamita ang mga arrays + loops/forEach/mapa og dugang ug isulat ang dili kaayo balik-balik nga code
- Ayaw isulat ang mga komento sa function sa yano nga code aron malikayan ang sobra nga mga komento. Ang komplikado nga lohika ug espesyal nga mga panginahanglan gipasabut sa dalisay nga Intsik.
- Ang gibalikbalik nga code gi-abstract sa mga function aron makunhuran ang redundancy. Pananglitan, ang `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` mahimong isulat nga `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variable nga deklarasyon: Paghiusa sa daghang sunod-sunod nga `const` deklarasyon ngadto sa usa ka pahayag. Imbes nga isulat kini sa tulo ka linya, isulat ang `const a=1, b=2, c=3;`
- Asynchronous nga pagproseso: gamita ang `await`, idili ang paggamit sa `.then` chain calls
- Ayaw pagmugna og exception handling code, ayaw pag-awtomatikong isulat ang `try...catch` (`try ... catch` mano-mano ang pagmentinar, ang kasamtangan `try catch` dili kinahanglan nga tangtangon)
- Putli nga mga gimbuhaton una: isulat lamang ang mga purong gimbuhaton, dili mga klase
- Gamit ug arrow functions `const funcName = () => {}` ug ayaw gamita ang `function` keyword (gawas sa mga generator); kung mahimo nimo gamiton ang .bind sa pagbugkos sa mga parameter, likayi ang pagtino sa mga gimbuhaton
- Paggamit pag-usab sa code: Hatagi'g pagtagad ang paggamit pag-usab, pagkuha og mas gagmay nga mga function, ug determinado nga likayan ang daghan nga susama o kopya-paste nga mga istruktura sa code.
- Pag-access sa butang: I-prioritize ang paggamit sa destructuring nga buluhaton aron makuha ang gikinahanglan nga mga hiyas, likayi ang balik-balik nga paggamit sa mga tuldok sa sulod aron ma-access ang lawom ug nested nga mga hiyas, ug i-merge ang balik-balik nga opsyonal nga mga paghukom sa kadena
- Ayaw gamita ang mga butang alang sa function parameters, ayaw pagsulat `{a,b,c}`, pagsulat `a, b, c`; kung adunay daghang opsyonal nga mga parameter, gamita ang [[gidaghanon sa mga butang sa pag-configure, mga butang sa pag-configure], [gidaghanon sa mga butang sa pag-configure, mga butang sa pag-configure],..] Niini nga paradigma, ang mga butang sa pag-configure gihubit nga adunay mga kanunay nga numero.
- Para sa multi-value returns, gamita ang array `[a,b,c]` inay `{a,b,c}`. Kung adunay labaw pa sa 3 nga mga kantidad sa pagbalik, gamita ang mga kanunay nga numero aron mahibal-an ang kahulugan sa posisyon.
- Wala kinahanglana ang usa ka hilo nga magrepresentar sa estado, gamita ang mga numeric nga kanunay aron mahibal-an ang estado
- Walay string template (``) gigamit, string concatenation (+) gigamit, gawas sa import (kombenyente alang sa Vite static analysis)
- Para sa loop, kung kinahanglan nimo ang serial number, gamita ang `++i` imbes nga `i++`
- Likayi ang dili kinahanglan`?.`ug idili ang depensibong programming
- Ang variable nga ngalan dili kinahanglan nga plural, ug natapos sa `_li` aron ipakita ang usa ka lista.

## Pagngalan sa kombensiyon

- Ang pagngalan nagsunod sa minimalism. Paggamit og mugbo apan makahuluganon nga mga ngalan, pananglitan: gamita ang `rm` imbes nga `remove`, `delete`, `del`. Hinoon, kinahanglan usab nimong likayan ang pagpasobra, pananglitan: ayaw gamita ang usa ka letra `m` inay `map`
- Sulayi nga gamiton lamang ang mga berbo sa pagngalan sa function. Kung mahimo nimong gamiton ang usa ka pulong sa pagpahayag niini, ayaw gamita ang duha ka pulong. Ang mga noun makita sa mga ngalan sa file. Kung kinahanglan nimong idugang ang usa ka berbo sa ngalan sa file, palihug ibutang ang nombre sa una ug ang berbo sa katapusan. Pananglitan: `profileSet.js` inay `setProfile.js`
- Variable nga ngalan: gamita ang underline style (snake_case), pananglitan `user_auth_token`; kung ang variable kay function, gamita ang lowercase nga camel case name style
- Ngalan sa function: Gamit ug lowercase nga camelCase (camelCase), pananglitan `userData`
- Mga parameter sa function: Kung kini usa ka function sa callback, nganli kini sa gamay nga kaso sa kamelyo, sama sa `onChange`
- Ang mga depinisyon sa lebel sa module nga kanunay naggamit ug uppercase nga underline nga estilo `UPPER_SNAKE_CASE`
- Ayaw isulat ang `get`, mga walay kahulogan nga prefix, sama sa: isulat `cookieByHeader` imbes nga `getCookie`
- Global/module-level constants: gamita ang uppercase underline style (UPPER_SNAKE_CASE), eg. `CODE_TO_ID`, `ID_TO_LANG`

## Modular nga mekanismo

- Import: I-import ang mga function sa saktong panginahanglan, gidid-an ang direktang pag-import sa tibuok module (likayi ang `import * as x` o import ang dagkong mga butang)
- Export: I-disable ang pag-eksport sa mga butang. I-export ang mga function ug variables isip mga unit, sama sa `export const X=1, abc=()=>{};`. Sulayi nga isagol sila sa usa ka const + comma aron ipahayag ang gi-eksport nga sulud. Kung ang usa ka file adunay usa ra ka function, gamita ang `export default`
- Gawas kung kinahanglan nimo nga tawagan ang export default function sa sulod, likayi ang pagdeklara sa mga kanunay ug dayon i-export kini sa katapusan sa file.
- Resolusyon sa dalan: Kung makuha ang kasamtangan nga agianan sa direktoryo, `import.meta.dirname` kinahanglan gamiton

## sayop

- Likayi ang mga sayup sa string ug gamita ang const aron ipahayag ang kanunay nga mga code sa sayup.
- Kung kinahanglan nimo nga ibalik ang sayup nga impormasyon sa datos, gamita ang [error code, error message,...] Niining paagiha, ang mensahe sa sayup dili usa ka deskripsyon sa teksto, apan usa ka numerical nga kantidad (sama sa [FILE_OVERSIZE, file_size, max_size])
-

## Sulayi sa paggamit sa browser-compatible nga mga API

- Encryption ug decryption: Ipugos ang paggamit sa lumad nga Web Crypto API
- Binary nga datos: Kung nag-atubang sa binary, sulayi ang paggamit sa `Uint8Array` nga parehas