# Efsta leiðsögustikan sem hrynur sjálfkrafa saman eða stækkar þegar síðan flettir

- **Sjálfvirkt fela**: Fela sjálfkrafa þegar þú skrunar niður síðuna.
- **Stækka sjálfkrafa**: Birtist sjálfkrafa þegar síðunni er skrunað upp eða skrunstikan hverfur.
- **Fínstilling á frammistöðu**: Notaðu `requestAnimationFrame` til að draga úr skrunun.
- **Sleppatilföng**: Hlustendur og áhorfendur viðburða eru sjálfkrafa fjarlægðir þegar íhluturinn er eytt.

## Notaðu kynninguna

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Tengill</a>
    </c-nav>
    <div class="content">Strjúktu niður til að fela leiðsögnina, strjúktu upp til að sýna hana</div>
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

## Leiðbeiningar um notkun

Verður að nota sem barn eða afkvæmi af `<c-vs>`.

## stílstaða

Íhluturinn skiptir um eftirfarandi flokksnöfn í sjálfum sér:

- `D`: Sýna stöðu (renndu niður eða efst).
- `I`: Umbreytingarástand er falið.
- `H`: Falin staða.

## stílbreytur

- `--top`: Uppfært sjálfkrafa af íhlutnum í neikvætt gildi á hæð, notað fyrir staðsetningu og umskipti.