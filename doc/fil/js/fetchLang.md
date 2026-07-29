# fetchLang.js

Asynchronous na i-load ang mga language pack at i-bind ang mga update callback

## fetchLang(getDict)

Gumawa ng language pack listener para asynchronous na makuha ang language pack at magsagawa ng refresh callback kapag nagbago ang wika

parameter:
- `getDict` : Kunin ang asynchronous na function ng package ng wika
  - parameter
    - `code` : code ng wika
  - Return value: diksyunaryo ng language pack

Return value: function para magrehistro ng refresh callback
- parameter
  - `refresh` : I-refresh ang function ng callback kapag na-update ang wika
    - parameter
      - `i18n` : Language pack dictionary object
      - `code` : Kasalukuyang code ng wika
- Return value: function na i-unregister ang refresh callback