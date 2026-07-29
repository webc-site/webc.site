# fetchLang.js

Ngarkoni në mënyrë asinkron paketat e gjuhëve dhe lidhni thirrjet kthyese të përditësimeve

## fetchLang(getDict)

Krijo një dëgjues të paketës gjuhësore për të marrë në mënyrë asinkrone paketën gjuhësore dhe për të ekzekutuar një rifreskim rifreskues kur gjuha ndryshon

parametri:
- `getDict` : Merrni funksionin asinkron të paketës së gjuhës
  - parametri
    - `code` : kodi i gjuhës
  - Vlera e kthimit: fjalor i paketës së gjuhës

Vlera e kthimit: funksioni për të regjistruar rifreskimin e kthimit të thirrjes
- parametri
  - `refresh` : Rifresko funksionin e kthimit të telefonatës kur përditësohet gjuha
    - parametri
      - `i18n` : Objekti i fjalorit të paketës gjuhësore
      - `code` : Kodi aktual i gjuhës
- Vlera e kthimit: funksioni për të çregjistruar rifreskimin e kthimit të telefonatës