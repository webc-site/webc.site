# md/streamRender.js

Transmetimi i transmetimit Markdown

## default(container, source)

Transmetimi i transmetimit të tekstit Markdown në kontejnerin e specifikuar DOM, duke mbështetur efektet e kursorit të makinës së shkrimit dhe lëvizjen automatike

parametri:
- `container` : Elementi i kontejnerit DOM që pret përmbajtjen e dhënë
- `source` : Burimi i të dhënave të tekstit ReadableStream

Vlera e kthimit:

- `cancel` : Funksioni për të ndaluar interpretimin dhe leximin e transmetimit të të dhënave
- `setStop` : Funksioni për të vendosur nëse do të ndalet lëvizja automatike
  - parametri
    - `val` : Vlera Boolean nëse do të vendoset në pauzë apo jo