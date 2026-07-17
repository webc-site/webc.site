# fetchLang.js

Hlaða tungumálapakka ósamstilltur og binda uppfærsluhringingar

## fetchLang(getDict)

Búðu til tungumálapakka hlustanda til að fá tungumálapakka ósamstilltur og framkvæma endurnýjun svarhringingar þegar tungumálið breytist

færibreyta:
- `getDict` : Fáðu ósamstilltu aðgerð málpakkans
  - færibreytu
    - `code` : tungumálakóði
  - Skilagildi: tungumálapakkaorðabók

Skilagildi: aðgerð til að skrá endurnýjunarhringingu
- færibreytu
  - `refresh` : Endurnýjaðu svarhringingaraðgerðina þegar tungumálið er uppfært
    - færibreytu
      - `i18n` : Orðabókarhlutur tungumálapakka
      - `code` : Núverandi tungumálakóði
- Skilagildi: fall til að afskrá endurnýjunarhringingu