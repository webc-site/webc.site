# Toast.js

Toast pop-up message prompt

## toast(render, timeout)

Show standard prompt pop-up window

parameter:
- `render` : Rendering function, used to customize pop-up content
  - Parameter
    - `el` : DOM element of the pop-up window
- `timeout` : Delay seconds for automatic shutdown, default 9, no automatic shutdown when 0

Return value: DOM element of the pop-up window

## toastErr(render, timeout)

Show error message popup

parameter:
- `render` : Rendering function, used to customize pop-up content
  - Parameter
    - `el` : DOM element of the pop-up window
- `timeout` : Delay seconds for automatic shutdown, default 9, no automatic shutdown when 0

Return value: DOM element of the error pop-up window