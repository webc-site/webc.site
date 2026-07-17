# hashActive.js

Navigation link highlighting based on URL anchors and viewport scrolling

## default(link_li, cls)

Automatically highlight navigation links corresponding to the currently visible area based on page scroll position and URL anchor point changes.

parameter:
- `link_li` : Navigation link DOM element list
- `cls` : Active CSS class name, default `"A"`

Return value: Cancel all listening cleanup functions