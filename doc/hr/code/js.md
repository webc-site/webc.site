# Specifikacija JS koda

## stil kodiranja

- Jednostavan, elegantan i učinkovit, koristeći najmoderniju js sintaksu
- Podijelite preduge funkcije, a dizajn sučelja trebao bi biti niske veze i visoke kohezije.
- Više koristite nizove + petlje/forEach/map i pišite manje ponavljajućeg koda
- Nemojte pisati komentare funkcija u jednostavnom kodu kako biste izbjegli pretjerane komentare. Složena logika i posebne potrebe objašnjene su na profinjenom kineskom.
- Ponovljeni kod je apstrahiran u funkcije kako bi se smanjila redundantnost. Na primjer, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` može se napisati kao `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklaracija varijable: Kombinirajte više uzastopnih `const` deklaracija u jednu izjavu. Umjesto da ga napišete u tri retka, napišite `const a=1, b=2, c=3;`
- Asinkrona obrada: koristi `await`, zabrani upotrebu `.then` lančanih poziva
- Nemojte automatski generirati kod za rukovanje iznimkama, nemojte automatski pisati `try...catch` (`try ... catch` održava se ručno, postojeći `try catch` ne treba brisati)
- Prvo čiste funkcije: pišite samo čiste funkcije, nikada klase
- Koristite funkcije strelica `const funcName = () => {}` i nemojte koristiti ključnu riječ `function` (osim generatora); ako možete koristiti .bind za vezanje parametara, izbjegavajte definiranje funkcija
- Ponovno korištenje koda: Obratite pozornost na ponovno korištenje, izdvajajte više malih funkcija i odlučno izbjegavajte veliki broj sličnih ili kopirano zalijepljenih struktura koda.
- Pristup objektu: dajte prioritet korištenju dodjele destrukturiranja za izdvajanje potrebnih atributa, izbjegavajte opetovano interno korištenje točaka za pristup dubokim i ugniježđenim atributima i spojite ponovljene neobavezne lančane prosudbe
- Nemojte koristiti objekte za parametre funkcije, nemojte pisati `{a,b,c}`, pišite `a, b, c`; ako postoji mnogo izbornih parametara, koristite [[broj konfiguracijskih stavki, konfiguracijskih stavki], [broj konfiguracijskih stavki, konfiguracijskih stavki],..] U ovoj paradigmi konfiguracijske stavke definirane su numeričkim konstantama
- Za vraćanje s više vrijednosti, koristite niz `[a,b,c]` umjesto `{a,b,c}`. Ako postoji više od 3 povratne vrijednosti, upotrijebite numeričke konstante za definiranje položajnog značenja.
- Nema potrebe za nizom za predstavljanje stanja, koristite numeričke konstante za definiranje stanja
- Ne koristi se predložak niza (``), koristi se ulančavanje niza (+), osim za uvoz (pogodno za Vite statičku analizu)
- Za petlju, ako trebate serijski broj, koristite `++i` umjesto `i++`
- Izbjegavajte nepotrebno`?.`i zabranite obrambeno programiranje
- Naziv varijable ne mora biti u množini i završava s `_li` kako bi označio popis.

## Konvencija imenovanja

- Imenovanje teži minimalizmu. Koristite kratke ali smislene nazive, na primjer: koristite `rm` umjesto `remove`, `delete`, `del`. Međutim, također biste trebali izbjegavati ići u krajnosti, na primjer: nemojte koristiti jedno slovo `m` umjesto `map`
- Pokušajte koristiti samo glagole u imenovanju funkcija. Ako možete upotrijebiti jednu riječ da to izrazite, nemojte koristiti dvije riječi. Imenice se odražavaju u nazivima datoteka. Ako nazivu datoteke trebate dodati glagol, stavite imenicu na prvo mjesto, a glagol na zadnje. Na primjer: `profileSet.js` umjesto `setProfile.js`
- Naziv varijable: koristite stil podcrtavanja (snake_case), na primjer `user_auth_token`; ako je varijabla funkcija, koristite stil imenovanja malim slovima
- Naziv funkcije: Koristite mala slova camelCase (camelCase), na primjer `userData`
- Parametri funkcije: Ako je to funkcija povratnog poziva, nazovite je malim slovima, kao što je `onChange`
- Konstantne definicije na razini modula koriste podcrtani stil velikim slovima `UPPER_SNAKE_CASE`
- Nemojte pisati `get`, takve besmislene prefikse, kao što su: pišite `cookieByHeader` umjesto `getCookie`
- Globalne/konstante na razini modula: koristite podcrtani stil velikim slovima (UPPER_SNAKE_CASE), npr. `CODE_TO_ID`, `ID_TO_LANG`

## Modularni mehanizam

- Uvoz: Uvoz funkcionira točno na zahtjev, zabrani izravan uvoz cijelog modula (izbjegavajte `import * as x` ili uvozite velike objekte)
- Izvoz: Onemogući izvoz objekata. Izvezite funkcije i varijable kao jedinice, kao što je `export const X=1, abc=()=>{};`. Pokušajte ih kombinirati s const + zarezom da deklarirate izvezeni sadržaj. Ako datoteka ima samo jednu funkciju, koristite `export default`
- Osim ako ne morate interno pozvati zadanu funkciju izvoza, izbjegavajte prvo deklarirati konstante, a zatim ih izvoziti na kraju datoteke.
- Rezolucija staze: Prilikom dobivanja trenutne staze direktorija, mora se koristiti `import.meta.dirname`

## pogreška

- Izbjegavajte pogreške niza i koristite const za deklariranje stalnih kodova pogrešaka.
- Ako trebate vratiti pogrešne informacije o podacima, upotrijebite [kôd pogreške, poruka o pogrešci,...] Na taj način poruka o pogrešci nije tekstualni opis, već numerička vrijednost (kao što je [FILE_OVERSIZE, file_size, max_size])
-

## Pokušajte koristiti API-je kompatibilne s preglednikom

- Šifriranje i dešifriranje: Prisilno korištenje izvornog Web Crypto API-ja
- Binarni podaci: Kada radite s binarnim podacima, pokušajte jednoobrazno koristiti `Uint8Array`