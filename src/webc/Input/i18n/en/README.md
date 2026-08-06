# Input box that automatically switches placeholder state

- Show placeholder when not entered
- Placeholders smoothly scale and float above when typing content
- Pure CSS implementation, no JavaScript dependencies
- Default with frosted glass background and hover transition

## Use the demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## Structural Requirements

- Container: Use elements of the `.Input` class to host input boxes and labels.
- Input box: `input` element, `placeholder=" "` (a placeholder containing a space) must be set to trigger the state switch.
- Tip tag: `label` element, immediately after `input`.

## Style Class

- `.Input`: Basic style, providing input box structure and transition animation.
- `.Lg`: Highlight/frosted glass modification style.