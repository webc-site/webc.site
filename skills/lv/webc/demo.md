# Demonstrācija

Skatiet `src/webc/BoxX/demo` un izstrādājiet komponenta demonstrāciju šeit: `src/webc/component name/demo/`

`demo/_.pug`, demonstrācijas apakšveidne

Ir iekļauti tikai minimālisma komponentu tagi, nav nepieciešama pilnīga lapa, un stilu un skriptu importēšana ir aizliegta. Ietvars tiks automātiski ievadīts (piemēram, `demo/_.styl`, `demo/_.js`).

Nerakstiet virsrakstu (piemēram, nerakstiet xxx demo), nerakstiet komponenta nosaukumu, neievadiet komponentu, ierakstiet tikai demo lietošanas gadījuma statusu (ja statusa nav, nerakstiet nosaukumu)

Elementa `_.pug` saknes elements izmanto `main.demo.Lg` , kas ir definējis stilu sadaļā `demo/_.styl` un nenosaka paša `main.demo.Lg` stilu.

Displeja komponenta konteineram jābūt līdzinātam ar `main.demo.Lg`, un starp tiem nedrīkst būt `margin` un `padding`, jo `main.demo` pats jau ir iestatījis `padding`, un tā iestatīšana tukša tiks atkārtota.

`demo/_.styl` Ja ir tikai viens displeja komponents, tā konteineram nebūs ārējā rāmja, un tas būs iestatīts tikai `max-width` (jo prezentācijas konteiners automātiski pievienos ārējo rāmi). Ja ir vairāki konteineri, to var atdalīt ar ārējo rāmi.

Nerakstiet `img` `demo/_.pug`, izmantojiet `demo/_.styl`, lai iestatītu fona attēlu

Ja komponentam ir vairākas veidlapas, lūdzu, parādiet tās secībā (piemēram, ielāde, tukši dati, dati, neizdevās utt.), elastīgs vertikāls izkārtojums

`demo/_.styl`: `stylus` demonstrācijas lapas stils, lūdzu, ievērojiet [./styl.md](./styl.md) koda specifikācijas un dizaina estētiku.

Ja nerakstiet `@import '../_.styl'`, lai importētu demonstrējamo komponentu, tas tiks automātiski ievadīts; ir aizliegts izmantot `@import` `demo/_.styl`, lai importētu citus komponentu stilus. Ja demonstrācija ir atkarīga no citiem komponentiem (piemēram, pogas `.Btn`), lūdzu, importējiet atkarīgos komponentus, izmantojot `import "../../Btn.js"` `demo/_.js`.

`demo/_.js`: izsaukt skriptu, formāts `export default (root) => { ... }`, parametrs `root` ir saimniekdators (`document` vai smilškastes konteinera saknes elements)

`D.createElement` ir aizliegts, izmantojiet `newEl`, ko minēja [./js.md](./js.md)

`js` ir aizliegts lietot `c-t` un internacionalizācijai `fLang`

Ja `../komponenta nosaukums.js` (`../komponenta nosaukums.js` ir jāparāda pats komponents un joprojām ir jāimportē citi atkarīgie komponenti, kas nepieciešami demonstrācijai), ir nepieciešams tikai `import` un netiek importēts konkrēts saturs, ko var izlaist (ietvars to automātiski ievadīs).

`pug` Nav nepieciešams importēt `js` un `styl` , sistēma tos automātiski ievadīs