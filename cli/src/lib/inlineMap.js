export default (code, map) => {
  if (!map) return code;
  const base64_map = Buffer.from(JSON.stringify(map)).toString("base64");
  return (
    code + "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + base64_map + " */"
  );
};
