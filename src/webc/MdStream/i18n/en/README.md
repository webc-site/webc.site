# Streaming rendering of Markdown text

- Incrementally parse and render Markdown
- Cooperate with the scrolling parent element to automatically scroll when the content exceeds the screen
- Pause autoscroll when clicking or scrolling up, resume when scrolling down
- Automatically display typing status indicators

## Use the demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Streaming data rendering through the returned asynchronous generator function
el.gen = async function* () {
  yield "# title\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    yield "- item " + i + "\n";
  }
};
</script>
```

## Property

| Attribute Name | Type | Readme |
| :--- | :--- | :--- |
| `gen` | `Function` | Function that returns an asynchronous iterator/generator, clears content and re-renders after setting |

## Style

| Class/Tag | Readme |
| :--- | :--- |
| `Md` | Class automatically added to the component when mounting, set Markdown style |
| `i.T` | Typing status indicator automatically added at the end during data entry |