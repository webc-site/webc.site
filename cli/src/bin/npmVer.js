import { $ } from "@3-/zx";
import read from "@3-/read";
import write from "@3-/write";
import vernext from "@1-/vernext";
import npmver from "@1-/npmver";
import ERR from "@3-/log/ERR.js";
import { join } from "node:path";
import { existsSync } from "node:fs";
import npm from "./npm.js";
import publish from "../dist/publish.js";

const PKG_FILE = "package.json",
  INIT_VER = "0.1.0",
  verVal = (v) => v.split(".").map(Number),
  verCmp = (v1, v2) => {
    const [a1, b1, c1] = verVal(v1),
      [a2, b2, c2] = verVal(v2);
    return a1 !== a2 ? a1 - a2 : b1 !== b2 ? b1 - b2 : c1 - c2;
  },
  getPushRemotes = async (git) => {
    const remote_res = await git("remote -v"),
      line_li = remote_res.stdout.trim().split("\n").filter(Boolean),
      remote_map = {},
      target = new Set(),
      hasGithub = (url) => /\bgithub\.com\b/.test(url);

    for (const line of line_li) {
      const part_li = line.split(/\s+/);
      if (part_li.length >= 2) {
        remote_map[part_li[0]] = part_li[1];
      }
    }

    if (remote_map.origin) {
      target.add("origin");
    } else {
      const first = Object.keys(remote_map)[0];
      if (first) {
        target.add(first);
      }
    }

    const default_remote = Array.from(target)[0],
      default_url = default_remote ? remote_map[default_remote] : "";

    if (!default_url || !hasGithub(default_url)) {
      for (const [name, url] of Object.entries(remote_map)) {
        if (hasGithub(url)) {
          target.add(name);
          break;
        }
      }
    }

    return Array.from(target);
  },
  pushMainAndTag = async (git, remote_li, next) => {
    await git("tag v" + next);
    for (const remote of remote_li) {
      console.log("pushing to remote " + remote + "...");
      await git("push " + remote + " main --no-verify");
      await git("push " + remote + " v" + next + " --no-verify");
    }
  };

export default async (root) => {
  const root_pkg_path = join(root, PKG_FILE);
  if (!existsSync(root_pkg_path)) {
    ERR("no package.json found at: " + root_pkg_path);
    return;
  }

  const root_pkg = JSON.parse(read(root_pkg_path)),
    { name: pkg_name, version: ver } = root_pkg;

  let next;
  if (ver === INIT_VER) {
    next = INIT_VER;
  } else {
    let online;
    try {
      online = await npmver(pkg_name);
    } catch {}

    const local_next = vernext(ver);
    if (online && verCmp(local_next, online) < 0) {
      next = vernext(online);
    } else {
      next = local_next;
    }
  }

  root_pkg.version = next;
  write(root_pkg_path, JSON.stringify(root_pkg, null, 2) + "\n");
  console.log("upgraded version to: " + next);

  if (next === INIT_VER) {
    console.log("initial version detected. running local build and publish...");
    await npm(root);
    await publish(root);
  }

  const git = (cmd) => $({ cwd: root })(["git " + cmd]);

  try {
    const branch_res = await git("branch --show-current"),
      current_branch = branch_res.stdout.trim(),
      not_main = current_branch !== "main",
      remote_li = await getPushRemotes(git);

    await git("add .");
    await git('commit -m "v' + next + '" --no-verify');

    if (not_main) {
      await git("checkout main");
      await git("merge " + current_branch + " --no-edit");
    }

    await pushMainAndTag(git, remote_li, next);

    if (not_main) {
      await git("checkout " + current_branch);
    }
    console.log("dist push success!");
  } catch (err) {
    ERR("git operation failed: " + err.message);
    throw err;
  }
};
