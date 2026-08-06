# Đặc tả mã JS

## phong cách mã hóa

- Đơn giản, thanh lịch và hiệu quả, sử dụng cú pháp js hiện đại nhất
- Phân chia các chức năng quá dài và thiết kế giao diện phải có độ ghép thấp và độ gắn kết cao.
- Sử dụng mảng + vòng lặp/forEach/map nhiều hơn và viết mã ít lặp lại hơn
- Không viết chú thích chức năng bằng mã đơn giản để tránh nhận xét quá mức. Logic phức tạp và các nhu cầu đặc biệt được giải thích bằng tiếng Trung tinh tế.
- Mã lặp lại được trừu tượng hóa thành các hàm để giảm sự dư thừa. Ví dụ: `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` có thể được viết là `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Khai báo biến: Kết hợp nhiều khai báo `const` liên tiếp vào một câu lệnh. Thay vì viết thành ba dòng, hãy viết `const a=1, b=2, c=3;`
- Xử lý không đồng bộ: sử dụng `await`, cấm sử dụng lệnh gọi chuỗi `.then`
- Không tự động tạo mã xử lý ngoại lệ, không tự động viết `try...catch` (`try ... catch` được duy trì thủ công, không nên xóa `try catch` hiện có)
- Hàm thuần túy trước: chỉ viết hàm thuần túy, không bao giờ viết lớp
- Sử dụng các hàm mũi tên `const funcName = () => {}` và không sử dụng từ khóa `function` (ngoại trừ máy phát điện); nếu bạn có thể sử dụng .bind để liên kết các tham số, hãy tránh xác định hàm
- Tái sử dụng mã: Chú ý tái sử dụng, trích xuất thêm các hàm nhỏ, kiên quyết tránh nhiều cấu trúc mã tương tự hoặc sao chép.
- Truy cập đối tượng: Ưu tiên sử dụng phép gán cấu trúc để trích xuất các thuộc tính bắt buộc, tránh sử dụng nhiều lần các dấu chấm bên trong để truy cập các thuộc tính sâu và lồng nhau, đồng thời hợp nhất các phán đoán chuỗi tùy chọn lặp đi lặp lại
- Không sử dụng đối tượng làm tham số hàm, không viết `{a,b,c}`, viết `a, b, c`; nếu có nhiều tham số tùy chọn, hãy sử dụng [[số mục cấu hình, mục cấu hình], [số mục cấu hình, mục cấu hình],..] Trong mô hình này, các mục cấu hình được xác định bằng hằng số
- Để trả về nhiều giá trị, hãy sử dụng mảng `[a,b,c]` thay vì `{a,b,c}`. Nếu có nhiều hơn 3 giá trị trả về, hãy sử dụng hằng số để xác định ý nghĩa vị trí.
- Không cần chuỗi biểu thị trạng thái, sử dụng hằng số để xác định trạng thái
- Không có mẫu chuỗi nào (``) được sử dụng, nối chuỗi (+) được sử dụng, ngoại trừ việc nhập (thuận tiện cho phân tích tĩnh Vite)
- Đối với vòng lặp, nếu bạn cần số sê-ri, hãy sử dụng `++i` thay vì `i++`
- Tránh những`?.` không cần thiết và cấm lập trình phòng thủ
- Tên biến không cần phải ở số nhiều và kết thúc bằng `_li` để biểu thị danh sách.

## Quy ước đặt tên

- Việc đặt tên theo đuổi sự tối giản. Sử dụng tên ngắn nhưng có ý nghĩa, ví dụ: sử dụng `rm` thay vì `remove`, `delete`, `del`. Tuy nhiên, bạn cũng nên tránh đi đến cực đoan, ví dụ: không sử dụng một chữ cái duy nhất `m` thay vì `map`
- Cố gắng chỉ sử dụng động từ khi đặt tên hàm. Nếu có thể dùng một từ để diễn đạt thì đừng dùng hai từ. Danh từ được phản ánh trong tên tập tin. Nếu bạn cần thêm động từ vào tên file, vui lòng đặt danh từ trước và động từ cuối cùng. Ví dụ: `profileSet.js` thay vì `setProfile.js`
- Tên biến: sử dụng kiểu gạch dưới (snake_case), ví dụ `user_auth_token`
- Tên hàm: Sử dụng chữ thường CamelCase (camelCase), ví dụ `userData`
- Tham số hàm: Nếu đó là hàm gọi lại, hãy đặt tên nó bằng chữ hoa lạc đà viết thường, chẳng hạn như `onChange`
- Các định nghĩa hằng số cấp mô-đun sử dụng kiểu gạch chân chữ hoa `UPPER_SNAKE_CASE`
- Không viết `get`, những tiền tố vô nghĩa như: viết `cookieByHeader` thay vì `getCookie`
- Các hằng số cấp độ toàn cầu/mô-đun: sử dụng kiểu gạch chân chữ hoa (UPPER_SNAKE_CASE), ví dụ: `CODE_TO_ID`, `ID_TO_LANG`

## Cơ chế mô-đun

- Nhập: Nhập các chức năng chính xác theo yêu cầu, cấm nhập trực tiếp toàn bộ mô-đun (tránh `import * as x` hoặc nhập các đối tượng lớn)
- Xuất: Vô hiệu hóa xuất các đối tượng. Xuất các hàm và biến dưới dạng đơn vị, chẳng hạn như `export const X=1, abc=()=>{};`. Hãy thử kết hợp chúng với const + dấu phẩy để khai báo nội dung đã xuất. Nếu một tệp chỉ có một chức năng, hãy sử dụng `export default`
- Trừ khi bạn cần gọi nội bộ hàm xuất mặc định, hãy tránh khai báo các hằng số trước rồi xuất chúng ở cuối tệp.
- Độ phân giải đường dẫn: Khi lấy đường dẫn thư mục hiện tại, phải sử dụng `import.meta.dirname`

## sai lầm

- Tránh lỗi chuỗi và sử dụng const để khai báo mã lỗi không đổi.
- Nếu bạn cần trả về thông tin dữ liệu sai, hãy sử dụng [mã lỗi, thông báo lỗi,...] Bằng cách này, thông báo lỗi không phải là mô tả văn bản mà là một giá trị số (chẳng hạn như [FILE_OVERSIZE, file_size, max_size])
-

## Hãy thử sử dụng các API tương thích với trình duyệt

- Mã hóa và giải mã: Buộc sử dụng API Web Crypto gốc
- Dữ liệu nhị phân: Khi xử lý nhị phân, hãy cố gắng sử dụng `Uint8Array` một cách thống nhất