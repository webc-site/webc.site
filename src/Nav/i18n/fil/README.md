# Nangungunang navigation bar na awtomatikong nag-collapse o lumalawak kapag nag-scroll ang page

- **Auto Hide**: Awtomatikong itago kapag nag-scroll pababa sa page.
- **Awtomatikong palawakin**: Awtomatikong ipinapakita kapag ang pahina ay na-scroll pataas o ang scroll bar ay nawala.
- **Pag-optimize ng Pagganap**: Gamitin ang `requestAnimationFrame` para i-throttle ang pag-scroll.
- **Release resources**: Awtomatikong inaalis ang mga listener at observer ng event kapag nasira ang component.

## Gamitin ang demo

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Link</a>
    </c-nav>
    <div class="content">Mag-swipe pababa para itago ang navigation, mag-swipe pataas para ipakita ito</div>
  </c-vs>
</main>
<style>
  main {
    position: relative;
    height: 300px;
    border: 1px solid #000;
  }
  c-nav {
    background: #fffc;
    backdrop-filter: blur(4px);
    border-bottom: 1px solid #ccc;
  }
  .content {
    height: 200dvh;
    background: linear-gradient(to bottom, #fff, #ccc);
    padding: 80px 20px 20px;
    color: #666;
    text-align: center;
  }
</style>
```

## Mga tagubilin para sa paggamit

Dapat gamitin bilang child o descendant element ng `<c-vs>`.

## katayuan ng istilo

Pinapalitan ng component ang mga sumusunod na pangalan ng klase sa loob mismo nito:

- `D`: Ipakita ang katayuan (slide pababa o sa itaas).
- `I`: Nakatago ang estado ng transition.
- `H`: Nakatagong katayuan.

## mga variable ng istilo

- `--top`: Awtomatikong na-update ng bahagi sa negatibong halaga ng taas, na ginagamit para sa pagpoposisyon at paglipat.