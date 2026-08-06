# Warstwa wyskakująca z kodem weryfikacyjnym

Wyskakujące okienko z kodem weryfikacyjnym oparte na kliknięciu grafiki.

- W połączeniu z BoxX w celu wdrożenia interakcji z wyskakującym okienkiem i obsługi ESC/zamknięcia
- Kliknij cel na podstawie obrazu tła
- Obsługuje mechanizm cofania krokowego i automatycznego ponawiania
- używać
  * Sieć publiczna:`https://captcha.webc.pub`
  * Wdrożenie prywatne: [captcha_srv](https://crates.io/crates/captcha_srv)

## Skorzystaj z wersji demonstracyjnej

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Po weryfikacji prześlij token do backendu
  console.log("Weryfikacja przebiegła Token:", token);
}
```

## wartość zwracana

Wywołanie funkcji zwraca `Promise<string | undefined>`:
- **Weryfikacja pomyślna**: Zwraca kod weryfikacyjny zakodowany w formacie Base64URL (bez dopełnienia) Ciąg tokenu z kodem weryfikacyjnym.
- **Zamknij lub Anuluj**: Wróć do `undefined`.

## Proces weryfikacji i odpis back-end

1. **Weryfikacja wyzwalacza**: wywołania frontonu `Captcha()`.
2. **Pobierz wykres**: `Captcha.js` Przejdź od `GET /` do `captcha_srv`, aby uzyskać kliknięty obraz i identyfikator.
3. **Weryfikacja współrzędnych**: gdy użytkownik zakończy kliknięcie, `Captcha.js` inicjuje `POST /` podróż do `captcha_srv` w celu sprawdzenia współrzędnych. Jeżeli weryfikacja przebiegnie pomyślnie, zwrócony zostanie Token zakodowany w formacie Base64URL.
4. **Weryfikacja back-end**: Frontend przesyła token do backendu witryny, a backend wywołuje `captcha_srv` i `GET /verify/{token}` w celu jednoczesnej weryfikacji i zniszczenia tokenu.

### Instrukcje dotyczące odpisów końcowych

Gdy backend witryny otrzyma `token` przesłany przez frontend, musi zainicjować żądanie do usługi `captcha_srv`:

- **Zapytaj o interfejs**:`GET /verify/{token}`
- **Parametr ścieżki**: `token` (ciąg Base64URL zwrócony przez interfejs)
- **Wynik zwrotu**: `1` oznacza, że ​​weryfikacja przebiegła pomyślnie i jest ważna (zostanie automatycznie zniszczona); `0` oznacza nieprawidłowe lub zostało spisane.