---
name: jsdoc
description: documento src/js xerado automaticamente
---

## Executar pasos

1. Execute `./sh/jsDoc.js` para ver funcións coas que falta documentación (se non hai saída, non é necesario engadila).
2. Segundo a lista de ficheiros de saída, lea un por un os documentos e códigos existentes e compléteos (procesaos en secuencia e descompáñaos un por un).

## Requisitos de documentación

Se a exportación é unha función, escribe
- Parámetros e valores de retorno:
  - Escriba só as descricións correspondentes se hai parámetros ou valores de retorno, se non, non os escriba.
  - Os parámetros introdúcense mediante listas non ordenadas.
  - Se o valor de retorno é unha matriz, use unha lista non ordenada para describilo un por un (se non, escriba directamente, `Valor de retorno: descrición`, só unha liña).
  - Se os parámetros ou o valor de retorno son funcións, use listas subordenadas para describir os parámetros e os valores de retorno (se non os hai, non os escribas).

Se a exportación é unha constante, introduce o que é, só unha liña

- Utiliza unha linguaxe concisa e profesional e evita o uso de adxectivos.
- Revisa o documento existente, non o reescribas completamente

## modelo de formato

Escribe cada nome só unha vez para evitar a duplicación e intenta expresalo con claridade nunha soa liña. O formato de referencia é o seguinte

```
# nome do ficheiro

## Nome da función (parámetro)

Descrición do uso

parámetro:
- `xx` : Finalidade
  - parámetro
    - `a` : Finalidade
  - Valor de retorno: descrición

Valor de retorno: Descrición
```