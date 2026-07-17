export default (path, fromExt, toExt) => {
  const suffix = "." + fromExt;
  if (path.endsWith(suffix)) {
    return path.slice(0, -suffix.length) + "." + toExt;
  }
};
