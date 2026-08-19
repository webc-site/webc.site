# 認証ログインと登録

電子メールと携帯電話番号の登録とログイン、確認コードの検証、パスワードのログイン、サードパーティのクイック ログインを統合します。

- メールアドレスと携帯電話番号のタブ切り替えをサポート
- 液体ガラスのテクスチャーを備えたフローティングラベル
- 複数国の市外局番の選択とSMS認証コードのカウントダウンをサポート
- サードパーティの OAuth クイック ログインとバインドされたガイダンスをサポート

## デモを使用する

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // ステータス コードを返します: 確認コード登録の場合は 1、パスワード ログインの場合は 2、またはサードパーティのログイン配列 ["google", "apple"] を返します。
  return 2;
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
- `cc`: 国際ダイヤル番号 (デフォルトは 86)
- `onMail(mail)`: 電子メール チェック コールバック
- `onSignup(mail, name, password)`: コールバックを登録します
- `onLogin(mail, password)`: パスワードログインコールバック
- `onSmsSend(phone, cc)`: SMS 確認コード コールバックを送信します。
- `onSmsVerify(phone, cc, code)`: 確認 SMS 確認コード コールバック
- `onPassport(provider)`: サードパーティのクイック ログイン コールバック
- `onReset(mail)`: パスワードを忘れた場合のリセット コールバック