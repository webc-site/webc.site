# Invoervak ​​dat automatisch de status van de tijdelijke aanduiding wijzigt

- Tijdelijke aanduiding weergeven als deze niet is ingevoerd
- Tijdelijke aanduidingen schalen soepel en zweven erboven tijdens het typen van inhoud
- Pure CSS-implementatie, geen JavaScript-afhankelijkheden
- Standaard met matglazen achtergrond en hover-overgang

## Gebruik de demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## structurele eisen

- Container: gebruik elementen van de klasse `.Input` om invoervakken en labels te hosten.
- Invoervak: `input` element, `placeholder=" "` (een tijdelijke aanduiding die een spatie bevat) moet worden ingesteld om de statusschakelaar te activeren.
- Tiptag: `label` element, onmiddellijk na `input`.

## stijl klasse

- `.Input`: basisstijl, met invoervakstructuur en overgangsanimatie.
- `.Lg`: Wijzigingsstijl hooglicht/matglas.