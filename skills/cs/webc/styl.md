Použijte standardní `css`, nepište `css` začínající na `-webkit-` (rámec jej automaticky vloží)

Vyvíjejte styly komponent pomocí moderních funkcí `css`, jako jsou `css nesting` , `flex` atd.

Pro stejnou hodnotu lze zapsat, definovat a znovu použít více selektorů css na jednom místě a funkce `stylus` je zakázána.

Jednotka pixelu je `px` a hodnota musí být celé číslo.

Sledujte estetiku designu nejnovějšího tekutého skla Apple

`svg` Umístěte obrázek do složky `svg` a použijte jej ve složce `styl` s relativní cestou

Nepoužívejte vnější stíny, používejte častěji vnitřní stíny a vnitřní stíny by se neměly vytlačovat.

Nenastavujte `font-family`

`stylus` Používá pouze nejzákladnější proměnné a formát syntaxe odsazení, bez pokročilých funkcí

Je zakázáno používat `@import` k importu jiných stylů komponent (včetně komponent `_.styl` a `demo/_.styl`); styly závislé na komponentě se importují prostřednictvím souboru JS komponenty