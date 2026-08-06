# fetchLang.js

Asynchronously load language packs and bind update callbacks

## fetchLang(getDict)

Create a language pack listener to asynchronously obtain the language pack and execute a refresh callback when the language changes

parameter:
- `getDict` : Get the asynchronous function of the language package
  - Parameter
    - `code` : language code
  - Return value: language pack dictionary

Return value: function to register refresh callback
- Parameter
  - `refresh` : Refresh callback function when language is updated
    - Parameter
      - `i18n` : Language pack dictionary object
      - `code` : Current language code
- Return value: function to unregister the refresh callback