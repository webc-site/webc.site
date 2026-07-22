import { test, expect, describe } from "bun:test";
import parse from "../ast.js";
import astToHtml from "../lib.js";
import { stream } from "../stream.js";
Object.assign(globalThis, {
  requestAnimationFrame: (cb) => setTimeout(cb, 0),
  cancelAnimationFrame: (id) => clearTimeout(id)
});

const runStream = (text, chunk_size) => {
    let [blocks, push] = parse("");
    for (let i = 0; i < text.length; i += chunk_size) {
      const chunk = text.slice(i, i + chunk_size);
      [blocks, push] = push(chunk);
    }
    return astToHtml(blocks);
  },
  md = `# Markdown Stream Test
This is a **stream** test.
- \`inline_code\` test
- [link](url)
- ~~del~~
## Sub title
1. item 1
2. item 2

> [!NOTE] 常规消息与注意
> [!TIP] 提示与实用小窍门
> [!IMPORTANT] 重要提示与关注点
> [!WARNING] 风险警告与注意事项
> [!CAUTION] 危险与极高风险警告
`;

describe("Markdown Stream Parser", () => {
  test("stream chunks of 1", () => {
    const expected = runStream(md, md.length),
      got = runStream(md, 1);
    expect(got).toBe(expected);
  });

  test("stream chunks of 2", () => {
    const expected = runStream(md, md.length),
      got = runStream(md, 2);
    expect(got).toBe(expected);
  });

  test("stream chunks of 3", () => {
    const expected = runStream(md, md.length),
      got = runStream(md, 3);
    expect(got).toBe(expected);
  });

  test("stream random chunks", () => {
    const expected = runStream(md, md.length);

    for (let t = 0; t < 10; ++t) {
      let [blocks, push] = parse("");
      let i = 0;
      while (i < md.length) {
        const size = Math.floor(Math.random() * 5) + 1,
          chunk = md.slice(i, i + size);
        [blocks, push] = push(chunk);
        i += size;
      }
      expect(astToHtml(blocks)).toBe(expected);
    }
  });

  test("test stream function with async generator", async () => {
    const chunks = ["# Hello", " world\n", "This is ", "**stream**."],
      expected = runStream(chunks.join(""), chunks.join("").length),
      gen = async function* () {
        for (const chunk of chunks) {
          yield chunk;
        }
      };

    let final_blocks = [];
    const promise = new Promise((resolve) => {
      stream(gen(), (blocks, done) => {
        final_blocks = blocks;
        if (done) resolve();
      });
    });

    await promise;
    expect(astToHtml(final_blocks)).toBe(expected);
  });
});
