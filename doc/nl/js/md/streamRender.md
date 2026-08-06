# md/streamRender.js

Markdown streaming-weergave

## default(container, source)

Streaming van weergave van Markdown-tekst naar de opgegeven DOM-container, met ondersteuning voor cursoreffecten van typemachines en automatisch scrollen

parameter:
- `container` : DOM-containerelement dat weergegeven inhoud host
- `source` : ReadableStream-tekstgegevensbron

Retourwaarde:

- `cancel`: Functie om het renderen en het lezen van de datastroom te stoppen
- `setStop`: Functie om in te stellen of het automatisch scrollen moet worden gepauzeerd
  - parameter
    - `val` : Booleaanse waarde of er wel of niet moet worden gepauzeerd