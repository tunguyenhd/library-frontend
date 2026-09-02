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
            "code": ".title2 {\n  color: blue;\n}",
            "preview": "<style>\n\n.demo-container-pv4i6 { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-pv4i6 div, .demo-container-pv4i6 p, .demo-container-pv4i6 span, .demo-container-pv4i6 ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.title2 {\n  color: blue;\n}\n</style>\n\n<div class=\"demo-container-pv4i6\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": ".title {\n  color: #1572b6;\n  font-size: 32px;\n}",
            "preview": "<style>\n\n.demo-container-xlkff { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-xlkff div, .demo-container-xlkff p, .demo-container-xlkff span, .demo-container-xlkff ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.title {\n  color: #1572b6;\n  font-size: 32px;\n}\n</style>\n\n<div class=\"demo-container-xlkff\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "#title {\n  color: red;\n}",
            "preview": "<style>\n\n.demo-container-hkl9w { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-hkl9w div, .demo-container-hkl9w p, .demo-container-hkl9w span, .demo-container-hkl9w ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n#title {\n  color: red;\n}\n</style>\n\n<div class=\"demo-container-hkl9w\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "p {\n  color: #4b5563;\n  line-height: 1.6;\n}",
            "preview": "<style>\n\n.demo-container-rrka5 { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-rrka5 div, .demo-container-rrka5 p, .demo-container-rrka5 span, .demo-container-rrka5 ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\np {\n  color: #4b5563;\n  line-height: 1.6;\n}\n</style>\n\n<div class=\"demo-container-rrka5\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "h2.title,\nh3.title {\n  color: #1572b6;\n  font-weight: 700;\n}",
            "preview": "<style>\n\n.demo-container-c2kbe { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-c2kbe div, .demo-container-c2kbe p, .demo-container-c2kbe span, .demo-container-c2kbe ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\nh2.title,\nh3.title {\n  color: #1572b6;\n  font-weight: 700;\n}\n</style>\n\n<div class=\"demo-container-c2kbe\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": ".box > h1 {\n  color: #1572b6;\n}",
            "preview": "<style>\n\n.demo-container-u9tpa { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-u9tpa div, .demo-container-u9tpa p, .demo-container-u9tpa span, .demo-container-u9tpa ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.box > h1 {\n  color: #1572b6;\n}\n</style>\n\n<div class=\"demo-container-u9tpa\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": ".title + p {\n  margin-top: 8px;\n}\n\n.title ~ p {\n  color: #4b5563;\n}",
            "preview": "<style>\n\n.demo-container-a2zyk { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-a2zyk div, .demo-container-a2zyk p, .demo-container-a2zyk span, .demo-container-a2zyk ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.title + p {\n  margin-top: 8px;\n}\n\n.title ~ p {\n  color: #4b5563;\n}\n</style>\n\n<div class=\"demo-container-a2zyk\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": ".todo-item input:checked + span {\n  color: red;\n  text-decoration: line-through;\n}",
            "preview": "<style>\n\n.demo-container-z8rfg { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-z8rfg div, .demo-container-z8rfg p, .demo-container-z8rfg span, .demo-container-z8rfg ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.todo-item input:checked + span {\n  color: red;\n  text-decoration: line-through;\n}\n</style>\n\n<div class=\"demo-container-z8rfg\">\n  <div id=\"header\" class=\"todo-item\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": ".website a[target] {\n  color: #1572b6;\n  font-weight: 700;\n}",
            "preview": "<style>\n\n.demo-container-xhie7 { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-xhie7 div, .demo-container-xhie7 p, .demo-container-xhie7 span, .demo-container-xhie7 ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\n.website a[target] {\n  color: #1572b6;\n  font-weight: 700;\n}\n</style>\n\n<div class=\"demo-container-xhie7\">\n  <div id=\"header\" class=\"website\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "a[href^=\"https://fullstack.edu.vn\"] {\n  color: green;\n}",
            "preview": "<style>\n\n.demo-container-4ibmp { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-4ibmp div, .demo-container-4ibmp p, .demo-container-4ibmp span, .demo-container-4ibmp ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\na[href^=\"https://fullstack.edu.vn\"] {\n  color: green;\n}\n</style>\n\n<div class=\"demo-container-4ibmp\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "a[href*=\"fullstack.edu.vn\"] {\n  text-decoration: underline;\n}",
            "preview": "<style>\n\n.demo-container-8126p { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-8126p div, .demo-container-8126p p, .demo-container-8126p span, .demo-container-8126p ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\na[href*=\"fullstack.edu.vn\"] {\n  text-decoration: underline;\n}\n</style>\n\n<div class=\"demo-container-8126p\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
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
            "code": "a[href$=\".jpg\"] {\n  color: red;\n}",
            "preview": "<style>\n\n.demo-container-3m2eb { font-family: sans-serif; background: #f8fafc; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; color: #64748b; }\n.demo-container-3m2eb div, .demo-container-3m2eb p, .demo-container-3m2eb span, .demo-container-3m2eb ul { margin: 8px 0; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; background: white; }\n\n/* --- USER CODE --- */\na[href$=\".jpg\"] {\n  color: red;\n}\n</style>\n\n<div class=\"demo-container-3m2eb\">\n  <div id=\"header\">Đây là thẻ div có id=\"header\"</div>\n  <p class=\"title2\">Đây là thẻ p có class=\"title2\"</p>\n  <p class=\"title2 highlight\">Đây là thẻ p có class=\"title2 highlight\"</p>\n  <p class=\"subtitle\">Thẻ p class subtitle <span class=\"highlight\">kèm thẻ span highlight bên trong</span></p>\n  <ul class=\"list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <input type=\"text\" placeholder=\"Thẻ input...\" required>\n  <input type=\"checkbox\" checked> <label>Checkbox checked</label>\n  <a href=\"https://example.com\" target=\"_blank\">Link target=\"_blank\"</a>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Text & Font",
    "cards": [
      {
        "id": "css-color",
        "title": "Color",
        "description": "Color dùng để đổi màu chữ của phần tử HTML. Có nhiều cách khai báo màu như tên màu, mã hex, RGB, RGBA, HSL hoặc HSLA.",
        "exampleText": "Một đoạn văn có thể được đổi màu chữ thành xanh lá, cam, đỏ hoặc một màu bất kỳ theo thiết kế giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "color: value;"
          },
          {
            "title": "Ví dụ",
            "code": "p {\n  color: green;\n}",
            "preview": "<style>\n\n.demo-container-wnpwj { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-wnpwj p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.demo-text {\n  color: green;\n}\n</style>\n\n<div class=\"demo-container-wnpwj\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-rgb-color",
        "title": "RGB color",
        "description": "RGB là cách khai báo màu dựa trên ba giá trị: đỏ, xanh lá, xanh dương. Mỗi giá trị thường nằm trong khoảng từ 0 đến 255.",
        "exampleText": "Có thể dùng RGB để tạo màu cam cho chữ trong phần nội dung chính.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "color: rgb(red, green, blue);"
          },
          {
            "title": "Ví dụ",
            "code": ".content {\n  color: rgb(255, 140, 0);\n}",
            "preview": "<style>\n\n.demo-container-wz5kp { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-wz5kp p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.content {\n  color: rgb(255, 140, 0);\n}\n</style>\n\n<div class=\"demo-container-wz5kp\">\n  <p class=\"content\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-rgba-color",
        "title": "RGBA color",
        "description": "RGBA giống RGB nhưng có thêm giá trị alpha để điều chỉnh độ trong suốt của màu. Alpha thường nằm từ 0 đến 1.",
        "exampleText": "Một đoạn chữ có thể dùng màu cam nhưng giảm độ đậm bằng alpha để chữ nhìn nhẹ hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "color: rgba(red, green, blue, alpha);"
          },
          {
            "title": "Ví dụ",
            "code": ".note {\n  color: rgba(255, 140, 0, 0.65);\n}",
            "preview": "<style>\n\n.demo-container-ny39v { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-ny39v p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.note {\n  color: rgba(255, 140, 0, 0.65);\n}\n</style>\n\n<div class=\"demo-container-ny39v\">\n  <p class=\"note\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-hsl-hsla-color",
        "title": "HSL / HSLA color",
        "description": "HSL khai báo màu theo hue, saturation và lightness. HSLA có thêm alpha để điều chỉnh độ trong suốt. Cách này dễ kiểm soát sắc độ, độ bão hòa và độ sáng của màu.",
        "exampleText": "Có thể dùng HSLA để tạo màu xanh lá với độ sáng và độ trong suốt cụ thể.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "color: hsl(hue, saturation, lightness);"
          },
          {
            "title": "Ví dụ",
            "code": ".success {\n  color: hsla(120, 60%, 40%, 0.8);\n}",
            "preview": "<style>\n\n.demo-container-cclub { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-cclub p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.success {\n  color: hsla(120, 60%, 40%, 0.8);\n}\n</style>\n\n<div class=\"demo-container-cclub\">\n  <p class=\"success\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-font-size",
        "title": "Font size",
        "description": "Font size dùng để chỉnh kích thước chữ. Kích thước chữ có thể dùng nhiều đơn vị như px, em, rem hoặc phần trăm.",
        "exampleText": "Tiêu đề chính có thể dùng font size lớn hơn đoạn văn để tạo phân cấp nội dung rõ ràng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-size: value;"
          },
          {
            "title": "Ví dụ",
            "code": "h1 {\n  font-size: 2rem;\n}",
            "preview": "<style>\n\n.demo-container-x2ras { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-x2ras p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\nh1 {\n  font-size: 2rem;\n}\n</style>\n\n<div class=\"demo-container-x2ras\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-em-unit",
        "title": "Đơn vị em",
        "description": "Em là đơn vị tương đối, phụ thuộc vào kích thước chữ của phần tử cha gần nhất. Nếu phần tử cha thay đổi font size, phần tử con dùng em cũng thay đổi theo.",
        "exampleText": "Nếu một box có font size lớn, đoạn văn bên trong dùng em sẽ được tính dựa trên kích thước chữ của box đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-size: number-em;"
          },
          {
            "title": "Ví dụ",
            "code": ".box p {\n  font-size: 1.2em;\n}",
            "preview": "<style>\n\n.demo-container-ri365 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-ri365 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.box p {\n  font-size: 1.2em;\n}\n</style>\n\n<div class=\"demo-container-ri365\">\n  <p class=\"box\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-rem-unit",
        "title": "Đơn vị rem",
        "description": "Rem là đơn vị tương đối, phụ thuộc vào font size của phần tử gốc, thường là thẻ html. Dùng rem giúp kích thước chữ ổn định và dễ quản lý hơn trong toàn bộ website.",
        "exampleText": "Các tiêu đề, đoạn văn và button trong website có thể dùng rem để giữ tỉ lệ chữ đồng nhất.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-size: number-rem;"
          },
          {
            "title": "Ví dụ",
            "code": "h2 {\n  font-size: 1.5rem;\n}",
            "preview": "<style>\n\n.demo-container-0hkx4 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-0hkx4 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\nh2 {\n  font-size: 1.5rem;\n}\n</style>\n\n<div class=\"demo-container-0hkx4\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-font-face",
        "title": "Font face",
        "description": "Font face dùng để nhúng font chữ từ file bên ngoài vào website. Cách này giúp website sử dụng font riêng thay vì chỉ phụ thuộc vào font mặc định của trình duyệt.",
        "exampleText": "Website lưu kiến thức code có thể dùng một font riêng để giao diện đồng bộ và dễ đọc hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "@font-face { font-family: \"FontName\"; src: url(\"font.woff2\"); }"
          },
          {
            "title": "Ví dụ",
            "code": "@font-face {\n  font-family: \"OpenSansLocal\";\n  src: url(\"/fonts/open-sans.woff2\") format(\"woff2\");\n}",
            "preview": "<style>\n\n.demo-container-opvm1 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-opvm1 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n@font-face {\n  font-family: \"OpenSansLocal\";\n  src: url(\"/fonts/open-sans.woff2\") format(\"woff2\");\n}\n</style>\n\n<div class=\"demo-container-opvm1\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-font-family",
        "title": "Font family",
        "description": "Font family dùng để khai báo font chữ cho phần tử. Có thể khai báo font chính và font dự phòng. Nếu font chính không tải được, trình duyệt sẽ dùng font dự phòng.",
        "exampleText": "Toàn bộ website có thể dùng font Open Sans, nếu font này không có thì trình duyệt dùng sans-serif.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-family: primary-font, fallback-font;"
          },
          {
            "title": "Ví dụ",
            "code": "body {\n  font-family: \"Open Sans\", Arial, sans-serif;\n}",
            "preview": "<style>\n\n.demo-container-b11cj { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-b11cj p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\nbody {\n  font-family: \"Open Sans\", Arial, sans-serif;\n}\n</style>\n\n<div class=\"demo-container-b11cj\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-font-weight",
        "title": "Font weight",
        "description": "Font weight dùng để chỉnh độ đậm của chữ. Một số giá trị thường gặp là 300, 400, 500, 700 hoặc các từ khóa như normal, bold.",
        "exampleText": "Tiêu đề có thể dùng font weight 700 để nổi bật, còn đoạn văn dùng font weight 400 để dễ đọc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-weight: value;"
          },
          {
            "title": "Ví dụ",
            "code": "h2 {\n  font-weight: 700;\n}",
            "preview": "<style>\n\n.demo-container-n42gi { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-n42gi p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\nh2 {\n  font-weight: 700;\n}\n</style>\n\n<div class=\"demo-container-n42gi\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-line-height",
        "title": "Line height",
        "description": "Line height dùng để chỉnh chiều cao dòng chữ. Nó giúp các dòng văn bản có khoảng cách dễ đọc hơn, đặc biệt với đoạn văn dài.",
        "exampleText": "Phần giải thích kiến thức trong website nên có line height lớn hơn mặc định để đọc thoải mái hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "line-height: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".description {\n  line-height: 1.7;\n}",
            "preview": "<style>\n\n.demo-container-apbqk { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-apbqk p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.description {\n  line-height: 1.7;\n}\n</style>\n\n<div class=\"demo-container-apbqk\">\n  <p class=\"description\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-letter-spacing",
        "title": "Letter spacing",
        "description": "Letter spacing dùng để chỉnh khoảng cách giữa các ký tự trong chữ. Tăng letter spacing giúp chữ thoáng hơn, nhưng nếu tăng quá nhiều sẽ khó đọc.",
        "exampleText": "Một tiêu đề phụ có thể tăng khoảng cách chữ nhẹ để tạo cảm giác hiện đại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "letter-spacing: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".subtitle {\n  letter-spacing: 0.04em;\n}",
            "preview": "<style>\n\n.demo-container-s4u0b { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-s4u0b p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.subtitle {\n  letter-spacing: 0.04em;\n}\n</style>\n\n<div class=\"demo-container-s4u0b\">\n  <p class=\"subtitle\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-word-spacing",
        "title": "Word spacing",
        "description": "Word spacing dùng để chỉnh khoảng cách giữa các từ trong văn bản. Thuộc tính này giúp kiểm soát độ thoáng giữa các từ.",
        "exampleText": "Một đoạn mô tả có thể tăng word spacing nhẹ để các từ không bị sát nhau.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "word-spacing: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".description {\n  word-spacing: 3px;\n}",
            "preview": "<style>\n\n.demo-container-qe6pk { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-qe6pk p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.description {\n  word-spacing: 3px;\n}\n</style>\n\n<div class=\"demo-container-qe6pk\">\n  <p class=\"description\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-decoration",
        "title": "Text decoration",
        "description": "Text decoration dùng để trang trí chữ bằng gạch chân, gạch ngang hoặc gạch trên. Có thể dùng cho link, giá cũ, tiêu đề hoặc nội dung cần nhấn mạnh.",
        "exampleText": "Một giá cũ trong bảng sản phẩm có thể dùng gạch ngang để thể hiện giá đó không còn áp dụng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-decoration: line style color;"
          },
          {
            "title": "Ví dụ",
            "code": ".old-price {\n  text-decoration: line-through;\n}",
            "preview": "<style>\n\n.demo-container-62250 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-62250 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.old-price {\n  text-decoration: line-through;\n}\n</style>\n\n<div class=\"demo-container-62250\">\n  <p class=\"old-price\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-transform",
        "title": "Text transform",
        "description": "Text transform dùng để biến đổi kiểu chữ như viết hoa toàn bộ, viết thường toàn bộ hoặc viết hoa chữ cái đầu mỗi từ.",
        "exampleText": "Tiêu đề bài học có thể dùng kiểu viết hoa chữ cái đầu để nhìn chuyên nghiệp hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-transform: none | uppercase | lowercase | capitalize;"
          },
          {
            "title": "Ví dụ",
            "code": ".lesson-title {\n  text-transform: capitalize;\n}",
            "preview": "<style>\n\n.demo-container-l9kv2 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-l9kv2 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.lesson-title {\n  text-transform: capitalize;\n}\n</style>\n\n<div class=\"demo-container-l9kv2\">\n  <p class=\"lesson-title\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-font-style",
        "title": "Font style",
        "description": "Font style dùng để chỉnh kiểu chữ, phổ biến nhất là chữ thường và chữ nghiêng.",
        "exampleText": "Một dòng ghi chú hoặc thuật ngữ có thể dùng chữ nghiêng để khác biệt với nội dung chính.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "font-style: normal | italic | oblique;"
          },
          {
            "title": "Ví dụ",
            "code": ".note {\n  font-style: italic;\n}",
            "preview": "<style>\n\n.demo-container-s53td { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-s53td p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.note {\n  font-style: italic;\n}\n</style>\n\n<div class=\"demo-container-s53td\">\n  <p class=\"note\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-word-wrap",
        "title": "Word wrap",
        "description": "Word wrap dùng để xử lý khi một chuỗi chữ quá dài không có khoảng trắng. Nó cho phép chữ tự xuống dòng để không bị tràn ra khỏi khung.",
        "exampleText": "Nếu người dùng nhập một chuỗi ký tự rất dài trong phần bình luận, word wrap giúp nội dung không phá vỡ layout.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow-wrap: normal | break-word;"
          },
          {
            "title": "Ví dụ",
            "code": ".comment {\n  overflow-wrap: break-word;\n}",
            "preview": "<style>\n\n.demo-container-2po71 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-2po71 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.comment {\n  overflow-wrap: break-word;\n}\n</style>\n\n<div class=\"demo-container-2po71\">\n  <p class=\"comment\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-word-break",
        "title": "Word break",
        "description": "Word break cũng dùng để xử lý chữ quá dài, nhưng có thể bẻ chữ mạnh hơn. Thuộc tính này giúp nội dung dài không bị tràn khỏi phần tử cha.",
        "exampleText": "Một đường link rất dài hoặc một chuỗi không có dấu cách có thể bị bẻ dòng để nằm gọn trong box.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "word-break: normal | break-all | keep-all;"
          },
          {
            "title": "Ví dụ",
            "code": ".long-url {\n  word-break: break-all;\n}",
            "preview": "<style>\n\n.demo-container-29vyg { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-29vyg p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.long-url {\n  word-break: break-all;\n}\n</style>\n\n<div class=\"demo-container-29vyg\">\n  <p class=\"long-url\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-indent",
        "title": "Text indent",
        "description": "Text indent dùng để thụt đầu dòng của đoạn văn bản. Thường dùng khi muốn dòng đầu tiên của đoạn văn lùi vào trong.",
        "exampleText": "Một đoạn mô tả dài có thể thụt đầu dòng để giống kiểu trình bày văn bản truyền thống.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-indent: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".article p {\n  text-indent: 2em;\n}",
            "preview": "<style>\n\n.demo-container-l8dj8 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-l8dj8 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.article p {\n  text-indent: 2em;\n}\n</style>\n\n<div class=\"demo-container-l8dj8\">\n  <p class=\"article\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-align",
        "title": "Text align",
        "description": "Text align dùng để căn chỉnh nội dung theo chiều ngang. Các kiểu thường gặp là căn trái, căn phải, căn giữa và căn đều hai bên.",
        "exampleText": "Tiêu đề có thể căn giữa, đoạn văn có thể căn đều hai bên để nhìn gọn hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-align: left | right | center | justify;"
          },
          {
            "title": "Ví dụ",
            "code": "h1 {\n  text-align: center;\n}",
            "preview": "<style>\n\n.demo-container-nyai2 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-nyai2 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\nh1 {\n  text-align: center;\n}\n</style>\n\n<div class=\"demo-container-nyai2\">\n  <p class=\"demo-text\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-align-last",
        "title": "Text align last",
        "description": "Text align last dùng để căn chỉnh dòng cuối cùng của đoạn văn khi dùng text align.",
        "exampleText": "Một đoạn văn căn đều hai bên nhưng dòng cuối có thể được căn giữa để tạo bố cục đặc biệt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-align-last: auto | left | right | center | justify;"
          },
          {
            "title": "Ví dụ",
            "code": ".special-paragraph {\n  text-align: justify;\n  text-align-last: center;\n}",
            "preview": "<style>\n\n.demo-container-qj4o1 { font-family: sans-serif; background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; }\n.demo-container-qj4o1 p { margin: 0; background: white; padding: 16px; border: 1px solid #cbd5e1; border-radius: 4px; }\n\n/* --- USER CODE --- */\n.special-paragraph {\n  text-align: justify;\n  text-align-last: center;\n}\n</style>\n\n<div class=\"demo-container-qj4o1\">\n  <p class=\"special-paragraph\">Đoạn văn bản mẫu (Typography). Con cáo nâu nhanh nhẹn nhảy qua con chó lười. The quick brown fox jumps over the lazy dog.</p>\n</div>"
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
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Tổng chiều rộng = content + padding + border\nKhoảng cách bên ngoài = margin"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #dbe3ea;\n  margin-bottom: 24px;\n}",
            "preview": "<style>\n\n.demo-container-m8bsk { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.card { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #dbe3ea;\n  margin-bottom: 24px;\n}\n</style>\n\n<div class=\"demo-container-m8bsk\">\n  <div class=\"card\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-width",
        "title": "Width",
        "description": "width dùng để đặt chiều rộng cho phần tử. Trong repo có ví dụ .box được đặt width: 200px.",
        "exampleText": "Một khối nội dung có thể đặt chiều rộng 200px để tạo box cố định.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "width: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".box {\n  width: 200px;\n}",
            "preview": "<style>\n\n.demo-container-5g6k6 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.box { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.box {\n  width: 200px;\n}\n</style>\n\n<div class=\"demo-container-5g6k6\">\n  <div class=\"box\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-height",
        "title": "Height",
        "description": "height dùng để đặt chiều cao cho phần tử. Trong repo có ví dụ .box được đặt height: 200px, kết hợp với width: 200px để tạo một khối vuông.",
        "exampleText": "Một box demo có thể đặt width 200px và height 200px để tạo hình vuông màu xanh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "height: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".box {\n  width: 200px;\n  height: 200px;\n  background: green;\n}",
            "preview": "<style>\n\n.demo-container-5st0q { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.box { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.box {\n  width: 200px;\n  height: 200px;\n  background: green;\n}\n</style>\n\n<div class=\"demo-container-5st0q\">\n  <div class=\"box\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-inline-width-height",
        "title": "Width và height với inline element",
        "description": "Inline element thông thường không nhận width và height như block element. Margin và padding theo chiều dọc cũng không đẩy bố cục xung quanh theo cách của block. Muốn phần tử inline nhận kích thước rõ ràng, có thể đổi sang inline-block.",
        "exampleText": "Một thẻ span nếu muốn có kích thước rõ ràng giống một button nhỏ thì nên đổi sang display: inline-block.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: inline-block;\nwidth: value;\nheight: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".span {\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n}",
            "preview": "<style>\n\n.demo-container-0m251 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.span { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.span {\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n}\n</style>\n\n<div class=\"demo-container-0m251\">\n  <div class=\"span\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-max-width",
        "title": "Max-width",
        "description": "max-width dùng để giới hạn chiều rộng tối đa của phần tử. Khi màn hình lớn, phần tử không vượt quá giá trị max-width; khi không gian nhỏ hơn, phần tử vẫn có thể co lại.",
        "exampleText": "Container chính của website có thể đặt max-width để nội dung không bị kéo quá dài trên màn hình lớn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "max-width: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".container {\n  width: 100%;\n  max-width: 1200px;\n}",
            "preview": "<style>\n\n.demo-container-99kna { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.container { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.container {\n  width: 100%;\n  max-width: 1200px;\n}\n</style>\n\n<div class=\"demo-container-99kna\">\n  <div class=\"container\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-min-width",
        "title": "Min-width",
        "description": "min-width dùng để đặt chiều rộng nhỏ nhất cho phần tử. Phần tử sẽ không nhỏ hơn giá trị này, ngay cả khi không gian bên ngoài bị thu hẹp.",
        "exampleText": "Một button có thể đặt min-width để không bị quá nhỏ khi nội dung ngắn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "min-width: value;"
          },
          {
            "title": "Ví dụ",
            "code": "button {\n  min-width: 120px;\n}",
            "preview": "<style>\n\n.demo-container-htbvp { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.demo-target { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\nbutton {\n  min-width: 120px;\n}\n</style>\n\n<div class=\"demo-container-htbvp\">\n  <div class=\"demo-target\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-padding",
        "title": "Padding",
        "description": "padding là khoảng cách bên trong phần tử, nằm giữa nội dung và border. Padding giúp nội dung không bị dính sát vào viền. Trong repo có ví dụ .box dùng các kiểu padding khác nhau và .span dùng padding: 10px 30px.",
        "exampleText": "Một card kiến thức nên có padding để chữ bên trong dễ đọc hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "padding: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  padding: 20px;\n}\n\n.span {\n  padding: 10px 30px;\n}",
            "preview": "<style>\n\n.demo-container-zfr0r { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.card { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.card {\n  padding: 20px;\n}\n\n.span {\n  padding: 10px 30px;\n}\n</style>\n\n<div class=\"demo-container-zfr0r\">\n  <div class=\"card\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-padding-shorthand",
        "title": "Padding rút gọn",
        "description": "Padding có thể viết rút gọn bằng 1, 2, 3 hoặc 4 giá trị. Thứ tự bốn giá trị là trên, phải, dưới, trái.",
        "exampleText": "Một box có thể đặt padding trên dưới là 10px, trái phải là 20px để nội dung cân đối hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "padding: all;\npadding: vertical horizontal;\npadding: top horizontal bottom;\npadding: top right bottom left;"
          },
          {
            "title": "Ví dụ",
            "code": ".box {\n  padding: 10px 20px;\n}",
            "preview": "<style>\n\n.demo-container-v2w1l { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.box { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.box {\n  padding: 10px 20px;\n}\n</style>\n\n<div class=\"demo-container-v2w1l\">\n  <div class=\"box\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-padding-directions",
        "title": "Padding theo từng hướng",
        "description": "Padding có thể đặt riêng cho từng hướng: trên, phải, dưới và trái. Cách này dùng khi chỉ muốn tạo khoảng cách bên trong ở một phía cụ thể.",
        "exampleText": "Một tiêu đề trong card có thể cần padding-left để lùi chữ vào trong.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "padding-top: value;\npadding-right: value;\npadding-bottom: value;\npadding-left: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".card-title {\n  padding-left: 16px;\n}",
            "preview": "<style>\n\n.demo-container-lkot9 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.card-title { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.card-title {\n  padding-left: 16px;\n}\n</style>\n\n<div class=\"demo-container-lkot9\">\n  <div class=\"card-title\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-margin",
        "title": "Margin",
        "description": "margin là khoảng cách bên ngoài phần tử, nằm ngoài border. Margin dùng để tạo khoảng cách giữa các phần tử với nhau.",
        "exampleText": "Các card kiến thức có thể dùng margin-bottom để tách nhau theo chiều dọc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "margin: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".knowledge-card {\n  margin-bottom: 24px;\n}",
            "preview": "<style>\n\n.demo-container-t8be3 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.knowledge-card { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.knowledge-card {\n  margin-bottom: 24px;\n}\n</style>\n\n<div class=\"demo-container-t8be3\">\n  <div class=\"knowledge-card\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-margin-shorthand",
        "title": "Margin rút gọn",
        "description": "Margin có thể viết rút gọn giống padding bằng 1, 2, 3 hoặc 4 giá trị. Thứ tự bốn giá trị là trên, phải, dưới, trái.",
        "exampleText": "Một section có thể có margin trên dưới lớn hơn, trái phải bằng auto để nằm giữa trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "margin: all;\nmargin: vertical horizontal;\nmargin: top horizontal bottom;\nmargin: top right bottom left;"
          },
          {
            "title": "Ví dụ",
            "code": "section {\n  margin: 40px auto;\n}",
            "preview": "<style>\n\n.demo-container-vfkry { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.demo-target { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\nsection {\n  margin: 40px auto;\n}\n</style>\n\n<div class=\"demo-container-vfkry\">\n  <div class=\"demo-target\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-margin-directions",
        "title": "Margin theo từng hướng",
        "description": "Margin có thể đặt riêng từng hướng bằng margin-top, margin-right, margin-bottom và margin-left.",
        "exampleText": "Một tiêu đề có thể dùng margin-bottom để cách phần mô tả bên dưới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "margin-top: value;\nmargin-right: value;\nmargin-bottom: value;\nmargin-left: value;"
          },
          {
            "title": "Ví dụ",
            "code": "h2 {\n  margin-bottom: 12px;\n}",
            "preview": "<style>\n\n.demo-container-3lvyv { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.demo-target { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\nh2 {\n  margin-bottom: 12px;\n}\n</style>\n\n<div class=\"demo-container-3lvyv\">\n  <div class=\"demo-target\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-margin-auto",
        "title": "Margin auto",
        "description": "margin auto thường dùng để căn giữa một block element theo chiều ngang. Phần tử cần có width hoặc max-width rõ ràng và còn khoảng trống ngang để trình duyệt phân phối.",
        "exampleText": "Phần nội dung chính của page CSS có thể đặt max-width và margin auto để nằm giữa màn hình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "width: value;\nmargin-left: auto;\nmargin-right: auto;"
          },
          {
            "title": "Ví dụ",
            "code": "main {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}",
            "preview": "<style>\n\n.demo-container-a9uj4 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.demo-target { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\nmain {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n</style>\n\n<div class=\"demo-container-a9uj4\">\n  <div class=\"demo-target\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border",
        "title": "Border",
        "description": "border dùng để tạo đường viền cho phần tử. Border thường gồm độ dày, kiểu viền và màu viền. Trong repo có ví dụ viết gọn border: 3px solid red.",
        "exampleText": "Một box ghi chú có thể có border màu đỏ để nổi bật hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border: width style color;"
          },
          {
            "title": "Ví dụ",
            "code": ".note {\n  border: 3px solid red;\n}",
            "preview": "<style>\n\n.demo-container-zo976 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.note { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.note {\n  border: 3px solid red;\n}\n</style>\n\n<div class=\"demo-container-zo976\">\n  <div class=\"note\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border-width",
        "title": "Border width",
        "description": "border-width dùng để đặt độ dày của đường viền. Có thể đặt chung cho cả bốn cạnh hoặc đặt riêng bằng border-top-width, border-right-width, border-bottom-width và border-left-width.",
        "exampleText": "Một box có thể có border-top dày hơn để tạo điểm nhấn ở phía trên.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border-width: value;\nborder-top-width: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".box {\n  border-style: solid;\n  border-width: 6px 1px 1px;\n}",
            "preview": "<style>\n\n.demo-container-zjxz6 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.box { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.box {\n  border-style: solid;\n  border-width: 6px 1px 1px;\n}\n</style>\n\n<div class=\"demo-container-zjxz6\">\n  <div class=\"box\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border-style",
        "title": "Border style",
        "description": "border-style dùng để đặt kiểu đường viền. Một số kiểu thường gặp là none, solid, dashed, dotted và double.",
        "exampleText": "Một box lưu ý có thể dùng viền dashed để khác với box nội dung thường.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border-style: none | solid | dashed | dotted | double;"
          },
          {
            "title": "Ví dụ",
            "code": ".notice {\n  border-width: 2px;\n  border-style: dashed;\n}",
            "preview": "<style>\n\n.demo-container-risjt { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.notice { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.notice {\n  border-width: 2px;\n  border-style: dashed;\n}\n</style>\n\n<div class=\"demo-container-risjt\">\n  <div class=\"notice\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border-color",
        "title": "Border color",
        "description": "border-color dùng để đặt màu cho đường viền. Có thể đặt một màu chung hoặc nhiều màu cho các cạnh khác nhau. Trong repo có ví dụ border-color: red green blue yellow.",
        "exampleText": "Một box có thể có bốn cạnh với bốn màu khác nhau để minh họa cách hoạt động của border-color.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border-color: top right bottom left;"
          },
          {
            "title": "Ví dụ",
            "code": ".box {\n  border-width: 4px;\n  border-style: solid;\n  border-color: red green blue yellow;\n}",
            "preview": "<style>\n\n.demo-container-vk2s0 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.box { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.box {\n  border-width: 4px;\n  border-style: solid;\n  border-color: red green blue yellow;\n}\n</style>\n\n<div class=\"demo-container-vk2s0\">\n  <div class=\"box\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border-sides",
        "title": "Border từng cạnh",
        "description": "Có thể đặt border riêng cho từng cạnh bằng border-left, border-top, border-right và border-bottom. Cách này phù hợp khi chỉ muốn một cạnh có viền hoặc mỗi cạnh có style khác nhau.",
        "exampleText": "Một đoạn ghi chú có thể chỉ cần border-left màu xanh để tạo hiệu ứng quote hoặc note.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border-top: width style color;\nborder-right: width style color;\nborder-bottom: width style color;\nborder-left: width style color;"
          },
          {
            "title": "Ví dụ",
            "code": ".note {\n  border-left: 4px solid #1572b6;\n  padding-left: 16px;\n}",
            "preview": "<style>\n\n.demo-container-8fb26 { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.note { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\n.note {\n  border-left: 4px solid #1572b6;\n  padding-left: 16px;\n}\n</style>\n\n<div class=\"demo-container-8fb26\">\n  <div class=\"note\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-border-radius",
        "title": "Border radius",
        "description": "border-radius dùng để bo góc phần tử. Giá trị càng lớn thì góc càng tròn. Nếu phần tử có width và height bằng nhau, dùng border-radius: 50% có thể tạo hình tròn.",
        "exampleText": "Button trong website có thể dùng border-radius lớn để tạo dạng nút bo tròn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "border-radius: value;"
          },
          {
            "title": "Ví dụ",
            "code": "button {\n  border-radius: 999px;\n}\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}",
            "preview": "<style>\n\n.demo-container-cymed { background: #f1f5f9; padding: 32px; border: 2px dashed #94a3b8; border-radius: 8px; display: inline-block; }\n.avatar { background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n\n/* --- USER CODE --- */\nbutton {\n  border-radius: 999px;\n}\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n</style>\n\n<div class=\"demo-container-cymed\">\n  <div class=\"avatar\">Bên trong hộp (Box)</div>\n</div>"
          }
        ]
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
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-color: color;"
          },
          {
            "title": "Ví dụ",
            "code": "body {\n  background-color: #f3f4f6;\n}\n\n.card {\n  background-color: #fff;\n}",
            "preview": "<style>\n\n.demo-container-ni2b9 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.card { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\nbody {\n  background-color: #f3f4f6;\n}\n\n.card {\n  background-color: #fff;\n}\n</style>\n\n<div class=\"demo-container-ni2b9\">\n  <div class=\"card\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-image",
        "title": "Background image",
        "description": "Background image dùng để đặt hình ảnh làm nền cho phần tử. Ảnh nền không phải là nội dung chính như thẻ img mà chỉ là phần trang trí giao diện.",
        "exampleText": "Phần banner đầu trang có thể dùng một hình ảnh làm nền phía sau tiêu đề.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-image: url(\"image-path\");"
          },
          {
            "title": "Ví dụ",
            "code": ".banner {\n  background-image: url(\"/images/banner.jpg\");\n}",
            "preview": "<style>\n\n.demo-container-nch9f { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner {\n  background-image: url(\"/images/banner.jpg\");\n}\n</style>\n\n<div class=\"demo-container-nch9f\">\n  <div class=\"banner\" style=\"width: 300px; height: 200px; background-image: url('https://picsum.photos/100/100'); border: 2px solid #ccc;\"></div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-repeat",
        "title": "Background repeat",
        "description": "Background repeat dùng để quy định ảnh nền có lặp lại hay không. Mặc định, nếu ảnh nhỏ hơn phần tử, trình duyệt có thể lặp ảnh theo cả chiều ngang và chiều dọc.",
        "exampleText": "Nếu dùng một icon nhỏ làm background, ảnh có thể bị lặp nhiều lần. Khi không muốn lặp, cần đặt chế độ không lặp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-repeat: repeat | no-repeat | repeat-x | repeat-y;"
          },
          {
            "title": "Ví dụ",
            "code": ".banner {\n  background-image: url(\"/images/banner.jpg\");\n  background-repeat: no-repeat;\n}",
            "preview": "<style>\n\n.demo-container-rvr3r { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner {\n  background-image: url(\"/images/banner.jpg\");\n  background-repeat: no-repeat;\n}\n</style>\n\n<div class=\"demo-container-rvr3r\">\n  <div class=\"banner\" style=\"width: 300px; height: 200px; background-image: url('https://picsum.photos/100/100'); border: 2px solid #ccc;\"></div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-size",
        "title": "Background size",
        "description": "Background size dùng để điều chỉnh kích thước ảnh nền. Có thể cho ảnh phủ toàn bộ phần tử, nằm trọn trong phần tử, tự co giãn hoặc đặt kích thước cụ thể.",
        "exampleText": "Một banner có ảnh nền nên dùng kiểu phủ toàn bộ khu vực để ảnh không bị lặp và nhìn đầy đủ hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-size: auto | cover | contain | width height;"
          },
          {
            "title": "Ví dụ",
            "code": ".banner {\n  background-size: cover;\n}",
            "preview": "<style>\n\n.demo-container-9so0j { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner {\n  background-size: cover;\n}\n</style>\n\n<div class=\"demo-container-9so0j\">\n  <div class=\"banner\" style=\"width: 300px; height: 200px; background-image: url('https://picsum.photos/100/100'); border: 2px solid #ccc;\"></div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-position",
        "title": "Background position",
        "description": "Background position dùng để xác định vị trí của ảnh nền trong phần tử. Có thể đặt ảnh ở giữa, bên trái, bên phải, phía trên hoặc phía dưới.",
        "exampleText": "Ảnh nền của banner có thể đặt ở giữa để phần quan trọng của ảnh luôn nằm trong vùng nhìn thấy.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-position: horizontal vertical;"
          },
          {
            "title": "Ví dụ",
            "code": ".banner {\n  background-position: center center;\n}",
            "preview": "<style>\n\n.demo-container-ay1tr { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner {\n  background-position: center center;\n}\n</style>\n\n<div class=\"demo-container-ay1tr\">\n  <div class=\"banner\" style=\"width: 300px; height: 200px; background-image: url('https://picsum.photos/100/100'); border: 2px solid #ccc;\"></div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-attachment",
        "title": "Background attachment",
        "description": "Background attachment dùng để quy định ảnh nền cuộn theo nội dung hay được cố định khi người dùng cuộn trang.",
        "exampleText": "Một section có thể dùng ảnh nền cố định để tạo hiệu ứng khi người dùng cuộn trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background-attachment: scroll | fixed | local;"
          },
          {
            "title": "Ví dụ",
            "code": ".hero {\n  background-attachment: fixed;\n}",
            "preview": "<style>\n\n.demo-container-vp79b { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.hero { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.hero {\n  background-attachment: fixed;\n}\n</style>\n\n<div class=\"demo-container-vp79b\">\n  <div class=\"hero\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-background-shorthand",
        "title": "Background shorthand",
        "description": "Background shorthand là cách viết gộp nhiều thuộc tính background trong một khai báo. Có thể gộp màu nền, ảnh nền, vị trí, kích thước, lặp ảnh và attachment.",
        "exampleText": "Một banner có thể khai báo cùng lúc màu nền dự phòng, ảnh nền, vị trí ở giữa, không lặp ảnh và kích thước phủ toàn bộ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "background: color image position / size repeat attachment;"
          },
          {
            "title": "Ví dụ",
            "code": ".banner {\n  background: #1f2937 url(\"/images/banner.jpg\") center / cover no-repeat fixed;\n}",
            "preview": "<style>\n\n.demo-container-o8tu8 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner {\n  background: #1f2937 url(\"/images/banner.jpg\") center / cover no-repeat fixed;\n}\n</style>\n\n<div class=\"demo-container-o8tu8\">\n  <div class=\"banner\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-box-shadow",
        "title": "Box shadow",
        "description": "Box shadow dùng để tạo bóng đổ cho phần tử. Bóng đổ giúp phần tử nổi lên khỏi nền và tạo chiều sâu cho giao diện.",
        "exampleText": "Các card kiến thức trong website có thể dùng box shadow nhẹ để trông giống những tấm thẻ nổi trên nền trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "box-shadow: offset-x offset-y blur spread color;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);\n}",
            "preview": "<style>\n\n.demo-container-ot2f0 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.card { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.card {\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);\n}\n</style>\n\n<div class=\"demo-container-ot2f0\">\n  <div class=\"card\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-text-shadow",
        "title": "Text shadow",
        "description": "Text shadow dùng để tạo bóng cho chữ. Thuộc tính này thường dùng cho tiêu đề, banner hoặc chữ nằm trên ảnh nền.",
        "exampleText": "Tiêu đề trên banner có thể dùng text shadow để dễ đọc hơn khi nằm trên ảnh nền sáng hoặc phức tạp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "text-shadow: offset-x offset-y blur color;"
          },
          {
            "title": "Ví dụ",
            "code": ".banner-title {\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n}",
            "preview": "<style>\n\n.demo-container-62on3 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.banner-title { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.banner-title {\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n}\n</style>\n\n<div class=\"demo-container-62on3\">\n  <div class=\"banner-title\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-opacity",
        "title": "Opacity",
        "description": "Opacity dùng để chỉnh độ trong suốt của phần tử. Giá trị càng thấp thì phần tử càng mờ. Khi dùng opacity cho phần tử cha, toàn bộ nội dung bên trong cũng bị mờ theo.",
        "exampleText": "Một box thông báo phụ có thể giảm opacity để nhìn nhẹ hơn so với nội dung chính.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "opacity: number; /* từ 0 đến 1 */"
          },
          {
            "title": "Ví dụ",
            "code": ".secondary-notice {\n  opacity: 0.65;\n}",
            "preview": "<style>\n\n.demo-container-v12g3 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.secondary-notice { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.secondary-notice {\n  opacity: 0.65;\n}\n</style>\n\n<div class=\"demo-container-v12g3\">\n  <div class=\"secondary-notice\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-filter",
        "title": "Filter",
        "description": "Filter dùng để tạo hiệu ứng hình ảnh như làm mờ, tăng sáng, giảm sáng, chuyển grayscale hoặc thay đổi độ tương phản.",
        "exampleText": "Một ảnh đại diện có thể dùng filter grayscale để chuyển thành ảnh đen trắng khi chưa hover.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "filter: function(value);"
          },
          {
            "title": "Ví dụ",
            "code": ".avatar {\n  filter: grayscale(100%);\n}\n\n.avatar:hover {\n  filter: grayscale(0);\n}",
            "preview": "<style>\n\n.demo-container-yzdqv { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.avatar { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.avatar {\n  filter: grayscale(100%);\n}\n\n.avatar:hover {\n  filter: grayscale(0);\n}\n</style>\n\n<div class=\"demo-container-yzdqv\">\n  <div class=\"avatar\">Khối mẫu (Demo Box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-overflow",
        "title": "Overflow",
        "description": "Overflow dùng để xử lý trường hợp nội dung bên trong vượt quá kích thước của phần tử cha. Nó quyết định phần nội dung bị tràn sẽ hiển thị, ẩn đi hay có thanh cuộn.",
        "exampleText": "Một khung chứa đoạn mô tả dài có thể dùng overflow để tránh làm vỡ layout.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow: visible | hidden | scroll | auto;"
          },
          {
            "title": "Ví dụ",
            "code": ".content-box {\n  width: 300px;\n  height: 160px;\n  overflow: auto;\n}",
            "preview": "<style>\n\n.demo-container-mqsa5 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.content-box { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.content-box {\n  width: 300px;\n  height: 160px;\n  overflow: auto;\n}\n</style>\n\n<div class=\"demo-container-mqsa5\">\n  <div class=\"content-box\">\n    Văn bản này cực kỳ dài. Cáo nâu nhanh nhẹn nhảy qua chó lười. Văn bản dài giúp bạn thấy rõ tác dụng của Overflow khi nội dung tràn ra khỏi hộp giới hạn. Kéo thanh cuộn để xem nếu có.\n  </div>\n</div>"
          }
        ]
      },
      {
        "id": "css-overflow-hidden",
        "title": "Overflow hidden",
        "description": "Overflow hidden dùng để ẩn phần nội dung bị tràn ra ngoài phần tử cha. Phần vượt quá kích thước của khung sẽ không hiển thị.",
        "exampleText": "Một card có chiều cao cố định có thể dùng overflow hidden để không cho nội dung dài tràn ra ngoài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow: hidden;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  height: 200px;\n  overflow: hidden;\n}",
            "preview": "<style>\n\n.demo-container-sv7rx { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.card { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.card {\n  height: 200px;\n  overflow: hidden;\n}\n</style>\n\n<div class=\"demo-container-sv7rx\">\n  <div class=\"card\">\n    Văn bản này cực kỳ dài. Cáo nâu nhanh nhẹn nhảy qua chó lười. Văn bản dài giúp bạn thấy rõ tác dụng của Overflow khi nội dung tràn ra khỏi hộp giới hạn. Kéo thanh cuộn để xem nếu có.\n  </div>\n</div>"
          }
        ]
      },
      {
        "id": "css-overflow-scroll",
        "title": "Overflow scroll",
        "description": "Overflow scroll tạo thanh cuộn cho phần tử, kể cả khi nội dung chưa chắc đã tràn. Người dùng có thể cuộn để xem phần nội dung vượt quá.",
        "exampleText": "Một khung code có chiều cao cố định có thể dùng overflow scroll để xem toàn bộ nội dung code dài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow: scroll;"
          },
          {
            "title": "Ví dụ",
            "code": ".code-box {\n  height: 240px;\n  overflow: scroll;\n}",
            "preview": "<style>\n\n.demo-container-649hs { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.code-box { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.code-box {\n  height: 240px;\n  overflow: scroll;\n}\n</style>\n\n<div class=\"demo-container-649hs\">\n  <div class=\"code-box\">\n    Văn bản này cực kỳ dài. Cáo nâu nhanh nhẹn nhảy qua chó lười. Văn bản dài giúp bạn thấy rõ tác dụng của Overflow khi nội dung tràn ra khỏi hộp giới hạn. Kéo thanh cuộn để xem nếu có.\n  </div>\n</div>"
          }
        ]
      },
      {
        "id": "css-overflow-auto",
        "title": "Overflow auto",
        "description": "Overflow auto chỉ hiển thị thanh cuộn khi nội dung thật sự bị tràn. Đây là cách dùng linh hoạt hơn overflow scroll.",
        "exampleText": "Một sidebar chứa nhiều tiêu đề có thể dùng overflow auto để khi danh sách dài thì tự xuất hiện thanh cuộn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow: auto;"
          },
          {
            "title": "Ví dụ",
            "code": ".sidebar {\n  max-height: 100vh;\n  overflow: auto;\n}",
            "preview": "<style>\n\n.demo-container-biqv6 { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.sidebar { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.sidebar {\n  max-height: 100vh;\n  overflow: auto;\n}\n</style>\n\n<div class=\"demo-container-biqv6\">\n  <div class=\"sidebar\">\n    Văn bản này cực kỳ dài. Cáo nâu nhanh nhẹn nhảy qua chó lười. Văn bản dài giúp bạn thấy rõ tác dụng của Overflow khi nội dung tràn ra khỏi hộp giới hạn. Kéo thanh cuộn để xem nếu có.\n  </div>\n</div>"
          }
        ]
      },
      {
        "id": "css-overflow-x-y",
        "title": "Overflow x / y",
        "description": "Overflow x dùng để xử lý tràn theo chiều ngang, còn overflow y xử lý tràn theo chiều dọc. Có thể kiểm soát riêng từng hướng thay vì áp dụng chung cho cả hai chiều.",
        "exampleText": "Ô hiển thị code có thể cho phép cuộn ngang bằng overflow x, còn nội dung bài viết dài có thể cho phép cuộn dọc bằng overflow y.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "overflow-x: value;\noverflow-y: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".code-box {\n  overflow-x: auto;\n  overflow-y: hidden;\n}",
            "preview": "<style>\n\n.demo-container-d1w2o { background: #f1f5f9; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }\n.code-box { width: 200px; height: 120px; background-color: #3b82f6; color: white; padding: 16px; border-radius: 8px; line-height: 1.5; }\n\n/* --- USER CODE --- */\n.code-box {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n</style>\n\n<div class=\"demo-container-d1w2o\">\n  <div class=\"code-box\">\n    Văn bản này cực kỳ dài. Cáo nâu nhanh nhẹn nhảy qua chó lười. Văn bản dài giúp bạn thấy rõ tác dụng của Overflow khi nội dung tràn ra khỏi hộp giới hạn. Kéo thanh cuộn để xem nếu có.\n  </div>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Display, Float, Position",
    "cards": [
      {
        "id": "css-display",
        "title": "Display",
        "description": "Display dùng để quy định cách một phần tử HTML được hiển thị trên trang. Nó ảnh hưởng đến việc phần tử nằm trên một dòng riêng, nằm cùng dòng, có nhận width height hay không, hoặc có bị ẩn khỏi giao diện hay không.",
        "exampleText": "Một thẻ div mặc định là block, còn thẻ span mặc định là inline. Nếu muốn span có kích thước như một button, có thể đổi display của nó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".element {\n  display: block;\n}",
            "preview": "<style>\n.element {\n  display: block;\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"element\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-display-block",
        "title": "Display block",
        "description": "Display block làm phần tử chiếm toàn bộ chiều ngang có thể của phần tử cha và thường tự xuống dòng. Block element có thể đặt width, height, margin, padding rõ ràng.",
        "exampleText": "Các phần như header, section, div, article thường hiển thị dạng block và nằm thành từng khối riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: block;"
          },
          {
            "title": "Ví dụ",
            "code": ".section {\n  display: block;\n  width: 100%;\n}",
            "preview": "<style>\n.demo-container-tia2e { background: #f8fafc; padding: 16px; border-radius: 8px; } .section { background: #3b82f6; color: white; padding: 4px 8px; margin: 4px; border: 1px solid #1e3a8a; }\n/* --- USER CODE --- */\n.section {\n  display: block;\n  width: 100%;\n}\n</style>\n<div class=\"demo-container-tia2e\">Text trước <div class=\"section\">Phần tử Demo</div> Text sau</div>"
          }
        ]
      },
      {
        "id": "css-display-inline",
        "title": "Display inline",
        "description": "Display inline làm phần tử nằm cùng dòng với nội dung khác. Inline element không chiếm toàn bộ chiều ngang và thường không đặt được width, height như block element.",
        "exampleText": "Các thẻ như span, a, strong, em thường nằm cùng dòng với đoạn văn bản.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: inline;"
          },
          {
            "title": "Ví dụ",
            "code": ".highlight {\n  display: inline;\n}",
            "preview": "<style>\n.demo-container-nrh68 { background: #f8fafc; padding: 16px; border-radius: 8px; } .highlight { background: #3b82f6; color: white; padding: 4px 8px; margin: 4px; border: 1px solid #1e3a8a; }\n/* --- USER CODE --- */\n.highlight {\n  display: inline;\n}\n</style>\n<div class=\"demo-container-nrh68\">Text trước <div class=\"highlight\">Phần tử Demo</div> Text sau</div>"
          }
        ]
      },
      {
        "id": "css-display-inline-block",
        "title": "Display inline-block",
        "description": "Display inline-block kết hợp đặc điểm của inline và block. Phần tử vẫn nằm cùng dòng như inline, nhưng có thể đặt width, height, padding và margin rõ ràng như block.",
        "exampleText": "Một thẻ a có thể đổi sang inline-block để tạo thành button có kích thước, padding và bo góc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: inline-block;"
          },
          {
            "title": "Ví dụ",
            "code": ".button-link {\n  display: inline-block;\n  padding: 10px 20px;\n}",
            "preview": "<style>\n.demo-container-0mjkn { background: #f8fafc; padding: 16px; border-radius: 8px; } .button-link { background: #3b82f6; color: white; padding: 4px 8px; margin: 4px; border: 1px solid #1e3a8a; }\n/* --- USER CODE --- */\n.button-link {\n  display: inline-block;\n  padding: 10px 20px;\n}\n</style>\n<div class=\"demo-container-0mjkn\">Text trước <div class=\"button-link\">Phần tử Demo</div> Text sau</div>"
          }
        ]
      },
      {
        "id": "css-display-none",
        "title": "Display none",
        "description": "Display none dùng để ẩn hoàn toàn phần tử khỏi giao diện. Khi dùng display none, phần tử không còn chiếm không gian trên trang.",
        "exampleText": "Một menu phụ có thể được ẩn ban đầu bằng display none, sau đó hiển thị khi người dùng hover hoặc click.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: none;"
          },
          {
            "title": "Ví dụ",
            "code": ".submenu {\n  display: none;\n}",
            "preview": "<style>\n.demo-container-qcmtg { display: flex; gap: 8px; background: #f8fafc; padding: 16px; border-radius: 8px; } .box-d { width: 60px; height: 60px; background: #3b82f6; color:white; display:flex; align-items:center; justify-content:center; }\n/* --- USER CODE --- */\n.submenu {\n  display: none;\n}\n</style>\n<div class=\"demo-container-qcmtg\"><div class=\"box-d\">1</div><div class=\"box-d submenu\">2 (Ẩn)</div><div class=\"box-d\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-display-flex",
        "title": "Display flex",
        "description": "Display flex dùng để kích hoạt Flexbox cho phần tử cha. Khi một phần tử dùng display flex, các phần tử con bên trong có thể được sắp xếp linh hoạt theo hàng hoặc cột.",
        "exampleText": "Danh sách các button trên trang chủ có thể dùng display flex để xếp ngang và căn giữa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: flex;"
          },
          {
            "title": "Ví dụ",
            "code": ".actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}",
            "preview": "<style>\n.actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"actions\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-float",
        "title": "Float",
        "description": "Float dùng để đẩy phần tử sang trái hoặc phải, cho phép nội dung khác bao quanh nó. Trước đây float thường dùng để dựng layout, nhưng hiện nay chủ yếu dùng trong một số trường hợp đặc biệt vì Flexbox và Grid dễ quản lý hơn.",
        "exampleText": "Một hình ảnh trong bài viết có thể float sang trái để đoạn văn bản chạy xung quanh ảnh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "float: left | right | none;"
          },
          {
            "title": "Ví dụ",
            "code": ".article-image {\n  float: left;\n  margin-right: 16px;\n}",
            "preview": "<style>\n.demo-container-7g548 { background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #ccc; } .article-image { width: 80px; height: 80px; background: #ef4444; margin: 8px; } .clear-box { clear: both; background: #10b981; padding: 8px; color: white; }\n/* --- USER CODE --- */\n.article-image {\n  float: left;\n  margin-right: 16px;\n}\n</style>\n<div class=\"demo-container-7g548\"><div class=\"article-image\">Float Box</div><p>Đoạn văn bản này sẽ chảy xung quanh phần tử được float. Float giúp đẩy khối về một phía và nội dung khác sẽ tràn lên bao quanh nó.</p></div>"
          }
        ]
      },
      {
        "id": "css-float-left",
        "title": "Float left",
        "description": "Float left làm phần tử trôi sang bên trái của phần tử cha. Nội dung phía sau có thể nằm bên phải hoặc bao quanh phần tử đó nếu còn không gian.",
        "exampleText": "Một ảnh đại diện có thể được float left để đoạn mô tả nằm bên phải ảnh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "float: left;"
          },
          {
            "title": "Ví dụ",
            "code": ".avatar {\n  float: left;\n  margin-right: 16px;\n}",
            "preview": "<style>\n.demo-container-nq8qy { background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #ccc; } .avatar { width: 80px; height: 80px; background: #ef4444; margin: 8px; } .clear-box { clear: both; background: #10b981; padding: 8px; color: white; }\n/* --- USER CODE --- */\n.avatar {\n  float: left;\n  margin-right: 16px;\n}\n</style>\n<div class=\"demo-container-nq8qy\"><div class=\"avatar\">Float Box</div><p>Đoạn văn bản này sẽ chảy xung quanh phần tử được float. Float giúp đẩy khối về một phía và nội dung khác sẽ tràn lên bao quanh nó.</p></div>"
          }
        ]
      },
      {
        "id": "css-float-right",
        "title": "Float right",
        "description": "Float right làm phần tử trôi sang bên phải của phần tử cha. Nội dung phía sau có thể nằm bên trái hoặc bao quanh phần tử đó.",
        "exampleText": "Một ảnh minh họa có thể được float right để đoạn văn bản nằm ở phía bên trái.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "float: right;"
          },
          {
            "title": "Ví dụ",
            "code": ".illustration {\n  float: right;\n  margin-left: 16px;\n}",
            "preview": "<style>\n.demo-container-gb0x2 { background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #ccc; } .illustration { width: 80px; height: 80px; background: #ef4444; margin: 8px; } .clear-box { clear: both; background: #10b981; padding: 8px; color: white; }\n/* --- USER CODE --- */\n.illustration {\n  float: right;\n  margin-left: 16px;\n}\n</style>\n<div class=\"demo-container-gb0x2\"><div class=\"illustration\">Float Box</div><p>Đoạn văn bản này sẽ chảy xung quanh phần tử được float. Float giúp đẩy khối về một phía và nội dung khác sẽ tràn lên bao quanh nó.</p></div>"
          }
        ]
      },
      {
        "id": "css-clear",
        "title": "Clear",
        "description": "Clear dùng để ngăn phần tử bị ảnh hưởng bởi float phía trước. Nó giúp phần tử mới bắt đầu xuống dưới phần tử đang float thay vì bị chen lên cạnh.",
        "exampleText": "Sau một khu vực có ảnh float left, có thể dùng clear để phần nội dung tiếp theo không nằm cạnh ảnh nữa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "clear: left | right | both | none;"
          },
          {
            "title": "Ví dụ",
            "code": ".next-section {\n  clear: both;\n}",
            "preview": "<style>\n.demo-container-qwcec { background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #ccc; } .next-section { width: 80px; height: 80px; background: #ef4444; margin: 8px; } .clear-box { clear: both; background: #10b981; padding: 8px; color: white; }\n/* --- USER CODE --- */\n.next-section {\n  clear: both;\n}\n</style>\n<div class=\"demo-container-qwcec\"><div class=\"next-section\">Float Box</div><p>Đoạn văn bản này sẽ chảy xung quanh phần tử được float. Float giúp đẩy khối về một phía và nội dung khác sẽ tràn lên bao quanh nó.</p></div>"
          }
        ]
      },
      {
        "id": "css-position",
        "title": "Position",
        "description": "Position dùng để quy định cách định vị phần tử trên trang. Nó quyết định phần tử đứng theo luồng bình thường hay có thể được di chuyển bằng top, right, bottom, left.",
        "exampleText": "Một icon thông báo có thể được đặt ở góc trên bên phải của card bằng position.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: static | relative | absolute | fixed | sticky;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  position: relative;\n}",
            "preview": "<style>\n.demo-container-uzez1 { position: relative; height: 200px; background: #e2e8f0; padding: 16px; border-radius: 8px; border: 2px dashed #94a3b8; } .card { background: #ef4444; color: white; padding: 8px 16px; border-radius: 4px; }\n/* --- USER CODE --- */\n.card {\n  position: relative;\n}\n</style>\n<div class=\"demo-container-uzez1\">Vùng chứa (Container - Relative)<div class=\"card\">Phần tử Demo</div></div>"
          }
        ]
      },
      {
        "id": "css-position-static",
        "title": "Position static",
        "description": "Static là giá trị mặc định của position. Phần tử sẽ nằm theo luồng bình thường của trang và không bị ảnh hưởng bởi top, right, bottom, left.",
        "exampleText": "Nếu không khai báo position, hầu hết phần tử HTML sẽ có position static.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: static;"
          },
          {
            "title": "Ví dụ",
            "code": ".element {\n  position: static;\n}",
            "preview": "<style>\n.demo-container-dh5rt { position: relative; height: 200px; background: #e2e8f0; padding: 16px; border-radius: 8px; border: 2px dashed #94a3b8; } .element { background: #ef4444; color: white; padding: 8px 16px; border-radius: 4px; }\n/* --- USER CODE --- */\n.element {\n  position: static;\n}\n</style>\n<div class=\"demo-container-dh5rt\">Vùng chứa (Container - Relative)<div class=\"element\">Phần tử Demo</div></div>"
          }
        ]
      },
      {
        "id": "css-position-relative",
        "title": "Position relative",
        "description": "Relative cho phép phần tử di chuyển so với vị trí ban đầu của chính nó. Phần tử vẫn giữ không gian cũ trong layout.",
        "exampleText": "Một badge nhỏ có thể được đẩy lên một chút so với vị trí ban đầu bằng position relative.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: relative;"
          },
          {
            "title": "Ví dụ",
            "code": ".badge {\n  position: relative;\n  top: -4px;\n}",
            "preview": "<style>\n.demo-container-8m01v { position: relative; height: 200px; background: #e2e8f0; padding: 16px; border-radius: 8px; border: 2px dashed #94a3b8; } .badge { background: #ef4444; color: white; padding: 8px 16px; border-radius: 4px; }\n/* --- USER CODE --- */\n.badge {\n  position: relative;\n  top: -4px;\n}\n</style>\n<div class=\"demo-container-8m01v\">Vùng chứa (Container - Relative)<div class=\"badge\">Phần tử Demo</div></div>"
          }
        ]
      },
      {
        "id": "css-position-absolute",
        "title": "Position absolute",
        "description": "Absolute cho phép phần tử thoát khỏi luồng bình thường và định vị theo phần tử cha gần nhất có position khác static. Nếu không có cha phù hợp, nó có thể định vị theo viewport hoặc tài liệu.",
        "exampleText": "Một icon “new” có thể đặt absolute ở góc trên bên phải của một card sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: absolute;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  position: relative;\n}\n\n.card .new-icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
            "preview": "<style>\n.demo-container-nub66 { position: relative; height: 200px; background: #e2e8f0; padding: 16px; border-radius: 8px; border: 2px dashed #94a3b8; } .card { background: #ef4444; color: white; padding: 8px 16px; border-radius: 4px; }\n/* --- USER CODE --- */\n.card {\n  position: relative;\n}\n\n.card .new-icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n</style>\n<div class=\"demo-container-nub66\">Vùng chứa (Container - Relative)<div class=\"card\">Phần tử Demo</div></div>"
          }
        ]
      },
      {
        "id": "css-position-fixed",
        "title": "Position fixed",
        "description": "Fixed cho phép phần tử cố định theo màn hình trình duyệt. Khi người dùng cuộn trang, phần tử vẫn đứng yên tại vị trí đã đặt.",
        "exampleText": "Một nút “Back to top” có thể fixed ở góc dưới bên phải màn hình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: fixed;"
          },
          {
            "title": "Ví dụ",
            "code": ".back-to-top {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}",
            "preview": "<style>\n.demo-container-8jjsa { position: relative; height: 200px; background: #e2e8f0; padding: 16px; border-radius: 8px; border: 2px dashed #94a3b8; } .back-to-top { background: #ef4444; color: white; padding: 8px 16px; border-radius: 4px; }\n/* --- USER CODE --- */\n.back-to-top {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}\n</style>\n<div class=\"demo-container-8jjsa\">Vùng chứa (Container - Relative)<div class=\"back-to-top\">Phần tử Demo</div></div>"
          }
        ]
      },
      {
        "id": "css-position-sticky",
        "title": "Position sticky",
        "description": "Sticky là kiểu định vị kết hợp giữa relative và fixed. Phần tử ban đầu nằm trong luồng bình thường, nhưng khi cuộn đến một vị trí nhất định, nó sẽ dính lại trên màn hình.",
        "exampleText": "Sidebar bên trái của page kiến thức có thể dùng sticky để luôn hiển thị khi người dùng cuộn nội dung bên phải.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "position: sticky;"
          },
          {
            "title": "Ví dụ",
            "code": ".sidebar {\n  position: sticky;\n  top: 20px;\n}",
            "preview": "<style>\n.demo-container-1vldx { height: 150px; overflow-y: auto; background: #e2e8f0; padding: 16px; border-radius: 8px; } .sidebar { background: #3b82f6; color: white; padding: 8px; text-align: center; font-weight: bold; }\n/* --- USER CODE --- */\n.sidebar {\n  position: sticky;\n  top: 20px;\n}\n</style>\n<div class=\"demo-container-1vldx\"><div class=\"sidebar\">Sticky Header</div><div style=\"height: 300px; padding: 16px;\">Cuộn xuống để xem hiệu ứng sticky...<br><br>Tiếp tục cuộn...<br><br>Vẫn cuộn...</div></div>"
          }
        ]
      },
      {
        "id": "css-z-index",
        "title": "Z-index",
        "description": "Z-index dùng để kiểm soát thứ tự chồng lớp của các phần tử. Phần tử có z-index lớn hơn thường nằm phía trên phần tử có z-index nhỏ hơn. Z-index thường hoạt động với các phần tử có position khác static.",
        "exampleText": "Một modal hoặc popup cần có z-index cao để nằm trên các nội dung còn lại của trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "z-index: integer | auto;"
          },
          {
            "title": "Ví dụ",
            "code": ".modal {\n  position: fixed;\n  z-index: 1000;\n}",
            "preview": "<style>\n.demo-container-k5glr { position: relative; height: 150px; background: #e2e8f0; border-radius: 8px; } .box-z1 { position: absolute; top: 20px; left: 20px; width: 100px; height: 100px; background: #3b82f6; color: white; padding: 8px; z-index: 1; } .modal { position: absolute; top: 40px; left: 40px; width: 100px; height: 100px; background: #ef4444; color: white; padding: 8px; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }\n/* --- USER CODE --- */\n.modal {\n  position: fixed;\n  z-index: 1000;\n}\n</style>\n<div class=\"demo-container-k5glr\"><div class=\"box-z1\">Box (z-index: 1)</div><div class=\"modal\">Box Demo (z-index)</div></div>"
          }
        ]
      },
      {
        "id": "css-position-offsets",
        "title": "Top, right, bottom, left",
        "description": "Top, right, bottom và left dùng để xác định khoảng cách định vị của phần tử khi dùng position relative, absolute, fixed hoặc sticky.",
        "exampleText": "Một button fixed có thể đặt cách mép dưới 20px và cách mép phải 20px để nằm ở góc dưới bên phải màn hình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "top: value;\nright: value;\nbottom: value;\nleft: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".fixed-button {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}",
            "preview": "<style>\n.fixed-button {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"fixed-button\">\n  Nội dung demo\n</div>\n</div>"
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
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: flex;"
          },
          {
            "title": "Ví dụ",
            "code": ".technology-list {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}",
            "preview": "<style>\n\n.demo-container-wzz0s { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.technology-list {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n</style>\n<div class=\"demo-container-wzz0s technology-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-display",
        "title": "Display flex",
        "description": "display: flex được đặt cho phần tử cha để kích hoạt Flexbox. Khi đó, các phần tử con trực tiếp bên trong sẽ trở thành flex item.",
        "exampleText": "Một khối menu có thể dùng display flex để các link nằm trên cùng một hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: flex;"
          },
          {
            "title": "Ví dụ",
            "code": ".menu {\n  display: flex;\n}",
            "preview": "<style>\n\n.demo-container-85qex { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.menu {\n  display: flex;\n}\n</style>\n<div class=\"demo-container-85qex menu\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-direction",
        "title": "Flex direction",
        "description": "flex-direction dùng để xác định hướng sắp xếp của các flex item. Có thể sắp xếp theo hàng ngang, hàng ngang đảo ngược, cột dọc hoặc cột dọc đảo ngược.",
        "exampleText": "Sidebar có thể dùng flex-direction column để các tiêu đề nằm dọc từ trên xuống dưới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-direction: row | row-reverse | column | column-reverse;"
          },
          {
            "title": "Ví dụ",
            "code": ".sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}",
            "preview": "<style>\n\n.demo-container-vm9ev { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}\n</style>\n<div class=\"demo-container-vm9ev sidebar-menu\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-row",
        "title": "Row",
        "description": "row là giá trị mặc định của flex-direction. Các item sẽ được xếp theo chiều ngang từ trái sang phải.",
        "exampleText": "Danh sách button trên desktop thường dùng row để các button nằm cạnh nhau.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-direction: row;"
          },
          {
            "title": "Ví dụ",
            "code": ".button-list {\n  display: flex;\n  flex-direction: row;\n}",
            "preview": "<style>\n\n.demo-container-a4k60 { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.button-list {\n  display: flex;\n  flex-direction: row;\n}\n</style>\n<div class=\"demo-container-a4k60 button-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-column",
        "title": "Column",
        "description": "column làm các item xếp theo chiều dọc từ trên xuống dưới.",
        "exampleText": "Menu bên trái của trang HTML hoặc CSS có thể dùng column để các mục nằm thành danh sách dọc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-direction: column;"
          },
          {
            "title": "Ví dụ",
            "code": ".sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}",
            "preview": "<style>\n\n.demo-container-9a3zy { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}\n</style>\n<div class=\"demo-container-9a3zy sidebar-menu\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-justify-content",
        "title": "Justify content",
        "description": "justify-content dùng để căn chỉnh các item theo trục chính. Nếu flex-direction là row, trục chính là chiều ngang. Nếu flex-direction là column, trục chính là chiều dọc.",
        "exampleText": "Một hàng button có thể dùng justify-content center để căn giữa các button theo chiều ngang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;"
          },
          {
            "title": "Ví dụ",
            "code": ".button-list {\n  display: flex;\n  justify-content: center;\n}",
            "preview": "<style>\n\n.demo-container-8sr0g { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.button-list {\n  display: flex;\n  justify-content: center;\n}\n</style>\n<div class=\"demo-container-8sr0g button-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-align-items",
        "title": "Align items",
        "description": "align-items dùng để căn chỉnh các item theo trục phụ. Nếu flex-direction là row, trục phụ là chiều dọc. Nếu flex-direction là column, trục phụ là chiều ngang.",
        "exampleText": "Một button có thể dùng display flex kết hợp align-items center để căn giữa chữ theo chiều dọc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "align-items: stretch | flex-start | flex-end | center | baseline;"
          },
          {
            "title": "Ví dụ",
            "code": ".button {\n  display: flex;\n  align-items: center;\n}",
            "preview": "<style>\n\n.demo-container-tr92m { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.button {\n  display: flex;\n  align-items: center;\n}\n</style>\n<div class=\"demo-container-tr92m button\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-align-content",
        "title": "Align content",
        "description": "align-content dùng để căn chỉnh nhiều dòng flex khi có flex-wrap. Thuộc tính này chỉ có tác dụng rõ khi các item xuống nhiều dòng và container còn khoảng trống trên trục phụ.",
        "exampleText": "Một danh sách card nhiều dòng có thể dùng align-content để điều chỉnh khoảng cách giữa các dòng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;"
          },
          {
            "title": "Ví dụ",
            "code": ".card-list {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  min-height: 600px;\n}",
            "preview": "<style>\n\n.demo-container-1eqoj { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.card-list {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  min-height: 600px;\n}\n</style>\n<div class=\"demo-container-1eqoj card-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div><div class=\"flex-item\" style=\"background:#f59e0b\">4</div><div class=\"flex-item\" style=\"background:#8b5cf6\">5</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-wrap",
        "title": "Flex wrap",
        "description": "flex-wrap quy định các item có được xuống dòng hay không khi không đủ không gian. Nếu không wrap, item có thể bị co lại hoặc tràn ra ngoài.",
        "exampleText": "Danh sách card bài học có thể dùng flex-wrap để khi màn hình nhỏ thì card tự xuống dòng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-wrap: nowrap | wrap | wrap-reverse;"
          },
          {
            "title": "Ví dụ",
            "code": ".card-list {\n  display: flex;\n  flex-wrap: wrap;\n}",
            "preview": "<style>\n\n.demo-container-uego7 { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.card-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n</style>\n<div class=\"demo-container-uego7 card-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div><div class=\"flex-item\" style=\"background:#f59e0b\">4</div><div class=\"flex-item\" style=\"background:#8b5cf6\">5</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-gap",
        "title": "Gap",
        "description": "gap dùng để tạo khoảng cách giữa các flex item. Đây là cách hiện đại và dễ dùng hơn so với việc đặt margin thủ công cho từng item.",
        "exampleText": "Các button trên trang tổng có thể dùng gap để cách nhau đều nhau.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "gap: row-gap column-gap;"
          },
          {
            "title": "Ví dụ",
            "code": ".button-list {\n  display: flex;\n  gap: 12px 16px;\n}",
            "preview": "<style>\n\n.demo-container-tsru3 { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.button-list {\n  display: flex;\n  gap: 12px 16px;\n}\n</style>\n<div class=\"demo-container-tsru3 button-list\" style=\"\"><div class=\"flex-item\">1</div><div class=\"flex-item\">2</div><div class=\"flex-item\">3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-order",
        "title": "Order",
        "description": "order dùng để thay đổi thứ tự hiển thị của flex item mà không cần đổi thứ tự trong HTML. Item có order nhỏ hơn sẽ hiển thị trước.",
        "exampleText": "Trên mobile, một phần tử có thể được đưa lên trước bằng order mà không cần sửa HTML.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "order: integer;"
          },
          {
            "title": "Ví dụ",
            "code": ".important-item {\n  order: -1;\n}",
            "preview": "<style>\n\n.demo-container-1thpc { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.important-item {\n  order: -1;\n}\n</style>\n<div class=\"demo-container-1thpc\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item important-item\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-grow",
        "title": "Flex grow",
        "description": "flex-grow quy định item có được mở rộng để chiếm phần không gian còn trống hay không. Giá trị càng lớn thì item càng được chia nhiều không gian hơn.",
        "exampleText": "Trong một hàng gồm sidebar và content, phần content có thể dùng flex-grow để chiếm phần còn lại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-grow: number;"
          },
          {
            "title": "Ví dụ",
            "code": ".content {\n  flex-grow: 1;\n}",
            "preview": "<style>\n\n.demo-container-cqchh { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.content {\n  flex-grow: 1;\n}\n</style>\n<div class=\"demo-container-cqchh\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item content\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-shrink",
        "title": "Flex shrink",
        "description": "flex-shrink quy định item có được co lại khi không đủ không gian hay không. Mặc định, flex item có thể co lại.",
        "exampleText": "Một sidebar có thể đặt flex-shrink bằng 0 để không bị co nhỏ khi màn hình hẹp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-shrink: number;"
          },
          {
            "title": "Ví dụ",
            "code": ".sidebar {\n  width: 280px;\n  flex-shrink: 0;\n}",
            "preview": "<style>\n\n.demo-container-r3koj { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.sidebar {\n  width: 280px;\n  flex-shrink: 0;\n}\n</style>\n<div class=\"demo-container-r3koj\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item sidebar\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-basis",
        "title": "Flex basis",
        "description": "flex-basis quy định kích thước ban đầu của flex item theo trục chính trước khi trình duyệt phân chia phần không gian còn lại.",
        "exampleText": "Một card có thể đặt flex-basis là 250px để mỗi card bắt đầu với chiều rộng 250px trước khi co giãn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex-basis: auto | content | value;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  flex-basis: 250px;\n}",
            "preview": "<style>\n\n.demo-container-safgb { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.card {\n  flex-basis: 250px;\n}\n</style>\n<div class=\"demo-container-safgb\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item card\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      },
      {
        "id": "css-flex-shorthand",
        "title": "Flex shorthand",
        "description": "flex là cách viết gọn cho flex-grow, flex-shrink và flex-basis. Thuộc tính này thường dùng để cấu hình nhanh khả năng co giãn của item.",
        "exampleText": "Một phần content có thể dùng flex: 1 để tự động chiếm toàn bộ không gian còn lại trong hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "flex: flex-grow flex-shrink flex-basis;"
          },
          {
            "title": "Ví dụ",
            "code": ".content {\n  flex: 1;\n}\n\n.card {\n  flex: 1 1 250px;\n}",
            "preview": "<style>\n\n.demo-container-dj7zv { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.content {\n  flex: 1;\n}\n\n.card {\n  flex: 1 1 250px;\n}\n</style>\n<div class=\"demo-container-dj7zv\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item content\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      },
      {
        "id": "css-align-self",
        "title": "Align self",
        "description": "align-self dùng để căn chỉnh riêng một flex item theo trục phụ, ghi đè lại align-items của phần tử cha.",
        "exampleText": "Trong một hàng card, một card riêng có thể dùng align-self để nằm ở đầu, giữa hoặc cuối theo chiều dọc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "align-self: auto | stretch | flex-start | flex-end | center | baseline;"
          },
          {
            "title": "Ví dụ",
            "code": ".featured-card {\n  align-self: center;\n}",
            "preview": "<style>\n\n.demo-container-ur6xw { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.flex-item { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.flex-item:nth-child(2) { background: #ef4444; }\n.flex-item:nth-child(3) { background: #10b981; }\n\n/* --- USER CODE --- */\n.featured-card {\n  align-self: center;\n}\n</style>\n<div class=\"demo-container-ur6xw\" style=\"display: flex; gap: 8px;\"><div class=\"flex-item\">Item 1</div><div class=\"flex-item featured-card\">Item Demo</div><div class=\"flex-item\">Item 3</div></div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Pseudo, Counter, List style",
    "cards": [
      {
        "id": "css-pseudo-class",
        "title": "Pseudo class",
        "description": "Pseudo class dùng để chọn phần tử ở một trạng thái đặc biệt, ví dụ khi hover, khi đang focus, khi được checked hoặc khi là phần tử con đầu tiên.",
        "exampleText": "Một button có thể đổi màu khi người dùng rê chuột vào.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:pseudo-class { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".button:hover {\n  background-color: #1572b6;\n}",
            "preview": "<style>\n.button:hover {\n  background-color: #1572b6;\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div id=\"1572b6\" class=\"button\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-hover",
        "title": "Hover",
        "description": "Hover là trạng thái khi người dùng đưa chuột lên phần tử. Thường dùng để tạo hiệu ứng tương tác cho link, button, card hoặc menu.",
        "exampleText": "Button trong trang tổng có thể đổi màu nền hoặc nâng lên nhẹ khi hover.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:hover { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".button:hover {\n  transform: translateY(-2px);\n}",
            "preview": "<style>\n.demo-container-764pz { background: #f8fafc; padding: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; } .button { padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: 0.2s; }\n/* --- USER CODE --- */\n.button:hover {\n  transform: translateY(-2px);\n}\n</style>\n<div class=\"demo-container-764pz\"><button class=\"button\">Tương tác với tôi!</button></div>"
          }
        ]
      },
      {
        "id": "css-active",
        "title": "Active",
        "description": "Active là trạng thái khi phần tử đang được bấm giữ. Trạng thái này thường diễn ra rất nhanh, phù hợp để tạo cảm giác phản hồi khi người dùng click.",
        "exampleText": "Một button có thể nhỏ xuống nhẹ khi người dùng bấm vào.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:active { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".button:active {\n  transform: scale(0.97);\n}",
            "preview": "<style>\n.demo-container-d4zsx { background: #f8fafc; padding: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; } .button { padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: 0.2s; }\n/* --- USER CODE --- */\n.button:active {\n  transform: scale(0.97);\n}\n</style>\n<div class=\"demo-container-d4zsx\"><button class=\"button\">Tương tác với tôi!</button></div>"
          }
        ]
      },
      {
        "id": "css-focus",
        "title": "Focus",
        "description": "Focus là trạng thái khi phần tử đang được chọn để nhập liệu hoặc thao tác bằng bàn phím. Thường gặp ở input, textarea, button hoặc link.",
        "exampleText": "Ô input email có thể đổi màu viền khi người dùng click vào để nhập dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:focus { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "input:focus {\n  border-color: #1572b6;\n  outline: 2px solid rgba(21, 114, 182, 0.2);\n}",
            "preview": "<style>\n.demo-container-w5656 { background: #f8fafc; padding: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; } .demo-target { padding: 12px; border: 2px solid #cbd5e1; border-radius: 8px; width: 250px; outline: none; transition: 0.2s; }\n/* --- USER CODE --- */\ninput:focus {\n  border-color: #1572b6;\n  outline: 2px solid rgba(21, 114, 182, 0.2);\n}\n</style>\n<div class=\"demo-container-w5656\"><input type=\"text\" class=\"demo-target\" placeholder=\"Click vào đây để focus...\"></div>"
          }
        ]
      },
      {
        "id": "css-first-child",
        "title": "First child",
        "description": "First child dùng để chọn phần tử con đầu tiên trong phần tử cha.",
        "exampleText": "Trong danh sách menu, mục đầu tiên có thể được bỏ margin-left hoặc được style khác các mục còn lại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:first-child { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".menu-item:first-child {\n  margin-left: 0;\n}",
            "preview": "<style>\n.demo-container-ks5p8 { background: #f8fafc; padding: 24px; border-radius: 8px; } ul.menu-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; } .menu-item { background: #e2e8f0; padding: 12px; border-radius: 4px; transition: 0.3s; }\n/* --- USER CODE --- */\n.menu-item:first-child {\n  margin-left: 0;\n}\n</style>\n<div class=\"demo-container-ks5p8\"><ul class=\"menu-list\"><li class=\"menu-item\">Mục (Item) 1</li><li class=\"menu-item\">Mục (Item) 2</li><li class=\"menu-item\">Mục (Item) 3</li><li class=\"menu-item\">Mục (Item) 4</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-last-child",
        "title": "Last child",
        "description": "Last child dùng để chọn phần tử con cuối cùng trong phần tử cha.",
        "exampleText": "Trong danh sách card, card cuối cùng có thể bỏ margin-bottom để không tạo khoảng cách dư.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:last-child { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".card:last-child {\n  margin-bottom: 0;\n}",
            "preview": "<style>\n.demo-container-bi5qm { background: #f8fafc; padding: 24px; border-radius: 8px; } ul.menu-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; } .card { background: #e2e8f0; padding: 12px; border-radius: 4px; transition: 0.3s; }\n/* --- USER CODE --- */\n.card:last-child {\n  margin-bottom: 0;\n}\n</style>\n<div class=\"demo-container-bi5qm\"><ul class=\"menu-list\"><li class=\"card\">Mục (Item) 1</li><li class=\"card\">Mục (Item) 2</li><li class=\"card\">Mục (Item) 3</li><li class=\"card\">Mục (Item) 4</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-nth-child",
        "title": "Nth child",
        "description": "Nth child dùng để chọn phần tử con theo vị trí cụ thể hoặc theo quy luật như chẵn, lẻ, mỗi 3 phần tử.",
        "exampleText": "Trong bảng dữ liệu, các dòng chẵn có thể có màu nền khác để dễ đọc hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector:nth-child(pattern) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "table tr:nth-child(even) {\n  background-color: #f3f4f6;\n}",
            "preview": "<style>\n.demo-container-48pdz { background: #f8fafc; padding: 24px; border-radius: 8px; } ul.menu-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; } .demo-target { background: #e2e8f0; padding: 12px; border-radius: 4px; transition: 0.3s; }\n/* --- USER CODE --- */\ntable tr:nth-child(even) {\n  background-color: #f3f4f6;\n}\n</style>\n<div class=\"demo-container-48pdz\"><ul class=\"menu-list\"><li class=\"demo-target\">Mục (Item) 1</li><li class=\"demo-target\">Mục (Item) 2</li><li class=\"demo-target\">Mục (Item) 3</li><li class=\"demo-target\">Mục (Item) 4</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-pseudo-checked",
        "title": "Checked",
        "description": "Checked dùng để chọn radio hoặc checkbox đang được chọn. Khi kết hợp với selector khác, có thể thay đổi giao diện phần tử liên quan.",
        "exampleText": "Trong todo list, khi checkbox được checked thì nội dung công việc có thể bị gạch ngang để thể hiện đã hoàn thành.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "input:checked { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".todo input:checked + span {\n  text-decoration: line-through;\n}",
            "preview": "<style>\n.demo-container-uysa8 { background: #f8fafc; padding: 24px; border-radius: 8px; } .todo-wrap { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-size: 16px; cursor: pointer; }\n/* --- USER CODE --- */\n.todo input:checked + span {\n  text-decoration: line-through;\n}\n</style>\n<div class=\"demo-container-uysa8\"><label class=\"todo-wrap\"><input type=\"checkbox\" class=\"todo\" checked> <span>Task 1 (Đã check)</span></label><label class=\"todo-wrap\"><input type=\"checkbox\" class=\"todo\"> <span>Task 2 (Chưa check)</span></label></div>"
          }
        ]
      },
      {
        "id": "css-pseudo-disabled",
        "title": "Disabled",
        "description": "Disabled dùng để chọn phần tử form đang bị vô hiệu hóa. Phần tử disabled thường không thể nhập, chọn hoặc click.",
        "exampleText": "Một nút gửi form bị disabled có thể được làm mờ để người dùng biết chưa thể bấm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element:disabled { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
            "preview": "<style>\n.demo-container-ww44o { background: #f8fafc; padding: 24px; display: flex; gap: 16px; border-radius: 8px; } .demo-target { padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; }\n/* --- USER CODE --- */\nbutton:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n</style>\n<div class=\"demo-container-ww44o\"><button class=\"demo-target\" disabled>Nút Disable</button> <input type=\"text\" class=\"demo-target\" disabled value=\"Input Disable\"></div>"
          }
        ]
      },
      {
        "id": "css-pseudo-element",
        "title": "Pseudo element",
        "description": "Pseudo element dùng để tạo hoặc style một phần cụ thể của phần tử mà không cần thêm HTML thật. Thường dùng để thêm nội dung trang trí trước hoặc sau phần tử.",
        "exampleText": "Một tiêu đề có thể có đường gạch nhỏ phía trước bằng pseudo element.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector::pseudo-element { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".group-title::before {\n  content: \"\";\n  display: inline-block;\n}",
            "preview": "<style>\n.demo-container-s8suh { background: #f8fafc; padding: 24px; border-radius: 8px; } .group-title { font-size: 18px; line-height: 1.6; color: #334155; }\n/* --- USER CODE --- */\n.group-title::before {\n  content: \"\";\n  display: inline-block;\n}\n</style>\n<div class=\"demo-container-s8suh\"><p class=\"group-title\">Ví dụ về Pseudo-element. Dòng chữ này sẽ được áp dụng hiệu ứng đặc biệt thông qua CSS mà không cần chèn thêm thẻ HTML vật lý nào.</p></div>"
          }
        ]
      },
      {
        "id": "css-before",
        "title": "Before",
        "description": "Before dùng để thêm nội dung hoặc phần trang trí vào trước nội dung thật của phần tử. Khi dùng before thường cần thuộc tính content.",
        "exampleText": "Trước mỗi tiêu đề nhóm có thể thêm một icon nhỏ hoặc dấu gạch trang trí.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector::before { content: \"\"; }"
          },
          {
            "title": "Ví dụ",
            "code": ".group-title::before {\n  content: \"◆\";\n  margin-right: 8px;\n}",
            "preview": "<style>\n.demo-container-ewzd6 { background: #f8fafc; padding: 24px; border-radius: 8px; } .group-title { font-size: 18px; line-height: 1.6; color: #334155; }\n/* --- USER CODE --- */\n.group-title::before {\n  content: \"◆\";\n  margin-right: 8px;\n}\n</style>\n<div class=\"demo-container-ewzd6\"><p class=\"group-title\">Ví dụ về Pseudo-element. Dòng chữ này sẽ được áp dụng hiệu ứng đặc biệt thông qua CSS mà không cần chèn thêm thẻ HTML vật lý nào.</p></div>"
          }
        ]
      },
      {
        "id": "css-after",
        "title": "After",
        "description": "After dùng để thêm nội dung hoặc phần trang trí vào sau nội dung thật của phần tử. Giống before, after cũng thường cần thuộc tính content.",
        "exampleText": "Sau tiêu đề có thể thêm một đường kẻ ngang để tạo điểm nhấn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector::after { content: \"\"; }"
          },
          {
            "title": "Ví dụ",
            "code": ".group-title::after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #1572b6;\n}",
            "preview": "<style>\n.demo-container-03mgt { background: #f8fafc; padding: 24px; border-radius: 8px; } .group-title { font-size: 18px; line-height: 1.6; color: #334155; }\n/* --- USER CODE --- */\n.group-title::after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #1572b6;\n}\n</style>\n<div class=\"demo-container-03mgt\"><p class=\"group-title\">Ví dụ về Pseudo-element. Dòng chữ này sẽ được áp dụng hiệu ứng đặc biệt thông qua CSS mà không cần chèn thêm thẻ HTML vật lý nào.</p></div>"
          }
        ]
      },
      {
        "id": "css-first-letter",
        "title": "First letter",
        "description": "First letter dùng để style chữ cái đầu tiên của đoạn văn hoặc phần tử văn bản.",
        "exampleText": "Chữ cái đầu tiên của một đoạn giới thiệu có thể được phóng to để tạo kiểu giống bài báo.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector::first-letter { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".intro::first-letter {\n  font-size: 3rem;\n  font-weight: 700;\n}",
            "preview": "<style>\n.demo-container-h3c69 { background: #f8fafc; padding: 24px; border-radius: 8px; } .intro { font-size: 18px; line-height: 1.6; color: #334155; }\n/* --- USER CODE --- */\n.intro::first-letter {\n  font-size: 3rem;\n  font-weight: 700;\n}\n</style>\n<div class=\"demo-container-h3c69\"><p class=\"intro\">Ví dụ về Pseudo-element. Dòng chữ này sẽ được áp dụng hiệu ứng đặc biệt thông qua CSS mà không cần chèn thêm thẻ HTML vật lý nào.</p></div>"
          }
        ]
      },
      {
        "id": "css-first-line",
        "title": "First line",
        "description": "First line dùng để style dòng đầu tiên của đoạn văn. Dòng đầu tiên có thể thay đổi tùy theo chiều rộng màn hình.",
        "exampleText": "Dòng đầu tiên của đoạn mô tả có thể được in đậm hoặc đổi màu để nổi bật hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "selector::first-line { ... }"
          },
          {
            "title": "Ví dụ",
            "code": ".description::first-line {\n  color: #1572b6;\n  font-weight: 700;\n}",
            "preview": "<style>\n.demo-container-le4jh { background: #f8fafc; padding: 24px; border-radius: 8px; } .description { font-size: 18px; line-height: 1.6; color: #334155; }\n/* --- USER CODE --- */\n.description::first-line {\n  color: #1572b6;\n  font-weight: 700;\n}\n</style>\n<div class=\"demo-container-le4jh\"><p class=\"description\">Ví dụ về Pseudo-element. Dòng chữ này sẽ được áp dụng hiệu ứng đặc biệt thông qua CSS mà không cần chèn thêm thẻ HTML vật lý nào.</p></div>"
          }
        ]
      },
      {
        "id": "css-counter",
        "title": "Counter",
        "description": "Counter trong CSS dùng để tự động đánh số nội dung. Nó phù hợp khi muốn tạo danh sách số thứ tự tùy chỉnh mà không cần viết số trực tiếp trong HTML.",
        "exampleText": "Các mục kiến thức trong một nhóm có thể tự động đánh số 1, 2, 3 bằng CSS counter.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "counter-reset: counter-name;\ncounter-increment: counter-name;\ncontent: counter(counter-name);"
          },
          {
            "title": "Ví dụ",
            "code": ".knowledge-group {\n  counter-reset: lesson;\n}\n\n.knowledge-card::before {\n  counter-increment: lesson;\n  content: counter(lesson) \". \";\n}",
            "preview": "<style>\n.demo-container-r5tu5 { background: #f8fafc; padding: 24px; border-radius: 8px; } .knowledge-group { margin-bottom: 16px; }\n/* --- USER CODE --- */\n.knowledge-group {\n  counter-reset: lesson;\n}\n\n.knowledge-card::before {\n  counter-increment: lesson;\n  content: counter(lesson) \". \";\n}\n</style>\n<div class=\"demo-container-r5tu5\"><div class=\"knowledge-group\">Tiêu đề chính</div><h3 class=\"sub\">Tiêu đề phụ A</h3><h3 class=\"sub\">Tiêu đề phụ B</h3><div class=\"knowledge-group\">Tiêu đề chính 2</div><h3 class=\"sub\">Tiêu đề phụ C</h3></div>"
          }
        ]
      },
      {
        "id": "css-counter-reset",
        "title": "Counter reset",
        "description": "Counter reset dùng để khởi tạo hoặc đặt lại bộ đếm. Thường đặt ở phần tử cha để bắt đầu đếm từ đầu trong một khu vực.",
        "exampleText": "Mỗi nhóm kiến thức có thể reset bộ đếm để các mục trong nhóm bắt đầu lại từ số 1.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "counter-reset: counter-name initial-value;"
          },
          {
            "title": "Ví dụ",
            "code": ".knowledge-group {\n  counter-reset: lesson;\n}",
            "preview": "<style>\n.demo-container-izq57 { background: #f8fafc; padding: 24px; border-radius: 8px; } .knowledge-group { margin-bottom: 16px; }\n/* --- USER CODE --- */\n.knowledge-group {\n  counter-reset: lesson;\n}\n</style>\n<div class=\"demo-container-izq57\"><div class=\"knowledge-group\">Tiêu đề chính</div><h3 class=\"sub\">Tiêu đề phụ A</h3><h3 class=\"sub\">Tiêu đề phụ B</h3><div class=\"knowledge-group\">Tiêu đề chính 2</div><h3 class=\"sub\">Tiêu đề phụ C</h3></div>"
          }
        ]
      },
      {
        "id": "css-counter-increment",
        "title": "Counter increment",
        "description": "Counter increment dùng để tăng giá trị bộ đếm mỗi khi gặp phần tử được chọn.",
        "exampleText": "Mỗi article kiến thức có thể tăng bộ đếm lên 1 để tự tạo số thứ tự cho từng bài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "counter-increment: counter-name amount;"
          },
          {
            "title": "Ví dụ",
            "code": ".knowledge-card {\n  counter-increment: lesson;\n}",
            "preview": "<style>\n.demo-container-agm1w { background: #f8fafc; padding: 24px; border-radius: 8px; } .knowledge-card { margin-bottom: 16px; }\n/* --- USER CODE --- */\n.knowledge-card {\n  counter-increment: lesson;\n}\n</style>\n<div class=\"demo-container-agm1w\"><div class=\"knowledge-card\">Tiêu đề chính</div><h3 class=\"sub\">Tiêu đề phụ A</h3><h3 class=\"sub\">Tiêu đề phụ B</h3><div class=\"knowledge-card\">Tiêu đề chính 2</div><h3 class=\"sub\">Tiêu đề phụ C</h3></div>"
          }
        ]
      },
      {
        "id": "css-list-style",
        "title": "List style",
        "description": "List style dùng để định dạng ký hiệu đầu dòng của danh sách. Nó thường dùng với ul hoặc ol.",
        "exampleText": "Danh sách kiến thức có thể dùng kiểu chấm tròn, số, chữ cái hoặc bỏ ký hiệu mặc định.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "list-style: type position image;"
          },
          {
            "title": "Ví dụ",
            "code": ".lesson-list {\n  list-style: decimal inside;\n}",
            "preview": "<style>\n.demo-container-5fb8v { background: #f8fafc; padding: 24px; border-radius: 8px; } .lesson-list { padding-left: 24px; }\n/* --- USER CODE --- */\n.lesson-list {\n  list-style: decimal inside;\n}\n</style>\n<div class=\"demo-container-5fb8v\"><ul class=\"lesson-list\"><li>Quả Táo</li><li>Quả Cam</li><li>Quả Nho</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-list-style-type",
        "title": "List style type",
        "description": "List style type dùng để chọn kiểu ký hiệu của danh sách, ví dụ disc, circle, square, decimal, lower-alpha hoặc upper-roman.",
        "exampleText": "Danh sách bài học có thể dùng số thứ tự, còn danh sách ghi chú có thể dùng chấm tròn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "list-style-type: value;"
          },
          {
            "title": "Ví dụ",
            "code": ".lesson-list {\n  list-style-type: decimal;\n}\n\n.note-list {\n  list-style-type: disc;\n}",
            "preview": "<style>\n.demo-container-ysvpo { background: #f8fafc; padding: 24px; border-radius: 8px; } .lesson-list { padding-left: 24px; }\n/* --- USER CODE --- */\n.lesson-list {\n  list-style-type: decimal;\n}\n\n.note-list {\n  list-style-type: disc;\n}\n</style>\n<div class=\"demo-container-ysvpo\"><ul class=\"lesson-list\"><li>Quả Táo</li><li>Quả Cam</li><li>Quả Nho</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-list-style-position",
        "title": "List style position",
        "description": "List style position dùng để quy định vị trí ký hiệu danh sách nằm bên trong hay bên ngoài vùng nội dung.",
        "exampleText": "Một danh sách trong card nhỏ có thể dùng list-style-position inside để ký hiệu nằm gọn trong card.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "list-style-position: inside | outside;"
          },
          {
            "title": "Ví dụ",
            "code": ".compact-list {\n  list-style-position: inside;\n}",
            "preview": "<style>\n.demo-container-a9m2z { background: #f8fafc; padding: 24px; border-radius: 8px; } .compact-list { padding-left: 24px; }\n/* --- USER CODE --- */\n.compact-list {\n  list-style-position: inside;\n}\n</style>\n<div class=\"demo-container-a9m2z\"><ul class=\"compact-list\"><li>Quả Táo</li><li>Quả Cam</li><li>Quả Nho</li></ul></div>"
          }
        ]
      },
      {
        "id": "css-list-style-image",
        "title": "List style image",
        "description": "List style image dùng để thay ký hiệu mặc định của danh sách bằng hình ảnh.",
        "exampleText": "Danh sách tính năng có thể dùng icon nhỏ làm bullet thay cho dấu chấm mặc định.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "list-style-image: url(\"image-path\");"
          },
          {
            "title": "Ví dụ",
            "code": ".feature-list {\n  list-style-image: url(\"/images/check-icon.svg\");\n}",
            "preview": "<style>\n.demo-container-u15n8 { background: #f8fafc; padding: 24px; border-radius: 8px; } .feature-list { padding-left: 24px; }\n/* --- USER CODE --- */\n.feature-list {\n  list-style-image: url(\"/images/check-icon.svg\");\n}\n</style>\n<div class=\"demo-container-u15n8\"><ul class=\"feature-list\"><li>Quả Táo</li><li>Quả Cam</li><li>Quả Nho</li></ul></div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 8",
    "title": "Transform, Transition, Animation",
    "cards": [
      {
        "id": "css-transform",
        "title": "Transform",
        "description": "Transform dùng để biến đổi hình dạng, vị trí hoặc kích thước của phần tử mà không làm thay đổi layout gốc của trang.",
        "exampleText": "Một card có thể được nâng lên nhẹ, phóng to hoặc xoay khi người dùng hover.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: function(value);"
          },
          {
            "title": "Ví dụ",
            "code": ".card:hover {\n  transform: translateY(-6px) scale(1.02);\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-tqak5 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.card:hover {\n  transform: translateY(-6px) scale(1.02);\n}\n</style>\n<div class=\"demo-container-tqak5\"><div class=\"box-anim card\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-translate",
        "title": "Translate",
        "description": "Translate dùng để di chuyển phần tử theo trục X và trục Y. Phần tử chỉ thay đổi vị trí hiển thị, không đẩy các phần tử khác xung quanh.",
        "exampleText": "Một button có thể được đẩy lên một chút khi hover để tạo cảm giác nổi lên.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: translate(x, y);"
          },
          {
            "title": "Ví dụ",
            "code": ".button:hover {\n  transform: translate(0, -3px);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.button:hover {\n  transform: translate(0, -3px);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"button\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-translate-x",
        "title": "TranslateX",
        "description": "TranslateX dùng để di chuyển phần tử theo chiều ngang. Giá trị dương đẩy phần tử sang phải, giá trị âm đẩy phần tử sang trái.",
        "exampleText": "Một icon mũi tên có thể trượt sang phải nhẹ khi hover vào link.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: translateX(value);"
          },
          {
            "title": "Ví dụ",
            "code": ".link:hover .arrow {\n  transform: translateX(6px);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.link:hover .arrow {\n  transform: translateX(6px);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"link arrow\">\n  Nội dung demo\n</div>\n<div style=\"margin-top: 16px; display: flex; gap: 8px;\">\n  <div class=\"link\">.link</div>\n  <div class=\"arrow\">.arrow</div>\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-translate-y",
        "title": "TranslateY",
        "description": "TranslateY dùng để di chuyển phần tử theo chiều dọc. Giá trị dương đẩy phần tử xuống dưới, giá trị âm đẩy phần tử lên trên.",
        "exampleText": "Card kiến thức có thể dùng translateY âm khi hover để tạo hiệu ứng nâng card.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: translateY(value);"
          },
          {
            "title": "Ví dụ",
            "code": ".card:hover {\n  transform: translateY(-8px);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.card:hover {\n  transform: translateY(-8px);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"card\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-scale",
        "title": "Scale",
        "description": "Scale dùng để phóng to hoặc thu nhỏ phần tử. Giá trị lớn hơn 1 là phóng to, nhỏ hơn 1 là thu nhỏ.",
        "exampleText": "Ảnh sản phẩm có thể phóng to nhẹ khi người dùng đưa chuột vào.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: scale(x, y);"
          },
          {
            "title": "Ví dụ",
            "code": ".product-image:hover {\n  transform: scale(1.08);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.product-image:hover {\n  transform: scale(1.08);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"product-image\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-scale-x-y",
        "title": "ScaleX / ScaleY",
        "description": "ScaleX dùng để phóng to hoặc thu nhỏ theo chiều ngang. ScaleY dùng để phóng to hoặc thu nhỏ theo chiều dọc.",
        "exampleText": "Một thanh gạch dưới link có thể dùng scaleX để mở rộng từ trái sang phải khi hover.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: scaleX(value);\ntransform: scaleY(value);"
          },
          {
            "title": "Ví dụ",
            "code": ".link::after {\n  transform: scaleX(0);\n}\n\n.link:hover::after {\n  transform: scaleX(1);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.link::after {\n  transform: scaleX(0);\n}\n\n.link:hover::after {\n  transform: scaleX(1);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"link\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-rotate",
        "title": "Rotate",
        "description": "Rotate dùng để xoay phần tử theo một góc nhất định. Đơn vị thường dùng là deg.",
        "exampleText": "Một icon mũi tên có thể xoay 180 độ khi mở dropdown menu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: rotate(angle);"
          },
          {
            "title": "Ví dụ",
            "code": ".dropdown[aria-expanded=\"true\"] .arrow {\n  transform: rotate(180deg);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.dropdown[aria-expanded=\"true\"] .arrow {\n  transform: rotate(180deg);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"dropdown arrow\">\n  Nội dung demo\n</div>\n<div style=\"margin-top: 16px; display: flex; gap: 8px;\">\n  <div class=\"dropdown\">.dropdown</div>\n  <div class=\"arrow\">.arrow</div>\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-skew",
        "title": "Skew",
        "description": "Skew dùng để làm nghiêng phần tử theo trục X hoặc trục Y. Thuộc tính này tạo cảm giác phần tử bị kéo xiên.",
        "exampleText": "Một banner hoặc nhãn giảm giá có thể dùng skew để tạo kiểu nghiêng nổi bật.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform: skew(x-angle, y-angle);"
          },
          {
            "title": "Ví dụ",
            "code": ".sale-label {\n  transform: skew(-12deg);\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n.sale-label {\n  transform: skew(-12deg);\n}\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"sale-label\">\n  Nội dung demo\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-transform-origin",
        "title": "Transform origin",
        "description": "Transform origin dùng để thay đổi điểm gốc khi transform. Mặc định phần tử biến đổi từ tâm, nhưng có thể đổi sang trái, phải, trên, dưới hoặc góc cụ thể.",
        "exampleText": "Một menu dropdown có thể scale từ phía trên xuống bằng cách đặt transform origin ở top.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transform-origin: x-position y-position;"
          },
          {
            "title": "Ví dụ",
            "code": ".dropdown-menu {\n  transform-origin: top center;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-kwjub { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.dropdown-menu {\n  transform-origin: top center;\n}\n</style>\n<div class=\"demo-container-kwjub\"><div class=\"box-anim dropdown-menu\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-transition",
        "title": "Transition",
        "description": "Transition dùng để tạo hiệu ứng chuyển đổi mượt khi một thuộc tính CSS thay đổi. Nếu không có transition, sự thay đổi sẽ diễn ra ngay lập tức.",
        "exampleText": "Button có thể đổi màu nền mượt hơn khi hover thay vì đổi màu đột ngột.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transition: property duration timing-function delay;"
          },
          {
            "title": "Ví dụ",
            "code": ".button {\n  transition: background-color 0.25s ease, transform 0.25s ease;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-6v9ky { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.button {\n  transition: background-color 0.25s ease, transform 0.25s ease;\n}\n</style>\n<div class=\"demo-container-6v9ky\"><div class=\"box-anim button\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-transition-property",
        "title": "Transition property",
        "description": "Transition property xác định thuộc tính CSS nào sẽ được áp dụng hiệu ứng chuyển đổi.",
        "exampleText": "Một button có thể chỉ transition màu nền và transform, thay vì áp dụng cho tất cả thuộc tính.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transition-property: property-name;"
          },
          {
            "title": "Ví dụ",
            "code": ".button {\n  transition-property: background-color, transform;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-uxpk1 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.button {\n  transition-property: background-color, transform;\n}\n</style>\n<div class=\"demo-container-uxpk1\"><div class=\"box-anim button\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-transition-duration",
        "title": "Transition duration",
        "description": "Transition duration xác định thời gian hiệu ứng diễn ra. Thời gian có thể tính bằng giây hoặc mili giây.",
        "exampleText": "Một card có thể hover trong 0.3 giây để tạo cảm giác mượt vừa đủ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transition-duration: time;"
          },
          {
            "title": "Ví dụ",
            "code": ".card {\n  transition-duration: 0.3s;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-zncdi { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.card {\n  transition-duration: 0.3s;\n}\n</style>\n<div class=\"demo-container-zncdi\"><div class=\"box-anim card\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-transition-timing-function",
        "title": "Transition timing function",
        "description": "Transition timing function xác định tốc độ chuyển động trong quá trình transition, ví dụ đều, nhanh dần, chậm dần hoặc tùy chỉnh bằng cubic-bezier.",
        "exampleText": "Một menu có thể dùng ease để mở ra tự nhiên hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(...);"
          },
          {
            "title": "Ví dụ",
            "code": ".menu {\n  transition-timing-function: ease;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-3taci { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.menu {\n  transition-timing-function: ease;\n}\n</style>\n<div class=\"demo-container-3taci\"><div class=\"box-anim menu\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-transition-delay",
        "title": "Transition delay",
        "description": "Transition delay xác định thời gian chờ trước khi hiệu ứng transition bắt đầu.",
        "exampleText": "Một tooltip có thể chờ một chút sau khi hover rồi mới xuất hiện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "transition-delay: time;"
          },
          {
            "title": "Ví dụ",
            "code": ".tooltip {\n  transition-delay: 0.2s;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-7zasb { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n/* --- USER CODE --- */\n.tooltip {\n  transition-delay: 0.2s;\n}\n</style>\n<div class=\"demo-container-7zasb\"><div class=\"box-anim tooltip\">Hover me!</div></div>"
          }
        ]
      },
      {
        "id": "css-animation",
        "title": "Animation",
        "description": "Animation dùng để tạo hiệu ứng chuyển động phức tạp hơn transition. Animation có thể tự chạy, lặp lại nhiều lần và không nhất thiết phải chờ người dùng hover hoặc click.",
        "exampleText": "Một icon loading có thể xoay liên tục bằng animation.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation: name duration timing-function delay iteration-count direction fill-mode;"
          },
          {
            "title": "Ví dụ",
            "code": ".loader {\n  animation: spin 1s linear infinite;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-dpeb2 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.loader { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.loader {\n  animation: spin 1s linear infinite;\n}\n</style>\n<div class=\"demo-container-dpeb2\"><div class=\"circle-anim loader\"></div></div>"
          }
        ]
      },
      {
        "id": "css-keyframes",
        "title": "Keyframes",
        "description": "Keyframes dùng để định nghĩa các mốc thay đổi trong animation. Có thể dùng từ 0% đến 100% hoặc dùng from và to.",
        "exampleText": "Một hiệu ứng loading có thể bắt đầu ở góc xoay 0 độ và kết thúc ở 360 độ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "@keyframes name {\n  from { ... }\n  to { ... }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
            "preview": "<style>\n\n/* Base Styles for Animations & Transitions */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.loader { width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #3b82f6; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: spin 2s linear infinite; }\n.ball { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; display: inline-block; margin: 8px; /* default */ animation: bounce 1s infinite; }\n.fade-item, .fade-in { padding: 8px 16px; background: #10b981; color: white; border-radius: 4px; display: inline-block; margin: 8px; /* default */ animation: fade 2s forwards; }\n.box { width: 60px; height: 60px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; font-size: 12px; margin: 8px; /* default */ animation: spin 3s infinite; }\n\n.button { padding: 8px 16px; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer; display: inline-block; transition: 0.3s; }\n.button:hover { background: #1d4ed8; transform: scale(1.05); }\n.card { width: 100px; height: 100px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }\n.card:hover { background: #e2e8f0; transform: translateY(-5px); }\n.menu { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-block; transition: 0.3s; }\n.menu:hover { background: #cbd5e1; color: #0f172a; }\n.tooltip { padding: 8px; background: #1e293b; color: white; border-radius: 4px; opacity: 1; cursor: pointer; display: inline-block; transition: 0.3s; }\n.tooltip:hover { opacity: 0.5; }\n\n.product-image { width: 80px; height: 80px; background: #fca5a5; border-radius: 8px; transition: 0.3s; display: inline-block; }\n.product-image:hover { transform: scale(1.1); }\n.link { color: #3b82f6; position: relative; cursor: pointer; display: inline-block; padding: 4px; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; transform-origin: left; transform: scaleX(0); transition: 0.3s; }\n.link:hover::after { transform: scaleX(1); }\n.dropdown { padding: 8px 16px; background: #f1f5f9; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border-radius: 4px; transition: 0.3s; }\n.arrow { display: inline-block; transition: 0.3s; }\n.dropdown:hover .arrow { transform: rotate(180deg); }\n.sale-label { background: #ef4444; color: white; padding: 4px 12px; font-weight: bold; display: inline-block; transition: 0.3s; }\n.dropdown-menu { width: 120px; height: 80px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform-origin: top center; transition: 0.3s; }\n.dropdown-menu:hover { transform: scaleY(0.5); }\n\n/* --- USER CODE --- */\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.box { animation: spin 2s linear infinite; }\n</style>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <div class=\"box\">Hộp nội dung (box)</div>\n</div>"
          }
        ]
      },
      {
        "id": "css-animation-name",
        "title": "Animation name",
        "description": "Animation name là tên của animation cần chạy. Tên này phải khớp với tên được khai báo trong keyframes.",
        "exampleText": "Nếu keyframes tên là spin, phần tử muốn xoay cần dùng animation-name là spin.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-name: keyframes-name;"
          },
          {
            "title": "Ví dụ",
            "code": ".loader {\n  animation-name: spin;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-3k94e { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.loader { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.loader {\n  animation-name: spin;\n}\n</style>\n<div class=\"demo-container-3k94e\"><div class=\"circle-anim loader\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-duration",
        "title": "Animation duration",
        "description": "Animation duration xác định thời gian hoàn thành một vòng animation.",
        "exampleText": "Một icon loading có thể mất 1 giây để xoay hết một vòng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-duration: time;"
          },
          {
            "title": "Ví dụ",
            "code": ".loader {\n  animation-duration: 1s;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-f2abl { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.loader { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.loader {\n  animation-duration: 1s;\n}\n</style>\n<div class=\"demo-container-f2abl\"><div class=\"circle-anim loader\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-timing-function",
        "title": "Animation timing function",
        "description": "Animation timing function xác định tốc độ chuyển động trong animation.",
        "exampleText": "Hiệu ứng loading thường dùng linear để tốc độ xoay đều liên tục.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(...);"
          },
          {
            "title": "Ví dụ",
            "code": ".loader {\n  animation-timing-function: linear;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-pcoun { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.loader { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.loader {\n  animation-timing-function: linear;\n}\n</style>\n<div class=\"demo-container-pcoun\"><div class=\"circle-anim loader\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-delay",
        "title": "Animation delay",
        "description": "Animation delay xác định thời gian chờ trước khi animation bắt đầu chạy.",
        "exampleText": "Một phần tử có thể xuất hiện sau 0.5 giây để tạo hiệu ứng lần lượt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-delay: time;"
          },
          {
            "title": "Ví dụ",
            "code": ".fade-item {\n  animation-delay: 0.5s;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-h35z4 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.fade-item { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.fade-item {\n  animation-delay: 0.5s;\n}\n</style>\n<div class=\"demo-container-h35z4\"><div class=\"circle-anim fade-item\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-iteration-count",
        "title": "Animation iteration count",
        "description": "Animation iteration count xác định số lần animation lặp lại. Có thể là một số cụ thể hoặc infinite để lặp vô hạn.",
        "exampleText": "Icon loading thường dùng infinite để xoay liên tục.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-iteration-count: number | infinite;"
          },
          {
            "title": "Ví dụ",
            "code": ".loader {\n  animation-iteration-count: infinite;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-pj243 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.loader { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.loader {\n  animation-iteration-count: infinite;\n}\n</style>\n<div class=\"demo-container-pj243\"><div class=\"circle-anim loader\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-direction",
        "title": "Animation direction",
        "description": "Animation direction xác định chiều chạy của animation, ví dụ chạy bình thường, chạy ngược, hoặc chạy qua lại.",
        "exampleText": "Một quả bóng có thể dùng alternate để chuyển động lên xuống qua lại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-direction: normal | reverse | alternate | alternate-reverse;"
          },
          {
            "title": "Ví dụ",
            "code": ".ball {\n  animation-direction: alternate;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-4816l { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.ball { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.ball {\n  animation-direction: alternate;\n}\n</style>\n<div class=\"demo-container-4816l\"><div class=\"circle-anim ball\"></div></div>"
          }
        ]
      },
      {
        "id": "css-animation-fill-mode",
        "title": "Animation fill mode",
        "description": "Animation fill mode xác định trạng thái của phần tử trước khi animation bắt đầu hoặc sau khi animation kết thúc.",
        "exampleText": "Một phần tử fade in có thể giữ trạng thái cuối cùng sau khi animation chạy xong.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "animation-fill-mode: none | forwards | backwards | both;"
          },
          {
            "title": "Ví dụ",
            "code": ".fade-in {\n  animation-fill-mode: forwards;\n}",
            "preview": "<style>\n\n/* Animation Keyframes Defaults */\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n@keyframes fade { from { opacity: 0; } to { opacity: 1; } }\n\n.demo-container-knsp9 { background: #f8fafc; padding: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 16px; min-height: 150px; }\n.box-anim { width: 80px; height: 80px; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; cursor: pointer; }\n.circle-anim { width: 80px; height: 80px; background: #ef4444; border-radius: 50%; border: 4px solid #fecaca; border-top-color: #991b1b; }\n.pill-anim { padding: 12px 24px; background: #10b981; color: white; border-radius: 30px; cursor: pointer; font-weight: bold; }\n\n.fade-in { animation: spin 2s linear infinite; }\n/* --- USER CODE --- */\n.fade-in {\n  animation-fill-mode: forwards;\n}\n</style>\n<div class=\"demo-container-knsp9\"><div class=\"circle-anim fade-in\"></div></div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "CSS Grid",
    "cards": [
      {
        "id": "css-grid",
        "title": "Display grid",
        "description": "CSS Grid Layout là hệ thống bố cục 2 chiều mạnh mẽ nhất trong CSS (gồm cả hàng và cột). Khác với Flexbox (thường dùng cho 1 chiều), Grid giúp chia layout trang web phức tạp một cách dễ dàng.",
        "exampleText": "Để kích hoạt Grid, chỉ cần đặt display: grid cho phần tử cha (container).",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "display: grid;"
          },
          {
            "title": "Ví dụ",
            "code": ".grid-container {\n  display: grid;\n}",
            "preview": "<style>\n\n.demo-container-kdc9k { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.grid-item { background: #8b5cf6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.grid-item:nth-child(2) { background: #f59e0b; }\n.grid-item:nth-child(3) { background: #ec4899; }\n.grid-item:nth-child(4) { background: #14b8a6; }\n.grid-item:nth-child(5) { background: #ef4444; }\n\n/* --- USER CODE --- */\n.grid-container {\n  display: grid;\n}\n</style>\n<div class=\"demo-container-kdc9k grid-container\" style=\"\"><div class=\"grid-item\">1</div><div class=\"grid-item\">2</div><div class=\"grid-item\">3</div><div class=\"grid-item\">4</div><div class=\"grid-item\">5</div></div>"
          }
        ]
      },
      {
        "id": "css-grid-template",
        "title": "Columns & Rows",
        "description": "grid-template-columns và grid-template-rows dùng để định nghĩa số lượng và kích thước của các cột/hàng trong Grid. Có thể dùng pixel, %, auto, hoặc đơn vị fr (fraction - phần tỷ lệ khoảng trống).",
        "exampleText": "repeat(3, 1fr) tương đương với 1fr 1fr 1fr (chia đều 3 cột bằng nhau).",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "grid-template-columns: 1fr 2fr 1fr;\ngrid-template-rows: 100px auto;"
          },
          {
            "title": "Ví dụ",
            "code": ".grid-3-cols {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
            "preview": "<style>\n\n.demo-container-q3neu { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.grid-item { background: #8b5cf6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.grid-item:nth-child(2) { background: #f59e0b; }\n.grid-item:nth-child(3) { background: #ec4899; }\n.grid-item:nth-child(4) { background: #14b8a6; }\n.grid-item:nth-child(5) { background: #ef4444; }\n\n/* --- USER CODE --- */\n.grid-3-cols {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n</style>\n<div class=\"demo-container-q3neu grid-3-cols\" style=\"\"><div class=\"grid-item\">1</div><div class=\"grid-item\">2</div><div class=\"grid-item\">3</div><div class=\"grid-item\">4</div><div class=\"grid-item\">5</div></div>"
          }
        ]
      },
      {
        "id": "css-grid-gap",
        "title": "Gap (Khoảng cách)",
        "description": "Thuộc tính gap (hoặc grid-gap) dùng để tạo khoảng cách giữa các hàng và các cột trong Grid mà không cần dùng margin.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "gap: row-gap column-gap;"
          },
          {
            "title": "Ví dụ",
            "code": ".grid-gap {\n  display: grid;\n  gap: 20px 10px; /* 20px dọc, 10px ngang */\n}",
            "preview": "<style>\n\n.demo-container-2bjwz { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.grid-item { background: #8b5cf6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.grid-item:nth-child(2) { background: #f59e0b; }\n.grid-item:nth-child(3) { background: #ec4899; }\n.grid-item:nth-child(4) { background: #14b8a6; }\n.grid-item:nth-child(5) { background: #ef4444; }\n\n/* --- USER CODE --- */\n.grid-gap {\n  display: grid;\n  gap: 20px 10px; /* 20px dọc, 10px ngang */\n}\n</style>\n<div class=\"demo-container-2bjwz grid-gap\" style=\"\"><div class=\"grid-item\">1</div><div class=\"grid-item\">2</div><div class=\"grid-item\">3</div><div class=\"grid-item\">4</div><div class=\"grid-item\">5</div></div>"
          }
        ]
      },
      {
        "id": "css-grid-span",
        "title": "Column/Row Span",
        "description": "grid-column và grid-row cho phép một item chiếm nhiều cột hoặc nhiều hàng hơn bình thường. Bạn có thể chỉ định điểm bắt đầu và điểm kết thúc, hoặc dùng cú pháp span.",
        "exampleText": "grid-column: 1 / 3 nghĩa là bắt đầu từ đường kẻ dọc số 1 đến đường số 3 (chiếm 2 cột). grid-column: span 2 cũng cho kết quả tương tự.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "grid-column: start / end;\ngrid-row: span 2;"
          },
          {
            "title": "Ví dụ",
            "code": ".header {\n  grid-column: 1 / -1; /* Chiếm toàn bộ chiều ngang */\n}\n.sidebar {\n  grid-row: span 2; /* Chiếm 2 hàng dọc */\n}",
            "preview": "<style>\n\n.demo-container-q0xic { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 150px; }\n.grid-item { background: #8b5cf6; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }\n.grid-item:nth-child(2) { background: #f59e0b; }\n.grid-item:nth-child(3) { background: #ec4899; }\n.grid-item:nth-child(4) { background: #14b8a6; }\n.grid-item:nth-child(5) { background: #ef4444; }\n\n/* --- USER CODE --- */\n.header {\n  grid-column: 1 / -1; /* Chiếm toàn bộ chiều ngang */\n}\n.sidebar {\n  grid-row: span 2; /* Chiếm 2 hàng dọc */\n}\n</style>\n<div class=\"demo-container-q0xic\" style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;\"><div class=\"grid-item header\">Item Demo</div><div class=\"grid-item\">B</div><div class=\"grid-item\">C</div><div class=\"grid-item\">D</div></div>"
          }
        ]
      }
    ]
  }
];
