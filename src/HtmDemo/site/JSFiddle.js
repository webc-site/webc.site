import post from "./post.js";

export default (htm, css, js) => {
  post("//jsfiddle.net/api/post/library/pure/", {
    html: js ? htm + '\n<script type="module">\n' + js + "\n</script>" : htm,
    css,
    js: ""
  });
};
