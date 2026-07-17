# md/streamRender.js

Rendering tal-istrimjar ta' Markdown

## default(container, source)

Tgħaddi streaming tat-test Markdown fil-kontenitur DOM speċifikat, li jappoġġja l-effetti tal-cursor tat-tajprajter u scrolling awtomatiku

parametru:
- `container` : Element tal-kontenitur DOM li jospita kontenut ipprovdut
- `source` : Sors tad-dejta tat-test ReadableStream

Valur tar-ritorn:

- `cancel` : Funzjoni li twaqqaf ir-rendiment u l-qari tal-fluss tad-dejta
- `setStop` : Funzjoni biex tissettja jekk twaqqafx l-iskrolljar awtomatiku
  - parametru
    - `val` : Valur boolean jekk tieqafx jew le