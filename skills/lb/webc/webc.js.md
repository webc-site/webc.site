
  Fir den `js` Komponent implementéiert de Komponent mat `Light DOM` an `src/webc/componentname.js`.

  Benotzt relativ Weeër fir aner Komponenten z'importéieren, sou wéi: `Import "./component name.js"` (An der JS-Datei vun all Komponent muss déi entspriechend `_.styl` am Ufank importéiert ginn, wéi z.

  `this` Definéiert nëmmen déi gebierteg Réckrufffunktioun vun der Webkomponent, schreift déi aner als onofhängeg Funktiounen, passéiert `this` an déi erfuerderlech Parameteren.

  Zousätzlech zu den extern ausgesaten Schnëttplazen, fir Bamschütteloptimiséierung a Codekompressioun ze erliichteren, ass et verbueden personaliséiert privat Attributer op `this` ze binden (benotzt `this.$` fir d'Entluedsfunktiounen), an d'High-Commande Funktiounen kënne benotzt ginn fir Zoumaache fir Zwëschvariablen ze halen.

  Schreift net `constructor`, den Attribut gëtt an `connectedCallback` kritt.


  Referéiert op [./js.md](./js.md) fir déi ëffentlech Funktiounen ënner `src/js/` ze benotzen

  Fir Container benotzt `slot` anstatt Attributer.
  Wann Dir braucht Donnéeën ze lued, aussetzt der Luede Interface un der ieweschter Layer an der Form vun enger asynchronous callback Funktioun, a benotzen Kommentaren de Format vun der Retour Wäert uginn.
  Komponente mussen Erënnerung Auslafe vermeiden. `disconnectedCallback` fusionéieren Uninstall-Evenementer an eng Funktioun `this.$` a schreift net méi Uninstallfunktiounen.
  Den Interface Retour Wäert kann en eenzege Wäert, eng Array oder eng Array vun Arrays sinn, net en Objet.
  Wann d'Komponente méi Staaten huet, benotzt Multi-Linn Kommentarer fir d'Dateformat vun all Staat kloer ze beschreiwen. (Fannt all Zeil vun Kommentaren net mat `*` vir)
  Staatswiessel, mat numeresche Konstanten (definéiert op `const.js`).
  Wann de Réckruff gelueden ass, benotzt `const xx = newEl('b');xx.className="Ing"` fir d'Animatioun ze weisen, an Ofhängegkeeten duerch `import "./Ing.js"` an der Komponent JS-Datei aféieren.