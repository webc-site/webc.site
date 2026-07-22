# hashActive.js

Navigációs hivatkozás kiemelése URL-horgonyok és nézetablak görgetése alapján

## default(link_li, cls)

Automatikusan kiemeli az aktuálisan látható területnek megfelelő navigációs hivatkozásokat az oldal görgetési pozíciója és az URL-horgonypont változása alapján.

paraméter:
- `link_li` : Navigációs hivatkozás DOM-elemek listája
- `cls` : Aktív CSS-osztálynév, alapértelmezett `"A"`

Visszatérési érték: Törölje az összes hallgatási tisztítási funkciót