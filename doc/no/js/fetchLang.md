# fetchLang.js

Last inn språkpakker asynkront og bind tilbakeringing av oppdateringer

## fetchLang(getDict)

Opprett en språkpakkelytter for asynkront å hente språkpakken og utføre en oppdaterings-tilbakeringing når språket endres

parameter:
- `getDict` : Få den asynkrone funksjonen til språkpakken
  - parameter
    - `code` : språkkode
  - Returverdi: språkpakkeordbok

Returverdi: funksjon for å registrere refresh callback
- parameter
  - `refresh` : Oppdater tilbakeringingsfunksjonen når språket oppdateres
    - parameter
      - `i18n` : Språkpakkeordbokobjekt
      - `code` : Gjeldende språkkode
- Returverdi: funksjon for å avregistrere oppdateringsoppringingen