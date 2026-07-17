# c-t.js

Quốc tế hóa HTML

Thẻ `<c-t>key</c-t>` được tùy chỉnh và `key` là khóa của gói ngôn ngữ.

## cTranSet(el, genUrl)

Đặt văn bản cho `c-t`.

tham số:
- `el` : phần tử gốc, toàn cục có thể được truyền vào `document`
- `genUrl` : chức năng lấy từ điển gói ngôn ngữ
  - tham số
    - `code` : mã ngôn ngữ
  - Giá trị trả về: đối tượng từ điển gói ngôn ngữ hoặc Lời hứa phân giải cho đối tượng này