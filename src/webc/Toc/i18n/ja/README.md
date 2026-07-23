# ディレクトリナビゲーションコンポーネント

- 垂直フレックスレイアウト
- ディレクトリデータを渡すための辞書のサポート
- クリックして Markdown テキストを自動的にロードします
- 読み込み状況表示イングアニメーション

## デモを使用する

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "コンポーネントを使用する"
};
</script>
```

## インタフェース

### プロパティとメソッド

- `toc.li`: `{ key: title }` などのディレクトリ オブジェクトまたはエントリのリストを設定します。
- `toc.mdUrl`: リクエストURL生成関数`(key, lang) => url`またはプレフィックス文字列を設定します
- `toc.target`: ターゲット コンテンツ ノード (`c-md` など) を設定または関連付け、`ing` 待機とコンテンツの入力を自動的に処理します。
- `toc.load(key)`: 対応するキーの読み込みを手動でトリガーします。