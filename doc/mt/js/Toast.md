# Toast.js

Toast messaġġ pop-up fil-pront

## toast(render, timeout)

Uri tieqa pop-up fil-pront standard

parametru:
- `render` : Funzjoni ta' rendering, użata biex tippersonalizza kontenut pop-up
  - parametru
    - `el` : Element DOM tat-tieqa pop-up
- `timeout` : Dewmien sekondi għall-għeluq awtomatiku, default 9, l-ebda għeluq awtomatiku meta 0

Valur tar-ritorn: element DOM tat-tieqa pop-up

## toastErr(render, timeout)

Uri popup messaġġ ta 'żball

parametru:
- `render` : Funzjoni ta' rendering, użata biex tippersonalizza kontenut pop-up
  - parametru
    - `el` : Element DOM tat-tieqa pop-up
- `timeout` : Dewmien sekondi għall-għeluq awtomatiku, default 9, l-ebda għeluq awtomatiku meta 0

Valur tar-ritorn: element DOM tat-tieqa pop-up tal-iżball