# Syöttöruutu, joka vaihtaa automaattisesti paikkamerkkitilan

- Näytä paikkamerkki, kun sitä ei ole syötetty
- Paikkamerkit skaalautuvat sujuvasti ja kelluvat yläpuolella, kun kirjoitat sisältöä
- Puhdas CSS-toteutus, ei JavaScript-riippuvuuksia

## Käytä demoa

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Sähköposti</label>
</b>
```

## rakenteellisia vaatimuksia

- Säilö: Käytä luokan `.Input` elementtejä syöttöruutujen ja tarrojen isännöimiseen.
- Syöttöruutu: `input` elementti, `placeholder=" "` (välilyönnin sisältävä paikkamerkki) on asetettava laukaisemaan tilakytkimen.
- Vihjetunniste: `label` -elementti välittömästi `input`:n jälkeen.

## tyyliluokka

- `.Input`: Perustyyli, joka tarjoaa syöttöruudun rakenteen ja siirtymän animaation.
- `.Lg`: Korosta/himmeä lasin muokkaustyyli.