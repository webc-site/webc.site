# WebC.site

## Cái gì thế này?

### Đây là thư viện thành phần web gốc

Được phát triển dựa trên [các thành phần web](https://developer.mozilla.org/docs/Web/API/Web_components), nó độc lập với thời gian chạy và phù hợp với mọi khung.

Cực kỳ tối ưu hóa về kích thước (1/10 kích thước của các thư viện phổ biến tương tự).

Hỗ trợ 75 ngôn ngữ. Bạn có thể nhập trực tiếp js và css để sử dụng trực tuyến hoặc thêm các thành phần vào dự án của mình nếu cần để phát triển thứ cấp.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Đây là khung phát triển thư viện thành phần

Đây là phiên bản blog tĩnh của [sách truyện](https://storybook.js.org).

Xây dựng thư viện thành phần có thể nâng cao hiệu quả phát triển nội bộ của công ty và xây dựng hình ảnh thương hiệu trong giới kỹ thuật.

Dựa trên [webc.site](https://github.com/webc-site/webc.site), các nhóm có thể dễ dàng tạo thư viện thành phần của riêng mình và xuất bản chúng lên [trang github](https://pages.github.com), [trang cloudflare](https://pages.cloudflare.com), v.v. Các thành phần đã xuất bản có thể được gỡ lỗi trực tuyến trên [codepen.io](https://codepen.io) và [jsfiddle](https://jsfiddle.net).

Đồng thời, khung dịch thuật tích hợp có thể nhanh chóng thực hiện việc quốc tế hóa các thành phần và tài liệu, để đối tượng sản phẩm của bạn không còn bị ràng buộc bởi ngôn ngữ.

### Đây là mô hình phát triển front-end mới cho kỷ nguyên trí tuệ nhân tạo

Khung này được tích hợp sẵn `.agents/skills`, cho phép trí tuệ nhân tạo giúp bạn phát triển các thành phần mới chỉ bằng một cú nhấp chuột theo các phương pháp hay nhất.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Hãy để mã giao diện người dùng thay đổi từ một núi rác lập trình không khí không bền vững thành một phần tiêu chuẩn có thể được duy trì và phát triển lặp đi lặp lại trong thời gian dài.

Do đặc điểm của sự phát triển được hỗ trợ bởi trí tuệ nhân tạo, chúng tôi đã đề xuất và thiết kế một mô hình phát triển front-end mới:

1. **Mọi thứ đều là thành phần web**
2. **Thành phần này phải độc lập với liên kết dữ liệu phía sau và giao diện dữ liệu được hiển thị dưới dạng chức năng gọi lại**

Bằng cách này, trí tuệ nhân tạo có thể tạo ra dữ liệu giả và hiển thị các trạng thái khác nhau của các thành phần trên trang demo.

Tách biệt phát triển thành phần và giao diện dữ liệu, kết hợp với [khung thành phần webc.site](https://github.com/webc-site/webc.site) Một tính năng chính khác:

**Mỗi thành phần có thể khởi động máy chủ phát triển một cách độc lập và phát triển cũng như gỡ lỗi trên trang demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Điều này làm giảm liên kết giao diện người dùng để phát triển và gỡ lỗi từng thành phần thành `0`.

Bằng cách này, các công cụ phát triển được hỗ trợ bởi trí tuệ nhân tạo ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google AntiGravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands), v.v.), bạn có thể tận hưởng quá trình phát triển hoàn toàn tự động, mở gỡ lỗi trình duyệt và không còn bị chặn bởi nhiều yếu tố lộn xộn khác nhau (dữ liệu phụ trợ, trạng thái đăng nhập, định tuyến đường dẫn, v.v.).

Nếu bạn muốn kiểm soát trí tuệ nhân tạo, giảm chi phí và tăng hiệu quả, bạn cần một mô hình mới giúp giảm thiểu môi trường phát triển và gỡ lỗi của từng thành phần.

---

# Tôi vẫn chưa bắt đầu viết TODO

### Thư viện thành phần web

#### Tối ưu hóa kích thước cuối cùng

Ví dụ: đối với thành phần thanh cuộn ảo, hãy so sánh kích thước của tập lệnh [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) phổ biến và kiểu sau `gz`, như được hiển thị trong bảng sau:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Thành phần thanh cuộn ảo của `webc.site` chỉ là `10%` của `OverlayScrollbars`.

#### Thời gian chạy độc lập

Được xây dựng dựa trên các tiêu chuẩn [Thành phần Web](https://developer.mozilla.org/docs/Web/API/Web_components), thư viện thành phần webc.site đương nhiên không phụ thuộc vào thời gian chạy. Cho dù bạn đang sử dụng React, Vue, Angular, Svelte hay dự án HTML/JS thuần túy truyền thống, tất cả các thành phần đều có thể chạy trực tiếp trong trình duyệt như thẻ HTML gốc mà không cần đóng gói thứ cấp cho một khung cụ thể.

##### So sánh với shadcn

[shadcn/ui](https://ui.shadcn.com) áp dụng chế độ phân phối mã, yêu cầu bạn sao chép mã thành phần trực tiếp vào dự án của riêng bạn. Nó được liên kết chặt chẽ với hệ sinh thái React và các chuỗi công cụ xây dựng cụ thể (chẳng hạn như Tailwind CSS) và không thể sử dụng trên nhiều khung. Nó cũng có những yêu cầu nhất định đối với cấu hình kỹ thuật dự án.

Và thành phần của `webc.site`:
- **Phổ quát đa khung**: Viết một lần và có thể được giới thiệu và chạy trực tiếp trong bất kỳ khung giao diện người dùng nào (ngay cả môi trường không có khung).
- **Không phụ thuộc vào môi trường**: Không yêu cầu công cụ đóng gói cụ thể hoặc bộ tiền xử lý CSS, chỉ cần nhập các tệp tĩnh đã biên dịch và có thể sử dụng ngay.

## Tự động phát triển và gỡ lỗi

### Phát triển và gỡ lỗi cục bộ

Mỗi thành phần trang web hỗ trợ khởi động máy chủ phát triển một cách độc lập, cung cấp môi trường gỡ lỗi và phát triển tối thiểu:

- **Tạo thành phần mới**: Chạy `./sh/new.js [css|js] [tên thành phần]` để nhanh chóng tạo khung phát triển thành phần (bao gồm trang demo và cấu hình quốc tế hóa).
- **Gỡ lỗi độc lập**: Chạy `./dev.js [tên thành phần]` (hoặc chạy trực tiếp `./dev.js`) để khởi động máy chủ phát triển Vite và tự động mở trang demo của thành phần trong trình duyệt. Hỗ trợ cập nhật nóng thành phần (HMR). Do các liên kết phát triển và dữ liệu được tách rời nên không có liên kết front-end phát triển nào, rất phù hợp với AI (như Claude Code, Google AntiGravity, v.v.) để hỗ trợ phát triển và gỡ lỗi trình duyệt hoàn toàn tự động.

### Xuất bản thư viện thành phần

#### webc dist

Quá trình đóng gói và xuất bản được tự động hóa cao:
- **Đóng gói tài nguyên tĩnh**: Chạy `./sh/dist.js` (nghĩa là thực thi tác vụ `webc dist`) có thể tự động quét tất cả các thành phần trang web trong `src/`, biên dịch, nén và xuất chúng vào thư mục `dist/`. Thư mục này chứa các tệp JS/CSS để phân phối sản xuất, một trang web demo sẵn sàng để triển khai lên Trang GitHub hoặc Trang Cloudflare và các tệp định tuyến `_redirects` và `404.html` được tạo tự động.
- **Xuất bản NPM**: Chạy `./sh/npmDist.js`, tập lệnh sẽ tự động xử lý các phần phụ thuộc của thành phần, tăng số phiên bản gói và thực thi `npm publish` chỉ bằng một cú nhấp chuột sau khi đóng gói hoàn tất để xuất bản thư viện thành phần lên NPM.

### Nền tảng chịu trách nhiệm dịch thuật

Khung này có các quy trình dịch tự động tích hợp:
1. Định cấu hình quy tắc dịch (chẳng hạn như ngôn ngữ nguồn, ngôn ngữ đích và thư mục cần dịch) trong `tran.yml` trong thư mục gốc của dự án.
2. Sử dụng phần giữ chỗ trong các thành phần hoặc tài liệu mà không cần phải mã hóa cứng nhiều ngôn ngữ trong mã của bạn.
3. Chạy `./sh/tran.js` và công cụ dịch sẽ tự động trích xuất văn bản và gọi dịch vụ dịch WebC để xử lý, tự động tạo các mục dịch YAML và tài liệu README bằng nhiều ngôn ngữ khác nhau.

### biến môi trường

Khi thực hiện dịch tự động, bạn cần định cấu hình các biến môi trường sau để cấp quyền truy cập vào API dịch:

- **`WEBC_SITE_TOKEN`** (hoặc **`webc.site` API dịch tự động. Có thể được chèn dưới dạng biến môi trường hoặc được viết `token` trong tệp cấu hình `~/.config/webc.site.yml` trong thư mục chính của người dùng cục bộ.