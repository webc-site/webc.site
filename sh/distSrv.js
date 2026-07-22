#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import distSrv from "../cli/src/bin/distSrv.js";

await distSrv(ROOT);
