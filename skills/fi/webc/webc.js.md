
  Käytä `js`-komponenttia `Light DOM`-komponentin toteuttamiseen `src/component name/_.js`-tiedostossa.

  Käytä suhteellisia polkuja muiden komponenttien tuomiseen, kuten: `tuo "../komponentin nimi/_.js"` (`js` ei tuo `styl`, kehys lisää sen automaattisesti).

  `this` Määritä vain verkkokomponentin natiivi takaisinsoittotoiminto, kirjoita muut itsenäisiksi funktioiksi, välitä `this` ja vaaditut parametrit.

  Ulkoisesti näkyvissä olevien rajapintojen lisäksi puiden tärisevän optimoinnin ja koodin pakkaamisen helpottamiseksi on kiellettyä sitoa mukautettuja yksityisiä attribuutteja `this`:iin (käytä `this.$`-toimintoa purkamiseen), ja korkealuokkaisia ​​​​funktioita voidaan käyttää sulkemaan välimuuttujia.

  Älä kirjoita `constructor`, attribuutti saadaan muodossa `connectedCallback`.


  Katso [./js.md](./js.md), jos haluat käyttää uudelleen kohdassa `src/js/` olevia julkisia toimintoja.

  Käytä säilöissä `slot` attribuuttien sijaan.
  Jos sinun on ladattava tietoja, paljasta latausliitäntä ylemmälle kerrokselle asynkronisen takaisinsoittofunktion muodossa ja käytä kommentteja ilmaisemaan palautusarvon muoto.
  Komponenttien on vältettävä muistivuotoja. `disconnectedCallback` yhdistä asennuksen poistotapahtumat yhdeksi funktioksi `this.$` äläkä kirjoita useita poistotoimintoja.
  Liittymän palautusarvo voi olla yksittäinen arvo, taulukko tai taulukoiden joukko, ei objekti.
  Jos komponentilla on useita tiloja, käytä monirivisiä kommentteja kuvaamaan selkeästi kunkin tilan tietomuoto. (Älä edeltä jokaista kommenttiriviä `*`:lla)
  Tilan vaihto, käyttäen numeerisia vakioita (määritetty arvoon `const.js`).
  Kun takaisinsoitto latautuu, näytä animaatio `const xx = newEl('b');xx.className="Ing"` ja `@import "../Ing/_.styl"` kohdassa `_.styl`