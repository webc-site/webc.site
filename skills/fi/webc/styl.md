Käytä standardia `css`, älä kirjoita `css`:a alkaen `-webkit-` (kehys lisää sen automaattisesti)

Kehitä komponenttityylejä moderneilla `css` ominaisuuksilla, kuten `css nesting` , `flex` jne.

Samaa arvoa varten voidaan kirjoittaa, määrittää ja käyttää uudelleen useita css-valitsijoita yhdessä paikassa, ja `stylus`-toiminto on poistettu käytöstä.

Pikseliyksikkö on `px`, ja arvon on oltava kokonaisluku.

Noudata Applen uusimman Liquid Glassin muotoilun estetiikkaa

`svg` Aseta kuva `svg` -kansioon ja käytä sitä `styl` suhteellisella polulla

Älä käytä ulkovarjoja, käytä sisävarjoja useammin, eikä sisävarjoja saa siirtää.

Älä aseta `font-family`

`stylus` Käyttää vain yksinkertaisimpia muuttujia ja sisennyksen syntaksimuotoa ilman lisäominaisuuksia

On kiellettyä käyttää `@import`:tä muiden komponenttyylien tuomiseen (mukaan lukien komponentit `_.styl` ja `demo/_.styl`); komponenteista riippuvat tyylit tuodaan komponentin JS-tiedoston kautta