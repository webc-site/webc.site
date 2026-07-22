Use standard `css`, do not write `css` starting with `-webkit-` (the framework will automatically inject it)

Develop component styles with modern `css` features such as `css nesting` , `flex` etc.

For the same value, multiple css selectors can be written, defined and reused in one place, and the function of `stylus` is disabled.

The pixel unit is `px`, and the value must be an integer.

Follow the design aesthetic of Apple’s latest Liquid Glass

`svg` Place the image in the `svg` folder and use it in `styl` with a relative path

Do not use outer shadows, use inner shadows more often, and the inner shadows should not be displaced.

Do not set `font-family`

`stylus` Only uses the most basic variables and indentation syntax format, without advanced features

It is prohibited to use `@import` to import other component styles (including components `_.styl` and `demo/_.styl`); component dependent styles are imported through the component's JS file