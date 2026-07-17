# Blwch mewnbwn sy'n newid cyflwr dalfan yn awtomatig

- Dangos dalfan pan nad yw wedi'i nodi
- Mae dalfannau yn graddio ac yn arnofio uwchben yn esmwyth wrth deipio cynnwys
- Gweithredu CSS pur, dim dibyniaeth ar JavaScript

## Defnyddiwch y demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Ebost</label>
</b>
```

## gofynion strwythurol

- Cynhwysydd: Defnyddiwch elfennau o'r `.Input` dosbarth i letya blychau mewnbwn a labeli.
- Blwch mewnbwn: `input` rhaid gosod elfen, `placeholder=" "` (dalfan sy'n cynnwys gofod) i sbarduno'r switsh cyflwr.
- Tag awgrym: `label` elfen, yn syth ar ôl `input`.

## dosbarth arddull

- `.Input`: Arddull sylfaenol, yn darparu strwythur blwch mewnbwn ac animeiddiad trawsnewid.
- `.Lg`: Arddull addasu gwydr wedi'i amlygu/barugog.