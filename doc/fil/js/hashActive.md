# hashActive.js

Pag-highlight ng link sa nabigasyon batay sa mga anchor ng URL at pag-scroll sa viewport

## default(link_li, cls)

Awtomatikong i-highlight ang mga link sa nabigasyon na tumutugma sa kasalukuyang nakikitang lugar batay sa posisyon ng pag-scroll ng pahina at mga pagbabago sa anchor point ng URL.

parameter:
- `link_li` : Navigation link DOM na listahan ng elemento
- `cls` : Active CSS class name, default `"A"`

Return value: Kanselahin ang lahat ng listening cleanup function