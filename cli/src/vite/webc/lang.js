import langJs from "../../lib/langJs.js";

export default (root, id) => {
  const match = id.match(/^\/_\/([a-z-]+)\.js$/);
  if (match) {
    const [, lang] = match;
    return langJs(root, lang);
  }
};
