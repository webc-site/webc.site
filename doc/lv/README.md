# WebC.site

## Kas tas ir?

### Šī ir vietējā tīmekļa komponentu bibliotēka

Izstrādāts, pamatojoties uz [tīmekļa komponentiem] (/0), tas ir neatkarīgs no izpildlaika un ir piemērots visiem ietvariem.

Īpaši optimizēts izmēram (viena desmitā daļa līdzīgu populāru bibliotēku lieluma).

Atbalsta 75 valodas. Varat tieši importēt js un css lietošanai tiešsaistē vai pievienot savam projektam komponentus, ja nepieciešams sekundārajai izstrādei.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Šī ir komponentu bibliotēkas izstrādes sistēma

Šī ir [stāstu grāmata] (/0) statiskā emuāra versija.

Komponentu bibliotēkas veidošana var uzlabot uzņēmuma iekšējās attīstības efektivitāti un veidot zīmola tēlu tehniskajā lokā.

Pamatojoties uz vietni [webc.site](https://github.com/webc-site/webc.site), komandas var viegli izveidot savas komponentu bibliotēkas un publicēt tās [github lapā](https://pages.github.com), [cloudflare lapā](https://pages.cloudflare.com) utt. Publicētos komponentus var atkļūdot tiešsaistē vietnēs [codepen.io](https://codepen.io) un [jsfiddle](https://jsfiddle.net).

Tajā pašā laikā iebūvētais tulkošanas ietvars var ātri realizēt komponentu un dokumentu internacionalizāciju, lai jūsu produktu auditorija vairs nebūtu saistīta ar valodu.

### Šī ir jauna priekšgala attīstības paradigma mākslīgā intelekta laikmetā

Ietvars ir iebūvēts `.agents/skills`, kas ļauj mākslīgajam intelektam palīdzēt izstrādāt jaunus komponentus ar vienu klikšķi saskaņā ar labāko praksi.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Ļaujiet priekšgala kodam mainīties no neilgtspējīga atmosfēras programmēšanas atkritumu kalna par standarta daļu, ko var uzturēt un atkārtoti attīstīt ilgtermiņā.

Ņemot vērā mākslīgā intelekta atbalstītas attīstības iezīmes, mēs ierosinājām un izstrādājām jaunu priekšgala izstrādes paradigmu:

1. **Viss ir tīmekļa komponents**
2. **Komponentam ir jābūt neatkarīgam no aizmugures datu saites, un datu saskarne ir redzama kā atzvanīšanas funkcija**

Tādā veidā mākslīgais intelekts var ģenerēt viltus datus un demonstrācijas lapā parādīt dažādus komponentu stāvokļus.

Komponentu izstrādes un datu saskarnes atdalīšana apvienojumā ar [webc.site komponentu ietvaru](https://github.com/webc-site/webc.site) Vēl viena svarīga iezīme:

**Katrs komponents var patstāvīgi startēt izstrādes serveri un izstrādāt un atkļūdot demonstrācijas lapā**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Tas samazina katra komponenta izstrādes un atkļūdošanas priekšgala saiti līdz `0`.

Tādā veidā mākslīgā intelekta atbalstīti izstrādes rīki ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) u.c.), jūs varat baudīt pilnībā automātisku izstrādi, dažādu pārlūkprogrammu bloķēšanu un atvēršanu. (aizmugures dati, pieteikšanās statuss, ceļa maršrutēšana utt.).

Ja vēlaties kontrolēt mākslīgo intelektu un samazināt izmaksas un palielināt efektivitāti, jums ir nepieciešama jauna paradigma, kas samazina katra komponenta izstrādes un atkļūdošanas vidi.

---

# Es vēl neesmu sācis rakstīt TODO

### Web komponentu bibliotēka

#### Maksimālā izmēra optimizācija

