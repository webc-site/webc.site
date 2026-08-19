# md/streamRender.js

Markdown streymi flutningur

## default(container, source)

Straumflutningur á Markdown-texta í tilgreindan DOM-ílát, styður bendil á ritvél og sjálfvirka skrunun

færibreyta:
- `container` : DOM gámaeining sem hýsir birt efni
- `source` : ReadableStream textagagnagjafi

Skilagildi:

- `cancel` : Aðgerð til að stöðva flutning og lestur gagnastraums
- `setStop` : Aðgerð til að stilla hvort gera eigi hlé á sjálfvirkri skrun
  - færibreytu
    - `val` : Boolean gildi hvort á að gera hlé eða ekki