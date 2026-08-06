# route.js

Stýring á einni síðu framhlið leiðarstjórnunar

## nowUrl()

Fáðu núverandi vefslóð með fremstu skástrikinu fjarlægt

Skilagildi: núverandi slóðstrengur

## route(hook)

Skráðu hlustunarhringinguna fyrir leiðarbreytingar. Við skráningu verður það keyrt einu sinni með núverandi slóð.

færibreyta:
- `hook` : Leiðvöktun svarhringingaraðgerð
  - færibreytu
    - `url` : núverandi slóð
    - `pre` : síðasta slóð

Skilagildi: Óskráð hreinsunaraðgerð

## setPre(url)

Vistaðu síðustu skráða vefslóðina

færibreyta:
- `url` : slóðstrengur

## preUrl()

Fáðu slóð síðustu skráningar

Skilagildi: síðasta slóðstrengur

## refresh(url)

Þvingaðu allar leiðarhlustunarhringingar til að koma af stað á tilgreindri slóð og uppfærðu fyrirfram

færibreyta:
- `url` : markslóð, sjálfgefin núverandi slóð

## removeSlash(url)

Fjarlægðu skástrik úr slóðhausum

færibreyta:
- `url` : slóðstrengur

Skilagildi: slóð eftir að fremstu skástrik hefur verið fjarlægð

## setUrl(url)

Uppfærðu stöðu veffangastikunnar á vefslóð vafra

færibreyta:
- `url` : markslóð

Skilagildi: 1 ef slóðin breytist í raun

## goto(url)

Uppfærðu veffang vafrans og kveiktu á leiðaruppfærslu

færibreyta:
- `url` : markslóð