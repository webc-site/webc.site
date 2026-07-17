import svgo, { plugins } from "@3-/svgo";

export default (svg) =>
  svgo(svg, {
    multipass: true,
    plugins: [...plugins, "removeViewBox"]
  });
