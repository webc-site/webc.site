---
name: jsdoc
description: src/js document automatically generated
---

## Run steps

1. Run `./sh/jsDoc.js` to view functions with missing documentation (if there is no output, there is no need to add it).
2. According to the output file list, read the existing documents and codes one by one and complete them (process them in sequence and break them one by one).

## Documentation requirements

If the export is a function, write
- Parameters and return values:
  - Only write corresponding descriptions if there are parameters or return values, otherwise do not write them.
  - Parameters are introduced using unordered lists.
  - If the return value is an array, use an unordered list to describe it one by one (otherwise, write directly, `Return value: description`, just one line).
  - If the parameters or return value are functions, use sub-unordered lists to describe the parameters and return values ​​(if none, do not write them).

If the export is a constant, introduce what it is, just one line

- Use concise, professional language and avoid using adjectives.
- Revise on existing document, do not completely rewrite it

## Format Template

Write each name only once to avoid duplication and try to express it clearly in one line. The reference format is as follows

```
# File Name

## Function name (parameter)

Usage description

parameter:
- `xx` : Purpose
  - Parameter
    - `a` : Purpose
  - Return value: description

Return value: Description
```