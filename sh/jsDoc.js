#!/usr/bin/env bun

import ROOT from "./ROOT.js";
import jsDoc from "../cli/src/bin/jsDoc.js";
await jsDoc(ROOT);
