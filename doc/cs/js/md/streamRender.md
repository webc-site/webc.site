# md/streamRender.js

Markdown streaming rendering

## default(container, source)

Streamování vykreslování textu Markdown do určeného kontejneru DOM, podpora efektů kurzoru psacího stroje a automatického posouvání

parametr:
- `container` : Kontejnerový prvek DOM hostující vykreslený obsah
- `source` : Zdroj textových dat ReadableStream

Návratová hodnota:

- `cancel` : Funkce pro zastavení vykreslování a čtení datového proudu
- `setStop` : Funkce pro nastavení, zda se má pozastavit automatické rolování
  - parametr
    - `val` : Booleovská hodnota, zda se má pozastavit nebo ne