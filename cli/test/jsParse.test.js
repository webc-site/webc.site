#!/usr/bin/env bun
import { test, expect } from "bun:test";
import { extractExports } from "../src/site/i18n/jsParse.js";

test("only extract string literals, ignore number and boolean", () => {
  const code = '\nexport const A = "hello";\nexport const B = 123;\nexport const C = true;\n',
    result = extractExports(code);
  expect(result.map((r) => r.name)).toEqual(["A"]);
  expect(result.map((r) => r.key)).toEqual(["hello"]);
});
