Brug standard `css`, skriv ikke `css` begyndende med `-webkit-` (rammeværket vil automatisk injicere det)

Udvikl komponentstile med moderne `css` funktioner såsom `css nesting` , `flex` osv.

For den samme værdi kan flere css-vælgere skrives, defineres og genbruges på ét sted, og funktionen `stylus` er deaktiveret.

Pixelenheden er `px`, og værdien skal være et heltal.

Følg designæstetikken i Apples seneste Liquid Glass

`svg` Placer billedet i mappen `svg` og brug det i `styl` med en relativ sti

Brug ikke ydre skygger, brug inderskygger oftere, og de indre skygger bør ikke forskydes.

Indstil ikke `font-family`

`stylus` Bruger kun de mest grundlæggende variabler og indrykningssyntaksformat uden avancerede funktioner

Det er forbudt at bruge `@import` til at importere andre komponentstile (inklusive komponenter `_.styl` og `demo/_.styl`); komponentafhængige stilarter importeres gennem komponentens JS-fil