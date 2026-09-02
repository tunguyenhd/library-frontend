import type { KnowledgeGroup } from "../types/knowledge";

export const htmlGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "Cấu trúc HTML cơ bản",
    "cards": [
      {
        "id": "doctype",
        "title": "DOCTYPE",
        "description": "DOCTYPE dùng để khai báo cho trình duyệt biết tài liệu hiện tại đang sử dụng phiên bản HTML nào. Với HTML5, cú pháp DOCTYPE rất ngắn gọn và luôn được đặt ở dòng đầu tiên của file HTML.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<!DOCTYPE html>"
          },
          {
            "title": "Ví dụ",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n<head>\r\n  <title>Trang HTML đầu tiên</title>\r\n</head>\r\n<body>\r\n  <h1>Xin chào HTML</h1>\r\n</body>\r\n</html>"
          }
        ]
      },
      {
        "id": "html",
        "title": "Thẻ html",
        "description": "Thẻ html là thẻ gốc của toàn bộ tài liệu HTML. Tất cả nội dung của trang web đều nằm bên trong thẻ này. Bên trong thẻ html thường có hai phần chính là head và body.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<html lang=\"vi\">\r\n  ...\r\n</html>"
          },
          {
            "title": "Ví dụ",
            "code": "<html lang=\"vi\">\r\n  <head>\r\n    <title>Code Knowledge</title>\r\n  </head>\r\n\r\n  <body>\r\n    <h1>Học HTML</h1>\r\n  </body>\r\n</html>"
          }
        ]
      },
      {
        "id": "head",
        "title": "Thẻ head",
        "description": "Thẻ head chứa các thông tin cấu hình của trang web. Nội dung trong head thường không hiển thị trực tiếp trên giao diện, nhưng rất quan trọng cho trình duyệt, SEO, CSS và khả năng responsive.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <title>Tên trang</title>\r\n</head>"
          },
          {
            "title": "Ví dụ",
            "code": "<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <title>HTML Knowledge</title>\r\n  <link rel=\"stylesheet\" href=\"../css/style.css\" />\r\n</head>"
          }
        ]
      },
      {
        "id": "meta-charset",
        "title": "Meta charset",
        "description": "Meta charset dùng để khai báo bảng mã ký tự cho trang web. Thường sử dụng UTF-8 để trình duyệt hiển thị đúng tiếng Việt và các ký tự đặc biệt.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<meta charset=\"UTF-8\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <title>Trang tiếng Việt</title>\r\n</head>"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "title": "Meta viewport",
        "description": "Meta viewport giúp website hiển thị tốt trên nhiều kích thước màn hình, đặc biệt là điện thoại. Đây là thẻ gần như luôn có trong các trang web hiện đại.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n</head>"
          }
        ]
      },
      {
        "id": "title",
        "title": "Thẻ title",
        "description": "Thẻ title dùng để đặt tiêu đề cho trang web. Nội dung của title sẽ hiển thị trên tab trình duyệt và có ảnh hưởng đến SEO.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<title>Tên trang web</title>"
          },
          {
            "title": "Ví dụ",
            "code": "<head>\r\n  <title>Code Knowledge - HTML</title>\r\n</head>"
          }
        ]
      },
      {
        "id": "body",
        "title": "Thẻ body",
        "description": "Thẻ body chứa toàn bộ nội dung hiển thị ra trình duyệt, ví dụ như tiêu đề, đoạn văn, hình ảnh, liên kết, bảng, form và các thành phần giao diện khác.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<body>\r\n  Nội dung hiển thị trên trình duyệt\r\n</body>"
          },
          {
            "title": "Ví dụ",
            "code": "<body>\r\n  <h1>HTML Knowledge</h1>\r\n  <p>Đây là trang lưu kiến thức HTML.</p>\r\n  <a href=\"../index.html\">Quay về trang chủ</a>\r\n</body>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Văn bản & Block elements",
    "cards": [
      {
        "id": "heading",
        "title": "Heading",
        "description": "Heading là nhóm thẻ tiêu đề trong HTML, gồm từ h1 đến h6. Trong đó h1 là tiêu đề quan trọng nhất, h6 là tiêu đề có cấp thấp nhất. Heading giúp phân cấp nội dung rõ ràng hơn cho người đọc và công cụ tìm kiếm.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<h1>Tiêu đề cấp 1</h1>\r\n<h2>Tiêu đề cấp 2</h2>\r\n<h3>Tiêu đề cấp 3</h3>\r\n<h4>Tiêu đề cấp 4</h4>\r\n<h5>Tiêu đề cấp 5</h5>\r\n<h6>Tiêu đề cấp 6</h6>"
          },
          {
            "title": "Ví dụ",
            "code": "<h1>Học lập trình Front-End</h1>\r\n<h2>HTML cơ bản</h2>\r\n<h3>Cấu trúc HTML</h3>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<h1>Học lập trình Front-End</h1>\r\n<h2>HTML cơ bản</h2>\r\n<h3>Cấu trúc HTML</h3>\n</div>"
          }
        ]
      },
      {
        "id": "paragraph",
        "title": "Paragraph",
        "description": "Thẻ p dùng để tạo đoạn văn bản trong HTML. Mỗi đoạn nội dung nên được đặt trong một thẻ p riêng để cấu trúc văn bản rõ ràng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<p>Nội dung đoạn văn bản</p>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>\r\n  HTML là ngôn ngữ dùng để xây dựng cấu trúc nội dung của trang web.\r\n</p>\r\n\r\n<p>\r\n  CSS dùng để định dạng giao diện, màu sắc, bố cục và hiệu ứng.\r\n</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>\r\n  HTML là ngôn ngữ dùng để xây dựng cấu trúc nội dung của trang web.\r\n</p>\r\n\r\n<p>\r\n  CSS dùng để định dạng giao diện, màu sắc, bố cục và hiệu ứng.\r\n</p>\n</div>"
          }
        ]
      },
      {
        "id": "comment",
        "title": "Comment",
        "description": "Comment dùng để ghi chú trong code HTML. Nội dung comment không hiển thị ra trình duyệt. Comment thường dùng để giải thích code hoặc chia khu vực trong file HTML.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<!-- Nội dung ghi chú -->"
          },
          {
            "title": "Ví dụ",
            "code": "<!-- Phần tiêu đề trang -->\r\n<h1>Code Knowledge</h1>\r\n\r\n<!-- Phần mô tả -->\r\n<p>Website lưu kiến thức lập trình Front-End.</p>"
          }
        ]
      },
      {
        "id": "div",
        "title": "Thẻ div",
        "description": "Thẻ div là một block element dùng để nhóm các phần tử HTML lại với nhau. Div không mang ý nghĩa nội dung cụ thể, thường được dùng để chia layout hoặc bọc nội dung để CSS.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<div>\r\n  Nội dung bên trong div\r\n</div>"
          },
          {
            "title": "Ví dụ",
            "code": "<div class=\"course-card\">\r\n  <h2>HTML cơ bản</h2>\r\n  <p>Học cách xây dựng cấu trúc trang web bằng HTML.</p>\r\n</div>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<div class=\"course-card\">\r\n  <h2>HTML cơ bản</h2>\r\n  <p>Học cách xây dựng cấu trúc trang web bằng HTML.</p>\r\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "ordered-list",
        "title": "Ordered list",
        "description": "Ordered list là danh sách có thứ tự. Thẻ ol dùng để tạo danh sách, còn thẻ li dùng để tạo từng mục trong danh sách. Trình duyệt sẽ tự đánh số cho các mục.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<ol>\r\n  <li>Mục thứ nhất</li>\r\n  <li>Mục thứ hai</li>\r\n  <li>Mục thứ ba</li>\r\n</ol>"
          },
          {
            "title": "Ví dụ",
            "code": "<h2>Lộ trình học Front-End</h2>\r\n\r\n<ol>\r\n  <li>Học HTML</li>\r\n  <li>Học CSS</li>\r\n  <li>Học JavaScript</li>\r\n  <li>Học ReactJS</li>\r\n</ol>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<h2>Lộ trình học Front-End</h2>\r\n\r\n<ol>\r\n  <li>Học HTML</li>\r\n  <li>Học CSS</li>\r\n  <li>Học JavaScript</li>\r\n  <li>Học ReactJS</li>\r\n</ol>\n</div>"
          }
        ]
      },
      {
        "id": "blockquote",
        "title": "Blockquote",
        "description": "Thẻ blockquote dùng để hiển thị một đoạn trích dẫn dài. Nội dung bên trong blockquote thường được trình duyệt hiển thị thụt vào so với nội dung bình thường.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<blockquote>\r\n  Nội dung trích dẫn\r\n</blockquote>"
          },
          {
            "title": "Ví dụ",
            "code": "<blockquote>\r\n  <p>Học lập trình là quá trình luyện tập tư duy giải quyết vấn đề.</p>\r\n</blockquote>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<blockquote>\r\n  <p>Học lập trình là quá trình luyện tập tư duy giải quyết vấn đề.</p>\r\n</blockquote>\n</div>"
          }
        ]
      },
      {
        "id": "pre",
        "title": "Thẻ pre",
        "description": "Thẻ pre dùng để hiển thị nội dung và giữ nguyên khoảng trắng, tab, xuống dòng như trong mã nguồn. Thẻ này thường được dùng khi muốn hiển thị code hoặc nội dung cần giữ nguyên định dạng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<pre>\r\n  Nội dung được giữ nguyên định dạng\r\n</pre>"
          },
          {
            "title": "Ví dụ",
            "code": "<pre>\r\nDòng 1\r\n    Dòng 2 có khoảng trắng phía trước\r\n        Dòng 3 có khoảng trắng nhiều hơn\r\n</pre>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<pre>\r\nDòng 1\r\n    Dòng 2 có khoảng trắng phía trước\r\n        Dòng 3 có khoảng trắng nhiều hơn\r\n</pre>\n</div>"
          }
        ]
      },
      {
        "id": "entities",
        "title": "HTML entities",
        "description": "HTML entities dùng để hiển thị các ký tự đặc biệt trong HTML. Một số ký tự như dấu nhỏ hơn, lớn hơn hoặc nhiều khoảng trắng liên tiếp cần viết bằng entity để trình duyệt hiển thị đúng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Một số entities thường dùng",
            "code": "&lt;    hiển thị dấu <\r\n&gt;    hiển thị dấu >\r\n&nbsp;  hiển thị khoảng trắng\r\n&amp;   hiển thị dấu &",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n&lt;    hiển thị dấu <\r\n&gt;    hiển thị dấu >\r\n&nbsp;  hiển thị khoảng trắng\r\n&amp;   hiển thị dấu &\n</div>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Hiển thị thẻ h1 dưới dạng văn bản:</p>\r\n\r\n<pre>\r\n&lt;h1&gt;HTML Knowledge&lt;/h1&gt;\r\n</pre>\r\n\r\n<p>Nguyễn Văn A&nbsp;&nbsp;&nbsp;Front-End Developer</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Hiển thị thẻ h1 dưới dạng văn bản:</p>\r\n\r\n<pre>\r\n&lt;h1&gt;HTML Knowledge&lt;/h1&gt;\r\n</pre>\r\n\r\n<p>Nguyễn Văn A&nbsp;&nbsp;&nbsp;Front-End Developer</p>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Văn bản inline, liên kết & hình ảnh",
    "cards": [
      {
        "id": "span",
        "title": "Span",
        "description": "Span là thẻ inline dùng để bọc một phần nhỏ trong nội dung văn bản. Bản thân span không làm thay đổi giao diện nếu chưa có CSS. Thẻ này thường được dùng khi muốn định dạng hoặc xử lý riêng một đoạn chữ.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<span>Nội dung văn bản</span>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Khóa học <span class=\"highlight\">Fullstack</span> tại F8.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Khóa học <span class=\"highlight\">Fullstack</span> tại F8.</p>\n</div>"
          }
        ]
      },
      {
        "id": "bold",
        "title": "Bold",
        "description": "Bold dùng để làm chữ đậm về mặt hiển thị. Thẻ b chỉ thể hiện kiểu chữ đậm và không mang nhiều ý nghĩa nhấn mạnh về mặt nội dung.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<b>Nội dung in đậm</b>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Khóa học tại <b>F8</b>.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Khóa học tại <b>F8</b>.</p>\n</div>"
          }
        ]
      },
      {
        "id": "strong",
        "title": "Strong",
        "description": "Strong cũng làm chữ đậm nhưng mang ý nghĩa nhấn mạnh nội dung. Trình duyệt thường hiển thị strong giống chữ đậm, tuy nhiên về semantic thì nội dung này quan trọng hơn.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<strong>Nội dung quan trọng</strong>"
          },
          {
            "title": "Ví dụ",
            "code": "<p><strong>Không được</strong> bỏ trống email.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p><strong>Không được</strong> bỏ trống email.</p>\n</div>"
          }
        ]
      },
      {
        "id": "italic",
        "title": "Italic",
        "description": "Italic dùng để làm chữ nghiêng về mặt hiển thị. Thẻ i thường dùng cho tên riêng, thuật ngữ, tên sách, tên tác phẩm hoặc một đoạn chữ cần hiển thị khác biệt.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<i>Nội dung in nghiêng</i>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>HTML là viết tắt của <i>HyperText Markup Language</i>.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>HTML là viết tắt của <i>HyperText Markup Language</i>.</p>\n</div>"
          }
        ]
      },
      {
        "id": "emphasis",
        "title": "Emphasis",
        "description": "Emphasis dùng để nhấn mạnh nội dung về mặt ngữ nghĩa. Trình duyệt thường hiển thị thẻ em bằng chữ nghiêng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<em>Nội dung cần nhấn mạnh</em>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Bạn <em>nên</em> học HTML trước khi học CSS.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Bạn <em>nên</em> học HTML trước khi học CSS.</p>\n</div>"
          }
        ]
      },
      {
        "id": "underline",
        "title": "Underline",
        "description": "Underline dùng để gạch chân văn bản. Cần sử dụng cẩn thận vì người dùng có thể nhầm chữ gạch chân với một liên kết.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<u>Nội dung được gạch chân</u>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Đây là <u>nội dung quan trọng</u> trong ghi chú.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Đây là <u>nội dung quan trọng</u> trong ghi chú.</p>\n</div>"
          }
        ]
      },
      {
        "id": "inserted-text",
        "title": "Inserted text",
        "description": "Inserted text dùng để biểu thị nội dung mới được thêm vào tài liệu. Trình duyệt thường hiển thị nội dung trong thẻ ins bằng chữ gạch chân.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<ins>Nội dung mới được thêm</ins>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Bài học đã bổ sung phần <ins>HTML semantic</ins>.</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Bài học đã bổ sung phần <ins>HTML semantic</ins>.</p>\n</div>"
          }
        ]
      },
      {
        "id": "strikethrough",
        "title": "Strikethrough",
        "description": "Strikethrough dùng để gạch ngang nội dung không còn chính xác hoặc không còn phù hợp. Nội dung vẫn hiển thị nhưng được đánh dấu là không nên dùng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<s>Nội dung không còn phù hợp</s>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Giá cũ: <s>500.000đ</s></p>\r\n<p>Giá mới: 300.000đ</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Giá cũ: <s>500.000đ</s></p>\r\n<p>Giá mới: 300.000đ</p>\n</div>"
          }
        ]
      },
      {
        "id": "deleted-text",
        "title": "Deleted text",
        "description": "Deleted text dùng để biểu thị nội dung đã bị xóa khỏi tài liệu. Thẻ del mang ý nghĩa semantic rõ hơn so với cách gạch ngang chỉ để trình bày.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<del>Nội dung đã bị xóa</del>"
          },
          {
            "title": "Ví dụ",
            "code": "<p>Nội dung cũ: <del>HTML dùng để tạo kiểu cho trang web.</del></p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>Nội dung cũ: <del>HTML dùng để tạo kiểu cho trang web.</del></p>\n</div>"
          }
        ]
      },
      {
        "id": "line-break",
        "title": "Line break",
        "description": "Line break dùng để xuống dòng trong cùng một đoạn nội dung. Không nên lạm dụng thẻ br để tạo bố cục vì việc căn chỉnh giao diện nên được xử lý bằng CSS.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Dòng thứ nhất<br />\r\nDòng thứ hai"
          },
          {
            "title": "Ví dụ",
            "code": "<p>\r\n  F8 Education<br />\r\n  Cầu Giấy<br />\r\n  Hà Nội\r\n</p>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<p>\r\n  F8 Education<br />\r\n  Cầu Giấy<br />\r\n  Hà Nội\r\n</p>\n</div>"
          }
        ]
      },
      {
        "id": "link",
        "title": "Link",
        "description": "Link dùng để tạo liên kết đến một trang khác, một file khác, một website bên ngoài hoặc một vị trí trong cùng trang. Đây là một trong những thành phần quan trọng nhất của website.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<a href=\"URL\">Nội dung liên kết</a>"
          },
          {
            "title": "Ví dụ",
            "code": "<a href=\"https://github.com/username\">My GitHub</a>"
          }
        ]
      },
      {
        "id": "link-target",
        "title": "Target trong link",
        "description": "Thuộc tính target quyết định cách liên kết được mở. Giá trị _self mở link trong tab hiện tại, còn _blank mở link trong một tab mới.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<a href=\"URL\" target=\"_blank\">Nội dung liên kết</a>"
          },
          {
            "title": "Ví dụ",
            "code": "<a\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n>\r\n  My GitHub\r\n</a>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<a\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n>\r\n  My GitHub\r\n</a>\n</div>"
          }
        ]
      },
      {
        "id": "internal-link",
        "title": "Link nội bộ",
        "description": "Link nội bộ dùng để điều hướng đến một phần cụ thể trong cùng một trang. Giá trị href trỏ đến id của phần nội dung đích.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<a href=\"#ten-id\">Đi tới nội dung</a>"
          },
          {
            "title": "Ví dụ",
            "code": "<a href=\"#image\">Đi tới phần Image</a>\r\n\r\n<section id=\"image\">\r\n  <h2>Image</h2>\r\n</section>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<a href=\"#image\">Đi tới phần Image</a>\r\n\r\n<section id=\"image\">\r\n  <h2>Image</h2>\r\n</section>\n</div>"
          }
        ]
      },
      {
        "id": "image",
        "title": "Image",
        "description": "Image dùng để hiển thị hình ảnh trên trang web. Một hình ảnh thường cần đường dẫn src, mô tả alt, tiêu đề title và kích thước hiển thị. Nội dung alt sẽ hỗ trợ người dùng khi ảnh không tải được.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<img src=\"duong-dan-anh\" alt=\"Mô tả ảnh\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc website\"\r\n  title=\"Cấu trúc HTML\"\r\n  width=\"640\"\r\n  height=\"360\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc website\"\r\n  title=\"Cấu trúc HTML\"\r\n  width=\"640\"\r\n  height=\"360\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "absolute-path",
        "title": "Absolute path",
        "description": "Absolute path là đường dẫn tuyệt đối. Đường dẫn này thường bắt đầu từ gốc website hoặc bao gồm đầy đủ giao thức và tên miền.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "/images/logo.png\r\nhttps://example.com/images/logo.png"
          },
          {
            "title": "Ví dụ",
            "code": "<img src=\"/images/logo.png\" alt=\"Logo website\" />\r\n\r\n<a href=\"https://example.com/about\">Trang giới thiệu</a>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<img src=\"/images/logo.png\" alt=\"Logo website\" />\r\n\r\n<a href=\"https://example.com/about\">Trang giới thiệu</a>\n</div>"
          }
        ]
      },
      {
        "id": "relative-path",
        "title": "Relative path",
        "description": "Relative path là đường dẫn tương đối và phụ thuộc vào vị trí của file hiện tại. Đây là loại đường dẫn thường dùng để liên kết giữa các file trong cùng một project.",
        "exampleText": "Từ file html.html trong thư mục pages, muốn quay về index.html ở ngoài thư mục cha thì cần đi lùi ra một cấp rồi mới trỏ đến index.html.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "./file-cung-thu-muc.html\r\n../file-o-thu-muc-cha.html"
          },
          {
            "title": "Ví dụ",
            "code": "<img src=\"../images/logo.png\" alt=\"Logo website\" />\r\n\r\n<a href=\"../index.html\">Quay về trang chủ</a>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<img src=\"../images/logo.png\" alt=\"Logo website\" />\r\n\r\n<a href=\"../index.html\">Quay về trang chủ</a>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Table",
    "cards": [
      {
        "id": "table",
        "title": "Table",
        "description": "Table dùng để tạo bảng trong HTML. Bảng thường dùng để hiển thị dữ liệu có dạng hàng và cột, ví dụ bảng điểm, bảng sản phẩm, bảng thống kê hoặc bảng doanh thu.",
        "exampleText": "Một bảng danh sách học viên có thể gồm các cột: STT, họ tên, email và số điện thoại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<table>\r\n  <tr>\r\n    <td>Nội dung ô</td>\r\n  </tr>\r\n</table>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tr>\r\n    <th>STT</th>\r\n    <th>Họ tên</th>\r\n    <th>Email</th>\r\n    <th>Số điện thoại</th>\r\n  </tr>\r\n  <tr>\r\n    <td>1</td>\r\n    <td>Nguyễn Văn A</td>\r\n    <td>a@example.com</td>\r\n    <td>0901 234 567</td>\r\n  </tr>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tr>\r\n    <th>STT</th>\r\n    <th>Họ tên</th>\r\n    <th>Email</th>\r\n    <th>Số điện thoại</th>\r\n  </tr>\r\n  <tr>\r\n    <td>1</td>\r\n    <td>Nguyễn Văn A</td>\r\n    <td>a@example.com</td>\r\n    <td>0901 234 567</td>\r\n  </tr>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-row",
        "title": "Table row",
        "description": "Table row là hàng trong bảng và được tạo bằng thẻ tr. Mỗi hàng sẽ chứa các ô dữ liệu hoặc ô tiêu đề. Một bảng thường có nhiều hàng.",
        "exampleText": "Trong bảng học viên, mỗi học viên sẽ nằm trên một hàng riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tr>\r\n  <td>Nội dung ô thứ nhất</td>\r\n  <td>Nội dung ô thứ hai</td>\r\n</tr>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tr>\r\n    <td>1</td>\r\n    <td>Nguyễn Văn A</td>\r\n  </tr>\r\n  <tr>\r\n    <td>2</td>\r\n    <td>Trần Thị B</td>\r\n  </tr>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tr>\r\n    <td>1</td>\r\n    <td>Nguyễn Văn A</td>\r\n  </tr>\r\n  <tr>\r\n    <td>2</td>\r\n    <td>Trần Thị B</td>\r\n  </tr>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-heading",
        "title": "Table heading",
        "description": "Table heading là ô tiêu đề của bảng và được tạo bằng thẻ th. Nội dung trong ô tiêu đề thường được trình duyệt hiển thị đậm và căn giữa mặc định.",
        "exampleText": "Trong bảng sản phẩm, các tiêu đề “Tên sản phẩm”, “Số lượng”, “Đơn giá” và “Thành tiền” có thể là table heading.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<th>Nội dung tiêu đề</th>"
          },
          {
            "title": "Ví dụ",
            "code": "<tr>\r\n  <th>Tên sản phẩm</th>\r\n  <th>Số lượng</th>\r\n  <th>Đơn giá</th>\r\n  <th>Thành tiền</th>\r\n</tr>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\n<tr>\r\n  <th>Tên sản phẩm</th>\r\n  <th>Số lượng</th>\r\n  <th>Đơn giá</th>\r\n  <th>Thành tiền</th>\r\n</tr>\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-data",
        "title": "Table data",
        "description": "Table data là ô dữ liệu trong bảng và được tạo bằng thẻ td. Đây là nơi chứa nội dung thật của từng hàng, từng cột.",
        "exampleText": "Trong bảng sản phẩm, “Áo thun”, “2”, “150.000đ” và “300.000đ” là các table data.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<td>Nội dung dữ liệu</td>"
          },
          {
            "title": "Ví dụ",
            "code": "<tr>\r\n  <td>Áo thun</td>\r\n  <td>2</td>\r\n  <td>150.000đ</td>\r\n  <td>300.000đ</td>\r\n</tr>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\n<tr>\r\n  <td>Áo thun</td>\r\n  <td>2</td>\r\n  <td>150.000đ</td>\r\n  <td>300.000đ</td>\r\n</tr>\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-head",
        "title": "Table head",
        "description": "Table head dùng thẻ thead để nhóm phần đầu của bảng. Phần này thường chứa các hàng tiêu đề, giúp cấu trúc bảng rõ ràng hơn.",
        "exampleText": "Trong bảng doanh thu, phần table head có thể chứa các cột “Tháng”, “Doanh thu”, “Chi phí” và “Lợi nhuận”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<thead>\r\n  <tr>\r\n    <th>Tiêu đề cột</th>\r\n  </tr>\r\n</thead>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <thead>\r\n    <tr>\r\n      <th>Tháng</th>\r\n      <th>Doanh thu</th>\r\n      <th>Chi phí</th>\r\n      <th>Lợi nhuận</th>\r\n    </tr>\r\n  </thead>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <thead>\r\n    <tr>\r\n      <th>Tháng</th>\r\n      <th>Doanh thu</th>\r\n      <th>Chi phí</th>\r\n      <th>Lợi nhuận</th>\r\n    </tr>\r\n  </thead>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-body",
        "title": "Table body",
        "description": "Table body dùng thẻ tbody để nhóm phần thân của bảng. Đây là nơi chứa dữ liệu chính của bảng.",
        "exampleText": "Trong bảng doanh thu, phần table body sẽ chứa dữ liệu từng tháng như tháng 1, tháng 2 và tháng 3.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tbody>\r\n  <tr>\r\n    <td>Dữ liệu</td>\r\n  </tr>\r\n</tbody>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tbody>\r\n    <tr>\r\n      <td>Tháng 1</td>\r\n      <td>20.000.000đ</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Tháng 2</td>\r\n      <td>25.000.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tbody>\r\n    <tr>\r\n      <td>Tháng 1</td>\r\n      <td>20.000.000đ</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Tháng 2</td>\r\n      <td>25.000.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "table-foot",
        "title": "Table foot",
        "description": "Table foot dùng thẻ tfoot để nhóm phần cuối của bảng. Phần này thường dùng để hiển thị tổng cộng, ghi chú hoặc kết quả cuối cùng.",
        "exampleText": "Trong bảng sản phẩm, phần table foot có thể chứa dòng “Tổng cộng” và tổng số tiền cần thanh toán.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tfoot>\r\n  <tr>\r\n    <td>Nội dung cuối bảng</td>\r\n  </tr>\r\n</tfoot>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tfoot>\r\n    <tr>\r\n      <th>Tổng cộng</th>\r\n      <td>600.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tfoot>\r\n    <tr>\r\n      <th>Tổng cộng</th>\r\n      <td>600.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "colspan",
        "title": "Colspan",
        "description": "Colspan dùng để gộp nhiều cột thành một ô. Thuộc tính này thường dùng khi muốn tạo tiêu đề lớn hoặc dòng tổng kết trải dài qua nhiều cột.",
        "exampleText": "Trong bảng sản phẩm, dòng “Thông tin sản phẩm” có thể gộp hai cột “Hình ảnh” và “Tên sản phẩm”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<td colspan=\"2\">Nội dung gộp hai cột</td>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tr>\r\n    <th colspan=\"2\">Thông tin sản phẩm</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Hình ảnh</th>\r\n    <th>Tên sản phẩm</th>\r\n  </tr>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tr>\r\n    <th colspan=\"2\">Thông tin sản phẩm</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Hình ảnh</th>\r\n    <th>Tên sản phẩm</th>\r\n  </tr>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "rowspan",
        "title": "Rowspan",
        "description": "Rowspan dùng để gộp nhiều hàng thành một ô. Thuộc tính này thường dùng khi một ô cần được dùng chung cho nhiều hàng.",
        "exampleText": "Trong bảng sản phẩm, cột “Số lượng” có thể được gộp theo chiều dọc nếu phần tiêu đề chiếm hai hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<td rowspan=\"2\">Nội dung gộp hai hàng</td>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tr>\r\n    <th rowspan=\"2\">Số lượng</th>\r\n    <th colspan=\"2\">Giá</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Đơn giá</th>\r\n    <th>Thành tiền</th>\r\n  </tr>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <tr>\r\n    <th rowspan=\"2\">Số lượng</th>\r\n    <th colspan=\"2\">Giá</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Đơn giá</th>\r\n    <th>Thành tiền</th>\r\n  </tr>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "cellspacing",
        "title": "Cellspacing",
        "description": "Cellspacing là thuộc tính cũ dùng để tạo khoảng cách giữa các ô trong bảng. Nếu đặt cellspacing bằng 0, các ô sẽ sát nhau hơn. Trong HTML5 nên dùng thuộc tính CSS border-spacing hoặc border-collapse.",
        "exampleText": "Khi muốn bảng sản phẩm có đường viền liền mạch, có thể đặt khoảng cách giữa các ô bằng 0.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<table cellspacing=\"0\">\r\n  ...\r\n</table>"
          },
          {
            "title": "Ví dụ",
            "code": "<!-- Cách cũ -->\r\n<table border=\"1\" cellspacing=\"0\">\r\n  <tr>\r\n    <td>Sản phẩm</td>\r\n    <td>Số lượng</td>\r\n  </tr>\r\n</table>\r\n\r\n<!-- Cách dùng CSS hiện đại -->\r\n<table style=\"border-collapse: collapse;\">\r\n  ...\r\n</table>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!-- Cách cũ -->\r\n<table border=\"1\" cellspacing=\"0\">\r\n  <tr>\r\n    <td>Sản phẩm</td>\r\n    <td>Số lượng</td>\r\n  </tr>\r\n</table>\r\n\r\n<!-- Cách dùng CSS hiện đại -->\r\n<table style=\"border-collapse: collapse;\">\r\n  ...\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "cellpadding",
        "title": "Cellpadding",
        "description": "Cellpadding là thuộc tính cũ dùng để tạo khoảng cách giữa nội dung và đường viền của ô. Khoảng đệm giúp nội dung không bị dính sát vào viền. Trong HTML5 nên dùng thuộc tính CSS padding cho th và td.",
        "exampleText": "Nếu chữ “Tên sản phẩm” nằm quá sát viền ô, có thể tăng cellpadding để bảng dễ đọc hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<table cellpadding=\"8\">\r\n  ...\r\n</table>"
          },
          {
            "title": "Ví dụ",
            "code": "<!-- Cách cũ -->\r\n<table border=\"1\" cellpadding=\"12\">\r\n  <tr>\r\n    <th>Tên sản phẩm</th>\r\n    <td>Áo thun</td>\r\n  </tr>\r\n</table>\r\n\r\n<!-- Cách dùng CSS hiện đại -->\r\n<td style=\"padding: 12px;\">Áo thun</td>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!-- Cách cũ -->\r\n<table border=\"1\" cellpadding=\"12\">\r\n  <tr>\r\n    <th>Tên sản phẩm</th>\r\n    <td>Áo thun</td>\r\n  </tr>\r\n</table>\r\n\r\n<!-- Cách dùng CSS hiện đại -->\r\n<td style=\"padding: 12px;\">Áo thun</td>\n</div>"
          }
        ]
      },
      {
        "id": "product-table",
        "title": "Table sản phẩm",
        "description": "Table sản phẩm là dạng bảng thực hành tổng hợp nhiều kiến thức về table. Bảng có thể dùng hình ảnh, tên sản phẩm, số lượng, đơn giá, thành tiền, gộp cột, gộp hàng và dòng tổng cộng.",
        "exampleText": "Một bảng giỏ hàng có thể gồm hình ảnh sản phẩm, tên sản phẩm, số lượng, đơn giá, thành tiền và tổng cộng cuối bảng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<table>\r\n  <thead>...</thead>\r\n  <tbody>...</tbody>\r\n  <tfoot>...</tfoot>\r\n</table>"
          },
          {
            "title": "Ví dụ",
            "code": "<table border=\"1\" cellspacing=\"0\" cellpadding=\"8\">\r\n  <thead>\r\n    <tr>\r\n      <th rowspan=\"2\">Hình ảnh</th>\r\n      <th rowspan=\"2\">Tên sản phẩm</th>\r\n      <th colspan=\"3\">Thông tin mua hàng</th>\r\n    </tr>\r\n    <tr>\r\n      <th>Số lượng</th>\r\n      <th>Đơn giá</th>\r\n      <th>Thành tiền</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img src=\"../images/ao-thun.jpg\" alt=\"Áo thun\" width=\"80\" />\r\n      </td>\r\n      <td>Áo thun Front-End</td>\r\n      <td>2</td>\r\n      <td>150.000đ</td>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot>\r\n    <tr>\r\n      <th colspan=\"4\">Tổng cộng</th>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>",
            "preview": "\n<style>\n  table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 8px 0; background: white; font-size: 15px; }\n  th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }\n  th { background-color: #f8fafc; font-weight: 600; color: #334155; }\n  tr:nth-child(even) { background-color: #f8fafc; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"8\">\r\n  <thead>\r\n    <tr>\r\n      <th rowspan=\"2\">Hình ảnh</th>\r\n      <th rowspan=\"2\">Tên sản phẩm</th>\r\n      <th colspan=\"3\">Thông tin mua hàng</th>\r\n    </tr>\r\n    <tr>\r\n      <th>Số lượng</th>\r\n      <th>Đơn giá</th>\r\n      <th>Thành tiền</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img src=\"../images/ao-thun.jpg\" alt=\"Áo thun\" width=\"80\" />\r\n      </td>\r\n      <td>Áo thun Front-End</td>\r\n      <td>2</td>\r\n      <td>150.000đ</td>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot>\r\n    <tr>\r\n      <th colspan=\"4\">Tổng cộng</th>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Form & Semantic HTML5",
    "cards": [
      {
        "id": "form",
        "title": "Form",
        "description": "Form dùng để thu thập dữ liệu người dùng nhập vào trên website. Form thường được dùng trong đăng nhập, đăng ký, tìm kiếm, liên hệ, đặt hàng hoặc gửi phản hồi.",
        "exampleText": "Một form đăng ký tài khoản có thể gồm họ tên, email, mật khẩu, giới tính, tỉnh thành và nút đăng ký.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form action=\"URL-xu-ly\" method=\"post\">\r\n  Các trường nhập dữ liệu\r\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/register\" method=\"post\">\r\n  <label for=\"full-name\">Họ tên</label>\r\n  <input id=\"full-name\" name=\"fullName\" type=\"text\" required />\r\n\r\n  <label for=\"email\">Email</label>\r\n  <input id=\"email\" name=\"email\" type=\"email\" required />\r\n\r\n  <label for=\"password\">Mật khẩu</label>\r\n  <input id=\"password\" name=\"password\" type=\"password\" required />\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\">\r\n  <label for=\"full-name\">Họ tên</label>\r\n  <input id=\"full-name\" name=\"fullName\" type=\"text\" required />\r\n\r\n  <label for=\"email\">Email</label>\r\n  <input id=\"email\" name=\"email\" type=\"email\" required />\r\n\r\n  <label for=\"password\">Mật khẩu</label>\r\n  <input id=\"password\" name=\"password\" type=\"password\" required />\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "form-action",
        "title": "Action",
        "description": "Action là nơi dữ liệu form sẽ được gửi đến sau khi người dùng bấm nút submit. Giá trị của action thường là một URL hoặc một API xử lý dữ liệu.",
        "exampleText": "Khi người dùng gửi form liên hệ, dữ liệu có thể được gửi đến một trang backend hoặc API server.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form action=\"URL-xu-ly\">\r\n  ...\r\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/api/contact\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <textarea name=\"message\"></textarea>\r\n  <button type=\"submit\">Gửi liên hệ</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/api/contact\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <textarea name=\"message\"></textarea>\r\n  <button type=\"submit\">Gửi liên hệ</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "method-get",
        "title": "Method GET",
        "description": "GET là phương thức gửi dữ liệu form thông qua URL. Dữ liệu sẽ hiển thị trên thanh địa chỉ trình duyệt, nên thường dùng cho tìm kiếm, lọc dữ liệu hoặc truy vấn không chứa thông tin nhạy cảm.",
        "exampleText": "Một form tìm kiếm sản phẩm có thể dùng GET để đưa từ khóa tìm kiếm lên URL.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form action=\"/search\" method=\"get\">\r\n  ...\r\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/products\" method=\"get\">\r\n  <label for=\"keyword\">Tìm sản phẩm</label>\r\n  <input id=\"keyword\" name=\"q\" type=\"search\" />\r\n  <button type=\"submit\">Tìm kiếm</button>\r\n</form>\r\n\r\n<!-- URL có thể trở thành: /products?q=ao+thun -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/products\" method=\"get\">\r\n  <label for=\"keyword\">Tìm sản phẩm</label>\r\n  <input id=\"keyword\" name=\"q\" type=\"search\" />\r\n  <button type=\"submit\">Tìm kiếm</button>\r\n</form>\r\n\r\n<!-- URL có thể trở thành: /products?q=ao+thun -->\n</div>"
          }
        ]
      },
      {
        "id": "method-post",
        "title": "Method POST",
        "description": "POST là phương thức gửi dữ liệu form trong phần body của request nên dữ liệu không hiển thị trực tiếp trên URL. POST thường dùng cho đăng nhập, đăng ký, gửi bình luận hoặc thay đổi dữ liệu. Vẫn cần dùng HTTPS để bảo vệ dữ liệu khi truyền.",
        "exampleText": "Một form đăng ký tài khoản nên dùng POST vì có email, mật khẩu và thông tin cá nhân.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form action=\"/register\" method=\"post\">\r\n  ...\r\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "input",
        "title": "Input",
        "description": "Input là thẻ dùng để tạo ô nhập dữ liệu. Input có nhiều loại khác nhau như text, email, password, number, file, radio và checkbox.",
        "exampleText": "Form đăng ký có thể dùng input text cho họ tên, input email cho email và input password cho mật khẩu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" name=\"ten-truong\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<input name=\"fullName\" type=\"text\" />\r\n<input name=\"email\" type=\"email\" />\r\n<input name=\"password\" type=\"password\" />\r\n<input name=\"age\" type=\"number\" />\r\n<input name=\"avatar\" type=\"file\" />\r\n<input name=\"gender\" type=\"radio\" value=\"male\" />\r\n<input name=\"terms\" type=\"checkbox\" value=\"accepted\" />",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<input name=\"fullName\" type=\"text\" />\r\n<input name=\"email\" type=\"email\" />\r\n<input name=\"password\" type=\"password\" />\r\n<input name=\"age\" type=\"number\" />\r\n<input name=\"avatar\" type=\"file\" />\r\n<input name=\"gender\" type=\"radio\" value=\"male\" />\r\n<input name=\"terms\" type=\"checkbox\" value=\"accepted\" />\n</div>"
          }
        ]
      },
      {
        "id": "name",
        "title": "Name",
        "description": "Name là tên của trường dữ liệu khi form được gửi đi. Nếu input không có thuộc tính name, dữ liệu của input đó thường sẽ không được gửi lên server.",
        "exampleText": "Ô nhập email nên có name là email để server biết dữ liệu nhận được là email của người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input name=\"ten-truong\" type=\"text\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/subscribe\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <button type=\"submit\">Đăng ký nhận tin</button>\r\n</form>\r\n\r\n<!-- Dữ liệu gửi đi có dạng: email=user@example.com -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/subscribe\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <button type=\"submit\">Đăng ký nhận tin</button>\r\n</form>\r\n\r\n<!-- Dữ liệu gửi đi có dạng: email=user@example.com -->\n</div>"
          }
        ]
      },
      {
        "id": "placeholder",
        "title": "Placeholder",
        "description": "Placeholder là nội dung gợi ý hiển thị bên trong ô nhập khi người dùng chưa nhập dữ liệu. Placeholder giúp người dùng biết cần nhập gì nhưng không nên được dùng thay cho label.",
        "exampleText": "Ô nhập họ tên có thể hiển thị gợi ý “Nhập họ và tên”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" placeholder=\"Nội dung gợi ý\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "label",
        "title": "Label",
        "description": "Label là nhãn mô tả cho input. Label giúp form dễ hiểu hơn và hỗ trợ accessibility. Khi thuộc tính for của label trùng với id của input, người dùng có thể bấm vào label để focus vào ô nhập tương ứng.",
        "exampleText": "Dòng chữ “Email” đặt trước ô nhập email là một label.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<label for=\"input-id\">Tên trường</label>\r\n<input id=\"input-id\" name=\"tenTruong\" type=\"text\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"user-email\">Email</label>\r\n<input\r\n  id=\"user-email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"user-email\">Email</label>\r\n<input\r\n  id=\"user-email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "required",
        "title": "Required",
        "description": "Required dùng để bắt buộc người dùng phải nhập hoặc chọn dữ liệu trước khi gửi form. Nếu bỏ trống trường required, trình duyệt sẽ hiển thị thông báo lỗi.",
        "exampleText": "Trong form đăng ký, email và mật khẩu thường là hai trường bắt buộc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" required />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "value",
        "title": "Value",
        "description": "Value là giá trị mặc định hoặc giá trị hiện tại của input, option, radio hoặc checkbox. Khi form được gửi, value là dữ liệu tương ứng được gửi lên server.",
        "exampleText": "Ô họ tên có thể được đặt sẵn giá trị “Nguyễn Văn A”. Với radio giới tính, value có thể là “male” hoặc “female”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input name=\"tenTruong\" type=\"text\" value=\"Giá trị mặc định\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<input\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  value=\"Nguyễn Văn A\"\r\n/>\r\n\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"male\" />\r\n  Nam\r\n</label>\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"female\" />\r\n  Nữ\r\n</label>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<input\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  value=\"Nguyễn Văn A\"\r\n/>\r\n\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"male\" />\r\n  Nam\r\n</label>\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"female\" />\r\n  Nữ\r\n</label>\n</div>"
          }
        ]
      },
      {
        "id": "button",
        "title": "Button",
        "description": "Button dùng để tạo nút bấm trong form hoặc trên giao diện. Trong form, button có thể dùng để submit dữ liệu, reset dữ liệu hoặc thực hiện một hành động bằng JavaScript.",
        "exampleText": "Form đăng ký thường có nút “Đăng ký” để gửi dữ liệu và nút “Nhập lại” để xóa dữ liệu đã nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button type=\"button\">Nội dung nút</button>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n  <button type=\"reset\">Nhập lại</button>\r\n  <button type=\"button\">Xem điều khoản</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n  <button type=\"reset\">Nhập lại</button>\r\n  <button type=\"button\">Xem điều khoản</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "textarea",
        "title": "Textarea",
        "description": "Textarea dùng để nhập nội dung nhiều dòng. Thẻ này thường dùng cho ghi chú, mô tả, tin nhắn, bình luận hoặc phản hồi.",
        "exampleText": "Trong form liên hệ, phần “Nội dung tin nhắn” nên dùng textarea vì người dùng có thể nhập nhiều dòng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<textarea name=\"tenTruong\" rows=\"5\" cols=\"40\"></textarea>"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"message\">Nội dung tin nhắn</label>\r\n<textarea\r\n  id=\"message\"\r\n  name=\"message\"\r\n  rows=\"6\"\r\n  placeholder=\"Nhập nội dung cần liên hệ\"\r\n></textarea>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"message\">Nội dung tin nhắn</label>\r\n<textarea\r\n  id=\"message\"\r\n  name=\"message\"\r\n  rows=\"6\"\r\n  placeholder=\"Nhập nội dung cần liên hệ\"\r\n></textarea>\n</div>"
          }
        ]
      },
      {
        "id": "select",
        "title": "Select",
        "description": "Select dùng để tạo danh sách lựa chọn dạng dropdown. Người dùng có thể chọn một lựa chọn hoặc nhiều lựa chọn khi select có thuộc tính multiple.",
        "exampleText": "Trong form đăng ký, phần chọn tỉnh hoặc thành phố có thể dùng select.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<select name=\"tenTruong\">\r\n  <option value=\"gia-tri\">Nội dung lựa chọn</option>\r\n</select>"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"city\">Tỉnh/thành phố</label>\r\n<select id=\"city\" name=\"city\">\r\n  <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n</select>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"city\">Tỉnh/thành phố</label>\r\n<select id=\"city\" name=\"city\">\r\n  <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n</select>\n</div>"
          }
        ]
      },
      {
        "id": "option",
        "title": "Option",
        "description": "Option là từng lựa chọn nằm bên trong select. Mỗi option có thể có nội dung hiển thị cho người dùng và thuộc tính value để gửi lên server.",
        "exampleText": "Trong select tỉnh hoặc thành phố, các option có thể là “Hà Nội”, “Hồ Chí Minh” và “Đà Nẵng”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<option value=\"gia-tri-gui-di\">Nội dung hiển thị</option>"
          },
          {
            "title": "Ví dụ",
            "code": "<select name=\"city\">\r\n  <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n</select>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<select name=\"city\">\r\n  <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n</select>\n</div>"
          }
        ]
      },
      {
        "id": "optgroup",
        "title": "Optgroup",
        "description": "Optgroup dùng để nhóm các option trong select. Cách này giúp danh sách lựa chọn dài trở nên dễ nhìn và dễ chọn hơn.",
        "exampleText": "Danh sách tỉnh hoặc thành phố có thể chia thành các nhóm “Miền Bắc”, “Miền Trung” và “Miền Nam”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<optgroup label=\"Tên nhóm\">\r\n  <option value=\"gia-tri\">Lựa chọn</option>\r\n</optgroup>"
          },
          {
            "title": "Ví dụ",
            "code": "<select name=\"city\">\r\n  <optgroup label=\"Miền Bắc\">\r\n    <option value=\"ha-noi\">Hà Nội</option>\r\n    <option value=\"hai-phong\">Hải Phòng</option>\r\n  </optgroup>\r\n  <optgroup label=\"Miền Trung\">\r\n    <option value=\"da-nang\">Đà Nẵng</option>\r\n    <option value=\"hue\">Huế</option>\r\n  </optgroup>\r\n  <optgroup label=\"Miền Nam\">\r\n    <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n    <option value=\"can-tho\">Cần Thơ</option>\r\n  </optgroup>\r\n</select>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<select name=\"city\">\r\n  <optgroup label=\"Miền Bắc\">\r\n    <option value=\"ha-noi\">Hà Nội</option>\r\n    <option value=\"hai-phong\">Hải Phòng</option>\r\n  </optgroup>\r\n  <optgroup label=\"Miền Trung\">\r\n    <option value=\"da-nang\">Đà Nẵng</option>\r\n    <option value=\"hue\">Huế</option>\r\n  </optgroup>\r\n  <optgroup label=\"Miền Nam\">\r\n    <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n    <option value=\"can-tho\">Cần Thơ</option>\r\n  </optgroup>\r\n</select>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-html5",
        "title": "Semantic HTML5",
        "description": "Semantic HTML5 là nhóm thẻ HTML có ý nghĩa rõ ràng về mặt nội dung và cấu trúc trang. Các thẻ này giúp code dễ đọc hơn, hỗ trợ SEO và cải thiện accessibility.",
        "exampleText": "Một trang web có thể dùng header, nav, main, section, article, figure, figcaption và footer để mô tả đúng vai trò của từng khu vực.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<header>Phần đầu trang</header>\r\n<nav>Điều hướng</nav>\r\n<main>\r\n  <section>\r\n    <article>Nội dung độc lập</article>\r\n  </section>\r\n</main>\r\n<footer>Phần cuối trang</footer>"
          },
          {
            "title": "Ví dụ",
            "code": "<header>\r\n  <h1>Code Knowledge</h1>\r\n  <nav>\r\n    <a href=\"/html\">HTML</a>\r\n    <a href=\"/css\">CSS</a>\r\n  </nav>\r\n</header>\r\n\r\n<main>\r\n  <section>\r\n    <h2>Kiến thức HTML</h2>\r\n\r\n    <article>\r\n      <h3>Semantic HTML5</h3>\r\n      <figure>\r\n        <img src=\"semantic-html5.png\" alt=\"Cấu trúc semantic HTML5\" />\r\n        <figcaption>Cấu trúc một trang HTML semantic</figcaption>\r\n      </figure>\r\n    </article>\r\n  </section>\r\n</main>\r\n\r\n<footer>\r\n  <p>&copy; 2026 Code Knowledge</p>\r\n</footer>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<header>\r\n  <h1>Code Knowledge</h1>\r\n  <nav>\r\n    <a href=\"/html\">HTML</a>\r\n    <a href=\"/css\">CSS</a>\r\n  </nav>\r\n</header>\r\n\r\n<main>\r\n  <section>\r\n    <h2>Kiến thức HTML</h2>\r\n\r\n    <article>\r\n      <h3>Semantic HTML5</h3>\r\n      <figure>\r\n        <img src=\"semantic-html5.png\" alt=\"Cấu trúc semantic HTML5\" />\r\n        <figcaption>Cấu trúc một trang HTML semantic</figcaption>\r\n      </figure>\r\n    </article>\r\n  </section>\r\n</main>\r\n\r\n<footer>\r\n  <p>&copy; 2026 Code Knowledge</p>\r\n</footer>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Input types & thuộc tính form",
    "cards": [
      {
        "id": "text-input",
        "title": "Text input",
        "description": "Text input dùng để tạo ô nhập văn bản thông thường. Đây là loại input phổ biến nhất trong form.",
        "exampleText": "Dùng cho ô nhập họ tên, tên tài khoản, tiêu đề bài viết hoặc tên sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" name=\"tenTruong\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "email-input",
        "title": "Email input",
        "description": "Email input dùng để nhập địa chỉ email. Trình duyệt có thể tự kiểm tra định dạng email trước khi gửi form.",
        "exampleText": "Trong form đăng ký, ô nhập email nên dùng email input để hạn chế người dùng nhập sai định dạng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"email\" name=\"email\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"email\">Email</label>\r\n<input\r\n  id=\"email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n  placeholder=\"name@example.com\"\r\n  required\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"email\">Email</label>\r\n<input\r\n  id=\"email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n  placeholder=\"name@example.com\"\r\n  required\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "password-input",
        "title": "Password input",
        "description": "Password input dùng để nhập mật khẩu. Nội dung người dùng nhập sẽ bị che bằng dấu chấm hoặc ký tự ẩn.",
        "exampleText": "Form đăng nhập thường có ô nhập mật khẩu dùng password input.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"password\" name=\"password\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"password\">Mật khẩu</label>\r\n<input\r\n  id=\"password\"\r\n  name=\"password\"\r\n  type=\"password\"\r\n  minlength=\"8\"\r\n  required\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"password\">Mật khẩu</label>\r\n<input\r\n  id=\"password\"\r\n  name=\"password\"\r\n  type=\"password\"\r\n  minlength=\"8\"\r\n  required\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "number-input",
        "title": "Number input",
        "description": "Number input dùng để nhập dữ liệu dạng số. Có thể giới hạn giá trị nhỏ nhất, lớn nhất hoặc bước nhảy của số.",
        "exampleText": "Dùng cho ô nhập tuổi, số lượng sản phẩm, điểm số hoặc mức lương.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"number\" name=\"tenTruong\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"quantity\">Số lượng</label>\r\n<input\r\n  id=\"quantity\"\r\n  name=\"quantity\"\r\n  type=\"number\"\r\n  min=\"1\"\r\n  max=\"100\"\r\n  step=\"1\"\r\n  value=\"1\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"quantity\">Số lượng</label>\r\n<input\r\n  id=\"quantity\"\r\n  name=\"quantity\"\r\n  type=\"number\"\r\n  min=\"1\"\r\n  max=\"100\"\r\n  step=\"1\"\r\n  value=\"1\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "file-input",
        "title": "File input",
        "description": "File input dùng để chọn file từ máy tính hoặc thiết bị của người dùng. Khi upload file, form thường cần method POST và enctype multipart/form-data.",
        "exampleText": "Trong form ứng tuyển, người dùng có thể chọn file CV để gửi lên hệ thống.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"file\" name=\"tenFile\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/apply\" method=\"post\" enctype=\"multipart/form-data\">\r\n  <label for=\"cv\">Tải lên CV</label>\r\n  <input\r\n    id=\"cv\"\r\n    name=\"cv\"\r\n    type=\"file\"\r\n    accept=\".pdf,.doc,.docx\"\r\n    required\r\n  />\r\n  <button type=\"submit\">Gửi hồ sơ</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/apply\" method=\"post\" enctype=\"multipart/form-data\">\r\n  <label for=\"cv\">Tải lên CV</label>\r\n  <input\r\n    id=\"cv\"\r\n    name=\"cv\"\r\n    type=\"file\"\r\n    accept=\".pdf,.doc,.docx\"\r\n    required\r\n  />\r\n  <button type=\"submit\">Gửi hồ sơ</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "radio-input",
        "title": "Radio input",
        "description": "Radio input dùng khi người dùng chỉ được chọn một lựa chọn trong nhiều lựa chọn. Các radio thuộc cùng một nhóm cần dùng chung thuộc tính name.",
        "exampleText": "Trong form đăng ký, phần giới tính có thể gồm Nam, Nữ và Khác nhưng người dùng chỉ được chọn một.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"radio\" name=\"tenNhom\" value=\"giaTri\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<fieldset>\r\n  <legend>Giới tính</legend>\r\n\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"male\" />\r\n    Nam\r\n  </label>\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"female\" />\r\n    Nữ\r\n  </label>\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"other\" />\r\n    Khác\r\n  </label>\r\n</fieldset>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<fieldset>\r\n  <legend>Giới tính</legend>\r\n\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"male\" />\r\n    Nam\r\n  </label>\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"female\" />\r\n    Nữ\r\n  </label>\r\n  <label>\r\n    <input type=\"radio\" name=\"gender\" value=\"other\" />\r\n    Khác\r\n  </label>\r\n</fieldset>\n</div>"
          }
        ]
      },
      {
        "id": "checkbox-input",
        "title": "Checkbox input",
        "description": "Checkbox input dùng khi người dùng có thể chọn nhiều lựa chọn cùng lúc. Checkbox phù hợp với danh sách sở thích, kỹ năng hoặc nguồn thông tin.",
        "exampleText": "Trong form khảo sát, người dùng có thể chọn nhiều kỹ năng như HTML, CSS, JavaScript và ReactJS.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"checkbox\" name=\"tenTruong\" value=\"giaTri\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<fieldset>\r\n  <legend>Kỹ năng</legend>\r\n\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"html\" /> HTML\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"css\" /> CSS\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"javascript\" /> JavaScript\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"reactjs\" /> ReactJS\r\n  </label>\r\n</fieldset>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<fieldset>\r\n  <legend>Kỹ năng</legend>\r\n\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"html\" /> HTML\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"css\" /> CSS\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"javascript\" /> JavaScript\r\n  </label>\r\n  <label>\r\n    <input type=\"checkbox\" name=\"skills\" value=\"reactjs\" /> ReactJS\r\n  </label>\r\n</fieldset>\n</div>"
          }
        ]
      },
      {
        "id": "submit-button",
        "title": "Submit button",
        "description": "Submit button dùng để gửi dữ liệu form. Khi người dùng bấm nút này, form sẽ gửi dữ liệu đến địa chỉ được khai báo trong action.",
        "exampleText": "Nút “Đăng ký”, “Gửi liên hệ” hoặc “Đăng nhập” thường là submit button.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button type=\"submit\">Gửi dữ liệu</button>\r\n\r\n<!-- Hoặc -->\r\n<input type=\"submit\" value=\"Gửi dữ liệu\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/login\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng nhập</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/login\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng nhập</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "reset-button",
        "title": "Reset button",
        "description": "Reset button dùng để đưa dữ liệu trong form về trạng thái ban đầu. Nếu input có giá trị mặc định, reset sẽ đưa input về giá trị đó.",
        "exampleText": "Nút “Nhập lại” trong form đăng ký có thể dùng reset để xóa các dữ liệu người dùng vừa nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button type=\"reset\">Nhập lại</button>\r\n\r\n<!-- Hoặc -->\r\n<input type=\"reset\" value=\"Nhập lại\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<form>\r\n  <input name=\"fullName\" type=\"text\" value=\"Nguyễn Văn A\" />\r\n  <input name=\"email\" type=\"email\" />\r\n\r\n  <button type=\"reset\">Nhập lại</button>\r\n</form>\r\n\r\n<!-- Sau khi reset, fullName trở về \"Nguyễn Văn A\" -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form>\r\n  <input name=\"fullName\" type=\"text\" value=\"Nguyễn Văn A\" />\r\n  <input name=\"email\" type=\"email\" />\r\n\r\n  <button type=\"reset\">Nhập lại</button>\r\n</form>\r\n\r\n<!-- Sau khi reset, fullName trở về \"Nguyễn Văn A\" -->\n</div>"
          }
        ]
      },
      {
        "id": "min-max-step",
        "title": "Min, Max, Step",
        "description": "Min, max và step thường dùng với number input. Min quy định giá trị nhỏ nhất, max quy định giá trị lớn nhất, còn step quy định mỗi lần tăng hoặc giảm sẽ nhảy bao nhiêu đơn vị.",
        "exampleText": "Ô nhập tuổi có thể giới hạn từ 18 đến 60. Ô nhập số lượng sản phẩm có thể tăng hoặc giảm từng 1 đơn vị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input\r\n  type=\"number\"\r\n  min=\"giaTriNhoNhat\"\r\n  max=\"giaTriLonNhat\"\r\n  step=\"buocNhay\"\r\n/>"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"age\">Tuổi</label>\r\n<input id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" step=\"1\" />\r\n\r\n<label for=\"price\">Mức giá</label>\r\n<input\r\n  id=\"price\"\r\n  name=\"price\"\r\n  type=\"number\"\r\n  min=\"0\"\r\n  max=\"1000000\"\r\n  step=\"50000\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"age\">Tuổi</label>\r\n<input id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" step=\"1\" />\r\n\r\n<label for=\"price\">Mức giá</label>\r\n<input\r\n  id=\"price\"\r\n  name=\"price\"\r\n  type=\"number\"\r\n  min=\"0\"\r\n  max=\"1000000\"\r\n  step=\"50000\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "checked",
        "title": "Checked",
        "description": "Checked dùng để đặt trạng thái chọn sẵn cho radio hoặc checkbox. Khi trang vừa tải, lựa chọn có checked sẽ được chọn mặc định.",
        "exampleText": "Trong phần giới tính có thể chọn sẵn “Nam”; checkbox đồng ý điều khoản có thể được chọn sẵn hoặc để trống tùy yêu cầu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"radio\" checked />\r\n<input type=\"checkbox\" checked />"
          },
          {
            "title": "Ví dụ",
            "code": "<label>\r\n  <input type=\"radio\" name=\"gender\" value=\"male\" checked />\r\n  Nam\r\n</label>\r\n<label>\r\n  <input type=\"radio\" name=\"gender\" value=\"female\" />\r\n  Nữ\r\n</label>\r\n\r\n<label>\r\n  <input type=\"checkbox\" name=\"newsletter\" value=\"yes\" checked />\r\n  Nhận thông tin mới\r\n</label>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label>\r\n  <input type=\"radio\" name=\"gender\" value=\"male\" checked />\r\n  Nam\r\n</label>\r\n<label>\r\n  <input type=\"radio\" name=\"gender\" value=\"female\" />\r\n  Nữ\r\n</label>\r\n\r\n<label>\r\n  <input type=\"checkbox\" name=\"newsletter\" value=\"yes\" checked />\r\n  Nhận thông tin mới\r\n</label>\n</div>"
          }
        ]
      },
      {
        "id": "disabled",
        "title": "Disabled",
        "description": "Disabled dùng để vô hiệu hóa input, select, textarea hoặc button. Người dùng không thể tương tác với phần tử bị disabled và dữ liệu của trường disabled thường không được gửi khi submit form.",
        "exampleText": "Một nút “Gửi” có thể bị disabled cho đến khi người dùng nhập đủ thông tin cần thiết.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" disabled />\r\n<button type=\"submit\" disabled>Gửi</button>"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/checkout\" method=\"post\">\r\n  <input name=\"discountCode\" type=\"text\" value=\"SALE2026\" disabled />\r\n  <button type=\"submit\" disabled>Gửi đơn hàng</button>\r\n</form>\r\n\r\n<!-- discountCode không được gửi vì input bị disabled -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/checkout\" method=\"post\">\r\n  <input name=\"discountCode\" type=\"text\" value=\"SALE2026\" disabled />\r\n  <button type=\"submit\" disabled>Gửi đơn hàng</button>\r\n</form>\r\n\r\n<!-- discountCode không được gửi vì input bị disabled -->\n</div>"
          }
        ]
      },
      {
        "id": "readonly",
        "title": "Readonly",
        "description": "Readonly chỉ cho phép đọc và không cho phép sửa nội dung input hoặc textarea. Khác với disabled, dữ liệu readonly vẫn được gửi khi submit form.",
        "exampleText": "Trong form thanh toán, mã đơn hàng có thể để readonly để người dùng nhìn thấy nhưng không chỉnh sửa được.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" readonly />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/payment\" method=\"post\">\r\n  <label for=\"order-id\">Mã đơn hàng</label>\r\n  <input\r\n    id=\"order-id\"\r\n    name=\"orderId\"\r\n    type=\"text\"\r\n    value=\"ORDER-2026-001\"\r\n    readonly\r\n  />\r\n  <button type=\"submit\">Thanh toán</button>\r\n</form>\r\n\r\n<!-- orderId vẫn được gửi khi submit -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/payment\" method=\"post\">\r\n  <label for=\"order-id\">Mã đơn hàng</label>\r\n  <input\r\n    id=\"order-id\"\r\n    name=\"orderId\"\r\n    type=\"text\"\r\n    value=\"ORDER-2026-001\"\r\n    readonly\r\n  />\r\n  <button type=\"submit\">Thanh toán</button>\r\n</form>\r\n\r\n<!-- orderId vẫn được gửi khi submit -->\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Thuộc tính HTML thường dùng",
    "cards": [
      {
        "id": "attribute-id",
        "title": "Id",
        "description": "Id là thuộc tính dùng để định danh duy nhất cho một phần tử HTML. Trong một trang, mỗi id chỉ nên xuất hiện một lần. Id thường dùng với CSS, JavaScript hoặc link nội bộ để cuộn đến một phần cụ thể.",
        "exampleText": "Một phần kiến thức về form có thể có id riêng để khi click vào sidebar, trang tự cuộn xuống đúng phần đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tag id=\"ten-duy-nhat\">Nội dung</tag>"
          },
          {
            "title": "Ví dụ",
            "code": "<a href=\"#form-knowledge\">Đi tới kiến thức Form</a>\r\n\r\n<section id=\"form-knowledge\">\r\n  <h2>Kiến thức Form</h2>\r\n</section>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<a href=\"#form-knowledge\">Đi tới kiến thức Form</a>\r\n\r\n<section id=\"form-knowledge\">\r\n  <h2>Kiến thức Form</h2>\r\n</section>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-class",
        "title": "Class",
        "description": "Class dùng để đặt tên nhóm cho một hoặc nhiều phần tử HTML. Nhiều phần tử có thể dùng chung một class. Class thường được dùng để CSS các phần tử có cùng kiểu giao diện.",
        "exampleText": "Các thẻ kiến thức trong website có thể dùng chung class “knowledge-card” để có cùng kiểu khung, màu nền và khoảng cách.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tag class=\"ten-class\">Nội dung</tag>"
          },
          {
            "title": "Ví dụ",
            "code": "<article class=\"knowledge-card\">\r\n  <h2>HTML cơ bản</h2>\r\n</article>\r\n\r\n<article class=\"knowledge-card\">\r\n  <h2>CSS cơ bản</h2>\r\n</article>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<article class=\"knowledge-card\">\r\n  <h2>HTML cơ bản</h2>\r\n</article>\r\n\r\n<article class=\"knowledge-card\">\r\n  <h2>CSS cơ bản</h2>\r\n</article>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-style",
        "title": "Style",
        "description": "Style dùng để viết CSS trực tiếp trên một phần tử HTML. Cách này gọi là inline CSS. Không nên lạm dụng vì code sẽ khó quản lý khi dự án lớn.",
        "exampleText": "Một ô trong bảng có thể dùng style để căn giữa hoặc căn phải nội dung.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tag style=\"thuoc-tinh-css: gia-tri;\">Nội dung</tag>"
          },
          {
            "title": "Ví dụ",
            "code": "<table>\r\n  <tr>\r\n    <td style=\"text-align: center;\">2</td>\r\n    <td style=\"text-align: right;\">300.000đ</td>\r\n  </tr>\r\n</table>"
          }
        ]
      },
      {
        "id": "attribute-href",
        "title": "Href",
        "description": "Href là thuộc tính của thẻ liên kết. Nó xác định địa chỉ mà người dùng sẽ được chuyển đến khi click vào link.",
        "exampleText": "Một liên kết “Trang chủ” có thể dùng href để quay về file index.html.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<a href=\"duong-dan\">Nội dung liên kết</a>"
          },
          {
            "title": "Ví dụ",
            "code": "<a href=\"../index.html\">Trang chủ</a>\r\n<a href=\"https://github.com/username\">My GitHub</a>\r\n<a href=\"#form\">Đi tới phần Form</a>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<a href=\"../index.html\">Trang chủ</a>\r\n<a href=\"https://github.com/username\">My GitHub</a>\r\n<a href=\"#form\">Đi tới phần Form</a>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-src",
        "title": "Src",
        "description": "Src dùng để khai báo đường dẫn nguồn của tài nguyên. Thuộc tính này thường gặp trong thẻ img, script, iframe, audio hoặc video.",
        "exampleText": "Một ảnh logo cần có src để trình duyệt biết file ảnh nằm ở đâu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<img src=\"duong-dan-anh\" alt=\"Mô tả ảnh\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<img src=\"../images/logo.png\" alt=\"Logo Code Knowledge\" />\r\n<script src=\"../js/main.js\"></script>\r\n<iframe src=\"https://example.com\" title=\"Trang minh họa\"></iframe>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<img src=\"../images/logo.png\" alt=\"Logo Code Knowledge\" />\r\n<script src=\"../js/main.js\"></script>\r\n<iframe src=\"https://example.com\" title=\"Trang minh họa\"></iframe>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-alt",
        "title": "Alt",
        "description": "Alt là nội dung mô tả thay thế cho hình ảnh. Nếu ảnh không tải được, trình duyệt có thể hiển thị nội dung alt. Alt cũng rất quan trọng cho accessibility và hỗ trợ SEO.",
        "exampleText": "Một ảnh sản phẩm nên có alt mô tả tên sản phẩm hoặc nội dung ảnh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<img src=\"duong-dan-anh\" alt=\"Mô tả nội dung ảnh\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<img\r\n  src=\"../images/ao-thun-front-end.jpg\"\r\n  alt=\"Áo thun Front-End màu đen\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<img\r\n  src=\"../images/ao-thun-front-end.jpg\"\r\n  alt=\"Áo thun Front-End màu đen\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-title",
        "title": "Title",
        "description": "Title là thuộc tính dùng để cung cấp thông tin bổ sung cho phần tử. Khi người dùng hover, trình duyệt có thể hiển thị nội dung title dưới dạng tooltip.",
        "exampleText": "Một hình ảnh có thể có title để khi rê chuột vào sẽ hiện mô tả ngắn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<tag title=\"Thông tin bổ sung\">Nội dung</tag>"
          },
          {
            "title": "Ví dụ",
            "code": "<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  title=\"Cấu trúc cơ bản của một tài liệu HTML\"\r\n/>"
          }
        ]
      },
      {
        "id": "attribute-target",
        "title": "Target",
        "description": "Target dùng trong thẻ liên kết để quy định cách mở link. Giá trị _self mở ở tab hiện tại, còn _blank mở ở tab mới.",
        "exampleText": "Link dẫn đến GitHub cá nhân có thể mở ở tab mới để người dùng không bị rời khỏi website kiến thức.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<a href=\"URL\" target=\"_blank\">Nội dung liên kết</a>"
          },
          {
            "title": "Ví dụ",
            "code": "<a\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n>\r\n  My GitHub\r\n</a>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<a\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n>\r\n  My GitHub\r\n</a>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-name",
        "title": "Name",
        "description": "Name thường dùng trong form để đặt tên cho trường dữ liệu. Khi form được gửi đi, server sẽ nhận dữ liệu dựa theo name của từng input, select hoặc textarea.",
        "exampleText": "Ô nhập email nên có name là email để server biết dữ liệu đó là email người dùng nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input name=\"tenTruong\" type=\"text\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/subscribe\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <button type=\"submit\">Đăng ký nhận tin</button>\r\n</form>\r\n\r\n<!-- Dữ liệu gửi đi: email=user@example.com -->",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/subscribe\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" />\r\n  <button type=\"submit\">Đăng ký nhận tin</button>\r\n</form>\r\n\r\n<!-- Dữ liệu gửi đi: email=user@example.com -->\n</div>"
          }
        ]
      },
      {
        "id": "attribute-value",
        "title": "Value",
        "description": "Value là giá trị của một phần tử form. Với input, value có thể là giá trị mặc định. Với radio, checkbox hoặc option, value là dữ liệu được gửi đi khi người dùng chọn.",
        "exampleText": "Radio giới tính “Nam” có thể có value là male, còn “Nữ” có thể có value là female.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input name=\"tenTruong\" value=\"giaTri\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"male\" /> Nam\r\n</label>\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"female\" /> Nữ\r\n</label>\r\n\r\n<select name=\"city\">\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n</select>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"male\" /> Nam\r\n</label>\r\n<label>\r\n  <input name=\"gender\" type=\"radio\" value=\"female\" /> Nữ\r\n</label>\r\n\r\n<select name=\"city\">\r\n  <option value=\"ha-noi\">Hà Nội</option>\r\n</select>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-placeholder",
        "title": "Placeholder",
        "description": "Placeholder là dòng gợi ý hiển thị bên trong ô nhập khi người dùng chưa nhập dữ liệu. Nó giúp người dùng biết cần nhập nội dung gì nhưng không nên thay thế label.",
        "exampleText": "Ô nhập họ tên có thể có placeholder là “Nhập họ và tên”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" placeholder=\"Nội dung gợi ý\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"full-name\">Họ và tên</label>\r\n<input\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-required",
        "title": "Required",
        "description": "Required dùng để bắt buộc người dùng phải nhập hoặc chọn dữ liệu trước khi gửi form. Nếu trường required bị bỏ trống, trình duyệt sẽ không cho submit form.",
        "exampleText": "Email và mật khẩu trong form đăng ký thường là các trường bắt buộc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" required />"
          },
          {
            "title": "Ví dụ",
            "code": "<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\">\r\n  <input name=\"email\" type=\"email\" required />\r\n  <input name=\"password\" type=\"password\" required />\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-selected",
        "title": "Selected",
        "description": "Selected dùng để chọn sẵn một option trong select. Khi trang vừa tải, option có selected sẽ được hiển thị là lựa chọn mặc định.",
        "exampleText": "Trong danh sách tỉnh hoặc thành phố, có thể chọn sẵn “Hà Nội” làm giá trị mặc định.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<option value=\"giaTri\" selected>Nội dung lựa chọn</option>"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"city\">Tỉnh/thành phố</label>\r\n<select id=\"city\" name=\"city\">\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n  <option value=\"ha-noi\" selected>Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n</select>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"city\">Tỉnh/thành phố</label>\r\n<select id=\"city\" name=\"city\">\r\n  <option value=\"da-nang\">Đà Nẵng</option>\r\n  <option value=\"ha-noi\" selected>Hà Nội</option>\r\n  <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n</select>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-multiple",
        "title": "Multiple",
        "description": "Multiple cho phép người dùng chọn nhiều giá trị trong select hoặc chọn nhiều file trong input file.",
        "exampleText": "Một form chọn kỹ năng có thể cho phép người dùng chọn nhiều kỹ năng như HTML, CSS và JavaScript.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<select name=\"tenTruong\" multiple>\r\n  ...\r\n</select>\r\n\r\n<input type=\"file\" name=\"files\" multiple />"
          },
          {
            "title": "Ví dụ",
            "code": "<label for=\"skills\">Kỹ năng</label>\r\n<select id=\"skills\" name=\"skills\" multiple>\r\n  <option value=\"html\">HTML</option>\r\n  <option value=\"css\">CSS</option>\r\n  <option value=\"javascript\">JavaScript</option>\r\n</select>\r\n\r\n<label for=\"documents\">Tài liệu</label>\r\n<input id=\"documents\" name=\"documents\" type=\"file\" multiple />",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<label for=\"skills\">Kỹ năng</label>\r\n<select id=\"skills\" name=\"skills\" multiple>\r\n  <option value=\"html\">HTML</option>\r\n  <option value=\"css\">CSS</option>\r\n  <option value=\"javascript\">JavaScript</option>\r\n</select>\r\n\r\n<label for=\"documents\">Tài liệu</label>\r\n<input id=\"documents\" name=\"documents\" type=\"file\" multiple />\n</div>"
          }
        ]
      },
      {
        "id": "attribute-width",
        "title": "Width",
        "description": "Width dùng để đặt chiều rộng cho một phần tử và thường gặp trong img, table hoặc một số phần tử hiển thị khác. Trong HTML hiện đại, nên ưu tiên quản lý chiều rộng bằng CSS.",
        "exampleText": "Một ảnh minh họa có thể được đặt chiều rộng cố định để không hiển thị quá lớn trên giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<img src=\"anh.jpg\" alt=\"Mô tả ảnh\" width=\"640\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<!-- Thuộc tính HTML -->\r\n<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  width=\"640\"\r\n/>\r\n\r\n<!-- CSS linh hoạt hơn -->\r\n<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  style=\"width: 100%; max-width: 640px;\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!-- Thuộc tính HTML -->\r\n<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  width=\"640\"\r\n/>\r\n\r\n<!-- CSS linh hoạt hơn -->\r\n<img\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  style=\"width: 100%; max-width: 640px;\"\r\n/>\n</div>"
          }
        ]
      },
      {
        "id": "attribute-height",
        "title": "Height",
        "description": "Height dùng để đặt chiều cao cho một phần tử và thường gặp trong img, table hoặc iframe. Giống width, nên ưu tiên dùng CSS để quản lý chiều cao trong dự án thực tế.",
        "exampleText": "Một ảnh sản phẩm có thể được đặt chiều cao cố định để các ảnh trong bảng hiển thị đều nhau.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<img src=\"anh.jpg\" alt=\"Mô tả ảnh\" height=\"240\" />"
          },
          {
            "title": "Ví dụ",
            "code": "<!-- Thuộc tính HTML -->\r\n<img\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  width=\"240\"\r\n  height=\"240\"\r\n/>\r\n\r\n<!-- CSS giúp kiểm soát cách ảnh được cắt -->\r\n<img\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  style=\"width: 240px; height: 240px; object-fit: cover;\"\r\n/>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!-- Thuộc tính HTML -->\r\n<img\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  width=\"240\"\r\n  height=\"240\"\r\n/>\r\n\r\n<!-- CSS giúp kiểm soát cách ảnh được cắt -->\r\n<img\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  style=\"width: 240px; height: 240px; object-fit: cover;\"\r\n/>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 8",
    "title": "Semantic HTML5 chi tiết",
    "cards": [
      {
        "id": "semantic-header",
        "title": "Header",
        "description": "Header là phần đầu của trang web hoặc phần đầu của một khu vực nội dung. Header thường chứa logo, tiêu đề, mô tả ngắn, menu hoặc thông tin giới thiệu.",
        "exampleText": "Trong website lưu kiến thức code, phần đầu trang HTML có thể dùng header để chứa tiêu đề “HTML Knowledge” và mô tả “Kiến thức HTML được chia theo từng nhóm”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<header>\r\n  Nội dung phần đầu trang hoặc khu vực\r\n</header>"
          },
          {
            "title": "Ví dụ",
            "code": "<header>\r\n  <h1>HTML Knowledge</h1>\r\n  <p>Kiến thức HTML được chia theo từng nhóm.</p>\r\n</header>\r\n\r\n<article>\r\n  <header>\r\n    <h2>Semantic HTML5</h2>\r\n    <p>Cập nhật ngày 14/07/2026</p>\r\n  </header>\r\n</article>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<header>\r\n  <h1>HTML Knowledge</h1>\r\n  <p>Kiến thức HTML được chia theo từng nhóm.</p>\r\n</header>\r\n\r\n<article>\r\n  <header>\r\n    <h2>Semantic HTML5</h2>\r\n    <p>Cập nhật ngày 14/07/2026</p>\r\n  </header>\r\n</article>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-nav",
        "title": "Nav",
        "description": "Nav dùng để chứa các liên kết điều hướng chính. Nav thường dùng cho menu trang web, sidebar, menu trong header hoặc danh sách mục lục.",
        "exampleText": "Sidebar bên trái của trang HTML có thể dùng nav để chứa các link như Cấu trúc HTML, Table, Form và Semantic HTML5.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<nav>\r\n  Các liên kết điều hướng chính\r\n</nav>"
          },
          {
            "title": "Ví dụ",
            "code": "<nav aria-label=\"Mục lục HTML\">\r\n  <a href=\"#basic-html\">Cấu trúc HTML</a>\r\n  <a href=\"#table\">Table</a>\r\n  <a href=\"#form\">Form</a>\r\n  <a href=\"#semantic-html5\">Semantic HTML5</a>\r\n</nav>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<nav aria-label=\"Mục lục HTML\">\r\n  <a href=\"#basic-html\">Cấu trúc HTML</a>\r\n  <a href=\"#table\">Table</a>\r\n  <a href=\"#form\">Form</a>\r\n  <a href=\"#semantic-html5\">Semantic HTML5</a>\r\n</nav>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-main",
        "title": "Main",
        "description": "Main là phần nội dung chính của trang web. Mỗi trang chỉ nên có một main chính và nội dung trong đó nên là phần quan trọng nhất mà người dùng cần đọc.",
        "exampleText": "Trong trang HTML, toàn bộ phần giải thích kiến thức, ví dụ và các nhóm bài học nên nằm trong main.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<main>\r\n  Nội dung chính của trang\r\n</main>"
          },
          {
            "title": "Ví dụ",
            "code": "<body>\r\n  <header>Tiêu đề trang</header>\r\n  <nav>Điều hướng chính</nav>\r\n\r\n  <main>\r\n    <h1>HTML Knowledge</h1>\r\n    <section>\r\n      <h2>Cấu trúc HTML cơ bản</h2>\r\n      <p>Nội dung bài học...</p>\r\n    </section>\r\n  </main>\r\n\r\n  <footer>Thông tin cuối trang</footer>\r\n</body>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<body>\r\n  <header>Tiêu đề trang</header>\r\n  <nav>Điều hướng chính</nav>\r\n\r\n  <main>\r\n    <h1>HTML Knowledge</h1>\r\n    <section>\r\n      <h2>Cấu trúc HTML cơ bản</h2>\r\n      <p>Nội dung bài học...</p>\r\n    </section>\r\n  </main>\r\n\r\n  <footer>Thông tin cuối trang</footer>\r\n</body>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-section",
        "title": "Section",
        "description": "Section dùng để chia nội dung thành từng khu vực có chủ đề riêng. Mỗi section thường nên có một tiêu đề để thể hiện nội dung chính của khu vực đó.",
        "exampleText": "Các nhóm “Cấu trúc HTML cơ bản”, “Table”, “Form” và “Semantic HTML5” có thể được đặt trong từng section riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<section>\r\n  <h2>Tiêu đề khu vực</h2>\r\n  Nội dung cùng chủ đề\r\n</section>"
          },
          {
            "title": "Ví dụ",
            "code": "<main>\r\n  <section>\r\n    <h2>Cấu trúc HTML cơ bản</h2>\r\n    <p>DOCTYPE, html, head, body...</p>\r\n  </section>\r\n\r\n  <section>\r\n    <h2>Table</h2>\r\n    <p>Table, thead, tbody, tfoot...</p>\r\n  </section>\r\n</main>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<main>\r\n  <section>\r\n    <h2>Cấu trúc HTML cơ bản</h2>\r\n    <p>DOCTYPE, html, head, body...</p>\r\n  </section>\r\n\r\n  <section>\r\n    <h2>Table</h2>\r\n    <p>Table, thead, tbody, tfoot...</p>\r\n  </section>\r\n</main>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-article",
        "title": "Article",
        "description": "Article dùng cho một nội dung độc lập, có thể tách ra đọc riêng mà vẫn hiểu được. Article thường dùng cho bài viết, thẻ sản phẩm, bài blog, tin tức hoặc từng mục kiến thức.",
        "exampleText": "Mỗi mục kiến thức như “DOCTYPE”, “Heading”, “Table” hoặc “Form” có thể là một article riêng vì có tiêu đề, giải thích và ví dụ riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<article>\r\n  <h2>Tiêu đề nội dung độc lập</h2>\r\n  Nội dung article\r\n</article>"
          },
          {
            "title": "Ví dụ",
            "code": "<article id=\"doctype\">\r\n  <h2>DOCTYPE</h2>\r\n  <p>\r\n    DOCTYPE khai báo loại tài liệu để trình duyệt xử lý trang HTML đúng cách.\r\n  </p>\r\n  <pre><code>&lt;!DOCTYPE html&gt;</code></pre>\r\n</article>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<article id=\"doctype\">\r\n  <h2>DOCTYPE</h2>\r\n  <p>\r\n    DOCTYPE khai báo loại tài liệu để trình duyệt xử lý trang HTML đúng cách.\r\n  </p>\r\n  <pre><code>&lt;!DOCTYPE html&gt;</code></pre>\r\n</article>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-figure",
        "title": "Figure",
        "description": "Figure dùng để bọc nội dung minh họa như hình ảnh, sơ đồ, biểu đồ hoặc đoạn code có chú thích. Figure giúp trình duyệt và người đọc hiểu đây là một nội dung minh họa riêng biệt.",
        "exampleText": "Một hình ảnh minh họa cấu trúc HTML hoặc sơ đồ layout semantic có thể được đặt trong figure.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<figure>\r\n  Nội dung minh họa\r\n  <figcaption>Chú thích</figcaption>\r\n</figure>"
          },
          {
            "title": "Ví dụ",
            "code": "<figure>\r\n  <img\r\n    src=\"../images/semantic-layout.png\"\r\n    alt=\"Sơ đồ bố cục semantic HTML5\"\r\n  />\r\n  <figcaption>Sơ đồ bố cục semantic của một trang HTML5.</figcaption>\r\n</figure>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<figure>\r\n  <img\r\n    src=\"../images/semantic-layout.png\"\r\n    alt=\"Sơ đồ bố cục semantic HTML5\"\r\n  />\r\n  <figcaption>Sơ đồ bố cục semantic của một trang HTML5.</figcaption>\r\n</figure>\n</div>"
          }
        ]
      },
      {
        "id": "semantic-figcaption",
        "title": "Figcaption",
        "description": "Figcaption dùng để viết chú thích cho nội dung nằm trong figure. Figcaption thường đi kèm với ảnh, sơ đồ, biểu đồ hoặc ví dụ minh họa và có thể đặt ở đầu hoặc cuối figure.",
        "exampleText": "Bên dưới ảnh mô tả layout HTML5, có thể dùng figcaption để ghi “Cấu trúc semantic HTML5 gồm header, nav, main, section và article”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<figure>\r\n  Nội dung minh họa\r\n  <figcaption>Nội dung chú thích</figcaption>\r\n</figure>"
          },
          {
            "title": "Ví dụ",
            "code": "<figure>\r\n  <img\r\n    src=\"../images/html5-layout.png\"\r\n    alt=\"Layout HTML5\"\r\n  />\r\n  <figcaption>\r\n    Cấu trúc semantic HTML5 gồm header, nav, main, section và article.\r\n  </figcaption>\r\n</figure>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<figure>\r\n  <img\r\n    src=\"../images/html5-layout.png\"\r\n    alt=\"Layout HTML5\"\r\n  />\r\n  <figcaption>\r\n    Cấu trúc semantic HTML5 gồm header, nav, main, section và article.\r\n  </figcaption>\r\n</figure>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 9",
    "title": "Thực hành HTML",
    "cards": [
      {
        "id": "practice-personal-page",
        "title": "Trang giới thiệu cá nhân",
        "description": "Bài thực hành này dùng để luyện cấu trúc HTML cơ bản, tiêu đề, đoạn văn, hình ảnh, liên kết và danh sách. Đây là bài phù hợp sau khi đã học các thẻ cơ bản.",
        "exampleText": "Một trang giới thiệu cá nhân có thể gồm tên, ảnh đại diện, mô tả bản thân, kỹ năng, sở thích và link GitHub hoặc Facebook.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>...</head>\r\n  <body>\r\n    <h1>Tên của bạn</h1>\r\n    <img src=\"avatar.jpg\" alt=\"Ảnh đại diện\" />\r\n    <p>Giới thiệu bản thân...</p>\r\n  </body>\r\n</html>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>...</head>\r\n  <body>\r\n    <h1>Tên của bạn</h1>\r\n    <img src=\"avatar.jpg\" alt=\"Ảnh đại diện\" />\r\n    <p>Giới thiệu bản thân...</p>\r\n  </body>\r\n</html>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Nguyễn Văn A - Front-End Developer</title>\r\n  </head>\r\n  <body>\r\n    <header>\r\n      <h1>Nguyễn Văn A</h1>\r\n      <p>Front-End Developer</p>\r\n    </header>\r\n\r\n    <main>\r\n      <img src=\"./images/avatar.jpg\" alt=\"Ảnh đại diện Nguyễn Văn A\" width=\"200\" />\r\n\r\n      <section>\r\n        <h2>Giới thiệu</h2>\r\n        <p>Tôi đang học HTML, CSS, JavaScript và ReactJS.</p>\r\n      </section>\r\n\r\n      <section>\r\n        <h2>Kỹ năng</h2>\r\n        <ul>\r\n          <li>HTML</li>\r\n          <li>CSS</li>\r\n          <li>JavaScript</li>\r\n        </ul>\r\n      </section>\r\n\r\n      <section>\r\n        <h2>Sở thích</h2>\r\n        <ol>\r\n          <li>Đọc sách</li>\r\n          <li>Nghe nhạc</li>\r\n          <li>Viết code</li>\r\n        </ol>\r\n      </section>\r\n    </main>\r\n\r\n    <footer>\r\n      <a href=\"https://github.com/username\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n        GitHub của tôi\r\n      </a>\r\n    </footer>\r\n  </body>\r\n</html>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Nguyễn Văn A - Front-End Developer</title>\r\n  </head>\r\n  <body>\r\n    <header>\r\n      <h1>Nguyễn Văn A</h1>\r\n      <p>Front-End Developer</p>\r\n    </header>\r\n\r\n    <main>\r\n      <img src=\"./images/avatar.jpg\" alt=\"Ảnh đại diện Nguyễn Văn A\" width=\"200\" />\r\n\r\n      <section>\r\n        <h2>Giới thiệu</h2>\r\n        <p>Tôi đang học HTML, CSS, JavaScript và ReactJS.</p>\r\n      </section>\r\n\r\n      <section>\r\n        <h2>Kỹ năng</h2>\r\n        <ul>\r\n          <li>HTML</li>\r\n          <li>CSS</li>\r\n          <li>JavaScript</li>\r\n        </ul>\r\n      </section>\r\n\r\n      <section>\r\n        <h2>Sở thích</h2>\r\n        <ol>\r\n          <li>Đọc sách</li>\r\n          <li>Nghe nhạc</li>\r\n          <li>Viết code</li>\r\n        </ol>\r\n      </section>\r\n    </main>\r\n\r\n    <footer>\r\n      <a href=\"https://github.com/username\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n        GitHub của tôi\r\n      </a>\r\n    </footer>\r\n  </body>\r\n</html>\n</div>"
          }
        ]
      },
      {
        "id": "practice-internal-menu",
        "title": "Menu điều hướng nội bộ",
        "description": "Bài thực hành này dùng để luyện link nội bộ bằng id. Khi click vào menu, trang sẽ tự cuộn đến đúng phần nội dung tương ứng.",
        "exampleText": "Sidebar bên trái có các mục “Giới thiệu”, “Kỹ năng”, “Dự án” và “Liên hệ”. Khi click vào “Kỹ năng”, trang cuộn xuống phần kỹ năng.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<nav>\r\n  <a href=\"#gioi-thieu\">Giới thiệu</a>\r\n  <a href=\"#ky-nang\">Kỹ năng</a>\r\n</nav>\r\n\r\n<section id=\"gioi-thieu\">...</section>\r\n<section id=\"ky-nang\">...</section>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<nav>\r\n  <a href=\"#gioi-thieu\">Giới thiệu</a>\r\n  <a href=\"#ky-nang\">Kỹ năng</a>\r\n</nav>\r\n\r\n<section id=\"gioi-thieu\">...</section>\r\n<section id=\"ky-nang\">...</section>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Portfolio cá nhân</title>\r\n  </head>\r\n  <body>\r\n    <aside>\r\n      <nav aria-label=\"Mục lục portfolio\">\r\n        <a href=\"#gioi-thieu\">Giới thiệu</a>\r\n        <a href=\"#ky-nang\">Kỹ năng</a>\r\n        <a href=\"#du-an\">Dự án</a>\r\n        <a href=\"#lien-he\">Liên hệ</a>\r\n      </nav>\r\n    </aside>\r\n\r\n    <main>\r\n      <section id=\"gioi-thieu\">\r\n        <h2>Giới thiệu</h2>\r\n        <p>Tôi là một Front-End Developer.</p>\r\n      </section>\r\n\r\n      <section id=\"ky-nang\">\r\n        <h2>Kỹ năng</h2>\r\n        <p>HTML, CSS, JavaScript và ReactJS.</p>\r\n      </section>\r\n\r\n      <section id=\"du-an\">\r\n        <h2>Dự án</h2>\r\n        <p>Website Code Knowledge.</p>\r\n      </section>\r\n\r\n      <section id=\"lien-he\">\r\n        <h2>Liên hệ</h2>\r\n        <a href=\"mailto:user@example.com\">user@example.com</a>\r\n      </section>\r\n    </main>\r\n  </body>\r\n</html>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Portfolio cá nhân</title>\r\n  </head>\r\n  <body>\r\n    <aside>\r\n      <nav aria-label=\"Mục lục portfolio\">\r\n        <a href=\"#gioi-thieu\">Giới thiệu</a>\r\n        <a href=\"#ky-nang\">Kỹ năng</a>\r\n        <a href=\"#du-an\">Dự án</a>\r\n        <a href=\"#lien-he\">Liên hệ</a>\r\n      </nav>\r\n    </aside>\r\n\r\n    <main>\r\n      <section id=\"gioi-thieu\">\r\n        <h2>Giới thiệu</h2>\r\n        <p>Tôi là một Front-End Developer.</p>\r\n      </section>\r\n\r\n      <section id=\"ky-nang\">\r\n        <h2>Kỹ năng</h2>\r\n        <p>HTML, CSS, JavaScript và ReactJS.</p>\r\n      </section>\r\n\r\n      <section id=\"du-an\">\r\n        <h2>Dự án</h2>\r\n        <p>Website Code Knowledge.</p>\r\n      </section>\r\n\r\n      <section id=\"lien-he\">\r\n        <h2>Liên hệ</h2>\r\n        <a href=\"mailto:user@example.com\">user@example.com</a>\r\n      </section>\r\n    </main>\r\n  </body>\r\n</html>\n</div>"
          }
        ]
      },
      {
        "id": "practice-product-table",
        "title": "Bảng sản phẩm",
        "description": "Bài thực hành này dùng để luyện table, tr, th, td, colspan, rowspan, hình ảnh trong bảng và dòng tổng cộng. Đây là bài tổng hợp tốt cho phần table.",
        "exampleText": "Một bảng giỏ hàng có thể gồm hình ảnh sản phẩm, tên sản phẩm, số lượng, đơn giá, thành tiền và tổng cộng.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<table>\r\n  <thead>...</thead>\r\n  <tbody>...</tbody>\r\n  <tfoot>...</tfoot>\r\n</table>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table>\r\n  <thead>...</thead>\r\n  <tbody>...</tbody>\r\n  <tfoot>...</tfoot>\r\n</table>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<table border=\"1\" cellspacing=\"0\" cellpadding=\"8\">\r\n  <thead>\r\n    <tr>\r\n      <th rowspan=\"2\">Hình ảnh</th>\r\n      <th rowspan=\"2\">Tên sản phẩm</th>\r\n      <th colspan=\"3\">Thông tin mua hàng</th>\r\n    </tr>\r\n    <tr>\r\n      <th>Số lượng</th>\r\n      <th>Đơn giá</th>\r\n      <th>Thành tiền</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img src=\"./images/ao-thun.jpg\" alt=\"Áo thun Front-End\" width=\"80\" />\r\n      </td>\r\n      <td>Áo thun Front-End</td>\r\n      <td>2</td>\r\n      <td>150.000đ</td>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <img src=\"./images/mu-luoi-trai.jpg\" alt=\"Mũ lưỡi trai\" width=\"80\" />\r\n      </td>\r\n      <td>Mũ lưỡi trai</td>\r\n      <td>1</td>\r\n      <td>120.000đ</td>\r\n      <td>120.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n\r\n  <tfoot>\r\n    <tr>\r\n      <th colspan=\"4\">Tổng cộng</th>\r\n      <td>420.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"8\">\r\n  <thead>\r\n    <tr>\r\n      <th rowspan=\"2\">Hình ảnh</th>\r\n      <th rowspan=\"2\">Tên sản phẩm</th>\r\n      <th colspan=\"3\">Thông tin mua hàng</th>\r\n    </tr>\r\n    <tr>\r\n      <th>Số lượng</th>\r\n      <th>Đơn giá</th>\r\n      <th>Thành tiền</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img src=\"./images/ao-thun.jpg\" alt=\"Áo thun Front-End\" width=\"80\" />\r\n      </td>\r\n      <td>Áo thun Front-End</td>\r\n      <td>2</td>\r\n      <td>150.000đ</td>\r\n      <td>300.000đ</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <img src=\"./images/mu-luoi-trai.jpg\" alt=\"Mũ lưỡi trai\" width=\"80\" />\r\n      </td>\r\n      <td>Mũ lưỡi trai</td>\r\n      <td>1</td>\r\n      <td>120.000đ</td>\r\n      <td>120.000đ</td>\r\n    </tr>\r\n  </tbody>\r\n\r\n  <tfoot>\r\n    <tr>\r\n      <th colspan=\"4\">Tổng cộng</th>\r\n      <td>420.000đ</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\n</div>"
          }
        ]
      },
      {
        "id": "practice-registration-form",
        "title": "Form đăng ký",
        "description": "Bài thực hành này dùng để luyện form, input, label, select, option, textarea, button và các thuộc tính như name, placeholder, required, value.",
        "exampleText": "Một form đăng ký tài khoản có thể gồm họ tên, email, mật khẩu, tuổi, giới tính, tỉnh thành, kỹ năng, ảnh đại diện và nút đăng ký.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<form action=\"/register\" method=\"post\" enctype=\"multipart/form-data\">\r\n  Các trường đăng ký\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\" enctype=\"multipart/form-data\">\r\n  Các trường đăng ký\r\n  <button type=\"submit\">Đăng ký</button>\r\n</form>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<form action=\"/register\" method=\"post\" enctype=\"multipart/form-data\">\r\n  <div>\r\n    <label for=\"full-name\">Họ và tên</label>\r\n    <input id=\"full-name\" name=\"fullName\" type=\"text\" placeholder=\"Nhập họ và tên\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"email\">Email</label>\r\n    <input id=\"email\" name=\"email\" type=\"email\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"password\">Mật khẩu</label>\r\n    <input id=\"password\" name=\"password\" type=\"password\" minlength=\"8\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"age\">Tuổi</label>\r\n    <input id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" />\r\n  </div>\r\n\r\n  <fieldset>\r\n    <legend>Giới tính</legend>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"male\" checked /> Nam</label>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"female\" /> Nữ</label>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"other\" /> Khác</label>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <label for=\"city\">Tỉnh/thành phố</label>\r\n    <select id=\"city\" name=\"city\" required>\r\n      <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n      <option value=\"ha-noi\">Hà Nội</option>\r\n      <option value=\"da-nang\">Đà Nẵng</option>\r\n      <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n    </select>\r\n  </div>\r\n\r\n  <fieldset>\r\n    <legend>Kỹ năng</legend>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"html\" /> HTML</label>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"css\" /> CSS</label>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"javascript\" /> JavaScript</label>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <label for=\"avatar\">Ảnh đại diện</label>\r\n    <input id=\"avatar\" name=\"avatar\" type=\"file\" accept=\"image/*\" />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"bio\">Giới thiệu ngắn</label>\r\n    <textarea id=\"bio\" name=\"bio\" rows=\"4\"></textarea>\r\n  </div>\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n  <button type=\"reset\">Nhập lại</button>\r\n</form>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<form action=\"/register\" method=\"post\" enctype=\"multipart/form-data\">\r\n  <div>\r\n    <label for=\"full-name\">Họ và tên</label>\r\n    <input id=\"full-name\" name=\"fullName\" type=\"text\" placeholder=\"Nhập họ và tên\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"email\">Email</label>\r\n    <input id=\"email\" name=\"email\" type=\"email\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"password\">Mật khẩu</label>\r\n    <input id=\"password\" name=\"password\" type=\"password\" minlength=\"8\" required />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"age\">Tuổi</label>\r\n    <input id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" />\r\n  </div>\r\n\r\n  <fieldset>\r\n    <legend>Giới tính</legend>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"male\" checked /> Nam</label>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"female\" /> Nữ</label>\r\n    <label><input name=\"gender\" type=\"radio\" value=\"other\" /> Khác</label>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <label for=\"city\">Tỉnh/thành phố</label>\r\n    <select id=\"city\" name=\"city\" required>\r\n      <option value=\"\">-- Chọn tỉnh/thành phố --</option>\r\n      <option value=\"ha-noi\">Hà Nội</option>\r\n      <option value=\"da-nang\">Đà Nẵng</option>\r\n      <option value=\"ho-chi-minh\">Hồ Chí Minh</option>\r\n    </select>\r\n  </div>\r\n\r\n  <fieldset>\r\n    <legend>Kỹ năng</legend>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"html\" /> HTML</label>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"css\" /> CSS</label>\r\n    <label><input name=\"skills\" type=\"checkbox\" value=\"javascript\" /> JavaScript</label>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <label for=\"avatar\">Ảnh đại diện</label>\r\n    <input id=\"avatar\" name=\"avatar\" type=\"file\" accept=\"image/*\" />\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"bio\">Giới thiệu ngắn</label>\r\n    <textarea id=\"bio\" name=\"bio\" rows=\"4\"></textarea>\r\n  </div>\r\n\r\n  <button type=\"submit\">Đăng ký</button>\r\n  <button type=\"reset\">Nhập lại</button>\r\n</form>\n</div>"
          }
        ]
      },
      {
        "id": "practice-html5-layout",
        "title": "Layout HTML5 cơ bản",
        "description": "Bài thực hành này dùng để luyện các thẻ semantic HTML5 như header, nav, main, section, article, figure và figcaption. Mục tiêu là biết cách chia bố cục trang web có ý nghĩa rõ ràng.",
        "exampleText": "Một layout cơ bản có thể gồm header ở trên cùng, nav chứa menu, main chứa nội dung chính, nhiều section bên trong main và các article cho từng bài viết hoặc sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<body>\r\n  <header>...</header>\r\n  <nav>...</nav>\r\n  <main>\r\n    <section>\r\n      <article>...</article>\r\n    </section>\r\n  </main>\r\n  <footer>...</footer>\r\n</body>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<body>\r\n  <header>...</header>\r\n  <nav>...</nav>\r\n  <main>\r\n    <section>\r\n      <article>...</article>\r\n    </section>\r\n  </main>\r\n  <footer>...</footer>\r\n</body>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Blog Front-End</title>\r\n  </head>\r\n  <body>\r\n    <header>\r\n      <h1>Blog Front-End</h1>\r\n      <p>Chia sẻ kiến thức lập trình web.</p>\r\n    </header>\r\n\r\n    <nav aria-label=\"Điều hướng chính\">\r\n      <a href=\"#html\">HTML</a>\r\n      <a href=\"#css\">CSS</a>\r\n    </nav>\r\n\r\n    <main>\r\n      <section id=\"html\">\r\n        <h2>Kiến thức HTML</h2>\r\n\r\n        <article>\r\n          <h3>Semantic HTML5</h3>\r\n          <figure>\r\n            <img src=\"./images/semantic-html5.png\" alt=\"Sơ đồ Semantic HTML5\" />\r\n            <figcaption>Cấu trúc một trang web semantic.</figcaption>\r\n          </figure>\r\n          <p>Semantic HTML giúp cấu trúc trang rõ ràng hơn.</p>\r\n        </article>\r\n      </section>\r\n\r\n      <section id=\"css\">\r\n        <h2>Kiến thức CSS</h2>\r\n        <article>\r\n          <h3>CSS Layout</h3>\r\n          <p>Flexbox và Grid giúp xây dựng bố cục.</p>\r\n        </article>\r\n      </section>\r\n    </main>\r\n\r\n    <footer>\r\n      <p>&copy; 2026 Blog Front-End</p>\r\n    </footer>\r\n  </body>\r\n</html>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Blog Front-End</title>\r\n  </head>\r\n  <body>\r\n    <header>\r\n      <h1>Blog Front-End</h1>\r\n      <p>Chia sẻ kiến thức lập trình web.</p>\r\n    </header>\r\n\r\n    <nav aria-label=\"Điều hướng chính\">\r\n      <a href=\"#html\">HTML</a>\r\n      <a href=\"#css\">CSS</a>\r\n    </nav>\r\n\r\n    <main>\r\n      <section id=\"html\">\r\n        <h2>Kiến thức HTML</h2>\r\n\r\n        <article>\r\n          <h3>Semantic HTML5</h3>\r\n          <figure>\r\n            <img src=\"./images/semantic-html5.png\" alt=\"Sơ đồ Semantic HTML5\" />\r\n            <figcaption>Cấu trúc một trang web semantic.</figcaption>\r\n          </figure>\r\n          <p>Semantic HTML giúp cấu trúc trang rõ ràng hơn.</p>\r\n        </article>\r\n      </section>\r\n\r\n      <section id=\"css\">\r\n        <h2>Kiến thức CSS</h2>\r\n        <article>\r\n          <h3>CSS Layout</h3>\r\n          <p>Flexbox và Grid giúp xây dựng bố cục.</p>\r\n        </article>\r\n      </section>\r\n    </main>\r\n\r\n    <footer>\r\n      <p>&copy; 2026 Blog Front-End</p>\r\n    </footer>\r\n  </body>\r\n</html>\n</div>"
          }
        ]
      },
      {
        "id": "practice-html-knowledge-page",
        "title": "Trang lưu kiến thức HTML",
        "description": "Bài thực hành này là bài tổng hợp toàn bộ kiến thức HTML đã học. Trang có sidebar bên trái chứa danh sách tiêu đề, còn nội dung bên phải chứa từng nhóm kiến thức với phần giải thích và ví dụ.",
        "exampleText": "Trang HTML trong website Code Knowledge có thể chia thành các nhóm: cấu trúc HTML, văn bản và block, inline/link/image/path, table, form, input types, thuộc tính HTML, semantic HTML5 và thực hành.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<main class=\"html-page\">\r\n  <aside>\r\n    <nav>Danh sách kiến thức</nav>\r\n  </aside>\r\n\r\n  <section class=\"html-content\">\r\n    Các nhóm kiến thức\r\n  </section>\r\n</main>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<main class=\"html-page\">\r\n  <aside>\r\n    <nav>Danh sách kiến thức</nav>\r\n  </aside>\r\n\r\n  <section class=\"html-content\">\r\n    Các nhóm kiến thức\r\n  </section>\r\n</main>\n</div>"
          },
          {
            "title": "Ví dụ hoàn chỉnh",
            "code": "<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>HTML Knowledge</title>\r\n    <link rel=\"stylesheet\" href=\"../css/style.css\" />\r\n  </head>\r\n  <body>\r\n    <main class=\"html-page\">\r\n      <aside class=\"html-sidebar\">\r\n        <a href=\"../index.html\">Trang chủ</a>\r\n        <h2>HTML</h2>\r\n\r\n        <nav aria-label=\"Mục lục HTML\">\r\n          <a href=\"#basic-html\">Cấu trúc HTML</a>\r\n          <a href=\"#table-group\">Table</a>\r\n          <a href=\"#form-group\">Form</a>\r\n          <a href=\"#practice-group\">Thực hành</a>\r\n        </nav>\r\n      </aside>\r\n\r\n      <section class=\"html-content\">\r\n        <section class=\"html-group\" id=\"basic-html\">\r\n          <h2>Cấu trúc HTML cơ bản</h2>\r\n          <article class=\"html-card\">\r\n            <h3>DOCTYPE</h3>\r\n            <p>DOCTYPE khai báo loại tài liệu HTML.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"table-group\">\r\n          <h2>Table</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Table</h3>\r\n            <p>Table dùng để hiển thị dữ liệu dạng hàng và cột.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"form-group\">\r\n          <h2>Form</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Form</h3>\r\n            <p>Form dùng để thu thập dữ liệu người dùng.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"practice-group\">\r\n          <h2>Thực hành HTML</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Trang giới thiệu cá nhân</h3>\r\n            <p>Bài thực hành tổng hợp kiến thức HTML cơ bản.</p>\r\n          </article>\r\n        </section>\r\n      </section>\r\n    </main>\r\n  </body>\r\n</html>",
            "preview": "<div style=\"padding: 16px; font-family: sans-serif; background: #fff; color: #333;\">\n<!DOCTYPE html>\r\n<html lang=\"vi\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>HTML Knowledge</title>\r\n    <link rel=\"stylesheet\" href=\"../css/style.css\" />\r\n  </head>\r\n  <body>\r\n    <main class=\"html-page\">\r\n      <aside class=\"html-sidebar\">\r\n        <a href=\"../index.html\">Trang chủ</a>\r\n        <h2>HTML</h2>\r\n\r\n        <nav aria-label=\"Mục lục HTML\">\r\n          <a href=\"#basic-html\">Cấu trúc HTML</a>\r\n          <a href=\"#table-group\">Table</a>\r\n          <a href=\"#form-group\">Form</a>\r\n          <a href=\"#practice-group\">Thực hành</a>\r\n        </nav>\r\n      </aside>\r\n\r\n      <section class=\"html-content\">\r\n        <section class=\"html-group\" id=\"basic-html\">\r\n          <h2>Cấu trúc HTML cơ bản</h2>\r\n          <article class=\"html-card\">\r\n            <h3>DOCTYPE</h3>\r\n            <p>DOCTYPE khai báo loại tài liệu HTML.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"table-group\">\r\n          <h2>Table</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Table</h3>\r\n            <p>Table dùng để hiển thị dữ liệu dạng hàng và cột.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"form-group\">\r\n          <h2>Form</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Form</h3>\r\n            <p>Form dùng để thu thập dữ liệu người dùng.</p>\r\n          </article>\r\n        </section>\r\n\r\n        <section class=\"html-group\" id=\"practice-group\">\r\n          <h2>Thực hành HTML</h2>\r\n          <article class=\"html-card\">\r\n            <h3>Trang giới thiệu cá nhân</h3>\r\n            <p>Bài thực hành tổng hợp kiến thức HTML cơ bản.</p>\r\n          </article>\r\n        </section>\r\n      </section>\r\n    </main>\r\n  </body>\r\n</html>\n</div>"
          }
        ]
      }
    ]
  }
];
