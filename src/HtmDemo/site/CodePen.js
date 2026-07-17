import post from "./post.js";

export default (htm, css, js) => {
  post("//codepen.io/pen/define/", {
    data: JSON.stringify({
      html: htm,
      css,
      js
    })
  });
};
