---
name: webc
---

Follow the process, make a plan, and develop step by step to avoid omissions

1. Run `./sh/new.js project type component name` and create the component under the `src/webc` directory
   Project type can be `css` (pure style component), `js` (web page component)
   Capitalize the first letter of the component name

2. Read the coding specifications for `.agents/doc/code` and then develop.

   The component style is written in `_.styl`. The style used for demonstration is written in `demo/_.styl`. It is forbidden to write it in `component name/_.styl`.

  Using `@import` to import styles from other components is prohibited in both `_.styl` and `demo/_.styl` .

  Follow the coding standards and design aesthetics of [./styl.md](./styl.md).

  Dependent components (and their styles) are imported via `import "./other components.js"` in `webc/componentname.js`; dependencies for demonstration are imported via `import "../../other components.js"` in `demo/_.js`.

   All components (including pure style components) must have a `component name.js` script file. The `component name.js` of pure style components only imports the corresponding `_.styl`. For components with JS logic, follow the [webc.js.md](./webc.js.md) process to develop.

3. Press [demo.md](./demo.md) process development demonstration

4. Run `./test.sh` of the root directory. Fix errors and alarms, extract functions, optimize code, and avoid duplication and redundancy. For code specifications, see `.agents/doc/code/js.md`

5. Read [dbg.md](./dbg.md) and debug components according to the process

6. Follow the [i18n.md](./i18n.md) process to implement the internationalization of components and demonstrations and write documents

7. Test again and optimize the code

8. Open a sub-agent and call `.agents/skills/js_review/SKILL.md` to review and optimize the code.

9. Debugging again