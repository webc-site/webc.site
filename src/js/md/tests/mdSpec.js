#!/usr/bin/env bun
import read from "@3-/read";
import { $ } from "@3-/zx";
import { writeFileSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { dump } from "js-yaml";

const cloneRepo = async (tmp_dir) => {
    console.log("Cloning cmark-gfm repository...");
    await $`git clone --depth=1 https://github.com/github/cmark-gfm.git ${tmp_dir}`;
  },
  parseSpec = (spec_txt) => {
    const lines = spec_txt.split(/\r?\n/),
      tests = [],
      markdown_lines = [],
      html_lines = [];

    let state = 0, // 0: normal, 1: markdown, 2: html
      example_num = 0;

    for (let i = 0; i < lines.length; ++i) {
      const line = lines[i],
        l = line.trim();
      if (l === "```````````````````````````````` example") {
        state = 1;
      } else if (state === 2 && l === "````````````````````````````````") {
        state = 0;
        ++example_num;

        const markdown = markdown_lines.join(""),
          html = html_lines
            .join("")
            .replace(
              /<(img|hr|br|input|meta|link|source|area|base|col|embed|param|track|wbr)([^>]*?) \/>/gi,
              "<$1$2>"
            )
            .replace(
              /<(img|hr|br|input|meta|link|source|area|base|col|embed|param|track|wbr)([^>]*?)\/>/gi,
              "<$1$2>"
            );

        tests.push({
          id: example_num,
          md: markdown,
          htm: html
        });

        markdown_lines.length = 0;
        html_lines.length = 0;
      } else if (l === ".") {
        if (state === 1) {
          state = 2;
        }
      } else if (state === 1) {
        markdown_lines.push(line + "\n");
      } else if (state === 2) {
        html_lines.push(line + "\n");
      }
    }
    return tests;
  },
  writeYaml = (output_path, tests) => {
    console.log("Writing to " + output_path + "...");
    const yml_content =
      "# gen by ui/js/md/misc/mdSpec.js\n" +
      dump(tests, {
        lineWidth: -1,
        noRefs: true
      });
    writeFileSync(output_path, yml_content, "utf8");
    console.log("Successfully generated " + output_path + " with " + tests.length + " examples.");
  },
  // 合并主逻辑变量声明
  tmp_dir = join(tmpdir(), "cmark-gfm-" + Date.now()),
  spec_txt_path = join(tmp_dir, "test/spec.txt"),
  output_path = join(import.meta.dirname, "md.spec.yml");

// 注册进程退出时的清理回调
process.on("exit", () => {
  if (existsSync(tmp_dir)) {
    rmSync(tmp_dir, { recursive: true, force: true });
  }
});

await cloneRepo(tmp_dir);

const spec_txt = read(spec_txt_path),
  tests = parseSpec(spec_txt);

writeYaml(output_path, tests);
