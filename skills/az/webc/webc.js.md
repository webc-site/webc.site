
  `js` komponenti üçün `Light DOM` istifadə edərək komponenti `src/webc/componentname.js`-də tətbiq edin.

  Digər komponentləri idxal etmək üçün nisbi yollardan istifadə edin, məsələn: `import "./component name.js"` (Hər komponentin JS faylında müvafiq `_.styl` başlanğıcda idxal edilməlidir, məsələn, `import "./component name/_.styl";`).

  `this` Yalnız veb komponentinin yerli geri çağırış funksiyasını təyin edin, digərlərini müstəqil funksiyalar kimi yazın, `this` və tələb olunan parametrləri daxil edin.

  Xarici təsirə məruz qalan interfeyslərə əlavə olaraq, ağacın sarsıdıcı optimallaşdırılmasını və kodun sıxılmasını asanlaşdırmaq üçün, xüsusi şəxsi atributları `this`-də bağlamaq qadağandır (boşaltma funksiyaları üçün `this.$` istifadə edin) və yüksək səviyyəli funksiyalar aralıq dəyişənləri saxlamaq üçün qapaqları qaytarmaq üçün istifadə edilə bilər.

  `constructor` yazmayın, atribut `connectedCallback`-də alınır.


  `src/js/` altında ictimai funksiyalardan yenidən istifadə etmək üçün [./js.md](./js.md) ünvanına baxın

  Konteynerlər üçün atributlar əvəzinə `slot` istifadə edin.
  Məlumat yükləməlisinizsə, yükləmə interfeysini asinxron geri çağırış funksiyası şəklində yuxarı təbəqəyə təqdim edin və geri qaytarılan dəyər formatını göstərmək üçün şərhlərdən istifadə edin.
  Komponentlər yaddaş sızmalarının qarşısını almalıdır. `disconnectedCallback` silmə hadisələrini bir funksiyaya birləşdirin `this.$` və birdən çox silmə funksiyası yazmayın.
  İnterfeys qaytarma dəyəri obyekt deyil, tək dəyər, massiv və ya massivlər massivi ola bilər.
  Komponentin bir neçə vəziyyəti varsa, hər bir vəziyyətin məlumat formatını aydın şəkildə təsvir etmək üçün çox sətirli şərhlərdən istifadə edin. (Şərhlərin hər sətirindən əvvəl `*` yazmayın)
  Rəqəmsal sabitlərdən istifadə edərək vəziyyətin dəyişdirilməsi (`const.js` ilə müəyyən edilir).
  Geri çağırış yüklənərkən, animasiyanı göstərmək üçün `const xx = newEl('b');xx.className="Ing"` istifadə edin və komponent JS faylında `import "./Ing.js"` vasitəsilə asılılıqları təqdim edin.