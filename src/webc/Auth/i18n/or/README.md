# ପ୍ରାମାଣିକିକରଣ ଲଗଇନ୍ ଏବଂ ପଞ୍ଜୀକରଣ |

ଇମେଲ୍ ଏବଂ ମୋବାଇଲ୍ ଫୋନ୍ ନମ୍ବର ପଞ୍ଜୀକରଣ ଏବଂ ଲଗଇନ୍, ଯାଞ୍ଚ କୋଡ୍ ଯାଞ୍ଚ, ପାସୱାର୍ଡ ଲଗଇନ୍ ଏବଂ ତୃତୀୟ-ପକ୍ଷ ଶୀଘ୍ର ଲଗଇନ୍ ଏକତ୍ର କରନ୍ତୁ |

- ଇମେଲ୍ ଏବଂ ମୋବାଇଲ୍ ଫୋନ୍ ନମ୍ବର ଇନପୁଟ୍ କୁ ସମର୍ଥନ କରନ୍ତୁ |
- ତରଳ ଗ୍ଲାସ୍ ଗଠନ ସହିତ ଭାସମାନ ଲେବଲ୍ |
- SMS ଯାଞ୍ଚ କୋଡ୍ ଗଣନାକୁ ସମର୍ଥନ କରନ୍ତୁ |
- ତୃତୀୟ-ପକ୍ଷ OAuth ଶୀଘ୍ର ଲଗଇନ୍ ଏବଂ ସୀମିତ ମାର୍ଗଦର୍ଶନକୁ ସମର୍ଥନ କରନ୍ତୁ |

## ଡେମୋ ବ୍ୟବହାର କରନ୍ତୁ |

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
  console.log ("ପ୍ରାମାଣିକିକରଣ ସଫଳ:", e.detail);
});
</script>
```

## ସ୍ଥିତି ସ୍ଥିର |

- `0` (`STATE_MAIL`): ଇମେଲ୍ ଇନପୁଟ୍ |
- `1` (`STATE_CODE`): ଇମେଲ୍ ଯାଞ୍ଚ କୋଡ୍ ପଞ୍ଜିକରଣ |
- `2` (`STATE_PASSWD`): ଇମେଲ୍ ପାସୱାର୍ଡ ଲଗଇନ୍ |
- `10` (`STATE_PHONE`): ମୋବାଇଲ୍ ଫୋନ୍ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ |
- `11` (`STATE_SMS_CODE`): SMS ଯାଞ୍ଚ କୋଡ୍ ଯାଞ୍ଚ |
- `Array` (`OAUTH_HINT`): ତୃତୀୟ-ପକ୍ଷ ଲଗଇନ୍ ଗାଇଡ୍ ତାଲିକା |

## ଗୁଣ ଏବଂ ହୁକ୍ କାର୍ଯ୍ୟଗୁଡ଼ିକ |

- `step`: ସାମ୍ପ୍ରତିକ ସ୍ଥିତି (ସଂଖ୍ୟା କିମ୍ବା ଆରେ)
- `mail`: ଇମେଲ୍ |
- `phone`: ମୋବାଇଲ୍ ଫୋନ୍ ନମ୍ବର |
- `onSignup(mail, name, password, code)`: କଲବ୍ୟାକ୍ ପଞ୍ଜିକରଣ କର |
- `onResend(mail)`: ଯାଞ୍ଚ କୋଡ୍ କଲବ୍ୟାକ୍ ପଠାନ୍ତୁ |
- `onLogin(mail, password)`: ପାସୱାର୍ଡ ଲଗଇନ୍ କଲବ୍ୟାକ୍ |
- `onSmsSend(phone)`: SMS ଯାଞ୍ଚ କୋଡ୍ କଲବ୍ୟାକ୍ ପଠାନ୍ତୁ |
- `onSmsVerify(phone, code)`: ଯାଞ୍ଚ SMS ଯାଞ୍ଚ କୋଡ୍ କଲବ୍ୟାକ୍ |
- `onPassport(provider)`: ତୃତୀୟ-ପକ୍ଷ ଶୀଘ୍ର ଲଗଇନ୍ କଲବ୍ୟାକ୍ |
- `onReset(mail)`: ପାସୱାର୍ଡ ପୁନ res ସେଟ୍ କଲବ୍ୟାକ୍ ଭୁଲିଗଲେ |