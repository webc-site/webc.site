import compile from "@1-/stylus/compile.js";

export const rootHost = (css) =>
    css.replace(/:root(?=\s*(?:,|\{))/g, (match, index, str) => {
      const rest = str.slice(index + match.length).trim();
      if (rest.startsWith(",") && rest.slice(1).trim().startsWith(":host")) {
        return match;
      }
      return ":root, :host";
    }),
  stylCompile = (styl_path, external_import) => {
    const [css, map] = compile(styl_path, true, external_import);
    return [rootHost(css), map];
  };
