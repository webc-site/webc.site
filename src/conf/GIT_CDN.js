import GIT_REV from "./GIT_REV.js";
import { GIT_CDN as raw_cdn } from "./URL.js";

export const git_cdn = raw_cdn + GIT_REV + "/",
  GIT_DOC = git_cdn + "doc/",
  GIT_WEBC_README_PREFIX = git_cdn + "src/",
  GIT_WEBC_README_I18N_DIR = "/i18n/",
  GIT_WEBC_README_MD = "README.md",
  GIT_JS_README_I18N_DIR = "/js/",
  GIT_JS_README_MD = ".md",
  GIT_JS_SRC_PREFIX = git_cdn + "src/js/",
  GIT_JS_SRC_SUFFIX = ".js";
