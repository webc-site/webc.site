# Ang kahon sa pag-input nga awtomatikong nagbalhin sa kahimtang sa placeholder

- Ipakita ang placeholder kung wala nakasulod
- Ang mga placeholder hapsay nga nagsukod ug naglutaw sa ibabaw kung nag-type sa sulud
- Puro CSS pagpatuman, walay JavaScript dependencies
- Default nga adunay frosted glass background ug hover transition

## Gamita ang demo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Email</label>
</b>
```

## mga kinahanglanon sa istruktura

- Container: Gamita ang mga elemento sa `.Input` nga klase para mag-host sa mga input box ug label.
- Kahon sa pag-input: `input` elemento, `placeholder=" "` (usa ka placeholder nga adunay luna) kinahanglang itakda aron ma-trigger ang switch sa estado.
- Tip tag: `label` elemento, pagkahuman dayon `input`.

## estilo nga klase

- `.Input`: Basic nga estilo, naghatag ug input box structure ug transition animation.
- `.Lg`: Highlight/frosted glass modification style.