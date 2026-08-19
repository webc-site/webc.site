# md/streamRender.js

Markdown straumēšanas renderēšana

## default(container, source)

Markdown teksta straumēšana norādītajā DOM konteinerā, rakstāmmašīnas kursora efektu un automātiskās ritināšanas atbalsts

parametrs:
- `container` : DOM konteinera elements, kas mitina renderēto saturu
- `source` : ReadableStream teksta datu avots

Atgriešanas vērtība:

- `cancel` : funkcija, lai apturētu renderēšanu un datu straumes lasīšanu
- `setStop` : funkcija, lai iestatītu, vai apturēt automātisko ritināšanu
  - parametrs
    - `val` : Būla vērtība, vai apturēt vai nē