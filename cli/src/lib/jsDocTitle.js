import read from "@3-/read";

export default (file_path) => {
  for (const line of read(file_path).split("\n")) {
    const trimmed = line.trim();
    if (trimmed.length > 0 && !trimmed.startsWith("#")) {
      return trimmed.replaceAll("`", " ");
    }
  }
  return "";
};
