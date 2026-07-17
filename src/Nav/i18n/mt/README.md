# Barra tan-navigazzjoni ta' fuq li tikkollassa jew tespandi awtomatikament meta l-paġna tiskrollja

- **Auto Hide**: Aħbi awtomatikament meta tiskrollja l-paġna.
- **Espandi awtomatikament**: jintwera awtomatikament meta l-paġna tiskrollja 'l fuq jew l-iscroll bar tisparixxi.
- **Ottimizzazzjoni tal-Prestazzjoni**: Uża `requestAnimationFrame` biex throttle scrolling.
- **Rilaxx tar-riżorsi**: Is-semmiegħa tal-avvenimenti u l-osservaturi jitneħħew awtomatikament meta l-komponent jinqered.

## Uża d-demo

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Link</a>
    </c-nav>
    <div class="content">Swipe 'l isfel biex taħbi n-navigazzjoni, swipe 'l fuq biex turiha</div>
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

## Istruzzjonijiet għall-użu

Għandu jintuża bħala element tifel jew dixxendenti ta' `<c-vs>`.

## status stil

Il-komponent jaqleb l-ismijiet tal-klassi li ġejjin fih innifsu:

- `D`: Uri l-istatus (iżżerżaq 'l isfel jew fuq).
- `I`: L-istat ta' tranżizzjoni qed jiġi moħbi.
- `H`: Status moħbi.

## varjabbli tal-istil

- `--top`: Aġġornata awtomatikament mill-komponent għal valur negattiv tal-għoli, użat għall-ippożizzjonar u t-tranżizzjoni.