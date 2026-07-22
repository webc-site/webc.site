#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import npmPublish from "../cli/src/bin/npmPublish.js";

await npmPublish(ROOT);
