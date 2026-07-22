import { join } from "node:path";
import write from "@3-/write";

const R_200 = " / 200";

export default async (site_dir, lang) => {
  const ls_dir = join(site_dir, "_/ls"),
    { webc = [], css = [], base = [], js = [] } = await import(join(ls_dir, lang + ".js")),
    redirects_content =
      [...webc, ...css, ...base]
        .map(([name]) => "/" + name + R_200)
        .concat(js.map(([name]) => "/js/" + name + R_200))
        .join("\n") + "\n";

  write(join(site_dir, "_redirects"), redirects_content);
};
