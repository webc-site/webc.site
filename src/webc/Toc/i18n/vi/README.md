# Thành phần điều hướng thư mục

- Bố cục Flex dọc
- Hỗ trợ từ điển để chuyển dữ liệu thư mục
- Nhấp để tự động tải văn bản Markdown
- Đang tải hiển thị trạng thái Hoạt hình Ing

## Sử dụng bản trình diễn

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Sử dụng các thành phần"
};
</script>
```

## giao diện

### Thuộc tính và phương thức

- `toc.li`: Đặt đối tượng thư mục hoặc danh sách các mục, chẳng hạn như `{ key: title }`
- `toc.mdUrl`: Đặt chức năng tạo URL yêu cầu `(key, lang) => url` hoặc chuỗi tiền tố
- `toc.target`: Đặt hoặc liên kết nút nội dung đích (chẳng hạn như `c-md`), tự động xử lý `ing` việc chờ đợi và điền nội dung
- `toc.load(key)`: Kích hoạt tải khóa tương ứng theo cách thủ công