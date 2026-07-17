import { join } from "node:path";
import { existsSync, readdirSync } from "node:fs";
import loadYml from "@1-/yml/load.js";
import read from "@3-/read";
import write from "../write.js";
import i18nCode from "../i18nCode.js";

const getFilesFromYml = (data) => {
    const files = [],
      recurse = (val, currentPath = "") => {
        if (typeof val === "string") {
          if (val.endsWith(".md")) {
            files.push(currentPath ? `${currentPath}/${val}` : val);
          }
        } else if (Array.isArray(val)) {
          for (const item of val) {
            recurse(item, currentPath);
          }
        } else if (val && typeof val === "object") {
          for (const key in val) {
            const nextPath = currentPath ? `${currentPath}/${key}` : key;
            if (key.endsWith(".md")) {
              files.push(nextPath);
            }
            recurse(val[key], nextPath);
          }
        }
      };
    recurse(data);
    return files;
  },
  getMdTitle = (filePath) => {
    const content = read(filePath);
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("#")) {
        return trimmed.replace(/^#+\s*/, "").trim();
      }
    }
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (trimmed.length > 0) {
        return trimmed;
      }
    }
    return "";
  };

export default async (root) => {
  const docDir = join(root, "doc");
  if (!existsSync(docDir)) return;

  const ymlFiles = readdirSync(docDir).filter((name) => name.endsWith(".yml"));
  if (ymlFiles.length === 0) return;

  const lang_li = await i18nCode(root);

  for (const ymlFile of ymlFiles) {
    const prefix = ymlFile.slice(0, -4),
      ymlData = loadYml(join(docDir, ymlFile));
    if (!ymlData) continue;
    const mdPaths = getFilesFromYml(ymlData);

    for (const lang of lang_li) {
      const langDir = join(docDir, lang);
      if (existsSync(langDir)) {
        const mdList = [];

        for (const relPath of mdPaths) {
          const fullPath = join(langDir, relPath);
          if (existsSync(fullPath)) {
            const title = getMdTitle(fullPath);
            mdList.push([relPath, title]);
          }
        }

        const targetFile = join(root, "src/_", prefix, lang + ".js"),
          content = mdList.length
            ? "export default [\n" +
              mdList.map(([p, t]) => `  [${JSON.stringify(p)}, ${JSON.stringify(t)}]`).join(",\n") +
              "\n];\n"
            : "export default [];\n";
        write(targetFile, content);
      }
    }
  }
};
