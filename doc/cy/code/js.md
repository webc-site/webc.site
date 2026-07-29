# Manyleb cod JS

## arddull codio

- Syml, cain ac effeithlon, gan ddefnyddio'r gystrawen js mwyaf modern
- Rhannu swyddogaethau rhy hir, a dylai'r dyluniad rhyngwyneb fod yn gyplu isel a chydlyniad uchel.
- Defnyddiwch araeau + dolenni / forEach / map yn fwy ac ysgrifennwch god llai ailadroddus
- Peidiwch ag ysgrifennu sylwadau swyddogaeth mewn cod syml i osgoi gormod o sylwadau. Mae rhesymeg gymhleth ac anghenion arbennig yn cael eu hesbonio mewn Tsieinëeg mireinio.
- Mae cod ailadroddus yn cael ei dynnu i mewn i swyddogaethau i leihau dileu swyddi. Er enghraifft, gellir ysgrifennu `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` fel `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Datganiad newidiol: Cyfunwch nifer o ddatganiadau `const` olynol yn un datganiad. Yn lle ei ysgrifennu mewn tair llinell, ysgrifennwch `const a=1, b=2, c=3;`
- Prosesu asyncronig: defnyddio `await`, gwahardd defnyddio `.then` galwadau cadwyn
- Peidiwch â chynhyrchu cod trin eithriadau yn awtomatig, peidiwch ag ysgrifennu `try...catch` yn awtomatig (`try ... catch` yn cael ei gynnal â llaw, ni ddylid dileu `try catch` presennol)
- Swyddogaethau pur yn gyntaf: dim ond ysgrifennu swyddogaethau pur, byth dosbarthiadau
- Defnyddiwch ffwythiannau saeth `const funcName = () => {}` a pheidiwch â defnyddio'r allweddair `function` (ac eithrio generaduron); os gallwch chi ddefnyddio .bind i rwymo paramedrau, osgoi diffinio swyddogaethau
- Ailddefnyddio cod: Rhowch sylw i ailddefnyddio, echdynnu mwy o swyddogaethau bach, ac osgoi'n gadarn nifer fawr o strwythurau cod tebyg neu gopïo-gludo.
- Mynediad gwrthrych: Blaenoriaethwch ddefnyddio aseiniad dinistriol i echdynnu priodoleddau gofynnol, osgoi defnyddio dotiau mewnol dro ar ôl tro i gael mynediad at briodoleddau dwfn a nythu, ac uno dyfarniadau cadwyn dewisol dro ar ôl tro
- Peidiwch â defnyddio gwrthrychau ar gyfer paramedrau swyddogaeth, peidiwch ag ysgrifennu `{a,b,c}`, ysgrifennwch `a, b, c`; os oes llawer o baramedrau dewisol, defnyddiwch [[nifer yr eitemau ffurfweddu, eitemau ffurfweddu], [nifer yr eitemau ffurfweddu, eitemau ffurfweddu],..] Yn y patrwm hwn, diffinnir eitemau cyfluniad gyda chysonion rhifol
- Ar gyfer dychweliadau aml-werth, defnyddiwch arae `[a,b,c]` yn lle `{a,b,c}`. Os oes mwy na 3 gwerth dychwelyd, defnyddiwch gysonion rhifol i ddiffinio ystyr lleoliadol.
- Nid oes angen llinyn i gynrychioli'r cyflwr, defnyddiwch gysonion rhifol i ddiffinio'r cyflwr
- Ni ddefnyddir templed llinyn (``), defnyddir concatenation llinyn (+), ac eithrio ar gyfer mewnforio (cyfleus ar gyfer dadansoddiad statig Vite)
- Ar gyfer dolen, os oes angen rhif cyfresol arnoch, defnyddiwch `++i` yn lle `i++`
- Ceisiwch osgoi`?.` diangen a gwahardd rhaglennu amddiffynnol
- Nid oes angen i'r enw newidyn fod yn lluosog, ac mae'n gorffen gyda `_li` i nodi rhestr.

## Confensiwn enwi

- Mae'r enwi yn mynd ar drywydd minimaliaeth. Defnyddiwch enwau byr ond ystyrlon, er enghraifft: defnyddiwch `rm` yn lle `remove`, `delete`, `del`. Fodd bynnag, dylech hefyd osgoi mynd i eithafion, er enghraifft: peidiwch â defnyddio un llythyren `m` yn lle `map`
- Ceisiwch ddefnyddio berfau yn unig wrth enwi ffwythiannau. Os gallwch chi ddefnyddio un gair i'w fynegi, peidiwch â defnyddio dau air. Adlewyrchir enwau mewn enwau ffeiliau. Os oes angen ychwanegu berf at enw'r ffeil, rhowch yr enw yn gyntaf a'r ferf yn olaf. Er enghraifft: `profileSet.js` yn lle `setProfile.js`
- Enw newidiol: defnyddiwch arddull tanlinellu (snake_case), er enghraifft `user_auth_token`; os yw'r newidyn yn ffwythiant, defnyddiwch arddull enwi llythrennau bach camel
- Enw swyddogaeth: Defnyddiwch camelCase llythrennau bach (camelCase), er enghraifft `userData`
- Paramedrau swyddogaeth: Os yw'n swyddogaeth galw'n ôl, enwch ef mewn llythrennau bach camel, megis `onChange`
- Mae diffiniadau cyson lefel modiwl yn defnyddio arddull tanlinellu priflythrennau `UPPER_SNAKE_CASE`
- Peidiwch ag ysgrifennu `get`, rhagddodiaid diystyr o'r fath, megis: ysgrifennu `cookieByHeader` yn lle `getCookie`
- Cysonion lefel byd-eang/modiwl: defnyddiwch arddull tanlinellu priflythrennau (UPPER_SNAKE_CASE), e.e. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanwaith modiwlaidd

- Mewnforio: Mewnforio swyddogaethau'n gywir yn ôl y galw, gwahardd mewnforio'r modiwl cyfan yn uniongyrchol (osgoi `import * as x` neu fewnforio gwrthrychau mawr)
- Allforio: Analluogi allforio gwrthrychau. Allforio swyddogaethau a newidynnau fel unedau, megis `export const X=1, abc=()=>{};`. Ceisiwch eu cyfuno â choma const + i ddatgan y cynnwys a allforiwyd. Os mai dim ond un swyddogaeth sydd gan ffeil, defnyddiwch `export default`
- Oni bai bod angen i chi alw'r swyddogaeth ddiofyn allforio yn fewnol, osgoi datgan cysonion yn gyntaf ac yna eu hallforio ar ddiwedd y ffeil.
- Datrysiad llwybr: Wrth gael y llwybr cyfeiriadur presennol, rhaid defnyddio `import.meta.dirname`

## camgymeriad

- Osgoi gwallau llinynnol a defnyddio const i ddatgan codau gwall cyson.
- Os oes angen i chi ddychwelyd gwybodaeth data anghywir, defnyddiwch [cod gwall, neges gwall,...] Fel hyn, nid yw'r neges gwall yn ddisgrifiad testun, ond yn werth rhifiadol (fel [FILE_OVERSIZE, file_size, max_size])
-

## Ceisiwch ddefnyddio APIs sy'n gydnaws â porwr

- Amgryptio a dadgryptio: Gorfodi'r defnydd o Web Crypto API brodorol
- Data deuaidd: Wrth ddelio â deuaidd, ceisiwch ddefnyddio `Uint8Array` unffurf