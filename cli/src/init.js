#!/usr/bin/env bun
import { existsSync, mkdirSync, symlinkSync, rmSync, lstatSync } from "node:fs";
import { join } from "node:path";
import tranFrom from "./lib/tranFrom.js";
import favicon from "./lib/favicon.js";

const SKILLS = "skills",
  DOC = "doc",
  AGENTS_MD = "AGENTS.md",
  DOT_AGENTS = ".agents",
  isSymlink = (path) => {
    try {
      return lstatSync(path).isSymbolicLink();
    } catch {}
  },
  link = (target, path) => {
    if (existsSync(path) || isSymlink(path)) {
      rmSync(path, { recursive: true, force: true });
    }
    symlinkSync(target, path);
  },
  main = async (root) => {
    const lang = tranFrom(root),
      agent_dir = join(root, DOT_AGENTS),
      skills_path = join(agent_dir, SKILLS),
      doc_path = join(agent_dir, DOC);

    if (!existsSync(agent_dir)) {
      mkdirSync(agent_dir, { recursive: true });
    }

    [
      [SKILLS, skills_path],
      [DOC, doc_path]
    ].forEach(([dir, path]) => link(join("..", dir, lang), path));

    const agents_md = join(root, AGENTS_MD);
    if (!existsSync(agents_md) && !isSymlink(agents_md)) {
      symlinkSync(join(SKILLS, lang, AGENTS_MD), agents_md);
    }

    await favicon(root);
  };

await main(process.cwd());
