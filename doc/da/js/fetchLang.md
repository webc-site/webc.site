# fetchLang.js

Indlæs sprogpakker asynkront og bind opdaterings-tilbagekald

## fetchLang(getDict)

Opret en sprogpakkelytter for asynkront at hente sprogpakken og udføre et genopfrisk tilbagekald, når sproget ændres

parameter:
- `getDict` : Hent den asynkrone funktion af sprogpakken
  - parameter
    - `code` : sprogkode
  - Returværdi: sprogpakkeordbog

Returværdi: funktion til at registrere refresh callback
- parameter
  - `refresh` : Opdater tilbagekaldsfunktionen, når sproget opdateres
    - parameter
      - `i18n` : Sprogpakkeordbogsobjekt
      - `code` : Aktuel sprogkode
- Returværdi: funktion til at afregistrere opdaterings-tilbagekaldet