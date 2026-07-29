# fetch.js

Network Ufro Tool Funktioun baséiert op fetch Encapsulation

## F(url, opt)

Schéckt eng Reseau Ufro an zréck eng Äntwert Objet

parameter:
- `url` : Ufro Adress
- `opt` : `fetch` Optiounsobjekt

Retour Wäert: Äntwert Objet

## f(attr)

Eng méi héich Uerdnungsfunktioun déi eng Ufro wéckelt an de zréckginn Inhalt an engem spezifizéierte Format parséiert

parameter:
- `attr`: Äntwert Kierper Parsing Attribut Numm

Retourwäert: Funktioun fir asynchron Inhalt ze froen an ze analyséieren
  - parameter
    - `url` : Ufro Adress
    - `opt` : `fetch` Optiounsobjekt
  - Retour Wäert: parséiert Inhalt

## fTxt

Schéckt eng Reseau Ufro an zréck der Äntwert Kierper am Text Format

parameter:
- `url` : Ufro Adress
- `opt` : `fetch` Optiounsobjekt

Retour Wäert: Äntwert Text

## fJson(url, opt)

Schéckt eng Reseau Ufro an parse an zréck den Äntwert Kierper am JSON Format

parameter:
- `url` : Ufro Adress
- `opt` : `fetch` Optiounsobjekt

Retour Wäert: parsed JSON Objet

## fBin(url, opt)

Schéckt eng Reseau Ufro an zréck d'Äntwert Kierper als binäre Byte Array

parameter:
- `url` : Ufro Adress
- `opt` : `fetch` Optiounsobjekt

Retour Wäert: Byte Array