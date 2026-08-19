import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const has_js = (dir) => {
    try {
      for (const file of readdirSync(dir)) {
        const full = join(dir, file);
        if (statSync(full).isDirectory()) {
          if (has_js(full)) return true;
        } else if (file.endsWith(".js")) {
          return true;
        }
      }
    } catch {}
    return false;
  },
  has_match = (pattern) => {
    if (!pattern.includes("*")) {
      return existsSync(pattern);
    }
    const idx = pattern.indexOf("*"),
      dir = pattern.slice(0, idx).replace(/\/+$/, "");
    return has_js(dir);
  },
  webc_dirs = existsSync("src/webc")
    ? readdirSync("src/webc", { withFileTypes: true })
        .filter((d) => d.isDirectory() && /^[A-Z]/.test(d.name))
        .map((d) => "webc/" + d.name)
    : [],
  dirs = [
    ...readdirSync("src", { withFileTypes: true })
      .filter((d) => d.isDirectory() && /^[A-Z]/.test(d.name))
      .map((d) => d.name),
    ...webc_dirs
  ],
  all_dirs = [...dirs, "tmpl"],
  entries = [
    "dev.js",
    "new.js",
    "tran.js",
    "src/js/*.js",
    "src/js/**/*.js",
    "src/webc/*.js",
    "src/webc/**/*.js",
    ...all_dirs.flatMap((d) => [
      "src/" + d + "/_.js",
      "src/" + d + "/I18N.js",
      "src/" + d + "/demo/_.js",
      "src/" + d + "/demo/I18N.js"
    ])
  ].filter(has_match),
  projects = [
    "src/js/**/*.js",
    "src/webc/**/*.js",
    ...all_dirs.map((d) => "src/" + d + "/**/*.js")
  ].filter(has_match);

export default {
  entry: entries,
  project: projects,
  ignoreDependencies: [
    "lint-staged",
    "oxfmt",
    "oxlint",
    "npm-check-updates",
    "jscpd",
    "@1-/minify_size",
    "@1-/proto2js",
    "@3-/log"
  ],
  ignoreBinaries: [],
  paths: {
    "**/demo/I18N.js": ["src/tmpl/I18N.js"]
  }
};
