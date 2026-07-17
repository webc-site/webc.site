#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import dist from "../cli/src/bin/dist.js";
import distSrv from "../cli/src/bin/distSrv.js";

await dist(ROOT);
await distSrv(ROOT);
