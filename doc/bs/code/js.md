# Specifikacija JS koda

## stil kodiranja

- Jednostavan, elegantan i efikasan, koristeći najmoderniju js sintaksu
- Podijelite preduge funkcije, a dizajn interfejsa bi trebao imati nisku povezanost i visoku koheziju.
- Koristite nizove + petlje/forEach/map više i pišite manje ponavljajući kod
- Nemojte pisati komentare funkcija u jednostavnom kodu kako biste izbjegli pretjerane komentare. Složena logika i posebne potrebe su objašnjene na prefinjenom kineskom.
- Ponavljani kod se apstrahuje u funkcije kako bi se smanjila redundantnost. Na primjer, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` se može napisati kao `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklaracija varijable: Kombinirajte više uzastopnih `const` deklaracija u jednu naredbu. Umjesto da ga pišete u tri reda, napišite `const a=1, b=2, c=3;`
- Asinkrona obrada: koristite `await`, zabranite korištenje `.then` lančanih poziva
- Nemojte automatski generirati kod za obradu izuzetaka, nemojte automatski pisati `try...catch` (`try ... catch` se održava ručno, postojeći `try catch` ne treba brisati)
- Prvo čiste funkcije: samo pišite čiste funkcije, nikada klase
- Koristite funkcije strelice `const funcName = () => {}` i ne koristite ključnu riječ `function` (osim generatora); ako možete koristiti .bind za povezivanje parametara, izbjegavajte definiranje funkcija
- Ponovna upotreba koda: Obratite pažnju na ponovnu upotrebu, izvucite više malih funkcija i odlučno izbjegavajte veliki broj sličnih ili kopirano zalijepljenih struktura koda.
- Pristup objektu: dajte prioritet korištenjem destrukturiranja za izdvajanje potrebnih atributa, izbjegavajte uzastopnu internu upotrebu tačaka za pristup dubokim i ugniježđenim atributima i spojite ponovljene opcione lančane prosudbe
- Nemojte koristiti objekte za parametre funkcije, nemojte pisati `{a,b,c}`, pisati `a, b, c`; ako postoji mnogo opcionih parametara, koristite [[broj konfiguracijskih stavki, konfiguracijskih stavki], [broj konfiguracijskih stavki, konfiguracijskih stavki],..] U ovoj paradigmi, konfiguracijske stavke su definirane numeričkim konstantama
- Za povrate više vrijednosti, koristite niz `[a,b,c]` umjesto `{a,b,c}`. Ako postoji više od 3 povratne vrijednosti, koristite numeričke konstante za definiranje pozicionog značenja.
- Nema potrebe da string predstavlja stanje, koristite numeričke konstante da definišete stanje
- Ne koristi se šablon niza (``), koristi se konkatenacija nizova (+), osim za uvoz (pogodno za Vite statičku analizu)
- Za petlju, ako vam je potreban serijski broj, koristite `++i` umjesto `i++`
- Izbjegavajte nepotrebno`?.` i zabranite defanzivno programiranje
- Naziv varijable ne mora biti u množini i završava se sa `_li` kako bi označio listu.

## Konvencija imenovanja

- Imenovanje teži minimalizmu. Koristite kratka ali smislena imena, na primjer: koristite `rm` umjesto `remove`, `delete`, `del`. Međutim, također biste trebali izbjegavati ići u ekstreme, na primjer: nemojte koristiti jedno slovo `m` umjesto `map`
- Pokušajte koristiti samo glagole u imenovanju funkcija. Ako možete upotrijebiti jednu riječ da to izrazite, nemojte koristiti dvije riječi. Imenice se odražavaju u nazivima datoteka. Ako trebate dodati glagol imenu datoteke, stavite imenicu na prvo mjesto, a glagol na posljednje. Na primjer: `profileSet.js` umjesto `setProfile.js`
- Ime varijable: koristite stil podvlačenja (snake_case), na primjer `user_auth_token`; ako je varijabla funkcija, upotrijebite stil imenovanja malih slova deva
- Naziv funkcije: Koristite mala slova camelCase (camelCase), na primjer `userData`
- Parametri funkcije: Ako se radi o funkciji povratnog poziva, nazovite je malim slovima kamila, kao što je `onChange`
- Definicije konstante na razini modula koriste stil podvlačenja velikim slovima `UPPER_SNAKE_CASE`
- Nemojte pisati `get`, takve besmislene prefikse, kao što je: napišite `cookieByHeader` umjesto `getCookie`
- Globalne/na nivou modula konstante: koristite stil podvlačenja velikim slovima (UPPER_SNAKE_CASE), npr. `CODE_TO_ID`, `ID_TO_LANG`

## Modularni mehanizam

- Uvoz: Uvoz funkcionira precizno na zahtjev, zabrani direktan uvoz cijelog modula (izbjegavajte `import * as x` ili uvozite velike objekte)
- Izvoz: Onemogućite izvoz objekata. Izvezite funkcije i varijable kao jedinice, kao što je `export const X=1, abc=()=>{};`. Pokušajte ih kombinirati sa const + zarezom da deklarirate izvezeni sadržaj. Ako datoteka ima samo jednu funkciju, koristite `export default`
- Osim ako ne trebate interno pozvati zadanu funkciju izvoza, izbjegavajte prvo deklariranje konstanti, a zatim njihovo izvoz na kraju datoteke.
- Rezolucija staze: Prilikom dobivanja trenutne putanje direktorija, mora se koristiti `import.meta.dirname`

## greška

- Izbjegavajte greške u nizu i koristite const da deklarirate konstantne kodove grešaka.
- Ako trebate vratiti pogrešne podatke o podacima, koristite [šid greške, poruka o grešci,...] Na ovaj način poruka o grešci nije tekstualni opis, već numerička vrijednost (kao što je [FILE_OVERSIZE, file_size, max_size])
-

## Pokušajte koristiti API-je kompatibilne s pretraživačem

- Šifriranje i dešifriranje: Prisilite korištenje izvornog Web Crypto API-ja
- Binarni podaci: Kada radite s binarnim, pokušajte koristiti `Uint8Array` ujednačeno