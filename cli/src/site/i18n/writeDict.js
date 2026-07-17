import write from "@3-/write";
import JSON5 from "json5";

export default (fp, obj) =>
  write(
    fp,
    "export const " +
      Object.entries(obj)
        .map(([k, v]) => k + "=" + JSON5.stringify(v))
        .join(",") +
      ";"
  );
