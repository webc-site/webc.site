
  `js` osagairako, inplementatu osagaia `Light DOM` erabiliz `src/webc/componentname.js`-en.

  Erabili bide erlatiboak beste osagai batzuk inportatzeko, hala nola: `inportatu "./component name.js"` (Osagai bakoitzaren JS fitxategian, inportatu mendekotasunak lehenik, eta inportatu gero dagokion `_.styl`, adibidez `inportatu "./component name/_.styl";`).

  `this` Web-osagaiaren jatorrizko dei-itzulera funtzioa soilik definitu, gainerakoak funtzio independente gisa idatzi, `this` sartu eta beharrezko parametroak.

  Kanpotik agerian dauden interfazeez gain, zuhaitzak astintzeko optimizazioa eta kodearen konpresioa errazteko, debekatuta dago atributu pribatu pertsonalizatuak lotzea `this`-n (erabili `this.$` funtzioak deskargatzeko), eta maila handiko funtzioak erabil daitezke tarteko aldagaiak edukitzeko itxierak itzultzeko.

  Ez idatzi `constructor`, atributua `connectedCallback`n lortzen da.


  Ikus [./js.md](./js.md) `src/js/` azpian dauden funtzio publikoak berrerabiltzeko

  Edukiontzietarako, erabili `slot` atributuen ordez.
  Datuak kargatu behar badituzu, erakutsi kargatzeko interfazea goiko geruzara dei-itzulera asinkrono baten moduan, eta erabili iruzkinak itzultzeko balioaren formatua adierazteko.
  Osagaiek memoria-ihesak saihestu behar dituzte. `disconnectedCallback` batu desinstalazio-gertaerak funtzio bakarrean `this.$` eta ez idatzi hainbat desinstalazio-funtzio.
  Interfazea itzultzeko balioa balio bakar bat, array bat edo array array bat izan daiteke, ez objektu bat.
  Osagaiak hainbat egoera baditu, erabili lerro anitzeko iruzkinak egoera bakoitzaren datu-formatua argi deskribatzeko. (Ez jarri iruzkinen lerro bakoitzaren aurretik `*`)
  Egoera aldatzea, zenbakizko konstanteak erabiliz (`const.js`-n definitua).
  Deia kargatzen ari denean, erabili `const xx = newEl('b');xx.className="Ing"` animazioa bistaratzeko eta sartu mendekotasunak `import "./Ing.js"` bidez osagai JS fitxategian.