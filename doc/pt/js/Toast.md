# Toast.js

Prompt de mensagem pop-up do brinde

## toast(render, timeout)

Mostrar janela pop-up de prompt padrão

parâmetro:
- `render` : Função de renderização, usada para personalizar conteúdo pop-up
  - parâmetro
    - `el` : elemento DOM da janela pop-up
- `timeout` : Atraso em segundos para desligamento automático, padrão 9, sem desligamento automático quando 0

Valor de retorno: elemento DOM da janela pop-up

## toastErr(render, timeout)

Mostrar pop-up de mensagem de erro

parâmetro:
- `render` : Função de renderização, usada para personalizar conteúdo pop-up
  - parâmetro
    - `el` : elemento DOM da janela pop-up
- `timeout` : Atraso em segundos para desligamento automático, padrão 9, sem desligamento automático quando 0

Valor de retorno: elemento DOM da janela pop-up de erro