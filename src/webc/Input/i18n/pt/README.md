# Caixa de entrada que alterna automaticamente o estado do espaço reservado

- Mostrar espaço reservado quando não inserido
- Os espaços reservados são dimensionados suavemente e flutuam acima ao digitar o conteúdo
- Implementação CSS pura, sem dependências de JavaScript

## Use a demonstração

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## requisitos estruturais

- Container: Use elementos da classe `.Input` para hospedar caixas de entrada e rótulos.
- Caixa de entrada: elemento `input`, `placeholder=" "` (um espaço reservado contendo um espaço) deve ser definido para acionar a troca de estado.
- Tag de dica: elemento `label`, imediatamente após `input`.

## aula de estilo

- `.Input`: Estilo básico, fornecendo estrutura de caixa de entrada e animação de transição.
- `.Lg`: Estilo de modificação de destaque/vidro fosco.