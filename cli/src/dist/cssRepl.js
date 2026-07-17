import { URL_DEMO_DIR } from "../const/PATH.js";

export default () => ({
  name: "demo-css-replace",
  transform(code, id) {
    if (id.replace(/\\/g, "/").includes(URL_DEMO_DIR)) {
      const css_regex =
          /`((?:\/[^`;\s]+\.css;?)+)`|'((?:\/[^';\s]+\.css;?)+)'|"((?:\/[^";\s]+\.css;?)+)"/g,
        import_li = [],
        new_code = code.replace(css_regex, (match, p1, p2, p3) => {
          const matched_str = p1 || p2 || p3;
          if (!matched_str) return match;
          const path_li = matched_str.split(";").filter(Boolean);
          if (path_li.length === 0) return match;

          const var_li = [];
          path_li.forEach((path) => {
            const var_name = "__css_url_" + import_li.length;
            import_li.push("import " + var_name + ' from "' + path + '?url";');
            var_li.push(var_name);
          });

          return "[" + var_li.join(",") + "].join(';')";
        });

      if (import_li.length > 0) {
        return {
          code: import_li.join("\n") + "\n" + new_code,
          map: null
        };
      }
    }
  }
});
