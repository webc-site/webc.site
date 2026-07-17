# Toast.js

Lời nhắc thông báo bật lên bánh mì nướng

## toast(render, timeout)

Hiển thị cửa sổ bật lên nhắc nhở tiêu chuẩn

tham số:
- `render` : Chức năng hiển thị, được sử dụng để tùy chỉnh nội dung bật lên
  - tham số
    - `el` : Phần tử DOM của cửa sổ bật lên
- `timeout` : Độ trễ giây để tự động tắt, mặc định là 9, không tự động tắt khi về 0

Giá trị trả về: Phần tử DOM của cửa sổ bật lên

## toastErr(render, timeout)

Hiển thị cửa sổ bật lên thông báo lỗi

tham số:
- `render` : Chức năng hiển thị, được sử dụng để tùy chỉnh nội dung bật lên
  - tham số
    - `el` : Phần tử DOM của cửa sổ bật lên
- `timeout` : Độ trễ giây để tự động tắt, mặc định là 9, không tự động tắt khi về 0

Giá trị trả về: Phần tử DOM của cửa sổ bật lên lỗi