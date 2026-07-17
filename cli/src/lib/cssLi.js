import IS_PROD from "../const/IS_PROD.js";

export default (prefix = "/_/", extra_li = [], is_prod = IS_PROD) => {
  if (is_prod) {
    return [];
  }
  return [prefix + "_.css", prefix + "demo.css", ...extra_li];
};
