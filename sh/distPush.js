#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import distPush from "../cli/src/bin/distPush.js";

await distPush(ROOT);
