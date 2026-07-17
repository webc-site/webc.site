# Vipimo vya nambari ya JS

## mtindo wa kuweka kumbukumbu

- Rahisi, maridadi na bora, kwa kutumia syntax ya kisasa zaidi ya js
- Gawanya vitendaji virefu sana, na muundo wa kiolesura unapaswa kuwa muunganisho wa chini na muunganisho wa hali ya juu.
- Tumia safu + loops/forEach/map zaidi na uandike msimbo unaojirudiarudia
- Usiandike maoni ya chaguo za kukokotoa katika msimbo rahisi ili kuepuka maoni mengi. Mantiki tata na mahitaji maalum yanaelezwa kwa Kichina kilichosafishwa.
- Nambari ya kuthibitisha inayorudiwa imetolewa katika vipengele vya kukokotoa ili kupunguza upunguzaji wa matumizi. Kwa mfano, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` inaweza kuandikwa kama `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Tamko linalobadilika: Changanya matamko `const` mengi mfululizo katika taarifa moja. Badala ya kuiandika katika mistari mitatu, andika `const a=1, b=2, c=3;`
- Usindikaji wa Asynchronous: tumia `await`, kataza matumizi ya `.then` msururu wa simu.
- Usitengeneze kiotomatiki msimbo wa ushughulikiaji wa ubaguzi, usiandike kiotomatiki `try...catch` (`try ... catch` inatunzwa kwa mikono, `try catch` iliyopo haipaswi kufutwa)
- Kazi safi kwanza: andika kazi safi tu, kamwe sio madarasa
- Tumia vitendaji vya vishale `const funcName = () => {}` na usitumie neno kuu la `function` (isipokuwa jenereta); ikiwa unaweza kutumia .bind kufunga vigezo, epuka kufafanua vipengele
- Utumiaji wa msimbo tena: Zingatia kutumia tena, kutoa vitendaji vidogo zaidi, na uepuke kwa uthabiti idadi kubwa ya miundo ya msimbo inayofanana au kubandikwa.
- Ufikiaji wa kitu: Weka kipaumbele kwa kutumia kazi ya urekebishaji ili kutoa sifa zinazohitajika, epuka kutumia nukta mara kwa mara ndani ili kufikia sifa za kina na zilizowekwa, na uunganishe hukumu za hiari zinazorudiwa.
- Usitumie vitu kwa vigezo vya kukokotoa, usiandike `{a,b,c}`, andika `a, b, c`; ikiwa kuna vigezo vingi vya hiari, tumia [[idadi ya vipengee vya usanidi, vipengee vya usanidi], [idadi ya vipengee vya usanidi, vipengee vya usanidi],..] Katika dhana hii, vipengee vya usanidi vinafafanuliwa kwa viunga vya nambari.
- Kwa urejeshaji wa thamani nyingi, tumia safu `[a,b,c]` badala ya `{a,b,c}`. Iwapo kuna zaidi ya thamani 3 za kurejesha, tumia nambari thabiti ili kufafanua maana ya nafasi.
- Hakuna haja ya mfuatano kuwakilisha jimbo, tumia viunga vya nambari kufafanua hali
- Hakuna kiolezo cha mfuatano (``) kinachotumika, upatanisho wa kamba (+) unatumika, isipokuwa kwa kuleta (rahisi kwa uchambuzi wa tuli wa Vite)
- Kwa kitanzi, ikiwa unahitaji nambari ya mfululizo, tumia `++i` badala ya `i++`
- Epuka `?.` isiyo ya lazima na piga marufuku upangaji programu wa kujihami
- Jina la kutofautisha halihitaji kuwa wingi, na huishia na `_li` ili kuonyesha orodha.

## Mkataba wa kumtaja

- Kutaja kunafuata minimalism. Tumia majina mafupi lakini yenye maana, kwa mfano: tumia `rm` badala ya `remove`, `delete`, `del`. Hata hivyo, unapaswa pia kuepuka kwenda kupita kiasi, kwa mfano: usitumie herufi moja `m` badala ya `map`
- Jaribu kutumia vitenzi pekee katika kazi ya kutaja. Ikiwa unaweza kutumia neno moja kuelezea, usitumie maneno mawili. Majina yanaonyeshwa katika majina ya faili. Ikiwa unahitaji kuongeza kitenzi kwa jina la faili, tafadhali weka nomino kwanza na kitenzi mwisho. Kwa mfano: `profileSet.js` badala ya `setProfile.js`
- Jina linalobadilika: tumia mtindo wa kupigia mstari (snake_case), kwa mfano `user_auth_token`; ikiwa utofauti ni chaguo la kukokotoa, tumia mtindo wa kumtaja ngamia wenye herufi ndogo
- Jina la kazi: Tumia camelcase ndogo (camelCase), kwa mfano `userData`
- Vigezo vya utendakazi: Ikiwa ni kitendakazi cha kurudisha nyuma, kipe jina kwa herufi ndogo za ngamia, kama vile `onChange`
- Ufafanuzi wa mara kwa mara wa kiwango cha moduli hutumia mtindo wa herufi kubwa chini ya mstari `UPPER_SNAKE_CASE`
- Usiandike `get`, viambishi awali visivyo na maana, kama vile: andika `cookieByHeader` badala ya `getCookie`
- Viunga vya kiwango cha kimataifa/moduli: tumia mtindo wa herufi kubwa chini (UPPER_SNAKE_CASE), k.m. `CODE_TO_ID`, `ID_TO_LANG`

## Utaratibu wa msimu

- Ingiza: Ingiza utendakazi kwa usahihi inapohitajika, zuia uingizaji wa moja kwa moja wa sehemu nzima (epuka `import * as x` au leta vitu vikubwa)
- Hamisha: Zima usafirishaji wa vitu. Hamisha vitendaji na vigeu kama vitengo, kama vile `export const X=1, abc=()=>{};`. Jaribu kuzichanganya na const + koma ili kutangaza maudhui yaliyosafirishwa. Ikiwa faili ina chaguo za kukokotoa moja pekee, tumia `export default`
- Isipokuwa unahitaji kupigia simu kitendakazi chaguo-msingi cha uhamishaji ndani, epuka kutangaza vidhibiti kwanza na kisha kuvisafirisha mwishoni mwa faili.
- Azimio la njia: Wakati wa kupata njia ya saraka ya sasa, `import.meta.dirname` lazima itumike

## kosa

- Epuka hitilafu za mfuatano na utumie const kutangaza misimbo ya makosa ya mara kwa mara.
- Iwapo unahitaji kurejesha taarifa ya data isiyo sahihi, tumia [msimbo wa hitilafu, ujumbe wa hitilafu,...] Kwa njia hii, ujumbe wa hitilafu si maelezo ya maandishi, bali ni thamani ya nambari (kama vile [FILE_OVERSIZE, file_size, max_size])
-

## Jaribu kutumia API zinazooana na kivinjari

- Usimbaji fiche na usimbuaji: Lazimisha matumizi ya API asili ya Crypto Web
- Data binary: Unaposhughulika na jozi, jaribu kutumia `Uint8Array` kwa usawa