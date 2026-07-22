# md/streamRender.js

マークダウンストリーミングレンダリング

## default(container, source)

指定された DOM コンテナへの Markdown テキストのストリーミング レンダリング、タイプライター カーソル効果と自動スクロールのサポート

パラメータ:
- `container` : レンダリングされたコンテンツをホストする DOM コンテナ要素
- `source` : ReadableStream テキスト データ ソース

戻り値:

- `cancel` : レンダリングとデータストリームの読み取りを停止する機能
- `setStop` : 自動スクロールを一時停止するかどうかを設定する機能
  - パラメータ
    - `val` : 一時停止するかどうかのブール値