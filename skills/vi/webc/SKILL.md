---
name: webc
---

Tuân thủ quy trình, lập kế hoạch và phát triển từng bước để tránh thiếu sót

1. Chạy `./sh/new.js tên thành phần loại dự án` và tạo thư mục thành phần trong thư mục `src`
   Loại dự án có thể là `css` (thành phần kiểu thuần túy), `js` (thành phần trang web)
   Viết hoa chữ cái đầu tiên của tên thành phần

2. Đọc thông số kỹ thuật mã hóa cho `.agents/doc/code` rồi phát triển.

   Trong `_.styl`, `@import "../comComponent name/_.styl"` đầu tiên để nhập các phần phụ thuộc. Vui lòng tuân theo các tiêu chuẩn mã hóa và tính thẩm mỹ trong thiết kế của [./styl.md](./styl.md).

   Sửa đổi kiểu của các thành phần khác và thay vào đó hãy nhập chúng trực tiếp, hãy sử dụng `@import` ở đầu và tắt `extend`.

   Kiểu dùng để trình diễn bị cấm viết bằng `tên thành phần/_.styl` và viết bằng `demo/_.styl`.

   Đối với thành phần `js`, hãy phát triển nó theo quy trình [webc.js.md](./webc.js.md) (vui lòng xóa `tên thành phần/_.js` đối với các thành phần kiểu thuần túy)

3. Nhấn [demo.md](./demo.md) trình diễn phát triển quy trình

4. Chạy `./test.sh` của thư mục gốc. Sửa lỗi và cảnh báo, trích xuất chức năng, tối ưu hóa mã, tránh trùng lặp và dư thừa. Để biết thông số kỹ thuật của mã, hãy xem `.agents/doc/code/js.md`

5. Đọc [dbg.md](./dbg.md) và gỡ lỗi các thành phần theo quy trình

6. Thực hiện theo quy trình [i18n.md](./i18n.md) để triển khai quốc tế hóa các thành phần và trình diễn cũng như viết tài liệu

7. Kiểm tra lại và tối ưu hóa mã

8. Mở đại lý phụ và gọi `.agents/skills/js_review/SKILL.md` để xem xét và tối ưu hóa mã.

9. Gỡ lỗi một lần nữa