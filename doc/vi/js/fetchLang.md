# fetchLang.js

Tải không đồng bộ các gói ngôn ngữ và liên kết các lệnh gọi lại cập nhật

## fetchLang(getDict)

Tạo trình nghe gói ngôn ngữ để lấy gói ngôn ngữ một cách không đồng bộ và thực hiện lệnh gọi lại làm mới khi ngôn ngữ thay đổi

tham số:
- `getDict` : Nhận chức năng không đồng bộ của gói ngôn ngữ
  - tham số
    - `code` : mã ngôn ngữ
  - Giá trị trả về: từ điển gói ngôn ngữ

Giá trị trả về: hàm đăng ký gọi lại làm mới
- tham số
  - `refresh` : Làm mới chức năng gọi lại khi ngôn ngữ được cập nhật
    - tham số
      - `i18n` : Đối tượng từ điển gói ngôn ngữ
      - `code` : Mã ngôn ngữ hiện tại
- Giá trị trả về: hàm hủy đăng ký gọi lại làm mới