Piemēram, virtuālās ritjoslas komponentam salīdziniet populārā [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skripta izmēru un stilu aiz `gz`, kā parādīts šajā tabulā:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880. gads pirms mūsu ēras    |

Lietotāja `webc.site` virtuālās ritjoslas komponents ir tikai `OverlayScrollbars` `10%`.

#### Darbības laika neatkarīgs

Pamatojoties uz standartiem [Web Components] (/0), webc.site komponentu bibliotēka, protams, ir izpildlaika agnostiska. Neatkarīgi no tā, vai izmantojat React, Vue, Angular, Svelte vai tradicionālu tīru HTML/JS projektu, visi komponenti var darboties tieši pārlūkprogrammā, piemēram, vietējie HTML tagi, bez nepieciešamības pēc sekundāra iepakojuma konkrētam ietvaram.

##### Salīdzinājums ar shadcn

[shadcn/ui](https://ui.shadcn.com) izmanto koda izplatīšanas režīmu, kas paredz, ka komponenta kods ir jākopē tieši savā projektā. Tas ir cieši saistīts ar React ekosistēmu un konkrētām būvniecības rīku ķēdēm (piemēram, Tailwind CSS), un to nevar izmantot dažādās sistēmās. Tam ir arī noteiktas prasības projekta inženierijas konfigurācijai.

Un `webc.site` komponents:
- **Vairāku ietvaru universāls**: rakstiet vienreiz, un to var tieši ieviest un palaist jebkurā priekšgala sistēmā (pat vidē bez ietvara).
- **Neatkarība no vides**: nav nepieciešami īpaši iepakošanas rīki vai CSS priekšapstrādātāji, vienkārši importējiet apkopotos statiskos failus, un tos var izmantot jau no iepakojuma.

## Automatizēta izstrāde un atkļūdošana

### Vietējā attīstība un atkļūdošana

Katrs tīmekļa lapas komponents atbalsta izstrādes servera startēšanu neatkarīgi, nodrošinot minimālu izstrādes un atkļūdošanas vidi:

- **Izveidojiet jaunu komponentu**: palaidiet `./sh/new.js [css|js] [komponenta nosaukums]`, lai ātri ģenerētu komponenta izstrādes skeletu (tostarp demonstrācijas lapu un internacionalizācijas konfigurāciju).
- **Neatkarīga atkļūdošana**: palaidiet `./dev.js [komponenta nosaukums]` (vai palaidiet `./dev.js` tieši), lai palaistu Vite izstrādes serveri un pārlūkprogrammā automātiski atvērtu komponenta demonstrācijas lapu. Atbalsta komponentu karsto atjauninājumu (HMR). Tā kā izstrādes un datu saites ir atsaistītas, nav izstrādātas priekšgala saites, kas ir ļoti piemērota AI (piemēram, Claude Code, Google Antigravity utt.), lai palīdzētu pilnībā automātiskā izstrādē un pārlūkprogrammas atkļūdošanā.

### Publicēt komponentu bibliotēku

#### webc dist

Iepakošanas un publicēšanas process ir ļoti automatizēts:
- **Statiskā resursu iesaiņošana**: izpildot `./sh/dist.js` (tas ir, izpildot uzdevumu `webc dist`), var automātiski skenēt visus tīmekļa lapas komponentus zem `src/`, apkopot, saspiest un izvadīt tos `dist/` direktorijā. Šajā direktorijā ir JS/CSS faili produkcijas izplatīšanai, demonstrācijas vietne, kas ir gatava izvietošanai GitHub lapās vai Cloudflare Pages, un automātiski ģenerēti `_redirects` un `404.html` maršrutēšanas faili.
- **NPM Publish**: palaidiet `./sh/npmDist.js`, skripts automātiski apstrādās komponentu atkarības, palielinās pakotnes versijas numuru un izpildīs `npm publish` ar vienu klikšķi pēc iesaiņošanas pabeigšanas, lai publicētu komponentu bibliotēku NPM.

### Platforma ir atbildīga par tulkošanu

Sistēmā ir iebūvēti automatizēti tulkošanas procesi:
1. Konfigurējiet tulkošanas noteikumus (piemēram, avota valodu, mērķa valodu un tulkojamo direktoriju) `tran.yml` projekta saknes direktorijā.
2. Izmantojiet vietturus komponentos vai dokumentos, kodā neievadot vairākas valodas.
3. Palaidiet `./sh/tran.js`, un tulkošanas programma automātiski izvilks tekstu un izsauks WebC tulkošanas pakalpojumu apstrādei, automātiski ģenerējot YAML tulkošanas ierakstus un README dokumentāciju dažādās valodās.

### vides mainīgie

Veicot automātisko tulkošanu, jums ir jākonfigurē šādi vides mainīgie, lai autorizētu piekļuvi tulkošanas API:

- **`WEBC_SITE_TOKEN`** (vai **`WEBC_TOKEN`**): autentifikācijas atslēga, ko izmanto, lai piekļūtu `webc.site` automatizētās tulkošanas API. Var ievadīt kā vides mainīgo vai ierakstīt `token` `~/.config/webc.site.yml` konfigurācijas failā vietējā lietotāja mājas direktorijā.