import post from "./post.js";

export default (htm, css, js) => {
  const content_li = ["<!doctype html><meta charset=UTF-8><body>"];
  if (css) content_li.push("<style>", css, "</style>");
  content_li.push(htm);
  if (js) content_li.push('<script type="module">', js, "</script>");
  content_li.push("</body>");

  post("https://codesandbox.io/api/v1/sandboxes/define", {
    "files[index.html][content]": content_li.join("\n")
  });
};
