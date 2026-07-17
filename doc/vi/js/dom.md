# dom.js

Tài liệu viết tắt biến và hàm phím tắt

## D

`document` Tham chiếu lối tắt đến đối tượng

## B

`document.body` Tham chiếu lối tắt đến đối tượng

## newEl

Tạo các phần tử DOM

tham số:
- `tagName` : tên thẻ thành phần

Giá trị trả về: phần tử DOM mới được tạo

## newLi(...tag_li)

Tạo nhiều phần tử DOM theo đợt

tham số:
- `tag_li` : danh sách tên thẻ

Giá trị trả về:
- Mảng chứa tất cả các phần tử DOM mới được tạo

## cE(name, cls)

Đăng ký các phần tử tùy chỉnh Thành phần Web

tham số:
- `name` : Tên thành phần tùy chỉnh, tiền tố `c-` sẽ được thêm tự động
- `cls` : lớp của phần tử tùy chỉnh