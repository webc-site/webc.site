---
name: jsdoc
description: Documento src/js generado automáticamente
---

## Ejecutar pasos

1. Ejecute `./sh/jsDoc.js` para ver funciones a las que les falta documentación (si no hay resultados, no es necesario agregarlos).
2. De acuerdo con la lista de archivos de salida, lea los documentos y códigos existentes uno por uno y complételos (proceselos en secuencia y divídalos uno por uno).

## Requisitos de documentación

Si la exportación es una función, escriba
- Parámetros y valores de retorno:
  - Solo escriba las descripciones correspondientes si hay parámetros o valores de retorno; de lo contrario, no los escriba.
  - Los parámetros se introducen mediante listas desordenadas.
  - Si el valor de retorno es una matriz, use una lista desordenada para describirlo uno por uno (de lo contrario, escriba directamente, `Valor de retorno: descripción`, solo una línea).
  - Si los parámetros o el valor de retorno son funciones, utilice listas subordenadas para describir los parámetros y los valores de retorno (si no hay ninguno, no los escriba).

Si la exportación es una constante introduce lo que es, solo una línea

- Utilice un lenguaje conciso y profesional y evite el uso de adjetivos.
- Revisar el documento existente, no reescribirlo por completo.

## plantilla de formato

Escribe cada nombre solo una vez para evitar duplicaciones y trata de expresarlo claramente en una línea. El formato de referencia es el siguiente.

```
# Nombre del archivo

## Nombre de la función (parámetro)

Descripción de uso

parámetro:
- `xx` : Propósito
  - parámetro
    - `a` : Propósito
  - Valor de retorno: descripción

Valor de retorno: Descripción
```