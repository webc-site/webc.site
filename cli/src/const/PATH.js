const DIR_UNDER_UNDER = ["_", "_"];
export const DIR_DEMO = [...DIR_UNDER_UNDER, "demo"],
  URL_DEMO_DIR = "/" + DIR_DEMO.join("/") + "/",
  URL_VIRTUAL_DEMO_RE = /^\/_\/_\/demo\/([^/]+)\.js$/,
  URL_PHYSICAL_DEMO_RE = /^\/_\/demo\/([^/]+)\.js$/,
  URL_SRC_DEMO_RE = /\/src\/_\/_?\/demo\/([^/]+)\.js$/,
  relDemoToI18n = (name) => "../../" + name + "/demo/i18n/",
  DEMO_JS = "demo/_.js";
