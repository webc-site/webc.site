# Lớp bật lên mã xác minh

Cửa sổ bật lên mã xác minh dựa trên nhấp chuột đồ họa.

- Kết hợp với BoxX để thực hiện tương tác với cửa sổ bật lên và hỗ trợ ESC/đóng
- Nhấp vào mục tiêu dựa trên hình nền
- Hỗ trợ cơ chế hoàn tác nhấp chuột từng bước và cơ chế thử lại tự động
- sử dụng
  * Mạng công cộng:`https://captcha.webc.pub`
  * Triển khai riêng tư: [captcha_srv](https://crates.io/crates/captcha_srv)

## Sử dụng bản trình diễn

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Sau khi xác minh, gửi mã thông báo đến chương trình phụ trợ
  console.log("Xác minh đã thông qua Mã thông báo:", token);
}
```

## giá trị trả về

Gọi hàm trả về `Promise<string | undefined>`:
- **Xác minh đã thành công**: Trả về chuỗi mã thông báo mã xác minh được mã hóa Base64URL (không có phần đệm).
- **Đóng hoặc Hủy**: Quay lại `undefined`.

## Quá trình xác minh và xóa sổ back-end

1. **Xác thực trình kích hoạt**: Lệnh gọi giao diện người dùng `Captcha()`.
2. **Nhận biểu đồ**: `Captcha.js` Bắt đầu `GET /` đến `captcha_srv` để lấy hình ảnh và ID được nhấp vào.
3. **Xác minh tọa độ**: Sau khi người dùng hoàn tất nhấp chuột, `Captcha.js` bắt đầu `POST /` đến `captcha_srv` để xác minh tọa độ. Nếu xác minh thành công, Mã thông báo được mã hóa Base64URL sẽ được trả về.
4. **Xác minh phía sau**: Giao diện người dùng gửi Mã thông báo đến phần phụ trợ của trang web và phần phụ trợ gọi `captcha_srv` và `GET /verify/{token}` để xác minh và hủy Mã thông báo cùng một lúc.

### Hướng dẫn xóa back-end

Sau khi phần phụ trợ của trang web nhận được `token` do giao diện người dùng gửi, nó cần bắt đầu yêu cầu tới dịch vụ `captcha_srv`:

- **Giao diện yêu cầu**:`GET /verify/{token}`
- **Tham số đường dẫn**: `token` (Chuỗi Base64URL được giao diện người dùng trả về)
- **Kết quả trả về**: `1` nghĩa là quá trình xác minh đã được thông qua và hợp lệ (sẽ tự động bị hủy); `0` có nghĩa là không hợp lệ hoặc đã bị xóa.