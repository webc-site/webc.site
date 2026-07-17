---
name: webc
---

Sigue el proceso, haz un plan y desarrolla paso a paso para evitar omisiones.

1. Ejecute `./sh/new.js nombre del componente del tipo de proyecto` y cree una carpeta de componentes en el directorio `src`
   El tipo de proyecto puede ser `css` (componente de estilo puro), `js` (componente de página web)
   Escriba en mayúscula la primera letra del nombre del componente.

2. Lea las especificaciones de codificación para `.agents/doc/code` y luego desarrolle.

   En `_.styl`, primero `@import "../component name/_.styl"` para importar dependencias. Siga los estándares de codificación y la estética del diseño de [./styl.md](./styl.md).

   Modifique los estilos de otros componentes y, en su lugar, impórtelos directamente, use `@import` al principio y deshabilite `extend`.

   El estilo utilizado para la demostración tiene prohibido escribirse en `nombre del componente/_.styl` y escribirse en `demo/_.styl`.

   Para el componente `js`, desarrollelo de acuerdo con el proceso [webc.js.md](./webc.js.md) (elimine `nombre del componente/_.js` para componentes de estilo puro)

3. Presione [demo.md](./demo.md) demostración de desarrollo del proceso

4. Ejecute `./test.sh` del directorio raíz. Corrija errores y alarmas, extraiga funciones, optimice el código y evite la duplicación y la redundancia. Para las especificaciones del código, consulte `.agents/doc/code/js.md`

5. Lea [dbg.md](./dbg.md) y depure los componentes según el proceso.

6. Siga el proceso [i18n.md](./i18n.md) para implementar la internacionalización de componentes y demostraciones y escribir documentos.

7. Pruebe nuevamente y optimice el código.

8. Abra un subagente y llame a `.agents/skills/js_review/SKILL.md` para revisar y optimizar el código.

9. Depurando de nuevo