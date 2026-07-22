#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import npmVer from "../cli/src/bin/npmVer.js";

await npmVer(ROOT);
