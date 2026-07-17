#!/usr/bin/env bun

import "../cli/src/const/SET_PROD.js";
import ROOT from "./ROOT.js";
import site from "../cli/src/bin/site.js";
await site(ROOT);
