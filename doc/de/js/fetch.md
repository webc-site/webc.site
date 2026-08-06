# fetch.js

Funktion des Netzwerkanforderungstools basierend auf der Abrufkapselung

## F(url, opt)

Senden Sie eine Netzwerkanfrage und geben Sie ein Antwortobjekt zurück

Parameter:
- `url`: Adresse anfordern
- `opt` : `fetch` Optionsobjekt

Rückgabewert: Antwortobjekt

## f(attr)

Eine Funktion höherer Ordnung, die eine Anfrage umschließt und den zurückgegebenen Inhalt in einem angegebenen Format analysiert

Parameter:
- `attr`: Name des Antworttext-Parsing-Attributs

Rückgabewert: Funktion zum asynchronen Anfordern und Analysieren von Inhalten
  - Parameter
    - `url`: Adresse anfordern
    - `opt` : `fetch` Optionsobjekt
  - Rückgabewert: analysierter Inhalt

## fTxt

Senden Sie eine Netzwerkanfrage und geben Sie den Antworttext im Textformat zurück

Parameter:
- `url`: Adresse anfordern
- `opt` : `fetch` Optionsobjekt

Rückgabewert: Antworttext

## fJson(url, opt)

Senden Sie eine Netzwerkanfrage, analysieren Sie den Antworttext und geben Sie ihn im JSON-Format zurück

Parameter:
- `url`: Adresse anfordern
- `opt` : `fetch` Optionsobjekt

Rückgabewert: geparstes JSON-Objekt

## fBin(url, opt)

Senden Sie eine Netzwerkanforderung und geben Sie den Antworttext als binäres Byte-Array zurück

Parameter:
- `url`: Adresse anfordern
- `opt` : `fetch` Optionsobjekt

Rückgabewert: Byte-Array