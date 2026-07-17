
  Pro komponentu `js` použijte `Light DOM` k implementaci komponenty do `src/název komponenty/_.js`.

  K importu dalších komponent použijte relativní cesty, například: `import "../název komponenty/_.js"` (`js` neimportuje `styl`, framework jej automaticky vloží).

  `this` Definujte pouze nativní funkci zpětného volání webové komponenty, ostatní napište jako nezávislé funkce, předejte `this` a požadované parametry.

  Kromě externě exponovaných rozhraní je za účelem usnadnění optimalizace protřepávání stromů a komprese kódu zakázáno vázat vlastní soukromé atributy na `this` (použijte `this.$` pro funkce uvolnění) a funkce vyššího řádu lze použít k vrácení uzávěrů pro uložení meziproměnných.

  Nepište `constructor`, atribut se získá v `connectedCallback`.


  Pro opětovné použití veřejných funkcí pod `src/js/` viz [./js.md](./js.md)

  U kontejnerů použijte místo atributů `slot`.
  Pokud potřebujete načíst data, vystavte načítací rozhraní horní vrstvě ve formě asynchronní funkce zpětného volání a pomocí komentářů uveďte formát návratové hodnoty.
  Komponenty se musí vyhýbat únikům paměti. `disconnectedCallback` sloučit události odinstalace do jedné funkce `this.$` a nezapisovat více odinstalačních funkcí.
  Vrácenou hodnotou rozhraní může být jedna hodnota, pole nebo pole polí, nikoli objekt.
  Pokud má komponenta více stavů, použijte víceřádkové komentáře k jasnému popisu formátu dat každého stavu. (Nepřed každým řádkem komentářů uveďte `*`)
  Přepínání stavů pomocí číselných konstant (definováno jako `const.js`).
  Během načítání zpětného volání zobrazte animaci s `const xx = newEl('b');xx.className="Ing"` a `@import "../Ing/_.styl"` v `_.styl`