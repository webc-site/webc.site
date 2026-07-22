---
name: webc
---

Sigue el proceso, haz un plan y desarrolla paso a paso para evitar omisiones.

1. Ejecute `./sh/new.js nombre del componente del tipo de proyecto` y cree el componente en el directorio `src/webc`
   El tipo de proyecto puede ser `css` (componente de estilo puro), `js` (componente de página web)
   Escriba en mayúscula la primera letra del nombre del componente.

2. Lea las especificaciones de codificación para `.agents/doc/code` y luego desarrolle.

   El estilo del componente está escrito en `_.styl`. El estilo utilizado para la demostración está escrito en `demo/_.styl`. Está prohibido escribirlo en `nombre del componente/_.styl`.

  El uso de `@import` para importar estilos de otros componentes está prohibido tanto en `_.styl` como en `demo/_.styl`.

  Siga los estándares de codificación y la estética del diseño de [./styl.md](./styl.md).

  Los componentes dependientes (y sus estilos) se importan mediante `import "./other Components.js"` en `webc/componentname.js`; las dependencias para demostración se importan mediante `import "../../other componentes.js"` en `demo/_.js`.

   Todos los componentes (incluidos los componentes de estilo puro) deben tener un archivo de script `component name.js`. El `nombre del componente.js` de los componentes de estilo puro solo importa el `_.styl` correspondiente. Para componentes con lógica JS, siga el proceso [webc.js.md](./webc.js.md) para desarrollar.

3. Presione [demo.md](./demo.md) demostración de desarrollo del proceso

4. Ejecute `./test.sh` del directorio raíz. Corrija errores y alarmas, extraiga funciones, optimice el código y evite la duplicación y la redundancia. Para las especificaciones del código, consulte `.agents/doc/code/js.md`

5. Lea [dbg.md](./dbg.md) y depure los componentes según el proceso.

6. Siga el proceso [i18n.md](./i18n.md) para implementar la internacionalización de componentes y demostraciones y escribir documentos.

7. Pruebe nuevamente y optimice el código.

8. Abra un subagente y llame a `.agents/skills/js_review/SKILL.md` para revisar y optimizar el código.

9. Depurando de nuevo