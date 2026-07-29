# JS kóða forskrift

## erfðaskrá stíl

- Einfalt, glæsilegt og skilvirkt, með nýjustu js setningafræðinni
- Skiptu of langar aðgerðir og viðmótshönnunin ætti að vera lítil tenging og mikil samheldni.
- Notaðu fylki + lykkjur/fyrir hverja/kort meira og skrifaðu minna endurtekinn kóða
- Ekki skrifa aðgerðar athugasemdir í einföldum kóða til að forðast of miklar athugasemdir. Flókin rökfræði og sérþarfir eru útskýrðar á fágaðri kínversku.
- Endurtekinn kóði er tekinn niður í aðgerðir til að draga úr offramboði. Til dæmis er hægt að skrifa `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` sem `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Breytuyfirlýsing: Sameina margar `const` yfirlýsingar í röð í eina fullyrðingu. Í stað þess að skrifa það í þremur línum skaltu skrifa `const a=1, b=2, c=3;`
- Ósamstillt vinnsla: notaðu `await`, bannaðu notkun `.then` keðjusímtöl
- Ekki búa til undantekningarmeðhöndlunarkóða sjálfkrafa, ekki skrifa `try...catch` sjálfkrafa (`try ... catch` er viðhaldið handvirkt, ekki ætti að eyða núverandi `try catch`)
- Hreinar aðgerðir fyrst: skrifaðu bara hreinar aðgerðir, aldrei flokka
- Notaðu örvaaðgerðir `const funcName = () => {}` og ekki nota `function` lykilorðið (nema rafala); ef þú getur notað .bind til að binda færibreytur skaltu forðast að skilgreina föll
- Endurnotkun kóða: Gefðu gaum að endurnotkun, dragðu út fleiri litlar aðgerðir og forðastu einbeitt fjölda svipaðra eða afritaða kóðabygginga.
- Aðgangur að hlutum: Forgangsraða með því að nota afbyggingarúthlutun til að draga út nauðsynlega eiginleika, forðast að nota endurtekið punkta innbyrðis til að fá aðgang að djúpum og hreiðri eiginleikum og sameina endurtekna valkvæða keðjudóma
- Ekki nota hluti fyrir aðgerðarfæribreytur, ekki skrifa `{a,b,c}`, skrifa `a, b, c`; ef það eru margar valfrjálsar færibreytur, notaðu [[fjöldi stillingarliða, stillingaratriði], [fjöldi stillingarliða, stillingaratriði],..] Í þessari hugmyndafræði eru stillingaratriði skilgreind með tölustöfum
- Fyrir marggilda skil, notaðu fylki `[a,b,c]` í stað `{a,b,c}`. Ef það eru fleiri en 3 skilagildi, notaðu tölufasta til að skilgreina stöðumerkingu.
- Það er engin þörf fyrir streng til að tákna ástandið, notaðu tölustafi til að skilgreina ástandið
- Ekkert strengjasniðmát (``) er notað, strengjasamtenging (+) er notuð, nema fyrir innflutning (þægilegt fyrir Vite truflanir)
- Fyrir lykkju, ef þú þarft raðnúmer, notaðu `++i` í stað `i++`
- Forðastu óþarfa`?.`og bannaðu varnarforritun
- Heiti breytan þarf ekki að vera fleirtölu og endar á `_li` til að gefa til kynna lista.

## Nafnasamningur

- Nafngiftin stundar naumhyggju. Notaðu stutt en merkingarbær nöfn, til dæmis: notaðu `rm` í stað `remove`, `delete`, `del`. Hins vegar ættir þú líka að forðast að fara út í öfgar, til dæmis: ekki nota einn staf `m` í stað `map`
- Reyndu að nota aðeins sagnir í heiti falla. Ef þú getur notað eitt orð til að tjá það skaltu ekki nota tvö orð. Nafnorð endurspeglast í skráarnöfnum. Ef þú þarft að bæta sögn við skráarheitið skaltu setja nafnorðið fyrst og sögnina síðast. Til dæmis: `profileSet.js` í stað `setProfile.js`
- Heiti breytu: notaðu undirstrikunarstíl (snake_case), til dæmis `user_auth_token`; ef breytan er fall, notaðu lágstafir úlfaldastíl nafngiftarstíl
- Heiti aðgerða: Notaðu lágstafi camelCase (camelCase), til dæmis `userData`
- Aðgerðarfæribreytur: Ef það er svarhringingaraðgerð skaltu nefna það með lágstöfum úlfalda, eins og `onChange`
- Fastaskilgreiningar á einingarstigi nota hástöfum undirstrikunarstíl `UPPER_SNAKE_CASE`
- Ekki skrifa `get`, svo tilgangslaus forskeyti, eins og: skrifa `cookieByHeader` í stað `getCookie`
- Fastar á heimsvísu/einingarstigi: notaðu hástafi undirstrikunarstíl (UPPER_SNAKE_CASE), t.d. `CODE_TO_ID`, `ID_TO_LANG`

## Modular vélbúnaður

- Innflutningur: Flytja inn aðgerðir nákvæmlega eftir beiðni, banna beinan innflutning á allri einingu (forðastu `import * as x` eða flyttu inn stóra hluti)
- Útflutningur: Slökktu á útflutningi á hlutum. Flytja út aðgerðir og breytur sem einingar, eins og `export const X=1, abc=()=>{};`. Reyndu að sameina þau með const + kommu til að lýsa yfir útflutt efni. Ef skrá hefur aðeins eina aðgerð, notaðu `export default`
- Nema þú þurfir að hringja í sjálfgefna útflutningsaðgerðina innbyrðis, forðastu að lýsa yfir föstum fyrst og flytja þá síðan út í lok skráarinnar.
- Upplausn slóðar: Þegar núverandi skráarslóð er fengin verður að nota `import.meta.dirname`

## mistök

- Forðastu strengjavillur og notaðu const til að lýsa yfir stöðugum villukóðum.
- Ef þú þarft að skila röngum gagnaupplýsingum skaltu nota [villukóða, villuboð,...] Þannig eru villuboðin ekki textalýsing, heldur tölulegt gildi (eins og [FILE_OVERSIZE, file_size, max_size])
-

## Reyndu að nota vafrasamhæfð API

- Dulkóðun og afkóðun: Þvingaðu notkun innfæddra vefkryptunarforritaskila
- Tvöfaldur gögn: Reyndu að nota `Uint8Array` einsleitt þegar þú fjallar um tvíundir