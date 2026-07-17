# fetch.js

Chức năng công cụ yêu cầu mạng dựa trên đóng gói tìm nạp

## F(url, opt)

Gửi yêu cầu mạng và trả về đối tượng phản hồi

tham số:
- `url` : Địa chỉ yêu cầu
- `opt` : `fetch` đối tượng tùy chọn

Giá trị trả về: Đối tượng phản hồi

## f(attr)

Hàm bậc cao hơn bao bọc một yêu cầu và phân tích nội dung được trả về theo định dạng được chỉ định

tham số:
- `attr` : tên thuộc tính phân tích cú pháp nội dung phản hồi

Giá trị trả về: hàm yêu cầu và phân tích nội dung không đồng bộ
  - tham số
    - `url` : Địa chỉ yêu cầu
    - `opt` : `fetch` đối tượng tùy chọn
  - Giá trị trả về: nội dung được phân tích cú pháp

## fTxt

Gửi yêu cầu mạng và trả lại nội dung phản hồi ở định dạng văn bản

tham số:
- `url` : Địa chỉ yêu cầu
- `opt` : `fetch` đối tượng tùy chọn

Giá trị trả về: văn bản phản hồi

## fJson(url, opt)

Gửi yêu cầu mạng và phân tích cú pháp cũng như trả về nội dung phản hồi ở định dạng JSON

tham số:
- `url` : Địa chỉ yêu cầu
- `opt` : `fetch` đối tượng tùy chọn

Giá trị trả về: đối tượng JSON được phân tích cú pháp

## fBin(url, opt)

Gửi yêu cầu mạng và trả về nội dung phản hồi dưới dạng mảng byte nhị phân

tham số:
- `url` : Địa chỉ yêu cầu
- `opt` : `fetch` đối tượng tùy chọn

Giá trị trả về: mảng byte