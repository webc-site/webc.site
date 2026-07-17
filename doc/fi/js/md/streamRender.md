# md/streamRender.js

Markdown-suoratoisto

## default(container, source)

Markdown-tekstin suoratoisto määritettyyn DOM-säiliöön, kirjoituskoneen kohdistintehosteiden ja automaattisen vierityksen tuki

parametri:
- `container` : DOM-säilöelementti isännöi renderöityä sisältöä
- `source` : ReadableStream-tekstitietolähde

Palautusarvo:

- `cancel` : Toiminto renderöinnin ja tietovirran lukemisen lopettamiseksi
- `setStop` : Toiminto, jolla voit määrittää, keskeytetäänkö automaattinen vieritys
  - parametri
    - `val` : Boolen arvo, keskeytetäänkö vai ei