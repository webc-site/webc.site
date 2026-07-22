# md/safeHtm.js

マークダウン テキストを安全な HTML に変換

## default(val)

Markdown テキストを解析して、XSS で保護された安全な HTML 文字列に変換します。

パラメータ:
- `val` : 変換されるマークダウン テキスト

戻り値: 安全な HTML 文字列