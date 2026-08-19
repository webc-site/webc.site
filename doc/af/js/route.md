# route.js

Enkelbladsy-voorkant-roetebestuur

## nowUrl()

Kry die huidige URL-pad met die voorste skuinsstreep verwyder

Terugkeerwaarde: huidige padstring

## route(hook)

Registreer die luister-terugbel vir roeteveranderings. Wanneer jy registreer, sal dit een keer uitgevoer word met die huidige pad.

parameter:
- `hook` : Roete-monitering-terugbelfunksie
  - parameter
    - `url` : huidige pad
    - `pre` : laaste pad

Terugkeerwaarde: Ongeregistreerde skoonmaakfunksie

## setPre(url)

Stoor die laaste aangetekende URL

parameter:
- `url` : padstring

## preUrl()

Kry die URL van die laaste rekord

Terugkeerwaarde: laaste padstring

## refresh(url)

Dwing alle roeteluister-terugroepe om by die gespesifiseerde pad geaktiveer te word en dateer voor

parameter:
- `url` : teikenpad, verstek huidige pad

## removeSlash(url)

Verwyder skuinsstrepe van padopskrifte

parameter:
- `url` : padstring

Terugkeerwaarde: pad nadat die voorste skuinsstreep verwyder is

## setUrl(url)

Dateer blaaieradresbalk se URL-status op

parameter:
- `url` : teikenpad

Retourwaarde: 1 as die pad werklik verander

## goto(url)

Dateer die blaaieradres op en aktiveer 'n roeteverversing

parameter:
- `url` : teikenpad