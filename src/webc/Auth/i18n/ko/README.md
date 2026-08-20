# 인증 로그인 및 등록

이메일과 휴대폰 번호 등록 및 로그인, 인증코드 확인, 비밀번호 로그인, 제3자 빠른 로그인을 통합하세요.

- 이메일 및 휴대폰 번호 입력 지원
- 액체 유리 질감의 플로팅 라벨
- SMS 인증 코드 카운트다운 지원
- 타사 OAuth 빠른 로그인 및 바인딩 안내 지원

## 데모 사용

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
  console.log("인증 성공:", e.detail);
});
</script>
```

## 상태 상수

- `0` (`STATE_MAIL`): 이메일 입력
- `1` (`STATE_CODE`): 이메일 인증코드 등록
- `2` (`STATE_PASSWD`): 이메일 비밀번호 로그인
- `10` (`STATE_PHONE`): 휴대폰 번호 입력
- `11` (`STATE_SMS_CODE`): SMS 인증 코드 확인
- `Array` (`OAUTH_HINT`): 제3자 로그인 가이드 목록

## 속성 및 후크 기능

- `step`: 현재 상태(숫자 또는 배열)
- `mail`: 이메일
- `phone`: 휴대전화번호
- `onSignup(mail, name, password, code)`: 콜백 등록
- `onResend(mail)`: 인증 코드 콜백 재전송
- `onLogin(mail, password)`: 비밀번호 로그인 콜백
- `onSmsSend(phone)`: SMS 확인 코드 콜백 보내기
- `onSmsVerify(phone, code)`: 확인 SMS 인증 코드 콜백
- `onPassport(provider)`: 타사 빠른 로그인 콜백
- `onReset(mail)`: 비밀번호 재설정 콜백을 잊어버렸습니다.