---
name: webc
---

Follow the process, make a plan, and develop step by step to avoid omissions

1. Run `./sh/new.js project type component name` and create a component folder under the `src` directory
   Project type can be `css` (pure style component), `js` (web page component)
   Capitalize the first letter of the component name

2. Read the coding specifications for `.agents/doc/code` and then develop.

   In `_.styl`, first `@import "../component name/_.styl"` to import dependencies. Please follow the coding standards and design aesthetics of [./styl.md](./styl.md).

   Modify the styles of other components and instead import them directly, use `@import` at the beginning and disable `extend`.

   The style used for demonstration is prohibited from being written in `component name/_.styl` and written in `demo/_.styl`.

   For the `js` component, develop it according to the [webc.js.md](./webc.js.md) process (please delete `component name/_.js` for pure style components)

3. Press [demo.md](./demo.md) process development demonstration

4. Run `./test.sh` of the root directory. Fix errors and alarms, extract functions, optimize code, and avoid duplication and redundancy. For code specifications, see `.agents/doc/code/js.md`

5. Read [dbg.md](./dbg.md) and debug components according to the process

6. Follow the [i18n.md](./i18n.md) process to implement the internationalization of components and demonstrations and write documents

7. Test again and optimize the code

8. Open a sub-agent and call `.agents/skills/js_review/SKILL.md` to review and optimize the code.

9. Debugging again