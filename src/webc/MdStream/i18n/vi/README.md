# Truyền trực tuyến kết xuất văn bản Markdown

- Phân tích cú pháp và hiển thị dần dần Markdown
- Hợp tác với phần tử cha cuộn để tự động cuộn khi nội dung vượt quá màn hình
- Tạm dừng tự động cuộn khi nhấp hoặc cuộn lên, tiếp tục khi cuộn xuống
- Tự động hiển thị các chỉ báo trạng thái gõ

## Sử dụng bản trình diễn

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Truyền trực tuyến kết xuất dữ liệu thông qua hàm tạo không đồng bộ được trả về
el.gen = async function* () {
  mang lại "# tiêu đề\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    mang lại "- mục " + i + "\n";
  }
};
</script>
```

## tài sản

| tên thuộc tính | kiểu | minh họa |
| :--- | :--- | :--- |
| `gen` | `Function` | Hàm trả về một trình vòng lặp/trình tạo không đồng bộ, xóa nội dung và hiển thị lại sau khi cài đặt |

## phong cách

| Lớp/Thẻ | minh họa |
| :--- | :--- |
| `Md` | Lớp tự động được thêm vào thành phần khi gắn, đặt kiểu Markdown |
| `i.T` | Chỉ báo trạng thái gõ tự động thêm vào cuối trong quá trình nhập dữ liệu |