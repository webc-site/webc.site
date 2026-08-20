# 認証ログインと登録

電子メールと携帯電話番号の登録とログイン、確認コードの検証、パスワードのログイン、サードパーティのクイック ログインを統合します。

- メールアドレスと携帯電話番号の入力をサポート
- 液体ガラスのテクスチャーを備えたフローティングラベル
- SMS認証コードカウントダウンをサポート
- サードパーティの OAuth クイック ログインとバインドされたガイダンスをサポート

## デモを使用する

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onSignup = async (mail, name, password, code) => {
  return [0, mail, name, code];
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("認証成功:", e.detail);
});
</script>
```

## 状態定数

- `0` (`STATE_MAIL`): 電子メールの入力
- `1` (`STATE_CODE`): メール確認コードの登録
- `2` (`STATE_PASSWD`): メールパスワードログイン
- `10` (`STATE_PHONE`): 携帯電話番号を入力してください
- `11` (`STATE_SMS_CODE`): SMS 確認コードの確認
- `Array` (`OAUTH_HINT`): サードパーティのログイン ガイド リスト

## プロパティとフック関数

- `step`: 現在のステータス (数値または配列)
- `mail`: 電子メール
- `phone`: 携帯電話番号
- `onSignup(mail, name, password, code)`: コールバックを登録します
- `onResend(mail)`: 確認コードのコールバックを再送信します
- `onLogin(mail, password)`: パスワードログインコールバック
- `onSmsSend(phone)`: SMS 確認コードのコールバックを送信します。
- `onSmsVerify(phone, code)`: 確認 SMS 確認コード コールバック
- `onPassport(provider)`: サードパーティのクイック ログイン コールバック
- `onReset(mail)`: パスワードを忘れた場合のリセット コールバック