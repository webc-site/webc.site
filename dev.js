#!/usr/bin/env bun
import dev from "./cli/src/bin/dev.js";
import ROOT from "./sh/ROOT.js";

await dev(ROOT);
