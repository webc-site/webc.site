#!/usr/bin/env bun
import { chdir } from "process";
import tran from "../cli/src/bin/tran.js";
import ROOT from "./ROOT.js";

chdir(ROOT);

await tran();
