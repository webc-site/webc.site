# Directory Navigation Component

- Vertical Flex Layout
- Support dictionary to pass in directory data
- Click to automatically load Markdown text
- Loading status display Ing animation

## Use the demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Use components"
};
</script>
```

## Interface

### Properties and methods

- `toc.li`: Sets a directory object or list of entries, such as `{ key: title }`
- `toc.mdUrl`: Set request URL generation function `(key, lang) => url` or prefix string
- `toc.target`: Set or associate the target content node (such as `c-md`), automatically handle `ing` waiting and content filling
- `toc.load(key)`: Manually trigger the loading of the corresponding key