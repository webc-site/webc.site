import { env } from "node:process";
import { execSync } from "node:child_process";

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
    return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] })
      .toString()
      .trim();
  };
  git_rev = run("git rev-parse --short HEAD");
}

export default git_rev;
