# md/streamRender.js

Rendro ffrydio Markdown

## default(container, source)

Ffrydio rendro testun Markdown i'r cynhwysydd DOM penodedig, gan gefnogi effeithiau cyrchwr teipiadur a sgrolio awtomatig

paramedr:
- `container` : elfen cynhwysydd DOM yn cynnal cynnwys wedi'i rendro
- `source` : ffynhonnell data testun ReadableStream

Gwerth dychwelyd:

- `cancel` : Swyddogaeth i atal rendro a darllen llif data
- `setStop` : Swyddogaeth i osod a ddylid seibio sgrolio awtomatig
  - paramedr
    - `val` : Gwerth Boole p'un ai i oedi ai peidio