# fetchLang.js

Carregar pacotes de idiomas de forma assíncrona e vincular retornos de chamada de atualização

## fetchLang(getDict)

Crie um ouvinte de pacote de idiomas para obter o pacote de idiomas de forma assíncrona e executar um retorno de chamada de atualização quando o idioma mudar

parâmetro:
- `getDict` : Obtenha a função assíncrona do pacote de idiomas
  - parâmetro
    - `code` : código do idioma
  - Valor de retorno: dicionário do pacote de idiomas

Valor de retorno: função para registrar retorno de chamada de atualização
- parâmetro
  - `refresh` : Atualize a função de retorno de chamada quando o idioma for atualizado
    - parâmetro
      - `i18n` : objeto de dicionário do pacote de idiomas
      - `code` : código do idioma atual
- Valor de retorno: função para cancelar o registro do retorno de chamada de atualização