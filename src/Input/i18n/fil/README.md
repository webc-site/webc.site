# Input box na awtomatikong nagpapalit ng placeholder state

- Ipakita ang placeholder kapag hindi naipasok
- Ang mga placeholder ay maayos na nagsusukat at lumulutang sa itaas kapag nagta-type ng nilalaman
- Purong pagpapatupad ng CSS, walang mga dependency ng JavaScript

## Gamitin ang demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## mga kinakailangan sa istruktura

- Container: Gumamit ng mga elemento ng `.Input` class para mag-host ng mga input box at label.
- Input box: Dapat na itakda ang `input` element, `placeholder=" "` (isang placeholder na naglalaman ng espasyo) upang ma-trigger ang switch ng estado.
- Tag ng tip: `label` element, kaagad pagkatapos ng `input`.

## klase ng istilo

- `.Input`: Pangunahing istilo, na nagbibigay ng istraktura ng kahon ng input at animation ng paglipat.
- `.Lg`: Highlight/frosted glass modification style.