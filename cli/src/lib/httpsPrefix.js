export default (url) => (url.startsWith("//") ? "https:" + url : url);
