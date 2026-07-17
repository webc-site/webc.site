#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import dist from "../cli/src/bin/dist.js";
await dist(ROOT);
