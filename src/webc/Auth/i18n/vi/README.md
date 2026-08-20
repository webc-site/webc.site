# Đăng nhập và đăng ký xác thực

Tích hợp đăng ký và đăng nhập email và số điện thoại di động, xác minh mã xác minh, đăng nhập mật khẩu và đăng nhập nhanh của bên thứ ba.

- Hỗ trợ nhập email và số điện thoại di động
- Nhãn nổi với kết cấu thủy tinh lỏng
- Hỗ trợ đếm ngược mã xác minh SMS
- Hỗ trợ đăng nhập nhanh OAuth của bên thứ ba và hướng dẫn ràng buộc

## Sử dụng bản trình diễn

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
  console.log("Xác thực thành công:", e.detail);
});
</script>
```

## hằng số trạng thái

- `0` (`STATE_MAIL`): Nhập email
- `1` (`STATE_CODE`): Đăng ký mã xác minh qua email
- `2` (`STATE_PASSWD`): Đăng nhập mật khẩu email
- `10` (`STATE_PHONE`): Nhập số điện thoại di động
- `11` (`STATE_SMS_CODE`): Xác minh mã xác minh qua SMS
- `Array` (`OAUTH_HINT`): Danh sách hướng dẫn đăng nhập của bên thứ ba

## Thuộc tính và hàm hook

- `step`: trạng thái hiện tại (số hoặc mảng)
- `mail`: Email
- `phone`: số điện thoại di động
- `onSignup(mail, name, password, code)`: Đăng ký gọi lại
- `onResend(mail)`: Gửi lại lệnh gọi lại mã xác minh
- `onLogin(mail, password)`: Gọi lại đăng nhập bằng mật khẩu
- `onSmsSend(phone)`: Gửi tin nhắn SMS gọi lại mã xác minh
- `onSmsVerify(phone, code)`: Gọi lại mã xác minh qua SMS xác minh
- `onPassport(provider)`: Gọi lại đăng nhập nhanh của bên thứ ba
- `onReset(mail)`: Quên gọi lại đặt lại mật khẩu