import type { KnowledgeGroup } from "../types/knowledge";

export const cssGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "CSS cơ bản & Selector",
    "cards": [
      {
        "id": "css-selector",
        "title": "CSS selector",
        "description": "CSS selector dùng để chọn phần tử HTML mà mình muốn áp dụng style. Khi chọn đúng phần tử, CSS có thể thay đổi màu chữ, kích thước, khoảng cách, nền, viền hoặc bố cục của phần tử đó.",
        "exampleText": "Trong repo có ví dụ chọn một class tên title2 rồi đổi màu chữ sang màu xanh. Đây là selector cơ bản để style một nhóm phần tử có cùng class.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".title2 {\n  color: blue;\n}"
          }
        ]
      },
      {
        "id": "css-class-selector",
        "title": "Class selector",
        "description": "Class selector dùng để chọn các phần tử có cùng class. Một class có thể được dùng cho nhiều phần tử khác nhau, nên phù hợp khi muốn nhiều phần tử có chung style.",
        "exampleText": "Nếu nhiều tiêu đề trong website cùng có class title, class selector có thể đổi màu hoặc định dạng tất cả các tiêu đề đó cùng lúc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": ".ten-class {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".title {\n  color: #1572b6;\n  font-size: 32px;\n}"
          }
        ]
      },
      {
        "id": "css-id-selector",
        "title": "Id selector",
        "description": "Id selector dùng để chọn phần tử có id cụ thể. Khác với class, id nên là duy nhất trong một trang HTML và phù hợp khi chỉ muốn style một phần tử riêng biệt.",
        "exampleText": "Trong repo có ví dụ chọn phần tử có id title để đổi màu. Đây là cách chọn một phần tử cụ thể bằng id selector.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "#ten-id {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "#title {\n  color: red;\n}"
          }
        ]
      },
      {
        "id": "css-tag-selector",
        "title": "Tag selector",
        "description": "Tag selector dùng để chọn trực tiếp theo tên thẻ HTML như p, h1, h2, div hoặc a. Style sẽ áp dụng cho tất cả thẻ cùng loại trong phạm vi được chọn.",
        "exampleText": "Nếu chọn thẻ p, toàn bộ đoạn văn trong trang có thể được đổi màu hoặc chỉnh font chữ cùng lúc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "ten-the {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "p {\n  color: #4b5563;\n  line-height: 1.6;\n}"
          }
        ]
      },
      {
        "id": "css-combined-selector",
        "title": "Selector kết hợp",
        "description": "Selector kết hợp dùng khi muốn chọn phần tử cụ thể hơn, ví dụ chỉ chọn thẻ h2 hoặc h3 có class title. Cách này giúp tránh ảnh hưởng nhầm đến phần tử khác cũng có cùng class.",
        "exampleText": "h2.title và h3.title chỉ chọn các heading tương ứng có class title, thay vì chọn toàn bộ phần tử mang class title.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "ten-the.ten-class {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "h2.title,\nh3.title {\n  color: #1572b6;\n  font-weight: 700;\n}"
          }
        ]
      },
      {
        "id": "css-child-selector",
        "title": "Child selector",
        "description": "Child selector dùng để chọn phần tử con trực tiếp của một phần tử cha. Nó không chọn các phần tử cháu nằm sâu hơn trong cấu trúc HTML.",
        "exampleText": "Chỉ những thẻ h1 nằm ngay bên trong .box mới được áp dụng style; h1 nằm trong một phần tử con khác của .box sẽ không được chọn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": ".parent > .child {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".box > h1 {\n  color: #1572b6;\n}"
          }
        ]
      },
      {
        "id": "css-sibling-selector",
        "title": "Sibling selector",
        "description": "Sibling selector dùng để chọn các phần tử cùng cấp trong cùng một phần tử cha. Dấu + chọn phần tử đứng ngay sau, còn dấu ~ chọn các phần tử cùng cấp đứng sau.",
        "exampleText": "Có thể dùng + để chọn đoạn văn ngay sau tiêu đề hoặc dùng ~ để chọn tất cả đoạn văn cùng cấp đứng sau tiêu đề.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": ".first + .next {\n  property: value;\n}\n\n.first ~ .following {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".title + p {\n  margin-top: 8px;\n}\n\n.title ~ p {\n  color: #4b5563;\n}"
          }
        ]
      },
      {
        "id": "css-checked-selector",
        "title": "Checked selector",
        "description": "Checked selector dùng để chọn input đang được tick hoặc được chọn. Nó thường dùng với checkbox, radio và có thể kết hợp sibling selector để thay đổi nội dung liên quan.",
        "exampleText": "Khi checkbox trong todo list được checked, phần chữ phía sau có thể đổi màu đỏ và bị gạch ngang để thể hiện công việc đã hoàn thành.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "input:checked {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".todo-item input:checked + span {\n  color: red;\n  text-decoration: line-through;\n}"
          }
        ]
      },
      {
        "id": "css-attribute-selector",
        "title": "Attribute selector",
        "description": "Attribute selector dùng để chọn phần tử dựa trên thuộc tính HTML. Nó hữu ích khi muốn chọn link có target, ảnh có alt hoặc phần tử có một thuộc tính cụ thể.",
        "exampleText": "Trong khu vực .website, có thể chọn tất cả thẻ a có thuộc tính target để định dạng riêng các link mở ở tab khác.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "[attribute] {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": ".website a[target] {\n  color: #1572b6;\n  font-weight: 700;\n}"
          }
        ]
      },
      {
        "id": "css-prefix-attribute-selector",
        "title": "Prefix attribute selector",
        "description": "Prefix attribute selector dùng để chọn thuộc tính có giá trị bắt đầu bằng một chuỗi cụ thể. Dạng selector này sử dụng toán tử ^=.",
        "exampleText": "Có thể chọn các link có href bắt đầu bằng domain fullstack.edu.vn hoặc một tiền tố đường dẫn cụ thể.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "[attribute^=\"prefix\"] {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "a[href^=\"https://fullstack.edu.vn\"] {\n  color: green;\n}"
          }
        ]
      },
      {
        "id": "css-contains-attribute-selector",
        "title": "Contains attribute selector",
        "description": "Contains attribute selector dùng để chọn thuộc tính có chứa một chuỗi ở bất kỳ vị trí nào trong giá trị. Dạng selector này sử dụng toán tử *=.",
        "exampleText": "Có thể chọn tất cả link có href chứa domain fullstack.edu.vn mà không cần domain nằm ở đầu hoặc cuối giá trị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "[attribute*=\"text\"] {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "a[href*=\"fullstack.edu.vn\"] {\n  text-decoration: underline;\n}"
          }
        ]
      },
      {
        "id": "css-suffix-attribute-selector",
        "title": "Suffix attribute selector",
        "description": "Suffix attribute selector dùng để chọn thuộc tính có giá trị kết thúc bằng một chuỗi cụ thể. Dạng selector này sử dụng toán tử $= và thường dùng để chọn file theo phần mở rộng.",
        "exampleText": "Có thể chọn link có href kết thúc bằng .jpg rồi đổi màu chữ sang đỏ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "[attribute$=\"suffix\"] {\n  property: value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "a[href$=\".jpg\"] {\n  color: red;\n}"
          }
        ]
      }
    ]
  },
  {
      "label":  "Nhóm 2",
      "title":  "Text & Font",
      "cards":  [
                    {
                        "id":  "css-color",
                        "title":  "Color",
                        "description":  "Color dùng để đổi màu chữ của phần tử HTML. Có nhiều cách khai báo màu như tên màu, mã hex, RGB, RGBA, HSL hoặc HSLA.",
                        "exampleText":  "Một đoạn văn có thể được đổi màu chữ thành xanh lá, cam, đỏ hoặc một màu bất kỳ theo thiết kế giao diện.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "color: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "p {\n  color: green;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-rgb-color",
                        "title":  "RGB color",
                        "description":  "RGB là cách khai báo màu dựa trên ba giá trị: đỏ, xanh lá, xanh dương. Mỗi giá trị thường nằm trong khoảng từ 0 đến 255.",
                        "exampleText":  "Có thể dùng RGB để tạo màu cam cho chữ trong phần nội dung chính.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "color: rgb(red, green, blue);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".content {\n  color: rgb(255, 140, 0);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-rgba-color",
                        "title":  "RGBA color",
                        "description":  "RGBA giống RGB nhưng có thêm giá trị alpha để điều chỉnh độ trong suốt của màu. Alpha thường nằm từ 0 đến 1.",
                        "exampleText":  "Một đoạn chữ có thể dùng màu cam nhưng giảm độ đậm bằng alpha để chữ nhìn nhẹ hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "color: rgba(red, green, blue, alpha);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".note {\n  color: rgba(255, 140, 0, 0.65);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-hsl-hsla-color",
                        "title":  "HSL / HSLA color",
                        "description":  "HSL khai báo màu theo hue, saturation và lightness. HSLA có thêm alpha để điều chỉnh độ trong suốt. Cách này dễ kiểm soát sắc độ, độ bão hòa và độ sáng của màu.",
                        "exampleText":  "Có thể dùng HSLA để tạo màu xanh lá với độ sáng và độ trong suốt cụ thể.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "color: hsl(hue, saturation, lightness);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".success {\n  color: hsla(120, 60%, 40%, 0.8);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-font-size",
                        "title":  "Font size",
                        "description":  "Font size dùng để chỉnh kích thước chữ. Kích thước chữ có thể dùng nhiều đơn vị như px, em, rem hoặc phần trăm.",
                        "exampleText":  "Tiêu đề chính có thể dùng font size lớn hơn đoạn văn để tạo phân cấp nội dung rõ ràng.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-size: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "h1 {\n  font-size: 2rem;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-em-unit",
                        "title":  "Đơn vị em",
                        "description":  "Em là đơn vị tương đối, phụ thuộc vào kích thước chữ của phần tử cha gần nhất. Nếu phần tử cha thay đổi font size, phần tử con dùng em cũng thay đổi theo.",
                        "exampleText":  "Nếu một box có font size lớn, đoạn văn bên trong dùng em sẽ được tính dựa trên kích thước chữ của box đó.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-size: number-em;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".box p {\n  font-size: 1.2em;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-rem-unit",
                        "title":  "Đơn vị rem",
                        "description":  "Rem là đơn vị tương đối, phụ thuộc vào font size của phần tử gốc, thường là thẻ html. Dùng rem giúp kích thước chữ ổn định và dễ quản lý hơn trong toàn bộ website.",
                        "exampleText":  "Các tiêu đề, đoạn văn và button trong website có thể dùng rem để giữ tỉ lệ chữ đồng nhất.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-size: number-rem;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "h2 {\n  font-size: 1.5rem;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-font-face",
                        "title":  "Font face",
                        "description":  "Font face dùng để nhúng font chữ từ file bên ngoài vào website. Cách này giúp website sử dụng font riêng thay vì chỉ phụ thuộc vào font mặc định của trình duyệt.",
                        "exampleText":  "Website lưu kiến thức code có thể dùng một font riêng để giao diện đồng bộ và dễ đọc hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "@font-face { font-family: \"FontName\"; src: url(\"font.woff2\"); }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "@font-face {\n  font-family: \"OpenSansLocal\";\n  src: url(\"/fonts/open-sans.woff2\") format(\"woff2\");\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-font-family",
                        "title":  "Font family",
                        "description":  "Font family dùng để khai báo font chữ cho phần tử. Có thể khai báo font chính và font dự phòng. Nếu font chính không tải được, trình duyệt sẽ dùng font dự phòng.",
                        "exampleText":  "Toàn bộ website có thể dùng font Open Sans, nếu font này không có thì trình duyệt dùng sans-serif.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-family: primary-font, fallback-font;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "body {\n  font-family: \"Open Sans\", Arial, sans-serif;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-font-weight",
                        "title":  "Font weight",
                        "description":  "Font weight dùng để chỉnh độ đậm của chữ. Một số giá trị thường gặp là 300, 400, 500, 700 hoặc các từ khóa như normal, bold.",
                        "exampleText":  "Tiêu đề có thể dùng font weight 700 để nổi bật, còn đoạn văn dùng font weight 400 để dễ đọc.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-weight: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "h2 {\n  font-weight: 700;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-line-height",
                        "title":  "Line height",
                        "description":  "Line height dùng để chỉnh chiều cao dòng chữ. Nó giúp các dòng văn bản có khoảng cách dễ đọc hơn, đặc biệt với đoạn văn dài.",
                        "exampleText":  "Phần giải thích kiến thức trong website nên có line height lớn hơn mặc định để đọc thoải mái hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "line-height: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".description {\n  line-height: 1.7;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-letter-spacing",
                        "title":  "Letter spacing",
                        "description":  "Letter spacing dùng để chỉnh khoảng cách giữa các ký tự trong chữ. Tăng letter spacing giúp chữ thoáng hơn, nhưng nếu tăng quá nhiều sẽ khó đọc.",
                        "exampleText":  "Một tiêu đề phụ có thể tăng khoảng cách chữ nhẹ để tạo cảm giác hiện đại.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "letter-spacing: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".subtitle {\n  letter-spacing: 0.04em;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-word-spacing",
                        "title":  "Word spacing",
                        "description":  "Word spacing dùng để chỉnh khoảng cách giữa các từ trong văn bản. Thuộc tính này giúp kiểm soát độ thoáng giữa các từ.",
                        "exampleText":  "Một đoạn mô tả có thể tăng word spacing nhẹ để các từ không bị sát nhau.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "word-spacing: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".description {\n  word-spacing: 3px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-text-decoration",
                        "title":  "Text decoration",
                        "description":  "Text decoration dùng để trang trí chữ bằng gạch chân, gạch ngang hoặc gạch trên. Có thể dùng cho link, giá cũ, tiêu đề hoặc nội dung cần nhấn mạnh.",
                        "exampleText":  "Một giá cũ trong bảng sản phẩm có thể dùng gạch ngang để thể hiện giá đó không còn áp dụng.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "text-decoration: line style color;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".old-price {\n  text-decoration: line-through;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-text-transform",
                        "title":  "Text transform",
                        "description":  "Text transform dùng để biến đổi kiểu chữ như viết hoa toàn bộ, viết thường toàn bộ hoặc viết hoa chữ cái đầu mỗi từ.",
                        "exampleText":  "Tiêu đề bài học có thể dùng kiểu viết hoa chữ cái đầu để nhìn chuyên nghiệp hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "text-transform: none | uppercase | lowercase | capitalize;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".lesson-title {\n  text-transform: capitalize;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-font-style",
                        "title":  "Font style",
                        "description":  "Font style dùng để chỉnh kiểu chữ, phổ biến nhất là chữ thường và chữ nghiêng.",
                        "exampleText":  "Một dòng ghi chú hoặc thuật ngữ có thể dùng chữ nghiêng để khác biệt với nội dung chính.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "font-style: normal | italic | oblique;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".note {\n  font-style: italic;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-word-wrap",
                        "title":  "Word wrap",
                        "description":  "Word wrap dùng để xử lý khi một chuỗi chữ quá dài không có khoảng trắng. Nó cho phép chữ tự xuống dòng để không bị tràn ra khỏi khung.",
                        "exampleText":  "Nếu người dùng nhập một chuỗi ký tự rất dài trong phần bình luận, word wrap giúp nội dung không phá vỡ layout.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "overflow-wrap: normal | break-word;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".comment {\n  overflow-wrap: break-word;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-word-break",
                        "title":  "Word break",
                        "description":  "Word break cũng dùng để xử lý chữ quá dài, nhưng có thể bẻ chữ mạnh hơn. Thuộc tính này giúp nội dung dài không bị tràn khỏi phần tử cha.",
                        "exampleText":  "Một đường link rất dài hoặc một chuỗi không có dấu cách có thể bị bẻ dòng để nằm gọn trong box.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "word-break: normal | break-all | keep-all;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".long-url {\n  word-break: break-all;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-text-indent",
                        "title":  "Text indent",
                        "description":  "Text indent dùng để thụt đầu dòng của đoạn văn bản. Thường dùng khi muốn dòng đầu tiên của đoạn văn lùi vào trong.",
                        "exampleText":  "Một đoạn mô tả dài có thể thụt đầu dòng để giống kiểu trình bày văn bản truyền thống.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "text-indent: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".article p {\n  text-indent: 2em;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-text-align",
                        "title":  "Text align",
                        "description":  "Text align dùng để căn chỉnh nội dung theo chiều ngang. Các kiểu thường gặp là căn trái, căn phải, căn giữa và căn đều hai bên.",
                        "exampleText":  "Tiêu đề có thể căn giữa, đoạn văn có thể căn đều hai bên để nhìn gọn hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "text-align: left | right | center | justify;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "h1 {\n  text-align: center;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-text-align-last",
                        "title":  "Text align last",
                        "description":  "Text align last dùng để căn chỉnh dòng cuối cùng của đoạn văn khi dùng text align.",
                        "exampleText":  "Một đoạn văn căn đều hai bên nhưng dòng cuối có thể được căn giữa để tạo bố cục đặc biệt.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "text-align-last: auto | left | right | center | justify;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".special-paragraph {\n  text-align: justify;\n  text-align-last: center;\n}"
                                           }
                                       ]
                    }
                ]
  },
  {
    "label": "Nhóm 3",
    "title": "Box model",
    "cards": [
      {
        "id": "css-box-model",
        "title": "Box model",
        "description": "Box model là cách CSS tính kích thước và khoảng cách của một phần tử. Một phần tử thường gồm phần nội dung, padding, border và margin.",
        "exampleText": "Một card kiến thức có thể có nội dung bên trong, padding để chữ không sát viền, border để tạo đường viền và margin để cách xa card khác.",
        "codeBlocks": [{"title":"Cú pháp","code":"Tổng chiều rộng = content + padding + border\nKhoảng cách bên ngoài = margin"},{"title":"Ví dụ","code":".card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #dbe3ea;\n  margin-bottom: 24px;\n}"}]
      },
      {
        "id": "css-width",
        "title": "Width",
        "description": "width dùng để đặt chiều rộng cho phần tử. Trong repo có ví dụ .box được đặt width: 200px.",
        "exampleText": "Một khối nội dung có thể đặt chiều rộng 200px để tạo box cố định.",
        "codeBlocks": [{"title":"Cú pháp","code":"width: value;"},{"title":"Ví dụ","code":".box {\n  width: 200px;\n}"}]
      },
      {
        "id": "css-height",
        "title": "Height",
        "description": "height dùng để đặt chiều cao cho phần tử. Trong repo có ví dụ .box được đặt height: 200px, kết hợp với width: 200px để tạo một khối vuông.",
        "exampleText": "Một box demo có thể đặt width 200px và height 200px để tạo hình vuông màu xanh.",
        "codeBlocks": [{"title":"Cú pháp","code":"height: value;"},{"title":"Ví dụ","code":".box {\n  width: 200px;\n  height: 200px;\n  background: green;\n}"}]
      },
      {
        "id": "css-inline-width-height",
        "title": "Width và height với inline element",
        "description": "Inline element thông thường không nhận width và height như block element. Margin và padding theo chiều dọc cũng không đẩy bố cục xung quanh theo cách của block. Muốn phần tử inline nhận kích thước rõ ràng, có thể đổi sang inline-block.",
        "exampleText": "Một thẻ span nếu muốn có kích thước rõ ràng giống một button nhỏ thì nên đổi sang display: inline-block.",
        "codeBlocks": [{"title":"Cú pháp","code":"display: inline-block;\nwidth: value;\nheight: value;"},{"title":"Ví dụ","code":".span {\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n}"}]
      },
      {
        "id": "css-max-width",
        "title": "Max-width",
        "description": "max-width dùng để giới hạn chiều rộng tối đa của phần tử. Khi màn hình lớn, phần tử không vượt quá giá trị max-width; khi không gian nhỏ hơn, phần tử vẫn có thể co lại.",
        "exampleText": "Container chính của website có thể đặt max-width để nội dung không bị kéo quá dài trên màn hình lớn.",
        "codeBlocks": [{"title":"Cú pháp","code":"max-width: value;"},{"title":"Ví dụ","code":".container {\n  width: 100%;\n  max-width: 1200px;\n}"}]
      },
      {
        "id": "css-min-width",
        "title": "Min-width",
        "description": "min-width dùng để đặt chiều rộng nhỏ nhất cho phần tử. Phần tử sẽ không nhỏ hơn giá trị này, ngay cả khi không gian bên ngoài bị thu hẹp.",
        "exampleText": "Một button có thể đặt min-width để không bị quá nhỏ khi nội dung ngắn.",
        "codeBlocks": [{"title":"Cú pháp","code":"min-width: value;"},{"title":"Ví dụ","code":"button {\n  min-width: 120px;\n}"}]
      },
      {
        "id": "css-padding",
        "title": "Padding",
        "description": "padding là khoảng cách bên trong phần tử, nằm giữa nội dung và border. Padding giúp nội dung không bị dính sát vào viền. Trong repo có ví dụ .box dùng các kiểu padding khác nhau và .span dùng padding: 10px 30px.",
        "exampleText": "Một card kiến thức nên có padding để chữ bên trong dễ đọc hơn.",
        "codeBlocks": [{"title":"Cú pháp","code":"padding: value;"},{"title":"Ví dụ","code":".card {\n  padding: 20px;\n}\n\n.span {\n  padding: 10px 30px;\n}"}]
      },
      {
        "id": "css-padding-shorthand",
        "title": "Padding rút gọn",
        "description": "Padding có thể viết rút gọn bằng 1, 2, 3 hoặc 4 giá trị. Thứ tự bốn giá trị là trên, phải, dưới, trái.",
        "exampleText": "Một box có thể đặt padding trên dưới là 10px, trái phải là 20px để nội dung cân đối hơn.",
        "codeBlocks": [{"title":"Cú pháp","code":"padding: all;\npadding: vertical horizontal;\npadding: top horizontal bottom;\npadding: top right bottom left;"},{"title":"Ví dụ","code":".box {\n  padding: 10px 20px;\n}"}]
      },
      {
        "id": "css-padding-directions",
        "title": "Padding theo từng hướng",
        "description": "Padding có thể đặt riêng cho từng hướng: trên, phải, dưới và trái. Cách này dùng khi chỉ muốn tạo khoảng cách bên trong ở một phía cụ thể.",
        "exampleText": "Một tiêu đề trong card có thể cần padding-left để lùi chữ vào trong.",
        "codeBlocks": [{"title":"Cú pháp","code":"padding-top: value;\npadding-right: value;\npadding-bottom: value;\npadding-left: value;"},{"title":"Ví dụ","code":".card-title {\n  padding-left: 16px;\n}"}]
      },
      {
        "id": "css-margin",
        "title": "Margin",
        "description": "margin là khoảng cách bên ngoài phần tử, nằm ngoài border. Margin dùng để tạo khoảng cách giữa các phần tử với nhau.",
        "exampleText": "Các card kiến thức có thể dùng margin-bottom để tách nhau theo chiều dọc.",
        "codeBlocks": [{"title":"Cú pháp","code":"margin: value;"},{"title":"Ví dụ","code":".knowledge-card {\n  margin-bottom: 24px;\n}"}]
      },
      {
        "id": "css-margin-shorthand",
        "title": "Margin rút gọn",
        "description": "Margin có thể viết rút gọn giống padding bằng 1, 2, 3 hoặc 4 giá trị. Thứ tự bốn giá trị là trên, phải, dưới, trái.",
        "exampleText": "Một section có thể có margin trên dưới lớn hơn, trái phải bằng auto để nằm giữa trang.",
        "codeBlocks": [{"title":"Cú pháp","code":"margin: all;\nmargin: vertical horizontal;\nmargin: top horizontal bottom;\nmargin: top right bottom left;"},{"title":"Ví dụ","code":"section {\n  margin: 40px auto;\n}"}]
      },
      {
        "id": "css-margin-directions",
        "title": "Margin theo từng hướng",
        "description": "Margin có thể đặt riêng từng hướng bằng margin-top, margin-right, margin-bottom và margin-left.",
        "exampleText": "Một tiêu đề có thể dùng margin-bottom để cách phần mô tả bên dưới.",
        "codeBlocks": [{"title":"Cú pháp","code":"margin-top: value;\nmargin-right: value;\nmargin-bottom: value;\nmargin-left: value;"},{"title":"Ví dụ","code":"h2 {\n  margin-bottom: 12px;\n}"}]
      },
      {
        "id": "css-margin-auto",
        "title": "Margin auto",
        "description": "margin auto thường dùng để căn giữa một block element theo chiều ngang. Phần tử cần có width hoặc max-width rõ ràng và còn khoảng trống ngang để trình duyệt phân phối.",
        "exampleText": "Phần nội dung chính của page CSS có thể đặt max-width và margin auto để nằm giữa màn hình.",
        "codeBlocks": [{"title":"Cú pháp","code":"width: value;\nmargin-left: auto;\nmargin-right: auto;"},{"title":"Ví dụ","code":"main {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}"}]
      },
      {
        "id": "css-border",
        "title": "Border",
        "description": "border dùng để tạo đường viền cho phần tử. Border thường gồm độ dày, kiểu viền và màu viền. Trong repo có ví dụ viết gọn border: 3px solid red.",
        "exampleText": "Một box ghi chú có thể có border màu đỏ để nổi bật hơn.",
        "codeBlocks": [{"title":"Cú pháp","code":"border: width style color;"},{"title":"Ví dụ","code":".note {\n  border: 3px solid red;\n}"}]
      },
      {
        "id": "css-border-width",
        "title": "Border width",
        "description": "border-width dùng để đặt độ dày của đường viền. Có thể đặt chung cho cả bốn cạnh hoặc đặt riêng bằng border-top-width, border-right-width, border-bottom-width và border-left-width.",
        "exampleText": "Một box có thể có border-top dày hơn để tạo điểm nhấn ở phía trên.",
        "codeBlocks": [{"title":"Cú pháp","code":"border-width: value;\nborder-top-width: value;"},{"title":"Ví dụ","code":".box {\n  border-style: solid;\n  border-width: 6px 1px 1px;\n}"}]
      },
      {
        "id": "css-border-style",
        "title": "Border style",
        "description": "border-style dùng để đặt kiểu đường viền. Một số kiểu thường gặp là none, solid, dashed, dotted và double.",
        "exampleText": "Một box lưu ý có thể dùng viền dashed để khác với box nội dung thường.",
        "codeBlocks": [{"title":"Cú pháp","code":"border-style: none | solid | dashed | dotted | double;"},{"title":"Ví dụ","code":".notice {\n  border-width: 2px;\n  border-style: dashed;\n}"}]
      },
      {
        "id": "css-border-color",
        "title": "Border color",
        "description": "border-color dùng để đặt màu cho đường viền. Có thể đặt một màu chung hoặc nhiều màu cho các cạnh khác nhau. Trong repo có ví dụ border-color: red green blue yellow.",
        "exampleText": "Một box có thể có bốn cạnh với bốn màu khác nhau để minh họa cách hoạt động của border-color.",
        "codeBlocks": [{"title":"Cú pháp","code":"border-color: top right bottom left;"},{"title":"Ví dụ","code":".box {\n  border-width: 4px;\n  border-style: solid;\n  border-color: red green blue yellow;\n}"}]
      },
      {
        "id": "css-border-sides",
        "title": "Border từng cạnh",
        "description": "Có thể đặt border riêng cho từng cạnh bằng border-left, border-top, border-right và border-bottom. Cách này phù hợp khi chỉ muốn một cạnh có viền hoặc mỗi cạnh có style khác nhau.",
        "exampleText": "Một đoạn ghi chú có thể chỉ cần border-left màu xanh để tạo hiệu ứng quote hoặc note.",
        "codeBlocks": [{"title":"Cú pháp","code":"border-top: width style color;\nborder-right: width style color;\nborder-bottom: width style color;\nborder-left: width style color;"},{"title":"Ví dụ","code":".note {\n  border-left: 4px solid #1572b6;\n  padding-left: 16px;\n}"}]
      },
      {
        "id": "css-border-radius",
        "title": "Border radius",
        "description": "border-radius dùng để bo góc phần tử. Giá trị càng lớn thì góc càng tròn. Nếu phần tử có width và height bằng nhau, dùng border-radius: 50% có thể tạo hình tròn.",
        "exampleText": "Button trong website có thể dùng border-radius lớn để tạo dạng nút bo tròn.",
        "codeBlocks": [{"title":"Cú pháp","code":"border-radius: value;"},{"title":"Ví dụ","code":"button {\n  border-radius: 999px;\n}\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}"}]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Background, Shadow, Opacity, Overflow",
    "cards": [
      {
        "id": "css-background-color",
        "title": "Background color",
        "description": "Background color dùng để đặt màu nền cho phần tử. Có thể dùng tên màu, mã hex, RGB, RGBA, HSL hoặc HSLA.",
        "exampleText": "Một card kiến thức có thể có nền trắng, còn toàn bộ trang có thể có nền xám nhạt để dễ phân biệt nội dung chính.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-color: color;"},{"title":"Ví dụ","code":"body {\n  background-color: #f3f4f6;\n}\n\n.card {\n  background-color: #fff;\n}"}]
      },
      {
        "id": "css-background-image",
        "title": "Background image",
        "description": "Background image dùng để đặt hình ảnh làm nền cho phần tử. Ảnh nền không phải là nội dung chính như thẻ img mà chỉ là phần trang trí giao diện.",
        "exampleText": "Phần banner đầu trang có thể dùng một hình ảnh làm nền phía sau tiêu đề.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-image: url(\"image-path\");"},{"title":"Ví dụ","code":".banner {\n  background-image: url(\"/images/banner.jpg\");\n}"}]
      },
      {
        "id": "css-background-repeat",
        "title": "Background repeat",
        "description": "Background repeat dùng để quy định ảnh nền có lặp lại hay không. Mặc định, nếu ảnh nhỏ hơn phần tử, trình duyệt có thể lặp ảnh theo cả chiều ngang và chiều dọc.",
        "exampleText": "Nếu dùng một icon nhỏ làm background, ảnh có thể bị lặp nhiều lần. Khi không muốn lặp, cần đặt chế độ không lặp.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-repeat: repeat | no-repeat | repeat-x | repeat-y;"},{"title":"Ví dụ","code":".banner {\n  background-image: url(\"/images/banner.jpg\");\n  background-repeat: no-repeat;\n}"}]
      },
      {
        "id": "css-background-size",
        "title": "Background size",
        "description": "Background size dùng để điều chỉnh kích thước ảnh nền. Có thể cho ảnh phủ toàn bộ phần tử, nằm trọn trong phần tử, tự co giãn hoặc đặt kích thước cụ thể.",
        "exampleText": "Một banner có ảnh nền nên dùng kiểu phủ toàn bộ khu vực để ảnh không bị lặp và nhìn đầy đủ hơn.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-size: auto | cover | contain | width height;"},{"title":"Ví dụ","code":".banner {\n  background-size: cover;\n}"}]
      },
      {
        "id": "css-background-position",
        "title": "Background position",
        "description": "Background position dùng để xác định vị trí của ảnh nền trong phần tử. Có thể đặt ảnh ở giữa, bên trái, bên phải, phía trên hoặc phía dưới.",
        "exampleText": "Ảnh nền của banner có thể đặt ở giữa để phần quan trọng của ảnh luôn nằm trong vùng nhìn thấy.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-position: horizontal vertical;"},{"title":"Ví dụ","code":".banner {\n  background-position: center center;\n}"}]
      },
      {
        "id": "css-background-attachment",
        "title": "Background attachment",
        "description": "Background attachment dùng để quy định ảnh nền cuộn theo nội dung hay được cố định khi người dùng cuộn trang.",
        "exampleText": "Một section có thể dùng ảnh nền cố định để tạo hiệu ứng khi người dùng cuộn trang.",
        "codeBlocks": [{"title":"Cú pháp","code":"background-attachment: scroll | fixed | local;"},{"title":"Ví dụ","code":".hero {\n  background-attachment: fixed;\n}"}]
      },
      {
        "id": "css-background-shorthand",
        "title": "Background shorthand",
        "description": "Background shorthand là cách viết gộp nhiều thuộc tính background trong một khai báo. Có thể gộp màu nền, ảnh nền, vị trí, kích thước, lặp ảnh và attachment.",
        "exampleText": "Một banner có thể khai báo cùng lúc màu nền dự phòng, ảnh nền, vị trí ở giữa, không lặp ảnh và kích thước phủ toàn bộ.",
        "codeBlocks": [{"title":"Cú pháp","code":"background: color image position / size repeat attachment;"},{"title":"Ví dụ","code":".banner {\n  background: #1f2937 url(\"/images/banner.jpg\") center / cover no-repeat fixed;\n}"}]
      },
      {
        "id": "css-box-shadow",
        "title": "Box shadow",
        "description": "Box shadow dùng để tạo bóng đổ cho phần tử. Bóng đổ giúp phần tử nổi lên khỏi nền và tạo chiều sâu cho giao diện.",
        "exampleText": "Các card kiến thức trong website có thể dùng box shadow nhẹ để trông giống những tấm thẻ nổi trên nền trang.",
        "codeBlocks": [{"title":"Cú pháp","code":"box-shadow: offset-x offset-y blur spread color;"},{"title":"Ví dụ","code":".card {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);\n}"}]
      },
      {
        "id": "css-text-shadow",
        "title": "Text shadow",
        "description": "Text shadow dùng để tạo bóng cho chữ. Thuộc tính này thường dùng cho tiêu đề, banner hoặc chữ nằm trên ảnh nền.",
        "exampleText": "Tiêu đề trên banner có thể dùng text shadow để dễ đọc hơn khi nằm trên ảnh nền sáng hoặc phức tạp.",
        "codeBlocks": [{"title":"Cú pháp","code":"text-shadow: offset-x offset-y blur color;"},{"title":"Ví dụ","code":".banner-title {\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n}"}]
      },
      {
        "id": "css-opacity",
        "title": "Opacity",
        "description": "Opacity dùng để chỉnh độ trong suốt của phần tử. Giá trị càng thấp thì phần tử càng mờ. Khi dùng opacity cho phần tử cha, toàn bộ nội dung bên trong cũng bị mờ theo.",
        "exampleText": "Một box thông báo phụ có thể giảm opacity để nhìn nhẹ hơn so với nội dung chính.",
        "codeBlocks": [{"title":"Cú pháp","code":"opacity: number; /* từ 0 đến 1 */"},{"title":"Ví dụ","code":".secondary-notice {\n  opacity: 0.65;\n}"}]
      },
      {
        "id": "css-filter",
        "title": "Filter",
        "description": "Filter dùng để tạo hiệu ứng hình ảnh như làm mờ, tăng sáng, giảm sáng, chuyển grayscale hoặc thay đổi độ tương phản.",
        "exampleText": "Một ảnh đại diện có thể dùng filter grayscale để chuyển thành ảnh đen trắng khi chưa hover.",
        "codeBlocks": [{"title":"Cú pháp","code":"filter: function(value);"},{"title":"Ví dụ","code":".avatar {\n  filter: grayscale(100%);\n}\n\n.avatar:hover {\n  filter: grayscale(0);\n}"}]
      },
      {
        "id": "css-overflow",
        "title": "Overflow",
        "description": "Overflow dùng để xử lý trường hợp nội dung bên trong vượt quá kích thước của phần tử cha. Nó quyết định phần nội dung bị tràn sẽ hiển thị, ẩn đi hay có thanh cuộn.",
        "exampleText": "Một khung chứa đoạn mô tả dài có thể dùng overflow để tránh làm vỡ layout.",
        "codeBlocks": [{"title":"Cú pháp","code":"overflow: visible | hidden | scroll | auto;"},{"title":"Ví dụ","code":".content-box {\n  width: 300px;\n  height: 160px;\n  overflow: auto;\n}"}]
      },
      {
        "id": "css-overflow-hidden",
        "title": "Overflow hidden",
        "description": "Overflow hidden dùng để ẩn phần nội dung bị tràn ra ngoài phần tử cha. Phần vượt quá kích thước của khung sẽ không hiển thị.",
        "exampleText": "Một card có chiều cao cố định có thể dùng overflow hidden để không cho nội dung dài tràn ra ngoài.",
        "codeBlocks": [{"title":"Cú pháp","code":"overflow: hidden;"},{"title":"Ví dụ","code":".card {\n  height: 200px;\n  overflow: hidden;\n}"}]
      },
      {
        "id": "css-overflow-scroll",
        "title": "Overflow scroll",
        "description": "Overflow scroll tạo thanh cuộn cho phần tử, kể cả khi nội dung chưa chắc đã tràn. Người dùng có thể cuộn để xem phần nội dung vượt quá.",
        "exampleText": "Một khung code có chiều cao cố định có thể dùng overflow scroll để xem toàn bộ nội dung code dài.",
        "codeBlocks": [{"title":"Cú pháp","code":"overflow: scroll;"},{"title":"Ví dụ","code":".code-box {\n  height: 240px;\n  overflow: scroll;\n}"}]
      },
      {
        "id": "css-overflow-auto",
        "title": "Overflow auto",
        "description": "Overflow auto chỉ hiển thị thanh cuộn khi nội dung thật sự bị tràn. Đây là cách dùng linh hoạt hơn overflow scroll.",
        "exampleText": "Một sidebar chứa nhiều tiêu đề có thể dùng overflow auto để khi danh sách dài thì tự xuất hiện thanh cuộn.",
        "codeBlocks": [{"title":"Cú pháp","code":"overflow: auto;"},{"title":"Ví dụ","code":".sidebar {\n  max-height: 100vh;\n  overflow: auto;\n}"}]
      },
      {
        "id": "css-overflow-x-y",
        "title": "Overflow x / y",
        "description": "Overflow x dùng để xử lý tràn theo chiều ngang, còn overflow y xử lý tràn theo chiều dọc. Có thể kiểm soát riêng từng hướng thay vì áp dụng chung cho cả hai chiều.",
        "exampleText": "Ô hiển thị code có thể cho phép cuộn ngang bằng overflow x, còn nội dung bài viết dài có thể cho phép cuộn dọc bằng overflow y.",
        "codeBlocks": [{"title":"Cú pháp","code":"overflow-x: value;\noverflow-y: value;"},{"title":"Ví dụ","code":".code-box {\n  overflow-x: auto;\n  overflow-y: hidden;\n}"}]
      }
    ]
  },
  {
      "label":  "Nhóm 5",
      "title":  "Display, Float, Position",
      "cards":  [
                    {
                        "id":  "css-display",
                        "title":  "Display",
                        "description":  "Display dùng để quy định cách một phần tử HTML được hiển thị trên trang. Nó ảnh hưởng đến việc phần tử nằm trên một dòng riêng, nằm cùng dòng, có nhận width height hay không, hoặc có bị ẩn khỏi giao diện hay không.",
                        "exampleText":  "Một thẻ div mặc định là block, còn thẻ span mặc định là inline. Nếu muốn span có kích thước như một button, có thể đổi display của nó.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".element {\n  display: block;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-display-block",
                        "title":  "Display block",
                        "description":  "Display block làm phần tử chiếm toàn bộ chiều ngang có thể của phần tử cha và thường tự xuống dòng. Block element có thể đặt width, height, margin, padding rõ ràng.",
                        "exampleText":  "Các phần như header, section, div, article thường hiển thị dạng block và nằm thành từng khối riêng.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: block;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".section {\n  display: block;\n  width: 100%;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-display-inline",
                        "title":  "Display inline",
                        "description":  "Display inline làm phần tử nằm cùng dòng với nội dung khác. Inline element không chiếm toàn bộ chiều ngang và thường không đặt được width, height như block element.",
                        "exampleText":  "Các thẻ như span, a, strong, em thường nằm cùng dòng với đoạn văn bản.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: inline;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".highlight {\n  display: inline;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-display-inline-block",
                        "title":  "Display inline-block",
                        "description":  "Display inline-block kết hợp đặc điểm của inline và block. Phần tử vẫn nằm cùng dòng như inline, nhưng có thể đặt width, height, padding và margin rõ ràng như block.",
                        "exampleText":  "Một thẻ a có thể đổi sang inline-block để tạo thành button có kích thước, padding và bo góc.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: inline-block;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button-link {\n  display: inline-block;\n  padding: 10px 20px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-display-none",
                        "title":  "Display none",
                        "description":  "Display none dùng để ẩn hoàn toàn phần tử khỏi giao diện. Khi dùng display none, phần tử không còn chiếm không gian trên trang.",
                        "exampleText":  "Một menu phụ có thể được ẩn ban đầu bằng display none, sau đó hiển thị khi người dùng hover hoặc click.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: none;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".submenu {\n  display: none;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-display-flex",
                        "title":  "Display flex",
                        "description":  "Display flex dùng để kích hoạt Flexbox cho phần tử cha. Khi một phần tử dùng display flex, các phần tử con bên trong có thể được sắp xếp linh hoạt theo hàng hoặc cột.",
                        "exampleText":  "Danh sách các button trên trang chủ có thể dùng display flex để xếp ngang và căn giữa.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "display: flex;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-float",
                        "title":  "Float",
                        "description":  "Float dùng để đẩy phần tử sang trái hoặc phải, cho phép nội dung khác bao quanh nó. Trước đây float thường dùng để dựng layout, nhưng hiện nay chủ yếu dùng trong một số trường hợp đặc biệt vì Flexbox và Grid dễ quản lý hơn.",
                        "exampleText":  "Một hình ảnh trong bài viết có thể float sang trái để đoạn văn bản chạy xung quanh ảnh.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "float: left | right | none;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".article-image {\n  float: left;\n  margin-right: 16px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-float-left",
                        "title":  "Float left",
                        "description":  "Float left làm phần tử trôi sang bên trái của phần tử cha. Nội dung phía sau có thể nằm bên phải hoặc bao quanh phần tử đó nếu còn không gian.",
                        "exampleText":  "Một ảnh đại diện có thể được float left để đoạn mô tả nằm bên phải ảnh.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "float: left;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".avatar {\n  float: left;\n  margin-right: 16px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-float-right",
                        "title":  "Float right",
                        "description":  "Float right làm phần tử trôi sang bên phải của phần tử cha. Nội dung phía sau có thể nằm bên trái hoặc bao quanh phần tử đó.",
                        "exampleText":  "Một ảnh minh họa có thể được float right để đoạn văn bản nằm ở phía bên trái.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "float: right;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".illustration {\n  float: right;\n  margin-left: 16px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-clear",
                        "title":  "Clear",
                        "description":  "Clear dùng để ngăn phần tử bị ảnh hưởng bởi float phía trước. Nó giúp phần tử mới bắt đầu xuống dưới phần tử đang float thay vì bị chen lên cạnh.",
                        "exampleText":  "Sau một khu vực có ảnh float left, có thể dùng clear để phần nội dung tiếp theo không nằm cạnh ảnh nữa.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "clear: left | right | both | none;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".next-section {\n  clear: both;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position",
                        "title":  "Position",
                        "description":  "Position dùng để quy định cách định vị phần tử trên trang. Nó quyết định phần tử đứng theo luồng bình thường hay có thể được di chuyển bằng top, right, bottom, left.",
                        "exampleText":  "Một icon thông báo có thể được đặt ở góc trên bên phải của card bằng position.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: static | relative | absolute | fixed | sticky;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card {\n  position: relative;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-static",
                        "title":  "Position static",
                        "description":  "Static là giá trị mặc định của position. Phần tử sẽ nằm theo luồng bình thường của trang và không bị ảnh hưởng bởi top, right, bottom, left.",
                        "exampleText":  "Nếu không khai báo position, hầu hết phần tử HTML sẽ có position static.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: static;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".element {\n  position: static;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-relative",
                        "title":  "Position relative",
                        "description":  "Relative cho phép phần tử di chuyển so với vị trí ban đầu của chính nó. Phần tử vẫn giữ không gian cũ trong layout.",
                        "exampleText":  "Một badge nhỏ có thể được đẩy lên một chút so với vị trí ban đầu bằng position relative.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: relative;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".badge {\n  position: relative;\n  top: -4px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-absolute",
                        "title":  "Position absolute",
                        "description":  "Absolute cho phép phần tử thoát khỏi luồng bình thường và định vị theo phần tử cha gần nhất có position khác static. Nếu không có cha phù hợp, nó có thể định vị theo viewport hoặc tài liệu.",
                        "exampleText":  "Một icon “new” có thể đặt absolute ở góc trên bên phải của một card sản phẩm.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: absolute;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card {\n  position: relative;\n}\n\n.card .new-icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-fixed",
                        "title":  "Position fixed",
                        "description":  "Fixed cho phép phần tử cố định theo màn hình trình duyệt. Khi người dùng cuộn trang, phần tử vẫn đứng yên tại vị trí đã đặt.",
                        "exampleText":  "Một nút “Back to top” có thể fixed ở góc dưới bên phải màn hình.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: fixed;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".back-to-top {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-sticky",
                        "title":  "Position sticky",
                        "description":  "Sticky là kiểu định vị kết hợp giữa relative và fixed. Phần tử ban đầu nằm trong luồng bình thường, nhưng khi cuộn đến một vị trí nhất định, nó sẽ dính lại trên màn hình.",
                        "exampleText":  "Sidebar bên trái của page kiến thức có thể dùng sticky để luôn hiển thị khi người dùng cuộn nội dung bên phải.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "position: sticky;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".sidebar {\n  position: sticky;\n  top: 20px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-z-index",
                        "title":  "Z-index",
                        "description":  "Z-index dùng để kiểm soát thứ tự chồng lớp của các phần tử. Phần tử có z-index lớn hơn thường nằm phía trên phần tử có z-index nhỏ hơn. Z-index thường hoạt động với các phần tử có position khác static.",
                        "exampleText":  "Một modal hoặc popup cần có z-index cao để nằm trên các nội dung còn lại của trang.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "z-index: integer | auto;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".modal {\n  position: fixed;\n  z-index: 1000;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-position-offsets",
                        "title":  "Top, right, bottom, left",
                        "description":  "Top, right, bottom và left dùng để xác định khoảng cách định vị của phần tử khi dùng position relative, absolute, fixed hoặc sticky.",
                        "exampleText":  "Một button fixed có thể đặt cách mép dưới 20px và cách mép phải 20px để nằm ở góc dưới bên phải màn hình.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "top: value;\nright: value;\nbottom: value;\nleft: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".fixed-button {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}"
                                           }
                                       ]
                    }
                ]
  },
  {
    "label": "Nhóm 6",
    "title": "Flexbox",
    "cards": [
      {
        "id": "css-flexbox",
        "title": "Flexbox",
        "description": "Flexbox là một kỹ thuật CSS dùng để sắp xếp các phần tử theo một chiều chính, có thể là hàng ngang hoặc hàng dọc. Flexbox rất phù hợp để căn giữa, chia cột, tạo menu, tạo danh sách card hoặc bố cục giao diện linh hoạt.",
        "exampleText": "Trang tổng có 5 button HTML, CSS, JS, ReactJS, NextJS có thể dùng Flexbox để xếp các button nằm ngang và căn giữa.",
        "codeBlocks": [{"title":"Cú pháp","code":"display: flex;"},{"title":"Ví dụ","code":".technology-list {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}"}]
      },
      {
        "id": "css-flex-display",
        "title": "Display flex",
        "description": "display: flex được đặt cho phần tử cha để kích hoạt Flexbox. Khi đó, các phần tử con trực tiếp bên trong sẽ trở thành flex item.",
        "exampleText": "Một khối menu có thể dùng display flex để các link nằm trên cùng một hàng.",
        "codeBlocks": [{"title":"Cú pháp","code":"display: flex;"},{"title":"Ví dụ","code":".menu {\n  display: flex;\n}"}]
      },
      {
        "id": "css-flex-direction",
        "title": "Flex direction",
        "description": "flex-direction dùng để xác định hướng sắp xếp của các flex item. Có thể sắp xếp theo hàng ngang, hàng ngang đảo ngược, cột dọc hoặc cột dọc đảo ngược.",
        "exampleText": "Sidebar có thể dùng flex-direction column để các tiêu đề nằm dọc từ trên xuống dưới.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-direction: row | row-reverse | column | column-reverse;"},{"title":"Ví dụ","code":".sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}"}]
      },
      {
        "id": "css-flex-row",
        "title": "Row",
        "description": "row là giá trị mặc định của flex-direction. Các item sẽ được xếp theo chiều ngang từ trái sang phải.",
        "exampleText": "Danh sách button trên desktop thường dùng row để các button nằm cạnh nhau.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-direction: row;"},{"title":"Ví dụ","code":".button-list {\n  display: flex;\n  flex-direction: row;\n}"}]
      },
      {
        "id": "css-flex-column",
        "title": "Column",
        "description": "column làm các item xếp theo chiều dọc từ trên xuống dưới.",
        "exampleText": "Menu bên trái của trang HTML hoặc CSS có thể dùng column để các mục nằm thành danh sách dọc.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-direction: column;"},{"title":"Ví dụ","code":".sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}"}]
      },
      {
        "id": "css-justify-content",
        "title": "Justify content",
        "description": "justify-content dùng để căn chỉnh các item theo trục chính. Nếu flex-direction là row, trục chính là chiều ngang. Nếu flex-direction là column, trục chính là chiều dọc.",
        "exampleText": "Một hàng button có thể dùng justify-content center để căn giữa các button theo chiều ngang.",
        "codeBlocks": [{"title":"Cú pháp","code":"justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;"},{"title":"Ví dụ","code":".button-list {\n  display: flex;\n  justify-content: center;\n}"}]
      },
      {
        "id": "css-align-items",
        "title": "Align items",
        "description": "align-items dùng để căn chỉnh các item theo trục phụ. Nếu flex-direction là row, trục phụ là chiều dọc. Nếu flex-direction là column, trục phụ là chiều ngang.",
        "exampleText": "Một button có thể dùng display flex kết hợp align-items center để căn giữa chữ theo chiều dọc.",
        "codeBlocks": [{"title":"Cú pháp","code":"align-items: stretch | flex-start | flex-end | center | baseline;"},{"title":"Ví dụ","code":".button {\n  display: flex;\n  align-items: center;\n}"}]
      },
      {
        "id": "css-align-content",
        "title": "Align content",
        "description": "align-content dùng để căn chỉnh nhiều dòng flex khi có flex-wrap. Thuộc tính này chỉ có tác dụng rõ khi các item xuống nhiều dòng và container còn khoảng trống trên trục phụ.",
        "exampleText": "Một danh sách card nhiều dòng có thể dùng align-content để điều chỉnh khoảng cách giữa các dòng.",
        "codeBlocks": [{"title":"Cú pháp","code":"align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;"},{"title":"Ví dụ","code":".card-list {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  min-height: 600px;\n}"}]
      },
      {
        "id": "css-flex-wrap",
        "title": "Flex wrap",
        "description": "flex-wrap quy định các item có được xuống dòng hay không khi không đủ không gian. Nếu không wrap, item có thể bị co lại hoặc tràn ra ngoài.",
        "exampleText": "Danh sách card bài học có thể dùng flex-wrap để khi màn hình nhỏ thì card tự xuống dòng.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-wrap: nowrap | wrap | wrap-reverse;"},{"title":"Ví dụ","code":".card-list {\n  display: flex;\n  flex-wrap: wrap;\n}"}]
      },
      {
        "id": "css-flex-gap",
        "title": "Gap",
        "description": "gap dùng để tạo khoảng cách giữa các flex item. Đây là cách hiện đại và dễ dùng hơn so với việc đặt margin thủ công cho từng item.",
        "exampleText": "Các button trên trang tổng có thể dùng gap để cách nhau đều nhau.",
        "codeBlocks": [{"title":"Cú pháp","code":"gap: row-gap column-gap;"},{"title":"Ví dụ","code":".button-list {\n  display: flex;\n  gap: 12px 16px;\n}"}]
      },
      {
        "id": "css-flex-order",
        "title": "Order",
        "description": "order dùng để thay đổi thứ tự hiển thị của flex item mà không cần đổi thứ tự trong HTML. Item có order nhỏ hơn sẽ hiển thị trước.",
        "exampleText": "Trên mobile, một phần tử có thể được đưa lên trước bằng order mà không cần sửa HTML.",
        "codeBlocks": [{"title":"Cú pháp","code":"order: integer;"},{"title":"Ví dụ","code":".important-item {\n  order: -1;\n}"}]
      },
      {
        "id": "css-flex-grow",
        "title": "Flex grow",
        "description": "flex-grow quy định item có được mở rộng để chiếm phần không gian còn trống hay không. Giá trị càng lớn thì item càng được chia nhiều không gian hơn.",
        "exampleText": "Trong một hàng gồm sidebar và content, phần content có thể dùng flex-grow để chiếm phần còn lại.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-grow: number;"},{"title":"Ví dụ","code":".content {\n  flex-grow: 1;\n}"}]
      },
      {
        "id": "css-flex-shrink",
        "title": "Flex shrink",
        "description": "flex-shrink quy định item có được co lại khi không đủ không gian hay không. Mặc định, flex item có thể co lại.",
        "exampleText": "Một sidebar có thể đặt flex-shrink bằng 0 để không bị co nhỏ khi màn hình hẹp.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-shrink: number;"},{"title":"Ví dụ","code":".sidebar {\n  width: 280px;\n  flex-shrink: 0;\n}"}]
      },
      {
        "id": "css-flex-basis",
        "title": "Flex basis",
        "description": "flex-basis quy định kích thước ban đầu của flex item theo trục chính trước khi trình duyệt phân chia phần không gian còn lại.",
        "exampleText": "Một card có thể đặt flex-basis là 250px để mỗi card bắt đầu với chiều rộng 250px trước khi co giãn.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex-basis: auto | content | value;"},{"title":"Ví dụ","code":".card {\n  flex-basis: 250px;\n}"}]
      },
      {
        "id": "css-flex-shorthand",
        "title": "Flex shorthand",
        "description": "flex là cách viết gọn cho flex-grow, flex-shrink và flex-basis. Thuộc tính này thường dùng để cấu hình nhanh khả năng co giãn của item.",
        "exampleText": "Một phần content có thể dùng flex: 1 để tự động chiếm toàn bộ không gian còn lại trong hàng.",
        "codeBlocks": [{"title":"Cú pháp","code":"flex: flex-grow flex-shrink flex-basis;"},{"title":"Ví dụ","code":".content {\n  flex: 1;\n}\n\n.card {\n  flex: 1 1 250px;\n}"}]
      },
      {
        "id": "css-align-self",
        "title": "Align self",
        "description": "align-self dùng để căn chỉnh riêng một flex item theo trục phụ, ghi đè lại align-items của phần tử cha.",
        "exampleText": "Trong một hàng card, một card riêng có thể dùng align-self để nằm ở đầu, giữa hoặc cuối theo chiều dọc.",
        "codeBlocks": [{"title":"Cú pháp","code":"align-self: auto | stretch | flex-start | flex-end | center | baseline;"},{"title":"Ví dụ","code":".featured-card {\n  align-self: center;\n}"}]
      }
    ]
  },
  {
      "label":  "Nhóm 7",
      "title":  "Pseudo, Counter, List style",
      "cards":  [
                    {
                        "id":  "css-pseudo-class",
                        "title":  "Pseudo class",
                        "description":  "Pseudo class dùng để chọn phần tử ở một trạng thái đặc biệt, ví dụ khi hover, khi đang focus, khi được checked hoặc khi là phần tử con đầu tiên.",
                        "exampleText":  "Một button có thể đổi màu khi người dùng rê chuột vào.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:pseudo-class { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button:hover {\n  background-color: #1572b6;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-hover",
                        "title":  "Hover",
                        "description":  "Hover là trạng thái khi người dùng đưa chuột lên phần tử. Thường dùng để tạo hiệu ứng tương tác cho link, button, card hoặc menu.",
                        "exampleText":  "Button trong trang tổng có thể đổi màu nền hoặc nâng lên nhẹ khi hover.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:hover { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button:hover {\n  transform: translateY(-2px);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-active",
                        "title":  "Active",
                        "description":  "Active là trạng thái khi phần tử đang được bấm giữ. Trạng thái này thường diễn ra rất nhanh, phù hợp để tạo cảm giác phản hồi khi người dùng click.",
                        "exampleText":  "Một button có thể nhỏ xuống nhẹ khi người dùng bấm vào.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:active { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button:active {\n  transform: scale(0.97);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-focus",
                        "title":  "Focus",
                        "description":  "Focus là trạng thái khi phần tử đang được chọn để nhập liệu hoặc thao tác bằng bàn phím. Thường gặp ở input, textarea, button hoặc link.",
                        "exampleText":  "Ô input email có thể đổi màu viền khi người dùng click vào để nhập dữ liệu.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:focus { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "input:focus {\n  border-color: #1572b6;\n  outline: 2px solid rgba(21, 114, 182, 0.2);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-first-child",
                        "title":  "First child",
                        "description":  "First child dùng để chọn phần tử con đầu tiên trong phần tử cha.",
                        "exampleText":  "Trong danh sách menu, mục đầu tiên có thể được bỏ margin-left hoặc được style khác các mục còn lại.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:first-child { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".menu-item:first-child {\n  margin-left: 0;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-last-child",
                        "title":  "Last child",
                        "description":  "Last child dùng để chọn phần tử con cuối cùng trong phần tử cha.",
                        "exampleText":  "Trong danh sách card, card cuối cùng có thể bỏ margin-bottom để không tạo khoảng cách dư.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:last-child { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card:last-child {\n  margin-bottom: 0;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-nth-child",
                        "title":  "Nth child",
                        "description":  "Nth child dùng để chọn phần tử con theo vị trí cụ thể hoặc theo quy luật như chẵn, lẻ, mỗi 3 phần tử.",
                        "exampleText":  "Trong bảng dữ liệu, các dòng chẵn có thể có màu nền khác để dễ đọc hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector:nth-child(pattern) { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "table tr:nth-child(even) {\n  background-color: #f3f4f6;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-pseudo-checked",
                        "title":  "Checked",
                        "description":  "Checked dùng để chọn radio hoặc checkbox đang được chọn. Khi kết hợp với selector khác, có thể thay đổi giao diện phần tử liên quan.",
                        "exampleText":  "Trong todo list, khi checkbox được checked thì nội dung công việc có thể bị gạch ngang để thể hiện đã hoàn thành.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "input:checked { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".todo input:checked + span {\n  text-decoration: line-through;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-pseudo-disabled",
                        "title":  "Disabled",
                        "description":  "Disabled dùng để chọn phần tử form đang bị vô hiệu hóa. Phần tử disabled thường không thể nhập, chọn hoặc click.",
                        "exampleText":  "Một nút gửi form bị disabled có thể được làm mờ để người dùng biết chưa thể bấm.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "element:disabled { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-pseudo-element",
                        "title":  "Pseudo element",
                        "description":  "Pseudo element dùng để tạo hoặc style một phần cụ thể của phần tử mà không cần thêm HTML thật. Thường dùng để thêm nội dung trang trí trước hoặc sau phần tử.",
                        "exampleText":  "Một tiêu đề có thể có đường gạch nhỏ phía trước bằng pseudo element.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector::pseudo-element { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".group-title::before {\n  content: \"\";\n  display: inline-block;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-before",
                        "title":  "Before",
                        "description":  "Before dùng để thêm nội dung hoặc phần trang trí vào trước nội dung thật của phần tử. Khi dùng before thường cần thuộc tính content.",
                        "exampleText":  "Trước mỗi tiêu đề nhóm có thể thêm một icon nhỏ hoặc dấu gạch trang trí.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector::before { content: \"\"; }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".group-title::before {\n  content: \"◆\";\n  margin-right: 8px;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-after",
                        "title":  "After",
                        "description":  "After dùng để thêm nội dung hoặc phần trang trí vào sau nội dung thật của phần tử. Giống before, after cũng thường cần thuộc tính content.",
                        "exampleText":  "Sau tiêu đề có thể thêm một đường kẻ ngang để tạo điểm nhấn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector::after { content: \"\"; }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".group-title::after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #1572b6;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-first-letter",
                        "title":  "First letter",
                        "description":  "First letter dùng để style chữ cái đầu tiên của đoạn văn hoặc phần tử văn bản.",
                        "exampleText":  "Chữ cái đầu tiên của một đoạn giới thiệu có thể được phóng to để tạo kiểu giống bài báo.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector::first-letter { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".intro::first-letter {\n  font-size: 3rem;\n  font-weight: 700;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-first-line",
                        "title":  "First line",
                        "description":  "First line dùng để style dòng đầu tiên của đoạn văn. Dòng đầu tiên có thể thay đổi tùy theo chiều rộng màn hình.",
                        "exampleText":  "Dòng đầu tiên của đoạn mô tả có thể được in đậm hoặc đổi màu để nổi bật hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "selector::first-line { ... }"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".description::first-line {\n  color: #1572b6;\n  font-weight: 700;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-counter",
                        "title":  "Counter",
                        "description":  "Counter trong CSS dùng để tự động đánh số nội dung. Nó phù hợp khi muốn tạo danh sách số thứ tự tùy chỉnh mà không cần viết số trực tiếp trong HTML.",
                        "exampleText":  "Các mục kiến thức trong một nhóm có thể tự động đánh số 1, 2, 3 bằng CSS counter.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "counter-reset: counter-name;\ncounter-increment: counter-name;\ncontent: counter(counter-name);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".knowledge-group {\n  counter-reset: lesson;\n}\n\n.knowledge-card::before {\n  counter-increment: lesson;\n  content: counter(lesson) \". \";\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-counter-reset",
                        "title":  "Counter reset",
                        "description":  "Counter reset dùng để khởi tạo hoặc đặt lại bộ đếm. Thường đặt ở phần tử cha để bắt đầu đếm từ đầu trong một khu vực.",
                        "exampleText":  "Mỗi nhóm kiến thức có thể reset bộ đếm để các mục trong nhóm bắt đầu lại từ số 1.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "counter-reset: counter-name initial-value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".knowledge-group {\n  counter-reset: lesson;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-counter-increment",
                        "title":  "Counter increment",
                        "description":  "Counter increment dùng để tăng giá trị bộ đếm mỗi khi gặp phần tử được chọn.",
                        "exampleText":  "Mỗi article kiến thức có thể tăng bộ đếm lên 1 để tự tạo số thứ tự cho từng bài.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "counter-increment: counter-name amount;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".knowledge-card {\n  counter-increment: lesson;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-list-style",
                        "title":  "List style",
                        "description":  "List style dùng để định dạng ký hiệu đầu dòng của danh sách. Nó thường dùng với ul hoặc ol.",
                        "exampleText":  "Danh sách kiến thức có thể dùng kiểu chấm tròn, số, chữ cái hoặc bỏ ký hiệu mặc định.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "list-style: type position image;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".lesson-list {\n  list-style: decimal inside;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-list-style-type",
                        "title":  "List style type",
                        "description":  "List style type dùng để chọn kiểu ký hiệu của danh sách, ví dụ disc, circle, square, decimal, lower-alpha hoặc upper-roman.",
                        "exampleText":  "Danh sách bài học có thể dùng số thứ tự, còn danh sách ghi chú có thể dùng chấm tròn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "list-style-type: value;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".lesson-list {\n  list-style-type: decimal;\n}\n\n.note-list {\n  list-style-type: disc;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-list-style-position",
                        "title":  "List style position",
                        "description":  "List style position dùng để quy định vị trí ký hiệu danh sách nằm bên trong hay bên ngoài vùng nội dung.",
                        "exampleText":  "Một danh sách trong card nhỏ có thể dùng list-style-position inside để ký hiệu nằm gọn trong card.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "list-style-position: inside | outside;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".compact-list {\n  list-style-position: inside;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-list-style-image",
                        "title":  "List style image",
                        "description":  "List style image dùng để thay ký hiệu mặc định của danh sách bằng hình ảnh.",
                        "exampleText":  "Danh sách tính năng có thể dùng icon nhỏ làm bullet thay cho dấu chấm mặc định.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "list-style-image: url(\"image-path\");"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".feature-list {\n  list-style-image: url(\"/images/check-icon.svg\");\n}"
                                           }
                                       ]
                    }
                ]
  },
  {
      "label":  "Nhóm 8",
      "title":  "Transform, Transition, Animation",
      "cards":  [
                    {
                        "id":  "css-transform",
                        "title":  "Transform",
                        "description":  "Transform dùng để biến đổi hình dạng, vị trí hoặc kích thước của phần tử mà không làm thay đổi layout gốc của trang.",
                        "exampleText":  "Một card có thể được nâng lên nhẹ, phóng to hoặc xoay khi người dùng hover.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: function(value);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card:hover {\n  transform: translateY(-6px) scale(1.02);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-translate",
                        "title":  "Translate",
                        "description":  "Translate dùng để di chuyển phần tử theo trục X và trục Y. Phần tử chỉ thay đổi vị trí hiển thị, không đẩy các phần tử khác xung quanh.",
                        "exampleText":  "Một button có thể được đẩy lên một chút khi hover để tạo cảm giác nổi lên.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: translate(x, y);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button:hover {\n  transform: translate(0, -3px);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-translate-x",
                        "title":  "TranslateX",
                        "description":  "TranslateX dùng để di chuyển phần tử theo chiều ngang. Giá trị dương đẩy phần tử sang phải, giá trị âm đẩy phần tử sang trái.",
                        "exampleText":  "Một icon mũi tên có thể trượt sang phải nhẹ khi hover vào link.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: translateX(value);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".link:hover .arrow {\n  transform: translateX(6px);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-translate-y",
                        "title":  "TranslateY",
                        "description":  "TranslateY dùng để di chuyển phần tử theo chiều dọc. Giá trị dương đẩy phần tử xuống dưới, giá trị âm đẩy phần tử lên trên.",
                        "exampleText":  "Card kiến thức có thể dùng translateY âm khi hover để tạo hiệu ứng nâng card.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: translateY(value);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card:hover {\n  transform: translateY(-8px);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-scale",
                        "title":  "Scale",
                        "description":  "Scale dùng để phóng to hoặc thu nhỏ phần tử. Giá trị lớn hơn 1 là phóng to, nhỏ hơn 1 là thu nhỏ.",
                        "exampleText":  "Ảnh sản phẩm có thể phóng to nhẹ khi người dùng đưa chuột vào.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: scale(x, y);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".product-image:hover {\n  transform: scale(1.08);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-scale-x-y",
                        "title":  "ScaleX / ScaleY",
                        "description":  "ScaleX dùng để phóng to hoặc thu nhỏ theo chiều ngang. ScaleY dùng để phóng to hoặc thu nhỏ theo chiều dọc.",
                        "exampleText":  "Một thanh gạch dưới link có thể dùng scaleX để mở rộng từ trái sang phải khi hover.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: scaleX(value);\ntransform: scaleY(value);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".link::after {\n  transform: scaleX(0);\n}\n\n.link:hover::after {\n  transform: scaleX(1);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-rotate",
                        "title":  "Rotate",
                        "description":  "Rotate dùng để xoay phần tử theo một góc nhất định. Đơn vị thường dùng là deg.",
                        "exampleText":  "Một icon mũi tên có thể xoay 180 độ khi mở dropdown menu.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: rotate(angle);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".dropdown[aria-expanded=\"true\"] .arrow {\n  transform: rotate(180deg);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-skew",
                        "title":  "Skew",
                        "description":  "Skew dùng để làm nghiêng phần tử theo trục X hoặc trục Y. Thuộc tính này tạo cảm giác phần tử bị kéo xiên.",
                        "exampleText":  "Một banner hoặc nhãn giảm giá có thể dùng skew để tạo kiểu nghiêng nổi bật.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform: skew(x-angle, y-angle);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".sale-label {\n  transform: skew(-12deg);\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transform-origin",
                        "title":  "Transform origin",
                        "description":  "Transform origin dùng để thay đổi điểm gốc khi transform. Mặc định phần tử biến đổi từ tâm, nhưng có thể đổi sang trái, phải, trên, dưới hoặc góc cụ thể.",
                        "exampleText":  "Một menu dropdown có thể scale từ phía trên xuống bằng cách đặt transform origin ở top.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transform-origin: x-position y-position;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".dropdown-menu {\n  transform-origin: top center;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transition",
                        "title":  "Transition",
                        "description":  "Transition dùng để tạo hiệu ứng chuyển đổi mượt khi một thuộc tính CSS thay đổi. Nếu không có transition, sự thay đổi sẽ diễn ra ngay lập tức.",
                        "exampleText":  "Button có thể đổi màu nền mượt hơn khi hover thay vì đổi màu đột ngột.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transition: property duration timing-function delay;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button {\n  transition: background-color 0.25s ease, transform 0.25s ease;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transition-property",
                        "title":  "Transition property",
                        "description":  "Transition property xác định thuộc tính CSS nào sẽ được áp dụng hiệu ứng chuyển đổi.",
                        "exampleText":  "Một button có thể chỉ transition màu nền và transform, thay vì áp dụng cho tất cả thuộc tính.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transition-property: property-name;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".button {\n  transition-property: background-color, transform;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transition-duration",
                        "title":  "Transition duration",
                        "description":  "Transition duration xác định thời gian hiệu ứng diễn ra. Thời gian có thể tính bằng giây hoặc mili giây.",
                        "exampleText":  "Một card có thể hover trong 0.3 giây để tạo cảm giác mượt vừa đủ.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transition-duration: time;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".card {\n  transition-duration: 0.3s;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transition-timing-function",
                        "title":  "Transition timing function",
                        "description":  "Transition timing function xác định tốc độ chuyển động trong quá trình transition, ví dụ đều, nhanh dần, chậm dần hoặc tùy chỉnh bằng cubic-bezier.",
                        "exampleText":  "Một menu có thể dùng ease để mở ra tự nhiên hơn.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(...);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".menu {\n  transition-timing-function: ease;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-transition-delay",
                        "title":  "Transition delay",
                        "description":  "Transition delay xác định thời gian chờ trước khi hiệu ứng transition bắt đầu.",
                        "exampleText":  "Một tooltip có thể chờ một chút sau khi hover rồi mới xuất hiện.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "transition-delay: time;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".tooltip {\n  transition-delay: 0.2s;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation",
                        "title":  "Animation",
                        "description":  "Animation dùng để tạo hiệu ứng chuyển động phức tạp hơn transition. Animation có thể tự chạy, lặp lại nhiều lần và không nhất thiết phải chờ người dùng hover hoặc click.",
                        "exampleText":  "Một icon loading có thể xoay liên tục bằng animation.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation: name duration timing-function delay iteration-count direction fill-mode;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".loader {\n  animation: spin 1s linear infinite;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-keyframes",
                        "title":  "Keyframes",
                        "description":  "Keyframes dùng để định nghĩa các mốc thay đổi trong animation. Có thể dùng từ 0% đến 100% hoặc dùng from và to.",
                        "exampleText":  "Một hiệu ứng loading có thể bắt đầu ở góc xoay 0 độ và kết thúc ở 360 độ.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "@keyframes name {\n  from { ... }\n  to { ... }\n}"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  "@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-name",
                        "title":  "Animation name",
                        "description":  "Animation name là tên của animation cần chạy. Tên này phải khớp với tên được khai báo trong keyframes.",
                        "exampleText":  "Nếu keyframes tên là spin, phần tử muốn xoay cần dùng animation-name là spin.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-name: keyframes-name;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".loader {\n  animation-name: spin;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-duration",
                        "title":  "Animation duration",
                        "description":  "Animation duration xác định thời gian hoàn thành một vòng animation.",
                        "exampleText":  "Một icon loading có thể mất 1 giây để xoay hết một vòng.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-duration: time;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".loader {\n  animation-duration: 1s;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-timing-function",
                        "title":  "Animation timing function",
                        "description":  "Animation timing function xác định tốc độ chuyển động trong animation.",
                        "exampleText":  "Hiệu ứng loading thường dùng linear để tốc độ xoay đều liên tục.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(...);"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".loader {\n  animation-timing-function: linear;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-delay",
                        "title":  "Animation delay",
                        "description":  "Animation delay xác định thời gian chờ trước khi animation bắt đầu chạy.",
                        "exampleText":  "Một phần tử có thể xuất hiện sau 0.5 giây để tạo hiệu ứng lần lượt.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-delay: time;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".fade-item {\n  animation-delay: 0.5s;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-iteration-count",
                        "title":  "Animation iteration count",
                        "description":  "Animation iteration count xác định số lần animation lặp lại. Có thể là một số cụ thể hoặc infinite để lặp vô hạn.",
                        "exampleText":  "Icon loading thường dùng infinite để xoay liên tục.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-iteration-count: number | infinite;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".loader {\n  animation-iteration-count: infinite;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-direction",
                        "title":  "Animation direction",
                        "description":  "Animation direction xác định chiều chạy của animation, ví dụ chạy bình thường, chạy ngược, hoặc chạy qua lại.",
                        "exampleText":  "Một quả bóng có thể dùng alternate để chuyển động lên xuống qua lại.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-direction: normal | reverse | alternate | alternate-reverse;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".ball {\n  animation-direction: alternate;\n}"
                                           }
                                       ]
                    },
                    {
                        "id":  "css-animation-fill-mode",
                        "title":  "Animation fill mode",
                        "description":  "Animation fill mode xác định trạng thái của phần tử trước khi animation bắt đầu hoặc sau khi animation kết thúc.",
                        "exampleText":  "Một phần tử fade in có thể giữ trạng thái cuối cùng sau khi animation chạy xong.",
                        "codeBlocks":  [
                                           {
                                               "title":  "Cú pháp",
                                               "code":  "animation-fill-mode: none | forwards | backwards | both;"
                                           },
                                           {
                                               "title":  "Ví dụ",
                                               "code":  ".fade-in {\n  animation-fill-mode: forwards;\n}"
                                           }
                                       ]
                    }
                ]
  }
];
