# JS kód specifikáció

## kódolási stílus

- Egyszerű, elegáns és hatékony, a legmodernebb js szintaxis használatával
- Ossza meg a túl hosszú funkciókat, és az interfész kialakításának alacsony csatolásúnak és magas kohéziósnak kell lennie.
- Használjon tömböket + ciklusokat/forEach/map többet, és írjon kevesebb ismétlődő kódot
- Ne írjon függvény megjegyzéseket egyszerű kódban, hogy elkerülje a túlzott megjegyzéseket. A bonyolult logikát és a speciális igényeket finomított kínai nyelven magyarázzák el.
- A redundancia csökkentése érdekében az ismétlődő kód függvényekké absztrahálódik. Például az `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`ként írható
- Változódeklaráció: Több egymást követő `const` deklaráció egyesítése egyetlen utasításba. Ahelyett, hogy három sorban írná, írja be a `const a=1, b=2, c=3;` karakterláncot
- Aszinkron feldolgozás: `await` használata, `.then` lánchívások használatának tiltása
- Ne generáljon automatikusan kivételkezelő kódot, ne írjon automatikusan `try...catch` (`try ... catch` manuálisan karbantartható, a meglévő `try catch` nem törölhető)
- Először a tiszta függvények: csak tiszta függvényeket írjunk, osztályokat soha
- Használja a `const funcName = () => {}` nyílfüggvényeket, és ne használja a `function` kulcsszót (kivéve a generátorokat); ha használhatja a .bind parancsot a paraméterek kötésére, kerülje a függvények meghatározását
- Kód újrafelhasználása: Ügyeljen az újrafelhasználásra, vegyen ki több kis függvényt, és határozottan kerülje a nagyszámú hasonló vagy másolt kódszerkezetet.
- Objektum hozzáférés: A szükséges attribútumok kivonásához használjon fontossági sorrendet a strukturáló hozzárendeléssel, kerülje el a pontok ismételt belső használatát a mély és beágyazott attribútumok eléréséhez, és egyesítse az ismétlődő opcionális láncdöntéseket.
- Ne használjon objektumokat függvényparaméterekhez, ne írjon `{a,b,c}`, írjon `a, b, c`; ha sok opcionális paraméter van, használja a [[konfigurációs elemek száma, konfigurációs elemek], [konfigurációs elemek száma, konfigurációs elemek száma],..] Ebben a paradigmában a konfigurációs elemek numerikus konstansokkal vannak definiálva
- Többértékű visszaadáshoz használja a `{a,b,c}` helyett a `[a,b,c]` tömböt. Ha 3-nál több visszatérési érték van, használjon numerikus konstansokat a pozíció jelentésének meghatározásához.
- Nincs szükség karakterláncra az állapot ábrázolásához, használjon numerikus konstansokat az állapot meghatározásához
- Nem használ karakterláncsablont (``), karakterlánc-összefűzést (+) használ, kivéve az importálást (kényelmes a Vite statikus elemzéshez)
- Cikk esetén, ha sorozatszámra van szüksége, használja a `i++` helyett az `++i` értéket
- Kerülje a szükségtelen`?.`t és tiltsa a védekező programozást
- A változó nevének nem kell többes számban lennie, és `_li`-re végződik a lista jelzésére.

## Elnevezési konvenció

- Az elnevezés a minimalizmust követi. Használjon rövid, de értelmes neveket, például: `remove`, `delete`, `del` helyett `rm`. Kerülje azonban a túlzásokat is, például: ne használjon egyetlen `m` betűt a `map` helyett.
- Próbáljon csak igéket használni a függvények elnevezésében. Ha egy szóval kifejezheti, ne használjon két szót. A főnevek a fájlnevekben tükröződnek. Ha igét kell hozzáadnia a fájlnévhez, kérjük, tegye a főnevet az első helyre, az igét pedig az utolsóra. Például: `profileSet.js` `setProfile.js` helyett
- Változónév: használjon aláhúzási stílust (snake_case), például `user_auth_token`; ha a változó egy függvény, használjon kisbetűs tevebetűs elnevezési stílust
- A függvény neve: Használjon kisbetűs camelCase (camelCase) betűt, például `userData`
- Funkcióparaméterek: Ha ez egy visszahívási függvény, nevezze el kisbetűvel, például `onChange`
- A modulszintű konstans definíciók nagybetűs aláhúzási stílust használnak `UPPER_SNAKE_CASE`
- Ne írjon `get` szót, ilyen értelmetlen előtagot, például: írjon `cookieByHeader` `getCookie` helyett
- Globális/modul szintű konstansok: használjunk nagybetűs aláhúzási stílust (UPPER_SNAKE_CASE), pl. `CODE_TO_ID`, `ID_TO_LANG`

## Moduláris mechanizmus

- Importálás: Igény szerint pontosan importálhat funkciókat, tilthatja a teljes modul közvetlen importálását (kerülje az `import * as x` vagy a nagy objektumok importját)
- Exportálás: Objektumok exportálásának letiltása. A függvények és változók exportálása egységként, például `export const X=1, abc=()=>{};`. Próbálja meg kombinálni őket a const + vesszővel az exportált tartalom deklarálásához. Ha egy fájlnak csak egy funkciója van, használja a `export default` parancsot
- Hacsak nem kell belsőleg meghívnia az export alapértelmezett függvényt, kerülje az állandók deklarálását, majd az exportálást a fájl végén.
- Elérési út felbontása: Az aktuális könyvtár elérési útjának lekérésekor az `import.meta.dirname` értéket kell használni

## hiba

- Kerülje el a karakterlánc-hibákat, és használja a const parancsot az állandó hibakódok deklarálásához.
- Ha hibás adatinformációt kell visszaadnia, használja a [hibakód, hibaüzenet,...] Ezt így a hibaüzenet nem szöveges leírás, hanem számérték (például [FILE_OVERSIZE, file_size, max_size])
-

## Próbáljon meg böngészőkompatibilis API-kat használni

- Titkosítás és visszafejtés: kényszerítse ki a natív Web Crypto API használatát
- Bináris adatok: Ha bináris adatokkal foglalkozik, próbálja meg egységesen használni az `Uint8Array`-t