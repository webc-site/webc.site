#!/usr/bin/env bun
import { chdir } from "process";
import ROOT from "./ROOT.js";

chdir(ROOT);

await import("../cli/src/bin/tran.js");
