import { env } from "node:process";
import cssRepl from "./cssRepl.js";

const FILE_NAME = "[hash:12].";

export default (site_dir, dist_dir, input, public_dir) => ({
  root: site_dir,
  base: env.CDN || "./",
  publicDir: public_dir,
  plugins: [cssRepl()],
  build: {
    outDir: dist_dir,
    emptyOutDir: true,
    rollupOptions: {
      input,
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: FILE_NAME + "js",
        chunkFileNames: FILE_NAME + "js",
        assetFileNames: FILE_NAME + "[ext]"
      }
    }
  },
  logLevel: "warn"
});
