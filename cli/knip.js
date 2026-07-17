export default {
  entry: [
    "src/bin/*.js",
    "src/init.js",
    "src/vfs.js",
    "src/vite.js",
    "src/lint/*.js",
    "src/vfs/src/**/*.js",
    "src/srv/pub/**/*.js",
    "test/**/*.js"
  ],
  project: ["src/**/*.js", "test/**/*.js"],
  ignoreDependencies: ["lint-staged", "oxlint"],
  ignoreBinaries: []
};
