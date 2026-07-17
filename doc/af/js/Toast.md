# Toast.js

Roosterbrood-opspringboodskap-boodskap

## toast(render, timeout)

Wys standaard opspringvenster

parameter:
- `render` : Weergawe-funksie, gebruik om opspringinhoud aan te pas
  - parameter
    - `el` : DOM-element van die opspringvenster
- `timeout` : Vertraag sekondes vir outomatiese afskakeling, verstek 9, geen outomatiese afskakeling wanneer 0

Terugkeerwaarde: DOM-element van die opspringvenster

## toastErr(render, timeout)

Wys foutboodskap-opspringer

parameter:
- `render` : Weergawe-funksie, gebruik om opspringinhoud aan te pas
  - parameter
    - `el` : DOM-element van die opspringvenster
- `timeout` : Vertraag sekondes vir outomatiese afskakeling, verstek 9, geen outomatiese afskakeling wanneer 0

Terugkeerwaarde: DOM-element van die foutopspringvenster