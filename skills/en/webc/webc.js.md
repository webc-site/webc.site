
  For the `js` component, implement the component using `Light DOM` in `src/webc/componentname.js`.

  Use relative paths to import other components, such as: `import "./component name.js"` (In the JS file of each component, import the dependencies first, and then import the corresponding `_.styl`, for example `import "./component name/_.styl";`).

  `this` Only define the native callback function of the web component, write the others as independent functions, pass in `this` and the required parameters.

  In addition to the externally exposed interfaces, in order to facilitate tree-shaking optimization and code compression, it is forbidden to bind custom private attributes on `this` (use `this.$` for unloading functions), and high-order functions can be used to return closures to hold intermediate variables.

  Do not write `constructor`, the attribute is obtained in `connectedCallback`.


  Refer to [./js.md](./js.md) to reuse the public functions under `src/js/`

  For containers, use `slot` instead of attributes.
  If you need to load data, expose the loading interface to the upper layer in the form of an asynchronous callback function, and use comments to indicate the format of the return value.
  Components must avoid memory leaks. `disconnectedCallback` merge uninstall events into one function `this.$` and do not write multiple uninstall functions.
  The interface return value can be a single value, an array, or an array of arrays, not an object.
  If the component has multiple states, use multi-line comments to clearly describe the data format of each state. (Do not precede each line of comments with `*`)
  State switching, using numeric constants (defined to `const.js`).
  When the callback is loading, use `const xx = newEl('b');xx.className="Ing"` to display the animation, and introduce dependencies through `import "./Ing.js"` in the component JS file.