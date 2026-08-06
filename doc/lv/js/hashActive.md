# hashActive.js

Navigācijas saišu izcelšana, pamatojoties uz URL enkuriem un skatvietas ritināšanu

## default(link_li, cls)

Automātiski iezīmējiet navigācijas saites, kas atbilst pašlaik redzamajam apgabalam, pamatojoties uz lapas ritināšanas pozīciju un URL enkura punkta izmaiņām.

parametrs:
- `link_li` : navigācijas saites DOM elementu saraksts
- `cls` : aktīvais CSS klases nosaukums, noklusējuma `"A"`

Atgrieztā vērtība: atceļ visas klausīšanās tīrīšanas funkcijas