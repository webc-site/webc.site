import PKG from "./NPM.js";

const rmBefore = (str, sep) => {
    const pos = str.indexOf(sep);
    return pos === -1 ? str : str.slice(pos + sep.length);
  },
  // Compatible with / 兼容以下格式 :
  // git+https://github.com/webc.site/npm.git
  // git@github.com:webc.site/npm.git
  // ssh://git@ssh.github.com:443/webc.site/npm.git
  // https://github.com/webc.site/npm.git
  // to:
  // webc.site/npm
  USER_REPO = (() => {
    const url = PKG.repository.url,
      next = rmBefore(url, "://");
    return (next !== url ? rmBefore(next, "/") : rmBefore(url, ":")).replace(/\.git$/, "");
  })(),
  CDN_HOST = "jsdmirror.com"; //jsdelivr.net

export const BRANCH_PATH = "/main/",
  GIT_CDN = "//cdn." + CDN_HOST + "/gh/" + USER_REPO + "@",
  svg = (lang) => GIT_CDN + BRANCH_PATH.slice(1) + "doc/.svg/" + lang + ".svg",
  GIT_URL = "//github.com/" + USER_REPO + "/",
  GIT_CODE_URL = GIT_URL + "blob" + BRANCH_PATH,
  readme = async (lang) => GIT_CODE_URL + "doc/" + lang + "/README.md";
