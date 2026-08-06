# md/streamRender.js

Markdown pretočno upodabljanje

## default(container, source)

Pretakanje upodabljanja besedila Markdown v določen vsebnik DOM, podpora za učinke kazalca pisalnega stroja in samodejno drsenje

parameter:
- `container` : vsebniški element DOM, ki gosti upodobljeno vsebino
- `source` : vir besedilnih podatkov ReadableStream

Vrnjena vrednost:

- `cancel` : Funkcija za zaustavitev upodabljanja in branja toka podatkov
- `setStop` : Funkcija za nastavitev, ali želite začasno ustaviti samodejno drsenje
  - parameter
    - `val` : logična vrednost za premor ali ne