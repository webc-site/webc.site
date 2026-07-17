# Thử nghiệm

Tham khảo `src/BoxX/demo` và phát triển bản demo của thành phần trong `src/tên thành phần/demo/`

`demo/_.pug`, mẫu con demo

Chỉ bao gồm các thẻ thành phần tối giản, không yêu cầu trang hoàn chỉnh và việc nhập kiểu và tập lệnh bị cấm. Khung sẽ tự động đưa vào (chẳng hạn như `demo/_.styl`, `demo/_.js`).

Không viết tiêu đề (ví dụ không viết xxx demo), không viết tên thành phần, không giới thiệu thành phần, chỉ viết trạng thái của use case demo (nếu không có trạng thái thì không ghi tiêu đề)

Phần tử gốc của `_.pug` sử dụng `main.demo.Lg` , phần tử này đã xác định kiểu trong `demo/_.styl` và không xác định kiểu của chính `main.demo.Lg`.

Vùng chứa của thành phần hiển thị phải được căn chỉnh với `main.demo.Lg` và không được có `margin` và `padding` giữa chúng, vì bản thân `main.demo` đã được đặt `padding` và việc đặt trống sẽ được lặp lại.

`demo/_.styl` Nếu chỉ có một thành phần hiển thị, vùng chứa của nó sẽ không có khung bên ngoài và chỉ được đặt `max-width` (vì vùng chứa bản trình bày sẽ tự động thêm khung bên ngoài). Nếu có nhiều cái thì có thể ngăn cách thùng chứa bằng khung bên ngoài.

Không viết `img` trong `demo/_.pug`, sử dụng `demo/_.styl` để đặt hình nền

Nếu thành phần có nhiều biểu mẫu, vui lòng hiển thị chúng theo thứ tự (chẳng hạn như đang tải, dữ liệu trống, dữ liệu, không thành công, v.v.), bố cục dọc linh hoạt

`demo/_.styl`: `stylus` phong cách của trang demo, vui lòng tuân theo thông số kỹ thuật mã và tính thẩm mỹ thiết kế của [./styl.md](./styl.md)

Đừng viết `@import '../_.styl'` để nhập thành phần cần trình diễn, nó sẽ được tự động chèn vào

Vui lòng nhập `@import '../../Btn/_.styl'` vào `demo/_.styl` và sử dụng `.Btn`

`demo/_.js`: Gọi tập lệnh, định dạng `export default (root) => { ... }`, tham số `root` là máy chủ (`document` hoặc phần tử gốc của vùng chứa hộp cát)

`D.createElement` bị cấm, hãy sử dụng `newEl` được đề cập bởi [./js.md](./js.md)

`js` bị cấm sử dụng trong `c-t` và để quốc tế hóa `fLang`

Nếu `../_.js` (`../_.js` để hiển thị chính thành phần đó thì các thành phần phụ thuộc mà các bản demo khác yêu cầu vẫn cần được nhập) chỉ cần `import` và không có nội dung cụ thể nào được nhập, có thể bỏ qua (khung sẽ tự động đưa vào)

`pug` Không cần nhập `js` và `styl` , khung sẽ tự động đưa chúng vào