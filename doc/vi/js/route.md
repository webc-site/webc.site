# route.js

Quản lý định tuyến giao diện người dùng một trang

## nowUrl()

Lấy đường dẫn URL hiện tại đã loại bỏ dấu gạch chéo ở đầu

Giá trị trả về: chuỗi đường dẫn hiện tại

## route(hook)

Đăng ký cuộc gọi lại nghe để thay đổi tuyến đường. Khi đăng ký sẽ thực hiện 1 lần với đường dẫn hiện tại.

tham số:
- `hook` : Chức năng gọi lại giám sát lộ trình
  - tham số
    - `url` : đường dẫn hiện tại
    - `pre` : đường dẫn cuối cùng

Giá trị trả về: Hàm dọn dẹp chưa đăng ký

## setPre(url)

Lưu URL được ghi lần cuối

tham số:
- `url` : chuỗi đường dẫn

## preUrl()

Lấy URL của bản ghi cuối cùng

Giá trị trả về: chuỗi đường dẫn cuối cùng

## refresh(url)

Buộc tất cả các cuộc gọi lại nghe tuyến đường được kích hoạt tại đường dẫn đã chỉ định và cập nhật trước

tham số:
- `url` : đường dẫn đích, đường dẫn hiện tại mặc định

## removeSlash(url)

Xóa dấu gạch chéo khỏi tiêu đề đường dẫn

tham số:
- `url` : chuỗi đường dẫn

Giá trị trả về: đường dẫn sau khi bỏ dấu gạch chéo ở đầu

## setUrl(url)

Cập nhật trạng thái URL của thanh địa chỉ trình duyệt

tham số:
- `url` : đường dẫn đích

Giá trị trả về: 1 nếu đường dẫn thực sự thay đổi

## goto(url)

Cập nhật địa chỉ trình duyệt và kích hoạt làm mới tuyến đường

tham số:
- `url` : đường dẫn đích