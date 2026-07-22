#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import npmDist from "../cli/src/bin/npmDist.js";

await npmDist(ROOT);
