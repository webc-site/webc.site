# md/streamRender.js

Markdown streaming rendering

## default(container, source)

Streaming rendering ng Markdown text sa tinukoy na DOM container, na sumusuporta sa typewriter cursor effect at awtomatikong pag-scroll

parameter:
- `container` : Nag-render ng content ang pagho-host ng elemento ng container ng DOM
- `source` : ReadableStream text data source

Ibinalik na halaga:

- `cancel` : Pag-andar upang ihinto ang pag-render at pagbabasa ng stream ng data
- `setStop` : Function upang itakda kung ipo-pause ang awtomatikong pag-scroll
  - parameter
    - `val` : Boolean value kung i-pause o hindi