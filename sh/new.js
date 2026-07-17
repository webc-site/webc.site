#!/usr/bin/env bun
import { chdir } from "node:process";
import newCmd from "../cli/src/bin/new.js";
import ROOT from "./ROOT.js";

chdir(ROOT);

await newCmd(ROOT);
