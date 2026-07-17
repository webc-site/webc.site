# route.js

Gestió d'enrutament frontal d'una sola pàgina

## nowUrl()

Obteniu el camí de l'URL actual amb la barra inclinada inicial eliminada

Valor de retorn: cadena de ruta actual

## route(hook)

Registreu la devolució de trucada d'escolta per als canvis de ruta. En registrar-se, s'executarà una vegada amb el camí actual.

paràmetre:
- `hook` : funció de devolució de trucada de supervisió de ruta
  - paràmetre
    - `url`: camí actual
    - `pre`: últim camí

Valor de retorn: funció de neteja no registrada

## setPre(url)

Deseu l'últim URL gravat

paràmetre:
- `url` : cadena de ruta

## preUrl()

Obteniu l'URL de l'últim registre

Valor de retorn: darrera cadena de ruta

## refresh(url)

Força totes les devolucions de trucada d'escolta de ruta a activar-se al camí especificat i actualitzar-les abans

paràmetre:
- `url` : camí objectiu, camí actual predeterminat

## removeSlash(url)

Elimineu les barres inclinades de les capçaleres dels camins

paràmetre:
- `url` : cadena de ruta

Valor de retorn: camí després d'eliminar la barra inclinada inicial

## setUrl(url)

Actualitza l'estat de l'URL de la barra d'adreces del navegador

paràmetre:
- `url` : camí de destinació

Valor de retorn: 1 si el camí realment canvia

## goto(url)

Actualitzeu l'adreça del navegador i activeu una actualització de la ruta

paràmetre:
- `url` : camí de destinació