# md/streamRender.js

Kết xuất phát trực tuyến Markdown

## default(container, source)

Truyền trực tuyến kết xuất văn bản Markdown vào vùng chứa DOM được chỉ định, hỗ trợ hiệu ứng con trỏ máy đánh chữ và cuộn tự động

tham số:
- `container` : Phần tử vùng chứa DOM lưu trữ nội dung được hiển thị
- `source` : Nguồn dữ liệu văn bản ReadableStream

Giá trị trả về:

- `cancel` : Chức năng dừng kết xuất và đọc luồng dữ liệu
- `setStop` : Chức năng đặt có tạm dừng cuộn tự động hay không
  - tham số
    - `val` : Giá trị Boolean có nên tạm dừng hay không