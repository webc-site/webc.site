# hashActive.js

Destaque de link de navegação com base em âncoras de URL e rolagem da janela de visualização

## default(link_li, cls)

Destaque automaticamente os links de navegação correspondentes à área atualmente visível com base na posição de rolagem da página e nas alterações do ponto de ancoragem do URL.

parâmetro:
- `link_li`: Lista de elementos DOM do link de navegação
- `cls` : nome da classe CSS ativa, padrão `"A"`

Valor de retorno: cancela todas as funções de limpeza de escuta