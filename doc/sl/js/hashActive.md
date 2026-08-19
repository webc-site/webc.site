# hashActive.js

Označevanje navigacijskih povezav na podlagi sider URL-jev in pomikanja po vidnem polju

## default(link_li, cls)

Samodejno označi navigacijske povezave, ki ustrezajo trenutno vidnemu območju glede na položaj drsenja strani in spremembe sidrne točke URL-ja.

parameter:
- `link_li` : Seznam elementov DOM navigacijske povezave
- `cls` : ime aktivnega razreda CSS, privzeto `"A"`

Povratna vrednost: Prekliči vse funkcije čiščenja poslušanja