
  Đối với thành phần `js`, hãy sử dụng `Light DOM` để triển khai thành phần trong `src/tên thành phần/_.js`.

  Sử dụng đường dẫn tương đối để nhập các thành phần khác, chẳng hạn như: `import "../comComponent name/_.js"` (`js` không nhập `styl`, khung sẽ tự động đưa nó vào).

  `this` Chỉ xác định hàm gọi lại gốc của thành phần web, viết các hàm khác dưới dạng hàm độc lập, chuyển vào `this` và các tham số bắt buộc.

  Ngoài các giao diện được hiển thị bên ngoài, để tạo điều kiện tối ưu hóa rung cây và nén mã, không được phép liên kết các thuộc tính riêng tư tùy chỉnh trên `this` (sử dụng `this.$` cho các hàm dỡ tải) và các hàm bậc cao có thể được sử dụng để trả về các bao đóng để giữ các biến trung gian.

  Đừng viết `constructor`, thuộc tính lấy được trong `connectedCallback`.


  Tham khảo [./js.md](./js.md) để sử dụng lại các hàm công khai trong `src/js/`

  Đối với vùng chứa, hãy sử dụng `slot` thay vì thuộc tính.
  Nếu bạn cần tải dữ liệu, hãy hiển thị giao diện tải lên lớp trên dưới dạng hàm gọi lại không đồng bộ và sử dụng các nhận xét để cho biết định dạng của giá trị trả về.
  Các thành phần phải tránh rò rỉ bộ nhớ. `disconnectedCallback` hợp nhất các sự kiện gỡ cài đặt thành một chức năng `this.$` và không ghi nhiều chức năng gỡ cài đặt.
  Giá trị trả về của giao diện có thể là một giá trị đơn, một mảng hoặc một mảng mảng, không phải là một đối tượng.
  Nếu thành phần có nhiều trạng thái, hãy sử dụng nhận xét nhiều dòng để mô tả rõ ràng định dạng dữ liệu của từng trạng thái. (Không đặt trước mỗi dòng bình luận bằng `*`)
  Chuyển đổi trạng thái, sử dụng hằng số (được xác định thành `const.js`).
  Trong khi lệnh gọi lại đang tải, hãy hiển thị hoạt ảnh với `const xx = newEl('b');xx.className="Ing"` và `@import "../Ing/_.styl"` trong `_.styl`