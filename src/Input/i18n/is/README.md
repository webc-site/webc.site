# Inntaksreitur sem skiptir sjálfkrafa um staðgengil

- Sýna staðgengill þegar hann er ekki sleginn inn
- Staðgjafar skalast mjúklega og fljóta fyrir ofan þegar efni er slegið inn
- Hrein CSS útfærsla, engin JavaScript ósjálfstæði

## Notaðu kynninguna

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Tölvupóstur</label>
</b>
```

## byggingarkröfur

- Gámur: Notaðu þætti `.Input` flokksins til að hýsa inntaksbox og merki.
- Inntaksreitur: `input` þáttur, `placeholder=" "` (staðgjafi sem inniheldur bil) verður að vera stilltur til að kveikja á stöðurofanum.
- Ábendingamerki: `label` frumefni, strax á eftir `input`.

## stílaflokkur

- `.Input`: Grunnstíll, sem veitir uppbyggingu inntaksboxs og umbreytingarfjör.
- `.Lg`: Breytingarstíll hápunkts/mataðs glers.