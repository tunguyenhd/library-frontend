import type { KnowledgeGroup } from "../types/knowledge";

export const htmlGroups: KnowledgeGroup[] = [
    {
        "label":  "Nhóm 1",
        "title":  "Cấu trúc HTML cơ bản",
        "cards":  [
                      {
                          "id":  "doctype",
                          "title":  "DOCTYPE",
                          "description":  "DOCTYPE dùng để khai báo cho trình duyệt biết tài liệu hiện tại đang sử dụng phiên bản HTML nào. Với HTML5, cú pháp DOCTYPE rất ngắn gọn và luôn được đặt ở dòng đầu tiên của file HTML.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003c!DOCTYPE html\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n\u003chead\u003e\r\n  \u003ctitle\u003eTrang HTML đầu tiên\u003c/title\u003e\r\n\u003c/head\u003e\r\n\u003cbody\u003e\r\n  \u003ch1\u003eXin chào HTML\u003c/h1\u003e\r\n\u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "html",
                          "title":  "Thẻ html",
                          "description":  "Thẻ html là thẻ gốc của toàn bộ tài liệu HTML. Tất cả nội dung của trang web đều nằm bên trong thẻ này. Bên trong thẻ html thường có hai phần chính là head và body.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003chtml lang=\"vi\"\u003e\r\n  ...\r\n\u003c/html\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e\r\n    \u003ctitle\u003eCode Knowledge\u003c/title\u003e\r\n  \u003c/head\u003e\r\n\r\n  \u003cbody\u003e\r\n    \u003ch1\u003eHọc HTML\u003c/h1\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "head",
                          "title":  "Thẻ head",
                          "description":  "Thẻ head chứa các thông tin cấu hình của trang web. Nội dung trong head thường không hiển thị trực tiếp trên giao diện, nhưng rất quan trọng cho trình duyệt, SEO, CSS và khả năng responsive.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003chead\u003e\r\n  \u003cmeta charset=\"UTF-8\" /\u003e\r\n  \u003ctitle\u003eTên trang\u003c/title\u003e\r\n\u003c/head\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003chead\u003e\r\n  \u003cmeta charset=\"UTF-8\" /\u003e\r\n  \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n  \u003ctitle\u003eHTML Knowledge\u003c/title\u003e\r\n  \u003clink rel=\"stylesheet\" href=\"../css/style.css\" /\u003e\r\n\u003c/head\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "meta-charset",
                          "title":  "Meta charset",
                          "description":  "Meta charset dùng để khai báo bảng mã ký tự cho trang web. Thường sử dụng UTF-8 để trình duyệt hiển thị đúng tiếng Việt và các ký tự đặc biệt.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cmeta charset=\"UTF-8\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003chead\u003e\r\n  \u003cmeta charset=\"UTF-8\" /\u003e\r\n  \u003ctitle\u003eTrang tiếng Việt\u003c/title\u003e\r\n\u003c/head\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "meta-viewport",
                          "title":  "Meta viewport",
                          "description":  "Meta viewport giúp website hiển thị tốt trên nhiều kích thước màn hình, đặc biệt là điện thoại. Đây là thẻ gần như luôn có trong các trang web hiện đại.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003chead\u003e\r\n  \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n\u003c/head\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "title",
                          "title":  "Thẻ title",
                          "description":  "Thẻ title dùng để đặt tiêu đề cho trang web. Nội dung của title sẽ hiển thị trên tab trình duyệt và có ảnh hưởng đến SEO.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctitle\u003eTên trang web\u003c/title\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003chead\u003e\r\n  \u003ctitle\u003eCode Knowledge - HTML\u003c/title\u003e\r\n\u003c/head\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "body",
                          "title":  "Thẻ body",
                          "description":  "Thẻ body chứa toàn bộ nội dung hiển thị ra trình duyệt, ví dụ như tiêu đề, đoạn văn, hình ảnh, liên kết, bảng, form và các thành phần giao diện khác.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cbody\u003e\r\n  Nội dung hiển thị trên trình duyệt\r\n\u003c/body\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cbody\u003e\r\n  \u003ch1\u003eHTML Knowledge\u003c/h1\u003e\r\n  \u003cp\u003eĐây là trang lưu kiến thức HTML.\u003c/p\u003e\r\n  \u003ca href=\"../index.html\"\u003eQuay về trang chủ\u003c/a\u003e\r\n\u003c/body\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 2",
        "title":  "Văn bản \u0026 Block elements",
        "cards":  [
                      {
                          "id":  "heading",
                          "title":  "Heading",
                          "description":  "Heading là nhóm thẻ tiêu đề trong HTML, gồm từ h1 đến h6. Trong đó h1 là tiêu đề quan trọng nhất, h6 là tiêu đề có cấp thấp nhất. Heading giúp phân cấp nội dung rõ ràng hơn cho người đọc và công cụ tìm kiếm.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ch1\u003eTiêu đề cấp 1\u003c/h1\u003e\r\n\u003ch2\u003eTiêu đề cấp 2\u003c/h2\u003e\r\n\u003ch3\u003eTiêu đề cấp 3\u003c/h3\u003e\r\n\u003ch4\u003eTiêu đề cấp 4\u003c/h4\u003e\r\n\u003ch5\u003eTiêu đề cấp 5\u003c/h5\u003e\r\n\u003ch6\u003eTiêu đề cấp 6\u003c/h6\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ch1\u003eHọc lập trình Front-End\u003c/h1\u003e\r\n\u003ch2\u003eHTML cơ bản\u003c/h2\u003e\r\n\u003ch3\u003eCấu trúc HTML\u003c/h3\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "paragraph",
                          "title":  "Paragraph",
                          "description":  "Thẻ p dùng để tạo đoạn văn bản trong HTML. Mỗi đoạn nội dung nên được đặt trong một thẻ p riêng để cấu trúc văn bản rõ ràng.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cp\u003eNội dung đoạn văn bản\u003c/p\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003e\r\n  HTML là ngôn ngữ dùng để xây dựng cấu trúc nội dung của trang web.\r\n\u003c/p\u003e\r\n\r\n\u003cp\u003e\r\n  CSS dùng để định dạng giao diện, màu sắc, bố cục và hiệu ứng.\r\n\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "comment",
                          "title":  "Comment",
                          "description":  "Comment dùng để ghi chú trong code HTML. Nội dung comment không hiển thị ra trình duyệt. Comment thường dùng để giải thích code hoặc chia khu vực trong file HTML.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003c!-- Nội dung ghi chú --\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!-- Phần tiêu đề trang --\u003e\r\n\u003ch1\u003eCode Knowledge\u003c/h1\u003e\r\n\r\n\u003c!-- Phần mô tả --\u003e\r\n\u003cp\u003eWebsite lưu kiến thức lập trình Front-End.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "div",
                          "title":  "Thẻ div",
                          "description":  "Thẻ div là một block element dùng để nhóm các phần tử HTML lại với nhau. Div không mang ý nghĩa nội dung cụ thể, thường được dùng để chia layout hoặc bọc nội dung để CSS.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cdiv\u003e\r\n  Nội dung bên trong div\r\n\u003c/div\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cdiv class=\"course-card\"\u003e\r\n  \u003ch2\u003eHTML cơ bản\u003c/h2\u003e\r\n  \u003cp\u003eHọc cách xây dựng cấu trúc trang web bằng HTML.\u003c/p\u003e\r\n\u003c/div\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "ordered-list",
                          "title":  "Ordered list",
                          "description":  "Ordered list là danh sách có thứ tự. Thẻ ol dùng để tạo danh sách, còn thẻ li dùng để tạo từng mục trong danh sách. Trình duyệt sẽ tự đánh số cho các mục.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003col\u003e\r\n  \u003cli\u003eMục thứ nhất\u003c/li\u003e\r\n  \u003cli\u003eMục thứ hai\u003c/li\u003e\r\n  \u003cli\u003eMục thứ ba\u003c/li\u003e\r\n\u003c/ol\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ch2\u003eLộ trình học Front-End\u003c/h2\u003e\r\n\r\n\u003col\u003e\r\n  \u003cli\u003eHọc HTML\u003c/li\u003e\r\n  \u003cli\u003eHọc CSS\u003c/li\u003e\r\n  \u003cli\u003eHọc JavaScript\u003c/li\u003e\r\n  \u003cli\u003eHọc ReactJS\u003c/li\u003e\r\n\u003c/ol\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "blockquote",
                          "title":  "Blockquote",
                          "description":  "Thẻ blockquote dùng để hiển thị một đoạn trích dẫn dài. Nội dung bên trong blockquote thường được trình duyệt hiển thị thụt vào so với nội dung bình thường.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cblockquote\u003e\r\n  Nội dung trích dẫn\r\n\u003c/blockquote\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cblockquote\u003e\r\n  \u003cp\u003eHọc lập trình là quá trình luyện tập tư duy giải quyết vấn đề.\u003c/p\u003e\r\n\u003c/blockquote\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "pre",
                          "title":  "Thẻ pre",
                          "description":  "Thẻ pre dùng để hiển thị nội dung và giữ nguyên khoảng trắng, tab, xuống dòng như trong mã nguồn. Thẻ này thường được dùng khi muốn hiển thị code hoặc nội dung cần giữ nguyên định dạng.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cpre\u003e\r\n  Nội dung được giữ nguyên định dạng\r\n\u003c/pre\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cpre\u003e\r\nDòng 1\r\n    Dòng 2 có khoảng trắng phía trước\r\n        Dòng 3 có khoảng trắng nhiều hơn\r\n\u003c/pre\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "entities",
                          "title":  "HTML entities",
                          "description":  "HTML entities dùng để hiển thị các ký tự đặc biệt trong HTML. Một số ký tự như dấu nhỏ hơn, lớn hơn hoặc nhiều khoảng trắng liên tiếp cần viết bằng entity để trình duyệt hiển thị đúng.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Một số entities thường dùng",
                                                 "code":  "\u0026lt;    hiển thị dấu \u003c\r\n\u0026gt;    hiển thị dấu \u003e\r\n\u0026nbsp;  hiển thị khoảng trắng\r\n\u0026amp;   hiển thị dấu \u0026"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eHiển thị thẻ h1 dưới dạng văn bản:\u003c/p\u003e\r\n\r\n\u003cpre\u003e\r\n\u0026lt;h1\u0026gt;HTML Knowledge\u0026lt;/h1\u0026gt;\r\n\u003c/pre\u003e\r\n\r\n\u003cp\u003eNguyễn Văn A\u0026nbsp;\u0026nbsp;\u0026nbsp;Front-End Developer\u003c/p\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 3",
        "title":  "Văn bản inline, liên kết \u0026 hình ảnh",
        "cards":  [
                      {
                          "id":  "span",
                          "title":  "Span",
                          "description":  "Span là thẻ inline dùng để bọc một phần nhỏ trong nội dung văn bản. Bản thân span không làm thay đổi giao diện nếu chưa có CSS. Thẻ này thường được dùng khi muốn định dạng hoặc xử lý riêng một đoạn chữ.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cspan\u003eNội dung văn bản\u003c/span\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eKhóa học \u003cspan class=\"highlight\"\u003eFullstack\u003c/span\u003e tại F8.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "bold",
                          "title":  "Bold",
                          "description":  "Bold dùng để làm chữ đậm về mặt hiển thị. Thẻ b chỉ thể hiện kiểu chữ đậm và không mang nhiều ý nghĩa nhấn mạnh về mặt nội dung.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cb\u003eNội dung in đậm\u003c/b\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eKhóa học tại \u003cb\u003eF8\u003c/b\u003e.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "strong",
                          "title":  "Strong",
                          "description":  "Strong cũng làm chữ đậm nhưng mang ý nghĩa nhấn mạnh nội dung. Trình duyệt thường hiển thị strong giống chữ đậm, tuy nhiên về semantic thì nội dung này quan trọng hơn.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cstrong\u003eNội dung quan trọng\u003c/strong\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003e\u003cstrong\u003eKhông được\u003c/strong\u003e bỏ trống email.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "italic",
                          "title":  "Italic",
                          "description":  "Italic dùng để làm chữ nghiêng về mặt hiển thị. Thẻ i thường dùng cho tên riêng, thuật ngữ, tên sách, tên tác phẩm hoặc một đoạn chữ cần hiển thị khác biệt.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ci\u003eNội dung in nghiêng\u003c/i\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eHTML là viết tắt của \u003ci\u003eHyperText Markup Language\u003c/i\u003e.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "emphasis",
                          "title":  "Emphasis",
                          "description":  "Emphasis dùng để nhấn mạnh nội dung về mặt ngữ nghĩa. Trình duyệt thường hiển thị thẻ em bằng chữ nghiêng.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cem\u003eNội dung cần nhấn mạnh\u003c/em\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eBạn \u003cem\u003enên\u003c/em\u003e học HTML trước khi học CSS.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "underline",
                          "title":  "Underline",
                          "description":  "Underline dùng để gạch chân văn bản. Cần sử dụng cẩn thận vì người dùng có thể nhầm chữ gạch chân với một liên kết.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cu\u003eNội dung được gạch chân\u003c/u\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eĐây là \u003cu\u003enội dung quan trọng\u003c/u\u003e trong ghi chú.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "inserted-text",
                          "title":  "Inserted text",
                          "description":  "Inserted text dùng để biểu thị nội dung mới được thêm vào tài liệu. Trình duyệt thường hiển thị nội dung trong thẻ ins bằng chữ gạch chân.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cins\u003eNội dung mới được thêm\u003c/ins\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eBài học đã bổ sung phần \u003cins\u003eHTML semantic\u003c/ins\u003e.\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "strikethrough",
                          "title":  "Strikethrough",
                          "description":  "Strikethrough dùng để gạch ngang nội dung không còn chính xác hoặc không còn phù hợp. Nội dung vẫn hiển thị nhưng được đánh dấu là không nên dùng.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cs\u003eNội dung không còn phù hợp\u003c/s\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eGiá cũ: \u003cs\u003e500.000đ\u003c/s\u003e\u003c/p\u003e\r\n\u003cp\u003eGiá mới: 300.000đ\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "deleted-text",
                          "title":  "Deleted text",
                          "description":  "Deleted text dùng để biểu thị nội dung đã bị xóa khỏi tài liệu. Thẻ del mang ý nghĩa semantic rõ hơn so với cách gạch ngang chỉ để trình bày.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cdel\u003eNội dung đã bị xóa\u003c/del\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003eNội dung cũ: \u003cdel\u003eHTML dùng để tạo kiểu cho trang web.\u003c/del\u003e\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "line-break",
                          "title":  "Line break",
                          "description":  "Line break dùng để xuống dòng trong cùng một đoạn nội dung. Không nên lạm dụng thẻ br để tạo bố cục vì việc căn chỉnh giao diện nên được xử lý bằng CSS.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "Dòng thứ nhất\u003cbr /\u003e\r\nDòng thứ hai"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cp\u003e\r\n  F8 Education\u003cbr /\u003e\r\n  Cầu Giấy\u003cbr /\u003e\r\n  Hà Nội\r\n\u003c/p\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "link",
                          "title":  "Link",
                          "description":  "Link dùng để tạo liên kết đến một trang khác, một file khác, một website bên ngoài hoặc một vị trí trong cùng trang. Đây là một trong những thành phần quan trọng nhất của website.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ca href=\"URL\"\u003eNội dung liên kết\u003c/a\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca href=\"https://github.com/username\"\u003eMy GitHub\u003c/a\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "link-target",
                          "title":  "Target trong link",
                          "description":  "Thuộc tính target quyết định cách liên kết được mở. Giá trị _self mở link trong tab hiện tại, còn _blank mở link trong một tab mới.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ca href=\"URL\" target=\"_blank\"\u003eNội dung liên kết\u003c/a\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n\u003e\r\n  My GitHub\r\n\u003c/a\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "internal-link",
                          "title":  "Link nội bộ",
                          "description":  "Link nội bộ dùng để điều hướng đến một phần cụ thể trong cùng một trang. Giá trị href trỏ đến id của phần nội dung đích.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ca href=\"#ten-id\"\u003eĐi tới nội dung\u003c/a\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca href=\"#image\"\u003eĐi tới phần Image\u003c/a\u003e\r\n\r\n\u003csection id=\"image\"\u003e\r\n  \u003ch2\u003eImage\u003c/h2\u003e\r\n\u003c/section\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "image",
                          "title":  "Image",
                          "description":  "Image dùng để hiển thị hình ảnh trên trang web. Một hình ảnh thường cần đường dẫn src, mô tả alt, tiêu đề title và kích thước hiển thị. Nội dung alt sẽ hỗ trợ người dùng khi ảnh không tải được.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cimg src=\"duong-dan-anh\" alt=\"Mô tả ảnh\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc website\"\r\n  title=\"Cấu trúc HTML\"\r\n  width=\"640\"\r\n  height=\"360\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "absolute-path",
                          "title":  "Absolute path",
                          "description":  "Absolute path là đường dẫn tuyệt đối. Đường dẫn này thường bắt đầu từ gốc website hoặc bao gồm đầy đủ giao thức và tên miền.",
                          "exampleText":  null,
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "/images/logo.png\r\nhttps://example.com/images/logo.png"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg src=\"/images/logo.png\" alt=\"Logo website\" /\u003e\r\n\r\n\u003ca href=\"https://example.com/about\"\u003eTrang giới thiệu\u003c/a\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "relative-path",
                          "title":  "Relative path",
                          "description":  "Relative path là đường dẫn tương đối và phụ thuộc vào vị trí của file hiện tại. Đây là loại đường dẫn thường dùng để liên kết giữa các file trong cùng một project.",
                          "exampleText":  "Từ file html.html trong thư mục pages, muốn quay về index.html ở ngoài thư mục cha thì cần đi lùi ra một cấp rồi mới trỏ đến index.html.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "./file-cung-thu-muc.html\r\n../file-o-thu-muc-cha.html"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg src=\"../images/logo.png\" alt=\"Logo website\" /\u003e\r\n\r\n\u003ca href=\"../index.html\"\u003eQuay về trang chủ\u003c/a\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 4",
        "title":  "Table",
        "cards":  [
                      {
                          "id":  "table",
                          "title":  "Table",
                          "description":  "Table dùng để tạo bảng trong HTML. Bảng thường dùng để hiển thị dữ liệu có dạng hàng và cột, ví dụ bảng điểm, bảng sản phẩm, bảng thống kê hoặc bảng doanh thu.",
                          "exampleText":  "Một bảng danh sách học viên có thể gồm các cột: STT, họ tên, email và số điện thoại.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003eNội dung ô\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003cth\u003eSTT\u003c/th\u003e\r\n    \u003cth\u003eHọ tên\u003c/th\u003e\r\n    \u003cth\u003eEmail\u003c/th\u003e\r\n    \u003cth\u003eSố điện thoại\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003e1\u003c/td\u003e\r\n    \u003ctd\u003eNguyễn Văn A\u003c/td\u003e\r\n    \u003ctd\u003ea@example.com\u003c/td\u003e\r\n    \u003ctd\u003e0901 234 567\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-row",
                          "title":  "Table row",
                          "description":  "Table row là hàng trong bảng và được tạo bằng thẻ tr. Mỗi hàng sẽ chứa các ô dữ liệu hoặc ô tiêu đề. Một bảng thường có nhiều hàng.",
                          "exampleText":  "Trong bảng học viên, mỗi học viên sẽ nằm trên một hàng riêng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctr\u003e\r\n  \u003ctd\u003eNội dung ô thứ nhất\u003c/td\u003e\r\n  \u003ctd\u003eNội dung ô thứ hai\u003c/td\u003e\r\n\u003c/tr\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003e1\u003c/td\u003e\r\n    \u003ctd\u003eNguyễn Văn A\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003e2\u003c/td\u003e\r\n    \u003ctd\u003eTrần Thị B\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-heading",
                          "title":  "Table heading",
                          "description":  "Table heading là ô tiêu đề của bảng và được tạo bằng thẻ th. Nội dung trong ô tiêu đề thường được trình duyệt hiển thị đậm và căn giữa mặc định.",
                          "exampleText":  "Trong bảng sản phẩm, các tiêu đề “Tên sản phẩm”, “Số lượng”, “Đơn giá” và “Thành tiền” có thể là table heading.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cth\u003eNội dung tiêu đề\u003c/th\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctr\u003e\r\n  \u003cth\u003eTên sản phẩm\u003c/th\u003e\r\n  \u003cth\u003eSố lượng\u003c/th\u003e\r\n  \u003cth\u003eĐơn giá\u003c/th\u003e\r\n  \u003cth\u003eThành tiền\u003c/th\u003e\r\n\u003c/tr\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-data",
                          "title":  "Table data",
                          "description":  "Table data là ô dữ liệu trong bảng và được tạo bằng thẻ td. Đây là nơi chứa nội dung thật của từng hàng, từng cột.",
                          "exampleText":  "Trong bảng sản phẩm, “Áo thun”, “2”, “150.000đ” và “300.000đ” là các table data.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctd\u003eNội dung dữ liệu\u003c/td\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctr\u003e\r\n  \u003ctd\u003eÁo thun\u003c/td\u003e\r\n  \u003ctd\u003e2\u003c/td\u003e\r\n  \u003ctd\u003e150.000đ\u003c/td\u003e\r\n  \u003ctd\u003e300.000đ\u003c/td\u003e\r\n\u003c/tr\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-head",
                          "title":  "Table head",
                          "description":  "Table head dùng thẻ thead để nhóm phần đầu của bảng. Phần này thường chứa các hàng tiêu đề, giúp cấu trúc bảng rõ ràng hơn.",
                          "exampleText":  "Trong bảng doanh thu, phần table head có thể chứa các cột “Tháng”, “Doanh thu”, “Chi phí” và “Lợi nhuận”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cthead\u003e\r\n  \u003ctr\u003e\r\n    \u003cth\u003eTiêu đề cột\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n\u003c/thead\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003cthead\u003e\r\n    \u003ctr\u003e\r\n      \u003cth\u003eTháng\u003c/th\u003e\r\n      \u003cth\u003eDoanh thu\u003c/th\u003e\r\n      \u003cth\u003eChi phí\u003c/th\u003e\r\n      \u003cth\u003eLợi nhuận\u003c/th\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/thead\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-body",
                          "title":  "Table body",
                          "description":  "Table body dùng thẻ tbody để nhóm phần thân của bảng. Đây là nơi chứa dữ liệu chính của bảng.",
                          "exampleText":  "Trong bảng doanh thu, phần table body sẽ chứa dữ liệu từng tháng như tháng 1, tháng 2 và tháng 3.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctbody\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003eDữ liệu\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/tbody\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctbody\u003e\r\n    \u003ctr\u003e\r\n      \u003ctd\u003eTháng 1\u003c/td\u003e\r\n      \u003ctd\u003e20.000.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n    \u003ctr\u003e\r\n      \u003ctd\u003eTháng 2\u003c/td\u003e\r\n      \u003ctd\u003e25.000.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tbody\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "table-foot",
                          "title":  "Table foot",
                          "description":  "Table foot dùng thẻ tfoot để nhóm phần cuối của bảng. Phần này thường dùng để hiển thị tổng cộng, ghi chú hoặc kết quả cuối cùng.",
                          "exampleText":  "Trong bảng sản phẩm, phần table foot có thể chứa dòng “Tổng cộng” và tổng số tiền cần thanh toán.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctfoot\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003eNội dung cuối bảng\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/tfoot\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctfoot\u003e\r\n    \u003ctr\u003e\r\n      \u003cth\u003eTổng cộng\u003c/th\u003e\r\n      \u003ctd\u003e600.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tfoot\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "colspan",
                          "title":  "Colspan",
                          "description":  "Colspan dùng để gộp nhiều cột thành một ô. Thuộc tính này thường dùng khi muốn tạo tiêu đề lớn hoặc dòng tổng kết trải dài qua nhiều cột.",
                          "exampleText":  "Trong bảng sản phẩm, dòng “Thông tin sản phẩm” có thể gộp hai cột “Hình ảnh” và “Tên sản phẩm”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctd colspan=\"2\"\u003eNội dung gộp hai cột\u003c/td\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003cth colspan=\"2\"\u003eThông tin sản phẩm\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n  \u003ctr\u003e\r\n    \u003cth\u003eHình ảnh\u003c/th\u003e\r\n    \u003cth\u003eTên sản phẩm\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "rowspan",
                          "title":  "Rowspan",
                          "description":  "Rowspan dùng để gộp nhiều hàng thành một ô. Thuộc tính này thường dùng khi một ô cần được dùng chung cho nhiều hàng.",
                          "exampleText":  "Trong bảng sản phẩm, cột “Số lượng” có thể được gộp theo chiều dọc nếu phần tiêu đề chiếm hai hàng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctd rowspan=\"2\"\u003eNội dung gộp hai hàng\u003c/td\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003cth rowspan=\"2\"\u003eSố lượng\u003c/th\u003e\r\n    \u003cth colspan=\"2\"\u003eGiá\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n  \u003ctr\u003e\r\n    \u003cth\u003eĐơn giá\u003c/th\u003e\r\n    \u003cth\u003eThành tiền\u003c/th\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "cellspacing",
                          "title":  "Cellspacing",
                          "description":  "Cellspacing là thuộc tính cũ dùng để tạo khoảng cách giữa các ô trong bảng. Nếu đặt cellspacing bằng 0, các ô sẽ sát nhau hơn. Trong HTML5 nên dùng thuộc tính CSS border-spacing hoặc border-collapse.",
                          "exampleText":  "Khi muốn bảng sản phẩm có đường viền liền mạch, có thể đặt khoảng cách giữa các ô bằng 0.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctable cellspacing=\"0\"\u003e\r\n  ...\r\n\u003c/table\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!-- Cách cũ --\u003e\r\n\u003ctable border=\"1\" cellspacing=\"0\"\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd\u003eSản phẩm\u003c/td\u003e\r\n    \u003ctd\u003eSố lượng\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e\r\n\r\n\u003c!-- Cách dùng CSS hiện đại --\u003e\r\n\u003ctable style=\"border-collapse: collapse;\"\u003e\r\n  ...\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "cellpadding",
                          "title":  "Cellpadding",
                          "description":  "Cellpadding là thuộc tính cũ dùng để tạo khoảng cách giữa nội dung và đường viền của ô. Khoảng đệm giúp nội dung không bị dính sát vào viền. Trong HTML5 nên dùng thuộc tính CSS padding cho th và td.",
                          "exampleText":  "Nếu chữ “Tên sản phẩm” nằm quá sát viền ô, có thể tăng cellpadding để bảng dễ đọc hơn.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctable cellpadding=\"8\"\u003e\r\n  ...\r\n\u003c/table\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!-- Cách cũ --\u003e\r\n\u003ctable border=\"1\" cellpadding=\"12\"\u003e\r\n  \u003ctr\u003e\r\n    \u003cth\u003eTên sản phẩm\u003c/th\u003e\r\n    \u003ctd\u003eÁo thun\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e\r\n\r\n\u003c!-- Cách dùng CSS hiện đại --\u003e\r\n\u003ctd style=\"padding: 12px;\"\u003eÁo thun\u003c/td\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "product-table",
                          "title":  "Table sản phẩm",
                          "description":  "Table sản phẩm là dạng bảng thực hành tổng hợp nhiều kiến thức về table. Bảng có thể dùng hình ảnh, tên sản phẩm, số lượng, đơn giá, thành tiền, gộp cột, gộp hàng và dòng tổng cộng.",
                          "exampleText":  "Một bảng giỏ hàng có thể gồm hình ảnh sản phẩm, tên sản phẩm, số lượng, đơn giá, thành tiền và tổng cộng cuối bảng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctable\u003e\r\n  \u003cthead\u003e...\u003c/thead\u003e\r\n  \u003ctbody\u003e...\u003c/tbody\u003e\r\n  \u003ctfoot\u003e...\u003c/tfoot\u003e\r\n\u003c/table\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable border=\"1\" cellspacing=\"0\" cellpadding=\"8\"\u003e\r\n  \u003cthead\u003e\r\n    \u003ctr\u003e\r\n      \u003cth rowspan=\"2\"\u003eHình ảnh\u003c/th\u003e\r\n      \u003cth rowspan=\"2\"\u003eTên sản phẩm\u003c/th\u003e\r\n      \u003cth colspan=\"3\"\u003eThông tin mua hàng\u003c/th\u003e\r\n    \u003c/tr\u003e\r\n    \u003ctr\u003e\r\n      \u003cth\u003eSố lượng\u003c/th\u003e\r\n      \u003cth\u003eĐơn giá\u003c/th\u003e\r\n      \u003cth\u003eThành tiền\u003c/th\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/thead\u003e\r\n  \u003ctbody\u003e\r\n    \u003ctr\u003e\r\n      \u003ctd\u003e\r\n        \u003cimg src=\"../images/ao-thun.jpg\" alt=\"Áo thun\" width=\"80\" /\u003e\r\n      \u003c/td\u003e\r\n      \u003ctd\u003eÁo thun Front-End\u003c/td\u003e\r\n      \u003ctd\u003e2\u003c/td\u003e\r\n      \u003ctd\u003e150.000đ\u003c/td\u003e\r\n      \u003ctd\u003e300.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tbody\u003e\r\n  \u003ctfoot\u003e\r\n    \u003ctr\u003e\r\n      \u003cth colspan=\"4\"\u003eTổng cộng\u003c/th\u003e\r\n      \u003ctd\u003e300.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tfoot\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 5",
        "title":  "Form \u0026 Semantic HTML5",
        "cards":  [
                      {
                          "id":  "form",
                          "title":  "Form",
                          "description":  "Form dùng để thu thập dữ liệu người dùng nhập vào trên website. Form thường được dùng trong đăng nhập, đăng ký, tìm kiếm, liên hệ, đặt hàng hoặc gửi phản hồi.",
                          "exampleText":  "Một form đăng ký tài khoản có thể gồm họ tên, email, mật khẩu, giới tính, tỉnh thành và nút đăng ký.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cform action=\"URL-xu-ly\" method=\"post\"\u003e\r\n  Các trường nhập dữ liệu\r\n\u003c/form\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  \u003clabel for=\"full-name\"\u003eHọ tên\u003c/label\u003e\r\n  \u003cinput id=\"full-name\" name=\"fullName\" type=\"text\" required /\u003e\r\n\r\n  \u003clabel for=\"email\"\u003eEmail\u003c/label\u003e\r\n  \u003cinput id=\"email\" name=\"email\" type=\"email\" required /\u003e\r\n\r\n  \u003clabel for=\"password\"\u003eMật khẩu\u003c/label\u003e\r\n  \u003cinput id=\"password\" name=\"password\" type=\"password\" required /\u003e\r\n\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "form-action",
                          "title":  "Action",
                          "description":  "Action là nơi dữ liệu form sẽ được gửi đến sau khi người dùng bấm nút submit. Giá trị của action thường là một URL hoặc một API xử lý dữ liệu.",
                          "exampleText":  "Khi người dùng gửi form liên hệ, dữ liệu có thể được gửi đến một trang backend hoặc API server.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cform action=\"URL-xu-ly\"\u003e\r\n  ...\r\n\u003c/form\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/api/contact\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" /\u003e\r\n  \u003ctextarea name=\"message\"\u003e\u003c/textarea\u003e\r\n  \u003cbutton type=\"submit\"\u003eGửi liên hệ\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "method-get",
                          "title":  "Method GET",
                          "description":  "GET là phương thức gửi dữ liệu form thông qua URL. Dữ liệu sẽ hiển thị trên thanh địa chỉ trình duyệt, nên thường dùng cho tìm kiếm, lọc dữ liệu hoặc truy vấn không chứa thông tin nhạy cảm.",
                          "exampleText":  "Một form tìm kiếm sản phẩm có thể dùng GET để đưa từ khóa tìm kiếm lên URL.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cform action=\"/search\" method=\"get\"\u003e\r\n  ...\r\n\u003c/form\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/products\" method=\"get\"\u003e\r\n  \u003clabel for=\"keyword\"\u003eTìm sản phẩm\u003c/label\u003e\r\n  \u003cinput id=\"keyword\" name=\"q\" type=\"search\" /\u003e\r\n  \u003cbutton type=\"submit\"\u003eTìm kiếm\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- URL có thể trở thành: /products?q=ao+thun --\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "method-post",
                          "title":  "Method POST",
                          "description":  "POST là phương thức gửi dữ liệu form trong phần body của request nên dữ liệu không hiển thị trực tiếp trên URL. POST thường dùng cho đăng nhập, đăng ký, gửi bình luận hoặc thay đổi dữ liệu. Vẫn cần dùng HTTPS để bảo vệ dữ liệu khi truyền.",
                          "exampleText":  "Một form đăng ký tài khoản nên dùng POST vì có email, mật khẩu và thông tin cá nhân.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  ...\r\n\u003c/form\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" required /\u003e\r\n  \u003cinput name=\"password\" type=\"password\" required /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "input",
                          "title":  "Input",
                          "description":  "Input là thẻ dùng để tạo ô nhập dữ liệu. Input có nhiều loại khác nhau như text, email, password, number, file, radio và checkbox.",
                          "exampleText":  "Form đăng ký có thể dùng input text cho họ tên, input email cho email và input password cho mật khẩu.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" name=\"ten-truong\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cinput name=\"fullName\" type=\"text\" /\u003e\r\n\u003cinput name=\"email\" type=\"email\" /\u003e\r\n\u003cinput name=\"password\" type=\"password\" /\u003e\r\n\u003cinput name=\"age\" type=\"number\" /\u003e\r\n\u003cinput name=\"avatar\" type=\"file\" /\u003e\r\n\u003cinput name=\"gender\" type=\"radio\" value=\"male\" /\u003e\r\n\u003cinput name=\"terms\" type=\"checkbox\" value=\"accepted\" /\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "name",
                          "title":  "Name",
                          "description":  "Name là tên của trường dữ liệu khi form được gửi đi. Nếu input không có thuộc tính name, dữ liệu của input đó thường sẽ không được gửi lên server.",
                          "exampleText":  "Ô nhập email nên có name là email để server biết dữ liệu nhận được là email của người dùng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput name=\"ten-truong\" type=\"text\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/subscribe\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký nhận tin\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- Dữ liệu gửi đi có dạng: email=user@example.com --\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "placeholder",
                          "title":  "Placeholder",
                          "description":  "Placeholder là nội dung gợi ý hiển thị bên trong ô nhập khi người dùng chưa nhập dữ liệu. Placeholder giúp người dùng biết cần nhập gì nhưng không nên được dùng thay cho label.",
                          "exampleText":  "Ô nhập họ tên có thể hiển thị gợi ý “Nhập họ và tên”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" placeholder=\"Nội dung gợi ý\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"full-name\"\u003eHọ và tên\u003c/label\u003e\r\n\u003cinput\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "label",
                          "title":  "Label",
                          "description":  "Label là nhãn mô tả cho input. Label giúp form dễ hiểu hơn và hỗ trợ accessibility. Khi thuộc tính for của label trùng với id của input, người dùng có thể bấm vào label để focus vào ô nhập tương ứng.",
                          "exampleText":  "Dòng chữ “Email” đặt trước ô nhập email là một label.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003clabel for=\"input-id\"\u003eTên trường\u003c/label\u003e\r\n\u003cinput id=\"input-id\" name=\"tenTruong\" type=\"text\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"user-email\"\u003eEmail\u003c/label\u003e\r\n\u003cinput\r\n  id=\"user-email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "required",
                          "title":  "Required",
                          "description":  "Required dùng để bắt buộc người dùng phải nhập hoặc chọn dữ liệu trước khi gửi form. Nếu bỏ trống trường required, trình duyệt sẽ hiển thị thông báo lỗi.",
                          "exampleText":  "Trong form đăng ký, email và mật khẩu thường là hai trường bắt buộc.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" required /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" required /\u003e\r\n  \u003cinput name=\"password\" type=\"password\" required /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "value",
                          "title":  "Value",
                          "description":  "Value là giá trị mặc định hoặc giá trị hiện tại của input, option, radio hoặc checkbox. Khi form được gửi, value là dữ liệu tương ứng được gửi lên server.",
                          "exampleText":  "Ô họ tên có thể được đặt sẵn giá trị “Nguyễn Văn A”. Với radio giới tính, value có thể là “male” hoặc “female”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput name=\"tenTruong\" type=\"text\" value=\"Giá trị mặc định\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cinput\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  value=\"Nguyễn Văn A\"\r\n/\u003e\r\n\r\n\u003clabel\u003e\r\n  \u003cinput name=\"gender\" type=\"radio\" value=\"male\" /\u003e\r\n  Nam\r\n\u003c/label\u003e\r\n\u003clabel\u003e\r\n  \u003cinput name=\"gender\" type=\"radio\" value=\"female\" /\u003e\r\n  Nữ\r\n\u003c/label\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "button",
                          "title":  "Button",
                          "description":  "Button dùng để tạo nút bấm trong form hoặc trên giao diện. Trong form, button có thể dùng để submit dữ liệu, reset dữ liệu hoặc thực hiện một hành động bằng JavaScript.",
                          "exampleText":  "Form đăng ký thường có nút “Đăng ký” để gửi dữ liệu và nút “Nhập lại” để xóa dữ liệu đã nhập.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cbutton type=\"button\"\u003eNội dung nút\u003c/button\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" /\u003e\r\n\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n  \u003cbutton type=\"reset\"\u003eNhập lại\u003c/button\u003e\r\n  \u003cbutton type=\"button\"\u003eXem điều khoản\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "textarea",
                          "title":  "Textarea",
                          "description":  "Textarea dùng để nhập nội dung nhiều dòng. Thẻ này thường dùng cho ghi chú, mô tả, tin nhắn, bình luận hoặc phản hồi.",
                          "exampleText":  "Trong form liên hệ, phần “Nội dung tin nhắn” nên dùng textarea vì người dùng có thể nhập nhiều dòng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctextarea name=\"tenTruong\" rows=\"5\" cols=\"40\"\u003e\u003c/textarea\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"message\"\u003eNội dung tin nhắn\u003c/label\u003e\r\n\u003ctextarea\r\n  id=\"message\"\r\n  name=\"message\"\r\n  rows=\"6\"\r\n  placeholder=\"Nhập nội dung cần liên hệ\"\r\n\u003e\u003c/textarea\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "select",
                          "title":  "Select",
                          "description":  "Select dùng để tạo danh sách lựa chọn dạng dropdown. Người dùng có thể chọn một lựa chọn hoặc nhiều lựa chọn khi select có thuộc tính multiple.",
                          "exampleText":  "Trong form đăng ký, phần chọn tỉnh hoặc thành phố có thể dùng select.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cselect name=\"tenTruong\"\u003e\r\n  \u003coption value=\"gia-tri\"\u003eNội dung lựa chọn\u003c/option\u003e\r\n\u003c/select\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"city\"\u003eTỉnh/thành phố\u003c/label\u003e\r\n\u003cselect id=\"city\" name=\"city\"\u003e\r\n  \u003coption value=\"\"\u003e-- Chọn tỉnh/thành phố --\u003c/option\u003e\r\n  \u003coption value=\"ha-noi\"\u003eHà Nội\u003c/option\u003e\r\n  \u003coption value=\"ho-chi-minh\"\u003eHồ Chí Minh\u003c/option\u003e\r\n  \u003coption value=\"da-nang\"\u003eĐà Nẵng\u003c/option\u003e\r\n\u003c/select\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "option",
                          "title":  "Option",
                          "description":  "Option là từng lựa chọn nằm bên trong select. Mỗi option có thể có nội dung hiển thị cho người dùng và thuộc tính value để gửi lên server.",
                          "exampleText":  "Trong select tỉnh hoặc thành phố, các option có thể là “Hà Nội”, “Hồ Chí Minh” và “Đà Nẵng”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003coption value=\"gia-tri-gui-di\"\u003eNội dung hiển thị\u003c/option\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cselect name=\"city\"\u003e\r\n  \u003coption value=\"\"\u003e-- Chọn tỉnh/thành phố --\u003c/option\u003e\r\n  \u003coption value=\"ha-noi\"\u003eHà Nội\u003c/option\u003e\r\n  \u003coption value=\"ho-chi-minh\"\u003eHồ Chí Minh\u003c/option\u003e\r\n  \u003coption value=\"da-nang\"\u003eĐà Nẵng\u003c/option\u003e\r\n\u003c/select\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "optgroup",
                          "title":  "Optgroup",
                          "description":  "Optgroup dùng để nhóm các option trong select. Cách này giúp danh sách lựa chọn dài trở nên dễ nhìn và dễ chọn hơn.",
                          "exampleText":  "Danh sách tỉnh hoặc thành phố có thể chia thành các nhóm “Miền Bắc”, “Miền Trung” và “Miền Nam”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003coptgroup label=\"Tên nhóm\"\u003e\r\n  \u003coption value=\"gia-tri\"\u003eLựa chọn\u003c/option\u003e\r\n\u003c/optgroup\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cselect name=\"city\"\u003e\r\n  \u003coptgroup label=\"Miền Bắc\"\u003e\r\n    \u003coption value=\"ha-noi\"\u003eHà Nội\u003c/option\u003e\r\n    \u003coption value=\"hai-phong\"\u003eHải Phòng\u003c/option\u003e\r\n  \u003c/optgroup\u003e\r\n  \u003coptgroup label=\"Miền Trung\"\u003e\r\n    \u003coption value=\"da-nang\"\u003eĐà Nẵng\u003c/option\u003e\r\n    \u003coption value=\"hue\"\u003eHuế\u003c/option\u003e\r\n  \u003c/optgroup\u003e\r\n  \u003coptgroup label=\"Miền Nam\"\u003e\r\n    \u003coption value=\"ho-chi-minh\"\u003eHồ Chí Minh\u003c/option\u003e\r\n    \u003coption value=\"can-tho\"\u003eCần Thơ\u003c/option\u003e\r\n  \u003c/optgroup\u003e\r\n\u003c/select\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-html5",
                          "title":  "Semantic HTML5",
                          "description":  "Semantic HTML5 là nhóm thẻ HTML có ý nghĩa rõ ràng về mặt nội dung và cấu trúc trang. Các thẻ này giúp code dễ đọc hơn, hỗ trợ SEO và cải thiện accessibility.",
                          "exampleText":  "Một trang web có thể dùng header, nav, main, section, article, figure, figcaption và footer để mô tả đúng vai trò của từng khu vực.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cheader\u003ePhần đầu trang\u003c/header\u003e\r\n\u003cnav\u003eĐiều hướng\u003c/nav\u003e\r\n\u003cmain\u003e\r\n  \u003csection\u003e\r\n    \u003carticle\u003eNội dung độc lập\u003c/article\u003e\r\n  \u003c/section\u003e\r\n\u003c/main\u003e\r\n\u003cfooter\u003ePhần cuối trang\u003c/footer\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cheader\u003e\r\n  \u003ch1\u003eCode Knowledge\u003c/h1\u003e\r\n  \u003cnav\u003e\r\n    \u003ca href=\"/html\"\u003eHTML\u003c/a\u003e\r\n    \u003ca href=\"/css\"\u003eCSS\u003c/a\u003e\r\n  \u003c/nav\u003e\r\n\u003c/header\u003e\r\n\r\n\u003cmain\u003e\r\n  \u003csection\u003e\r\n    \u003ch2\u003eKiến thức HTML\u003c/h2\u003e\r\n\r\n    \u003carticle\u003e\r\n      \u003ch3\u003eSemantic HTML5\u003c/h3\u003e\r\n      \u003cfigure\u003e\r\n        \u003cimg src=\"semantic-html5.png\" alt=\"Cấu trúc semantic HTML5\" /\u003e\r\n        \u003cfigcaption\u003eCấu trúc một trang HTML semantic\u003c/figcaption\u003e\r\n      \u003c/figure\u003e\r\n    \u003c/article\u003e\r\n  \u003c/section\u003e\r\n\u003c/main\u003e\r\n\r\n\u003cfooter\u003e\r\n  \u003cp\u003e\u0026copy; 2026 Code Knowledge\u003c/p\u003e\r\n\u003c/footer\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 6",
        "title":  "Input types \u0026 thuộc tính form",
        "cards":  [
                      {
                          "id":  "text-input",
                          "title":  "Text input",
                          "description":  "Text input dùng để tạo ô nhập văn bản thông thường. Đây là loại input phổ biến nhất trong form.",
                          "exampleText":  "Dùng cho ô nhập họ tên, tên tài khoản, tiêu đề bài viết hoặc tên sản phẩm.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" name=\"tenTruong\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"full-name\"\u003eHọ và tên\u003c/label\u003e\r\n\u003cinput\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "email-input",
                          "title":  "Email input",
                          "description":  "Email input dùng để nhập địa chỉ email. Trình duyệt có thể tự kiểm tra định dạng email trước khi gửi form.",
                          "exampleText":  "Trong form đăng ký, ô nhập email nên dùng email input để hạn chế người dùng nhập sai định dạng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"email\" name=\"email\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"email\"\u003eEmail\u003c/label\u003e\r\n\u003cinput\r\n  id=\"email\"\r\n  name=\"email\"\r\n  type=\"email\"\r\n  placeholder=\"name@example.com\"\r\n  required\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "password-input",
                          "title":  "Password input",
                          "description":  "Password input dùng để nhập mật khẩu. Nội dung người dùng nhập sẽ bị che bằng dấu chấm hoặc ký tự ẩn.",
                          "exampleText":  "Form đăng nhập thường có ô nhập mật khẩu dùng password input.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"password\" name=\"password\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"password\"\u003eMật khẩu\u003c/label\u003e\r\n\u003cinput\r\n  id=\"password\"\r\n  name=\"password\"\r\n  type=\"password\"\r\n  minlength=\"8\"\r\n  required\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "number-input",
                          "title":  "Number input",
                          "description":  "Number input dùng để nhập dữ liệu dạng số. Có thể giới hạn giá trị nhỏ nhất, lớn nhất hoặc bước nhảy của số.",
                          "exampleText":  "Dùng cho ô nhập tuổi, số lượng sản phẩm, điểm số hoặc mức lương.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"number\" name=\"tenTruong\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"quantity\"\u003eSố lượng\u003c/label\u003e\r\n\u003cinput\r\n  id=\"quantity\"\r\n  name=\"quantity\"\r\n  type=\"number\"\r\n  min=\"1\"\r\n  max=\"100\"\r\n  step=\"1\"\r\n  value=\"1\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "file-input",
                          "title":  "File input",
                          "description":  "File input dùng để chọn file từ máy tính hoặc thiết bị của người dùng. Khi upload file, form thường cần method POST và enctype multipart/form-data.",
                          "exampleText":  "Trong form ứng tuyển, người dùng có thể chọn file CV để gửi lên hệ thống.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"file\" name=\"tenFile\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/apply\" method=\"post\" enctype=\"multipart/form-data\"\u003e\r\n  \u003clabel for=\"cv\"\u003eTải lên CV\u003c/label\u003e\r\n  \u003cinput\r\n    id=\"cv\"\r\n    name=\"cv\"\r\n    type=\"file\"\r\n    accept=\".pdf,.doc,.docx\"\r\n    required\r\n  /\u003e\r\n  \u003cbutton type=\"submit\"\u003eGửi hồ sơ\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "radio-input",
                          "title":  "Radio input",
                          "description":  "Radio input dùng khi người dùng chỉ được chọn một lựa chọn trong nhiều lựa chọn. Các radio thuộc cùng một nhóm cần dùng chung thuộc tính name.",
                          "exampleText":  "Trong form đăng ký, phần giới tính có thể gồm Nam, Nữ và Khác nhưng người dùng chỉ được chọn một.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"radio\" name=\"tenNhom\" value=\"giaTri\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cfieldset\u003e\r\n  \u003clegend\u003eGiới tính\u003c/legend\u003e\r\n\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"radio\" name=\"gender\" value=\"male\" /\u003e\r\n    Nam\r\n  \u003c/label\u003e\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"radio\" name=\"gender\" value=\"female\" /\u003e\r\n    Nữ\r\n  \u003c/label\u003e\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"radio\" name=\"gender\" value=\"other\" /\u003e\r\n    Khác\r\n  \u003c/label\u003e\r\n\u003c/fieldset\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "checkbox-input",
                          "title":  "Checkbox input",
                          "description":  "Checkbox input dùng khi người dùng có thể chọn nhiều lựa chọn cùng lúc. Checkbox phù hợp với danh sách sở thích, kỹ năng hoặc nguồn thông tin.",
                          "exampleText":  "Trong form khảo sát, người dùng có thể chọn nhiều kỹ năng như HTML, CSS, JavaScript và ReactJS.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"checkbox\" name=\"tenTruong\" value=\"giaTri\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cfieldset\u003e\r\n  \u003clegend\u003eKỹ năng\u003c/legend\u003e\r\n\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"checkbox\" name=\"skills\" value=\"html\" /\u003e HTML\r\n  \u003c/label\u003e\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"checkbox\" name=\"skills\" value=\"css\" /\u003e CSS\r\n  \u003c/label\u003e\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"checkbox\" name=\"skills\" value=\"javascript\" /\u003e JavaScript\r\n  \u003c/label\u003e\r\n  \u003clabel\u003e\r\n    \u003cinput type=\"checkbox\" name=\"skills\" value=\"reactjs\" /\u003e ReactJS\r\n  \u003c/label\u003e\r\n\u003c/fieldset\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "submit-button",
                          "title":  "Submit button",
                          "description":  "Submit button dùng để gửi dữ liệu form. Khi người dùng bấm nút này, form sẽ gửi dữ liệu đến địa chỉ được khai báo trong action.",
                          "exampleText":  "Nút “Đăng ký”, “Gửi liên hệ” hoặc “Đăng nhập” thường là submit button.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cbutton type=\"submit\"\u003eGửi dữ liệu\u003c/button\u003e\r\n\r\n\u003c!-- Hoặc --\u003e\r\n\u003cinput type=\"submit\" value=\"Gửi dữ liệu\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/login\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" required /\u003e\r\n  \u003cinput name=\"password\" type=\"password\" required /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng nhập\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "reset-button",
                          "title":  "Reset button",
                          "description":  "Reset button dùng để đưa dữ liệu trong form về trạng thái ban đầu. Nếu input có giá trị mặc định, reset sẽ đưa input về giá trị đó.",
                          "exampleText":  "Nút “Nhập lại” trong form đăng ký có thể dùng reset để xóa các dữ liệu người dùng vừa nhập.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cbutton type=\"reset\"\u003eNhập lại\u003c/button\u003e\r\n\r\n\u003c!-- Hoặc --\u003e\r\n\u003cinput type=\"reset\" value=\"Nhập lại\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform\u003e\r\n  \u003cinput name=\"fullName\" type=\"text\" value=\"Nguyễn Văn A\" /\u003e\r\n  \u003cinput name=\"email\" type=\"email\" /\u003e\r\n\r\n  \u003cbutton type=\"reset\"\u003eNhập lại\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- Sau khi reset, fullName trở về \"Nguyễn Văn A\" --\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "min-max-step",
                          "title":  "Min, Max, Step",
                          "description":  "Min, max và step thường dùng với number input. Min quy định giá trị nhỏ nhất, max quy định giá trị lớn nhất, còn step quy định mỗi lần tăng hoặc giảm sẽ nhảy bao nhiêu đơn vị.",
                          "exampleText":  "Ô nhập tuổi có thể giới hạn từ 18 đến 60. Ô nhập số lượng sản phẩm có thể tăng hoặc giảm từng 1 đơn vị.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput\r\n  type=\"number\"\r\n  min=\"giaTriNhoNhat\"\r\n  max=\"giaTriLonNhat\"\r\n  step=\"buocNhay\"\r\n/\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"age\"\u003eTuổi\u003c/label\u003e\r\n\u003cinput id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" step=\"1\" /\u003e\r\n\r\n\u003clabel for=\"price\"\u003eMức giá\u003c/label\u003e\r\n\u003cinput\r\n  id=\"price\"\r\n  name=\"price\"\r\n  type=\"number\"\r\n  min=\"0\"\r\n  max=\"1000000\"\r\n  step=\"50000\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "checked",
                          "title":  "Checked",
                          "description":  "Checked dùng để đặt trạng thái chọn sẵn cho radio hoặc checkbox. Khi trang vừa tải, lựa chọn có checked sẽ được chọn mặc định.",
                          "exampleText":  "Trong phần giới tính có thể chọn sẵn “Nam”; checkbox đồng ý điều khoản có thể được chọn sẵn hoặc để trống tùy yêu cầu.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"radio\" checked /\u003e\r\n\u003cinput type=\"checkbox\" checked /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel\u003e\r\n  \u003cinput type=\"radio\" name=\"gender\" value=\"male\" checked /\u003e\r\n  Nam\r\n\u003c/label\u003e\r\n\u003clabel\u003e\r\n  \u003cinput type=\"radio\" name=\"gender\" value=\"female\" /\u003e\r\n  Nữ\r\n\u003c/label\u003e\r\n\r\n\u003clabel\u003e\r\n  \u003cinput type=\"checkbox\" name=\"newsletter\" value=\"yes\" checked /\u003e\r\n  Nhận thông tin mới\r\n\u003c/label\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "disabled",
                          "title":  "Disabled",
                          "description":  "Disabled dùng để vô hiệu hóa input, select, textarea hoặc button. Người dùng không thể tương tác với phần tử bị disabled và dữ liệu của trường disabled thường không được gửi khi submit form.",
                          "exampleText":  "Một nút “Gửi” có thể bị disabled cho đến khi người dùng nhập đủ thông tin cần thiết.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" disabled /\u003e\r\n\u003cbutton type=\"submit\" disabled\u003eGửi\u003c/button\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/checkout\" method=\"post\"\u003e\r\n  \u003cinput name=\"discountCode\" type=\"text\" value=\"SALE2026\" disabled /\u003e\r\n  \u003cbutton type=\"submit\" disabled\u003eGửi đơn hàng\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- discountCode không được gửi vì input bị disabled --\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "readonly",
                          "title":  "Readonly",
                          "description":  "Readonly chỉ cho phép đọc và không cho phép sửa nội dung input hoặc textarea. Khác với disabled, dữ liệu readonly vẫn được gửi khi submit form.",
                          "exampleText":  "Trong form thanh toán, mã đơn hàng có thể để readonly để người dùng nhìn thấy nhưng không chỉnh sửa được.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" readonly /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/payment\" method=\"post\"\u003e\r\n  \u003clabel for=\"order-id\"\u003eMã đơn hàng\u003c/label\u003e\r\n  \u003cinput\r\n    id=\"order-id\"\r\n    name=\"orderId\"\r\n    type=\"text\"\r\n    value=\"ORDER-2026-001\"\r\n    readonly\r\n  /\u003e\r\n  \u003cbutton type=\"submit\"\u003eThanh toán\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- orderId vẫn được gửi khi submit --\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 7",
        "title":  "Thuộc tính HTML thường dùng",
        "cards":  [
                      {
                          "id":  "attribute-id",
                          "title":  "Id",
                          "description":  "Id là thuộc tính dùng để định danh duy nhất cho một phần tử HTML. Trong một trang, mỗi id chỉ nên xuất hiện một lần. Id thường dùng với CSS, JavaScript hoặc link nội bộ để cuộn đến một phần cụ thể.",
                          "exampleText":  "Một phần kiến thức về form có thể có id riêng để khi click vào sidebar, trang tự cuộn xuống đúng phần đó.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctag id=\"ten-duy-nhat\"\u003eNội dung\u003c/tag\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca href=\"#form-knowledge\"\u003eĐi tới kiến thức Form\u003c/a\u003e\r\n\r\n\u003csection id=\"form-knowledge\"\u003e\r\n  \u003ch2\u003eKiến thức Form\u003c/h2\u003e\r\n\u003c/section\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-class",
                          "title":  "Class",
                          "description":  "Class dùng để đặt tên nhóm cho một hoặc nhiều phần tử HTML. Nhiều phần tử có thể dùng chung một class. Class thường được dùng để CSS các phần tử có cùng kiểu giao diện.",
                          "exampleText":  "Các thẻ kiến thức trong website có thể dùng chung class “knowledge-card” để có cùng kiểu khung, màu nền và khoảng cách.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctag class=\"ten-class\"\u003eNội dung\u003c/tag\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003carticle class=\"knowledge-card\"\u003e\r\n  \u003ch2\u003eHTML cơ bản\u003c/h2\u003e\r\n\u003c/article\u003e\r\n\r\n\u003carticle class=\"knowledge-card\"\u003e\r\n  \u003ch2\u003eCSS cơ bản\u003c/h2\u003e\r\n\u003c/article\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-style",
                          "title":  "Style",
                          "description":  "Style dùng để viết CSS trực tiếp trên một phần tử HTML. Cách này gọi là inline CSS. Không nên lạm dụng vì code sẽ khó quản lý khi dự án lớn.",
                          "exampleText":  "Một ô trong bảng có thể dùng style để căn giữa hoặc căn phải nội dung.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctag style=\"thuoc-tinh-css: gia-tri;\"\u003eNội dung\u003c/tag\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ctable\u003e\r\n  \u003ctr\u003e\r\n    \u003ctd style=\"text-align: center;\"\u003e2\u003c/td\u003e\r\n    \u003ctd style=\"text-align: right;\"\u003e300.000đ\u003c/td\u003e\r\n  \u003c/tr\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-href",
                          "title":  "Href",
                          "description":  "Href là thuộc tính của thẻ liên kết. Nó xác định địa chỉ mà người dùng sẽ được chuyển đến khi click vào link.",
                          "exampleText":  "Một liên kết “Trang chủ” có thể dùng href để quay về file index.html.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ca href=\"duong-dan\"\u003eNội dung liên kết\u003c/a\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca href=\"../index.html\"\u003eTrang chủ\u003c/a\u003e\r\n\u003ca href=\"https://github.com/username\"\u003eMy GitHub\u003c/a\u003e\r\n\u003ca href=\"#form\"\u003eĐi tới phần Form\u003c/a\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-src",
                          "title":  "Src",
                          "description":  "Src dùng để khai báo đường dẫn nguồn của tài nguyên. Thuộc tính này thường gặp trong thẻ img, script, iframe, audio hoặc video.",
                          "exampleText":  "Một ảnh logo cần có src để trình duyệt biết file ảnh nằm ở đâu.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cimg src=\"duong-dan-anh\" alt=\"Mô tả ảnh\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg src=\"../images/logo.png\" alt=\"Logo Code Knowledge\" /\u003e\r\n\u003cscript src=\"../js/main.js\"\u003e\u003c/script\u003e\r\n\u003ciframe src=\"https://example.com\" title=\"Trang minh họa\"\u003e\u003c/iframe\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-alt",
                          "title":  "Alt",
                          "description":  "Alt là nội dung mô tả thay thế cho hình ảnh. Nếu ảnh không tải được, trình duyệt có thể hiển thị nội dung alt. Alt cũng rất quan trọng cho accessibility và hỗ trợ SEO.",
                          "exampleText":  "Một ảnh sản phẩm nên có alt mô tả tên sản phẩm hoặc nội dung ảnh.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cimg src=\"duong-dan-anh\" alt=\"Mô tả nội dung ảnh\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg\r\n  src=\"../images/ao-thun-front-end.jpg\"\r\n  alt=\"Áo thun Front-End màu đen\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-title",
                          "title":  "Title",
                          "description":  "Title là thuộc tính dùng để cung cấp thông tin bổ sung cho phần tử. Khi người dùng hover, trình duyệt có thể hiển thị nội dung title dưới dạng tooltip.",
                          "exampleText":  "Một hình ảnh có thể có title để khi rê chuột vào sẽ hiện mô tả ngắn.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ctag title=\"Thông tin bổ sung\"\u003eNội dung\u003c/tag\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cimg\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  title=\"Cấu trúc cơ bản của một tài liệu HTML\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-target",
                          "title":  "Target",
                          "description":  "Target dùng trong thẻ liên kết để quy định cách mở link. Giá trị _self mở ở tab hiện tại, còn _blank mở ở tab mới.",
                          "exampleText":  "Link dẫn đến GitHub cá nhân có thể mở ở tab mới để người dùng không bị rời khỏi website kiến thức.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003ca href=\"URL\" target=\"_blank\"\u003eNội dung liên kết\u003c/a\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003ca\r\n  href=\"https://github.com/username\"\r\n  target=\"_blank\"\r\n  rel=\"noopener noreferrer\"\r\n\u003e\r\n  My GitHub\r\n\u003c/a\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-name",
                          "title":  "Name",
                          "description":  "Name thường dùng trong form để đặt tên cho trường dữ liệu. Khi form được gửi đi, server sẽ nhận dữ liệu dựa theo name của từng input, select hoặc textarea.",
                          "exampleText":  "Ô nhập email nên có name là email để server biết dữ liệu đó là email người dùng nhập.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput name=\"tenTruong\" type=\"text\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/subscribe\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký nhận tin\u003c/button\u003e\r\n\u003c/form\u003e\r\n\r\n\u003c!-- Dữ liệu gửi đi: email=user@example.com --\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-value",
                          "title":  "Value",
                          "description":  "Value là giá trị của một phần tử form. Với input, value có thể là giá trị mặc định. Với radio, checkbox hoặc option, value là dữ liệu được gửi đi khi người dùng chọn.",
                          "exampleText":  "Radio giới tính “Nam” có thể có value là male, còn “Nữ” có thể có value là female.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput name=\"tenTruong\" value=\"giaTri\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel\u003e\r\n  \u003cinput name=\"gender\" type=\"radio\" value=\"male\" /\u003e Nam\r\n\u003c/label\u003e\r\n\u003clabel\u003e\r\n  \u003cinput name=\"gender\" type=\"radio\" value=\"female\" /\u003e Nữ\r\n\u003c/label\u003e\r\n\r\n\u003cselect name=\"city\"\u003e\r\n  \u003coption value=\"ha-noi\"\u003eHà Nội\u003c/option\u003e\r\n\u003c/select\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-placeholder",
                          "title":  "Placeholder",
                          "description":  "Placeholder là dòng gợi ý hiển thị bên trong ô nhập khi người dùng chưa nhập dữ liệu. Nó giúp người dùng biết cần nhập nội dung gì nhưng không nên thay thế label.",
                          "exampleText":  "Ô nhập họ tên có thể có placeholder là “Nhập họ và tên”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" placeholder=\"Nội dung gợi ý\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"full-name\"\u003eHọ và tên\u003c/label\u003e\r\n\u003cinput\r\n  id=\"full-name\"\r\n  name=\"fullName\"\r\n  type=\"text\"\r\n  placeholder=\"Nhập họ và tên\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-required",
                          "title":  "Required",
                          "description":  "Required dùng để bắt buộc người dùng phải nhập hoặc chọn dữ liệu trước khi gửi form. Nếu trường required bị bỏ trống, trình duyệt sẽ không cho submit form.",
                          "exampleText":  "Email và mật khẩu trong form đăng ký thường là các trường bắt buộc.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cinput type=\"text\" required /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\"\u003e\r\n  \u003cinput name=\"email\" type=\"email\" required /\u003e\r\n  \u003cinput name=\"password\" type=\"password\" required /\u003e\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-selected",
                          "title":  "Selected",
                          "description":  "Selected dùng để chọn sẵn một option trong select. Khi trang vừa tải, option có selected sẽ được hiển thị là lựa chọn mặc định.",
                          "exampleText":  "Trong danh sách tỉnh hoặc thành phố, có thể chọn sẵn “Hà Nội” làm giá trị mặc định.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003coption value=\"giaTri\" selected\u003eNội dung lựa chọn\u003c/option\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"city\"\u003eTỉnh/thành phố\u003c/label\u003e\r\n\u003cselect id=\"city\" name=\"city\"\u003e\r\n  \u003coption value=\"da-nang\"\u003eĐà Nẵng\u003c/option\u003e\r\n  \u003coption value=\"ha-noi\" selected\u003eHà Nội\u003c/option\u003e\r\n  \u003coption value=\"ho-chi-minh\"\u003eHồ Chí Minh\u003c/option\u003e\r\n\u003c/select\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-multiple",
                          "title":  "Multiple",
                          "description":  "Multiple cho phép người dùng chọn nhiều giá trị trong select hoặc chọn nhiều file trong input file.",
                          "exampleText":  "Một form chọn kỹ năng có thể cho phép người dùng chọn nhiều kỹ năng như HTML, CSS và JavaScript.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cselect name=\"tenTruong\" multiple\u003e\r\n  ...\r\n\u003c/select\u003e\r\n\r\n\u003cinput type=\"file\" name=\"files\" multiple /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003clabel for=\"skills\"\u003eKỹ năng\u003c/label\u003e\r\n\u003cselect id=\"skills\" name=\"skills\" multiple\u003e\r\n  \u003coption value=\"html\"\u003eHTML\u003c/option\u003e\r\n  \u003coption value=\"css\"\u003eCSS\u003c/option\u003e\r\n  \u003coption value=\"javascript\"\u003eJavaScript\u003c/option\u003e\r\n\u003c/select\u003e\r\n\r\n\u003clabel for=\"documents\"\u003eTài liệu\u003c/label\u003e\r\n\u003cinput id=\"documents\" name=\"documents\" type=\"file\" multiple /\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-width",
                          "title":  "Width",
                          "description":  "Width dùng để đặt chiều rộng cho một phần tử và thường gặp trong img, table hoặc một số phần tử hiển thị khác. Trong HTML hiện đại, nên ưu tiên quản lý chiều rộng bằng CSS.",
                          "exampleText":  "Một ảnh minh họa có thể được đặt chiều rộng cố định để không hiển thị quá lớn trên giao diện.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cimg src=\"anh.jpg\" alt=\"Mô tả ảnh\" width=\"640\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!-- Thuộc tính HTML --\u003e\r\n\u003cimg\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  width=\"640\"\r\n/\u003e\r\n\r\n\u003c!-- CSS linh hoạt hơn --\u003e\r\n\u003cimg\r\n  src=\"../images/html-structure.png\"\r\n  alt=\"Sơ đồ cấu trúc HTML\"\r\n  style=\"width: 100%; max-width: 640px;\"\r\n/\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "attribute-height",
                          "title":  "Height",
                          "description":  "Height dùng để đặt chiều cao cho một phần tử và thường gặp trong img, table hoặc iframe. Giống width, nên ưu tiên dùng CSS để quản lý chiều cao trong dự án thực tế.",
                          "exampleText":  "Một ảnh sản phẩm có thể được đặt chiều cao cố định để các ảnh trong bảng hiển thị đều nhau.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cimg src=\"anh.jpg\" alt=\"Mô tả ảnh\" height=\"240\" /\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003c!-- Thuộc tính HTML --\u003e\r\n\u003cimg\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  width=\"240\"\r\n  height=\"240\"\r\n/\u003e\r\n\r\n\u003c!-- CSS giúp kiểm soát cách ảnh được cắt --\u003e\r\n\u003cimg\r\n  src=\"../images/product.jpg\"\r\n  alt=\"Ảnh sản phẩm\"\r\n  style=\"width: 240px; height: 240px; object-fit: cover;\"\r\n/\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 8",
        "title":  "Semantic HTML5 chi tiết",
        "cards":  [
                      {
                          "id":  "semantic-header",
                          "title":  "Header",
                          "description":  "Header là phần đầu của trang web hoặc phần đầu của một khu vực nội dung. Header thường chứa logo, tiêu đề, mô tả ngắn, menu hoặc thông tin giới thiệu.",
                          "exampleText":  "Trong website lưu kiến thức code, phần đầu trang HTML có thể dùng header để chứa tiêu đề “HTML Knowledge” và mô tả “Kiến thức HTML được chia theo từng nhóm”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cheader\u003e\r\n  Nội dung phần đầu trang hoặc khu vực\r\n\u003c/header\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cheader\u003e\r\n  \u003ch1\u003eHTML Knowledge\u003c/h1\u003e\r\n  \u003cp\u003eKiến thức HTML được chia theo từng nhóm.\u003c/p\u003e\r\n\u003c/header\u003e\r\n\r\n\u003carticle\u003e\r\n  \u003cheader\u003e\r\n    \u003ch2\u003eSemantic HTML5\u003c/h2\u003e\r\n    \u003cp\u003eCập nhật ngày 14/07/2026\u003c/p\u003e\r\n  \u003c/header\u003e\r\n\u003c/article\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-nav",
                          "title":  "Nav",
                          "description":  "Nav dùng để chứa các liên kết điều hướng chính. Nav thường dùng cho menu trang web, sidebar, menu trong header hoặc danh sách mục lục.",
                          "exampleText":  "Sidebar bên trái của trang HTML có thể dùng nav để chứa các link như Cấu trúc HTML, Table, Form và Semantic HTML5.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cnav\u003e\r\n  Các liên kết điều hướng chính\r\n\u003c/nav\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cnav aria-label=\"Mục lục HTML\"\u003e\r\n  \u003ca href=\"#basic-html\"\u003eCấu trúc HTML\u003c/a\u003e\r\n  \u003ca href=\"#table\"\u003eTable\u003c/a\u003e\r\n  \u003ca href=\"#form\"\u003eForm\u003c/a\u003e\r\n  \u003ca href=\"#semantic-html5\"\u003eSemantic HTML5\u003c/a\u003e\r\n\u003c/nav\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-main",
                          "title":  "Main",
                          "description":  "Main là phần nội dung chính của trang web. Mỗi trang chỉ nên có một main chính và nội dung trong đó nên là phần quan trọng nhất mà người dùng cần đọc.",
                          "exampleText":  "Trong trang HTML, toàn bộ phần giải thích kiến thức, ví dụ và các nhóm bài học nên nằm trong main.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cmain\u003e\r\n  Nội dung chính của trang\r\n\u003c/main\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cbody\u003e\r\n  \u003cheader\u003eTiêu đề trang\u003c/header\u003e\r\n  \u003cnav\u003eĐiều hướng chính\u003c/nav\u003e\r\n\r\n  \u003cmain\u003e\r\n    \u003ch1\u003eHTML Knowledge\u003c/h1\u003e\r\n    \u003csection\u003e\r\n      \u003ch2\u003eCấu trúc HTML cơ bản\u003c/h2\u003e\r\n      \u003cp\u003eNội dung bài học...\u003c/p\u003e\r\n    \u003c/section\u003e\r\n  \u003c/main\u003e\r\n\r\n  \u003cfooter\u003eThông tin cuối trang\u003c/footer\u003e\r\n\u003c/body\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-section",
                          "title":  "Section",
                          "description":  "Section dùng để chia nội dung thành từng khu vực có chủ đề riêng. Mỗi section thường nên có một tiêu đề để thể hiện nội dung chính của khu vực đó.",
                          "exampleText":  "Các nhóm “Cấu trúc HTML cơ bản”, “Table”, “Form” và “Semantic HTML5” có thể được đặt trong từng section riêng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003csection\u003e\r\n  \u003ch2\u003eTiêu đề khu vực\u003c/h2\u003e\r\n  Nội dung cùng chủ đề\r\n\u003c/section\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cmain\u003e\r\n  \u003csection\u003e\r\n    \u003ch2\u003eCấu trúc HTML cơ bản\u003c/h2\u003e\r\n    \u003cp\u003eDOCTYPE, html, head, body...\u003c/p\u003e\r\n  \u003c/section\u003e\r\n\r\n  \u003csection\u003e\r\n    \u003ch2\u003eTable\u003c/h2\u003e\r\n    \u003cp\u003eTable, thead, tbody, tfoot...\u003c/p\u003e\r\n  \u003c/section\u003e\r\n\u003c/main\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-article",
                          "title":  "Article",
                          "description":  "Article dùng cho một nội dung độc lập, có thể tách ra đọc riêng mà vẫn hiểu được. Article thường dùng cho bài viết, thẻ sản phẩm, bài blog, tin tức hoặc từng mục kiến thức.",
                          "exampleText":  "Mỗi mục kiến thức như “DOCTYPE”, “Heading”, “Table” hoặc “Form” có thể là một article riêng vì có tiêu đề, giải thích và ví dụ riêng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003carticle\u003e\r\n  \u003ch2\u003eTiêu đề nội dung độc lập\u003c/h2\u003e\r\n  Nội dung article\r\n\u003c/article\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003carticle id=\"doctype\"\u003e\r\n  \u003ch2\u003eDOCTYPE\u003c/h2\u003e\r\n  \u003cp\u003e\r\n    DOCTYPE khai báo loại tài liệu để trình duyệt xử lý trang HTML đúng cách.\r\n  \u003c/p\u003e\r\n  \u003cpre\u003e\u003ccode\u003e\u0026lt;!DOCTYPE html\u0026gt;\u003c/code\u003e\u003c/pre\u003e\r\n\u003c/article\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-figure",
                          "title":  "Figure",
                          "description":  "Figure dùng để bọc nội dung minh họa như hình ảnh, sơ đồ, biểu đồ hoặc đoạn code có chú thích. Figure giúp trình duyệt và người đọc hiểu đây là một nội dung minh họa riêng biệt.",
                          "exampleText":  "Một hình ảnh minh họa cấu trúc HTML hoặc sơ đồ layout semantic có thể được đặt trong figure.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cfigure\u003e\r\n  Nội dung minh họa\r\n  \u003cfigcaption\u003eChú thích\u003c/figcaption\u003e\r\n\u003c/figure\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cfigure\u003e\r\n  \u003cimg\r\n    src=\"../images/semantic-layout.png\"\r\n    alt=\"Sơ đồ bố cục semantic HTML5\"\r\n  /\u003e\r\n  \u003cfigcaption\u003eSơ đồ bố cục semantic của một trang HTML5.\u003c/figcaption\u003e\r\n\u003c/figure\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "semantic-figcaption",
                          "title":  "Figcaption",
                          "description":  "Figcaption dùng để viết chú thích cho nội dung nằm trong figure. Figcaption thường đi kèm với ảnh, sơ đồ, biểu đồ hoặc ví dụ minh họa và có thể đặt ở đầu hoặc cuối figure.",
                          "exampleText":  "Bên dưới ảnh mô tả layout HTML5, có thể dùng figcaption để ghi “Cấu trúc semantic HTML5 gồm header, nav, main, section và article”.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cú pháp",
                                                 "code":  "\u003cfigure\u003e\r\n  Nội dung minh họa\r\n  \u003cfigcaption\u003eNội dung chú thích\u003c/figcaption\u003e\r\n\u003c/figure\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ",
                                                 "code":  "\u003cfigure\u003e\r\n  \u003cimg\r\n    src=\"../images/html5-layout.png\"\r\n    alt=\"Layout HTML5\"\r\n  /\u003e\r\n  \u003cfigcaption\u003e\r\n    Cấu trúc semantic HTML5 gồm header, nav, main, section và article.\r\n  \u003c/figcaption\u003e\r\n\u003c/figure\u003e"
                                             }
                                         ]
                      }
                  ]
    },
    {
        "label":  "Nhóm 9",
        "title":  "Thực hành HTML",
        "cards":  [
                      {
                          "id":  "practice-personal-page",
                          "title":  "Trang giới thiệu cá nhân",
                          "description":  "Bài thực hành này dùng để luyện cấu trúc HTML cơ bản, tiêu đề, đoạn văn, hình ảnh, liên kết và danh sách. Đây là bài phù hợp sau khi đã học các thẻ cơ bản.",
                          "exampleText":  "Một trang giới thiệu cá nhân có thể gồm tên, ảnh đại diện, mô tả bản thân, kỹ năng, sở thích và link GitHub hoặc Facebook.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e...\u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003ch1\u003eTên của bạn\u003c/h1\u003e\r\n    \u003cimg src=\"avatar.jpg\" alt=\"Ảnh đại diện\" /\u003e\r\n    \u003cp\u003eGiới thiệu bản thân...\u003c/p\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e\r\n    \u003cmeta charset=\"UTF-8\" /\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n    \u003ctitle\u003eNguyễn Văn A - Front-End Developer\u003c/title\u003e\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003cheader\u003e\r\n      \u003ch1\u003eNguyễn Văn A\u003c/h1\u003e\r\n      \u003cp\u003eFront-End Developer\u003c/p\u003e\r\n    \u003c/header\u003e\r\n\r\n    \u003cmain\u003e\r\n      \u003cimg src=\"./images/avatar.jpg\" alt=\"Ảnh đại diện Nguyễn Văn A\" width=\"200\" /\u003e\r\n\r\n      \u003csection\u003e\r\n        \u003ch2\u003eGiới thiệu\u003c/h2\u003e\r\n        \u003cp\u003eTôi đang học HTML, CSS, JavaScript và ReactJS.\u003c/p\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection\u003e\r\n        \u003ch2\u003eKỹ năng\u003c/h2\u003e\r\n        \u003cul\u003e\r\n          \u003cli\u003eHTML\u003c/li\u003e\r\n          \u003cli\u003eCSS\u003c/li\u003e\r\n          \u003cli\u003eJavaScript\u003c/li\u003e\r\n        \u003c/ul\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection\u003e\r\n        \u003ch2\u003eSở thích\u003c/h2\u003e\r\n        \u003col\u003e\r\n          \u003cli\u003eĐọc sách\u003c/li\u003e\r\n          \u003cli\u003eNghe nhạc\u003c/li\u003e\r\n          \u003cli\u003eViết code\u003c/li\u003e\r\n        \u003c/ol\u003e\r\n      \u003c/section\u003e\r\n    \u003c/main\u003e\r\n\r\n    \u003cfooter\u003e\r\n      \u003ca href=\"https://github.com/username\" target=\"_blank\" rel=\"noopener noreferrer\"\u003e\r\n        GitHub của tôi\r\n      \u003c/a\u003e\r\n    \u003c/footer\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "practice-internal-menu",
                          "title":  "Menu điều hướng nội bộ",
                          "description":  "Bài thực hành này dùng để luyện link nội bộ bằng id. Khi click vào menu, trang sẽ tự cuộn đến đúng phần nội dung tương ứng.",
                          "exampleText":  "Sidebar bên trái có các mục “Giới thiệu”, “Kỹ năng”, “Dự án” và “Liên hệ”. Khi click vào “Kỹ năng”, trang cuộn xuống phần kỹ năng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003cnav\u003e\r\n  \u003ca href=\"#gioi-thieu\"\u003eGiới thiệu\u003c/a\u003e\r\n  \u003ca href=\"#ky-nang\"\u003eKỹ năng\u003c/a\u003e\r\n\u003c/nav\u003e\r\n\r\n\u003csection id=\"gioi-thieu\"\u003e...\u003c/section\u003e\r\n\u003csection id=\"ky-nang\"\u003e...\u003c/section\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e\r\n    \u003cmeta charset=\"UTF-8\" /\u003e\r\n    \u003ctitle\u003ePortfolio cá nhân\u003c/title\u003e\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003caside\u003e\r\n      \u003cnav aria-label=\"Mục lục portfolio\"\u003e\r\n        \u003ca href=\"#gioi-thieu\"\u003eGiới thiệu\u003c/a\u003e\r\n        \u003ca href=\"#ky-nang\"\u003eKỹ năng\u003c/a\u003e\r\n        \u003ca href=\"#du-an\"\u003eDự án\u003c/a\u003e\r\n        \u003ca href=\"#lien-he\"\u003eLiên hệ\u003c/a\u003e\r\n      \u003c/nav\u003e\r\n    \u003c/aside\u003e\r\n\r\n    \u003cmain\u003e\r\n      \u003csection id=\"gioi-thieu\"\u003e\r\n        \u003ch2\u003eGiới thiệu\u003c/h2\u003e\r\n        \u003cp\u003eTôi là một Front-End Developer.\u003c/p\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection id=\"ky-nang\"\u003e\r\n        \u003ch2\u003eKỹ năng\u003c/h2\u003e\r\n        \u003cp\u003eHTML, CSS, JavaScript và ReactJS.\u003c/p\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection id=\"du-an\"\u003e\r\n        \u003ch2\u003eDự án\u003c/h2\u003e\r\n        \u003cp\u003eWebsite Code Knowledge.\u003c/p\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection id=\"lien-he\"\u003e\r\n        \u003ch2\u003eLiên hệ\u003c/h2\u003e\r\n        \u003ca href=\"mailto:user@example.com\"\u003euser@example.com\u003c/a\u003e\r\n      \u003c/section\u003e\r\n    \u003c/main\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "practice-product-table",
                          "title":  "Bảng sản phẩm",
                          "description":  "Bài thực hành này dùng để luyện table, tr, th, td, colspan, rowspan, hình ảnh trong bảng và dòng tổng cộng. Đây là bài tổng hợp tốt cho phần table.",
                          "exampleText":  "Một bảng giỏ hàng có thể gồm hình ảnh sản phẩm, tên sản phẩm, số lượng, đơn giá, thành tiền và tổng cộng.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003ctable\u003e\r\n  \u003cthead\u003e...\u003c/thead\u003e\r\n  \u003ctbody\u003e...\u003c/tbody\u003e\r\n  \u003ctfoot\u003e...\u003c/tfoot\u003e\r\n\u003c/table\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003ctable border=\"1\" cellspacing=\"0\" cellpadding=\"8\"\u003e\r\n  \u003cthead\u003e\r\n    \u003ctr\u003e\r\n      \u003cth rowspan=\"2\"\u003eHình ảnh\u003c/th\u003e\r\n      \u003cth rowspan=\"2\"\u003eTên sản phẩm\u003c/th\u003e\r\n      \u003cth colspan=\"3\"\u003eThông tin mua hàng\u003c/th\u003e\r\n    \u003c/tr\u003e\r\n    \u003ctr\u003e\r\n      \u003cth\u003eSố lượng\u003c/th\u003e\r\n      \u003cth\u003eĐơn giá\u003c/th\u003e\r\n      \u003cth\u003eThành tiền\u003c/th\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/thead\u003e\r\n\r\n  \u003ctbody\u003e\r\n    \u003ctr\u003e\r\n      \u003ctd\u003e\r\n        \u003cimg src=\"./images/ao-thun.jpg\" alt=\"Áo thun Front-End\" width=\"80\" /\u003e\r\n      \u003c/td\u003e\r\n      \u003ctd\u003eÁo thun Front-End\u003c/td\u003e\r\n      \u003ctd\u003e2\u003c/td\u003e\r\n      \u003ctd\u003e150.000đ\u003c/td\u003e\r\n      \u003ctd\u003e300.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n    \u003ctr\u003e\r\n      \u003ctd\u003e\r\n        \u003cimg src=\"./images/mu-luoi-trai.jpg\" alt=\"Mũ lưỡi trai\" width=\"80\" /\u003e\r\n      \u003c/td\u003e\r\n      \u003ctd\u003eMũ lưỡi trai\u003c/td\u003e\r\n      \u003ctd\u003e1\u003c/td\u003e\r\n      \u003ctd\u003e120.000đ\u003c/td\u003e\r\n      \u003ctd\u003e120.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tbody\u003e\r\n\r\n  \u003ctfoot\u003e\r\n    \u003ctr\u003e\r\n      \u003cth colspan=\"4\"\u003eTổng cộng\u003c/th\u003e\r\n      \u003ctd\u003e420.000đ\u003c/td\u003e\r\n    \u003c/tr\u003e\r\n  \u003c/tfoot\u003e\r\n\u003c/table\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "practice-registration-form",
                          "title":  "Form đăng ký",
                          "description":  "Bài thực hành này dùng để luyện form, input, label, select, option, textarea, button và các thuộc tính như name, placeholder, required, value.",
                          "exampleText":  "Một form đăng ký tài khoản có thể gồm họ tên, email, mật khẩu, tuổi, giới tính, tỉnh thành, kỹ năng, ảnh đại diện và nút đăng ký.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\" enctype=\"multipart/form-data\"\u003e\r\n  Các trường đăng ký\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n\u003c/form\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003cform action=\"/register\" method=\"post\" enctype=\"multipart/form-data\"\u003e\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"full-name\"\u003eHọ và tên\u003c/label\u003e\r\n    \u003cinput id=\"full-name\" name=\"fullName\" type=\"text\" placeholder=\"Nhập họ và tên\" required /\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"email\"\u003eEmail\u003c/label\u003e\r\n    \u003cinput id=\"email\" name=\"email\" type=\"email\" required /\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"password\"\u003eMật khẩu\u003c/label\u003e\r\n    \u003cinput id=\"password\" name=\"password\" type=\"password\" minlength=\"8\" required /\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"age\"\u003eTuổi\u003c/label\u003e\r\n    \u003cinput id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"60\" /\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cfieldset\u003e\r\n    \u003clegend\u003eGiới tính\u003c/legend\u003e\r\n    \u003clabel\u003e\u003cinput name=\"gender\" type=\"radio\" value=\"male\" checked /\u003e Nam\u003c/label\u003e\r\n    \u003clabel\u003e\u003cinput name=\"gender\" type=\"radio\" value=\"female\" /\u003e Nữ\u003c/label\u003e\r\n    \u003clabel\u003e\u003cinput name=\"gender\" type=\"radio\" value=\"other\" /\u003e Khác\u003c/label\u003e\r\n  \u003c/fieldset\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"city\"\u003eTỉnh/thành phố\u003c/label\u003e\r\n    \u003cselect id=\"city\" name=\"city\" required\u003e\r\n      \u003coption value=\"\"\u003e-- Chọn tỉnh/thành phố --\u003c/option\u003e\r\n      \u003coption value=\"ha-noi\"\u003eHà Nội\u003c/option\u003e\r\n      \u003coption value=\"da-nang\"\u003eĐà Nẵng\u003c/option\u003e\r\n      \u003coption value=\"ho-chi-minh\"\u003eHồ Chí Minh\u003c/option\u003e\r\n    \u003c/select\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cfieldset\u003e\r\n    \u003clegend\u003eKỹ năng\u003c/legend\u003e\r\n    \u003clabel\u003e\u003cinput name=\"skills\" type=\"checkbox\" value=\"html\" /\u003e HTML\u003c/label\u003e\r\n    \u003clabel\u003e\u003cinput name=\"skills\" type=\"checkbox\" value=\"css\" /\u003e CSS\u003c/label\u003e\r\n    \u003clabel\u003e\u003cinput name=\"skills\" type=\"checkbox\" value=\"javascript\" /\u003e JavaScript\u003c/label\u003e\r\n  \u003c/fieldset\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"avatar\"\u003eẢnh đại diện\u003c/label\u003e\r\n    \u003cinput id=\"avatar\" name=\"avatar\" type=\"file\" accept=\"image/*\" /\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cdiv\u003e\r\n    \u003clabel for=\"bio\"\u003eGiới thiệu ngắn\u003c/label\u003e\r\n    \u003ctextarea id=\"bio\" name=\"bio\" rows=\"4\"\u003e\u003c/textarea\u003e\r\n  \u003c/div\u003e\r\n\r\n  \u003cbutton type=\"submit\"\u003eĐăng ký\u003c/button\u003e\r\n  \u003cbutton type=\"reset\"\u003eNhập lại\u003c/button\u003e\r\n\u003c/form\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "practice-html5-layout",
                          "title":  "Layout HTML5 cơ bản",
                          "description":  "Bài thực hành này dùng để luyện các thẻ semantic HTML5 như header, nav, main, section, article, figure và figcaption. Mục tiêu là biết cách chia bố cục trang web có ý nghĩa rõ ràng.",
                          "exampleText":  "Một layout cơ bản có thể gồm header ở trên cùng, nav chứa menu, main chứa nội dung chính, nhiều section bên trong main và các article cho từng bài viết hoặc sản phẩm.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003cbody\u003e\r\n  \u003cheader\u003e...\u003c/header\u003e\r\n  \u003cnav\u003e...\u003c/nav\u003e\r\n  \u003cmain\u003e\r\n    \u003csection\u003e\r\n      \u003carticle\u003e...\u003c/article\u003e\r\n    \u003c/section\u003e\r\n  \u003c/main\u003e\r\n  \u003cfooter\u003e...\u003c/footer\u003e\r\n\u003c/body\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e\r\n    \u003cmeta charset=\"UTF-8\" /\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n    \u003ctitle\u003eBlog Front-End\u003c/title\u003e\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003cheader\u003e\r\n      \u003ch1\u003eBlog Front-End\u003c/h1\u003e\r\n      \u003cp\u003eChia sẻ kiến thức lập trình web.\u003c/p\u003e\r\n    \u003c/header\u003e\r\n\r\n    \u003cnav aria-label=\"Điều hướng chính\"\u003e\r\n      \u003ca href=\"#html\"\u003eHTML\u003c/a\u003e\r\n      \u003ca href=\"#css\"\u003eCSS\u003c/a\u003e\r\n    \u003c/nav\u003e\r\n\r\n    \u003cmain\u003e\r\n      \u003csection id=\"html\"\u003e\r\n        \u003ch2\u003eKiến thức HTML\u003c/h2\u003e\r\n\r\n        \u003carticle\u003e\r\n          \u003ch3\u003eSemantic HTML5\u003c/h3\u003e\r\n          \u003cfigure\u003e\r\n            \u003cimg src=\"./images/semantic-html5.png\" alt=\"Sơ đồ Semantic HTML5\" /\u003e\r\n            \u003cfigcaption\u003eCấu trúc một trang web semantic.\u003c/figcaption\u003e\r\n          \u003c/figure\u003e\r\n          \u003cp\u003eSemantic HTML giúp cấu trúc trang rõ ràng hơn.\u003c/p\u003e\r\n        \u003c/article\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003csection id=\"css\"\u003e\r\n        \u003ch2\u003eKiến thức CSS\u003c/h2\u003e\r\n        \u003carticle\u003e\r\n          \u003ch3\u003eCSS Layout\u003c/h3\u003e\r\n          \u003cp\u003eFlexbox và Grid giúp xây dựng bố cục.\u003c/p\u003e\r\n        \u003c/article\u003e\r\n      \u003c/section\u003e\r\n    \u003c/main\u003e\r\n\r\n    \u003cfooter\u003e\r\n      \u003cp\u003e\u0026copy; 2026 Blog Front-End\u003c/p\u003e\r\n    \u003c/footer\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      },
                      {
                          "id":  "practice-html-knowledge-page",
                          "title":  "Trang lưu kiến thức HTML",
                          "description":  "Bài thực hành này là bài tổng hợp toàn bộ kiến thức HTML đã học. Trang có sidebar bên trái chứa danh sách tiêu đề, còn nội dung bên phải chứa từng nhóm kiến thức với phần giải thích và ví dụ.",
                          "exampleText":  "Trang HTML trong website Code Knowledge có thể chia thành các nhóm: cấu trúc HTML, văn bản và block, inline/link/image/path, table, form, input types, thuộc tính HTML, semantic HTML5 và thực hành.",
                          "codeBlocks":  [
                                             {
                                                 "title":  "Cấu trúc",
                                                 "code":  "\u003cmain class=\"html-page\"\u003e\r\n  \u003caside\u003e\r\n    \u003cnav\u003eDanh sách kiến thức\u003c/nav\u003e\r\n  \u003c/aside\u003e\r\n\r\n  \u003csection class=\"html-content\"\u003e\r\n    Các nhóm kiến thức\r\n  \u003c/section\u003e\r\n\u003c/main\u003e"
                                             },
                                             {
                                                 "title":  "Ví dụ hoàn chỉnh",
                                                 "code":  "\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"vi\"\u003e\r\n  \u003chead\u003e\r\n    \u003cmeta charset=\"UTF-8\" /\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n    \u003ctitle\u003eHTML Knowledge\u003c/title\u003e\r\n    \u003clink rel=\"stylesheet\" href=\"../css/style.css\" /\u003e\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003cmain class=\"html-page\"\u003e\r\n      \u003caside class=\"html-sidebar\"\u003e\r\n        \u003ca href=\"../index.html\"\u003eTrang chủ\u003c/a\u003e\r\n        \u003ch2\u003eHTML\u003c/h2\u003e\r\n\r\n        \u003cnav aria-label=\"Mục lục HTML\"\u003e\r\n          \u003ca href=\"#basic-html\"\u003eCấu trúc HTML\u003c/a\u003e\r\n          \u003ca href=\"#table-group\"\u003eTable\u003c/a\u003e\r\n          \u003ca href=\"#form-group\"\u003eForm\u003c/a\u003e\r\n          \u003ca href=\"#practice-group\"\u003eThực hành\u003c/a\u003e\r\n        \u003c/nav\u003e\r\n      \u003c/aside\u003e\r\n\r\n      \u003csection class=\"html-content\"\u003e\r\n        \u003csection class=\"html-group\" id=\"basic-html\"\u003e\r\n          \u003ch2\u003eCấu trúc HTML cơ bản\u003c/h2\u003e\r\n          \u003carticle class=\"html-card\"\u003e\r\n            \u003ch3\u003eDOCTYPE\u003c/h3\u003e\r\n            \u003cp\u003eDOCTYPE khai báo loại tài liệu HTML.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/section\u003e\r\n\r\n        \u003csection class=\"html-group\" id=\"table-group\"\u003e\r\n          \u003ch2\u003eTable\u003c/h2\u003e\r\n          \u003carticle class=\"html-card\"\u003e\r\n            \u003ch3\u003eTable\u003c/h3\u003e\r\n            \u003cp\u003eTable dùng để hiển thị dữ liệu dạng hàng và cột.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/section\u003e\r\n\r\n        \u003csection class=\"html-group\" id=\"form-group\"\u003e\r\n          \u003ch2\u003eForm\u003c/h2\u003e\r\n          \u003carticle class=\"html-card\"\u003e\r\n            \u003ch3\u003eForm\u003c/h3\u003e\r\n            \u003cp\u003eForm dùng để thu thập dữ liệu người dùng.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/section\u003e\r\n\r\n        \u003csection class=\"html-group\" id=\"practice-group\"\u003e\r\n          \u003ch2\u003eThực hành HTML\u003c/h2\u003e\r\n          \u003carticle class=\"html-card\"\u003e\r\n            \u003ch3\u003eTrang giới thiệu cá nhân\u003c/h3\u003e\r\n            \u003cp\u003eBài thực hành tổng hợp kiến thức HTML cơ bản.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/section\u003e\r\n      \u003c/section\u003e\r\n    \u003c/main\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e"
                                             }
                                         ]
                      }
                  ]
    }
];
