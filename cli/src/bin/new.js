import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ERR from "@3-/log/ERR.js";
import write from "@3-/write";
import { parseCli } from "../cli/cli.js";

const newCmd = (root, options = {}) => {
  let type = options.type,
    raw_name = options.name;

  if (!type || !raw_name) {
    const pos = options._ || [];
    if (!type && pos.length > 0) type = pos[0];
    if (!raw_name && pos.length > 1) raw_name = pos[1];
  }

  if (!type || !raw_name) {
    ERR("usage: new <type> <name>");
    return 1;
  }

  const name = raw_name.charAt(0).toUpperCase() + raw_name.slice(1);

  if (!/^[A-Z0-9]/.test(name)) {
    ERR("component name must start with a letter or a digit");
    return 1;
  }

  const workspace_root = root || process.cwd(),
    src_dir = join(workspace_root, "src"),
    webc_dir = join(src_dir, "webc"),
    template_dir = join(src_dir, "tmpl"),
    target_comp_dir = join(webc_dir, name),
    target_js_file = join(webc_dir, name + ".js");

  if (existsSync(target_comp_dir) || existsSync(target_js_file)) {
    ERR('component "' + name + '" already exists');
    return 1;
  }

  const copyDir = (src, dest) => {
    mkdirSync(dest, { recursive: true });
    readdirSync(src, { withFileTypes: true }).forEach((entry) => {
      const src_path = join(src, entry.name),
        dest_path = join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDir(src_path, dest_path);
      } else {
        copyFileSync(src_path, dest_path);
      }
    });
  };

  copyDir(template_dir, target_comp_dir);
  write(target_js_file, 'import "./' + name + '/_.styl";\n');
  console.log("successfully created " + type + " component: src/webc/" + name + ".js");
};

export default newCmd;

if (import.meta.main) {
  const { argv } = parseCli(import.meta, (y) =>
      y
        .usage("usage: $0 <type> <name>")
        .command("$0 <type> <name>", "create a new component under src/webc/", (yargs) => {
          yargs
            .positional("type", {
              describe: 'component type ("css" or "js")',
              type: "string",
              choices: ["css", "js"]
            })
            .positional("name", {
              describe: "component name",
              type: "string"
            });
        })
    ),
    code = newCmd(process.cwd(), argv);
  if (code) process.exit(code);
}
