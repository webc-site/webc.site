# JS Code Spezifizéierung

## coding Stil

- Einfach, elegant an effizient, benotzt déi modernst js Syntax
- Split ze laang Funktiounen, an den Interface Design soll niddereg Kopplung an héich Kohäsioun ginn.
- Benotzt Arrays + Loops / forEach / Kaart méi a schreift manner repetitive Code
- Schreift keng Funktiounskommentarer am einfache Code fir exzessiv Kommentarer ze vermeiden. Komplex Logik a speziell Bedierfnesser ginn op raffinéiert Chinesesch erkläert.
- Widderholl Code gëtt a Funktiounen abstraktéiert fir Redundanz ze reduzéieren. Zum Beispill kann `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` als `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` geschriwwe ginn
- Variabel Deklaratioun: Kombinéiert verschidde konsekutiv `const` Deklaratiounen an eng Ausso. Amplaz et an dräi Zeilen ze schreiwen, schreift `const a=1, b=2, c=3;`
- Asynchron Veraarbechtung: benotzt `await`, verbitt d'Benotzung vun `.then` Kettenruffen
- Generéiere net automatesch Ausnahmshandhabungscode, schreiwt net automatesch `try...catch` (`try ... catch` gëtt manuell erhale, existéierend `try catch` soll net geläscht ginn)
- Pure Funktiounen fir d'éischt: schreift nëmme pure Funktiounen, ni Klassen
- Benotzt Pfeilfunktiounen `const funcName = () => {}` a benotzt net de `function` Schlësselwuert (ausser Generatoren); wann Dir .binde kënnt fir Parameteren ze binden, vermeiden d'Definitioun vu Funktiounen
- Code weiderbenotzen: Opgepasst op weiderbenotzen, Extrait méi kleng Funktiounen, a vermeide resolut eng grouss Zuel vun ähnlechen oder kopéiert-pasted Code Strukturen.
- Objektzougang: Prioritéit mat der Destrukturéierungsaufgab fir erfuerderlech Attributer ze extrahieren, vermeit ëmmer erëm Punkten intern ze benotzen fir Zougang zu déif an nestet Attributer ze kréien, a fusionéiere widderholl fakultativ Kette Uerteeler
- Benotzt keng Objekter fir Funktiounsparameter, schreift net `{a,b,c}`, schreift `a, b, c`; wann et vill fakultativ Parameteren sinn, benotzt [[Zuel vun Konfiguratiounsartikelen, Konfiguratiounsartikelen], [Zuel vun Konfiguratiounsartikelen, Konfiguratiounsartikelen], ..] An dësem Paradigma sinn d'Konfiguratiounsartikele mat numeresche Konstanten definéiert
- Fir Multi-Wäert zréckzeginn, benotzt Array `[a,b,c]` amplaz `{a,b,c}`. Wann et méi wéi 3 Retourwäerter sinn, benotzt numeresch Konstanten fir d'Positiounsbedeitung ze definéieren.
- Et gëtt kee Besoin fir eng String fir de Staat ze representéieren, benotzt numeresch Konstanten fir de Staat ze definéieren
- Keng Stringschabloun (``) gëtt benotzt, Stringkoncatenatioun (+) gëtt benotzt, ausser fir Import (bequem fir Vite statesch Analyse)
- Fir Loop, wann Dir eng Seriennummer braucht, benotzt `++i` amplaz `i++`
- Vermeiden onnéideg`?.` a verbidden defensiv programméiere
- De Variabelnumm brauch net Plural ze sinn, an endet mat `_li` fir eng Lëscht unzeweisen.

## Numm Konventioun

- Den Numm verfolgt Minimalismus. Benotzt kuerz awer sënnvoll Nimm, zum Beispill: benotzt `rm` amplaz `remove`, `delete`, `del`. Dir sollt awer och vermeiden an Extremer ze goen, zum Beispill: benotzt keen eenzege Buschtaf `m` amplaz `map`
- Probéiert nëmme Verben am Funktiounsnumm ze benotzen. Wann Dir ee Wuert benotze kënnt fir et auszedrécken, benotzt keng zwee Wierder. Substantiver ginn an Dateinumm reflektéiert. Wann Dir e Verb un den Dateinumm addéiere musst, setzt w.e.g. d'Substantiv als éischt an d'Verb lescht. Zum Beispill: `profileSet.js` amplaz `setProfile.js`
- Variabel Numm: benotzt Ënnersträichstil (Snake_case), zum Beispill `user_auth_token`; wann d'Variabel ass eng Funktioun, benotzen kleng Kamellen Fall Numm Stil
- Funktioun Numm: Benotzt kleng camelCase (camelCase), zum Beispill `userData`
- Funktiounsparameter: Wann et eng Réckrufffunktioun ass, nennt et a klenge Buschtawen, sou wéi `onChange`
- Modul-Niveau konstant Definitiounen benotzen grouss Buschtawen ënnersträichen Stil `UPPER_SNAKE_CASE`
- Schreift net `get`, sou sënnlos Präfixe, wéi: schreiwen `cookieByHeader` amplaz `getCookie`
- Global / Modul-Niveau konstante: benotzen grouss Buschtawen ënnersträichen Stil (UPPER_SNAKE_CASE), f.eks. `CODE_TO_ID`, `ID_TO_LANG`

## Modular Mechanismus

- Import: Import Funktiounen präzis op Ufro, verbitt den direkten Import vum ganze Modul (evitéiert `import * as x` oder importéiert grouss Objeten)
- Export: Deaktivéiert den Export vun Objeten. Export Funktiounen a Variabelen als Eenheeten, wéi `export const X=1, abc=()=>{};`. Probéiert se mat engem const + Comma ze kombinéieren fir den exportéierten Inhalt ze deklaréieren. Wann e Fichier nëmmen eng Funktioun huet, benotzt `export default`
- Ausser Dir musst d'Export-Standardfunktioun intern nennen, vermeit d'éischt Konstanten ze deklaréieren an se dann um Enn vun der Datei exportéieren.
- Wee Resolutioun: Wann Dir den aktuellen Verzeechneswee kritt, muss `import.meta.dirname` benotzt ginn

## Feeler

- Vermeit Stringfehler a benotzt const fir konstante Feelercodes ze deklaréieren.
- Wann Dir falsch Dateninformatioune muss zréckginn, benotzt [Feelercode, Fehlermeldung, ...] Op dës Manéier ass d'Fehlermeldung keng Textbeschreiwung, mee en numeresche Wäert (wéi [FILE_OVERSIZE, file_size, max_size])
-

## Probéiert Browser-kompatibel APIen ze benotzen

- Verschlësselung an Entschlësselung: Force d'Benotzung vun gebierteg Web Crypto API
- Binär Donnéeën: Wann Dir mat Binäre beschäftegt, probéiert `Uint8Array` eenheetlech ze benotzen