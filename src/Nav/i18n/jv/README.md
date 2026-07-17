# Bar navigasi ndhuwur sing otomatis ambruk utawa nggedhekake nalika kaca digulung

- **Otomatis Singidaken**: Kanthi otomatis ndhelikake nalika nggulung mudhun kaca.
- **Nggedhekake otomatis**: Ditampilake kanthi otomatis nalika kaca digulung munggah utawa garis gulung ilang.
- **Optimasi Performa**: Gunakake `requestAnimationFrame` kanggo throttle scrolling.
- ** Sumber daya release **: pamireng acara lan pengamat otomatis dibusak nalika komponèn wis numpes.

## Gunakake demo

```html
<main>
  <c-vs>
    <c-nav>
      <b class="L">
        <a class="logo" href="#">LOGO</a>
      </b>
      <a class="item" href="#">Link</a>
    </c-nav>
    <div class="content">Gesek mudhun kanggo ndhelikake navigasi, geser munggah kanggo nuduhake</div>
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

## Pandhuan kanggo nggunakake

Kudu digunakake minangka anak utawa unsur turunan saka `<c-vs>`.

## status gaya

Komponen kasebut ngganti jeneng kelas ing ngisor iki:

- `D`: Nuduhake status (geser mudhun utawa ing ndhuwur).
- `I`: Status transisi didhelikake.
- `H`: Status sing didhelikake.

## variabel gaya

- `--top`: Dianyari kanthi otomatis dening komponen menyang nilai negatif saka dhuwur, digunakake kanggo posisi lan transisi.