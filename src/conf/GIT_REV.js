import { env } from "node:process";
import { execSync } from "node:child_process";
import ERR from "@3-/log/ERR.js";

let git_rev = "";
for (const name of ["CF_PAGES_COMMIT_SHA", "GITHUB_SHA", "VERCEL_GIT_COMMIT_SHA"]) {
  const val = env[name];
  if (val) {
    git_rev = val.slice(0, 7);
    break;
  }
}

if (!git_rev) {
  const run = (cmd) => {
      try {
        return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] })
          .toString()
          .trim();
      } catch {
        return "";
      }
    },
    runOrThrow = (cmd) =>
      execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] })
        .toString()
        .trim(),
    remote_li = run("git remote -v").split("\n"),
    branch = run("git branch --show-current"),
    github_remote = remote_li.find((line) => /\bgithub\.com\b/.test(line))?.split(/\s+/)[0];
  let local_rev = run("git rev-parse --short HEAD"),
    remote_rev = "";

  if (github_remote && branch) {
    try {
      remote_rev = runOrThrow("git rev-parse --short " + github_remote + "/" + branch);
    } catch {}

    if (remote_rev !== local_rev) {
      console.log("[git] push " + branch + " to " + github_remote + "...");
      try {
        runOrThrow("git push " + github_remote + " HEAD");
      } catch (err) {
        const stderr = err.stderr ? err.stderr.toString() : "",
          message = err.message || "",
          is_rejected = /rejected|non-fast-forward/i.test(stderr || message);
        if (is_rejected) {
          console.log(
            "[git] push rejected. Trying to pull " + branch + " from " + github_remote + "..."
          );
          try {
            runOrThrow("git pull " + github_remote + " " + branch);
            local_rev = runOrThrow("git rev-parse --short HEAD");
            console.log("[git] Pull successful. Pushing HEAD to " + github_remote + " again...");
            runOrThrow("git push " + github_remote + " HEAD");
          } catch (pull_err) {
            const pull_stderr = pull_err.stderr ? pull_err.stderr.toString().trim() : "";
            ERR("auto-pull or re-push failed: " + (pull_stderr || pull_err.message || pull_err));
          }
        } else {
          ERR("push to " + github_remote + " failed: " + (stderr.trim() || message));
        }
      }
    }
  } else if (!github_remote) {
    ERR("github remote not found in git config");
  }
  git_rev = local_rev;
}

export default git_rev;
