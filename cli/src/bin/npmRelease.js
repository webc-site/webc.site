import { $ } from "@3-/zx";
import ERR from "@3-/log/ERR.js";
import readme from "./readme.js";

const getPushRemotes = async (git) => {
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

  const default_remote = [...target][0],
    default_url = default_remote ? remote_map[default_remote] : "";

  if (!default_url || !hasGithub(default_url)) {
    for (const [name, url] of Object.entries(remote_map)) {
      if (hasGithub(url)) {
        target.add(name);
        break;
      }
    }
  }

  return [...target];
};

export default async (root) => {
  await readme(root);

  const git = (cmd) => $({ cwd: root })(["git " + cmd]);

  try {
    const remote_li = await getPushRemotes(git);
    for (const remote of remote_li) {
      console.log("pushing to remote " + remote + " release branch...");
      await git("push " + remote + " HEAD:release --force --no-verify");
    }
    console.log("release push success!");
  } catch (err) {
    ERR("git push release failed: " + err.message);
    throw err;
  }
};
