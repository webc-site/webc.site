# Toast.js

Kërkesa e mesazhit pop-up të dolli

## toast(render, timeout)

Shfaq dritaren kërcyese standarde të shpejtë

parametri:
- `render` : Funksioni i interpretimit, i përdorur për të personalizuar përmbajtjen që shfaqet
  - parametri
    - `el` : Elementi DOM i dritares kërcyese
- `timeout` : Vonesa sekondash për mbylljen automatike, parazgjedhja 9, pa mbyllje automatike kur 0

Vlera e kthimit: Elementi DOM i dritares pop-up

## toastErr(render, timeout)

Shfaq dritaren e mesazhit të gabimit

parametri:
- `render` : Funksioni i interpretimit, i përdorur për të personalizuar përmbajtjen që shfaqet
  - parametri
    - `el` : Elementi DOM i dritares kërcyese
- `timeout` : Vonesa sekondash për mbylljen automatike, parazgjedhja 9, pa mbyllje automatike kur 0

Vlera e kthimit: Elementi DOM i dritares pop-up të gabimit