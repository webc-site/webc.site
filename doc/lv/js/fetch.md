# fetch.js

Tīkla pieprasījuma rīka funkcija, kuras pamatā ir iekapsulēšana

## F(url, opt)

Nosūtiet tīkla pieprasījumu un atgrieziet atbildes objektu

parametrs:
- `url` : Pieprasīt adresi
- `opt` : `fetch` opciju objekts

Atgriešanas vērtība: atbildes objekts

## f(attr)

Augstākas kārtas funkcija, kas iesaiņo pieprasījumu un parsē atgriezto saturu noteiktā formātā

parametrs:
- `attr` : atbildes pamatteksta parsēšanas atribūta nosaukums

Atgrieztā vērtība: funkcija, lai asinhroni pieprasītu un parsētu saturu
  - parametrs
    - `url` : Pieprasīt adresi
    - `opt` : `fetch` opciju objekts
  - Atgriešanas vērtība: parsēts saturs

## fTxt

Nosūtiet tīkla pieprasījumu un nosūtiet atbildes pamattekstu teksta formātā

parametrs:
- `url` : Pieprasīt adresi
- `opt` : `fetch` opciju objekts

Atgriešanas vērtība: atbildes teksts

## fJson(url, opt)

Nosūtiet tīkla pieprasījumu un parsējiet un atgrieziet atbildes pamattekstu JSON formātā

parametrs:
- `url` : Pieprasīt adresi
- `opt` : `fetch` opciju objekts

Atgrieztā vērtība: parsēts JSON objekts

## fBin(url, opt)

Nosūtiet tīkla pieprasījumu un atgrieziet atbildes pamattekstu kā bināru baitu masīvu

parametrs:
- `url` : Pieprasīt adresi
- `opt` : `fetch` opciju objekts

Atgriešanas vērtība: baitu masīvs