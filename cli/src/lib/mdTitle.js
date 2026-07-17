import read from "@3-/read";

export default (path) => {
  const file_content = read(path),
    header = file_content.split("\n").find((l) => l.startsWith("# "));
  return header ? header.slice(2).trim() : "";
};
