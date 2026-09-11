import type { KnowledgeGroup } from "../types/knowledge";

export const jsGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "JS cơ bản, biến & output",
    "cards": [
      {
        "id": "js-introduction",
        "title": "JavaScript là gì",
        "description": "JavaScript là ngôn ngữ lập trình dùng để xử lý logic và tạo tương tác cho website. HTML tạo cấu trúc, CSS tạo giao diện, còn JavaScript giúp website có hành động.",
        "exampleText": "Khi người dùng click vào button, JavaScript có thể hiển thị thông báo, mở menu, kiểm tra form hoặc thay đổi nội dung trên trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "statement;"
          },
          {
            "title": "Ví dụ",
            "code": "const button = document.querySelector(\"button\");\n\nbutton?.addEventListener(\"click\", () => {\n  alert(\"Xin chào JavaScript!\");\n});"
          }
        ]
      },
      {
        "id": "js-embedding",
        "title": "Cách nhúng JavaScript",
        "description": "JavaScript có thể viết trực tiếp trong file HTML bằng thẻ script, hoặc viết trong file riêng có đuôi .js rồi liên kết vào HTML.",
        "exampleText": "Một website nhỏ có thể viết JavaScript trực tiếp trong HTML. Với dự án lớn hơn, nên tách JavaScript ra file riêng như main.js để dễ quản lý.",
        "codeBlocks": [
          {
            "title": "Viết trong HTML",
            "code": "<script>\n  console.log(\"JavaScript trong HTML\");\n</script>"
          },
          {
            "title": "Liên kết file riêng",
            "code": "<script src=\"./main.js\"></script>"
          }
        ]
      },
      {
        "id": "js-console-log",
        "title": "Console log",
        "description": "Console log dùng để in dữ liệu ra tab Console trong trình duyệt. Đây là cách thường dùng để kiểm tra giá trị, debug lỗi hoặc xem chương trình đang chạy như thế nào.",
        "exampleText": "Khi học biến, có thể in giá trị của biến ra console để kiểm tra biến đó đang lưu dữ liệu gì.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "console.log(value);"
          },
          {
            "title": "Ví dụ",
            "code": "const courseName = \"JavaScript cơ bản\";\nconsole.log(courseName);"
          }
        ]
      },
      {
        "id": "js-document-write",
        "title": "Document write",
        "description": "Document write dùng để ghi nội dung trực tiếp ra trang web. Cách này giúp hiển thị dữ liệu lên trình duyệt, nhưng trong thực tế hiện đại thường ít dùng hơn so với thao tác DOM. Nếu gọi sau khi trang đã tải xong, nó có thể ghi đè toàn bộ tài liệu hiện tại.",
        "exampleText": "Có thể dùng document write để in dòng chữ “Xin chào JavaScript” trực tiếp ra màn hình trình duyệt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.write(content);"
          },
          {
            "title": "Ví dụ",
            "code": "document.write(\"<h1>Xin chào JavaScript</h1>\");"
          }
        ]
      },
      {
        "id": "js-variables",
        "title": "Biến trong JavaScript",
        "description": "Biến dùng để lưu trữ dữ liệu trong chương trình. Dữ liệu trong biến có thể là chuỗi, số, boolean, mảng, object hoặc nhiều kiểu dữ liệu khác.",
        "exampleText": "Có thể tạo biến lưu tên khóa học, giá khóa học, tên người dùng hoặc trạng thái đăng nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "let variableName = value;\nconst constantName = value;"
          },
          {
            "title": "Ví dụ",
            "code": "const courseName = \"JavaScript\";\nlet coursePrice = 500000;\nlet isLoggedIn = false;"
          }
        ]
      },
      {
        "id": "js-var",
        "title": "Var",
        "description": "Var là từ khóa dùng để khai báo biến trong JavaScript. Đây là cách khai báo biến cũ, có phạm vi function và thường xuất hiện trong các bài học JavaScript cơ bản. Trong code hiện đại nên ưu tiên let hoặc const.",
        "exampleText": "Có thể dùng var để khai báo biến lưu tên người dùng, email, mật khẩu hoặc tên khóa học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "var variableName = value;"
          },
          {
            "title": "Ví dụ",
            "code": "var userName = \"Tú\";\nvar courseName = \"JavaScript cơ bản\";"
          }
        ]
      },
      {
        "id": "js-variable-naming",
        "title": "Quy tắc đặt tên biến",
        "description": "Tên biến nên đặt rõ nghĩa và thường viết theo kiểu camelCase. Tên biến không được bắt đầu bằng số, không dùng dấu gạch ngang, không chứa khoảng trắng và không trùng với từ khóa đặc biệt của JavaScript.",
        "exampleText": "Tên biến tốt: courseName, userEmail, totalPrice. Tên biến không tốt: a, x, 1user, user-name.",
        "codeBlocks": [
          {
            "title": "Tên hợp lệ",
            "code": "const courseName = \"JavaScript\";\nconst userEmail = \"user@example.com\";\nconst totalPrice = 500000;"
          },
          {
            "title": "Tên không hợp lệ",
            "code": "// const 1user = \"Tú\";\n// const user-name = \"Tú\";\n// const class = \"JavaScript\";"
          }
        ]
      },
      {
        "id": "js-assign-value",
        "title": "Gán giá trị cho biến",
        "description": "Gán giá trị cho biến là đưa dữ liệu vào biến để sử dụng trong chương trình. Có thể khai báo biến trước rồi gán giá trị sau, hoặc vừa khai báo vừa gán giá trị.",
        "exampleText": "Có thể tạo biến courseName và gán giá trị là “JavaScript cơ bản”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "let variableName;\nvariableName = value;"
          },
          {
            "title": "Ví dụ",
            "code": "let courseName;\ncourseName = \"JavaScript cơ bản\";\n\nlet coursePrice = 500000;"
          }
        ]
      },
      {
        "id": "js-multiple-variables",
        "title": "Khai báo nhiều biến",
        "description": "Có thể khai báo nhiều biến trong cùng một khu vực code. Các biến nên được đặt tên rõ ràng để dễ hiểu dữ liệu đang lưu là gì.",
        "exampleText": "Trong form đăng ký, có thể khai báo các biến như tên người dùng, email, mật khẩu và số điện thoại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "let firstVariable = value,\n    secondVariable = value;"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = \"Tú\",\n  userEmail = \"tu@example.com\",\n  phoneNumber = \"0123456789\";"
          }
        ]
      },
      {
        "id": "js-string-concatenation",
        "title": "Nối chuỗi",
        "description": "Nối chuỗi là ghép nhiều đoạn text hoặc biến lại thành một chuỗi hoàn chỉnh. Cách này thường dùng khi cần tạo câu thông báo có dữ liệu động.",
        "exampleText": "Có thể ghép tên khóa học và tên trung tâm để tạo câu: “Khóa học JavaScript tại F8”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "stringA + stringB;"
          },
          {
            "title": "Ví dụ",
            "code": "const courseName = \"JavaScript\";\nconst centerName = \"F8\";\nconst message = \"Khóa học \" + courseName + \" tại \" + centerName;\n\nconsole.log(message);"
          }
        ]
      },
      {
        "id": "js-template-string",
        "title": "Template string",
        "description": "Template string là cách viết chuỗi hiện đại bằng dấu backtick, giúp chèn biến hoặc biểu thức vào chuỗi bằng cú pháp ${...} dễ đọc hơn so với nối chuỗi bằng dấu cộng.",
        "exampleText": "Thay vì ghép nhiều chuỗi bằng dấu cộng, có thể dùng template string để tạo câu chào người dùng như: “Xin chào Tú, chúc bạn học tốt JavaScript”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "`Text ${expression}`"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = \"Tú\";\nconst courseName = \"JavaScript\";\nconst message = `Xin chào ${userName}, chúc bạn học tốt ${courseName}`;\n\nconsole.log(message);"
          }
        ]
      },
      {
        "id": "js-comments",
        "title": "Comment trong JavaScript",
        "description": "Comment dùng để ghi chú trong code hoặc tạm thời vô hiệu hóa một đoạn code. JavaScript có comment một dòng và comment nhiều dòng.",
        "exampleText": "Có thể dùng comment để ghi chú phần khai báo biến, phần xử lý form hoặc phần kiểm tra dữ liệu người dùng.",
        "codeBlocks": [
          {
            "title": "Comment một dòng",
            "code": "// Khai báo tên khóa học\nconst courseName = \"JavaScript\";"
          },
          {
            "title": "Comment nhiều dòng",
            "code": "/*\n  Kiểm tra dữ liệu người dùng\n  trước khi gửi form\n*/"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Toán tử & biểu thức",
    "cards": [
      {
        "id": "js-expression",
        "title": "Biểu thức",
        "description": "Biểu thức là sự kết hợp giữa toán tử và toán hạng để tạo ra một giá trị kết quả. Trong JavaScript, biểu thức có thể là phép tính, phép so sánh, phép gán hoặc biểu thức điều kiện.",
        "exampleText": "Một biểu thức có thể là phép tính tổng điểm, phép kiểm tra tuổi có đủ điều kiện hay không, hoặc phép chọn giá trị dựa trên điều kiện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "operand operator operand"
          },
          {
            "title": "Ví dụ",
            "code": "const total = price * quantity;\nconst canRegister = age >= 18;"
          }
        ]
      },
      {
        "id": "js-arithmetic-operators",
        "title": "Toán tử số học",
        "description": "Toán tử số học dùng để thực hiện các phép tính như cộng, trừ, nhân, chia, chia lấy dư, lũy thừa, tăng hoặc giảm giá trị. Trong repo, nhóm operator có ghi các toán tử số học như +, -, *, /, %, **, ++, --.",
        "exampleText": "Có thể dùng toán tử số học để tính tổng tiền đơn hàng, tính điểm trung bình hoặc tăng số lượng sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "+  -  *  /  %  **  ++  --"
          },
          {
            "title": "Ví dụ",
            "code": "const total = 10 + 5;\nconst difference = 10 - 5;\nconst product = 10 * 5;\nconst quotient = 10 / 5;"
          }
        ]
      },
      {
        "id": "js-addition",
        "title": "Toán tử cộng",
        "description": "Toán tử cộng dùng để cộng hai số. Nếu một trong hai vế là chuỗi, toán tử cộng có thể trở thành nối chuỗi.",
        "exampleText": "Có thể cộng giá sản phẩm với phí vận chuyển để ra tổng tiền thanh toán.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left + right"
          },
          {
            "title": "Ví dụ",
            "code": "const productPrice = 300000;\nconst shippingFee = 30000;\nconst total = productPrice + shippingFee;"
          }
        ]
      },
      {
        "id": "js-subtraction",
        "title": "Toán tử trừ",
        "description": "Toán tử trừ dùng để lấy hiệu của hai giá trị số. Nếu dữ liệu là chuỗi số, JavaScript có thể tự ép kiểu trong một số trường hợp.",
        "exampleText": "Có thể lấy số tiền ban đầu trừ đi tiền giảm giá để ra số tiền cần trả.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left - right"
          },
          {
            "title": "Ví dụ",
            "code": "const originalPrice = 500000;\nconst discount = 100000;\nconst finalPrice = originalPrice - discount;"
          }
        ]
      },
      {
        "id": "js-multiplication",
        "title": "Toán tử nhân",
        "description": "Toán tử nhân dùng để nhân hai giá trị số.",
        "exampleText": "Có thể lấy đơn giá nhân với số lượng để tính thành tiền của một sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left * right"
          },
          {
            "title": "Ví dụ",
            "code": "const unitPrice = 150000;\nconst quantity = 2;\nconst total = unitPrice * quantity;"
          }
        ]
      },
      {
        "id": "js-division",
        "title": "Toán tử chia",
        "description": "Toán tử chia dùng để chia giá trị này cho giá trị khác.",
        "exampleText": "Có thể lấy tổng điểm chia cho số môn học để tính điểm trung bình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left / right"
          },
          {
            "title": "Ví dụ",
            "code": "const totalScore = 24;\nconst subjectCount = 3;\nconst average = totalScore / subjectCount;"
          }
        ]
      },
      {
        "id": "js-remainder",
        "title": "Toán tử chia lấy dư",
        "description": "Toán tử chia lấy dư trả về phần dư sau khi chia. Toán tử này thường dùng để kiểm tra số chẵn, số lẻ hoặc xử lý chu kỳ.",
        "exampleText": "Có thể kiểm tra một số có chia hết cho 2 hay không để biết số đó là chẵn hay lẻ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left % right"
          },
          {
            "title": "Ví dụ",
            "code": "const number = 7;\nconst isEven = number % 2 === 0;"
          }
        ]
      },
      {
        "id": "js-exponentiation",
        "title": "Toán tử lũy thừa",
        "description": "Toán tử lũy thừa dùng để tính một số mũ của một số khác.",
        "exampleText": "Có thể tính bình phương hoặc lập phương của một số bằng toán tử lũy thừa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "base ** exponent"
          },
          {
            "title": "Ví dụ",
            "code": "const square = 5 ** 2;\nconst cube = 3 ** 3;"
          }
        ]
      },
      {
        "id": "js-increment-decrement",
        "title": "Tăng giảm một đơn vị",
        "description": "Toán tử tăng ++ dùng để tăng giá trị lên 1. Toán tử giảm -- dùng để giảm giá trị đi 1. Repo có ví dụ count++, ++count, count--, --count.",
        "exampleText": "Có thể tăng số lượng sản phẩm trong giỏ hàng mỗi khi người dùng bấm nút cộng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "value++;\nvalue--;\n++value;\n--value;"
          },
          {
            "title": "Ví dụ",
            "code": "let quantity = 1;\nquantity++;\nquantity--;"
          }
        ]
      },
      {
        "id": "js-prefix-postfix",
        "title": "Hậu tố và tiền tố",
        "description": "Hậu tố là viết toán tử sau biến, ví dụ tăng sau. Tiền tố là viết toán tử trước biến, ví dụ tăng trước. Điểm khác nhau là thời điểm lấy giá trị: hậu tố lấy giá trị cũ trước rồi mới tăng, tiền tố tăng trước rồi mới lấy giá trị mới.",
        "exampleText": "Khi vừa cần lấy giá trị hiện tại vừa cần tăng biến đếm, cần chú ý dùng hậu tố hay tiền tố để tránh sai kết quả.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "value++; // hậu tố\n++value; // tiền tố"
          },
          {
            "title": "Ví dụ",
            "code": "let count = 1;\nconst oldValue = count++; // 1, sau đó count = 2\nconst newValue = ++count; // count = 3, lấy 3"
          }
        ]
      },
      {
        "id": "js-number-conversion",
        "title": "Ép kiểu số",
        "description": "Ép kiểu số là chuyển dữ liệu sang kiểu number trước khi tính toán. Trong repo có ví dụ chuỗi số \"10.5\" có thể được ép kiểu bằng parseInt() hoặc dấu + trước biến.",
        "exampleText": "Dữ liệu người dùng nhập từ input thường là chuỗi, nên khi tính tổng tiền cần ép sang số trước.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Number(value);\nparseInt(value, 10);\nparseFloat(value);\n+value;"
          },
          {
            "title": "Ví dụ",
            "code": "const inputValue = \"10.5\";\nconst integer = parseInt(inputValue, 10);\nconst decimal = Number(inputValue);\nconst shortForm = +inputValue;"
          }
        ]
      },
      {
        "id": "js-comparison-operators",
        "title": "Toán tử so sánh",
        "description": "Toán tử so sánh dùng để so sánh hai giá trị và trả về kết quả boolean là true hoặc false. Các toán tử thường gặp gồm lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng, bằng, khác. Repo có ghi nhóm toán tử so sánh trả về boolean.",
        "exampleText": "Có thể kiểm tra tuổi người dùng có lớn hơn hoặc bằng 18 hay không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": ">  <  >=  <=  ==  !=  ===  !=="
          },
          {
            "title": "Ví dụ",
            "code": "const age = 20;\nconst isAdult = age >= 18;\nconsole.log(isAdult); // true"
          }
        ]
      },
      {
        "id": "js-loose-equality",
        "title": "So sánh bằng",
        "description": "So sánh bằng dùng để kiểm tra hai giá trị có bằng nhau hay không. Với ==, JavaScript có thể tự ép kiểu trước khi so sánh.",
        "exampleText": "Chuỗi \"10\" và số 10 có thể được xem là bằng nhau khi dùng so sánh lỏng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left == right;\nleft != right;"
          },
          {
            "title": "Ví dụ",
            "code": "console.log(\"10\" == 10); // true\nconsole.log(\"10\" != 10); // false"
          }
        ]
      },
      {
        "id": "js-strict-equality",
        "title": "So sánh tuyệt đối",
        "description": "So sánh tuyệt đối dùng === để so sánh cả giá trị và kiểu dữ liệu. Đây là cách so sánh nên ưu tiên dùng vì rõ ràng và ít gây lỗi hơn. Trong repo có ví dụ a === 10 và a === '10'.",
        "exampleText": "Số 10 và chuỗi \"10\" không bằng nhau khi dùng so sánh tuyệt đối vì khác kiểu dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left === right;\nleft !== right;"
          },
          {
            "title": "Ví dụ",
            "code": "console.log(10 === 10); // true\nconsole.log(\"10\" === 10); // false"
          }
        ]
      },
      {
        "id": "js-logical-operators",
        "title": "Toán tử logic",
        "description": "Toán tử logic dùng để kết hợp nhiều điều kiện. Các toán tử chính là AND &&, OR ||, NOT !. Trong repo có ghi && là and, || là or, ! là not.",
        "exampleText": "Có thể kiểm tra một số có nằm trong khoảng từ 5 đến 10 hay không bằng cách kết hợp hai điều kiện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "conditionA && conditionB;\nconditionA || conditionB;\n!condition;"
          },
          {
            "title": "Ví dụ",
            "code": "const value = 7;\nconst inRange = value >= 5 && value <= 10;\nconst outside = value < 5 || value > 10;\nconst notLoggedIn = !isLoggedIn;"
          }
        ]
      },
      {
        "id": "js-assignment-operators",
        "title": "Toán tử gán",
        "description": "Toán tử gán dùng để gán giá trị cho biến. Ngoài dấu =, còn có các dạng gán kết hợp như cộng rồi gán, trừ rồi gán, nhân rồi gán, chia rồi gán. Repo có ví dụ +=, *=, /=, -=, %=, **=.",
        "exampleText": "Có thể cộng thêm 10 vào biến điểm hiện tại bằng toán tử gán kết hợp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "=  +=  -=  *=  /=  %=  **="
          },
          {
            "title": "Ví dụ",
            "code": "let score = 10;\nscore += 5;\nscore *= 2;\nconsole.log(score); // 30"
          }
        ]
      },
      {
        "id": "js-ternary-operator",
        "title": "Toán tử 3 ngôi",
        "description": "Toán tử 3 ngôi dùng để viết điều kiện ngắn gọn theo dạng: nếu điều kiện đúng thì lấy giá trị này, sai thì lấy giá trị khác. Repo có ghi dạng dieukien ? giatridung : giatrisai.",
        "exampleText": "Có thể kiểm tra điểm số để hiển thị “Đạt” nếu điểm lớn hơn hoặc bằng 5, ngược lại hiển thị “Không đạt”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "condition ? valueIfTrue : valueIfFalse"
          },
          {
            "title": "Ví dụ",
            "code": "const score = 7;\nconst result = score >= 5 ? \"Đạt\" : \"Không đạt\";"
          }
        ]
      },
      {
        "id": "js-nullish-coalescing",
        "title": "Nullish operator",
        "description": "Nullish operator ?? dùng để kiểm tra giá trị null hoặc undefined. Nếu vế trái khác null và undefined thì lấy vế trái, ngược lại lấy vế phải. Repo có ghi nullish dùng để check undefined và null.",
        "exampleText": "Nếu tên người dùng chưa có dữ liệu, có thể hiển thị giá trị mặc định như “Khách”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "value ?? fallbackValue"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = null;\nconst displayName = userName ?? \"Khách\";"
          }
        ]
      },
      {
        "id": "js-truthy-falsy",
        "title": "Truthy và Falsy",
        "description": "Truthy và Falsy là cách JavaScript tự chuyển một giá trị về boolean trong ngữ cảnh cần điều kiện. Các giá trị falsy thường gặp gồm 0, chuỗi rỗng, null, undefined, false, NaN; các trường hợp còn lại thường là truthy. Repo cũng ghi danh sách các giá trị falsy này.",
        "exampleText": "Nếu biến tên người dùng là chuỗi rỗng, khi đưa vào điều kiện thì JavaScript xem nó là false.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Boolean(value);"
          },
          {
            "title": "Ví dụ",
            "code": "console.log(Boolean(0)); // false\nconsole.log(Boolean(\"\")); // false\nconsole.log(Boolean(\"JavaScript\")); // true\nconsole.log(Boolean([])); // true"
          }
        ]
      },
      {
        "id": "js-and-truthy-falsy",
        "title": "Toán tử AND với Truthy/Falsy",
        "description": "Toán tử && không chỉ dùng để kiểm tra đúng sai, mà còn có thể trả về một trong hai giá trị. Nếu vế trái là truthy thì lấy vế phải, nếu vế trái là falsy thì lấy vế trái. Repo có ghi cách && hoạt động với Truthy/Falsy.",
        "exampleText": "Có thể chỉ hiển thị một nội dung khi điều kiện phía trước là đúng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left && right"
          },
          {
            "title": "Ví dụ",
            "code": "const isLoggedIn = true;\nconst message = isLoggedIn && \"Chào mừng bạn quay lại\";"
          }
        ]
      },
      {
        "id": "js-or-truthy-falsy",
        "title": "Toán tử OR với Truthy/Falsy",
        "description": "Toán tử || cũng có thể trả về giá trị. Nếu vế trái là falsy thì lấy vế phải, ngược lại lấy vế trái. Repo có ví dụ a || \"F8\".",
        "exampleText": "Có thể dùng OR để đặt giá trị mặc định khi dữ liệu ban đầu bị rỗng hoặc không hợp lệ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "left || right"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = \"\";\nconst displayName = userName || \"F8\";"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Câu điều kiện",
    "cards": [
      {
        "id": "js-conditional-statements",
        "title": "Câu điều kiện",
        "description": "Câu điều kiện dùng để kiểm tra một điều kiện đúng hay sai, từ đó quyết định chương trình sẽ chạy đoạn code nào.",
        "exampleText": "Nếu người dùng đã đăng nhập thì hiển thị trang cá nhân, nếu chưa đăng nhập thì chuyển đến trang đăng nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (condition) {\n  // Chạy khi điều kiện đúng\n} else {\n  // Chạy khi điều kiện sai\n}"
          },
          {
            "title": "Ví dụ",
            "code": "if (isLoggedIn) {\n  showProfile();\n} else {\n  redirectToLogin();\n}"
          }
        ]
      },
      {
        "id": "js-if",
        "title": "If",
        "description": "if dùng để kiểm tra một điều kiện. Nếu điều kiện đúng, đoạn code bên trong if sẽ được chạy. Nếu điều kiện sai, đoạn code đó bị bỏ qua.",
        "exampleText": "Nếu số lượng sản phẩm lớn hơn 0 thì cho phép thêm sản phẩm vào giỏ hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (condition) {\n  statement;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "const quantity = 2;\n\nif (quantity > 0) {\n  addToCart();\n}"
          }
        ]
      },
      {
        "id": "js-if-else",
        "title": "If else",
        "description": "if else dùng khi có hai trường hợp: đúng và sai. Nếu điều kiện đúng thì chạy phần if, nếu sai thì chạy phần else.",
        "exampleText": "Nếu mật khẩu nhập đúng thì cho đăng nhập, nếu sai thì hiển thị thông báo lỗi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (condition) {\n  statementIfTrue;\n} else {\n  statementIfFalse;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "if (inputPassword === savedPassword) {\n  login();\n} else {\n  showError(\"Mật khẩu không đúng\");\n}"
          }
        ]
      },
      {
        "id": "js-else-if",
        "title": "Else if",
        "description": "else if dùng khi có nhiều điều kiện cần kiểm tra. Chương trình sẽ kiểm tra từ trên xuống dưới, gặp điều kiện đúng đầu tiên thì chạy đoạn code tương ứng.",
        "exampleText": "Nếu điểm từ 8 trở lên thì xếp loại giỏi, từ 6.5 trở lên thì khá, từ 5 trở lên thì trung bình, còn lại là yếu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (conditionA) {\n  ...\n} else if (conditionB) {\n  ...\n} else {\n  ...\n}"
          },
          {
            "title": "Ví dụ",
            "code": "if (score >= 8) {\n  rank = \"Giỏi\";\n} else if (score >= 6.5) {\n  rank = \"Khá\";\n} else if (score >= 5) {\n  rank = \"Trung bình\";\n} else {\n  rank = \"Yếu\";\n}"
          }
        ]
      },
      {
        "id": "js-nested-if",
        "title": "If lồng nhau",
        "description": "If lồng nhau là đặt một câu lệnh if bên trong một câu lệnh if khác. Cách này dùng khi một điều kiện phụ chỉ cần kiểm tra sau khi điều kiện chính đã đúng.",
        "exampleText": "Nếu người dùng đã đăng nhập, tiếp tục kiểm tra người đó có quyền admin hay không để hiển thị trang quản trị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (conditionA) {\n  if (conditionB) {\n    statement;\n  }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "if (isLoggedIn) {\n  if (userRole === \"admin\") {\n    showAdminPage();\n  }\n}"
          }
        ]
      },
      {
        "id": "js-condition-comparison",
        "title": "Điều kiện với toán tử so sánh",
        "description": "Câu điều kiện thường dùng với toán tử so sánh như lớn hơn, nhỏ hơn, bằng, khác, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng. Kết quả của phép so sánh là true hoặc false.",
        "exampleText": "Kiểm tra tuổi người dùng có lớn hơn hoặc bằng 18 hay không để cho phép truy cập nội dung giới hạn độ tuổi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (leftValue comparisonOperator rightValue) {\n  statement;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "const age = 20;\n\nif (age >= 18) {\n  allowAccess();\n}"
          }
        ]
      },
      {
        "id": "js-condition-logical",
        "title": "Điều kiện với toán tử logic",
        "description": "Toán tử logic dùng để kết hợp nhiều điều kiện. && yêu cầu tất cả điều kiện đều đúng, || chỉ cần một điều kiện đúng, ! dùng để phủ định điều kiện.",
        "exampleText": "Một form chỉ được gửi khi email không rỗng và mật khẩu có đủ độ dài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (conditionA && conditionB) { ... }\nif (conditionA || conditionB) { ... }\nif (!condition) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "const canSubmit = email !== \"\" && password.length >= 8;\n\nif (canSubmit) {\n  submitForm();\n}"
          }
        ]
      },
      {
        "id": "js-net-salary-exercise",
        "title": "Bài toán tính lương sau thuế",
        "description": "Trong repo có bài tập tính lương thực nhận của nhân viên. Lương thực nhận bằng tổng lương trừ đi thuế. Mức thuế được chia theo từng khoảng lương: dưới 5 triệu, từ 5 triệu đến 15 triệu, và trên 15 triệu.",
        "exampleText": "Nếu lương dưới 5 triệu thì áp thuế thấp. Nếu lương nằm trong khoảng trung bình thì áp thuế cao hơn. Nếu lương trên 15 triệu thì áp mức thuế cao nhất.",
        "codeBlocks": [
          {
            "title": "Công thức",
            "code": "Lương thực nhận = Lương tổng - (Lương tổng × Thuế suất)"
          },
          {
            "title": "Ví dụ",
            "code": "const grossSalary = 18000000;\nlet taxRate;\n\nif (grossSalary < 5000000) {\n  taxRate = 0.05;\n} else if (grossSalary <= 15000000) {\n  taxRate = 0.1;\n} else {\n  taxRate = 0.15;\n}\n\nconst netSalary = grossSalary - grossSalary * taxRate;\nconsole.log(netSalary);"
          }
        ]
      },
      {
        "id": "js-switch-case",
        "title": "Switch case",
        "description": "switch case dùng để xử lý nhiều nhánh khi cần so sánh bằng một giá trị cụ thể. Switch sử dụng phép so sánh nghiêm ngặt và thường phù hợp khi có nhiều giá trị rời rạc.",
        "exampleText": "Nếu hành động là thêm thì hiển thị “Thêm”, nếu là sửa thì hiển thị “Sửa”, nếu là xóa thì hiển thị “Xóa”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "switch (value) {\n  case expectedValue:\n    statement;\n    break;\n  default:\n    statement;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "switch (action) {\n  case \"create\":\n    console.log(\"Thêm\");\n    break;\n  case \"edit\":\n    console.log(\"Sửa\");\n    break;\n  case \"delete\":\n    console.log(\"Xóa\");\n    break;\n}"
          }
        ]
      },
      {
        "id": "js-switch-case-clause",
        "title": "Case",
        "description": "case là từng trường hợp trong switch. Khi giá trị đem đi kiểm tra trùng với một case, đoạn code trong case đó sẽ được chạy.",
        "exampleText": "Trong chức năng quản lý dữ liệu, case \"create\" có thể dùng cho hành động thêm mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "case expectedValue:\n  statement;\n  break;"
          },
          {
            "title": "Ví dụ",
            "code": "switch (action) {\n  case \"create\":\n    createItem();\n    break;\n}"
          }
        ]
      },
      {
        "id": "js-switch-break",
        "title": "Break",
        "description": "break dùng để kết thúc một case. Nếu không có break, chương trình tiếp tục chạy các case bên dưới cho đến khi gặp break hoặc kết thúc switch.",
        "exampleText": "Sau khi xử lý xong hành động thêm dữ liệu, cần dùng break để không chạy tiếp sang hành động sửa hoặc xóa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "break;"
          },
          {
            "title": "Ví dụ",
            "code": "case \"create\":\n  createItem();\n  break;"
          }
        ]
      },
      {
        "id": "js-switch-default",
        "title": "Default",
        "description": "default là trường hợp mặc định trong switch case. Nếu không có case nào khớp, chương trình sẽ chạy phần default.",
        "exampleText": "Nếu action không phải thêm, sửa hay xóa, chương trình có thể hiển thị danh sách mặc định.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "default:\n  statement;"
          },
          {
            "title": "Ví dụ",
            "code": "switch (action) {\n  case \"create\":\n    createItem();\n    break;\n  default:\n    showList();\n}"
          }
        ]
      },
      {
        "id": "js-grouped-cases",
        "title": "Gộp nhiều case",
        "description": "Có thể gộp nhiều case có cùng kết quả xử lý. Cách này giúp tránh lặp code khi nhiều giá trị khác nhau nhưng cùng đại diện cho một hành động. Trong repo, các action như create, insert, add cùng được xử lý là “Thêm”.",
        "exampleText": "Các từ “create”, “insert”, “add” đều có thể hiểu là thêm mới dữ liệu nên có thể gộp chung một nhóm xử lý.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "case valueA:\ncase valueB:\ncase valueC:\n  sharedStatement;\n  break;"
          },
          {
            "title": "Ví dụ",
            "code": "switch (action) {\n  case \"create\":\n  case \"insert\":\n  case \"add\":\n    console.log(\"Thêm\");\n    break;\n}"
          }
        ]
      },
      {
        "id": "js-switch-vs-if-else",
        "title": "So sánh switch case và if else",
        "description": "if else linh hoạt hơn vì có thể kiểm tra nhiều dạng điều kiện như lớn hơn, nhỏ hơn, khoảng giá trị hoặc biểu thức phức tạp. switch case phù hợp hơn khi cần so sánh bằng một giá trị với nhiều trường hợp cụ thể.",
        "exampleText": "Tính thuế theo khoảng lương nên dùng if else. Xử lý action như thêm, sửa, xóa theo chuỗi cố định thì có thể dùng switch case.",
        "codeBlocks": [
          {
            "title": "If else",
            "code": "if (salary < 5000000) {\n  taxRate = 0.05;\n} else if (salary <= 15000000) {\n  taxRate = 0.1;\n}"
          },
          {
            "title": "Switch case",
            "code": "switch (action) {\n  case \"create\":\n    createItem();\n    break;\n  case \"edit\":\n    editItem();\n    break;\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Function",
    "cards": [
      {
        "id": "js-function",
        "title": "Function",
        "description": "Function là khối code được đặt tên hoặc được lưu vào biến để có thể tái sử dụng nhiều lần. Function giúp code gọn hơn, dễ đọc hơn và tránh lặp lại cùng một logic.",
        "exampleText": "Một function có thể dùng để tính tổng hai số, kiểm tra email hợp lệ, hiển thị thông báo hoặc xử lý dữ liệu form.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName(parameters) {\n  // Logic xử lý\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function sum(a, b) {\n  return a + b;\n}"
          }
        ]
      },
      {
        "id": "js-function-declaration",
        "title": "Khai báo function",
        "description": "Khai báo function là tạo ra một hàm bằng từ khóa function, sau đó đặt tên hàm và viết phần xử lý bên trong.",
        "exampleText": "Có thể khai báo một function tên showMessage để hiển thị thông báo chào mừng người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName() {\n  statements;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function showMessage() {\n  console.log(\"Chào mừng bạn đến với JavaScript!\");\n}"
          }
        ]
      },
      {
        "id": "js-call-function",
        "title": "Gọi function",
        "description": "Sau khi khai báo function, cần gọi function thì phần code bên trong mới được chạy. Gọi function bằng cách viết tên function kèm dấu ngoặc tròn.",
        "exampleText": "Sau khi tạo function hiển thị thông báo, có thể gọi function đó khi trang vừa tải hoặc khi người dùng click vào button.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "functionName(arguments);"
          },
          {
            "title": "Ví dụ",
            "code": "function showMessage() {\n  console.log(\"Xin chào!\");\n}\n\nshowMessage();"
          }
        ]
      },
      {
        "id": "js-function-parameters",
        "title": "Tham số",
        "description": "Tham số là biến được khai báo trong phần ngoặc tròn khi tạo function. Tham số giúp function nhận dữ liệu từ bên ngoài để xử lý linh hoạt hơn.",
        "exampleText": "Một function tính tổng có thể có hai tham số là số thứ nhất và số thứ hai.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName(parameterA, parameterB) {\n  ...\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function sum(firstNumber, secondNumber) {\n  return firstNumber + secondNumber;\n}"
          }
        ]
      },
      {
        "id": "js-function-arguments",
        "title": "Đối số",
        "description": "Đối số là giá trị thật được truyền vào function khi gọi function. Đối số sẽ được gán cho tham số tương ứng.",
        "exampleText": "Khi gọi function tính tổng với hai số 5 và 10, thì 5 và 10 là đối số.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "functionName(argumentA, argumentB);"
          },
          {
            "title": "Ví dụ",
            "code": "function sum(a, b) {\n  return a + b;\n}\n\nconst result = sum(5, 10);"
          }
        ]
      },
      {
        "id": "js-return",
        "title": "Return",
        "description": "Return dùng để trả kết quả từ function ra bên ngoài. Khi gặp return, function sẽ kết thúc và trả về giá trị được chỉ định; code phía sau return trong cùng nhánh sẽ không chạy.",
        "exampleText": "Function tính tổng hai số có thể return kết quả để dùng tiếp trong phép tính khác hoặc hiển thị ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName() {\n  return value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function sum(a, b) {\n  return a + b;\n}\n\nconst total = sum(5, 10);"
          }
        ]
      },
      {
        "id": "js-function-without-return",
        "title": "Function không return",
        "description": "Function không return thường chỉ thực hiện một hành động, ví dụ in ra console, đổi giao diện hoặc hiển thị thông báo. Nếu không có return rõ ràng, function mặc định trả về undefined.",
        "exampleText": "Một function chỉ dùng để hiển thị câu “Xin chào JavaScript” ra console thì không cần return.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName() {\n  performAction();\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function showGreeting() {\n  console.log(\"Xin chào JavaScript\");\n}\n\nconst result = showGreeting();\nconsole.log(result); // undefined"
          }
        ]
      },
      {
        "id": "js-function-with-return",
        "title": "Function có return",
        "description": "Function có return thường dùng khi cần lấy kết quả xử lý để dùng ở nơi khác. Đây là dạng function rất quan trọng khi tính toán hoặc xử lý dữ liệu.",
        "exampleText": "Một function tính thành tiền có thể return kết quả bằng đơn giá nhân với số lượng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName() {\n  return result;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function calculateTotal(unitPrice, quantity) {\n  return unitPrice * quantity;\n}\n\nconst total = calculateTotal(150000, 2);"
          }
        ]
      },
      {
        "id": "js-function-local-variable",
        "title": "Biến trong function",
        "description": "Biến được khai báo bên trong function chỉ nên dùng cho logic của function đó. Biến này giúp function xử lý dữ liệu nội bộ mà không ảnh hưởng đến phần code bên ngoài.",
        "exampleText": "Trong function tính tổng tiền, có thể tạo biến total để lưu kết quả tạm thời trước khi return.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName() {\n  const localVariable = value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function calculateTotal(unitPrice, quantity) {\n  const total = unitPrice * quantity;\n  return total;\n}"
          }
        ]
      },
      {
        "id": "js-variable-scope",
        "title": "Phạm vi biến",
        "description": "Phạm vi biến quyết định biến có thể được truy cập ở đâu. Biến khai báo bên trong function thường chỉ dùng được bên trong function. Biến khai báo bên ngoài function có thể được nhiều function sử dụng.",
        "exampleText": "Biến courseName khai báo bên ngoài có thể dùng ở nhiều function, còn biến message khai báo bên trong một function chỉ dùng trong function đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const globalVariable = value;\n\nfunction example() {\n  const localVariable = value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "const courseName = \"JavaScript\";\n\nfunction showCourse() {\n  const message = `Khóa học ${courseName}`;\n  console.log(message);\n}\n\n// console.log(message); // ReferenceError"
          }
        ]
      },
      {
        "id": "js-function-expression",
        "title": "Function expression",
        "description": "Function expression là cách tạo function rồi gán function đó vào một biến. Function expression thường được dùng khi muốn truyền function như dữ liệu hoặc dùng function dưới dạng callback.",
        "exampleText": "Có thể tạo một biến sum và gán cho nó một function dùng để tính tổng hai số.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const functionName = function (parameters) {\n  statements;\n};"
          },
          {
            "title": "Ví dụ",
            "code": "const sum = function (a, b) {\n  return a + b;\n};\n\nconsole.log(sum(5, 10));"
          }
        ]
      },
      {
        "id": "js-anonymous-function",
        "title": "Anonymous function",
        "description": "Anonymous function là function không có tên. Nó thường được dùng trong function expression hoặc truyền trực tiếp vào một function khác.",
        "exampleText": "Khi xử lý sự kiện click cho button, có thể truyền một anonymous function để chạy khi người dùng bấm nút.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function (parameters) {\n  statements;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "button.addEventListener(\"click\", function () {\n  console.log(\"Button đã được bấm\");\n});"
          }
        ]
      },
      {
        "id": "js-arrow-function",
        "title": "Arrow function",
        "description": "Arrow function là cú pháp viết function ngắn gọn hơn trong ES6. Arrow function thường dùng với callback, array method hoặc các function ngắn. Nó không có this và arguments riêng như function truyền thống.",
        "exampleText": "Một function tính tổng hai số có thể viết ngắn gọn bằng arrow function thay vì cú pháp function truyền thống.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const functionName = (parameters) => expression;"
          },
          {
            "title": "Ví dụ",
            "code": "const sum = (a, b) => a + b;\n\nconsole.log(sum(5, 10));"
          }
        ]
      },
      {
        "id": "js-callback-function",
        "title": "Callback function",
        "description": "Callback function là function được truyền vào một function khác dưới dạng đối số. Function nhận callback có thể gọi callback đó vào thời điểm phù hợp.",
        "exampleText": "Khi duyệt mảng, có thể truyền callback để xử lý từng phần tử trong mảng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function higherOrderFunction(callback) {\n  callback();\n}"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\n\ncourses.forEach(function (course) {\n  console.log(course);\n});"
          }
        ]
      },
      {
        "id": "js-nested-function",
        "title": "Function lồng nhau",
        "description": "Function lồng nhau là function được khai báo bên trong một function khác. Function bên trong có thể truy cập dữ liệu của function bên ngoài nhờ lexical scope.",
        "exampleText": "Một function xử lý đơn hàng có thể chứa function nhỏ bên trong để tính phí vận chuyển hoặc tính giảm giá.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function outerFunction() {\n  function innerFunction() {\n    ...\n  }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function calculateOrder(price) {\n  function calculateShipping() {\n    return price >= 500000 ? 0 : 30000;\n  }\n\n  return price + calculateShipping();\n}"
          }
        ]
      },
      {
        "id": "js-recursion",
        "title": "Đệ quy",
        "description": "Đệ quy là khi một function tự gọi lại chính nó. Đệ quy thường dùng để giải quyết bài toán có cấu trúc lặp lại, nhưng cần có điều kiện dừng để tránh chạy vô hạn.",
        "exampleText": "Có thể dùng đệ quy để tính giai thừa, duyệt cây thư mục hoặc xử lý dữ liệu nhiều cấp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function recursiveFunction(value) {\n  if (stopCondition) return result;\n  return recursiveFunction(nextValue);\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function factorial(number) {\n  if (number <= 1) return 1;\n  return number * factorial(number - 1);\n}\n\nconsole.log(factorial(5)); // 120"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "String & Number",
    "cards": [
      {
        "id": "js-string",
        "title": "String",
        "description": "String là kiểu dữ liệu chuỗi, dùng để lưu văn bản trong JavaScript. Chuỗi có thể là tên người dùng, email, tiêu đề bài viết, mô tả sản phẩm hoặc nội dung thông báo.",
        "exampleText": "Một biến có thể lưu chuỗi “JavaScript cơ bản” để hiển thị tên khóa học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const variableName = \"text\";"
          },
          {
            "title": "Ví dụ",
            "code": "const courseName = \"JavaScript cơ bản\";\nconsole.log(typeof courseName); // string"
          }
        ]
      },
      {
        "id": "js-string-declaration",
        "title": "Khai báo string",
        "description": "String có thể được khai báo bằng dấu nháy đơn, dấu nháy kép hoặc dấu backtick. Dấu backtick thường dùng khi cần template string.",
        "exampleText": "Có thể khai báo chuỗi tên người dùng, tên sản phẩm hoặc nội dung thông báo bằng một trong ba cách trên.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const singleQuote = 'text';\nconst doubleQuote = \"text\";\nconst backtick = `text`;"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = 'Tú';\nconst productName = \"Khóa học JavaScript\";\nconst message = `Xin chào ${userName}`;"
          }
        ]
      },
      {
        "id": "js-string-concat",
        "title": "Nối chuỗi",
        "description": "Nối chuỗi là ghép nhiều chuỗi hoặc biến lại thành một chuỗi hoàn chỉnh. Cách cơ bản là dùng dấu cộng.",
        "exampleText": "Có thể nối họ và tên để tạo ra tên đầy đủ của người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "stringA + stringB;"
          },
          {
            "title": "Ví dụ",
            "code": "const firstName = \"Nguyễn\";\nconst lastName = \"Tú\";\nconst fullName = firstName + \" \" + lastName;"
          }
        ]
      },
      {
        "id": "js-string-template",
        "title": "Template string",
        "description": "Template string dùng dấu backtick và cho phép chèn biến vào chuỗi bằng ${}. Cách này giúp code dễ đọc hơn khi chuỗi có nhiều biến.",
        "exampleText": "Có thể tạo câu chào như “Xin chào Tú, bạn đang học JavaScript”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "`Text ${expression}`"
          },
          {
            "title": "Ví dụ",
            "code": "const userName = \"Tú\";\nconst courseName = \"JavaScript\";\nconst message = `Xin chào ${userName}, bạn đang học ${courseName}`;"
          }
        ]
      },
      {
        "id": "js-string-length",
        "title": "Độ dài chuỗi",
        "description": "Độ dài chuỗi là số lượng ký tự có trong chuỗi. Thuộc tính length thường dùng để kiểm tra chuỗi có rỗng không hoặc giới hạn số ký tự nhập vào.",
        "exampleText": "Khi kiểm tra mật khẩu, có thể dùng độ dài chuỗi để yêu cầu mật khẩu phải có ít nhất 8 ký tự.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.length;"
          },
          {
            "title": "Ví dụ",
            "code": "const password = \"12345678\";\nconst isValid = password.length >= 8;"
          }
        ]
      },
      {
        "id": "js-string-character-access",
        "title": "Truy cập ký tự trong chuỗi",
        "description": "Mỗi ký tự trong chuỗi có vị trí index. Index trong JavaScript bắt đầu từ 0. Có thể lấy một ký tự cụ thể bằng dấu ngoặc vuông hoặc phương thức charAt.",
        "exampleText": "Trong chuỗi “JavaScript”, ký tự đầu tiên nằm ở index 0.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string[index];\nstring.charAt(index);"
          },
          {
            "title": "Ví dụ",
            "code": "const language = \"JavaScript\";\nconsole.log(language[0]); // J\nconsole.log(language.charAt(4)); // S"
          }
        ]
      },
      {
        "id": "js-string-index-of",
        "title": "IndexOf",
        "description": "indexOf dùng để tìm vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi chính. Nếu không tìm thấy, kết quả là -1.",
        "exampleText": "Có thể kiểm tra email có chứa ký tự @ hay không bằng cách tìm vị trí của ký tự đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.indexOf(searchValue, fromIndex);"
          },
          {
            "title": "Ví dụ",
            "code": "const email = \"user@example.com\";\nconst atPosition = email.indexOf(\"@\");\nconst hasAtSign = atPosition !== -1;"
          }
        ]
      },
      {
        "id": "js-string-includes",
        "title": "Includes",
        "description": "includes dùng để kiểm tra một chuỗi có chứa chuỗi con nào đó hay không. Kết quả trả về là true hoặc false.",
        "exampleText": "Có thể kiểm tra tiêu đề bài viết có chứa từ “JavaScript” hay không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.includes(searchValue, position);"
          },
          {
            "title": "Ví dụ",
            "code": "const title = \"Học JavaScript cơ bản\";\nconsole.log(title.includes(\"JavaScript\")); // true"
          }
        ]
      },
      {
        "id": "js-string-slice",
        "title": "Slice",
        "description": "slice dùng để cắt lấy một phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc. Ký tự tại vị trí kết thúc không được lấy vào kết quả.",
        "exampleText": "Có thể cắt lấy vài ký tự đầu của một mã đơn hàng hoặc lấy phần tên miền từ một chuỗi email.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.slice(startIndex, endIndex);"
          },
          {
            "title": "Ví dụ",
            "code": "const orderCode = \"ORDER-2026-001\";\nconst prefix = orderCode.slice(0, 5); // ORDER"
          }
        ]
      },
      {
        "id": "js-string-replace",
        "title": "Replace",
        "description": "replace dùng để thay thế một phần chuỗi bằng nội dung khác. Khi dùng chuỗi tìm kiếm, nó chỉ thay lần xuất hiện đầu tiên; có thể dùng replaceAll hoặc biểu thức chính quy để thay nhiều lần.",
        "exampleText": "Có thể thay từ “JS” thành “JavaScript” trong nội dung bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.replace(searchValue, newValue);"
          },
          {
            "title": "Ví dụ",
            "code": "const lesson = \"Học JS cơ bản\";\nconst updatedLesson = lesson.replace(\"JS\", \"JavaScript\");"
          }
        ]
      },
      {
        "id": "js-string-to-upper-case",
        "title": "ToUpperCase",
        "description": "toUpperCase dùng để chuyển toàn bộ chữ trong chuỗi thành chữ in hoa.",
        "exampleText": "Có thể chuyển mã giảm giá thành chữ in hoa trước khi kiểm tra, để người dùng nhập hoa hay thường đều xử lý được.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.toUpperCase();"
          },
          {
            "title": "Ví dụ",
            "code": "const couponInput = \"sale20\";\nconst couponCode = couponInput.toUpperCase(); // SALE20"
          }
        ]
      },
      {
        "id": "js-string-to-lower-case",
        "title": "ToLowerCase",
        "description": "toLowerCase dùng để chuyển toàn bộ chữ trong chuỗi thành chữ thường.",
        "exampleText": "Có thể chuyển email người dùng thành chữ thường trước khi lưu hoặc so sánh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.toLowerCase();"
          },
          {
            "title": "Ví dụ",
            "code": "const emailInput = \"USER@EXAMPLE.COM\";\nconst email = emailInput.toLowerCase();"
          }
        ]
      },
      {
        "id": "js-string-trim",
        "title": "Trim",
        "description": "trim dùng để xóa khoảng trắng ở đầu và cuối chuỗi. Phương thức này rất hay dùng khi xử lý dữ liệu người dùng nhập từ form.",
        "exampleText": "Nếu người dùng nhập email có khoảng trắng ở đầu hoặc cuối, có thể dùng trim để làm sạch dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.trim();"
          },
          {
            "title": "Ví dụ",
            "code": "const emailInput = \"  user@example.com  \";\nconst cleanEmail = emailInput.trim();"
          }
        ]
      },
      {
        "id": "js-string-split",
        "title": "Split",
        "description": "split dùng để tách chuỗi thành mảng dựa trên ký tự hoặc chuỗi phân tách.",
        "exampleText": "Có thể tách chuỗi “HTML,CSS,JS” thành danh sách các kỹ năng riêng biệt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.split(separator, limit);"
          },
          {
            "title": "Ví dụ",
            "code": "const skillText = \"HTML,CSS,JS\";\nconst skills = skillText.split(\",\");\n// [\"HTML\", \"CSS\", \"JS\"]"
          }
        ]
      },
      {
        "id": "js-number",
        "title": "Number",
        "description": "Number là kiểu dữ liệu số trong JavaScript. Number dùng cho phép tính, điểm số, giá tiền, số lượng, tuổi hoặc phần trăm.",
        "exampleText": "Một biến có thể lưu giá sản phẩm là 150000 hoặc số lượng sản phẩm là 3.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const variableName = numericValue;"
          },
          {
            "title": "Ví dụ",
            "code": "const productPrice = 150000;\nconst quantity = 3;\nconst total = productPrice * quantity;"
          }
        ]
      },
      {
        "id": "js-number-casting",
        "title": "Ép kiểu number",
        "description": "Ép kiểu number là chuyển một giá trị sang kiểu số. Việc này thường cần thiết vì dữ liệu nhập từ input thường là chuỗi.",
        "exampleText": "Khi người dùng nhập số lượng sản phẩm từ form, cần ép sang number trước khi tính tổng tiền.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Number(value);\n+value;"
          },
          {
            "title": "Ví dụ",
            "code": "const quantityInput = \"3\";\nconst quantity = Number(quantityInput);\nconst total = 150000 * quantity;"
          }
        ]
      },
      {
        "id": "js-number-parse-int",
        "title": "ParseInt",
        "description": "parseInt dùng để chuyển chuỗi thành số nguyên. Nếu chuỗi bắt đầu bằng một số có phần thập phân, phần sau dấu chấm bị bỏ qua. Nên truyền radix 10 khi đọc số thập phân.",
        "exampleText": "Chuỗi “10.5” khi dùng parseInt có thể cho ra số nguyên 10.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "parseInt(string, radix);"
          },
          {
            "title": "Ví dụ",
            "code": "const value = parseInt(\"10.5\", 10);\nconsole.log(value); // 10"
          }
        ]
      },
      {
        "id": "js-number-parse-float",
        "title": "ParseFloat",
        "description": "parseFloat dùng để chuyển chuỗi thành số thực và có thể giữ lại phần thập phân.",
        "exampleText": "Chuỗi “10.5” khi dùng parseFloat sẽ cho ra số 10.5.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "parseFloat(string);"
          },
          {
            "title": "Ví dụ",
            "code": "const value = parseFloat(\"10.5\");\nconsole.log(value); // 10.5"
          }
        ]
      },
      {
        "id": "js-number-nan",
        "title": "NaN",
        "description": "NaN là viết tắt của Not a Number, xuất hiện khi một phép tính hoặc ép kiểu không tạo ra được số hợp lệ. Dù mang tên Not a Number, typeof NaN vẫn trả về \"number\".",
        "exampleText": "Nếu cố chuyển chuỗi “abc” thành số, kết quả có thể là NaN.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "NaN"
          },
          {
            "title": "Ví dụ",
            "code": "const result = Number(\"abc\");\nconsole.log(result); // NaN\nconsole.log(typeof result); // number"
          }
        ]
      },
      {
        "id": "js-number-is-nan",
        "title": "IsNaN",
        "description": "isNaN dùng để kiểm tra một giá trị có phải kết quả không hợp lệ về số hay không, nhưng hàm toàn cục có thể ép kiểu trước khi kiểm tra. Trong code hiện đại nên ưu tiên Number.isNaN khi cần kiểm tra chính xác giá trị NaN.",
        "exampleText": "Trước khi tính tổng tiền, có thể kiểm tra số lượng sản phẩm người dùng nhập có phải là số hợp lệ không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Number.isNaN(value);"
          },
          {
            "title": "Ví dụ",
            "code": "const quantity = Number(\"abc\");\n\nif (Number.isNaN(quantity)) {\n  console.log(\"Số lượng không hợp lệ\");\n}"
          }
        ]
      },
      {
        "id": "js-number-to-fixed",
        "title": "ToFixed",
        "description": "toFixed dùng để làm tròn số và định dạng số với số chữ số sau dấu thập phân. Kết quả trả về là một chuỗi.",
        "exampleText": "Có thể dùng toFixed để hiển thị điểm trung bình với 2 chữ số sau dấu phẩy.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "number.toFixed(digits);"
          },
          {
            "title": "Ví dụ",
            "code": "const averageScore = 7.6666;\nconst formattedScore = averageScore.toFixed(2);\nconsole.log(formattedScore); // \"7.67\""
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Array",
    "cards": [
      {
        "id": "js-array",
        "title": "Array",
        "description": "Array là kiểu dữ liệu dùng để lưu nhiều giá trị trong cùng một biến. Array phù hợp khi cần quản lý danh sách dữ liệu như danh sách khóa học, danh sách sản phẩm, danh sách người dùng hoặc danh sách điểm số.",
        "exampleText": "Một biến có thể lưu danh sách các môn học gồm HTML, CSS, JavaScript, ReactJS.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const arrayName = [valueA, valueB];"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\", \"ReactJS\"];"
          }
        ]
      },
      {
        "id": "js-array-declaration",
        "title": "Khai báo array",
        "description": "Có thể khai báo array bằng cặp dấu ngoặc vuông. Các phần tử trong array được phân tách bằng dấu phẩy.",
        "exampleText": "Có thể tạo một array lưu danh sách tên khóa học hoặc danh sách số điểm của học viên.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const arrayName = [elementA, elementB, elementC];"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst scores = [8, 7.5, 9];"
          }
        ]
      },
      {
        "id": "js-array-element",
        "title": "Phần tử trong array",
        "description": "Mỗi giá trị nằm trong array được gọi là một phần tử. Phần tử có thể là string, number, boolean, object, array khác hoặc function.",
        "exampleText": "Trong danh sách khóa học, mỗi tên khóa học như HTML, CSS, JavaScript là một phần tử.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "[stringValue, numberValue, booleanValue, objectValue]"
          },
          {
            "title": "Ví dụ",
            "code": "const data = [\"JavaScript\", 10, true, { level: \"basic\" }, [1, 2]];"
          }
        ]
      },
      {
        "id": "js-array-index",
        "title": "Index trong array",
        "description": "Index là vị trí của phần tử trong array. Trong JavaScript, index bắt đầu từ 0, nghĩa là phần tử đầu tiên có index là 0.",
        "exampleText": "Nếu array gồm HTML, CSS, JavaScript thì HTML ở index 0, CSS ở index 1, JavaScript ở index 2.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName[index]"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nconsole.log(courses[0]); // HTML\nconsole.log(courses[2]); // JavaScript"
          }
        ]
      },
      {
        "id": "js-array-access",
        "title": "Truy cập phần tử",
        "description": "Có thể truy cập một phần tử trong array bằng tên array và index của phần tử đó.",
        "exampleText": "Có thể lấy phần tử đầu tiên trong danh sách khóa học để hiển thị ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName[index];"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst firstCourse = courses[0];"
          }
        ]
      },
      {
        "id": "js-array-length",
        "title": "Độ dài array",
        "description": "Độ dài array là số lượng phần tử có trong array. Thuộc tính length thường dùng để kiểm tra danh sách có bao nhiêu phần tử hoặc dùng làm điều kiện lặp.",
        "exampleText": "Có thể kiểm tra danh sách sản phẩm trong giỏ hàng đang có bao nhiêu sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName.length;"
          },
          {
            "title": "Ví dụ",
            "code": "const cart = [\"Áo\", \"Quần\", \"Giày\"];\nconsole.log(cart.length); // 3"
          }
        ]
      },
      {
        "id": "js-array-push",
        "title": "Thêm phần tử vào cuối",
        "description": "Có thể thêm phần tử mới vào cuối array. Đây là thao tác thường gặp khi cần thêm dữ liệu mới vào danh sách.",
        "exampleText": "Khi người dùng thêm một sản phẩm vào giỏ hàng, sản phẩm mới có thể được thêm vào cuối danh sách giỏ hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName.push(newElement);"
          },
          {
            "title": "Ví dụ",
            "code": "const cart = [\"Áo\", \"Quần\"];\ncart.push(\"Giày\");\n// [\"Áo\", \"Quần\", \"Giày\"]"
          }
        ]
      },
      {
        "id": "js-array-unshift",
        "title": "Thêm phần tử vào đầu",
        "description": "Có thể thêm phần tử mới vào đầu array. Khi thêm vào đầu, các phần tử cũ sẽ bị đẩy lùi về phía sau.",
        "exampleText": "Một bài viết mới có thể được thêm vào đầu danh sách bài viết để hiển thị trước các bài cũ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName.unshift(newElement);"
          },
          {
            "title": "Ví dụ",
            "code": "const posts = [\"Bài cũ 1\", \"Bài cũ 2\"];\nposts.unshift(\"Bài mới\");"
          }
        ]
      },
      {
        "id": "js-array-pop",
        "title": "Xóa phần tử cuối",
        "description": "Có thể xóa phần tử cuối cùng trong array. Thao tác này thường dùng khi muốn loại bỏ phần tử mới nhất hoặc phần tử cuối danh sách.",
        "exampleText": "Có thể xóa sản phẩm cuối cùng vừa được thêm vào giỏ hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName.pop();"
          },
          {
            "title": "Ví dụ",
            "code": "const cart = [\"Áo\", \"Quần\", \"Giày\"];\nconst removedProduct = cart.pop(); // Giày"
          }
        ]
      },
      {
        "id": "js-array-shift",
        "title": "Xóa phần tử đầu",
        "description": "Có thể xóa phần tử đầu tiên trong array. Khi xóa phần tử đầu, các phần tử phía sau sẽ dịch lên trước.",
        "exampleText": "Trong hàng đợi xử lý đơn hàng, đơn hàng đầu tiên sau khi xử lý xong có thể được xóa khỏi danh sách.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName.shift();"
          },
          {
            "title": "Ví dụ",
            "code": "const orderQueue = [\"Đơn 1\", \"Đơn 2\", \"Đơn 3\"];\nconst processedOrder = orderQueue.shift(); // Đơn 1"
          }
        ]
      },
      {
        "id": "js-array-update",
        "title": "Sửa phần tử",
        "description": "Có thể sửa giá trị của một phần tử trong array bằng cách truy cập phần tử theo index rồi gán giá trị mới.",
        "exampleText": "Có thể đổi tên khóa học ở vị trí thứ hai từ CSS thành SCSS.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "arrayName[index] = newValue;"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\ncourses[1] = \"SCSS\";"
          }
        ]
      },
      {
        "id": "js-array-iteration",
        "title": "Duyệt array",
        "description": "Duyệt array là đi qua từng phần tử trong array để đọc, hiển thị hoặc xử lý dữ liệu. Có nhiều cách duyệt như dùng for, for...of, forEach.",
        "exampleText": "Có thể duyệt danh sách sản phẩm để hiển thị từng sản phẩm lên giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "for / for...of / array.forEach(callback)"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [\"Áo\", \"Quần\", \"Giày\"];\nproducts.forEach((product) => console.log(product));"
          }
        ]
      },
      {
        "id": "js-array-for-loop",
        "title": "For với array",
        "description": "Vòng lặp for có thể dùng để duyệt array thông qua index. Cách này phù hợp khi cần biết cả vị trí và giá trị của từng phần tử.",
        "exampleText": "Dùng vòng lặp for để in ra từng tên khóa học theo thứ tự trong danh sách.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "for (let index = 0; index < array.length; index++) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nfor (let index = 0; index < courses.length; index++) {\n  console.log(index, courses[index]);\n}"
          }
        ]
      },
      {
        "id": "js-array-for-of",
        "title": "For of",
        "description": "for...of dùng để duyệt trực tiếp qua từng giá trị trong array. Cách này ngắn gọn hơn khi không cần dùng index.",
        "exampleText": "Dùng for of để lấy từng tên kỹ năng trong danh sách kỹ năng của người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "for (const element of array) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nfor (const skill of skills) {\n  console.log(skill);\n}"
          }
        ]
      },
      {
        "id": "js-array-for-each",
        "title": "ForEach",
        "description": "forEach là method dùng để duyệt từng phần tử trong array và thực hiện một hành động với mỗi phần tử. ForEach không tạo ra array mới.",
        "exampleText": "Dùng forEach để hiển thị từng sản phẩm trong danh sách sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.forEach((element, index, array) => { ... });"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [\"Áo\", \"Quần\", \"Giày\"];\nproducts.forEach((product, index) => {\n  console.log(index, product);\n});"
          }
        ]
      },
      {
        "id": "js-array-map",
        "title": "Map",
        "description": "map dùng để duyệt array và tạo ra một array mới dựa trên kết quả xử lý từng phần tử. Map phù hợp khi muốn biến đổi dữ liệu.",
        "exampleText": "Có thể dùng map để lấy danh sách tên sản phẩm từ danh sách object sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.map((element, index, array) => newValue);"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [\n  { id: 1, name: \"Áo\" },\n  { id: 2, name: \"Quần\" },\n];\nconst productNames = products.map((product) => product.name);"
          }
        ]
      },
      {
        "id": "js-array-filter",
        "title": "Filter",
        "description": "filter dùng để lọc các phần tử thỏa mãn điều kiện và trả về một array mới. Các phần tử không thỏa điều kiện sẽ bị loại bỏ.",
        "exampleText": "Có thể lọc ra các sản phẩm có giá lớn hơn 100.000đ hoặc các khóa học thuộc nhóm JavaScript.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.filter((element, index, array) => condition);"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [\n  { name: \"Áo\", price: 150000 },\n  { name: \"Mũ\", price: 80000 },\n];\nconst expensiveProducts = products.filter((product) => product.price > 100000);"
          }
        ]
      },
      {
        "id": "js-array-find",
        "title": "Find",
        "description": "find dùng để tìm phần tử đầu tiên thỏa mãn điều kiện. Nếu tìm thấy, nó trả về phần tử đó; nếu không tìm thấy, kết quả là undefined.",
        "exampleText": "Có thể tìm sản phẩm có id bằng một giá trị cụ thể trong danh sách sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.find((element, index, array) => condition);"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [{ id: 1, name: \"Áo\" }, { id: 2, name: \"Quần\" }];\nconst product = products.find((item) => item.id === 2);"
          }
        ]
      },
      {
        "id": "js-array-reduce",
        "title": "Reduce",
        "description": "reduce dùng để gom array về một giá trị cuối cùng. Nó thường dùng để tính tổng, tính trung bình, nhóm dữ liệu hoặc chuyển đổi cấu trúc dữ liệu.",
        "exampleText": "Có thể dùng reduce để tính tổng tiền của toàn bộ sản phẩm trong giỏ hàng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.reduce((accumulator, currentValue) => nextAccumulator, initialValue);"
          },
          {
            "title": "Ví dụ",
            "code": "const cart = [\n  { price: 150000, quantity: 2 },\n  { price: 80000, quantity: 1 },\n];\nconst total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);"
          }
        ]
      },
      {
        "id": "js-array-includes",
        "title": "Includes",
        "description": "includes dùng để kiểm tra array có chứa một giá trị cụ thể hay không. Kết quả trả về là true hoặc false.",
        "exampleText": "Có thể kiểm tra danh sách kỹ năng có chứa JavaScript hay không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.includes(searchElement, fromIndex);"
          },
          {
            "title": "Ví dụ",
            "code": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nconsole.log(skills.includes(\"JavaScript\")); // true"
          }
        ]
      },
      {
        "id": "js-array-join",
        "title": "Join",
        "description": "join dùng để nối các phần tử trong array thành một chuỗi. Có thể chỉ định ký tự ngăn cách giữa các phần tử.",
        "exampleText": "Có thể nối danh sách kỹ năng thành chuỗi “HTML, CSS, JavaScript” để hiển thị ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.join(separator);"
          },
          {
            "title": "Ví dụ",
            "code": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst skillText = skills.join(\", \");\n// \"HTML, CSS, JavaScript\""
          }
        ]
      },
      {
        "id": "js-array-slice",
        "title": "Slice",
        "description": "slice dùng để sao chép hoặc cắt lấy một phần của array mà không làm thay đổi array ban đầu.",
        "exampleText": "Có thể lấy 3 sản phẩm đầu tiên trong danh sách để hiển thị ở trang chủ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.slice(startIndex, endIndex);"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [\"A\", \"B\", \"C\", \"D\", \"E\"];\nconst featuredProducts = products.slice(0, 3);\n// [\"A\", \"B\", \"C\"]"
          }
        ]
      },
      {
        "id": "js-array-splice",
        "title": "Splice",
        "description": "splice dùng để thêm, xóa hoặc thay thế phần tử trong array. Khác với slice, splice làm thay đổi array ban đầu.",
        "exampleText": "Có thể dùng splice để xóa một sản phẩm khỏi giỏ hàng theo vị trí index.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "array.splice(startIndex, deleteCount, ...newElements);"
          },
          {
            "title": "Ví dụ",
            "code": "const cart = [\"Áo\", \"Quần\", \"Giày\"];\ncart.splice(1, 1);\n// [\"Áo\", \"Giày\"]"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 8",
    "title": "Object",
    "cards": [
      {
        "id": "js-object",
        "title": "Object",
        "description": "Object là kiểu dữ liệu dùng để lưu thông tin theo dạng cặp key-value. Object phù hợp khi cần mô tả một đối tượng có nhiều thuộc tính và hành động.",
        "exampleText": "Một object người dùng có thể gồm tên, email, tuổi và phương thức lấy thông tin người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = { key: value };"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  name: \"Hoàng An\",\n  email: \"an@example.com\",\n  age: 24,\n  getInfo() {\n    return `${this.name} - ${this.email}`;\n  },\n};"
          }
        ]
      },
      {
        "id": "js-object-literal",
        "title": "Object literal",
        "description": "Object literal là cách khai báo object trực tiếp bằng cặp dấu {}. Đây là cách tạo object phổ biến và dễ hiểu nhất khi học JavaScript cơ bản.",
        "exampleText": "Có thể tạo object user để lưu tên, email và khóa học của người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = {\n  key: value,\n  method() { ... }\n};"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  name: \"Hoàng An\",\n  email: \"an@example.com\",\n  course: \"JavaScript\",\n};"
          }
        ]
      },
      {
        "id": "js-object-key-value",
        "title": "Key và value",
        "description": "Object được chia theo cặp key và value. Key là tên thuộc tính, value là giá trị của thuộc tính đó. Trong repo có ghi chú rằng key thường là chuỗi và value có thể là nhiều kiểu dữ liệu khác nhau.",
        "exampleText": "Trong object người dùng, name là key, còn “Hoang An” là value.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{ key: value }"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  name: \"Hoàng An\",\n  age: 24,\n  isStudent: true,\n};\n// name là key, \"Hoàng An\" là value"
          }
        ]
      },
      {
        "id": "js-object-property",
        "title": "Property",
        "description": "Property là thuộc tính của object. Nếu một key có value không phải function thì thường gọi là property.",
        "exampleText": "Tên, email, tuổi, địa chỉ của người dùng đều có thể là property trong object.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName.property"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  name: \"Hoàng An\",\n  email: \"an@example.com\",\n  age: 24,\n};"
          }
        ]
      },
      {
        "id": "js-object-method",
        "title": "Method",
        "description": "Method là phương thức của object. Nếu một key có value là function thì key đó được xem là method.",
        "exampleText": "Object người dùng có thể có method getCourse để trả về tên khóa học đang học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = {\n  method() { ... }\n};"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  course: \"JavaScript\",\n  getCourse() {\n    return this.course;\n  },\n};"
          }
        ]
      },
      {
        "id": "js-object-property-access",
        "title": "Truy cập property",
        "description": "Truy cập property là lấy giá trị của một key trong object. Có hai cách phổ biến là dùng dấu chấm hoặc dùng ngoặc vuông.",
        "exampleText": "Có thể lấy tên hoặc email của user để hiển thị ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName.key;\nobjectName[\"key\"];"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", email: \"an@example.com\" };\nconsole.log(user.name);\nconsole.log(user[\"email\"]);"
          }
        ]
      },
      {
        "id": "js-object-dot-notation",
        "title": "Truy cập bằng dấu chấm",
        "description": "Dấu chấm dùng để truy cập property khi biết rõ tên key và key có dạng hợp lệ.",
        "exampleText": "Có thể truy cập tên người dùng bằng cách gọi property name của object user.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName.key;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\" };\nconsole.log(user.name);"
          }
        ]
      },
      {
        "id": "js-object-bracket-notation",
        "title": "Truy cập bằng ngoặc vuông",
        "description": "Ngoặc vuông dùng để truy cập property bằng chuỗi key. Cách này hữu ích khi key được lưu trong biến hoặc key có ký tự đặc biệt.",
        "exampleText": "Có thể lấy giá trị của key \"name\" bằng cách truyền chuỗi \"name\" vào ngoặc vuông.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName[keyExpression];"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", \"home-address\": \"Hà Nội\" };\nconst key = \"name\";\nconsole.log(user[key]);\nconsole.log(user[\"home-address\"]);"
          }
        ]
      },
      {
        "id": "js-object-add-property",
        "title": "Thêm property mới",
        "description": "Có thể thêm property mới cho object sau khi object đã được tạo. Repo có ví dụ thêm age và address vào object user.",
        "exampleText": "Sau khi tạo object người dùng, có thể thêm tuổi hoặc địa chỉ cho người dùng đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName.newKey = value;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\" };\nuser.age = 24;\nuser.address = \"Hà Nội\";"
          }
        ]
      },
      {
        "id": "js-object-update-property",
        "title": "Sửa property",
        "description": "Có thể thay đổi giá trị của một property đã tồn tại bằng cách gán lại giá trị mới cho key đó.",
        "exampleText": "Có thể cập nhật email cũ của người dùng thành email mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "objectName.existingKey = newValue;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { email: \"old@example.com\" };\nuser.email = \"new@example.com\";"
          }
        ]
      },
      {
        "id": "js-object-delete-property",
        "title": "Xóa property",
        "description": "Có thể xóa một property khỏi object bằng từ khóa delete. Sau khi xóa, key đó không còn tồn tại trong object.",
        "exampleText": "Có thể xóa property age nếu không muốn lưu tuổi của người dùng nữa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "delete objectName.key;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", age: 24 };\ndelete user.age;"
          }
        ]
      },
      {
        "id": "js-object-iteration",
        "title": "Duyệt object",
        "description": "Duyệt object là đi qua từng key trong object để lấy key và value. Có thể dùng for...in, Object.keys hoặc Object.entries.",
        "exampleText": "Có thể duyệt object user để hiển thị toàn bộ thông tin người dùng ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "for (const key in objectName) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", email: \"an@example.com\" };\nfor (const key in user) {\n  if (Object.hasOwn(user, key)) {\n    console.log(key, user[key]);\n  }\n}"
          }
        ]
      },
      {
        "id": "js-object-keys",
        "title": "Object.keys",
        "description": "Object.keys dùng để lấy danh sách các key của object dưới dạng array. Sau đó có thể duyệt array này để lấy từng value tương ứng.",
        "exampleText": "Có thể lấy danh sách key của user như name, email, address để hiển thị thành bảng thông tin.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Object.keys(objectName);"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", email: \"an@example.com\" };\nconst keys = Object.keys(user);\nkeys.forEach((key) => console.log(key, user[key]));"
          }
        ]
      },
      {
        "id": "js-object-entries",
        "title": "Object.entries",
        "description": "Object.entries dùng để lấy danh sách cả key và value của object dưới dạng mảng hai chiều. Trong repo có ví dụ dùng Object.entries(user) để lấy danh sách key-value.",
        "exampleText": "Một object query có thể được chuyển thành danh sách các cặp key-value để tạo query string.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Object.entries(objectName);"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Hoàng An\", email: \"an@example.com\" };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}"
          }
        ]
      },
      {
        "id": "js-nested-object",
        "title": "Object lồng nhau",
        "description": "Object lồng nhau là object chứa một object khác bên trong. Cách này dùng khi dữ liệu có nhiều cấp.",
        "exampleText": "Object customer có thể chứa object teacher, trong teacher lại có thông tin tên, lương và lịch sử công việc.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = { nestedKey: { ... } };"
          },
          {
            "title": "Ví dụ",
            "code": "const customer = {\n  name: \"Tú\",\n  teacher: {\n    name: \"Sơn Đặng\",\n    salary: 20000000,\n    workHistory: { years: 8 },\n  },\n};"
          }
        ]
      },
      {
        "id": "js-array-of-objects",
        "title": "Array lồng object",
        "description": "Array lồng object là mảng chứa nhiều object. Đây là dạng dữ liệu rất phổ biến khi làm danh sách bài viết, danh sách sản phẩm hoặc dữ liệu API. Repo có ví dụ posts là array chứa nhiều object bài viết.",
        "exampleText": "Danh sách bài viết có thể là một array, mỗi bài viết là một object gồm title, image và description.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const arrayName = [{ ... }, { ... }];"
          },
          {
            "title": "Ví dụ",
            "code": "const posts = [\n  { title: \"HTML cơ bản\", image: \"html.jpg\", description: \"Học HTML\" },\n  { title: \"CSS cơ bản\", image: \"css.jpg\", description: \"Học CSS\" },\n];"
          }
        ]
      },
      {
        "id": "js-object-this",
        "title": "This trong object",
        "description": "this trong method của object thường đại diện cho object đang gọi method đó. Nhờ this, method có thể truy cập các property khác trong cùng object. Repo có ví dụ method getInfo dùng this.name và this.email.",
        "exampleText": "Method lấy thông tin user có thể dùng this.name để lấy tên của chính user đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = {\n  method() { return this.key; }\n};"
          },
          {
            "title": "Ví dụ",
            "code": "const user = {\n  name: \"Hoàng An\",\n  email: \"an@example.com\",\n  getInfo() {\n    return `${this.name} - ${this.email}`;\n  },\n};\nconsole.log(user.getInfo());"
          }
        ]
      },
      {
        "id": "js-prototype",
        "title": "Prototype",
        "description": "Prototype cho phép thêm property hoặc method dùng chung cho các object được tạo từ một hàm tạo hoặc từ prototype của kiểu dữ liệu. Trong repo có ví dụ thêm method getFirst vào Object.prototype và tự viết lại map2 cho Array.prototype.",
        "exampleText": "Có thể thêm một method dùng chung để lấy giá trị đầu tiên của object.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Constructor.prototype.methodName = function () { ... };"
          },
          {
            "title": "Ví dụ",
            "code": "function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.getName = function () {\n  return this.name;\n};\n\n// Tránh sửa Object.prototype vì có thể ảnh hưởng toàn bộ object."
          }
        ]
      },
      {
        "id": "js-function-constructor",
        "title": "Function constructor",
        "description": "Function constructor là hàm tạo dùng để tạo nhiều object có cùng cấu trúc. Tên hàm tạo thường viết theo PascalCase. Trong repo có ví dụ Person và Calculator là function constructor.",
        "exampleText": "Có thể tạo function constructor Person để tạo nhiều người dùng khác nhau, mỗi người có name, email và method riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ConstructorName(parameters) {\n  this.key = value;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function Person(name, email) {\n  this.name = name;\n  this.email = email;\n}\n\nPerson.prototype.getInfo = function () {\n  return `${this.name} - ${this.email}`;\n};\n\nconst user = new Person(\"Tú\", \"tu@example.com\");"
          }
        ]
      },
      {
        "id": "js-object-assign",
        "title": "Object.assign",
        "description": "Object.assign dùng để nối hoặc sao chép object. Nếu dùng không cẩn thận, object gốc có thể bị thay đổi. Trong repo có bài tập dùng Object.assign để nối hai object mà không làm thay đổi object ban đầu.",
        "exampleText": "Có thể gộp thông tin cá nhân và thông tin liên hệ thành một object mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Object.assign(target, ...sources);"
          },
          {
            "title": "Ví dụ",
            "code": "const personalInfo = { name: \"Tú\", age: 24 };\nconst contactInfo = { email: \"tu@example.com\", phone: \"0123456789\" };\nconst user = Object.assign({}, personalInfo, contactInfo);"
          }
        ]
      },
      {
        "id": "js-object-from-entries",
        "title": "Object.fromEntries",
        "description": "Object.fromEntries dùng để chuyển một mảng gồm các cặp key-value thành object. Repo có bài tập lấy query string từ URL rồi chuyển về object.",
        "exampleText": "Một chuỗi query như thông tin tìm kiếm khóa học có thể được tách ra rồi chuyển thành object để dễ xử lý.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Object.fromEntries(iterable);"
          },
          {
            "title": "Ví dụ",
            "code": "const query = \"keyword=javascript&page=2\";\nconst params = new URLSearchParams(query);\nconst queryObject = Object.fromEntries(params);\n// { keyword: \"javascript\", page: \"2\" }"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 9",
    "title": "Date, Regex, Strict mode",
    "cards": [
      {
        "id": "js-date",
        "title": "Date",
        "description": "Date là object dùng để làm việc với ngày tháng và thời gian trong JavaScript. Date thường dùng khi cần hiển thị thời gian, tính khoảng cách ngày, lưu thời điểm tạo dữ liệu hoặc xử lý lịch.",
        "exampleText": "Một website ghi chú kiến thức có thể hiển thị ngày tạo bài học hoặc ngày cập nhật bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const date = new Date();"
          },
          {
            "title": "Ví dụ",
            "code": "const updatedAt = new Date();\nconsole.log(updatedAt);"
          }
        ]
      },
      {
        "id": "js-create-date-object",
        "title": "Tạo Date object",
        "description": "Có thể tạo Date object để lấy thời gian hiện tại hoặc tạo một thời điểm cụ thể. Khi không truyền dữ liệu, Date sẽ lấy thời gian hiện tại của hệ thống.",
        "exampleText": "Có thể tạo một đối tượng ngày hiện tại để hiển thị “Cập nhật hôm nay”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "new Date();\nnew Date(dateString);\nnew Date(year, monthIndex, day);"
          },
          {
            "title": "Ví dụ",
            "code": "const now = new Date();\nconst releaseDate = new Date(2026, 6, 14);\nconst isoDate = new Date(\"2026-07-14T08:30:00+07:00\");"
          }
        ]
      },
      {
        "id": "js-date-get-year",
        "title": "Lấy năm",
        "description": "Có thể lấy năm hiện tại hoặc năm của một Date object bằng getFullYear. Thao tác này thường dùng khi hiển thị ngày tháng hoặc kiểm tra năm sinh.",
        "exampleText": "Từ ngày sinh của người dùng, có thể lấy năm sinh để tính tuổi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.getFullYear();"
          },
          {
            "title": "Ví dụ",
            "code": "const birthDate = new Date(2000, 4, 20);\nconst birthYear = birthDate.getFullYear(); // 2000"
          }
        ]
      },
      {
        "id": "js-date-get-month",
        "title": "Lấy tháng",
        "description": "Có thể lấy tháng từ Date object bằng getMonth. Trong JavaScript, tháng bắt đầu từ 0, nghĩa là tháng 1 có giá trị 0 và tháng 12 có giá trị 11.",
        "exampleText": "Khi hiển thị tháng ra giao diện, cần cộng thêm 1 để ra đúng tháng thực tế.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.getMonth(); // từ 0 đến 11"
          },
          {
            "title": "Ví dụ",
            "code": "const date = new Date(2026, 6, 14);\nconst displayMonth = date.getMonth() + 1; // 7"
          }
        ]
      },
      {
        "id": "js-date-get-day-of-month",
        "title": "Lấy ngày trong tháng",
        "description": "Có thể lấy ngày trong tháng từ Date object bằng getDate. Đây là giá trị ngày từ 1 đến 31 tùy từng tháng.",
        "exampleText": "Có thể lấy ngày hiện tại để hiển thị ngày cập nhật bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.getDate();"
          },
          {
            "title": "Ví dụ",
            "code": "const updatedAt = new Date(2026, 6, 14);\nconsole.log(updatedAt.getDate()); // 14"
          }
        ]
      },
      {
        "id": "js-date-get-weekday",
        "title": "Lấy thứ trong tuần",
        "description": "Có thể lấy thứ trong tuần bằng getDay. Giá trị bắt đầu từ 0, trong đó 0 là Chủ nhật, 1 là Thứ hai và 6 là Thứ bảy.",
        "exampleText": "Có thể hiển thị hôm nay là Thứ hai, Thứ ba hoặc Chủ nhật dựa trên giá trị lấy được.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.getDay(); // từ 0 đến 6"
          },
          {
            "title": "Ví dụ",
            "code": "const weekdays = [\"Chủ nhật\", \"Thứ hai\", \"Thứ ba\", \"Thứ tư\", \"Thứ năm\", \"Thứ sáu\", \"Thứ bảy\"];\nconst today = new Date();\nconst weekdayName = weekdays[today.getDay()];"
          }
        ]
      },
      {
        "id": "js-date-get-time-parts",
        "title": "Lấy giờ phút giây",
        "description": "Date object có thể lấy giờ, phút, giây và mili giây. Các giá trị này thường dùng khi cần hiển thị đồng hồ hoặc ghi thời điểm thao tác.",
        "exampleText": "Một trang quản trị có thể lưu thời điểm người dùng đăng nhập theo giờ, phút và giây.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.getHours();\ndate.getMinutes();\ndate.getSeconds();\ndate.getMilliseconds();"
          },
          {
            "title": "Ví dụ",
            "code": "const loginAt = new Date();\nconst time = {\n  hours: loginAt.getHours(),\n  minutes: loginAt.getMinutes(),\n  seconds: loginAt.getSeconds(),\n};"
          }
        ]
      },
      {
        "id": "js-timestamp",
        "title": "Timestamp",
        "description": "Timestamp là số mili giây tính từ Unix epoch, tức 00:00:00 UTC ngày 01/01/1970. Timestamp thường dùng để so sánh thời gian, lưu thời điểm hoặc tính khoảng cách giữa hai mốc.",
        "exampleText": "Có thể lấy timestamp của thời điểm hiện tại để biết một bài viết được tạo cách đây bao lâu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Date.now();\ndate.getTime();"
          },
          {
            "title": "Ví dụ",
            "code": "const createdAt = new Date(\"2026-07-14T08:00:00+07:00\");\nconst elapsedMilliseconds = Date.now() - createdAt.getTime();"
          }
        ]
      },
      {
        "id": "js-date-formatting",
        "title": "Định dạng ngày tháng",
        "description": "Định dạng ngày tháng là chuyển dữ liệu Date thành chuỗi dễ đọc cho người dùng. Có thể tự ghép ngày, tháng, năm hoặc dùng Intl.DateTimeFormat và các phương thức định dạng theo locale.",
        "exampleText": "Thay vì hiển thị dữ liệu Date thô, có thể hiển thị theo dạng “14/07/2026”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "date.toLocaleDateString(locale, options);\nnew Intl.DateTimeFormat(locale, options).format(date);"
          },
          {
            "title": "Ví dụ",
            "code": "const date = new Date(2026, 6, 14);\nconst formattedDate = new Intl.DateTimeFormat(\"vi-VN\", {\n  day: \"2-digit\",\n  month: \"2-digit\",\n  year: \"numeric\",\n}).format(date);\n// 14/07/2026"
          }
        ]
      },
      {
        "id": "js-regex",
        "title": "Regex",
        "description": "Regex là biểu thức chính quy dùng để tìm kiếm, kiểm tra hoặc thay thế chuỗi theo một mẫu nhất định. Regex thường dùng khi cần kiểm tra email, số điện thoại, mật khẩu hoặc tìm nội dung trong text.",
        "exampleText": "Có thể dùng regex để kiểm tra email người dùng nhập có đúng định dạng cơ bản hay không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const regex = /pattern/flags;\nconst regex = new RegExp(\"pattern\", \"flags\");"
          },
          {
            "title": "Ví dụ",
            "code": "const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconsole.log(emailPattern.test(\"user@example.com\")); // true"
          }
        ]
      },
      {
        "id": "js-regex-pattern",
        "title": "Pattern",
        "description": "Pattern là mẫu kiểm tra trong regex. Pattern mô tả chuỗi cần tìm hoặc điều kiện chuỗi phải thỏa mãn bằng ký tự thường, nhóm, lớp ký tự, số lượng và các ký hiệu đặc biệt.",
        "exampleText": "Một pattern có thể yêu cầu chuỗi phải chứa ký tự @ và dấu chấm để giống định dạng email.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "/pattern/flags"
          },
          {
            "title": "Ví dụ",
            "code": "const digitPattern = /\\d+/g;\nconst simpleEmailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;"
          }
        ]
      },
      {
        "id": "js-regex-test",
        "title": "Test",
        "description": "test là method của RegExp dùng để kiểm tra một chuỗi có khớp với regex hay không. Kết quả trả về là true hoặc false.",
        "exampleText": "Có thể dùng test để kiểm tra email hợp lệ trước khi cho phép gửi form đăng ký.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "regex.test(string);"
          },
          {
            "title": "Ví dụ",
            "code": "const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst isValid = emailPattern.test(\"user@example.com\");"
          }
        ]
      },
      {
        "id": "js-regex-match",
        "title": "Match",
        "description": "match là method của String dùng để tìm các phần trong chuỗi khớp với regex. Kết quả có thể là danh sách các đoạn tìm được hoặc null nếu không tìm thấy.",
        "exampleText": "Có thể lấy tất cả số điện thoại xuất hiện trong một đoạn văn bản.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.match(regex);"
          },
          {
            "title": "Ví dụ",
            "code": "const text = \"Liên hệ 0912345678 hoặc 0987654321\";\nconst phoneNumbers = text.match(/0\\d{9}/g);\n// [\"0912345678\", \"0987654321\"]"
          }
        ]
      },
      {
        "id": "js-regex-replace",
        "title": "Replace với regex",
        "description": "replace kết hợp với regex dùng để thay thế nội dung khớp với pattern. Cách này linh hoạt hơn replace chuỗi thông thường và có thể thay mọi kết quả bằng cờ g.",
        "exampleText": "Có thể thay tất cả khoảng trắng dư thừa trong chuỗi bằng một khoảng trắng duy nhất.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "string.replace(regex, replacement);"
          },
          {
            "title": "Ví dụ",
            "code": "const text = \"Học   JavaScript    cơ bản\";\nconst normalizedText = text.trim().replace(/\\s+/g, \" \");\n// \"Học JavaScript cơ bản\""
          }
        ]
      },
      {
        "id": "js-regex-email-validation",
        "title": "Kiểm tra email bằng regex",
        "description": "Regex thường được dùng để kiểm tra định dạng email. Tuy nhiên, kiểm tra bằng regex chỉ xác nhận cấu trúc cơ bản, không đảm bảo địa chỉ email thật sự tồn tại.",
        "exampleText": "Trong form đăng ký, nếu email không có dạng hợp lệ thì hiển thị thông báo lỗi cho người dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;"
          },
          {
            "title": "Ví dụ",
            "code": "function isValidEmail(email) {\n  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailPattern.test(email.trim());\n}\n\nconsole.log(isValidEmail(\"user@example.com\")); // true"
          }
        ]
      },
      {
        "id": "js-strict-mode",
        "title": "Strict mode",
        "description": "Strict mode là chế độ nghiêm ngặt của JavaScript. Khi bật strict mode, JavaScript báo lỗi rõ ràng hơn với một số cách viết dễ gây lỗi hoặc không an toàn. ES modules và code bên trong class tự động chạy ở strict mode.",
        "exampleText": "Nếu gán giá trị cho một biến chưa khai báo, strict mode có thể báo lỗi thay vì âm thầm tạo biến global.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "\"use strict\";"
          },
          {
            "title": "Ví dụ",
            "code": "\"use strict\";\n\n// userName = \"Tú\"; // ReferenceError\nconst userName = \"Tú\";"
          }
        ]
      },
      {
        "id": "js-strict-mode-benefits",
        "title": "Lợi ích của strict mode",
        "description": "Strict mode giúp code an toàn hơn, dễ phát hiện lỗi hơn và tránh một số hành vi không mong muốn như vô tình tạo biến global hoặc dùng tham số trùng tên trong function thông thường.",
        "exampleText": "Khi làm dự án lớn, strict mode giúp hạn chế lỗi do quên khai báo biến hoặc dùng sai cú pháp cũ.",
        "codeBlocks": [
          {
            "title": "Lợi ích chính",
            "code": "- Ngăn vô tình tạo biến global\n- Báo lỗi cho một số thao tác không hợp lệ\n- Giúp tối ưu và bảo trì code dễ hơn"
          },
          {
            "title": "Ví dụ",
            "code": "\"use strict\";\n\nfunction updateUser() {\n  // email = \"new@example.com\"; // ReferenceError\n  const email = \"new@example.com\";\n  return email;\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 10",
    "title": "DOM",
    "cards": [
      {
        "id": "js-dom",
        "title": "DOM",
        "description": "DOM là mô hình biểu diễn trang HTML dưới dạng cây đối tượng. Nhờ DOM, JavaScript có thể truy cập, đọc, thay đổi, thêm hoặc xóa nội dung HTML trên trang.",
        "exampleText": "Khi click vào button, JavaScript có thể đổi nội dung tiêu đề, thêm một item mới vào danh sách hoặc ẩn hiện một menu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document → element → child elements"
          },
          {
            "title": "Ví dụ",
            "code": "const button = document.querySelector(\".add-button\");\nbutton?.addEventListener(\"click\", () => {\n  const item = document.createElement(\"li\");\n  item.textContent = \"Bài học mới\";\n  document.querySelector(\".lesson-list\")?.appendChild(item);\n});"
          }
        ]
      },
      {
        "id": "js-document",
        "title": "Document",
        "description": "document là đối tượng đại diện cho toàn bộ trang HTML hiện tại. Thông qua document, JavaScript có thể tìm kiếm phần tử, thay đổi nội dung và xử lý giao diện.",
        "exampleText": "Có thể dùng document để tìm một thẻ tiêu đề trong trang rồi thay đổi nội dung của tiêu đề đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document"
          },
          {
            "title": "Ví dụ",
            "code": "const title = document.querySelector(\"h1\");\nif (title) title.textContent = \"JavaScript DOM\";"
          }
        ]
      },
      {
        "id": "js-dom-element",
        "title": "Element",
        "description": "Element là một phần tử HTML trong trang, ví dụ như thẻ h1, p, div, button, input. Khi lấy được element bằng JavaScript, có thể thay đổi nội dung, style, class hoặc gắn sự kiện cho nó.",
        "exampleText": "Một button trên trang có thể được lấy ra bằng JavaScript để xử lý sự kiện click.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.querySelector(\"selector\");"
          },
          {
            "title": "Ví dụ",
            "code": "const button = document.querySelector(\"button\");\nif (button instanceof HTMLButtonElement) {\n  button.disabled = false;\n}"
          }
        ]
      },
      {
        "id": "js-query-selector",
        "title": "Query selector",
        "description": "querySelector dùng để chọn phần tử đầu tiên khớp với CSS selector. Có thể chọn theo tag, class, id hoặc selector phức tạp.",
        "exampleText": "Có thể chọn phần tử đầu tiên có class title để đổi nội dung hoặc đổi màu chữ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.querySelector(\"selector\");"
          },
          {
            "title": "Ví dụ",
            "code": "const title = document.querySelector(\".title\");\nif (title) {\n  title.textContent = \"DOM cơ bản\";\n  title.style.color = \"#b7791f\";\n}"
          }
        ]
      },
      {
        "id": "js-query-selector-all",
        "title": "Query selector all",
        "description": "querySelectorAll dùng để chọn tất cả phần tử khớp với CSS selector. Kết quả nhận được là danh sách các phần tử, có thể duyệt qua để xử lý từng phần tử.",
        "exampleText": "Có thể chọn toàn bộ card kiến thức trong page JS để thêm hiệu ứng hoặc gắn sự kiện click.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.querySelectorAll(\"selector\");"
          },
          {
            "title": "Ví dụ",
            "code": "const cards = document.querySelectorAll(\".knowledge-card\");\ncards.forEach((card) => card.classList.add(\"is-ready\"));"
          }
        ]
      },
      {
        "id": "js-get-element-by-id",
        "title": "Get element by id",
        "description": "getElementById dùng để chọn một phần tử thông qua id. Vì id nên là duy nhất trong trang, kết quả thường là một element cụ thể.",
        "exampleText": "Có thể chọn phần tử có id là menu để ẩn hiện sidebar.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.getElementById(\"id\");"
          },
          {
            "title": "Ví dụ",
            "code": "const menu = document.getElementById(\"menu\");\nmenu?.classList.toggle(\"is-open\");"
          }
        ]
      },
      {
        "id": "js-get-elements-by-class-name",
        "title": "Get elements by class name",
        "description": "getElementsByClassName dùng để chọn các phần tử có cùng class. Kết quả là một danh sách phần tử dạng HTMLCollection.",
        "exampleText": "Có thể lấy tất cả phần tử có class item trong danh sách bài học để xử lý hàng loạt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.getElementsByClassName(\"class-name\");"
          },
          {
            "title": "Ví dụ",
            "code": "const items = document.getElementsByClassName(\"item\");\nArray.from(items).forEach((item) => item.classList.add(\"active\"));"
          }
        ]
      },
      {
        "id": "js-get-elements-by-tag-name",
        "title": "Get elements by tag name",
        "description": "getElementsByTagName dùng để chọn các phần tử theo tên thẻ HTML.",
        "exampleText": "Có thể lấy tất cả thẻ li trong một danh sách để đếm số lượng mục.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.getElementsByTagName(\"tag-name\");"
          },
          {
            "title": "Ví dụ",
            "code": "const listItems = document.getElementsByTagName(\"li\");\nconsole.log(listItems.length);"
          }
        ]
      },
      {
        "id": "js-inner-text",
        "title": "InnerText",
        "description": "innerText dùng để đọc hoặc thay đổi nội dung chữ hiển thị của một element. Nó quan tâm đến phần text mà người dùng nhìn thấy trên giao diện.",
        "exampleText": "Có thể đổi nội dung button từ “Xem thêm” thành “Thu gọn”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.innerText;\nelement.innerText = \"text\";"
          },
          {
            "title": "Ví dụ",
            "code": "const button = document.querySelector(\"button\");\nif (button) button.innerText = \"Thu gọn\";"
          }
        ]
      },
      {
        "id": "js-text-content",
        "title": "TextContent",
        "description": "textContent cũng dùng để đọc hoặc thay đổi nội dung text của element. Khác với innerText, nó lấy toàn bộ text trong phần tử, kể cả nội dung bị ẩn.",
        "exampleText": "Có thể lấy toàn bộ nội dung text trong một box để kiểm tra hoặc xử lý chuỗi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.textContent;\nelement.textContent = \"text\";"
          },
          {
            "title": "Ví dụ",
            "code": "const box = document.querySelector(\".box\");\nconsole.log(box?.textContent);\nif (box) box.textContent = \"Nội dung an toàn\";"
          }
        ]
      },
      {
        "id": "js-inner-html",
        "title": "InnerHTML",
        "description": "innerHTML dùng để đọc hoặc thay đổi nội dung HTML bên trong một element. Có thể chèn cả thẻ HTML, không chỉ text.",
        "exampleText": "Có thể render một danh sách bài học bằng cách tạo chuỗi HTML gồm nhiều thẻ li rồi đưa vào một thẻ ul.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.innerHTML;\nelement.innerHTML = \"html\";"
          },
          {
            "title": "Ví dụ",
            "code": "const lessons = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst list = document.querySelector(\".lesson-list\");\nif (list) {\n  list.innerHTML = lessons.map((lesson) => `<li>${lesson}</li>`).join(\"\");\n}\n// Không đưa dữ liệu chưa được làm sạch của người dùng vào innerHTML."
          }
        ]
      },
      {
        "id": "js-dom-style",
        "title": "Style DOM",
        "description": "Style DOM dùng để thay đổi CSS trực tiếp của element bằng JavaScript. Cách này phù hợp khi cần đổi giao diện theo hành động của người dùng.",
        "exampleText": "Khi người dùng click vào button, có thể đổi màu nền của một box hoặc ẩn hiện một phần tử.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.style.propertyName = \"value\";"
          },
          {
            "title": "Ví dụ",
            "code": "const box = document.querySelector(\".box\");\nif (box instanceof HTMLElement) {\n  box.style.backgroundColor = \"#fff8db\";\n  box.style.display = \"block\";\n}"
          }
        ]
      },
      {
        "id": "js-class-name",
        "title": "ClassName",
        "description": "className dùng để đọc hoặc gán toàn bộ class của một element. Nếu gán className mới, các class cũ có thể bị thay thế.",
        "exampleText": "Có thể đổi class của một box từ trạng thái bình thường sang trạng thái active.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.className;\nelement.className = \"class names\";"
          },
          {
            "title": "Ví dụ",
            "code": "const box = document.querySelector(\".box\");\nif (box) box.className = \"box active\";\n// Việc gán sẽ thay toàn bộ class cũ."
          }
        ]
      },
      {
        "id": "js-class-list",
        "title": "ClassList",
        "description": "classList dùng để thao tác class linh hoạt hơn. Có thể thêm, xóa, bật tắt hoặc kiểm tra một class mà không làm mất các class khác.",
        "exampleText": "Khi click vào menu, có thể dùng classList để thêm class active cho mục đang được chọn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.classList.add(\"class\");\nelement.classList.remove(\"class\");\nelement.classList.toggle(\"class\");\nelement.classList.contains(\"class\");"
          },
          {
            "title": "Ví dụ",
            "code": "const menu = document.querySelector(\".menu\");\nmenu?.classList.add(\"active\");\nmenu?.classList.remove(\"hidden\");\nmenu?.classList.toggle(\"is-open\");"
          }
        ]
      },
      {
        "id": "js-create-element",
        "title": "Create element",
        "description": "createElement dùng để tạo một element mới bằng JavaScript. Sau khi tạo, cần thêm nội dung, class hoặc attribute rồi đưa element đó vào DOM.",
        "exampleText": "Khi người dùng thêm ghi chú mới, JavaScript có thể tạo một thẻ li mới để hiển thị ghi chú đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.createElement(\"tag-name\");"
          },
          {
            "title": "Ví dụ",
            "code": "const item = document.createElement(\"li\");\nitem.className = \"todo-item\";\nitem.textContent = \"Học DOM\";"
          }
        ]
      },
      {
        "id": "js-append-child",
        "title": "Append child",
        "description": "appendChild dùng để thêm một element con vào bên trong element cha. Phần tử mới thường được thêm vào cuối danh sách con.",
        "exampleText": "Có thể thêm một item mới vào cuối danh sách todo sau khi người dùng nhập nội dung.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "parentElement.appendChild(childElement);"
          },
          {
            "title": "Ví dụ",
            "code": "const list = document.querySelector(\".todo-list\");\nconst item = document.createElement(\"li\");\nitem.textContent = \"Học DOM\";\nlist?.appendChild(item);"
          }
        ]
      },
      {
        "id": "js-remove-element",
        "title": "Remove element",
        "description": "Remove element dùng để xóa phần tử khỏi DOM. Khi phần tử bị xóa, nó không còn hiển thị trên giao diện.",
        "exampleText": "Trong todo list, khi người dùng bấm nút xóa, item tương ứng có thể bị xóa khỏi danh sách.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.remove();"
          },
          {
            "title": "Ví dụ",
            "code": "const item = document.querySelector(\".todo-item\");\nitem?.remove();"
          }
        ]
      },
      {
        "id": "js-dom-attribute",
        "title": "Attribute",
        "description": "Attribute là thuộc tính HTML như href, src, alt, title, id, class. JavaScript có thể đọc, thêm, sửa hoặc xóa attribute của element.",
        "exampleText": "Có thể đổi đường dẫn ảnh bằng cách thay giá trị src, hoặc đổi link bằng cách thay giá trị href.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.getAttribute(\"name\");\nelement.setAttribute(\"name\", \"value\");\nelement.removeAttribute(\"name\");"
          },
          {
            "title": "Ví dụ",
            "code": "const image = document.querySelector(\"img\");\nimage?.setAttribute(\"src\", \"/images/javascript.png\");\nimage?.setAttribute(\"alt\", \"JavaScript\");\nconst src = image?.getAttribute(\"src\");"
          }
        ]
      },
      {
        "id": "js-dom-event",
        "title": "Event",
        "description": "Event là sự kiện xảy ra trên trang web, ví dụ click chuột, nhập dữ liệu, submit form, hover, cuộn trang hoặc nhấn phím. JavaScript dùng event để phản ứng với hành động của người dùng.",
        "exampleText": "Khi người dùng click vào nút “Thêm”, JavaScript sẽ lấy dữ liệu từ input và thêm vào danh sách.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.addEventListener(\"event-name\", handler);"
          },
          {
            "title": "Ví dụ",
            "code": "const addButton = document.querySelector(\".add-button\");\naddButton?.addEventListener(\"click\", (event) => {\n  console.log(\"Đã click\", event);\n});"
          }
        ]
      },
      {
        "id": "js-click-event",
        "title": "Click event",
        "description": "Click event xảy ra khi người dùng bấm vào một phần tử. Đây là event rất phổ biến khi làm button, menu, tab, modal hoặc todo list.",
        "exampleText": "Click vào button “Mở menu” thì sidebar được hiển thị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.addEventListener(\"click\", handler);"
          },
          {
            "title": "Ví dụ",
            "code": "const menuButton = document.querySelector(\".menu-button\");\nmenuButton?.addEventListener(\"click\", () => {\n  document.querySelector(\".sidebar\")?.classList.toggle(\"is-open\");\n});"
          }
        ]
      },
      {
        "id": "js-input-event",
        "title": "Input event",
        "description": "Input event xảy ra khi giá trị trong ô nhập thay đổi. Nó thường dùng để kiểm tra dữ liệu ngay khi người dùng đang gõ.",
        "exampleText": "Khi người dùng nhập email, có thể kiểm tra email có rỗng hay không và hiển thị thông báo lỗi ngay lập tức.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "input.addEventListener(\"input\", handler);"
          },
          {
            "title": "Ví dụ",
            "code": "const emailInput = document.querySelector(\"#email\");\nemailInput?.addEventListener(\"input\", (event) => {\n  const input = event.currentTarget;\n  if (input instanceof HTMLInputElement) {\n    console.log(input.value);\n  }\n});"
          }
        ]
      },
      {
        "id": "js-submit-event",
        "title": "Submit event",
        "description": "Submit event xảy ra khi người dùng gửi form. Đây là event quan trọng khi xử lý đăng nhập, đăng ký, tìm kiếm hoặc gửi liên hệ.",
        "exampleText": "Khi submit form đăng ký, JavaScript có thể kiểm tra họ tên, email, mật khẩu trước khi cho phép gửi dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "form.addEventListener(\"submit\", handler);"
          },
          {
            "title": "Ví dụ",
            "code": "const form = document.querySelector(\".register-form\");\nform?.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  console.log(\"Kiểm tra dữ liệu trước khi gửi\");\n});"
          }
        ]
      },
      {
        "id": "js-prevent-default",
        "title": "Prevent default",
        "description": "preventDefault dùng để chặn hành vi mặc định của trình duyệt. Thường dùng để chặn form reload trang khi submit hoặc chặn thẻ link chuyển trang ngay lập tức.",
        "exampleText": "Khi submit form, có thể chặn reload trang để kiểm tra dữ liệu trước, sau đó mới xử lý tiếp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "event.preventDefault();"
          },
          {
            "title": "Ví dụ",
            "code": "const form = document.querySelector(\"form\");\nform?.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  validateForm();\n});"
          }
        ]
      },
      {
        "id": "js-event-listener",
        "title": "Event listener",
        "description": "Event listener dùng để lắng nghe sự kiện trên một element. Khi sự kiện xảy ra, function xử lý sẽ được chạy.",
        "exampleText": "Có thể gắn event listener cho button để khi click vào thì thêm class active cho một box.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "element.addEventListener(\"event-name\", callback);"
          },
          {
            "title": "Ví dụ",
            "code": "const button = document.querySelector(\"button\");\nbutton?.addEventListener(\"click\", () => {\n  document.querySelector(\".box\")?.classList.add(\"active\");\n});"
          }
        ]
      },
      {
        "id": "js-dom-content-loaded",
        "title": "DOMContentLoaded",
        "description": "DOMContentLoaded là sự kiện xảy ra khi HTML đã được tải và phân tích xong. Dùng sự kiện này để đảm bảo JavaScript chỉ chạy sau khi các element đã tồn tại trên trang.",
        "exampleText": "Nếu file JavaScript đặt trong head, có thể dùng DOMContentLoaded để chờ HTML tải xong rồi mới chọn element và xử lý DOM.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "document.addEventListener(\"DOMContentLoaded\", callback);"
          },
          {
            "title": "Ví dụ",
            "code": "document.addEventListener(\"DOMContentLoaded\", () => {\n  const title = document.querySelector(\"h1\");\n  if (title) title.textContent = \"DOM đã sẵn sàng\";\n});"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 11",
    "title": "Storage & Fetch API",
    "cards": [
      {
        "id": "js-web-storage",
        "title": "Web Storage",
        "description": "Web Storage là cơ chế lưu dữ liệu trên trình duyệt. Dữ liệu này được lưu ở phía client và có thể dùng để ghi nhớ thông tin tạm thời hoặc lâu dài.",
        "exampleText": "Website có thể lưu theme sáng/tối, token đăng nhập, danh sách ghi chú hoặc trạng thái người dùng đã chọn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "localStorage / sessionStorage"
          },
          {
            "title": "Ví dụ",
            "code": "localStorage.setItem(\"theme\", \"dark\");\nconst theme = localStorage.getItem(\"theme\");\n// Chỉ lưu dữ liệu phù hợp phía client, tránh dữ liệu nhạy cảm."
          }
        ]
      },
      {
        "id": "js-local-storage",
        "title": "LocalStorage",
        "description": "LocalStorage dùng để lưu dữ liệu lâu dài trên trình duyệt. Dữ liệu vẫn còn sau khi người dùng tắt tab, tắt trình duyệt hoặc mở lại website. Không nên lưu mật khẩu hoặc dữ liệu nhạy cảm trực tiếp trong localStorage.",
        "exampleText": "Có thể lưu danh sách ghi chú học JavaScript để lần sau mở lại trang vẫn còn dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "localStorage.setItem(key, value);\nlocalStorage.getItem(key);"
          },
          {
            "title": "Ví dụ",
            "code": "const notes = [{ id: 1, content: \"Học JavaScript\" }];\nlocalStorage.setItem(\"notes\", JSON.stringify(notes));\nconst savedNotes = JSON.parse(localStorage.getItem(\"notes\") ?? \"[]\");"
          }
        ]
      },
      {
        "id": "js-session-storage",
        "title": "SessionStorage",
        "description": "SessionStorage dùng để lưu dữ liệu trong một phiên làm việc. Khi tab trình duyệt bị đóng, dữ liệu trong sessionStorage thường sẽ mất.",
        "exampleText": "Có thể lưu tạm dữ liệu form đang nhập trong phiên hiện tại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "sessionStorage.setItem(key, value);\nsessionStorage.getItem(key);"
          },
          {
            "title": "Ví dụ",
            "code": "sessionStorage.setItem(\"draftEmail\", \"user@example.com\");\nconst draftEmail = sessionStorage.getItem(\"draftEmail\");"
          }
        ]
      },
      {
        "id": "js-storage-set-item",
        "title": "Set item",
        "description": "Set item dùng để lưu một dữ liệu vào storage theo cặp key-value. Key là tên dữ liệu, value là giá trị cần lưu.",
        "exampleText": "Có thể lưu theme người dùng chọn với key là theme và value là dark.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "storage.setItem(key, stringValue);"
          },
          {
            "title": "Ví dụ",
            "code": "localStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"fontSize\", \"16\");"
          }
        ]
      },
      {
        "id": "js-storage-get-item",
        "title": "Get item",
        "description": "Get item dùng để lấy dữ liệu đã lưu trong storage thông qua key. Nếu key không tồn tại, kết quả thường là null.",
        "exampleText": "Khi tải website, có thể lấy theme đã lưu trước đó để áp dụng lại giao diện sáng hoặc tối.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "storage.getItem(key);"
          },
          {
            "title": "Ví dụ",
            "code": "const savedTheme = localStorage.getItem(\"theme\");\nconst theme = savedTheme ?? \"light\";"
          }
        ]
      },
      {
        "id": "js-storage-remove-item",
        "title": "Remove item",
        "description": "Remove item dùng để xóa một dữ liệu cụ thể trong storage theo key.",
        "exampleText": "Khi người dùng đăng xuất, có thể xóa token đăng nhập khỏi localStorage.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "storage.removeItem(key);"
          },
          {
            "title": "Ví dụ",
            "code": "localStorage.removeItem(\"authToken\");"
          }
        ]
      },
      {
        "id": "js-storage-clear",
        "title": "Clear storage",
        "description": "Clear storage dùng để xóa toàn bộ dữ liệu trong storage hiện tại. Cần cẩn thận khi dùng vì nó sẽ xóa tất cả key đã lưu.",
        "exampleText": "Một nút “Xóa toàn bộ ghi chú” có thể clear dữ liệu ghi chú đã lưu trên trình duyệt.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "storage.clear();"
          },
          {
            "title": "Ví dụ",
            "code": "// Xóa toàn bộ dữ liệu của origin trong localStorage\nlocalStorage.clear();"
          }
        ]
      },
      {
        "id": "js-json",
        "title": "JSON",
        "description": "JSON là định dạng dữ liệu dạng text, thường dùng để trao đổi dữ liệu giữa client và server. Trong JavaScript, JSON rất hay dùng khi lưu object hoặc array vào storage hoặc khi làm việc với API.",
        "exampleText": "Danh sách sản phẩm trả về từ API thường có dạng JSON gồm nhiều object sản phẩm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{\"key\":\"value\"}"
          },
          {
            "title": "Ví dụ",
            "code": "const productJson = `{\n  \"id\": 1,\n  \"name\": \"Khóa học JavaScript\",\n  \"price\": 500000\n}`;"
          }
        ]
      },
      {
        "id": "js-json-stringify",
        "title": "JSON.stringify",
        "description": "JSON.stringify dùng để chuyển object hoặc array thành chuỗi JSON. Việc này cần thiết vì localStorage chỉ lưu dữ liệu dạng chuỗi.",
        "exampleText": "Trước khi lưu danh sách ghi chú vào localStorage, cần chuyển array ghi chú thành chuỗi JSON.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "JSON.stringify(value);"
          },
          {
            "title": "Ví dụ",
            "code": "const notes = [\n  { id: 1, content: \"Học JavaScript\" },\n];\nconst jsonText = JSON.stringify(notes);\nlocalStorage.setItem(\"notes\", jsonText);"
          }
        ]
      },
      {
        "id": "js-json-parse",
        "title": "JSON.parse",
        "description": "JSON.parse dùng để chuyển chuỗi JSON thành dữ liệu JavaScript như object hoặc array. Việc này thường dùng sau khi lấy dữ liệu từ localStorage hoặc từ API.",
        "exampleText": "Sau khi lấy danh sách ghi chú từ localStorage, cần parse lại thành array để duyệt và render ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "JSON.parse(jsonString);"
          },
          {
            "title": "Ví dụ",
            "code": "const savedText = localStorage.getItem(\"notes\");\nlet notes = [];\ntry {\n  notes = JSON.parse(savedText ?? \"[]\");\n} catch (error) {\n  console.error(\"Dữ liệu JSON không hợp lệ\", error);\n}"
          }
        ]
      },
      {
        "id": "js-fetch-api",
        "title": "Fetch API",
        "description": "Fetch API dùng để gửi request từ trình duyệt đến server hoặc API. Fetch thường dùng để lấy dữ liệu, gửi dữ liệu, cập nhật dữ liệu hoặc xóa dữ liệu. Fetch chỉ tự reject với lỗi mạng; lỗi HTTP như 404 hoặc 500 cần được kiểm tra qua response.ok.",
        "exampleText": "Website có thể dùng fetch để lấy danh sách bài viết từ server rồi hiển thị lên trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "fetch(url, options);"
          },
          {
            "title": "Ví dụ",
            "code": "fetch(\"https://api.example.com/posts\")\n  .then((response) => {\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n  })\n  .then((posts) => console.log(posts))\n  .catch((error) => console.error(error));"
          }
        ]
      },
      {
        "id": "js-api",
        "title": "API",
        "description": "API là nơi cung cấp dữ liệu hoặc chức năng cho ứng dụng khác sử dụng. Front-end thường gọi API để lấy dữ liệu từ back-end.",
        "exampleText": "Một API sản phẩm có thể trả về danh sách sản phẩm gồm tên, giá, hình ảnh và mô tả.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "HTTP method + endpoint + request/response data"
          },
          {
            "title": "Ví dụ",
            "code": "// Ví dụ endpoint của API sản phẩm\n// GET https://api.example.com/products\n// Response: [{ id, name, price, image }]"
          }
        ]
      },
      {
        "id": "js-http-request",
        "title": "Request",
        "description": "Request là yêu cầu được gửi từ client đến server. Request có thể chứa method, URL, headers và body.",
        "exampleText": "Khi người dùng bấm nút đăng nhập, trình duyệt gửi request chứa email và mật khẩu đến server.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "fetch(url, { method, headers, body });"
          },
          {
            "title": "Ví dụ",
            "code": "const requestOptions = {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ email, password }),\n};\nfetch(\"https://api.example.com/login\", requestOptions);"
          }
        ]
      },
      {
        "id": "js-http-response",
        "title": "Response",
        "description": "Response là phản hồi từ server gửi về sau khi nhận request. Response có thể chứa dữ liệu, trạng thái thành công, lỗi hoặc thông báo.",
        "exampleText": "Sau khi gọi API danh sách khóa học, server trả về response chứa các khóa học để hiển thị trên giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "response.ok;\nresponse.status;\nawait response.json();"
          },
          {
            "title": "Ví dụ",
            "code": "const response = await fetch(\"https://api.example.com/courses\");\nif (!response.ok) {\n  throw new Error(`HTTP ${response.status}`);\n}\nconst courses = await response.json();"
          }
        ]
      },
      {
        "id": "js-promise",
        "title": "Promise",
        "description": "Promise là đối tượng đại diện cho một tác vụ bất đồng bộ có thể hoàn thành thành công hoặc thất bại. Fetch API trả về Promise.",
        "exampleText": "Khi gọi API, dữ liệu không có ngay lập tức. Promise giúp xử lý kết quả sau khi request hoàn thành.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "new Promise((resolve, reject) => { ... });"
          },
          {
            "title": "Ví dụ",
            "code": "const wait = new Promise((resolve) => {\n  setTimeout(() => resolve(\"Hoàn thành\"), 1000);\n});\nwait.then((message) => console.log(message));"
          }
        ]
      },
      {
        "id": "js-promise-then",
        "title": "Then",
        "description": "then dùng để xử lý kết quả khi Promise hoàn thành thành công. Có thể dùng nhiều then nối tiếp nhau để xử lý từng bước.",
        "exampleText": "Sau khi fetch dữ liệu thành công, dùng then để chuyển response thành JSON rồi render ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "promise.then(onFulfilled);"
          },
          {
            "title": "Ví dụ",
            "code": "fetch(\"https://api.example.com/posts\")\n  .then((response) => {\n    if (!response.ok) throw new Error(\"Request thất bại\");\n    return response.json();\n  })\n  .then((posts) => renderPosts(posts));"
          }
        ]
      },
      {
        "id": "js-promise-catch",
        "title": "Catch",
        "description": "catch dùng để xử lý lỗi khi Promise thất bại. Đây là phần quan trọng khi gọi API vì request có thể lỗi mạng, lỗi server hoặc sai URL.",
        "exampleText": "Nếu gọi API thất bại, catch có thể hiển thị thông báo “Không tải được dữ liệu”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "promise.catch(onRejected);"
          },
          {
            "title": "Ví dụ",
            "code": "fetch(\"https://api.example.com/posts\")\n  .then((response) => {\n    if (!response.ok) throw new Error(\"Request thất bại\");\n    return response.json();\n  })\n  .catch((error) => {\n    showError(\"Không tải được dữ liệu\");\n    console.error(error);\n  });"
          }
        ]
      },
      {
        "id": "js-async-await",
        "title": "Async await",
        "description": "Async await là cú pháp giúp viết code bất đồng bộ dễ đọc hơn so với nhiều then nối tiếp. Function có async có thể dùng await để chờ Promise hoàn thành.",
        "exampleText": "Có thể viết function tải danh sách bài viết bằng async await để code nhìn giống xử lý tuần tự hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "async function name() {\n  const result = await promise;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "async function loadPosts() {\n  try {\n    const response = await fetch(\"https://api.example.com/posts\");\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    const posts = await response.json();\n    renderPosts(posts);\n  } catch (error) {\n    showError(\"Không tải được dữ liệu\");\n  }\n}"
          }
        ]
      },
      {
        "id": "js-get-request",
        "title": "GET request",
        "description": "GET request dùng để lấy dữ liệu từ server. Đây là loại request thường dùng khi cần hiển thị danh sách bài viết, sản phẩm, người dùng hoặc khóa học.",
        "exampleText": "Trang JavaScript có thể gửi GET request để lấy danh sách bài học từ API.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "fetch(url, { method: \"GET\" });"
          },
          {
            "title": "Ví dụ",
            "code": "async function getLessons() {\n  const response = await fetch(\"https://api.example.com/lessons\");\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}"
          }
        ]
      },
      {
        "id": "js-post-request",
        "title": "POST request",
        "description": "POST request dùng để gửi dữ liệu mới lên server. Thường dùng khi tạo tài khoản, thêm bài viết, thêm sản phẩm hoặc gửi form liên hệ.",
        "exampleText": "Khi người dùng thêm ghi chú mới, website có thể gửi POST request chứa nội dung ghi chú lên server.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "fetch(url, {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify(data),\n});"
          },
          {
            "title": "Ví dụ",
            "code": "async function createNote(content) {\n  const response = await fetch(\"https://api.example.com/notes\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ content }),\n  });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}"
          }
        ]
      },
      {
        "id": "js-render-api-data",
        "title": "Render dữ liệu API",
        "description": "Render dữ liệu API là lấy dữ liệu trả về từ API rồi chuyển thành HTML để hiển thị trên giao diện. Thường kết hợp fetch, JSON, array method và DOM.",
        "exampleText": "Sau khi API trả về danh sách khóa học, có thể duyệt mảng khóa học và tạo từng card khóa học để hiển thị trong trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "data.forEach((item) => {\n  const element = document.createElement(\"...\");\n  ...\n});"
          },
          {
            "title": "Ví dụ",
            "code": "function renderCourses(courses) {\n  const list = document.querySelector(\".course-list\");\n  if (!list) return;\n\n  list.replaceChildren();\n  courses.forEach((course) => {\n    const card = document.createElement(\"article\");\n    const title = document.createElement(\"h3\");\n    title.textContent = course.name;\n    card.appendChild(title);\n    list.appendChild(card);\n  });\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 12",
    "title": "ES6+",
    "cards": [
      {
        "id": "js-es6",
        "title": "ES6 là gì",
        "description": "ES6 là phiên bản JavaScript hiện đại bổ sung nhiều cú pháp mới giúp code ngắn gọn, rõ ràng và dễ bảo trì hơn.",
        "exampleText": "Thay vì chỉ dùng var, ES6 cho phép dùng let và const để khai báo biến rõ phạm vi hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "let / const / template literal / arrow function / module / class"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nlet currentIndex = 0;\nconst renderCourse = (course) => `<li>${course}</li>`;"
          }
        ]
      },
      {
        "id": "js-es6-let",
        "title": "Let",
        "description": "let dùng để khai báo biến có thể thay đổi giá trị. Biến khai báo bằng let có phạm vi trong block.",
        "exampleText": "Có thể dùng let cho biến đếm trong vòng lặp hoặc biến có giá trị thay đổi trong quá trình xử lý.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "let variableName = value;"
          },
          {
            "title": "Ví dụ",
            "code": "let count = 0;\nfor (let index = 0; index < 3; index++) {\n  count += index;\n}"
          }
        ]
      },
      {
        "id": "js-es6-const",
        "title": "Const",
        "description": "const dùng để khai báo biến không gán lại giá trị mới. Với object hoặc array, không thể gán lại toàn bộ biến, nhưng vẫn có thể thay đổi dữ liệu bên trong.",
        "exampleText": "Có thể dùng const để khai báo danh sách khóa học, object cấu hình hoặc selector DOM không cần gán lại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const variableName = value;"
          },
          {
            "title": "Ví dụ",
            "code": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\ncourses.push(\"ReactJS\"); // Hợp lệ\n// courses = []; // TypeError khi chạy"
          }
        ]
      },
      {
        "id": "js-es6-var-let-const",
        "title": "So sánh var, let, const",
        "description": "var là cách khai báo biến cũ, có phạm vi function. let và const có phạm vi block nên an toàn hơn. let dùng khi giá trị cần thay đổi, const dùng khi không muốn gán lại.",
        "exampleText": "Biến đếm có thể dùng let, còn danh sách menu cố định có thể dùng const.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "var oldVariable;\nlet mutableVariable;\nconst fixedBinding = value;"
          },
          {
            "title": "Ví dụ",
            "code": "function example() {\n  if (true) {\n    var functionScoped = \"var\";\n    let blockScoped = \"let\";\n    const fixedBinding = \"const\";\n  }\n  console.log(functionScoped);\n  // console.log(blockScoped); // ReferenceError\n}"
          }
        ]
      },
      {
        "id": "js-es6-template-literal",
        "title": "Template literal",
        "description": "Template literal dùng dấu backtick để viết chuỗi. Nó cho phép xuống dòng trực tiếp và chèn biến bằng ${}.",
        "exampleText": "Có thể tạo nội dung HTML cho một card bài học bằng template literal để chèn tiêu đề, mô tả và đường dẫn ảnh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "`Text ${expression}`"
          },
          {
            "title": "Ví dụ",
            "code": "const title = \"JavaScript ES6+\";\nconst description = \"Cú pháp hiện đại\";\nconst cardHtml = `\n  <article>\n    <h2>${title}</h2>\n    <p>${description}</p>\n  </article>\n`;"
          }
        ]
      },
      {
        "id": "js-es6-arrow-function",
        "title": "Arrow function",
        "description": "Arrow function là cú pháp viết function ngắn gọn hơn. Nó thường dùng trong callback, array method hoặc các function xử lý đơn giản.",
        "exampleText": "Có thể dùng arrow function trong map, filter, forEach để xử lý danh sách sản phẩm hoặc bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const functionName = (parameters) => expression;"
          },
          {
            "title": "Ví dụ",
            "code": "const products = [{ price: 80000 }, { price: 150000 }];\nconst expensiveProducts = products.filter((product) => product.price > 100000);"
          }
        ]
      },
      {
        "id": "js-es6-default-parameter",
        "title": "Default parameter",
        "description": "Default parameter dùng để đặt giá trị mặc định cho tham số của function. Nếu khi gọi function không truyền đối số, tham số sẽ nhận giá trị mặc định.",
        "exampleText": "Một function chào người dùng có thể mặc định tên là “bạn” nếu chưa truyền tên cụ thể.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName(parameter = defaultValue) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "function greet(name = \"bạn\") {\n  return `Xin chào ${name}`;\n}\n\nconsole.log(greet()); // Xin chào bạn"
          }
        ]
      },
      {
        "id": "js-es6-destructuring",
        "title": "Destructuring",
        "description": "Destructuring dùng để tách dữ liệu từ array hoặc object ra thành các biến riêng. Cách này giúp code ngắn hơn khi cần lấy nhiều giá trị.",
        "exampleText": "Từ object user, có thể tách riêng name, email, age để sử dụng trực tiếp.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const { keyA, keyB } = object;\nconst [itemA, itemB] = array;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Tú\", email: \"tu@example.com\", age: 24 };\nconst { name, email, age } = user;\n\nconst courses = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst [firstCourse, secondCourse] = courses;"
          }
        ]
      },
      {
        "id": "js-es6-spread-operator",
        "title": "Spread operator",
        "description": "Spread operator dùng dấu ... để trải các phần tử của array hoặc property của object ra vị trí mới. Nó thường dùng để copy hoặc gộp dữ liệu.",
        "exampleText": "Có thể gộp hai mảng khóa học HTML/CSS và JavaScript thành một mảng mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const newArray = [...array];\nconst newObject = { ...object };"
          },
          {
            "title": "Ví dụ",
            "code": "const frontend = [\"HTML\", \"CSS\"];\nconst programming = [\"JavaScript\", \"ReactJS\"];\nconst courses = [...frontend, ...programming];\n\nconst user = { name: \"Tú\" };\nconst updatedUser = { ...user, email: \"tu@example.com\" };"
          }
        ]
      },
      {
        "id": "js-es6-rest-parameter",
        "title": "Rest parameter",
        "description": "Rest parameter cũng dùng dấu ..., nhưng dùng trong tham số function để gom nhiều đối số thành một array.",
        "exampleText": "Một function tính tổng có thể nhận nhiều số khác nhau và gom tất cả vào một mảng để xử lý.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function functionName(...args) { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "function sum(...numbers) {\n  return numbers.reduce((total, number) => total + number, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4)); // 10"
          }
        ]
      },
      {
        "id": "js-es6-enhanced-object-literal",
        "title": "Enhanced object literal",
        "description": "Enhanced object literal giúp viết object ngắn gọn hơn khi tên key trùng với tên biến, hoặc khi khai báo method trong object.",
        "exampleText": "Nếu có sẵn biến name và email, có thể tạo object user ngắn gọn mà không cần viết lặp lại tên biến.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const objectName = { variableName, method() { ... } };"
          },
          {
            "title": "Ví dụ",
            "code": "const name = \"Tú\";\nconst email = \"tu@example.com\";\nconst user = {\n  name,\n  email,\n  getInfo() {\n    return `${this.name} - ${this.email}`;\n  },\n};"
          }
        ]
      },
      {
        "id": "js-es6-optional-chaining",
        "title": "Optional chaining",
        "description": "Optional chaining dùng ?. để truy cập property an toàn trong object nhiều cấp. Nếu một cấp không tồn tại, chương trình không bị lỗi mà trả về undefined.",
        "exampleText": "Khi lấy user.address.city, nếu address chưa tồn tại, optional chaining giúp tránh lỗi chương trình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "object?.nestedProperty?.value;"
          },
          {
            "title": "Ví dụ",
            "code": "const user = { name: \"Tú\" };\nconst city = user.address?.city;\nconst firstCourse = user.courses?.[0];\nconst result = user.getInfo?.();"
          }
        ]
      },
      {
        "id": "js-es6-module",
        "title": "Module",
        "description": "Module giúp chia code JavaScript thành nhiều file nhỏ. Mỗi file có thể export dữ liệu ra và import dữ liệu từ file khác vào.",
        "exampleText": "Có thể tách file xử lý sản phẩm, file xử lý DOM và file chứa dữ liệu khóa học thành các module riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "export ...\nimport ... from \"./module.js\";"
          },
          {
            "title": "Ví dụ",
            "code": "// courses.js\nexport const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\n\n// main.js\nimport { courses } from \"./courses.js\";"
          }
        ]
      },
      {
        "id": "js-es6-export",
        "title": "Export",
        "description": "Export dùng để đưa biến, function, class hoặc object từ một file ra ngoài để file khác có thể sử dụng.",
        "exampleText": "File courses.js có thể export danh sách khóa học để file main.js import và render ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "export const value = ...;\nexport default value;"
          },
          {
            "title": "Ví dụ",
            "code": "// courses.js\nexport const courses = [\"HTML\", \"CSS\"];\nexport function getCourseCount() {\n  return courses.length;\n}\nexport default courses;"
          }
        ]
      },
      {
        "id": "js-es6-import",
        "title": "Import",
        "description": "Import dùng để lấy dữ liệu đã export từ file khác vào file hiện tại.",
        "exampleText": "File main.js có thể import function render từ file render.js để hiển thị danh sách bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import defaultValue from \"./module.js\";\nimport { namedValue } from \"./module.js\";"
          },
          {
            "title": "Ví dụ",
            "code": "// main.js\nimport defaultCourses, { getCourseCount } from \"./courses.js\";\nconsole.log(defaultCourses, getCourseCount());"
          }
        ]
      },
      {
        "id": "js-es6-promise",
        "title": "Promise",
        "description": "Promise dùng để xử lý tác vụ bất đồng bộ. Promise có thể ở trạng thái chờ, thành công hoặc thất bại.",
        "exampleText": "Khi gọi API lấy danh sách khóa học, Promise giúp xử lý kết quả sau khi server trả dữ liệu về.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "new Promise((resolve, reject) => { ... });"
          },
          {
            "title": "Ví dụ",
            "code": "const loadCourses = new Promise((resolve, reject) => {\n  const courses = [\"HTML\", \"CSS\", \"JavaScript\"];\n  courses.length > 0 ? resolve(courses) : reject(new Error(\"Không có dữ liệu\"));\n});"
          }
        ]
      },
      {
        "id": "js-es6-class",
        "title": "Class",
        "description": "Class là cú pháp dùng để tạo khuôn mẫu cho object. Class giúp code hướng đối tượng rõ ràng hơn so với function constructor truyền thống.",
        "exampleText": "Có thể tạo class Course để tạo nhiều khóa học có cùng cấu trúc như title, price, teacher.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "class ClassName {\n  constructor() { ... }\n  method() { ... }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "class Course {\n  constructor(title, price, teacher) {\n    this.title = title;\n    this.price = price;\n    this.teacher = teacher;\n  }\n\n  getInfo() {\n    return `${this.title} - ${this.price}`;\n  }\n}"
          }
        ]
      },
      {
        "id": "js-es6-constructor",
        "title": "Constructor",
        "description": "Constructor là hàm đặc biệt bên trong class, tự chạy khi tạo object mới từ class. Nó thường dùng để khởi tạo property ban đầu.",
        "exampleText": "Khi tạo một khóa học mới, constructor có thể nhận title, price và gán vào object khóa học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "class ClassName {\n  constructor(parameters) { ... }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "class Course {\n  constructor(title, price) {\n    this.title = title;\n    this.price = price;\n  }\n}\n\nconst course = new Course(\"JavaScript\", 500000);"
          }
        ]
      },
      {
        "id": "js-es6-extends",
        "title": "Extends",
        "description": "Extends dùng để tạo class con kế thừa từ class cha. Class con có thể dùng lại property và method của class cha.",
        "exampleText": "Class FrontendCourse có thể kế thừa từ class Course và bổ sung thêm thông tin framework như ReactJS hoặc NextJS.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "class ChildClass extends ParentClass { ... }"
          },
          {
            "title": "Ví dụ",
            "code": "class Course {\n  constructor(title, price) {\n    this.title = title;\n    this.price = price;\n  }\n}\n\nclass FrontendCourse extends Course {\n  getCategory() {\n    return \"Frontend\";\n  }\n}"
          }
        ]
      },
      {
        "id": "js-es6-super",
        "title": "Super",
        "description": "Super dùng trong class con để gọi constructor hoặc method của class cha. Khi class con có constructor riêng, thường cần dùng super trước khi dùng this.",
        "exampleText": "Class FrontendCourse có thể gọi super để nhận title, price từ class Course, sau đó thêm framework riêng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "super(arguments);\nsuper.method();"
          },
          {
            "title": "Ví dụ",
            "code": "class FrontendCourse extends Course {\n  constructor(title, price, framework) {\n    super(title, price);\n    this.framework = framework;\n  }\n}\n\nconst reactCourse = new FrontendCourse(\"ReactJS\", 800000, \"React\");"
          }
        ]
      },
      {
        "id": "f8-js-scope-let-const",
        "title": "Scope: let, const & Block Scope",
        "description": "let, const chỉ hoạt động trong scope khai báo. Trong cùng 1 scope chỉ được khai báo 1 lần. let: được phép thay đổi. const: không được thay đổi, gán luôn khi khai báo. const lưu object/array thì vẫn thay đổi được thuộc tính bên trong.",
        "exampleText": "Từ hocJS/es6/ex01.js: Global scope → sử dụng bất kỳ đâu. Local scope → Function scope (trong hàm) và Block scope (if/for/while). Tip: dấu ngoặc nhọn {} = Block scope.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "function getMessage() {\n  let a = 10;\n  let b = 20;\n  if (a >= 10) {\n    let b = 30; // b khác với b bên ngoài (block scope)\n  }\n  console.log(b); // 20\n}\n\nconst customer = { email: 'An' };\ncustomer.email = 'contact@f8.vn'; // OK\n// customer = {}; // Lỗi!"
          }
        ]
      },
      {
        "id": "f8-js-arrow-caveats",
        "title": "Arrow Function - Lưu ý quan trọng",
        "description": "Arrow function không thay thế function truyền thống. Không binding được this, không binding arguments, không hoisting, không có prototype, không nên dùng làm method trong Object, không dùng làm Constructor.",
        "exampleText": "Từ hocJS/es6/ex02.js: Closure arrow (const sum = (a) => (b) => a + b), IIFE arrow (() => {...})(). Dùng rest parameter (...args) thay cho arguments.",
        "codeBlocks": [
          {
            "title": "Closure + IIFE",
            "code": "// Closure Arrow\nconst sum = (a) => (b) => a + b;\nconst adder = sum(10);\nconsole.log(adder(20)); // 30\n\n// IIFE Arrow\n(() => {\n  console.log('Hello F8');\n})();"
          },
          {
            "title": "Lưu ý",
            "code": "// ❌ Không dùng arrow làm method\nconst user = {\n  name: 'An',\n  getName: () => this.name // this = undefined\n};\n\n// ✅ Dùng function truyền thống\nconst user2 = {\n  name: 'An',\n  getName() { return this.name; }\n};"
          }
        ]
      },
      {
        "id": "f8-js-destructuring-advanced",
        "title": "Destructuring nâng cao",
        "description": "Destructuring phá vỡ cấu trúc object/array để gán vào biến riêng. Hỗ trợ: đổi tên (email: useremail), giá trị mặc định (age = 30), rest (...rest), computed property ([key]: value), lồng nhau, hoán vị biến [a,b] = [b,a].",
        "exampleText": "Từ hocJS/es6/ex03.js: Destructuring trong tham số hàm, destructuring lồng nhau (nested).",
        "codeBlocks": [
          {
            "title": "Object",
            "code": "const user = {\n  username: 'An',\n  email: 'an@gmail.com',\n  'shipping-address': 'HCM'\n};\nconst {\n  username,\n  email: useremail,       // Đổi tên\n  age = 30,               // Mặc định\n  'shipping-address': addr // Bắt buộc đổi tên\n} = user;"
          },
          {
            "title": "Hoán vị & Nested",
            "code": "let a = 10, b = 20;\n[a, b] = [b, a]; // a=20, b=10\n\n// Nested destructuring\nconst {\n  emails: [{ value: email }]\n} = profile;"
          }
        ]
      },
      {
        "id": "f8-js-spread-advanced",
        "title": "Spread Operator nâng cao",
        "description": "Spread (...) trải phần tử của object/array ra ngoài. Dùng để: clone object/array, merge, thêm phần tử mới, truyền mảng làm arguments, tạo range number.",
        "exampleText": "Từ hocJS/es6/ex04.js: Clone rồi thay đổi thuộc tính (immutable update), tạo mảng từ 0 đến n-1.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Clone + thay đổi\nconst data = { status: 1, name: 'An' };\nconst newData = { ...data, name: 'An F8' };\n\n// Thêm phần tử vào mảng\nconst products = ['P1', 'P2'];\nconst newProducts = [...products, 'P3'];\n\n// Tạo range [0..9]\nconst range = [...Array(10).keys()];"
          }
        ]
      },
      {
        "id": "f8-js-enhanced-object",
        "title": "Enhanced Object Literal & Named Arguments",
        "description": "Shorthand property (biến trùng tên key), shorthand method (getEmail() thay vì getEmail: function()). Named arguments: truyền đối số theo tên qua destructuring tham số, giúp bỏ qua tham số có giá trị mặc định.",
        "exampleText": "Từ hocJS/es6/ex05.js: Truyền options dạng object thay vì nhiều tham số vị trí.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const username = 'An';\nconst user = {\n  username,                // Shorthand property\n  getEmail() {             // Shorthand method\n    return this.email;\n  },\n};\n\n// Named arguments\nconst helloWorld = ({ a = 1, b = 2, d, e }) => {\n  console.log(a, b, d, e);\n};\nhelloWorld({ d: 10, e: 30 });"
          }
        ]
      },
      {
        "id": "f8-js-class-private-static",
        "title": "Class: Private (#), Static, Getter/Setter",
        "description": "Thuộc tính private (#age) chỉ truy cập trong class. Static thuộc tính/phương thức thuộc về class (không cần new). Getter/Setter dùng get/set để truy cập như thuộc tính nhưng chạy logic bên trong.",
        "exampleText": "Từ hocJS/es6/ex06, ex07, ex08.js: Kế thừa extends + super(), constructor chạy đầu tiên khi khởi tạo.",
        "codeBlocks": [
          {
            "title": "Private & Static",
            "code": "class User {\n  #age; // Private\n  static email = 'an@gmail.com'; // Static\n  constructor(name) {\n    this.name = name;\n    this.#age = 30;\n  }\n  static getEmail() { return this.email; }\n  setAge(v) { this.#age = v; }\n}"
          },
          {
            "title": "Getter/Setter",
            "code": "class User {\n  #email = 'an@gmail.com';\n  get email() { return this.#email; }\n  set email(value) { this.#email = value; }\n}\nconst user = new User();\nuser.email = 'new@email.com'; // gọi setter\nconsole.log(user.email); // gọi getter"
          }
        ]
      },
      {
        "id": "f8-js-callback-promise",
        "title": "Callback → Promise → Promise.all",
        "description": "Callback: truyền hàm làm tham số, nhưng dễ gây callback hell. Promise: object xử lý bất đồng bộ với 3 trạng thái (pending, fulfilled, rejected). Promise chaining: .then().then().catch(). Promise.all() chạy nhiều promise song song.",
        "exampleText": "Từ hocJS/es6/ex09, ex10.js: Chuyển từ callback lồng nhau sang Promise chaining, dùng Promise.all để tính tổng lương.",
        "codeBlocks": [
          {
            "title": "Promise Chaining",
            "code": "download1()\n  .then(data => {\n    console.log(data);\n    return download2();\n  })\n  .then(data => {\n    console.log(data);\n    return download3();\n  })\n  .catch(err => console.log(err));"
          },
          {
            "title": "Promise.all",
            "code": "const ids = [1, 3, 4];\nPromise.all(ids.map(id => getUser(id)))\n  .then(users => {\n    const total = users.reduce(\n      (sum, { salary }) => sum + salary, 0\n    );\n    console.log(total);\n  });"
          }
        ]
      },
      {
        "id": "f8-js-async-await-advanced",
        "title": "Async/Await nâng cao",
        "description": "async function luôn trả về Promise. await chờ Promise resolve. Dùng try/catch/finally để xử lý lỗi. IIFE async: (async () => {...})(). Lưu ý: return await fn() trả về dữ liệu đã resolve, return fn() trả về promise.",
        "exampleText": "Từ hocJS/es6/ex11.js: Phân biệt return await (bắt được lỗi trong try/catch) vs return promise (không bắt được).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const showUser = async () => {\n  try {\n    const user = await getUser();\n    console.log(user);\n  } catch (e) {\n    console.log(e);\n  } finally {\n    console.log('Hoàn Thành');\n  }\n};\n\n// IIFE async\n(async () => {\n  const data = await fetchData();\n})();"
          }
        ]
      },
      {
        "id": "f8-js-module-import-export",
        "title": "Module: import/export nâng cao",
        "description": "export default (1 file 1 default), export named (nhiều), import * as name (import tất cả). Barrel pattern: tạo file index.js trong folder để import tập trung.",
        "exampleText": "Từ hocJS/es6/ex12.js: import * as home from './modules/home.js' rồi destructuring const { default: getMessage, bestSeller } = home.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Import tất cả\nimport * as home from './modules/home.js';\nconst { default: getMessage, bestSeller } = home;\n\n// Barrel pattern (index.js)\n// Trong folder components/index.js:\nexport { default as Button } from './Button';\nexport { default as Input } from './Input';\n\n// Khi import:\nimport { Button, Input } from './components';"
          }
        ]
      }
    ]
  },
  {
    "label": "notes-js",
    "title": "Ghi Chú Từ Khóa Học",
    "cards": [
      {
        "id": "frontend-f8---offline-hocjs-bundler-note-md",
        "title": "📝 Môi trường & Bundler",
        "description": "Môi trường trong phát triển phần mềm. 1. Dev. - SERVER_API=http://localhost:3000",
        "exampleText": "# Môi trường trong phát triển phần mềm\r\n\r\n1. Dev\r\n\r\n- SERVER_API=http://localhost:3000\r\n\r\n2. Test\r\n\r\n- SERVER_API=https://api.test.fullstack.edu.vn\r\n\r\n3. Production\r\n\r\n- SERVER_API=https://api.fullstack.edu.vn\r\n",
        "codeBlocks": []
      },
      {
        "id": "frontend-f8---offline-hocjs-fetch-api-note-md",
        "title": "📝 Fetch API & Authentication",
        "description": "Call API:. -  fetch(). -  axios lib",
        "exampleText": "Call API:\r\n\r\n-  fetch()\r\n-  axios lib\r\n-  xhr\r\n\r\n-> Phát sinh nhiều vấn đền\r\n\r\n-  Rối, khó bảo trì nâng cấp\r\n-  Cần thêm các tác vụ khác: thêm header, authetication, authorization -> Rối\r\n-  Giả sử: fetch() -> Không được phép sử dụng -> Sửa lại hết từng file\r\n\r\n-> Giải pháp: Tách nghiệp vụ Call API thành 1 hàm riêng\r\n\r\n## Authentication\r\n\r\n-  Cho biết bạn là ai ?\r\n-  Đăng nhập\r\n\r\nLuồng Request: Đăng nhập => Server Verify => Khởi tạo mã số (sessionId, Token) => Trả về Client\r\n\r\n## Authorization\r\n\r\n-  Ủy quyền\r\n-  Cho phép được làm gì? Không được làm gì?\r\n-  Server: Kiểm tra mã số (sessionId, token) hợp lệ hay không?\r\n\r\n*  Không hợp lệ -> Trả về thông báo lỗi (401)\r\n*  Hợp lệ -> Xử lý nghiệp vụ tiếp theo\r\n\r\nVí dụ:\r\n\r\n-  Đăng nhập -> Authetication\r\n-  Sửa thông tin tài khoản -> Authorization\r\n\r\n## Các hình thức Authetication\r\n\r\n1. Session-Based (Cookie-Based) Authenication\r\n\r\n-  Ưu điểm:\r\n\r\n*  Dễ triển khai\r\n*  Các fraemwork, thư viện, cms từ trước đa số theo cơ chế này\r\n\r\n-  Nhược điểm:\r\n\r\n*  Không scale được\r\n*  Không áp dụng cho các ứng dụng đa nền tảng\r\n\r\nVí dụ: 1 dự án có nhiều server (microservices)\r\n\r\nRequest => LB =>\r\n\r\n-  Server 1 -> Login lưu session vào server này\r\n-  Server 2 -> Không có session -> Bắt đăng nhập lại\r\n-  Server 3\r\n\r\n2. Token-Based Authetication\r\n",
        "codeBlocks": []
      },
      {
        "id": "fullstack-nodejs-08-hocjs-auth-note-md",
        "title": "📝 Authentication & Authorization",
        "description": "Authentication - Authorization. - Authentication: Đăng nhập => Trả về thông tin. - Authorization: Kiểm tra quyền hạn => Trả về thông tin",
        "exampleText": "# Authentication - Authorization\r\n\r\n- Authentication: Đăng nhập => Trả về thông tin\r\n- Authorization: Kiểm tra quyền hạn => Trả về thông tin\r\n\r\n# Xây dựng class/object httpclient để xử lý http request tập trung\r\n\r\n- Xử lý refresh token\r\n- Quản lý các request tốt hơn\r\n",
        "codeBlocks": []
      },
      {
        "id": "fullstack-nodejs-08-hocjs-package-note-md",
        "title": "📝 NPM Package Manager",
        "description": "Package. - Cài đặt thủ công. - Cập nhật thủ công",
        "exampleText": "# Package\r\n\r\n- Cài đặt thủ công\r\n- Cập nhật thủ công\r\n- Gỡ bỏ thủ công (Quên gỡ thư viện nếu không dùng)\r\n- Di chuyển ==> Nặng\r\n- Xung đột thư viện\r\n\r\n==> Giải pháp: Công cụ quản lý thư viện\r\n\r\n- Thao tác thông qua giao diện dòng lệnh (CLI = Commandline Interface)\r\n- Thư viện sẽ được lưu trữ trên store\r\n\r\n## Các công cụ\r\n\r\n- Node Package Manager (NPM)\r\n- Yarn\r\n\r\nLưu ý: Khi cài thư viện ==> Sinh ra folder node_modules\r\n\r\n## Khởi tạo dự án\r\n\r\nnpm init -y ==> Tạo ra file package.json\r\n\r\n## Cài đặt tất cả Dependencies\r\n\r\nnpm i hoặc npm install\r\n\r\n## Cài đặt 1 package\r\n\r\nnpm i ten_package hoặc npm install ten_package\r\n\r\n## Cài đặt nhiều package\r\n\r\nnpm i package1 package2 package3\r\n\r\n## Gỡ bỏ Dependencies\r\n\r\nnpm uninstall ten_package\r\n\r\n## Các loại dependencies\r\n\r\n- Simple Dependency ==> npm i ten_package\r\n- Dev Dependency ==> npm i ten_package --save-dev\r\n\r\n## Chỉ cần cài đặt Dependencies phụ vụ production\r\n\r\nnpm i --product\r\n\r\n## Các loại cài đặt package\r\n\r\n- Local: npm i ten_package\r\n- Global: npm i ten_package -g\r\n\r\nnpm root -g ==> Kiểm tra đường dẫn chứa các dependencies global\r\n\r\nnpm list -g ==> Liệt kê các dependencies được cài đặt global\r\n\r\n## Phiên bản\r\n\r\nmajor.minor.patch\r\n\r\nKhi chạy lệnh update của npm ==> Chỉ update minor và patch\r\n\r\n## Cập nhật phiên bản\r\n\r\nnpm update ten_package\r\n\r\nnpm update ==> Cập nhật tất cả package\r\n\r\n## Cài đặt Dependency theo phiên bản\r\n\r\nnpm i ten_package@phienban hoặc npm install ten_package@phienban\r\n",
        "codeBlocks": []
      },
      {
        "id": "fullstack-nodejs-08-hocjs-regex-note-md",
        "title": "📝 Regular Expression (Regex)",
        "description": "Regular Expression (Regex). - Biểu thức chính quy. - Biểu thức để xử lý chuỗi nâng cao",
        "exampleText": "# Regular Expression (Regex)\r\n\r\n- Biểu thức chính quy\r\n- Biểu thức để xử lý chuỗi nâng cao\r\n\r\n* So khớp\r\n* Cắt chuỗi\r\n* Thay thế\r\n\r\nKhi làm việc với Regex, xây dựng lên 1 pattern\r\n\r\nCấu tạo pattern\r\n/regex/modifier\r\n\r\nWebsite test Regex: https://regex101.com\r\n\r\n## Các ký hiệu cơ bản\r\n\r\nstring ==> So khớp chuỗi string trong biểu có nằm trong chuỗi cần kiểm tra không?\r\n\r\n^ (Đặt ở đầu biểu thức, sau dấu phân cách /) ==> Kiểm tra biểu thức nằm ở đầu chuỗi\r\n\r\n$ (Đặt ở cuối biểu thức, trước dấu phân cách /) ==> Kiểm tra biểu thức nằm ở cuối chuỗi\r\n\r\n[min-max] ==> Kiểm tra các ký tự từ min đến max (A-Z, a-z, 0-9)\r\n\r\n[char_list] ==> Kiểm tra các ký tự ([abc])\r\n\r\nLưu ý:\r\n\r\n- Các biểu thức trong cặp [], kết hợp với nhau theo điều kiện OR\r\n- Nếu các biểu thức không nằm trong cùng cặp ngoặc [] ==> Kết hợp với nhau theo điều kiện AND và phải đúng thứ tự\r\n\r\n- {min,} ==> Độ dài của biểu thức lớn hơn hoặc bằng min\r\n\r\n- {value} ==> Độ dài của biểu thức bằng value\r\n\r\n- {min, max} ==> Độ dài của biểu thức từ min đến max\r\n\r\nKý hiệu viết tắt độ dài\r\n\r\n```\r\n+ ==> Tương ứng với {1,}\r\n* ==> Tương ứng với {0,}\r\n? ==> Tương ứng với {0,1}\r\n```\r\n\r\nHoặc (|) - Phủ định (^)\r\n\r\nKý hiệu đại diện cho tất cả ký tự: .\r\n\r\nCác ký hiệu viết tắt\r\n\r\n```\r\n\\w: Thường, hoa, số, _\r\n\\W: Ngược lại của \\w\r\n\\d: Số\r\n\\D: Ngược lại của số\r\n\\s: Khoảng trắng\r\n\\S: Ngược lại của \\s\r\n```\r\n",
        "codeBlocks": []
      }
    ]
  }
];
