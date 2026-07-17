#!/usr/bin/env bun
import { test, expect } from "bun:test";
import ctRepl from "../src/lib/ctRepl.js";

test("ctRepl should extract keys and replace them with indices", () => {
  const html = "<c-t>b</c-t> and <c-t>a</c-t>",
    [result, key_li] = ctRepl(html);
  expect(key_li).toEqual(["b", "a"]);
  expect(result).toBe("<c-t>0</c-t> and <c-t>1</c-t>");
});

test("ctRepl should trim whitespace when extracting and replacing", () => {
  const html = "<c-t>  b  </c-t> and <c-t> a </c-t>",
    [result, key_li] = ctRepl(html);
  expect(key_li).toEqual(["b", "a"]);
  expect(result).toBe("<c-t>0</c-t> and <c-t>1</c-t>");
});

test("ctRepl should respect passed key_li order if provided", () => {
  const html = "<c-t>b</c-t> and <c-t>a</c-t>",
    [result, key_li] = ctRepl(html, ["a", "b"]);
  expect(key_li).toEqual(["a", "b"]);
  expect(result).toBe("<c-t>1</c-t> and <c-t>0</c-t>");
});

test("ctRepl should parse c-t tags nested inside pre tags", () => {
  const html = "<pre><c-t>content</c-t></pre>",
    [result, key_li] = ctRepl(html);
  expect(key_li).toEqual(["content"]);
  expect(result).toBe("<pre><c-t>0</c-t></pre>");
});
