import svgMinify from "./svgMinify.js";

const charWidth = (char) => {
  if (/^\p{M}$/u.test(char)) {
    return 0;
  }
  const code = char.charCodeAt(0);
  if (/[\u2e80-\u9fff\uac00-\ud7af\u3040-\u30ff]/.test(char)) {
    return 11;
  }
  if (code >= 0x0980 && code <= 0x09ff) {
    return 9;
  }
  if (code >= 0x1000 && code <= 0x109f) {
    return 9;
  }
  if (code >= 0x0c00 && code <= 0x0cff) {
    return 7.5;
  }
  if ((code >= 0x19e0 && code <= 0x19ff) || (code >= 0x1780 && code <= 0x17ff)) {
    return 8;
  }
  if (code >= 0x10a0 && code <= 0x10ff) {
    return 7;
  }
  if (code >= 0x0900 && code <= 0x097f) {
    return 7.2;
  }
  if (code >= 0x0e00 && code <= 0x0e7f) {
    return 6;
  }
  if (code >= 0x0600 && code <= 0x06ff) {
    return 4.2;
  }
  if (code >= 0x0590 && code <= 0x05ff) {
    return 5.5;
  }
  if (/[A-Z]/.test(char) || (code >= 0x0400 && code <= 0x042f)) {
    return 6.5;
  }
  return 5.2;
};

export default (text) => {
  const width = Math.ceil([...text].reduce((acc, char) => acc + charWidth(char), 0) * 1.1) + 16;
  return svgMinify(
    '<svg xmlns="http://www.w3.org/2000/svg" width="' +
      width +
      '" height="24">' +
      "<defs>" +
      '<linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%">' +
      '<stop offset="0%" stop-color="#ffffff"/>' +
      '<stop offset="100%" stop-color="#f3f4f6"/>' +
      "</linearGradient>" +
      "</defs>" +
      '<rect x="0.25" y="0.25" width="' +
      (width - 0.5) +
      '" height="23.5" rx="12" fill="url(#g)" stroke="#d1d5db" stroke-width="0.5"/>' +
      '<text x="50%" y="13" dominant-baseline="middle" text-anchor="middle" fill="#374151" font-family="sans-serif" font-size="11" font-weight="bold">' +
      text +
      "</text></svg>"
  );
};
