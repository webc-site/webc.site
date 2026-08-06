# route.js

Manajemen rute ngarep-mburi siji kaca

## nowUrl()

Entuk path URL saiki kanthi garis miring sing dicopot

Nilai bali: string path saiki

## route(hook)

Ndhaftar callback ngrungokake kanggo owah-owahan rute. Nalika ndhaptar, bakal dieksekusi sapisan karo path saiki.

parameter:
- `hook` : Fungsi panggilan balik pemantauan rute
  - paramèter
    - `url` : path saiki
    - `pre` : path pungkasan

Nilai bali: Fungsi ngresiki sing ora kadhaptar

## setPre(url)

Simpen URL sing direkam pungkasan

parameter:
- `url` : string path

## preUrl()

Entuk URL rekaman pungkasan

Nilai bali: string path pungkasan

## refresh(url)

Meksa kabeh callback ngrungokake rute kanggo micu ing path sing ditemtokake lan nganyari pra

parameter:
- `url` : target path, default path saiki

## removeSlash(url)

Mbusak garis miring saka header path

parameter:
- `url` : string path

Nilai bali: path sawise njabut garis miring anjog

## setUrl(url)

Nganyari status URL bar alamat browser

parameter:
- `url` : target path

Nilai bali: 1 yen path bener diganti

## goto(url)

Nganyari alamat browser lan micu refresh rute

parameter:
- `url` : target path