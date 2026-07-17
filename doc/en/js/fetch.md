# fetch.js

Network request tool function based on fetch encapsulation

## F(url, opt)

Send a network request and return a response object

parameter:
- `url` : Request address
- `opt` : `fetch` options object

Return value: Response object

## f(attr)

A higher-order function that wraps a request and parses the returned content in a specified format

parameter:
- `attr` : response body parsing attribute name

Return value: function to asynchronously request and parse content
  - Parameter
    - `url` : Request address
    - `opt` : `fetch` options object
  - Return value: parsed content

## fTxt

Send a network request and return the response body in text format

parameter:
- `url` : Request address
- `opt` : `fetch` options object

Return value: response text

## fJson(url, opt)

Send a network request and parse and return the response body in JSON format

parameter:
- `url` : Request address
- `opt` : `fetch` options object

Return value: parsed JSON object

## fBin(url, opt)

Send a network request and return the response body as a binary byte array

parameter:
- `url` : Request address
- `opt` : `fetch` options object

Return value: byte array