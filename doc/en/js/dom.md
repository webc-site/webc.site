# dom.js

Document variable abbreviations and shortcut functions

## D

`document` Shortcut reference to the object

## B

`document.body` Shortcut reference to the object

## css(txt, root)

## newEl

Create DOM elements

parameter:
- `tagName` : element tag name

Return value: newly created DOM element

## newLi(...tag_li)

Create multiple DOM elements in batches

parameter:
- `tag_li` : tag name list

Return value:
- Array containing all newly created DOM elements

## cE(name, cls)

Register Web Components custom elements

parameter:
- `name` : Custom element name, `c-` prefix will be added automatically
- `cls` : the class of the custom element