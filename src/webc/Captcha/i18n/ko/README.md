# 인증코드 팝업 레이어

그래픽 클릭에 따른 인증코드 팝업창입니다.

- BoxX와 결합하여 팝업 창 상호 작용 및 ESC/닫기 지원 구현
- 배경 이미지를 기준으로 타겟 클릭
- 단계 클릭 실행 취소 및 자동 재시도 메커니즘 지원
- 사용
  * 공용 네트워크:`https://captcha.webc.pub`
  * 비공개 배포: [captcha_srv](https://crates.io/crates/captcha_srv)

## 데모 사용

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // 확인 후 백엔드에 토큰을 제출합니다.
  console.log("확인이 토큰을 통과했습니다:", token);
}
```

## 반환 값

함수를 호출하면 `Promise<string | undefined>`이 반환됩니다.
- **확인 통과**: Base64URL로 인코딩된(패딩 없음) 확인 코드 토큰 문자열을 반환합니다.
- **닫기 또는 취소**: `undefined`로 돌아가세요.

## 검증 프로세스 및 백엔드 상각

1. **트리거 유효성 검사**: 프런트엔드에서 `Captcha()`을 호출합니다.
2. **차트 가져오기**: `Captcha.js` 클릭한 이미지와 ID를 얻으려면 `GET /`에서 `captcha_srv`를 시작하세요.
3. **좌표 확인**: 사용자가 클릭을 완료한 후 `Captcha.js`은 좌표를 확인하기 위해 `POST /`을 `captcha_srv`로 시작합니다. 확인이 성공하면 Base64URL로 인코딩된 토큰이 반환됩니다.
4. **백엔드 검증**: 프론트엔드가 웹사이트 백엔드에 토큰을 제출하고, 백엔드는 `captcha_srv` 및 `GET /verify/{token}`를 호출하여 토큰을 한 번에 검증하고 파기합니다.

### 백엔드 상각 지침

웹사이트 백엔드는 프런트 엔드에서 제출한 `token`을 수신한 후 `captcha_srv` 서비스에 대한 요청을 시작해야 합니다.

- **요청 인터페이스**:`GET /verify/{token}`
- **경로 매개변수**: `token`(프런트 엔드에서 반환된 Base64URL 문자열)
- **반환 결과**: `1`은 확인이 통과되었으며 유효함을 의미합니다(자동으로 폐기됨). `0`는 유효하지 않거나 삭제되었음을 의미합니다.