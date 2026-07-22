---
name: jsdoc
description: Documento src/js gerado automaticamente
---

## Executar etapas

1. Execute `./sh/jsDoc.js` para visualizar funções sem documentação (se não houver saída, não há necessidade de adicioná-la).
2. De acordo com a lista de arquivos de saída, leia os documentos e códigos existentes um por um e complete-os (processe-os em sequência e quebre-os um por um).

## Requisitos de documentação

Se a exportação for uma função, escreva
- Parâmetros e valores de retorno:
  - Escreva descrições correspondentes apenas se houver parâmetros ou valores de retorno, caso contrário, não os escreva.
  - Os parâmetros são introduzidos usando listas não ordenadas.
  - Se o valor de retorno for uma matriz, use uma lista não ordenada para descrevê-lo um por um (caso contrário, escreva diretamente, `Valor de retorno: descrição`, apenas uma linha).
  - Se os parâmetros ou valores de retorno forem funções, use listas subordenadas para descrever os parâmetros e valores de retorno (se não houver nenhum, não os escreva).

Se a exportação for uma constante, introduza o que é, apenas uma linha

- Use uma linguagem concisa e profissional e evite usar adjetivos.
- Revise o documento existente, não o reescreva completamente

## modelo de formato

Escreva cada nome apenas uma vez para evitar duplicação e tente expressá-lo claramente em uma linha. O formato de referência é o seguinte

```
# nome do arquivo

## Nome da função (parâmetro)

Descrição de uso

parâmetro:
- `xx` : Objetivo
  - parâmetro
    - `a` : Objetivo
  - Valor de retorno: descrição

Valor de retorno: Descrição
```