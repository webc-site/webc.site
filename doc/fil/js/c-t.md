# c-t.js

internasyonalisasyon ng HTML

Ang tag na `<c-t>key</c-t>` ay naka-customize, at `key` ang susi ng language pack.

## cTranSet(el, genUrl)

Itakda ang text para sa `c-t`.

parameter:
- `el` : root element, maaaring maipasa ang global sa `document`
- `genUrl` : function na kumuha ng language pack dictionary
  - parameter
    - `code` : code ng wika
  - Return value: isang language pack dictionary object, o isang Promise na nagresolve sa object na ito