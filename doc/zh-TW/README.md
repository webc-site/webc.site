# WebC.site

## 這是什麼？

### 這是原生網頁元件庫

基於[web components](https://developer.mozilla.org/docs/Web/API/Web_components) 開發，運行時無關，適用於所有框架。

尺寸極致優化（是同類流行庫的十分之一）。

支援 75 種語言。可以直接導入 js 和 css 線上使用，亦可按需添加元件到你的項目，二次開發。

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### 這是元件庫開發框架

這是靜態部落格版的[storybook](https://storybook.js.org)。

建構組件庫，能提高公司內部開發效率，更能建立技術圈的品牌形象。

基於[webc.site](https://github.com/webc-site/webc.site)，團隊可輕鬆建立自己的元件庫，發佈到[github page](https://pages.github.com) 、[cloudflare page](https://pages.cloudflare.com) 等。發布後的元件能在 [codepen.io](https://codepen.io) 、 [jsfiddle](https://jsfiddle.net) 上線上調試。

同時，內建的翻譯框架，快速實現元件、文件的國際化，讓您的產品受眾不再被語言束縛。

### 這是面向人工智慧時代的前端開發新範式

框架內建 `.agents/skills`， 讓人工智慧按最佳實踐，幫您一鍵開發新元件。

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

讓前端代碼，從氛圍編程不可持續的屎山，變成可長期維護、迭代演進的標準件。

針對人工智慧輔助開發的特點，我們提出設計了前端開發新典範：

1. **一切都是網頁元件**
2. **元件要獨立於後端資料鏈路，資料介面暴露為回呼函數**

如此，人工智慧就可以在示範頁面，產生假數據，展示元件的不同狀態。

元件開發與資料介面分離，再配合 [webc.site 元件架構](https://github.com/webc-site/webc.site) 另一個重大功能：

**每個元件，能獨立啟動開發伺服器，在示範頁面開發調試**。

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

這就讓每個元件開發調試的前置連結降到了 `0`。

這樣，人工智慧輔助開發工具（[Claude Code](https://code.claude.com)、[OpenAI Codex](https://openai.com)、[Google Antigravity](https://antigravity.google)、[Cursor](https://cursor.com)、[Windsurf](https://windsurf.com)、[Devin](https://devin.ai)、[OpenHands](https://github.com/All-Hands-AI/OpenHands)等等），就能盡情的全自動開發、開啟瀏覽器調試，不再被各種亂七八糟的因素(後端資料、登入狀態、路徑路由等等)阻塞。

想要駕馭人工智慧、降本增效，就需要這樣讓每個元件的開發調試環境最小化的新典範。

---

# 以下還沒開始寫 TODO

### 網頁元件庫

#### 極致的尺寸優化

如虛擬捲軸元件，對比流行的[OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) 腳本和樣式在 `gz` 後的大小，如下表:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

`webc.site` 的虛擬捲軸元件，體積只有 `OverlayScrollbars` 的 `10%`。

#### 運行時無關

基於標準的 [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) 構建，使得 webc.site 元件庫具有天然的運行時無關特性。無論使用的是 React、Vue、Angular、Svelte，還是傳統的純 HTML/JS 項目，所有元件都可以像原生 HTML 標籤一樣直接在瀏覽器中運行，而無需針對特定框架進行二次封裝。

##### 與 shadcn 的對比

[shadcn/ui](https://ui.shadcn.com) 採用程式碼分發模式，需要將元件程式碼直接複製到自己的專案中，與 React 生態及特定的建置工具鏈（如 Tailwind CSS）緊密綁定，無法跨框架使用，且對專案工程配置有一定要求。

而 `webc.site` 的組件：
- **跨框架通用**：一次編寫，可在任何前端框架（甚至無框架環境）中直接引入並運行。
- **環境零依賴**：不需要特定的打包工具或 CSS 預處理器，只需導入編譯好的靜態檔案即可開箱即用。

## 自動化開發、調試

### 本地開發與偵錯

每個網頁元件支援獨立啟動開發伺服器，提供了最小化的開發與調試環境：

- **建立新元件**：透過執行 `./sh/new.js [css|js] [元件名稱]` 快速產生元件來開發骨架（含示範頁面和國際化設定）。
- **獨立除錯**：執行 `./dev.js [元件名稱]`（或直接執行 `./dev.js`）即可啟動 Vite 開發伺服器，並在瀏覽器中自動開啟該元件的示範頁面。支援組件熱更新（HMR）。因為開發與資料鏈路解耦，開發前置鏈路為零，非常適合 AI（如 Claude Code、Google Antigravity 等）輔助進行全自動開發與瀏覽器調試。

### 發布元件庫

#### webc dist

打包與發布流程已高度自動化：
- **靜態資源打包**：執行 `./sh/dist.js`（即執行 `webc dist` 任務）可自動掃描 `src/` 下的所有網頁元件，將其編譯、壓縮並輸出到 `dist/` 目錄。目錄包含了用於生產分發的 JS/CSS 檔案、可用於部署至 GitHub Pages 或 Cloudflare Pages 的示範站點，以及自動產生的 `_redirects` 和 `404.html` 路由檔案。
- **NPM 發佈**：執行 `./sh/npmDist.js`，此腳本會自動處理元件依賴、遞增包版本號，完成打包後一鍵執行 `npm publish` 將元件庫發佈到 NPM。

### 平台負責翻譯

框架內建了自動化翻譯流程：
1. 在專案根目錄的 `tran.yml` 中設定翻譯規則（如原始語言、目標語言及待翻譯的目錄）。
2. 在元件或文件中使用佔位符，無需在程式碼中硬編碼多種語言。
3. 執行 `./sh/tran.js`，翻譯引擎會自動擷取文字並呼叫 WebC 翻譯服務進行處理，自動產生各語種的 YAML 翻譯詞條和 README 說明文件。

### 環境變數

在執行自動化翻譯時，需要配置以下環境變數來授權存取翻譯 API：

- **`WEBC_SITE_TOKEN`**（或 **`WEBC_TOKEN`**）：用於存取 `webc.site` 自動化翻譯 API 的驗證金鑰。可作為環境變數注入，或在本機使用者主目錄的 `~/.config/webc.site.yml` 設定檔中寫入 `token`。