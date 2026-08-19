# route.js

Egyoldalas front-end útválasztás-kezelés

## nowUrl()

Az aktuális URL elérési út lekérése a kezdő perjel eltávolításával

Visszatérési érték: aktuális elérési út

## route(hook)

Regisztrálja a visszahívást az útvonal módosításához. Regisztrációkor egyszer lefut az aktuális elérési úttal.

paraméter:
- `hook` : Útvonalfigyelő visszahívás funkció
  - paraméter
    - `url` : jelenlegi elérési út
    - `pre` : utolsó elérési út

Visszatérési érték: Nem regisztrált tisztítási funkció

## setPre(url)

Mentse el az utoljára rögzített URL-t

paraméter:
- `url` : elérési út

## preUrl()

Szerezze meg az utolsó rekord URL-jét

Visszatérési érték: utolsó elérési út

## refresh(url)

Kényszerítse az összes útvonalfigyelő visszahívást a megadott útvonalon, és frissítse elő

paraméter:
- `url` : cél elérési út, alapértelmezett aktuális útvonal

## removeSlash(url)

Távolítsa el a perjeleket az útvonalfejlécekből

paraméter:
- `url` : elérési út

Visszatérési érték: elérési út a bevezető perjel eltávolítása után

## setUrl(url)

Frissítse a böngésző címsorának URL-állapotát

paraméter:
- `url` : cél elérési útja

Visszatérési érték: 1, ha az elérési út valóban megváltozik

## goto(url)

Frissítse a böngésző címét, és indítsa el az útvonal frissítését

paraméter:
- `url` : cél elérési útja