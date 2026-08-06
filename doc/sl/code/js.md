# Specifikacija kode JS

## slog kodiranja

- Enostavno, elegantno in učinkovito, z uporabo najsodobnejše sintakse js
- Razdelite predolge funkcije, zasnova vmesnika pa mora biti nizka povezava in visoka kohezija.
- Več uporabljajte polja + zanke/forEach/map in pišite manj ponavljajoče se kode
- Funkcijskih komentarjev ne pišite v preprosto kodo, da se izognete pretiranim komentarjem. Zapletena logika in posebne potrebe so razložene v prefinjeni kitajščini.
- Ponavljajoča se koda je abstrahirana v funkcije, da se zmanjša redundanca. Na primer, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` lahko zapišemo kot `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklaracija spremenljivke: Združite več zaporednih `const` deklaracij v en stavek. Namesto v treh vrsticah napišite `const a=1, b=2, c=3;`
- Asinhrona obdelava: uporabi `await`, prepovedi uporabo verižnih klicev `.then`
- Ne ustvarjaj samodejno kode za obravnavanje izjem, ne piši samodejno `try...catch` (`try ... catch` se vzdržuje ročno, obstoječega `try catch` ne smete izbrisati)
- Najprej čiste funkcije: pišite samo čiste funkcije, nikoli razredov
- Uporabite puščične funkcije `const funcName = () => {}` in ne uporabite ključne besede `function` (razen generatorjev); če lahko uporabite .bind za povezovanje parametrov, se izogibajte definiranju funkcij
- Ponovna uporaba kode: Bodite pozorni na ponovno uporabo, ekstrahirajte več majhnih funkcij in se odločno izogibajte velikemu številu podobnih ali kopirano prilepljenih struktur kode.
- Dostop do objekta: dajte prednost uporabi dodelitve destrukturiranja za ekstrahiranje zahtevanih atributov, izogibajte se večkratni interni uporabi pik za dostop do globokih in ugnezdenih atributov ter združite ponavljajoče se neobvezne verižne presoje
- Ne uporabljajte objektov za parametre funkcije, ne pišite `{a,b,c}`, pišite `a, b, c`; če je veliko izbirnih parametrov, uporabite [[število konfiguracijskih elementov, konfiguracijski elementi], [število konfiguracijskih elementov, konfiguracijski elementi],..] V tej paradigmi so konfiguracijski elementi definirani s številskimi konstantami
- Za vrnitve z več vrednostmi uporabite polje `[a,b,c]` namesto `{a,b,c}`. Če je vrnjenih več kot 3 vrednosti, uporabite številske konstante za določitev pozicijskega pomena.
- Za predstavitev stanja ni potrebe po nizu, za določitev stanja uporabite številske konstante
- Predloga niza (``) se ne uporablja, uporablja se veriženje nizov (+), razen pri uvozu (priročno za statično analizo Vite)
- Zanka: če potrebujete serijsko številko, uporabite `++i` namesto `i++`
- Izogibajte se nepotrebnemu`?.`in prepovedajte obrambno programiranje
- Ni nujno, da je ime spremenljivke množinsko in se konča z `_li`, da označuje seznam.

## Dogovor o poimenovanju

- Poimenovanje zasleduje minimalizem. Uporabljajte kratka, a smiselna imena, na primer: uporabite `rm` namesto `remove`, `delete`, `del`. Vendar se izogibajte tudi skrajnostim, na primer: ne uporabite ene same črke `m` namesto `map`
- Pri poimenovanju funkcij poskusite uporabljati samo glagole. Če lahko uporabite eno besedo, da to izrazite, ne uporabite dveh besed. Samostalniki se odražajo v imenih datotek. Če morate imenu datoteke dodati glagol, postavite samostalnik najprej in glagol nazadnje. Na primer: `profileSet.js` namesto `setProfile.js`
- Imena spremenljivk: uporabite slog podčrtaja (snake_case), na primer `user_auth_token`
- Ime funkcije: Uporabite male črke CamelCase (camelCase), na primer `userData`
- Parametri funkcije: Če gre za funkcijo povratnega klica, jo poimenujte z malimi črkami, na primer `onChange`
- Konstantne definicije na ravni modula uporabljajo podčrtani slog z velikimi črkami `UPPER_SNAKE_CASE`
- Ne pišite `get`, takšnih nesmiselnih predpon, kot je: pišite `cookieByHeader` namesto `getCookie`
- Globalne/konstante na ravni modula: uporabite podčrtani slog z velikimi črkami (UPPER_SNAKE_CASE), npr. `CODE_TO_ID`, `ID_TO_LANG`

## Modularni mehanizem

- Uvoz: Uvoz deluje natančno na zahtevo, prepoved neposrednega uvoza celotnega modula (izogibajte se `import * as x` ali uvozite velike predmete)
- Izvoz: onemogoči izvoz predmetov. Izvozite funkcije in spremenljivke kot enote, kot je `export const X=1, abc=()=>{};`. Poskusite jih združiti s const + vejica, da označite izvoženo vsebino. Če ima datoteka samo eno funkcijo, uporabite `export default`
- Razen če morate interno poklicati privzeto funkcijo izvoza, se izogibajte, da najprej deklarirate konstante in jih nato izvozite na koncu datoteke.
- Ločljivost poti: Pri pridobivanju trenutne poti imenika je treba uporabiti `import.meta.dirname`

## napaka

- Izogibajte se napakam v nizu in uporabite const za deklaracijo stalnih kod napak.
- Če morate vrniti napačne informacije o podatkih, uporabite [kodo napake, sporočilo o napaki,...]. Tako sporočilo o napaki ni besedilni opis, ampak številska vrednost (kot je [FILE_OVERSIZE, file_size, max_size])
-

## Poskusite uporabiti API-je, združljive z brskalnikom

- Šifriranje in dešifriranje: vsilite uporabo izvornega Web Crypto API
- Binarni podatki: Ko imate opravka z binarnimi podatki, poskusite uporabljati `Uint8Array` enotno