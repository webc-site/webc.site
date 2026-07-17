# md/streamRender.js

Markdowni voogesituse renderdamine

## default(container, source)

Markdowni teksti voogesitus määratud DOM-konteinerisse, kirjutusmasina kursori efektide ja automaatse kerimise toetamine

parameeter:
- `container` : DOM-i konteineri element, mis majutab renderdatud sisu
- `source` : ReadableStreami teksti andmeallikas

Tagastusväärtus:

- `cancel` : funktsioon renderdamise ja andmevoo lugemise peatamiseks
- `setStop` : funktsioon automaatse kerimise peatamise määramiseks
  - parameeter
    - `val` : tõeväärtus, kas peatada või mitte