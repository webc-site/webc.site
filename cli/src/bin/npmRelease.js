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

  let gh_remote = "";
  for (const [name, url] of Object.entries(remote_map)) {
    if (hasGithub(url)) {
      gh_remote = name;
      break;
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

  if (gh_remote) {
    target.add(gh_remote);
  }

  return [[...target], gh_remote || [...target][0] || "origin"];
};

export default async (root) => {
  await readme(root);

  const git = (cmd) => $({ cwd: root })(["git " + cmd]);

  try {
    const [remote_li, gh_remote] = await getPushRemotes(git);

    console.log("pulling main from " + gh_remote + "...");
    await git("pull " + gh_remote + " main --no-verify");

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
