---
name: jsdoc
description: tài liệu src/js được tạo tự động
---

## Chạy các bước

1. Chạy `./sh/jsDoc.js` để xem các hàm thiếu tài liệu (nếu không có đầu ra thì không cần thêm nó).
2. Theo danh sách tệp đầu ra, đọc từng tài liệu và mã hiện có và hoàn thành chúng (xử lý theo trình tự và chia nhỏ từng cái một).

## Yêu cầu về tài liệu

Nếu xuất là một hàm, hãy viết
- Các tham số và giá trị trả về:
  - Chỉ viết mô tả tương ứng nếu có tham số hoặc giá trị trả về, nếu không thì không viết.
  - Các tham số được giới thiệu bằng cách sử dụng danh sách không có thứ tự.
  - Nếu giá trị trả về là một mảng, hãy sử dụng danh sách không có thứ tự để mô tả từng mảng một (nếu không, hãy viết trực tiếp `Giá trị trả về: mô tả`, chỉ một dòng).
  - Nếu tham số hoặc giá trị trả về là hàm, hãy sử dụng danh sách không thứ tự phụ để mô tả tham số và giá trị trả về (nếu không có thì không viết chúng).

Nếu xuất là hằng số, hãy giới thiệu nó là gì, chỉ một dòng

- Sử dụng ngôn ngữ ngắn gọn, chuyên nghiệp và tránh sử dụng tính từ.
- Sửa đổi tài liệu hiện có, không viết lại hoàn toàn

## mẫu định dạng

Mỗi tên chỉ viết một lần để tránh trùng lặp và cố gắng diễn đạt rõ ràng trong một dòng. Định dạng tham khảo như sau

```
# tên tập tin

## Tên hàm (tham số)

Mô tả sử dụng

tham số:
- `xx` : Mục đích
  - tham số
    - `a` : Mục đích
  - Giá trị trả về: mô tả

Giá trị trả về: Mô tả
```