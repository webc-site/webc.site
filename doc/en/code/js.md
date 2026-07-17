# JS code specification

## Coding Style

- Simple, elegant and efficient, using the most modern js syntax
- Split overly long functions, and the interface design should be low coupling and high cohesion.
- Use arrays + loops/forEach/map more and write less repetitive code
- Do not write function comments in simple code to avoid excessive comments. Complex logic and special needs are explained in refined Chinese.
- Repeated code is abstracted into functions to reduce redundancy. For example, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` can be written as `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Variable declaration: Combine multiple consecutive `const` declarations into one statement. Instead of writing it in three lines, write `const a=1, b=2, c=3;`
- Asynchronous processing: use `await`, prohibit the use of `.then` chain calls
- Do not automatically generate exception handling code, do not automatically write `try...catch` (`try ... catch` is maintained manually, existing `try catch` should not be deleted)
- Pure functions first: only write pure functions, never classes
- Use arrow functions `const funcName = () => {}` and do not use the `function` keyword (except generators); if you can use .bind to bind parameters, avoid defining functions
- Code reuse: Pay attention to reuse, extract more small functions, and resolutely avoid a large number of similar or copy-pasted code structures.
- Object access: Prioritize using destructuring assignment to extract required attributes, avoid repeatedly using dots internally to access deep and nested attributes, and merge repeated optional chain judgments
- Do not use objects for function parameters, do not write `{a,b,c}`, write `a, b, c`; if there are many optional parameters, use [[number of configuration items, configuration items], [number of configuration items, configuration items],..] In this paradigm, configuration items are defined with numeric constants
- For multi-value returns, use array `[a,b,c]` instead of `{a,b,c}`. If there are more than 3 return values, use numeric constants to define the positional meaning.
- There is no need for a string to represent the state, use numeric constants to define the state
- No string template (``) is used, string concatenation (+) is used, except for import (convenient for Vite static analysis)
- For loop, if you need a serial number, use `++i` instead of `i++`
- Avoid unnecessary`?.` and prohibit defensive programming
- The variable name does not need to be plural, and ends with `_li` to indicate a list.

## Naming convention

- The naming pursues minimalism. Use short but meaningful names, for example: use `rm` instead of `remove`, `delete`, `del`. However, you should also avoid going to extremes, for example: do not use a single letter `m` instead of `map`
- Try to use only verbs in function naming. If you can use one word to express it, don't use two words. Nouns are reflected in file names. If you need to add a verb to the file name, please put the noun first and the verb last. For example: `profileSet.js` instead of `setProfile.js`
- Variable name: use underline style (snake_case), for example `user_auth_token`; if the variable is a function, use lowercase camel case naming style
- Function name: Use lowercase camelCase (camelCase), for example `userData`
- Function parameters: If it is a callback function, name it in lowercase camel case, such as `onChange`
- Module-level constant definitions use uppercase underline style `UPPER_SNAKE_CASE`
- Do not write `get`, such meaningless prefixes, such as: write `cookieByHeader` instead of `getCookie`
- Global/module-level constants: use uppercase underline style (UPPER_SNAKE_CASE), e.g. `CODE_TO_ID`, `ID_TO_LANG`

## Modular mechanism

- Import: Import functions accurately on demand, prohibit direct import of the entire module (avoid `import * as x` or import large objects)
- Export: Disable export of objects. Export functions and variables as units, such as `export const X=1, abc=()=>{};`. Try to combine them with a const + comma to declare the exported content. If a file has only one function, use `export default`
- Unless you need to call the export default function internally, avoid declaring constants first and then exporting them at the end of the file.
- Path resolution: When obtaining the current directory path, `import.meta.dirname` must be used

## Mistake

- Avoid string errors and use const to declare constant error codes.
- If you need to return wrong data information, use [error code, error message,...] This way, the error message is not a text description, but a numerical value (such as [FILE_OVERSIZE, file_size, max_size])
-

## Try to use browser-compatible APIs

- Encryption and decryption: Force the use of native Web Crypto API
- Binary data: When dealing with binary, try to use `Uint8Array` uniformly