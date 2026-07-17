# JS kodearen zehaztapena

## kodetze estiloa

- Sinplea, dotorea eta eraginkorra, js sintaxirik modernoena erabiliz
- Zatitu funtzio luzeegiak eta interfazearen diseinuak akoplamendu baxua eta kohesio handia izan behar du.
- Erabili array + loops/forEach/map gehiago eta idatzi kode gutxiago errepikakorra
- Ez idatzi funtzioen iruzkinak kode sinplean gehiegizko iruzkinak ekiditeko. Logika konplexua eta behar bereziak txinera finduan azaltzen dira.
- Errepikaturiko kodea funtzioetan abstraitzen da erredundantzia murrizteko. Adibidez, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` gisa idatz daiteke
- Aldagaien adierazpena: konbinatu hainbat `const` deklarazio jarraian adierazpen batean. Hiru lerrotan idatzi beharrean, idatzi `const a=1, b=2, c=3;`
- Prozesamendu asinkronoa: erabili `await`, debekatu `.then` kate-deiak erabiltzea
- Ez sortu automatikoki salbuespenak kudeatzeko kodea, ez idatzi automatikoki `try...catch` (`try ... catch` eskuz mantentzen da, lehendik dagoen `try catch` ez da ezabatu behar)
- Funtzio hutsak lehenik: funtzio hutsak bakarrik idatzi, inoiz klaseak
- Erabili gezi-funtzioak `const funcName = () => {}` eta ez erabili `function` gako-hitza (sorgailuak izan ezik); parametroak lotzeko .bind erabil dezakezu, saihestu funtzioak definitzea
- Kodea berrerabiltzea: arreta jarri berrerabilpenari, funtzio txiki gehiago atera eta irmoki saihestu antzeko edo kopiatu itsatsitako kode-egitura ugari.
- Objektu sarbidea: Lehenetsi desegituraketa-esleipena erabiltzea beharrezkoak diren atributuak ateratzeko, saihestu puntuak behin eta berriz erabiltzea barnean atributu sakon eta habiaratuak atzitzeko, eta errepikatzen diren hautazko kate-judizioak bateratu
- Ez erabili objektuak funtzio-parametroetarako, ez idatzi `{a,b,c}`, idatzi `a, b, c`; aukerako parametro asko badaude, erabili [[konfigurazio-elementu kopurua, konfigurazio-elementu], [konfigurazio-elementu kopurua, konfigurazio-elementu],..] Paradigma honetan, konfigurazio-elementuak zenbakizko konstanteekin definitzen dira
- Balio anitzeko itzulketetarako, erabili `[a,b,c]` arrayaren ordez, `{a,b,c}`. Itzultzeko 3 balio baino gehiago badaude, erabili zenbakizko konstanteak posizioaren esanahia definitzeko.
- Ez da katerik behar egoera adierazteko, erabili zenbakizko konstanteak egoera definitzeko
- Ez da kate txantiloirik (``) erabiltzen, kateen kateamendua (+) erabiltzen da, inportazioa izan ezik (erosoa Vite-ren analisi estatikorako)
- Begizta egiteko, serie-zenbaki bat behar baduzu, erabili `++i` `i++` ordez
- Saihestu alferrikako`?.` eta debekatu defentsako programazioa
- Aldagaiaren izenak ez du zertan plurala izan, eta `_li`-rekin amaitzen da zerrenda bat adierazteko.

## Izen-konbentzioa

- Izendatzeak minimalismoa bilatzen du. Erabili izen labur baina esanguratsuak, adibidez: erabili `rm` `remove`, `delete`, `del`ren ordez. Hala ere, muturrera joatea saihestu behar duzu, adibidez: ez erabili `m` letra bakar bat `map`ren ordez.
- Saiatu funtzioen izendapenean aditzak soilik erabiltzen. Hitz bat adierazteko erabil dezakezun, ez erabili bi hitz. Izenak fitxategi-izenetan islatzen dira. Fitxategiaren izenari aditz bat gehitu behar badiozu, jarri izena lehena eta aditza azkena. Adibidez: `profileSet.js` `setProfile.js`ren ordez
- Aldagaiaren izena: erabili azpimarratzeko estiloa (suge_kasua), adibidez `user_auth_token`; aldagaia funtzio bat bada, erabili minuskulak minuskulak izendatzeko estiloa
- Funtzioaren izena: erabili camelCase minuskulak (camelCase), adibidez `userData`
- Funtzio-parametroak: itzulera-funtzioa bada, izendatu gamelu minuskulaz, adibidez `onChange`
- Modulu-mailako konstanteen definizioek `UPPER_SNAKE_CASE` maiuskulak azpimarratzeko estiloa erabiltzen dute
- Ez idatzi `get`, esanahirik gabeko aurrizkirik, esate baterako: idatzi `cookieByHeader` `getCookie`ren ordez.
- Konstante globalak/modulu mailakoak: erabili letra larriz azpimarratzeko estiloa (UPPER_SNAKE_CASE), adibidez. `CODE_TO_ID`, `ID_TO_LANG`

## Mekanismo modularra

- Inportatu: inportatu funtzioak zehatz-mehatz eskatuz gero, debekatu modulu osoa zuzenean inportatu (saihestu `import * as x` edo inportatu objektu handiak)
- Esportatu: desgaitu objektuen esportazioa. Esportatu funtzioak eta aldagaiak unitate gisa, adibidez, `export const X=1, abc=()=>{};`. Saiatu horiek konsta + komarekin konbinatzen esportatutako edukia deklaratzeko. Fitxategi batek funtzio bakarra badu, erabili `export default`
- Esportazio-funtzio lehenetsia barrutik deitu behar ez baduzu, saihestu lehenik konstanteak deklaratzea eta gero fitxategiaren amaieran esportatzea.
- Bide-ebazpena: uneko direktorio-bidea eskuratzean, `import.meta.dirname` erabili behar da

## akatsa

- Saihestu kate-erroreak eta erabili const etengabeko errore-kodeak deklaratzeko.
- Datuen informazio okerra itzuli behar baduzu, erabili [error-kodea, errore-mezua,...] Horrela, errore-mezua ez da testu-deskribapena, zenbakizko balio bat baizik ([FILE_OVERSIZE, file_size, max_size], adibidez)
-

## Saiatu arakatzailearekin bateragarriak diren APIak erabiltzen

- Enkriptatzea eta deszifratzea: behartu jatorrizko Web Crypto APIa erabiltzea
- Datu bitarrak: bitarrarekin tratatzerakoan, saiatu `Uint8Array` uniformeki erabiltzen