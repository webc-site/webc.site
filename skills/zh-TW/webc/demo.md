# 示範

參考 `src/BoxX/demo` ，在 `src/組件名/demo/` 開發組件的演示

`demo/_.pug`，示範子模板

僅包含極簡元件標籤，無需完整的頁面，禁含樣式、腳本的匯入。框架會自動注入（例如 `demo/_.styl`、`demo/_.js`）。

不寫標題（例如，不寫 xxx 演示），不寫組件名稱，不介紹元件，只寫演示案例的狀態（如無狀態，什麼標題都不寫）

`_.pug` 的根元素用 `main.demo.Lg` ，它已在 `demo/_.styl` 定義了樣式，不定義 `main.demo.Lg` 本身的樣式。

展示組件的容器與 `main.demo.Lg` 要貼合，之間不要有 `margin` 和 `padding`，因為 `main.demo` 本身已經設定了 `padding`，再設定空白就重複了。

`demo/_.styl` 如果展示組件只有一個，它的容器不加外框，只設定 `max-width`（因為演示容器會自動加外框），如果有多個，容器可加外框區隔

不在 `demo/_.pug` 寫 `img`，用 `demo/_.styl` 設定背景圖

如元件有多重形態，請依序展示(如載入中、空資料、有資料、失敗等)，flex 垂直佈局

`demo/_.styl`: 示範頁面的 `stylus` 樣式，請遵循 [./styl.md](./styl.md) 的程式碼規格和設計美學

不寫 `@import '../_.styl'` 導入待演示元件本身，會自動注入

按鈕請在 `demo/_.styl` 匯入 `@import '../../Btn/_.styl'`，用 `.Btn`

`demo/_.js`: 呼叫腳本，格式 `export default (root) => { ... }`，參數 `root` 為宿主 （`document` 或沙盒容器的根元素）

禁止用 `D.createElement`，用 [./js.md](./js.md) 提到的 `newEl`

`js` 中禁止用 `c-t`,國際化為用 `fLang`

若 `../_.js` (`../_.js` 是展示元件本身 ，其他demo 所需的依賴元件還是要導入) 只需 `import` ，不導入具體內容，可省略（框架會自動注入）

`pug` 不需要導入 `js` 和 `styl` ，框架會自動注入