import { parse } from "yuku-parser";
import { format } from "oxfmt";
import constMerge from "@1-/fix/replace/constMerge.js";

const walkParent = (node, parent, callback) => {
  if (!node || typeof node !== "object") return;
  callback(node, parent);
  for (const key in node) {
    const val = node[key];
    if (Array.isArray(val)) {
      for (const item of val) walkParent(item, node, callback);
    } else {
      walkParent(val, node, callback);
    }
  }
};

export default async (js_code, file_name) => {
  let code = js_code.replace(/\/\/#(region|endregion).*\n?/g, ""),
    ast;
  try {
    ast = parse(code);
  } catch {
    return js_code;
  }

  const rename_map = {},
    del_node_li = [],
    default_decl_li = [],
    other_decl_li = [],
    repl_li = [],
    seen_node_set = new Set();

  let default_local_name = "";

  const { program } = ast;
  if (program && Array.isArray(program.body)) {
    for (const node of program.body) {
      const { type, specifiers: specifier_li } = node;
      if (type === "ExportNamedDeclaration") {
        if (specifier_li && specifier_li.length > 0) {
          const { local, exported } = specifier_li[0];
          if (local && exported && exported.name === "default") {
            default_local_name = local.name;
            del_node_li.push(node);
          }
        }
      }
    }

    for (const node of program.body) {
      const { type, declarations: declaration_li } = node;
      if (type === "VariableDeclaration") {
        for (const decl of declaration_li) {
          const { id } = decl;
          if (id && id.type === "Identifier") {
            const { name } = id;
            if (name === default_local_name) {
              default_decl_li.push({ node, decl });
            } else if (name.endsWith("_default")) {
              const new_name = name.replace(/_default$/, "");
              rename_map[name] = new_name;
              other_decl_li.push({ node, decl, old_name: name, new_name });
            }
          }
        }
      }
    }
  }

  for (const { node, decl } of default_decl_li) {
    repl_li.push({
      start: node.start,
      end: decl.init.start,
      text: "export default "
    });
  }

  for (const node of del_node_li) {
    repl_li.push({
      start: node.start,
      end: node.end,
      text: ""
    });
  }

  for (const { node } of other_decl_li) {
    const { kind } = node;
    if (kind === "var" && !seen_node_set.has(node)) {
      seen_node_set.add(node);
      repl_li.push({
        start: node.start,
        end: node.start + 3,
        text: "const"
      });
    }
  }

  walkParent(ast, null, (node, parent) => {
    if (
      (node.type === "Identifier" ||
        node.type === "IdentifierReference" ||
        node.type === "BindingIdentifier") &&
      rename_map[node.name]
    ) {
      if (parent) {
        const { type, property, computed, key, shorthand } = parent;
        if (type === "MemberExpression" && property === node && !computed) {
          return;
        }
        if (type === "Property" && key === node && !shorthand) {
          return;
        }
        if (type === "MethodDefinition" && key === node) {
          return;
        }
      }
      repl_li.push({
        start: node.start,
        end: node.end,
        text: rename_map[node.name]
      });
    }
  });

  repl_li.sort((a, b) => b.start - a.start);
  let res = code;
  for (const rep of repl_li) {
    res = res.substring(0, rep.start) + rep.text + res.substring(rep.end);
  }

  try {
    const ast_after_rename = parse(res);
    res = constMerge(res, ast_after_rename);
  } catch {}

  try {
    const formatted = await format(file_name, res);
    if (formatted && formatted.code) {
      res = formatted.code;
    }
  } catch {}

  return res;
};
