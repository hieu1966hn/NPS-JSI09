- Mô hình MVC
- Cách setup file/folder dự án phù hợp với mô hình MVC
- Kết nối MVC trong dự án như thế nào
- Thực hành viết component với JS

Client side rendering (CSR): là phương pháp render trang web mới: Gánh nặng về biên dịch nội dung, sinh ra HTML được chuyển về phía trình duyệt người dùng => Trình duyệt người dùng sẽ render JS ra HTML và hiển thị lên trình duyệt (Lần đầu tiên mở trang web thi thoảng lag và chậm hơn SSR, nhưng những lần sau thì rất nhanh).

Server side rendering (SSR): Người dùng gửi 1 yêu cầu tới website (browser)
=> Phía server kiểm tra và chuẩn bị nội dung HTML
=> Biên dịch HTML => gửi tới trình duyệt người dùng
=> Người dùng chỉ cần xem
=> Trình duyệt tải về JS và tiến hành thực thi js => web có tính năng

=> Nó là gì? có gì khác nhau?

===> Xây dựng trang web CSR:

- Mô hình MVC là gì?: Model - View - Controller

* Sử dụng trong Kỹ thuật phần mềm => tạo lập giao diện người dùng trên máy tính
* MVC chia thành 3 phần kết nối với nhau
* Model: Quản lý và xử lý dữ liệu
* View: Giao diện - hiển thị nội dung + dữ liệu trên website
* Controller: Giúp tương tác giữa Model + View ...
  ==> Thường được dùng để phát triển giao diện: máy tính, điện thoại, web,
  ...

- Luồng xử lý trong MVC:

1. Client request Server => Controller chặn lại => để kiểm tra nó là dạng gì
2. Controller kết nối tới model
3. Model chuẩn bị data => gửi về Controller
4. Controller => gửi về view và hiển thị cho người dùng trên trình duyệt

Tạo sao cần MVC:

- Tách biệt các phần với nhau:
- Tối ưu trên nhiều nền tảng ngôn ngữ khác nhau

Buổi 5:

1. Code giao diện trang đăng ký/đăng nhập

Buổi 6:

1. Xây dựng thuật toán xử lý lỗi tại client ()
2. Giới thiệu về nền tảng firebase và xây dựng tính năng xác thực người dùng
