# md/streamRender.js

Markdown streaming rendering

## default(container, source)

Streaming rendering of Markdown text into the specified DOM container, supporting typewriter cursor effects and automatic scrolling

parameter:
- `container` : DOM container element hosting rendered content
- `source` : ReadableStream text data source

Return value:

- `cancel` : Function to stop rendering and data stream reading
- `setStop` : Function to set whether to pause automatic scrolling
  - Parameter
    - `val` : Boolean value whether to pause or not