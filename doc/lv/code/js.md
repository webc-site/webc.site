# JS koda specifikācija

## kodēšanas stils

- Vienkāršs, elegants un efektīvs, izmantojot vismodernāko js sintaksi
- Sadaliet pārāk garas funkcijas, un saskarnes dizainam jābūt zemam savienojumam un augstai kohēzijai.
- Vairāk izmantojiet masīvus + cilpas/forEach/map un rakstiet mazāk atkārtotu kodu
- Nerakstiet funkciju komentārus vienkāršā kodā, lai izvairītos no pārmērīgiem komentāriem. Sarežģītā loģika un īpašās vajadzības tiek izskaidrotas izsmalcinātajā ķīniešu valodā.
- Atkārtots kods tiek abstrahēts funkcijās, lai samazinātu dublēšanu. Piemēram, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` var rakstīt kā `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Mainīgā deklarācija: apvienojiet vairākas secīgas `const` deklarācijas vienā priekšrakstā. Tā vietā, lai to rakstītu trīs rindās, ierakstiet `const a=1, b=2, c=3;`
- Asinhronā apstrāde: izmantojiet `await`, aizliedziet `.then` ķēdes zvanu izmantošanu
- Neģenerējiet automātiski izņēmumu apstrādes kodu, nerakstiet automātiski `try...catch` (`try ... catch` tiek uzturēts manuāli, esošo `try catch` nevajadzētu dzēst)
- Vispirms tīras funkcijas: rakstiet tikai tīras funkcijas, nevis klases
- Izmantojiet bultiņu funkcijas `const funcName = () => {}` un neizmantojiet `function` atslēgvārdu (izņemot ģeneratorus); ja varat izmantot .bind, lai saistītu parametrus, izvairieties no funkciju definēšanas
- Koda atkārtota izmantošana: pievērsiet uzmanību atkārtotai izmantošanai, izņemiet vairāk mazu funkciju un apņēmīgi izvairieties no liela skaita līdzīgu vai kopēt ielīmētu koda struktūru.
- Objekta piekļuve: piešķiriet prioritāti, izmantojot iznīcināšanas uzdevumu, lai iegūtu nepieciešamos atribūtus, izvairieties no atkārtotas iekšējas punktu izmantošanas, lai piekļūtu dziļajiem un ligzdotajiem atribūtiem, un sapludiniet atkārtotus izvēles ķēdes spriedumus.
- Neizmantojiet objektus funkciju parametriem, nerakstiet `{a,b,c}`, rakstiet `a, b, c`; ja ir daudz izvēles parametru, izmantojiet [[konfigurācijas vienumu skaits, konfigurācijas vienumi], [konfigurācijas vienumu skaits, konfigurācijas vienumi],..] Šajā paradigmā konfigurācijas vienumi tiek definēti ar skaitliskām konstantēm.
- Vairāku vērtību atgriešanai izmantojiet masīvu `[a,b,c]`, nevis `{a,b,c}`. Ja ir vairāk nekā 3 atgriešanas vērtības, izmantojiet skaitliskās konstantes, lai definētu pozicionālo nozīmi.
- Nav nepieciešama virkne, lai attēlotu stāvokli, izmantojiet skaitliskās konstantes, lai definētu stāvokli
- Virknes veidne (``) netiek izmantota, tiek izmantota virkņu savienošana (+), izņemot importēšanu (ērta Vite statiskajai analīzei)
- Ja jums ir nepieciešams sērijas numurs, ciklā izmantojiet `++i`, nevis `i++`
- Izvairieties no nevajadzīgas`?.` un aizliedziet aizsardzības programmēšanu
- Mainīgajam nosaukumam nav jābūt daudzskaitlī, un tas beidzas ar `_li`, lai norādītu sarakstu.

## Nosaukšanas konvencija

- Nosaukumā tiek ievērots minimālisms. Izmantojiet īsus, bet jēgpilnus nosaukumus, piemēram: izmantojiet `rm`, nevis `remove`, `delete`, `del`. Tomēr jums vajadzētu arī izvairīties no galējībām, piemēram: neizmantojiet vienu burtu `m` `map` vietā.
- Mēģiniet funkciju nosaukšanā izmantot tikai darbības vārdus. Ja varat izmantot vienu vārdu, lai to izteiktu, nelietojiet divus vārdus. Lietvārdi tiek atspoguļoti failu nosaukumos. Ja faila nosaukumam jāpievieno darbības vārds, lūdzu, vispirms ievietojiet lietvārdu un pēdējo. Piemēram: `profileSet.js`, nevis `setProfile.js`
- Mainīgo nosaukumi: izmantojiet pasvītras stilu (snake_case), piemēram, `user_auth_token`
- Funkcijas nosaukums: izmantojiet mazos burtus camelCase (camelCase), piemēram, `userData`
- Funkciju parametri: ja tā ir atzvanīšanas funkcija, nosauciet to ar mazajiem kamieļa burtiem, piemēram, `onChange`
- Moduļa līmeņa konstantu definīcijās tiek izmantots lielo burtu pasvītrojuma stils `UPPER_SNAKE_CASE`
- Nerakstiet `get`, tādus bezjēdzīgus prefiksus, piemēram: rakstiet `cookieByHeader`, nevis `getCookie`
- Globālās/moduļa līmeņa konstantes: izmantojiet lielo burtu pasvītrojuma stilu (UPPER_SNAKE_CASE), piem. `CODE_TO_ID`, `ID_TO_LANG`

## Moduļu mehānisms

- Importēt: importējiet funkcijas precīzi pēc pieprasījuma, aizliedziet tiešu visa moduļa importēšanu (izvairieties no `import * as x` vai importējiet lielus objektus)
- Eksportēt: atspējot objektu eksportēšanu. Eksportējiet funkcijas un mainīgos kā vienības, piemēram, `export const X=1, abc=()=>{};`. Mēģiniet apvienot tos ar const + komatu, lai deklarētu eksportēto saturu. Ja failam ir tikai viena funkcija, izmantojiet `export default`
- Ja vien jums nav iekšēji jāizsauc eksportēšanas noklusējuma funkcija, vispirms izvairieties no konstantu deklarēšanas un pēc tam to eksportēšanas faila beigās.
- Ceļa izšķirtspēja: iegūstot pašreizējo direktorijas ceļu, ir jāizmanto `import.meta.dirname`

## kļūda

- Izvairieties no virkņu kļūdām un izmantojiet const, lai deklarētu pastāvīgus kļūdu kodus.
- Ja jums ir jāatgriež nepareiza datu informācija, izmantojiet [kļūdas kods, kļūdas ziņojums,...] Šādā veidā kļūdas ziņojums nav teksta apraksts, bet gan skaitliska vērtība (piemēram, [FILE_OVERSIZE, file_size, max_size])
-

## Mēģiniet izmantot ar pārlūkprogrammu saderīgas API

- Šifrēšana un atšifrēšana: piespiedu kārtā izmantojiet vietējo Web Crypto API
- Binārie dati: strādājot ar binārajiem datiem, mēģiniet lietot `Uint8Array` vienādi