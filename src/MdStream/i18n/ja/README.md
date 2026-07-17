# Markdown テキストのストリーミング レンダリング

- Markdown を段階的に解析してレンダリングする
- スクロールする親要素と連携して、コンテンツが画面を超える場合に自動的にスクロールします。
- クリックまたは上にスクロールすると自動スクロールを一時停止し、下にスクロールすると再開します
- 入力ステータスインジケーターを自動的に表示します

## デモを使用する

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 返された非同期ジェネレーター関数を介したストリーミング データのレンダリング
  el.gen = async function* () {
    "# タイトル\n" を生成します。
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- item " + i + "\n";
    }
  };
</script>
```

## 財産

| 属性名 | タイプ | 説明する |
| :--- | :--- | :--- |
| `gen` | `Function` | 非同期イテレータ/ジェネレータを返し、設定後にコンテンツをクリアして再レンダリングする関数 |

## スタイル

| クラス/タグ | 説明する |
| :--- | :--- |
| `Md` | マウント時にコンポーネントに自動的に追加されるクラス、Markdown スタイルの設定 |
| `i.T` | データ入力中に最後に自動的に追加される入力ステータスインジケーター |