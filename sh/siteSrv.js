#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import siteSrv from "../cli/src/bin/siteSrv.js";

await siteSrv(ROOT);
