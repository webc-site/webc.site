---
name: webc
---

Tuân thủ quy trình, lập kế hoạch và phát triển từng bước để tránh thiếu sót

1. Chạy `./sh/new.js tên thành phần loại dự án` và tạo thành phần trong thư mục `src/webc`
   Loại dự án có thể là `css` (thành phần kiểu thuần túy), `js` (thành phần trang web)
   Viết hoa chữ cái đầu tiên của tên thành phần

2. Đọc thông số kỹ thuật mã hóa cho `.agents/doc/code` rồi phát triển.

   Kiểu thành phần được viết bằng `_.styl`. Kiểu được sử dụng để trình diễn được viết bằng `demo/_.styl`. Cấm viết nó bằng `tên thành phần/_.styl`.

  Việc sử dụng `@import` để nhập kiểu từ các thành phần khác bị cấm trong cả `_.styl` và `demo/_.styl` .

  Tuân theo các tiêu chuẩn mã hóa và tính thẩm mỹ trong thiết kế của [./styl.md](./styl.md).

  Các thành phần phụ thuộc (và kiểu của chúng) được nhập qua `import "./other Components.js"` trong `webc/comComponentname.js`; các phần phụ thuộc để trình diễn được nhập qua `import "../../other Components.js"` trong `demo/_.js`.

   Tất cả các thành phần (bao gồm cả các thành phần kiểu thuần túy) phải có tệp tập lệnh `tên thành phần.js`. `tên thành phần.js` của các thành phần kiểu thuần túy chỉ nhập `_.styl` tương ứng. Đối với các thành phần có logic JS, hãy làm theo quy trình [webc.js.md](./webc.js.md) để phát triển.

3. Nhấn [demo.md](./demo.md) trình diễn phát triển quy trình

4. Chạy `./test.sh` của thư mục gốc. Sửa lỗi và cảnh báo, trích xuất chức năng, tối ưu hóa mã, tránh trùng lặp và dư thừa. Để biết thông số kỹ thuật của mã, hãy xem `.agents/doc/code/js.md`

5. Đọc [dbg.md](./dbg.md) và gỡ lỗi các thành phần theo quy trình

6. Thực hiện theo quy trình [i18n.md](./i18n.md) để triển khai quốc tế hóa các thành phần và trình diễn cũng như viết tài liệu

7. Kiểm tra lại và tối ưu hóa mã

8. Mở đại lý phụ và gọi `.agents/skills/js_review/SKILL.md` để xem xét và tối ưu hóa mã.

9. Gỡ lỗi một lần nữa