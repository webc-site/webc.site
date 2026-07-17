# Speċifikazzjoni tal-kodiċi JS

## stil ta 'kodifikazzjoni

- Sempliċi, eleganti u effiċjenti, bl-użu tas-sintassi js l-aktar moderna
- Aqsam funzjonijiet twal iżżejjed, u d-disinn tal-interface għandu jkun igganċjar baxx u koeżjoni għolja.
- Uża arrays + loops/forEach/mappa aktar u ikteb kodiċi inqas ripetittiv
- Tiktebx kummenti tal-funzjoni f'kodiċi sempliċi biex tevita kummenti eċċessivi. Il-loġika kumplessa u l-bżonnijiet speċjali huma spjegati biċ-Ċiniż raffinat.
- Kodiċi ripetut huwa estratt f'funzjonijiet biex titnaqqas is-sensja. Pereżempju, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` jista' jinkiteb bħala `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Dikjarazzjoni varjabbli: Għaqqad bosta dikjarazzjonijiet konsekuttivi `const` f'dikjarazzjoni waħda. Minflok tiktebha fi tliet linji, ikteb `const a=1, b=2, c=3;`
- Ipproċessar mhux sinkroniku: uża `await`, tipprojbixxi l-użu ta' `.then` sejħiet katina
- Tiġġenerax awtomatikament kodiċi tal-immaniġġjar tal-eċċezzjonijiet, tiktebx awtomatikament `try...catch` (`try ... catch` tinżamm manwalment, `try catch` eżistenti m'għandhiex titħassar)
- Funzjonijiet puri l-ewwel: ikteb biss funzjonijiet puri, qatt klassijiet
- Uża l-funzjonijiet tal-vleġġa `const funcName = () => {}` u tużax il-kelma prinċipali `function` (ħlief ġeneraturi); jekk tista 'tuża .bind biex torbot parametri, evita li tiddefinixxi funzjonijiet
- Użu mill-ġdid tal-kodiċi: Oqgħod attent għall-użu mill-ġdid, estratt aktar funzjonijiet żgħar, u tevita b'mod riżolut numru kbir ta 'strutturi ta' kodiċi simili jew pasted b'kopja.
- Aċċess għall-oġġetti: Ipprijoritizza l-użu ta’ assenjazzjoni ta’ destrutturar biex tiġbed l-attributi meħtieġa, tevita li tuża ripetutament tikek internament biex taċċessa attributi profondi u mdaħħla, u għaqqad sentenzi ripetuti tal-katina fakultattivi
- Tużax oġġetti għall-parametri tal-funzjoni, tiktebx `{a,b,c}`, ikteb `a, b, c`; jekk hemm ħafna parametri fakultattivi, uża [[numru ta’ oġġetti ta’ konfigurazzjoni, oġġetti ta’ konfigurazzjoni], [numru ta’ oġġetti ta’ konfigurazzjoni, oġġetti ta’ konfigurazzjoni],..] F’din il-paradigma, oġġetti ta’ konfigurazzjoni huma definiti b’kostanti numeriċi
- Għal prospetti b'ħafna valur, uża array `[a,b,c]` minflok `{a,b,c}`. Jekk hemm aktar minn 3 valuri ta 'ritorn, uża kostanti numeriċi biex tiddefinixxi t-tifsira pożizzjonali.
- M'hemmx bżonn ta 'sekwenza biex tirrappreżenta l-istat, uża kostanti numeriċi biex tiddefinixxi l-istat
- Ma jintuża l-ebda mudell ta' string (``), tintuża konkatenazzjoni ta' string (+), ħlief għall-importazzjoni (konvenjenti għall-analiżi statika ta' Vite)
- Għal loop, jekk għandek bżonn numru tas-serje, uża `++i` minflok `i++`
- Evita bla bżonn`?.`u tipprojbixxi l-ipprogrammar difensiv
- L-isem varjabbli m'għandux għalfejn ikun plural, u jispiċċa b'`_li` biex jindika lista.

## Konvenzjoni dwar ismijiet

- L-ismijiet isegwi l-minimaliżmu. Uża ismijiet qosra iżda sinifikanti, pereżempju: uża `rm` minflok `remove`, `delete`, `del`. Madankollu, għandek tevita wkoll li tmur għall-estremi, pereżempju: tużax ittra waħda `m` minflok `map`
- Ipprova uża biss verbi fl-ismijiet tal-funzjoni. Jekk tista’ tuża kelma waħda biex tesprimiha, tużax żewġ kelmiet. In-nomi huma riflessi fl-ismijiet tal-fajls. Jekk għandek bżonn iżżid verb mal-isem tal-fajl, jekk jogħġbok poġġi n-nom l-ewwel u l-verb l-aħħar. Pereżempju: `profileSet.js` minflok `setProfile.js`
- Isem varjabbli: uża l-istil ta' enfasi (snake_case), pereżempju `user_auth_token`; jekk il-varjabbli hija funzjoni, uża l-istil tal-ismijiet tal-każ tal-ġemel b'ittri żgħar
- Isem tal-funzjoni: Uża camelCase (camelCase), per eżempju `userData`
- Parametri tal-funzjoni: Jekk hija funzjoni ta' sejħa lura, semmiha b'tiċri żgħar, bħal `onChange`
- Id-definizzjonijiet tal-kostanti fil-livell tal-modulu jużaw stil issottolinjat majusku `UPPER_SNAKE_CASE`
- Tiktebx `get`, prefissi bla sens bħal dawn, bħal: ikteb `cookieByHeader` minflok `getCookie`
- Kostanti globali/livell ta’ modulu: uża stil ta’ enfasi b’majju (UPPER_SNAKE_CASE), eż. `CODE_TO_ID`, `ID_TO_LANG`

## Mekkaniżmu modulari

- Importazzjoni: L-importazzjoni tiffunzjona b'mod preċiż fuq talba, tipprojbixxi l-importazzjoni diretta tal-modulu kollu (evita `import * as x` jew timporta oġġetti kbar)
- Esportazzjoni: Iddiżattiva l-esportazzjoni ta 'oġġetti. Funzjonijiet ta' esportazzjoni u varjabbli bħala unitajiet, bħal `export const X=1, abc=()=>{};`. Ipprova għaqqadhom b'const + virgola biex tiddikjara l-kontenut esportat. Jekk fajl għandu funzjoni waħda biss, uża `export default`
- Sakemm ma jkollokx bżonn issejjaħ il-funzjoni awtomatika tal-esportazzjoni internament, evita li tiddikjara l-kostanti l-ewwel u mbagħad tesportahom fl-aħħar tal-fajl.
- Riżoluzzjoni tal-passaġġ: Meta tinkiseb il-mogħdija tad-direttorju attwali, trid tintuża `import.meta.dirname`

## żball

- Evita żbalji fl-istring u uża const biex tiddikjara kodiċijiet ta' żball kostanti.
- Jekk trid tirritorna informazzjoni ta' data ħażina, uża [kodiċi ta' żball, messaġġ ta' żball,...] B'dan il-mod, il-messaġġ ta' żball mhuwiex deskrizzjoni ta' test, iżda valur numeriku (bħal [FILE_OVERSIZE, file_size, max_size])
-

## Ipprova uża APIs kompatibbli mal-browser

- Encryption u decryption: Ġegħlu l-użu ta 'Web Crypto API nattiva
- Data binarja: Meta tittratta binarja, ipprova uża `Uint8Array` b'mod uniformi