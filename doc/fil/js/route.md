# route.js

Pamamahala ng pagruruta sa front-end na isang pahina

## nowUrl()

Kunin ang kasalukuyang path ng URL na inalis ang nangungunang slash

Return value: kasalukuyang path string

## route(hook)

Irehistro ang callback sa pakikinig para sa mga pagbabago sa ruta. Kapag nagrerehistro, isasagawa ito nang isang beses kasama ang kasalukuyang landas.

parameter:
- `hook` : Route monitoring callback function
  - parameter
    - `url` : kasalukuyang landas
    - `pre` : huling landas

Ibinalik na halaga: Hindi nakarehistrong function ng paglilinis

## setPre(url)

I-save ang huling naitala na URL

parameter:
- `url` : string ng path

## preUrl()

Kunin ang URL ng huling tala

Return value: string ng huling path

## refresh(url)

Pilitin ang lahat ng callback sa pakikinig sa ruta na ma-trigger sa tinukoy na landas at i-update bago

parameter:
- `url` : target na landas, default na kasalukuyang landas

## removeSlash(url)

Alisin ang mga slash sa mga header ng path

parameter:
- `url` : string ng path

Return value: path pagkatapos alisin ang nangungunang slash

## setUrl(url)

I-update ang status ng URL ng address bar ng browser

parameter:
- `url` : target na landas

Return value: 1 kung talagang nagbabago ang path

## goto(url)

I-update ang address ng browser at mag-trigger ng pag-refresh ng ruta

parameter:
- `url` : target na landas