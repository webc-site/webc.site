# Toast.js

Toast pop-up message prompt

## toast(render, timeout)

Ipakita ang karaniwang prompt na pop-up window

parameter:
- `render` : Rendering function, na ginagamit upang i-customize ang pop-up na nilalaman
  - parameter
    - `el` : DOM na elemento ng pop-up window
- `timeout` : Mag-antala ng mga segundo para sa awtomatikong pagsara, default 9, walang awtomatikong pagsara kapag 0

Return value: DOM na elemento ng pop-up window

## toastErr(render, timeout)

Ipakita ang popup ng mensahe ng error

parameter:
- `render` : Rendering function, na ginagamit upang i-customize ang pop-up na nilalaman
  - parameter
    - `el` : DOM na elemento ng pop-up window
- `timeout` : Mag-antala ng mga segundo para sa awtomatikong pagsara, default 9, walang awtomatikong pagsara kapag 0

Return value: DOM na elemento ng pop-up window ng error