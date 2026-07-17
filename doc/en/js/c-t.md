# c-t.js

HTML internationalization

The tag `<c-t>key</c-t>` is customized, and `key` is the key of the language pack.

## cTranSet(el, genUrl)

Set the text for `c-t`.

parameter:
- `el` : root element, global can be passed in `document`
- `genUrl` : function to obtain language pack dictionary
  - Parameter
    - `code` : language code
  - Return value: a language pack dictionary object, or a Promise that resolves to this object