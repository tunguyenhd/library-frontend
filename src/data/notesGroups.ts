// Tự động sinh từ sync_notes.js
export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface NoteTopic {
  topic: string;
  notes: Note[];
}

export interface NoteCourse {
  course: string;
  topics: NoteTopic[];
}

export const notesGroups: NoteCourse[] = [
  {
    "course": "FrontEnd F8 - OffLine",
    "topics": [
      {
        "topic": "CSS",
        "notes": [
          {
            "id": "frontend-f8---offline-css-flex-note-md",
            "title": "Flexbox",
            "content": "# Flex = Flexible box Module\r\n\r\n## Các thuộc tính trong nhóm Flex Container\r\n\r\n-   display: flex | inline-flex => kích hoạt flex\r\n-   flex-direction: Chọn trụ cho flex\r\n\r\n*   row: Nằm ngang\r\n*   row-reverse: Nằm ngang đảo ngược\r\n*   column: Nằm dọc\r\n*   column-reverse: Nằm dọc đảo ngược\r\n\r\n-   justify-content: căn chỉnh các item theo hướng song song với trục chính\r\n\r\n*   flex-start\r\n*   flex-end\r\n*   center\r\n*   space-around\r\n*   space-between\r\n*   space-evenly\r\n\r\n-   align-items: căn chỉnh các item theo hướng vuông góc với trục chính (cross)\r\n\r\n*   stretch => Mặc định, full chiều cao\r\n*   flex-start\r\n*   flex-end\r\n*   center\r\n*   baseline\r\n\r\n-   flex-wrap\r\n\r\n*   no-wrap => Mặc định\r\n*   wrap\r\n*   wrap-reverse\r\n\r\n-   align-content: Căn chỉnh hàng (cột) => Chỉ áp dụng khi có nhiều hàng (cột)\r\n\r\n*   flex-start\r\n*   flex-end\r\n*   center\r\n*   space-around\r\n*   space-between\r\n*   space-evenly\r\n\r\n-   gap: căn chỉnh khoảng cách giữa các item\r\n\r\n## Các thuộc tính trong nhóm Flex Item\r\n\r\n-   flex-grow: Dãn các item để lấp đầy các khoảng trống\r\n-   flex-shrink: tự động co lại các item\r\n-   flex-basis: Thiết lập các kích thước ban đầu cho các item (ko set dc width)\r\n    => flex-basis: sẽ bị chặn bởi min-width, max-width\r\n-   flex: grow shrink basis\r\n-   align-selft: Căn chỉnh 1 item\r\n\r\n*   stretch => Mặc định, full chiều cao\r\n*   flex-start\r\n*   center\r\n*   flex-end\r\n*   baseline\r\n\r\n-   order: Sắp xếp thứ tự các item\r\n    => Nhận số nguyên\r\n"
          }
        ]
      },
      {
        "topic": "JavaScript",
        "notes": [
          {
            "id": "frontend-f8---offline-hocjs-bundler-note-md",
            "title": "Môi trường & Bundler",
            "content": "# Môi trường trong phát triển phần mềm\r\n\r\n1. Dev\r\n\r\n- SERVER_API=http://localhost:3000\r\n\r\n2. Test\r\n\r\n- SERVER_API=https://api.test.fullstack.edu.vn\r\n\r\n3. Production\r\n\r\n- SERVER_API=https://api.fullstack.edu.vn\r\n"
          },
          {
            "id": "frontend-f8---offline-hocjs-fetch-api-note-md",
            "title": "Fetch API & Authentication",
            "content": "Call API:\r\n\r\n-  fetch()\r\n-  axios lib\r\n-  xhr\r\n\r\n-> Phát sinh nhiều vấn đền\r\n\r\n-  Rối, khó bảo trì nâng cấp\r\n-  Cần thêm các tác vụ khác: thêm header, authetication, authorization -> Rối\r\n-  Giả sử: fetch() -> Không được phép sử dụng -> Sửa lại hết từng file\r\n\r\n-> Giải pháp: Tách nghiệp vụ Call API thành 1 hàm riêng\r\n\r\n## Authentication\r\n\r\n-  Cho biết bạn là ai ?\r\n-  Đăng nhập\r\n\r\nLuồng Request: Đăng nhập => Server Verify => Khởi tạo mã số (sessionId, Token) => Trả về Client\r\n\r\n## Authorization\r\n\r\n-  Ủy quyền\r\n-  Cho phép được làm gì? Không được làm gì?\r\n-  Server: Kiểm tra mã số (sessionId, token) hợp lệ hay không?\r\n\r\n*  Không hợp lệ -> Trả về thông báo lỗi (401)\r\n*  Hợp lệ -> Xử lý nghiệp vụ tiếp theo\r\n\r\nVí dụ:\r\n\r\n-  Đăng nhập -> Authetication\r\n-  Sửa thông tin tài khoản -> Authorization\r\n\r\n## Các hình thức Authetication\r\n\r\n1. Session-Based (Cookie-Based) Authenication\r\n\r\n-  Ưu điểm:\r\n\r\n*  Dễ triển khai\r\n*  Các fraemwork, thư viện, cms từ trước đa số theo cơ chế này\r\n\r\n-  Nhược điểm:\r\n\r\n*  Không scale được\r\n*  Không áp dụng cho các ứng dụng đa nền tảng\r\n\r\nVí dụ: 1 dự án có nhiều server (microservices)\r\n\r\nRequest => LB =>\r\n\r\n-  Server 1 -> Login lưu session vào server này\r\n-  Server 2 -> Không có session -> Bắt đăng nhập lại\r\n-  Server 3\r\n\r\n2. Token-Based Authetication\r\n"
          }
        ]
      },
      {
        "topic": "Next.js",
        "notes": [
          {
            "id": "frontend-f8---offline-hocnextjs-next01-note-md",
            "title": "NextJS Flow & Middleware",
            "content": "# flow NextJS\r\n\r\nRequest -> RootLayout -> Custom Layout -> Page -> Render JSX -> Response (HTML)\r\n\r\nLayout: Tạo ra 1 bố cục cho trang web, đại diện cho nhiều router khác nhau\r\nPage: Nội dung chính của trang, chỉ duy nhất 1 router\r\n\r\n# Middleware\r\n\r\nRequest -> Middleware -> RootLayout -> Custom Layout -> Page -> Render JSX -> Response (HTML)\r\n"
          },
          {
            "id": "frontend-f8---offline-hocnextjs-next03-note-md",
            "title": "Router Handler",
            "content": "# Router Handler\r\n\r\nRequest --> Layout --> Page --> Call API (Server khác)\r\n\r\nCustom API --> Router Handler\r\nHost API --> Router Handler\r\n\r\nEndpoint: GET /api/users\r\n"
          }
        ]
      },
      {
        "topic": "React",
        "notes": [
          {
            "id": "frontend-f8---offline-hocreact-react07-note-md",
            "title": "Redux",
            "content": "# Redux là gì?\r\n\r\n-  Thư viện để quản lý Global State trong các ứng dụng JS\r\n-  Có thể tích hợp vào tất các ứng dụng JS: VanillaJS (JS thuần), React, React Native, Vuejs, NextJS,...\r\n\r\n# Các thành phần của Redux\r\n\r\n-  Store: Kho lưu trữ các state\r\n-  Reducer: Hàm reducer để viết các logic update state\r\n-  Dispatch: Gửi action từ component lên Reducer\r\n-  Action: Object đặc tả hành động: thêm, sửa, xóa\r\n-  Subscibe: Lắng nghe sự thay đổi State trên Store (tìm hiểu observer pattern)\r\n\r\n# Học Redux cần học những gì?\r\n\r\n-  Redux Core: Tự Setup redux vào dự án theo cách thủ công --> Hiểu cách hoạt động của Redux\r\n\r\n-  Redux Toolkit: Bộ đóng gói của thư viện Redux giúp Setup nhanh, code ít hơn,...\r\n-  Redux Middleware: Redux Thunk\r\n\r\n# Redux Middleware\r\n\r\nComponent --> Dispatch tới Middleware --> Dispatch tới Reducer --> Update Sate\r\n"
          },
          {
            "id": "frontend-f8---offline-hocreact-redux-npm-md",
            "title": "Redux Packages",
            "content": "# Redux thunk\r\n\r\nhttps://www.npmjs.com/package/redux-thunk\r\n\r\n# Redux-devtool\r\n\r\nhttps://www.npmjs.com/package/@redux-devtools/extension\r\n\r\n# cách cài\r\n\r\nnpm i redux react-redux\r\n"
          }
        ]
      },
      {
        "topic": "SCSS",
        "notes": [
          {
            "id": "frontend-f8---offline-hocscss-note-md",
            "title": "SCSS Compiler",
            "content": "# Ngôn ngữ tiền xử lý scss\r\n\r\n## Cài đặt trình biên dịch\r\n\r\n1. Cài đặt NodeJS\r\n\r\n2. Cài đặt SASS\r\n\r\nnpm i sass -g\r\n\r\n## Câu lệnh biên dịch SCSS sang CSS\r\n\r\n1. Biên dịch cả folder scss sang css\r\n\r\nsass folder_scss:foldercss\r\n\r\nWatch mode\r\n\r\nsass folder_scss:folder --watch\r\n\r\n2. Biên dịch 1 file scss sang 1 file css\r\n\r\nsass duong-dan-file-scss duong-dan-file-css\r\nvd: sass scss/ex01.scss build/style.css\r\n\r\n3. Nén file CSS từ file SCSS\r\n   => Tạo ra file .min (minify)\r\n\r\nsass duong-dan-file-scss duong-dan-file --style compressed\r\nvd: sass scss/ex01.scss build/style.min.css --style compressed\r\n"
          }
        ]
      },
      {
        "topic": "HTML",
        "notes": [
          {
            "id": "frontend-f8---offline-html-inline-absolute-path-vs-relative-path-md",
            "title": "Đường dẫn tuyệt đối & tương đối",
            "content": "# absolute path (đường dẫn tuyệt đối)\r\n\r\n/duong-dan\r\n\r\n# relative path (đường dẫn tương đối)\r\n\r\nduong-dan\r\n./duong-dan\r\n../duong-dan\r\n"
          }
        ]
      }
    ]
  },
  {
    "course": "fullstack_nodejs_08",
    "topics": [
      {
        "topic": "Database",
        "notes": [
          {
            "id": "fullstack-nodejs-08-database-note-md",
            "title": "Ngôn ngữ SQL",
            "content": "# Ngôn ngữ truy vấn SQL\r\n\r\n## Kiểu dữ liệu\r\n\r\n1. Number\r\n\r\n- integer\r\n- bigint\r\n- double\r\n- smallint\r\n\r\n2. String\r\n\r\n- charactor varying (varchar)\r\n- charactor (char)\r\n- text\r\n\r\n3. DateTime\r\n\r\n- date\r\n- timestamp\r\n- time\r\n\r\n4. Logic\r\n\r\n- boolean\r\n\r\n## Toán tử\r\n\r\n```\r\n>, <, >=, <=, =, !=, <>, IS, LIKE, ILIKE, IN, BETWEEN, EXISTS\r\n```\r\n\r\n```\r\nAND, OR, NOT\r\n```\r\n\r\nLưu ý: Giá trị null phải so sánh bằng toán tử IS\r\n\r\nVí dụ: updated_at IS NOT NULL\r\n\r\n## Mô hình quan hệ\r\n"
          }
        ]
      },
      {
        "topic": "CSS",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hoccss-responsive-note-md",
            "title": "Responsive Design",
            "content": "# Responsive\r\n\r\n- Thiết kế web đáp ứng trên mọi thiết bị\r\n- Dựa theo kích thước màn hình để thay đổi giao diện\r\n- Sử dụng css thông qua at-rule @media (Media Queries)\r\n\r\n## Breakpoint\r\n\r\n- Điểm dừng tọa độ mà tại đó giao diện được thay đổi\r\n- Không có breakpoint cố định cho mọi dự án\r\n- Chỉ có các breakpoint phổ biến\r\n\r\nVí dụ:\r\n\r\n- 576px\r\n- 768px\r\n- 992px\r\n- 1200px\r\n- 1400px\r\n\r\n## Meta viewport\r\n\r\n- Đảm bảo tỷ lệ của khung nhìn khi chuyển sang thiết bị kích thước khác\r\n- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />s\r\n\r\n## Media Queries\r\n\r\n```css\r\n@media all|screen|print and (min-width: giatri) and (max-width: giatri) {\r\n    Selector {\r\n        code css\r\n    }\r\n}\r\n```\r\n\r\n## Trường phái Responsive\r\n\r\n1. Desktop First: Đi từ màn hình lớn nhất\r\n\r\n```\r\n<= 1399.98px\r\n<= 1199.98px\r\n<= 991.98px\r\n<= 767.98px\r\n<= 575.988x\r\n```\r\n\r\n2. Mobile First: Đi từ màn hình nhỏ nhất\r\n\r\n```\r\n>= 576px\r\n>= 768px\r\n>= 992px\r\n>= 1200px\r\n>= 1400px\r\n```\r\n"
          }
        ]
      },
      {
        "topic": "JavaScript",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocjs-auth-note-md",
            "title": "Authentication & Authorization",
            "content": "# Authentication - Authorization\r\n\r\n- Authentication: Đăng nhập => Trả về thông tin\r\n- Authorization: Kiểm tra quyền hạn => Trả về thông tin\r\n\r\n# Xây dựng class/object httpclient để xử lý http request tập trung\r\n\r\n- Xử lý refresh token\r\n- Quản lý các request tốt hơn\r\n"
          },
          {
            "id": "fullstack-nodejs-08-hocjs-package-note-md",
            "title": "NPM Package Manager",
            "content": "# Package\r\n\r\n- Cài đặt thủ công\r\n- Cập nhật thủ công\r\n- Gỡ bỏ thủ công (Quên gỡ thư viện nếu không dùng)\r\n- Di chuyển ==> Nặng\r\n- Xung đột thư viện\r\n\r\n==> Giải pháp: Công cụ quản lý thư viện\r\n\r\n- Thao tác thông qua giao diện dòng lệnh (CLI = Commandline Interface)\r\n- Thư viện sẽ được lưu trữ trên store\r\n\r\n## Các công cụ\r\n\r\n- Node Package Manager (NPM)\r\n- Yarn\r\n\r\nLưu ý: Khi cài thư viện ==> Sinh ra folder node_modules\r\n\r\n## Khởi tạo dự án\r\n\r\nnpm init -y ==> Tạo ra file package.json\r\n\r\n## Cài đặt tất cả Dependencies\r\n\r\nnpm i hoặc npm install\r\n\r\n## Cài đặt 1 package\r\n\r\nnpm i ten_package hoặc npm install ten_package\r\n\r\n## Cài đặt nhiều package\r\n\r\nnpm i package1 package2 package3\r\n\r\n## Gỡ bỏ Dependencies\r\n\r\nnpm uninstall ten_package\r\n\r\n## Các loại dependencies\r\n\r\n- Simple Dependency ==> npm i ten_package\r\n- Dev Dependency ==> npm i ten_package --save-dev\r\n\r\n## Chỉ cần cài đặt Dependencies phụ vụ production\r\n\r\nnpm i --product\r\n\r\n## Các loại cài đặt package\r\n\r\n- Local: npm i ten_package\r\n- Global: npm i ten_package -g\r\n\r\nnpm root -g ==> Kiểm tra đường dẫn chứa các dependencies global\r\n\r\nnpm list -g ==> Liệt kê các dependencies được cài đặt global\r\n\r\n## Phiên bản\r\n\r\nmajor.minor.patch\r\n\r\nKhi chạy lệnh update của npm ==> Chỉ update minor và patch\r\n\r\n## Cập nhật phiên bản\r\n\r\nnpm update ten_package\r\n\r\nnpm update ==> Cập nhật tất cả package\r\n\r\n## Cài đặt Dependency theo phiên bản\r\n\r\nnpm i ten_package@phienban hoặc npm install ten_package@phienban\r\n"
          },
          {
            "id": "fullstack-nodejs-08-hocjs-regex-note-md",
            "title": "Regular Expression (Regex)",
            "content": "# Regular Expression (Regex)\r\n\r\n- Biểu thức chính quy\r\n- Biểu thức để xử lý chuỗi nâng cao\r\n\r\n* So khớp\r\n* Cắt chuỗi\r\n* Thay thế\r\n\r\nKhi làm việc với Regex, xây dựng lên 1 pattern\r\n\r\nCấu tạo pattern\r\n/regex/modifier\r\n\r\nWebsite test Regex: https://regex101.com\r\n\r\n## Các ký hiệu cơ bản\r\n\r\nstring ==> So khớp chuỗi string trong biểu có nằm trong chuỗi cần kiểm tra không?\r\n\r\n^ (Đặt ở đầu biểu thức, sau dấu phân cách /) ==> Kiểm tra biểu thức nằm ở đầu chuỗi\r\n\r\n$ (Đặt ở cuối biểu thức, trước dấu phân cách /) ==> Kiểm tra biểu thức nằm ở cuối chuỗi\r\n\r\n[min-max] ==> Kiểm tra các ký tự từ min đến max (A-Z, a-z, 0-9)\r\n\r\n[char_list] ==> Kiểm tra các ký tự ([abc])\r\n\r\nLưu ý:\r\n\r\n- Các biểu thức trong cặp [], kết hợp với nhau theo điều kiện OR\r\n- Nếu các biểu thức không nằm trong cùng cặp ngoặc [] ==> Kết hợp với nhau theo điều kiện AND và phải đúng thứ tự\r\n\r\n- {min,} ==> Độ dài của biểu thức lớn hơn hoặc bằng min\r\n\r\n- {value} ==> Độ dài của biểu thức bằng value\r\n\r\n- {min, max} ==> Độ dài của biểu thức từ min đến max\r\n\r\nKý hiệu viết tắt độ dài\r\n\r\n```\r\n+ ==> Tương ứng với {1,}\r\n* ==> Tương ứng với {0,}\r\n? ==> Tương ứng với {0,1}\r\n```\r\n\r\nHoặc (|) - Phủ định (^)\r\n\r\nKý hiệu đại diện cho tất cả ký tự: .\r\n\r\nCác ký hiệu viết tắt\r\n\r\n```\r\n\\w: Thường, hoa, số, _\r\n\\W: Ngược lại của \\w\r\n\\d: Số\r\n\\D: Ngược lại của số\r\n\\s: Khoảng trắng\r\n\\S: Ngược lại của \\s\r\n```\r\n"
          }
        ]
      },
      {
        "topic": "NestJS",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocnestjs-nestjs02-note-md",
            "title": "Auth & Permission System",
            "content": "# Logic xác thực\r\n\r\n## Authentication\r\n\r\n- Lấy body: email, password\r\n- Tìm email có tồn tại trong bảng users không? --> Không tồn tại thông báo lỗi\r\n- Lấy password hash từ database\r\n- Verify password hash với password từ body --> Failed --> Thông báo lỗi\r\n- Lưu user_id hoặc email vào JWT (Dùng thư viện jsonwebtoken)\r\n- Trả về response token tương ứng\r\n  `\r\n\r\n## Authorization\r\n\r\n- Gửi request header: Authorization: Bearer token-can-gui\r\n- Server đọc header Authorization và cắt ra token\r\n- Kiểm tra token có nằm trong blacklist không? (Database, Redis)\r\n- Verify token (Dùng thư viện jsonwebtoken) --> Trả về được thông tin trong token (user_id hoặc email)\r\n- Dùng dữ liệu từ token để lấy thông tin trong database\r\n- Trả về response\r\n\r\n## Logout\r\n\r\n- Gửi request chứa token lên server\r\n- Verify token\r\n- Thêm token vào blacklist\r\n- Trả về response\r\n\r\n## Permission System\r\n\r\nNHÓM 1: Thiết lập quyền\r\n\r\n### Roles\r\n\r\nGET /roles --> Lấy danh sách roles\r\n\r\nPOST /roles --> Thêm role mới\r\nOptions: Thêm permission vào role, nếu permission không tồn tại tự động tạo permission mới\r\n\r\nPATCH /roles/{id} --> Sửa role\r\nOptions: Cập nhật lại dữ liệu bảng trung gian roles_permissions\r\n\r\nDELETE /roles/{id} --> Xóa role (Xóa dữ liệu cả bảng trung gian)\r\n\r\nPOST /roles/{id}/copy --> Copy role cũ sang role mới (Lưu ở bản nháp)\r\n\r\n### Users\r\n\r\nGET /users/{userId}/roles --> Danh sách roles theo userId\r\n\r\nPUT /users/{userId}/roles --> Cập nhật role cho 1 user\r\n\r\nDELETE /users/{userId}/roles --> Xóa tất cả roles của 1 user\r\n\r\nPUT /users/{userId}/permissions --> Thiết lập quyền riêng cho 1 user\r\n\r\nDELETE /users/{userId}/permissions --> Xóa hết quyền riêng của 1 user\r\n\r\nNHÓM 2: Kiểm tra quyền\r\n\r\n### Lấy tất cả permission của 1 user\r\n\r\n- Lấy permission của role được gán vào user\r\n- Lấy permission được gán vào trực tiếp vào user\r\n  ==> Lọc trùng\r\n\r\n## Vấn đề root khi phân quyền\r\n\r\n- Danh sách user --> Tạo 1 tài khoản root (Không xóa được)\r\n- Tạo role \"Super Admin\" --> Không thay đổi được\r\n\r\n## Tìm hiểu trước\r\n\r\n- Queue trong Back-End\r\n- Task Scheduler\r\n- Cronjob (Linux)\r\n- Concurrency\r\n"
          }
        ]
      },
      {
        "topic": "Next.js",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocnextjs-nextjs01-note-md",
            "title": "NextJS Router",
            "content": "# Luồng chạy\r\n\r\nRequest => Middleware ==> Root Layout ==> Custom Layout (Nếu có) ==> Page ==> Response\r\n\r\n# Cơ chế Router\r\n\r\napp/ten-folder-1/page.jsx ==> Đường dẫn: /ten-folder-1\r\n\r\nXây dựng đường dẫn sau\r\n\r\n/posts\r\n/posts/id\r\n\r\nChỉ được dùng 1 file page.jsx\r\n"
          }
        ]
      },
      {
        "topic": "Node.js",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocnodejs-note-md",
            "title": "Node.js Cơ bản",
            "content": "Request => Server => Response\r\n\r\nscheme\r\nhostname\r\nport\r\n"
          }
        ]
      },
      {
        "topic": "React",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocreactjs-reactjs04-note-md",
            "title": "Redux & Redux Toolkit",
            "content": "# Redux\r\n\r\n- Thư viện quản lý Global State trong các ứng dụng Javascript\r\n- Redux không phải của ReactJS\r\n\r\n## Các thành phần của Redux\r\n\r\n- Store: Kho lưu trữ State\r\n- Reducer: Hàm để quản lý việc cập nhật state\r\n- Action: Object mô tả hành động cập nhật state\r\n- Dispatch: Hàm gửi action lên Reducer\r\n- Subscribe: Lắng nghe sự thay đổi của State trên store\r\n\r\n## Làm sao để tích hợp Redux vào React\r\n\r\nSử dụng thư viện React-Redux\r\n\r\n- Có sẵn Component Provider\r\n- Có sẵn Hook cần thiết\r\n\r\n* useDispatch\r\n* useSelector\r\n\r\n- Tự động re-render khi state trên store thay đổi\r\n\r\n## Lộ trình học Redux\r\n\r\n- Redux Core + Kết hợp với React\r\n- Redux Toolkit + Kết hợp với React\r\n- Redux Middleware: Thunk, Saga\r\n\r\n## Redux Toolkit\r\n\r\nGom các thành phần của 1 module vào 1 slice\r\n\r\n- reducer\r\n- state\r\n- action\r\n- action creator\r\n\r\nTích hợp sẵn redux-thunk\r\n\r\nTích hợp sẵn với Redux Devtool\r\n"
          }
        ]
      },
      {
        "topic": "SCSS",
        "notes": [
          {
            "id": "fullstack-nodejs-08-hocscss-note-md",
            "title": "Sass Compiler",
            "content": "# Sass\r\n\r\n## Biên dịch từ file SCSS => CSS\r\n\r\nsass duong-dan-file-scss duong-dan-file-css --watch\r\n\r\n## Biên dịch folder SCSS => CSS\r\n\r\nsass duong-dan-folder-scss:duong-dan-folder-css --watch\r\n\r\n## Nén file SCSS => CSS\r\n\r\nTạo minify css\r\n\r\nsass duong-dan-file-scss duong-dan-file-css --style compressed\r\n"
          }
        ]
      },
      {
        "topic": "HTML & CSS Cơ bản",
        "notes": [
          {
            "id": "fullstack-nodejs-08-note-md",
            "title": "Block/Inline, Đường dẫn & CSS Priority",
            "content": "# Thẻ Block (Khối)\r\n\r\n- Luôn phát sinh ở hàng mới\r\n- Chiều rộng mặc định bằng 100% so với thành phần cha\r\n\r\n# Thẻ Inline (Trên dòng)\r\n\r\n- Chiều rộng mặc định bằng với nội dung của thẻ\r\n- Các thẻ inline đứng cạnh nhau nằm trên 1 dòng (Trừ phi tổng chiều rộng các inline > chiều rộng thành phần cha)\r\n\r\n# Đường dẫn tuyệt đối, tương đối\r\n\r\n1. Thế nào là đường dẫn tuyệt đối? Tương đối?\r\n\r\n2. Phân biệt các loại đường dẫn sau\r\n\r\n./duong-dan --> Phụ thuộc vào thư mục đang đứng\r\nduong-dan --> Phụ thuộc vào thư mục đang đứng\r\n../duong-dan --> Đẩy ra ngoài 1 cấp (Vẫn phụ thuộc)\r\n../../duong-dan --> Đẩy ra ngoài 2 cấp (Vẫn phụ thuộc)\r\n/duong-dan --> Tuyệt đối (Di chuyển về gốc của tên miền, sau port)\r\n//tenmien.com/duong-dan\r\nhttps://tenmien.com/duong-dan\r\n\r\nTrang chủ: http://127.0.0.1:5500\r\n\r\nĐộ ưu tiên trong CSS\r\n\r\n0. important\r\n1. inline\r\n2. id\r\n3. class\r\n4. tag\r\n\r\nLưu ý:\r\n\r\n- Selector càng chi tiết --> Ưu tiên càng cao\r\n- Code ở bên dưới ưu tiên cao hơn\r\n"
          }
        ]
      },
      {
        "topic": "DevOps",
        "notes": [
          {
            "id": "fullstack-nodejs-08-front-end-project-note-md",
            "title": "Môi trường & Deploy",
            "content": "Development\r\n==> Server Api: http://localhost:4000\r\nTest\r\n==> Server Api: http://test.fullstack.edu.vn\r\nProduction\r\n==> Server Api: http://api.fullstack.edu.vn\r\n\r\nQuy trình khi làm việc với Server\r\n\r\nLocal: Source code + .env\r\n\r\nServer: Source code + .env ==> Build Production\r\n"
          }
        ]
      }
    ]
  }
];
