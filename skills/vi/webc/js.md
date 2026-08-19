`src/js` Các tập lệnh js thường được sử dụng như sau

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` là tên viết tắt của `document`
  - `newEl` tạo phần tử `dom`. Nếu bạn muốn tạo nhiều phần tử, hãy sử dụng `newLi` để tạo chúng theo đợt
- `import { cE } from "../js/dom.js"` Tạo phần tử tùy chỉnh bắt đầu bằng `c-`
- `import { On } from "../js/On.js"` Được sử dụng để triển khai liên kết và hủy liên kết sự kiện
- `import { fTxt } from "../js/fetch.js"` Nhận văn bản