
  Fyrir `js` íhlutinn, notaðu `Light DOM` til að útfæra íhlutinn í `src/component name/_.js`.

  Notaðu afstæðar slóðir til að flytja inn aðra íhluti, svo sem: `innflutningur "../heiti hluta/_.js"` (`js` flytur ekki inn `styl`, ramminn mun sjálfkrafa sprauta því inn).

  `this` Skilgreindu aðeins innfædda afturhringingaraðgerð vefhlutans, skrifaðu hinar sem sjálfstæðar aðgerðir, sendu inn `this` og nauðsynlegar færibreytur.

  Til viðbótar við utanaðkomandi viðmót, til þess að auðvelda hagræðingu á trjáhristingi og kóðaþjöppun, er bannað að binda sérsniðna einkaeiginleika á `this` (notaðu `this.$` fyrir afhleðsluaðgerðir), og hægt er að nota háttsettar aðgerðir til að skila lokunum til að halda millibreytum.

  Ekki skrifa `constructor`, eigindin er fengin í `connectedCallback`.


  Sjá [./js.md](./js.md) til að endurnýta opinberu aðgerðir undir `src/js/`

  Fyrir ílát, notaðu `slot` í stað eiginleika.
  Ef þú þarft að hlaða gögnum skaltu afhjúpa hleðsluviðmótið fyrir efra laginu í formi ósamstilltra svarhringingaraðgerða og nota athugasemdir til að gefa til kynna snið skilgildisins.
  Íhlutir verða að forðast minnisleka. `disconnectedCallback` sameina fjarlægingarviðburði í eina aðgerð `this.$` og ekki skrifa margar fjarlægingaraðgerðir.
  Viðmótsskilgildið getur verið eitt gildi, fylki eða fylki, ekki hlutur.
  Ef íhluturinn hefur mörg ástand, notaðu marglínu athugasemdir til að lýsa gagnasniði hvers ríkis á skýran hátt. (Ekki á undan hverri línu af athugasemdum með `*`)
  Skipti á ástandi, með því að nota tölufasta (skilgreint sem `const.js`).
  Á meðan svarhringingin er að hlaðast skaltu sýna hreyfimynd með `const xx = newEl('b');xx.className="Ing"` og `@import "../Ing/_.styl"` í `_.styl`