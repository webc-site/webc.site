# route.js

Usa ka panid sa atubangan-katapusan nga pagdumala sa ruta

## nowUrl()

Kuhaa ang kasamtangan nga agianan sa URL nga gikuha ang nag-unang slash

Ibalik nga bili: kasamtangan nga string sa dalan

## route(hook)

Irehistro ang callback sa pagpaminaw alang sa mga kausaban sa ruta. Kung magparehistro, kini ipatuman kausa sa kasamtangan nga agianan.

parameter:
- `hook` : Pag-monitor sa ruta sa callback function
  - parametro
    - `url` : kasamtangang dalan
    - `pre` : katapusang dalan

Ibalik nga bili: Wala rehistrado nga function sa pagpanglimpyo

## setPre(url)

I-save ang katapusang natala nga URL

parameter:
- `url` : path string

## preUrl()

Kuhaa ang URL sa katapusang rekord

Pagbalik nga bili: katapusang linya sa dalan

## refresh(url)

Pugsa ang tanang mga callback sa pagpamati sa ruta nga ma-trigger sa espesipikong dalan ug i-update ang pre

parameter:
- `url` : target nga dalan, default kasamtangan nga dalan

## removeSlash(url)

Kuhaa ang mga laslas gikan sa mga ulohan sa agianan

parameter:
- `url` : path string

Ibalik nga bili: agianan human makuha ang nag-unang slash

## setUrl(url)

I-update ang status sa URL sa address bar sa browser

parameter:
- `url` : target nga dalan

Ibalik nga bili: 1 kung ang agianan nagbag-o gyud

## goto(url)

I-update ang adres sa browser ug i-trigger ang pag-refresh sa ruta

parameter:
- `url` : target nga dalan