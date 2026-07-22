# Översta navigeringsfältet som automatiskt kollapsar eller expanderar när sidan rullar

- **Dölj automatiskt**: Göm automatiskt när du rullar ner på sidan.
- **Expandera automatiskt**: Visas automatiskt när sidan rullas upp eller rullningslisten försvinner.
- **Prestandaoptimering**: Använd `requestAnimationFrame` för att strypa rullningen.
- **Släpp resurser**: Händelselyssnare och observatörer tas automatiskt bort när komponenten förstörs.

## Använd demon

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Länk</a>
    </c-nav>
    <div class="content">Svep nedåt för att dölja navigeringen, svep uppåt för att visa den</div>
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

## Bruksanvisning

Måste användas som ett underordnat eller underordnat element till `<c-vs>`.

## stilstatus

Komponenten växlar följande klassnamn inom sig själv:

- `D`: Visa status (skjut nedåt eller överst).
- `I`: Övergångstillstånd döljs.
- `H`: Dold status.

## stilvariabler

- `--top`: Uppdateras automatiskt av komponenten till ett negativt höjdvärde, som används för positionering och övergång.