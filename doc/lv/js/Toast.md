# Toast.js

Toast uznirstošā ziņojuma uzvedne

## toast(render, timeout)

Rādīt standarta uzvednes uznirstošo logu

parametrs:
- `render` : renderēšanas funkcija, ko izmanto uznirstošā satura pielāgošanai
  - parametrs
    - `el` : uznirstošā loga DOM elements
- `timeout` : automātiskās izslēgšanās aizkaves sekundes, noklusējuma 9, bez automātiskas izslēgšanas, ja 0

Atgrieztā vērtība: uznirstošā loga DOM elements

## toastErr(render, timeout)

Rādīt kļūdas ziņojuma uznirstošo logu

parametrs:
- `render` : renderēšanas funkcija, ko izmanto uznirstošā satura pielāgošanai
  - parametrs
    - `el` : uznirstošā loga DOM elements
- `timeout` : automātiskās izslēgšanās aizkaves sekundes, noklusējuma 9, bez automātiskas izslēgšanas, ja 0

Atgrieztā vērtība: kļūdas uznirstošā loga DOM elements