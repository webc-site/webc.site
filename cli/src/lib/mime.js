import ext from "@3-/ext";

const MIME = {
  js: "text/javascript; charset=utf-8",
  css: "text/css; charset=utf-8",
  html: "text/html; charset=utf-8",
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  json: "application/json; charset=utf-8"
};

export default (path) => MIME[ext(path)] || "application/octet-stream";
