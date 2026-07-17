# Toast.js

Topa laster-mezuaren gonbita

## toast(render, timeout)

Erakutsi gonbita-leiho estandarra

parametroa:
- `render` : Errendatze funtzioa, pop-up edukia pertsonalizatzeko erabiltzen dena
  - parametroa
    - `el` : laster-leihoko DOM elementua
- `timeout` : itzaltze automatikorako segundoak atzeratzea, lehenetsia 9, ez da itzaltze automatikorik 0 denean

Itzultzeko balioa: pop-up leihoko DOM elementua

## toastErr(render, timeout)

Erakutsi errore-mezuen leihoa

parametroa:
- `render` : Errendatze funtzioa, pop-up edukia pertsonalizatzeko erabiltzen dena
  - parametroa
    - `el` : laster-leihoko DOM elementua
- `timeout` : itzaltze automatikorako segundoak atzeratzea, lehenetsia 9, ez da itzaltze automatikorik 0 denean

Itzultzeko balioa: errore-leihoaren DOM elementua