#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import npm from "../cli/src/bin/npm.js";

await npm(ROOT);
