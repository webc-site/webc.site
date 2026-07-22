#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import npmRelease from "../cli/src/bin/npmRelease.js";

await npmRelease(ROOT);
