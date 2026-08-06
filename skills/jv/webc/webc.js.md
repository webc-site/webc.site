
  Kanggo komponèn `js`, laksanakaké komponèn nganggo `Light DOM` ing `src/webc/componentname.js`.

  Gunakake jalur relatif kanggo ngimpor komponen liyane, kayata: `import "./component name.js"` (Ing file JS saben komponen, ngimpor dependensi dhisik, banjur ngimpor `_.styl` sing cocog, contone `import "./component name/_.styl";`).

  `this` Mung nemtokake fungsi callback native saka komponen web, nulis liyane minangka fungsi independen, pass ing `this` lan paramèter sing dibutuhake.

  Saliyane ing antarmuka eksternal sing kapapar, kanggo nggampangake optimasi wit-goyang lan kompresi kode, dilarang ngiket atribut pribadi khusus ing `this` (nggunakake `this.$` kanggo fungsi unloading), lan fungsi dhuwur-urutan bisa digunakake kanggo nutup maneh kanggo nahan variabel penengah.

  Aja nulis `constructor`, atribut dipikolehi ing `connectedCallback`.


  Delengen [./js.md](./js.md) kanggo nggunakake maneh fungsi umum ing `src/js/`

  Kanggo wadhah, gunakake `slot` tinimbang atribut.
  Yen sampeyan kudu mbukak data, mbukak antarmuka loading menyang lapisan ndhuwur ing wangun fungsi callback bedo, lan nggunakake komentar kanggo nunjukaké format Nilai bali.
  Komponen kudu nyegah bocor memori. `disconnectedCallback` gabungke acara mbusak instalan dadi siji fungsi `this.$` lan aja nulis sawetara fungsi uninstall.
  Nilai bali antarmuka bisa dadi nilai siji, array, utawa array array, dudu obyek.
  Yen komponèn wis sawetara negara, nggunakake komentar multi-baris kanggo cetha njlèntrèhaké format data saben negara. (Aja ndhisiki saben baris komentar nganggo `*`)
  Ngalih negara, nggunakake konstanta numerik (ditetepake `const.js`).
  Nalika callback lagi dimuat, gunakake `const xx = newEl('b');xx.className="Ing"` kanggo nampilake animasi, lan kenalake dependensi liwat `import "./Ing.js"` ing file JS komponen.