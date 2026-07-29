# Specifikimi i kodit JS

## stil kodimi

- E thjeshtë, elegante dhe efikase, duke përdorur sintaksën më moderne js
- Ndani funksionet tepër të gjata dhe dizajni i ndërfaqes duhet të jetë me lidhje të ulët dhe kohezion të lartë.
- Përdorni më shumë vargje + sythe/përÇdo/hartë dhe shkruani kode më pak të përsëritura
- Mos shkruani komentet e funksionit në kod të thjeshtë për të shmangur komentet e tepërta. Logjika komplekse dhe nevojat e veçanta shpjegohen në gjuhën kineze të rafinuar.
- Kodi i përsëritur abstraktohet në funksione për të reduktuar tepricën. Për shembull, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` mund të shkruhet si `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklarata e ndryshores: Kombinoni deklarata të shumta të njëpasnjëshme `const` në një deklaratë. Në vend që ta shkruani në tre rreshta, shkruani `const a=1, b=2, c=3;`
- Përpunimi asinkron: përdorni `await`, ndaloni përdorimin e thirrjeve zinxhirore `.then`
- Mos krijoni automatikisht kodin e trajtimit të përjashtimeve, mos shkruani automatikisht `try...catch` (`try ... catch` mbahet manualisht, `try catch` ekzistuese nuk duhet të fshihet)
- Funksionet e pastra së pari: shkruani vetëm funksione të pastra, kurrë klasa
- Përdorni funksionet e shigjetave `const funcName = () => {}` dhe mos përdorni fjalën kyçe `function` (përveç gjeneratorëve); nëse mund të përdorni .bind për të lidhur parametrat, shmangni përcaktimin e funksioneve
- Ripërdorimi i kodit: Kushtojini vëmendje ripërdorimit, nxirrni më shumë funksione të vogla dhe shmangni me vendosmëri një numër të madh strukturash kodi të ngjashme ose të kopjuara.
- Qasja e objektit: Jepini përparësi përdorimit të caktimit të destrukturimit për të nxjerrë atributet e kërkuara, shmangni përdorimin e përsëritur të pikave brenda për të aksesuar atributet e thella dhe të mbivendosura dhe bashkoni gjykimet e përsëritura të zinxhirit opsional
- Mos përdorni objekte për parametrat e funksionit, mos shkruani `{a,b,c}`, shkruani `a, b, c`; nëse ka shumë parametra opsionalë, përdorni [[numri i artikujve të konfigurimit, artikujt e konfigurimit], [numri i artikujve të konfigurimit, artikujt e konfigurimit],..] Në këtë paradigmë, artikujt e konfigurimit përcaktohen me konstante numerike
- Për kthime me shumë vlera, përdorni grupin `[a,b,c]` në vend të `{a,b,c}`. Nëse ka më shumë se 3 vlera të kthyera, përdorni konstante numerike për të përcaktuar kuptimin pozicional.
- Nuk ka nevojë për një varg për të përfaqësuar gjendjen, përdorni konstante numerike për të përcaktuar gjendjen
- Nuk përdoret asnjë shabllon vargu (``), përdoret lidhja e vargut (+), përveç importit (i përshtatshëm për analizën statike Vite)
- Për ciklin, nëse keni nevojë për një numër serial, përdorni `++i` në vend të `i++`
- Shmangni`?.` e panevojshme dhe ndaloni programimin mbrojtës
- Emri i ndryshores nuk ka nevojë të jetë shumës dhe përfundon me `_li` për të treguar një listë.

## Konventa e emërtimit

- Emërtimi ndjek minimalizmin. Përdorni emra të shkurtër por kuptimplotë, për shembull: përdorni `rm` në vend të `remove`, `delete`, `del`. Megjithatë, duhet të shmangni edhe ekstremet, për shembull: mos përdorni një shkronjë të vetme `m` në vend të `map`
- Përpiquni të përdorni vetëm folje në emërtimin e funksioneve. Nëse mund të përdorni një fjalë për ta shprehur atë, mos përdorni dy fjalë. Emrat pasqyrohen në emrat e skedarëve. Nëse keni nevojë të shtoni një folje në emrin e skedarit, ju lutemi vendosni emrin në fillim dhe foljen e fundit. Për shembull: `profileSet.js` në vend të `setProfile.js`
- Emri i ndryshores: përdorni stilin e nënvizimit (snake_case), për shembull `user_auth_token`; nëse ndryshorja është një funksion, përdorni stilin e emërtimit të shkronjave të vogla camel
- Emri i funksionit: Përdor shkronja të vogla camelCase (camelCase), për shembull `userData`
- Parametrat e funksionit: Nëse është një funksion kthimi i thirrjes, emërtojeni me shkronja të vogla camel, si p.sh. `onChange`
- Përkufizimet konstante të nivelit të modulit përdorin stilin e nënvizimit me shkronja të mëdha `UPPER_SNAKE_CASE`
- Mos shkruani `get`, parashtesa të tilla të pakuptimta, si p.sh.: shkruani `cookieByHeader` në vend të `getCookie`
- Konstantet globale/të nivelit të modulit: përdorni stilin e nënvizimit me shkronja të mëdha (UPPER_SNAKE_CASE), p.sh. `CODE_TO_ID`, `ID_TO_LANG`

## Mekanizëm modular

- Import: Funksionet e importit me saktësi sipas kërkesës, ndalimi i importit të drejtpërdrejtë të të gjithë modulit (shmangni `import * as x` ose importoni objekte të mëdha)
- Export: Çaktivizoni eksportin e objekteve. Eksporto funksionet dhe variablat si njësi, të tilla si `export const X=1, abc=()=>{};`. Mundohuni t'i kombinoni ato me një presje const + për të deklaruar përmbajtjen e eksportuar. Nëse një skedar ka vetëm një funksion, përdorni `export default`
- Nëse nuk keni nevojë të thërrisni brenda vetes funksionin e paracaktuar të eksportit, shmangni fillimisht deklarimin e konstantave dhe më pas eksportimin e tyre në fund të skedarit.
- Zgjidhja e rrugës: Kur merrni shtegun aktual të drejtorisë, duhet të përdoret `import.meta.dirname`

## gabim

- Shmangni gabimet e vargut dhe përdorni konst për të deklaruar kode gabimi konstante.
- Nëse duhet të ktheni informacione të gabuara të të dhënave, përdorni [kodin e gabimit, mesazh gabimi,...] Në këtë mënyrë, mesazhi i gabimit nuk është një përshkrim teksti, por një vlerë numerike (si p.sh. [FILE_OVERSIZE, madhësia e skedarit, madhësia max])
-

## Mundohuni të përdorni API të pajtueshme me shfletuesin

- Kriptimi dhe deshifrimi: Forconi përdorimin e API-së vendase të kriptove të uebit
- Të dhënat binare: Kur keni të bëni me binare, përpiquni të përdorni `Uint8Array` në mënyrë uniforme