# Hộp đầu vào tự động chuyển trạng thái giữ chỗ

- Hiển thị phần giữ chỗ khi chưa nhập
- Trình giữ chỗ sẽ chia tỷ lệ một cách trơn tru và nổi phía trên khi nhập nội dung
- Triển khai CSS thuần túy, không phụ thuộc vào JavaScript
- Mặc định với nền kính mờ và chuyển tiếp di chuột

## Sử dụng bản trình diễn

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## yêu cầu về kết cấu

- Vùng chứa: Sử dụng các phần tử của lớp `.Input` để lưu trữ các hộp và nhãn đầu vào.
- Hộp nhập: phần tử `input`, `placeholder=" "` (phần giữ chỗ chứa khoảng trắng) phải được đặt để kích hoạt chuyển đổi trạng thái.
- Thẻ mẹo: phần tử `label`, ngay sau `input`.

## lớp phong cách

- `.Input`: Kiểu cơ bản, cung cấp cấu trúc hộp đầu vào và hoạt ảnh chuyển tiếp.
- `.Lg`: Kiểu sửa đổi kính mờ/làm nổi bật.