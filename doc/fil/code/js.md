# Detalye ng JS code

## estilo ng coding

- Simple, elegante at mahusay, gamit ang pinakamodernong js syntax
- Hatiin ang masyadong mahahabang function, at ang disenyo ng interface ay dapat na mababa ang coupling at mataas na pagkakaisa.
- Gumamit ng arrays + loops/forEach/map nang higit pa at magsulat ng mas kaunting paulit-ulit na code
- Huwag magsulat ng mga komento sa function sa simpleng code upang maiwasan ang labis na mga komento. Ang kumplikadong lohika at mga espesyal na pangangailangan ay ipinaliwanag sa pinong Chinese.
- Ang paulit-ulit na code ay na-abstract sa mga function upang mabawasan ang redundancy. Halimbawa, ang `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` ay maaaring isulat bilang `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variable na deklarasyon: Pagsamahin ang maraming magkakasunod na `const` deklarasyon sa isang pahayag. Sa halip na isulat ito sa tatlong linya, isulat ang `const a=1, b=2, c=3;`
- Asynchronous processing: gumamit ng `await`, ipagbawal ang paggamit ng `.then` chain calls
- Huwag awtomatikong bumuo ng exception handling code, huwag awtomatikong isulat ang `try...catch` (`try ... catch` ay pinapanatili nang manu-mano, ang umiiral na `try catch` ay hindi dapat tanggalin)
- Mga purong function muna: magsulat lamang ng mga purong function, hindi kailanman mga klase
- Gumamit ng mga arrow function na `const funcName = () => {}` at huwag gamitin ang keyword na `function` (maliban sa mga generator); kung maaari mong gamitin ang .bind para i-bind ang mga parameter, iwasan ang pagtukoy ng mga function
- Muling paggamit ng code: Bigyang-pansin ang muling paggamit, i-extract ang mas maliliit na function, at determinadong iwasan ang maraming katulad o copy-paste na istruktura ng code.
- Pag-access sa object: Unahin ang paggamit ng destructuring assignment upang kunin ang mga kinakailangang attribute, iwasan ang paulit-ulit na paggamit ng mga tuldok sa loob upang ma-access ang malalim at nested na mga attribute, at pagsamahin ang mga paulit-ulit na opsyonal na chain judgments
- Huwag gumamit ng mga bagay para sa mga parameter ng function, huwag isulat ang `{a,b,c}`, isulat ang `a, b, c`; kung maraming opsyonal na parameter, gamitin ang [[number of configuration items, configuration items], [number of configuration items, configuration items],..] Sa paradigm na ito, ang configuration item ay tinukoy gamit ang mga numeric constant
- Para sa multi-value returns, gamitin ang array `[a,b,c]` sa halip na `{a,b,c}`. Kung mayroong higit sa 3 mga return value, gumamit ng mga numeric constant upang tukuyin ang positional na kahulugan.
- Hindi na kailangan ng isang string upang kumatawan sa estado, gumamit ng mga numeric na pare-pareho upang tukuyin ang estado
- Walang string template (``) na ginagamit, string concatenation (+) ay ginagamit, maliban sa pag-import (maginhawa para sa Vite static analysis)
- Para sa loop, kung kailangan mo ng serial number, gamitin ang `++i` sa halip na `i++`
- Iwasan ang hindi kailangan`?.` at ipagbawal ang defensive programming
- Ang variable na pangalan ay hindi kailangang pangmaramihan, at nagtatapos sa `_li` upang isaad ang isang listahan.

## Pagpapangalan ng convention

- Ang pagbibigay ng pangalan ay hinahabol ang minimalism. Gumamit ng maikli ngunit makabuluhang mga pangalan, halimbawa: gamitin ang `rm` sa halip na `remove`, `delete`, `del`. Gayunpaman, dapat mo ring iwasan ang maging labis, halimbawa: huwag gumamit ng isang titik `m` sa halip na `map`
- Subukang gumamit lamang ng mga pandiwa sa pagpapangalan ng function. Kung maaari mong gamitin ang isang salita upang ipahayag ito, huwag gumamit ng dalawang salita. Ang mga pangngalan ay makikita sa mga pangalan ng file. Kung kailangan mong magdagdag ng pandiwa sa pangalan ng file, mangyaring ilagay ang pangngalan sa una at ang pandiwa sa huli. Halimbawa: `profileSet.js` sa halip na `setProfile.js`
- Pangalan ng variable: gumamit ng istilong salungguhit (snake_case), halimbawa `user_auth_token`; kung ang variable ay isang function, gumamit ng lowercase na istilo ng pagbibigay ng pangalan sa camel case
- Pangalan ng function: Gumamit ng lowercase na camelCase (camelCase), halimbawa `userData`
- Mga parameter ng function: Kung ito ay isang callback function, pangalanan ito sa lowercase na camel case, gaya ng `onChange`
- Ang mga pare-parehong kahulugan sa antas ng module ay gumagamit ng uppercase na underline na istilo `UPPER_SNAKE_CASE`
- Huwag isulat ang `get`, tulad ng walang kahulugang prefix, gaya ng: isulat ang `cookieByHeader` sa halip na `getCookie`
- Global/module-level constants: gumamit ng uppercase underline style (UPPER_SNAKE_CASE), hal. `CODE_TO_ID`, `ID_TO_LANG`

## Modular na mekanismo

- Pag-import: Mag-import ng mga function nang tumpak kapag hinihiling, ipagbawal ang direktang pag-import ng buong module (iwasan ang `import * as x` o mag-import ng malalaking bagay)
- I-export: Huwag paganahin ang pag-export ng mga bagay. I-export ang mga function at variable bilang mga unit, gaya ng `export const X=1, abc=()=>{};`. Subukang pagsamahin ang mga ito sa isang const + comma upang ideklara ang na-export na nilalaman. Kung ang isang file ay may isang function lamang, gamitin ang `export default`
- Maliban kung kailangan mong tawagan ang export default na function sa loob, iwasan muna ang pagdedeklara ng mga constant at pagkatapos ay i-export ang mga ito sa dulo ng file.
- Resolusyon ng landas: Kapag kinukuha ang kasalukuyang path ng direktoryo, dapat gamitin ang `import.meta.dirname`

## pagkakamali

- Iwasan ang mga error sa string at gamitin ang const upang magdeklara ng mga pare-parehong error code.
- Kung kailangan mong ibalik ang maling impormasyon ng data, gamitin ang [error code, error message,...] Sa ganitong paraan, ang error message ay hindi isang text description, ngunit isang numerical value (gaya ng [FILE_OVERSIZE, file_size, max_size])
-

## Subukang gumamit ng mga browser-compatible na API

- Pag-encrypt at pag-decryption: Pilitin ang paggamit ng katutubong Web Crypto API
- Binary data: Kapag nakikitungo sa binary, subukang gamitin ang `Uint8Array` nang pantay