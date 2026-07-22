
  Rakendage komponenti `js` komponent `Light DOM` abil failis `src/webc/componentname.js`.

  Kasutage teiste komponentide importimiseks suhtelisi teid, näiteks: `import "./component name.js"` (iga komponendi JS-failis tuleb alguses importida vastav `_.styl`, näiteks `import "./component name/_.styl";`).

  `this` Määrake ainult veebikomponendi natiivne tagasihelistamise funktsioon, kirjutage teised iseseisvate funktsioonidena, sisestage `this` ja vajalikud parameetrid.

  Lisaks väliselt eksponeeritud liidestele on puude raputamise optimeerimise ja koodi tihendamise hõlbustamiseks keelatud siduda kohandatud privaatseid atribuute `this` (kasutage funktsioonide mahalaadimiseks `this.$`) ja kõrge järgu funktsioone saab kasutada vahemuutujate hoidmiseks sulgemiste tagastamiseks.

  Ärge kirjutage `constructor`, atribuut saadakse `connectedCallback`.


  Avalike funktsioonide taaskasutamiseks jaotises `src/js/` vaadake [./js.md](./js.md)

  Konteinerite puhul kasutage atribuutide asemel `slot`.
  Kui teil on vaja andmeid laadida, avage laadimisliides ülemisele kihile asünkroonse tagasihelistamise funktsiooni kujul ja kasutage tagastusväärtuse vormingu märkimiseks kommentaare.
  Komponendid peavad vältima mälulekkeid. `disconnectedCallback` ühendage desinstallimise sündmused üheks funktsiooniks `this.$` ja ärge kirjutage mitut desinstallifunktsiooni.
  Liidese tagastusväärtus võib olla üks väärtus, massiiv või massiivi massiiv, mitte objekt.
  Kui komponendil on mitu olekut, kasutage mitmerealisi kommentaare, et kirjeldada selgelt iga oleku andmevormingut. (Ärge eelnege igale kommentaarireale `*`)
  Oleku vahetamine, kasutades numbrilisi konstante (määratletud väärtusega `const.js`).
  Tagasihelistamise laadimisel kasutage animatsiooni kuvamiseks nuppu `const xx = newEl('b');xx.className="Ing"` ja lisage komponendi JS-faili `import "./Ing.js"` kaudu sõltuvusi.