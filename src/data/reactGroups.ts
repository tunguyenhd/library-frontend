import type { KnowledgeGroup } from "../types/knowledge";

export const reactGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "React cơ bản, Vite, Component, JSX",
    "cards": [
      {
        "id": "react-introduction",
        "title": "React là gì",
        "description": "React là thư viện JavaScript dùng để xây dựng giao diện người dùng. React giúp chia giao diện thành nhiều component nhỏ, dễ quản lý và tái sử dụng.",
        "exampleText": "Một website lưu kiến thức code có thể chia thành các component như Header, Sidebar, KnowledgeCard, Button và Content.",
        "codeBlocks": [
          {
            "title": "Ý tưởng component",
            "code": "function KnowledgeCard() {\n  return <article>Thẻ kiến thức</article>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function App() {\n  return (\n    <main>\n      <Header />\n      <Sidebar />\n      <KnowledgeCard />\n    </main>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-vite",
        "title": "React + Vite",
        "description": "Vite là công cụ build và dev server giúp tạo, chạy project React nhanh. Trong repo, các thư mục react01, react02, react03 đều có cấu trúc React + Vite với index.html, package.json, vite.config.js và src.",
        "exampleText": "Khi tạo page ReactJS cho website kiến thức, có thể dùng Vite để khởi tạo project React và chạy giao diện trong môi trường dev.",
        "codeBlocks": [
          {
            "title": "Khởi tạo project",
            "code": "npm create vite@latest my-react-app -- --template react"
          },
          {
            "title": "Chạy project",
            "code": "cd my-react-app\nnpm install\nnpm run dev"
          }
        ]
      },
      {
        "id": "react-project-structure",
        "title": "Cấu trúc project React",
        "description": "Một project React thường có thư mục src chứa code chính, main.jsx để render ứng dụng, App.jsx làm component gốc và components chứa các component nhỏ. Trong repo react01/src có components, App.jsx, main.jsx và main01.jsx.",
        "exampleText": "Website kiến thức có thể đặt App.jsx làm component chính, còn sidebar và từng card kiến thức tách thành component riêng.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "my-react-app/\n├── index.html\n├── package.json\n├── vite.config.js\n└── src/\n    ├── components/\n    │   ├── Header.jsx\n    │   └── KnowledgeCard.jsx\n    ├── App.jsx\n    ├── main.jsx\n    └── index.css"
          },
          {
            "title": "Gợi ý",
            "code": "// components: giao diện tái sử dụng\n// App.jsx: component gốc\n// main.jsx: điểm khởi chạy React"
          }
        ]
      },
      {
        "id": "react-main-jsx",
        "title": "File main.jsx",
        "description": "main.jsx là điểm bắt đầu của ứng dụng React. File này thường tạo React root rồi render component gốc vào phần tử HTML có id là root.",
        "exampleText": "Khi mở website React, React sẽ lấy component App và hiển thị nó vào trong thẻ root của file HTML.",
        "codeBlocks": [
          {
            "title": "index.html",
            "code": "<div id=\"root\"></div>\n<script type=\"module\" src=\"/src/main.jsx\"></script>"
          },
          {
            "title": "main.jsx",
            "code": "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport App from \"./App.jsx\";\n\ncreateRoot(document.getElementById(\"root\")).render(\n  <StrictMode>\n    <App />\n  </StrictMode>,\n);"
          }
        ]
      },
      {
        "id": "react-create-root",
        "title": "createRoot",
        "description": "createRoot từ react-dom/client dùng để tạo React root và render component vào DOM. Nó nhận một DOM element làm nơi React quản lý giao diện.",
        "exampleText": "Nếu ví React app là một cái cây component, thì createRoot là nơi gắn cái cây đó vào trang HTML thật.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "createRoot(domNode).render(<App />);"
          },
          {
            "title": "Ví dụ",
            "code": "import { createRoot } from \"react-dom/client\";\nimport App from \"./App.jsx\";\n\nconst rootElement = document.getElementById(\"root\");\ncreateRoot(rootElement).render(<App />);"
          }
        ]
      },
      {
        "id": "react-app-jsx",
        "title": "File App.jsx",
        "description": "App.jsx thường là component gốc của ứng dụng. Từ App có thể gọi component con, xử lý dữ liệu và render giao diện chính. Trong repo react01, App.jsx import Header, khai báo trạng thái, dữ liệu và event handler rồi render giao diện.",
        "exampleText": "Trong website lưu kiến thức, App.jsx có thể chứa layout chính gồm sidebar bên trái và nội dung kiến thức bên phải.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "export default function App() {\n  return <main>...</main>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "import Header from \"./components/Header.jsx\";\nimport Sidebar from \"./components/Sidebar.jsx\";\n\nexport default function App() {\n  return (\n    <>\n      <Header />\n      <main className=\"layout\">\n        <Sidebar />\n        <section>Nội dung kiến thức</section>\n      </main>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-component",
        "title": "Component",
        "description": "Component là một khối giao diện độc lập trong React. Mỗi component có thể chứa JSX, logic JavaScript và nhận dữ liệu từ component khác qua props.",
        "exampleText": "Một card kiến thức có tiêu đề, giải thích và ví dụ có thể tách thành component KnowledgeCard.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName() {\n  return <div>...</div>;\n}",
            "codeTsx": "function Greeting(): JSX.Element {\n  return <h1>Xin chào!</h1>;\n}\n\nexport default Greeting;"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeCard() {\n  return (\n    <article className=\"knowledge-card\">\n      <h2>Component</h2>\n      <p>Khối giao diện có thể tái sử dụng.</p>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-functional-component",
        "title": "Functional component",
        "description": "Functional component là component được viết bằng function. Đây là kiểu component phổ biến trong React hiện đại và có thể sử dụng Hooks.",
        "exampleText": "Component Header có thể là một function trả về phần giao diện tiêu đề của trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName() {\n  return JSX;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "export default function Header() {\n  return (\n    <header>\n      <h1>React Knowledge</h1>\n    </header>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-import-component",
        "title": "Import component",
        "description": "Import component là lấy component từ file khác vào file hiện tại để sử dụng. Cách này giúp chia nhỏ code và tái sử dụng component dễ hơn.",
        "exampleText": "File App.jsx có thể import component Header từ thư mục components để hiển thị header trong trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import ComponentName from \"./path/ComponentName.jsx\";"
          },
          {
            "title": "Ví dụ",
            "code": "import Header from \"./components/Header.jsx\";\n\nexport default function App() {\n  return <Header />;\n}"
          }
        ]
      },
      {
        "id": "react-export-component",
        "title": "Export component",
        "description": "Export component là đưa component ra khỏi file hiện tại để file khác có thể import và sử dụng. Có thể dùng default export hoặc named export.",
        "exampleText": "Sau khi tạo component Sidebar, cần export nó để App.jsx có thể import vào và render ra giao diện.",
        "codeBlocks": [
          {
            "title": "Default export",
            "code": "export default function Sidebar() {\n  return <aside>Sidebar</aside>;\n}"
          },
          {
            "title": "Named export",
            "code": "export function Sidebar() {\n  return <aside>Sidebar</aside>;\n}\n\n// import { Sidebar } from \"./Sidebar.jsx\";"
          }
        ]
      },
      {
        "id": "react-jsx",
        "title": "JSX",
        "description": "JSX là cú pháp mở rộng cho JavaScript, cho phép viết giao diện gần giống HTML trong code React. JSX được công cụ build chuyển đổi thành các lời gọi tạo React element.",
        "exampleText": "Trong component App, có thể viết phần giao diện gồm tiêu đề, button, danh sách người dùng và component Header.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const element = <h1>Xin chào React</h1>;",
            "codeTsx": "function Profile(): JSX.Element {\n  const name: string = 'Linh';\n  const age: number = 22;\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>Tuổi: {age}</p>\n    </div>\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function App() {\n  return (\n    <section>\n      <h1>ReactJS</h1>\n      <button type=\"button\">Bắt đầu học</button>\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-javascript-expressions-jsx",
        "title": "Biểu thức JavaScript trong JSX",
        "description": "Trong JSX, có thể dùng cặp {} để nhúng biểu thức JavaScript vào giao diện. Cách này dùng để hiển thị biến, gọi hàm, xử lý điều kiện hoặc render danh sách.",
        "exampleText": "Có thể đưa tên người dùng, trạng thái đăng nhập hoặc danh sách bài học vào JSX để hiển thị động.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<p>{javascriptExpression}</p>"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseList() {\n  const userName = \"Tú\";\n  const courses = [\"Component\", \"Props\", \"State\"];\n\n  return (\n    <section>\n      <h2>Xin chào {userName}</h2>\n      <ul>\n        {courses.map((course) => (\n          <li key={course}>{course}</li>\n        ))}\n      </ul>\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-child-component",
        "title": "Component con",
        "description": "Component con là component được render bên trong component khác. Component cha có thể chứa nhiều component con và truyền dữ liệu cho chúng qua props.",
        "exampleText": "App là component cha, bên trong App có thể có Header, Sidebar, Content và Footer.",
        "codeBlocks": [
          {
            "title": "Component con",
            "code": "function Header() {\n  return <header>Header</header>;\n}",
            "codeTsx": "function Header(): JSX.Element {\n  return <header>Header</header>;\n}"
          },
          {
            "title": "Component cha",
            "code": "function App() {\n  return (\n    <>\n      <Header />\n      <Sidebar />\n      <Content />\n      <Footer />\n    </>\n  );\n}",
            "codeTsx": "function App(): JSX.Element {\n  return (\n    <>\n      <Header />\n      <Sidebar />\n      <Content />\n      <Footer />\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-jsx-rules",
        "title": "Quy tắc JSX",
        "description": "JSX có một số quy tắc quan trọng: component phải trả về một phần tử gốc hoặc Fragment, class HTML viết là className, event viết camelCase như onClick, thẻ phải được đóng và biểu thức JavaScript đặt trong {}.",
        "exampleText": "Nếu muốn render nhiều thẻ cạnh nhau, cần bọc chúng trong một thẻ cha hoặc Fragment.",
        "codeBlocks": [
          {
            "title": "Đúng",
            "code": "function Card() {\n  return (\n    <>\n      <h2 className=\"title\">React</h2>\n      <button type=\"button\" onClick={handleClick}>\n        Xem thêm\n      </button>\n    </>\n  );\n}"
          },
          {
            "title": "Ghi nhớ",
            "code": "// Một phần tử gốc hoặc Fragment\n// className thay cho class\n// onClick thay cho onclick\n// <img /> và <input /> phải tự đóng\n// JavaScript đặt trong {}"
          }
        ]
      },
      {
        "id": "react-component-tree",
        "title": "Component tree",
        "description": "Component tree là cây component của ứng dụng. Component lớn chứa component nhỏ; component nhỏ lại có thể chứa các component nhỏ hơn để hình thành cấu trúc giao diện.",
        "exampleText": "Website kiến thức có thể có cây component: App chứa Layout, Layout chứa Sidebar và MainContent, MainContent chứa nhiều KnowledgeCard.",
        "codeBlocks": [
          {
            "title": "Cây component",
            "code": "App\n└── Layout\n    ├── Sidebar\n    │   └── MenuItem\n    └── MainContent\n        └── KnowledgeCard"
          },
          {
            "title": "Ví dụ",
            "code": "function App() {\n  return (\n    <Layout>\n      <Sidebar />\n      <MainContent>\n        <KnowledgeCard />\n      </MainContent>\n    </Layout>\n  );\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Render dữ liệu, điều kiện, danh sách",
    "cards": [
      {
        "id": "react-render-data-jsx",
        "title": "Render dữ liệu trong JSX",
        "description": "Render dữ liệu trong JSX là đưa dữ liệu JavaScript vào giao diện React. Dữ liệu có thể là biến, biểu thức, kết quả gọi hàm, array hoặc object đã được xử lý.",
        "exampleText": "Một page kiến thức có thể render tên chủ đề hiện tại như “HTML”, “CSS”, “JavaScript” hoặc “ReactJS” ra tiêu đề trang.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element>{javascriptExpression}</Element>"
          },
          {
            "title": "Ví dụ",
            "code": "function TopicHeader() {\n  const topic = \"ReactJS\";\n  return <h1>{topic} Knowledge</h1>;\n}"
          }
        ]
      },
      {
        "id": "react-render-variable",
        "title": "Render biến",
        "description": "Trong JSX, có thể dùng cặp ngoặc nhọn {} để hiển thị giá trị của biến. Đây là cách render dữ liệu động cơ bản nhất trong React.",
        "exampleText": "Có thể tạo biến courseName có giá trị “ReactJS” rồi hiển thị biến đó trong thẻ tiêu đề của component.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element>{variableName}</Element>"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseTitle() {\n  const courseName = \"ReactJS\";\n  return <h2>{courseName}</h2>;\n}"
          }
        ]
      },
      {
        "id": "react-render-expression",
        "title": "Render biểu thức",
        "description": "JSX cho phép render biểu thức JavaScript bên trong {}. Biểu thức có thể là phép tính, nối chuỗi, gọi hàm hoặc xử lý dữ liệu đơn giản.",
        "exampleText": "Có thể hiển thị tổng tiền bằng cách lấy đơn giá nhân với số lượng ngay trong JSX.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element>{expression}</Element>"
          },
          {
            "title": "Ví dụ",
            "code": "function OrderTotal() {\n  const unitPrice = 150000;\n  const quantity = 2;\n\n  return <p>Thành tiền: {unitPrice * quantity}đ</p>;\n}"
          }
        ]
      },
      {
        "id": "react-conditional-rendering",
        "title": "Render điều kiện",
        "description": "Render điều kiện là hiển thị giao diện khác nhau tùy theo trạng thái hoặc dữ liệu. Trong React, thường dùng toán tử 3 ngôi, toán tử && hoặc tách logic ra trước lệnh return.",
        "exampleText": "Nếu người dùng đã đăng nhập thì hiển thị tên người dùng, nếu chưa đăng nhập thì hiển thị nút đăng nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "return condition ? <TrueUI /> : <FalseUI />;",
            "codeTsx": "interface StatusProps {\n  isLoggedIn: boolean;\n}\n\nfunction Status({ isLoggedIn }: StatusProps): JSX.Element {\n  return (\n    <div>\n      {isLoggedIn ? <p>Chào bạn!</p> : <p>Vui lòng đăng nhập</p>}\n    </div>\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function Account({ isLoggedIn, userName }) {\n  if (isLoggedIn) {\n    return <p>Xin chào {userName}</p>;\n  }\n\n  return <button type=\"button\">Đăng nhập</button>;\n}"
          }
        ]
      },
      {
        "id": "react-jsx-ternary",
        "title": "Toán tử 3 ngôi trong JSX",
        "description": "Toán tử 3 ngôi dùng để chọn một trong hai giao diện dựa trên điều kiện. Đây là cách phổ biến khi có cả trường hợp đúng và trường hợp sai.",
        "exampleText": "Nếu biến isLogin là true thì hiển thị “Xin chào người dùng”, ngược lại hiển thị “Vui lòng đăng nhập”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{condition ? <TrueUI /> : <FalseUI />}"
          },
          {
            "title": "Ví dụ",
            "code": "function LoginStatus({ isLogin }) {\n  return (\n    <p>\n      {isLogin ? \"Xin chào người dùng\" : \"Vui lòng đăng nhập\"}\n    </p>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-jsx-and-operator",
        "title": "Toán tử && trong JSX",
        "description": "Toán tử && thường dùng khi chỉ muốn hiển thị một phần giao diện nếu điều kiện đúng. Nếu điều kiện sai, phần giao diện phía sau sẽ không được render. Nên dùng điều kiện boolean rõ ràng để tránh vô tình render số 0.",
        "exampleText": "Chỉ hiển thị thông báo “Bạn có bài học mới” khi danh sách bài học mới có dữ liệu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{condition && <UI />}"
          },
          {
            "title": "Ví dụ",
            "code": "function NewLessonNotice({ lessons }) {\n  return (\n    <section>\n      {lessons.length > 0 && <p>Bạn có bài học mới</p>}\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-render-null",
        "title": "Render null",
        "description": "Trong React, component có thể return null khi không muốn hiển thị gì. Cách này thường dùng trong component có điều kiện ẩn hoàn toàn.",
        "exampleText": "Nếu popup chưa được mở, component Popup có thể return null để không hiển thị trên giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (!condition) return null;"
          },
          {
            "title": "Ví dụ",
            "code": "function Popup({ isOpen }) {\n  if (!isOpen) return null;\n\n  return <section role=\"dialog\">Nội dung popup</section>;\n}"
          }
        ]
      },
      {
        "id": "react-render-list",
        "title": "Render danh sách",
        "description": "Render danh sách là hiển thị nhiều phần tử từ một array. React thường dùng method map để chuyển từng phần tử dữ liệu thành JSX.",
        "exampleText": "Có thể render danh sách bài học gồm HTML, CSS, JavaScript, ReactJS thành nhiều card kiến thức.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{items.map((item) => (\n  <Element key={item.id}>{item.value}</Element>\n))}",
            "codeTsx": "interface Student {\n  id: number;\n  name: string;\n}\n\nconst students: Student[] = [\n  { id: 1, name: 'An' },\n  { id: 2, name: 'Bình' },\n];\n\nfunction StudentList(): JSX.Element {\n  return (\n    <ul>\n      {students.map((student) => (\n        <li key={student.id}>{student.name}</li>\n      ))}\n    </ul>\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList() {\n  const lessons = [\"HTML\", \"CSS\", \"JavaScript\", \"ReactJS\"];\n\n  return (\n    <ul>\n      {lessons.map((lesson) => (\n        <li key={lesson}>{lesson}</li>\n      ))}\n    </ul>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-map-jsx",
        "title": "Map trong JSX",
        "description": "map dùng để duyệt array và trả về một array JSX mới. Đây là cách phổ biến nhất để render danh sách trong React.",
        "exampleText": "Từ array courses, có thể dùng map để tạo ra nhiều component CourseItem, mỗi component hiển thị một khóa học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{array.map((item) => <Component key={item.id} />)}"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseList({ courses }) {\n  return (\n    <div>\n      {courses.map((course) => (\n        <CourseItem key={course.id} course={course} />\n      ))}\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-key",
        "title": "Key trong React",
        "description": "key là thuộc tính đặc biệt React cần khi render danh sách. Key giúp React nhận biết phần tử nào thay đổi, được thêm hoặc bị xóa để cập nhật giao diện hiệu quả. Key chỉ cần duy nhất giữa các phần tử cùng cấp.",
        "exampleText": "Khi render danh sách bài học, mỗi bài học nên có key riêng như id bài học thay vì dùng index nếu dữ liệu có thể thay đổi thứ tự.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component key={item.id} />"
          },
          {
            "title": "Ví dụ",
            "code": "const lessons = [\n  { id: \"react-props\", title: \"Props\" },\n  { id: \"react-state\", title: \"State\" },\n];\n\nfunction LessonList() {\n  return lessons.map((lesson) => (\n    <article key={lesson.id}>{lesson.title}</article>\n  ));\n}"
          }
        ]
      },
      {
        "id": "react-render-array-object",
        "title": "Render array object",
        "description": "Array object là dạng dữ liệu rất phổ biến trong React. Mỗi object thường đại diện cho một item có nhiều thông tin như title, description, image hoặc id.",
        "exampleText": "Danh sách kiến thức có thể là array object, mỗi object gồm id, title, description, example.",
        "codeBlocks": [
          {
            "title": "Dữ liệu",
            "code": "const knowledgeItems = [\n  { id: 1, title: \"JSX\", description: \"Cú pháp giao diện\" },\n  { id: 2, title: \"Props\", description: \"Truyền dữ liệu\" },\n];"
          },
          {
            "title": "Render",
            "code": "function KnowledgeList() {\n  return (\n    <section>\n      {knowledgeItems.map((item) => (\n        <article key={item.id}>\n          <h2>{item.title}</h2>\n          <p>{item.description}</p>\n        </article>\n      ))}\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-render-component-array",
        "title": "Render component từ array",
        "description": "Thay vì viết toàn bộ JSX trực tiếp trong map, có thể truyền dữ liệu vào component con. Cách này giúp code sạch hơn và component dễ tái sử dụng.",
        "exampleText": "Dùng array kiến thức để render nhiều component KnowledgeCard, mỗi card nhận title, explanation và example qua props.",
        "codeBlocks": [
          {
            "title": "Component con",
            "code": "function KnowledgeCard({ title, explanation, example }) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{explanation}</p>\n      <code>{example}</code>\n    </article>\n  );\n}"
          },
          {
            "title": "Render từ array",
            "code": "function KnowledgeList({ items }) {\n  return items.map((item) => (\n    <KnowledgeCard\n      key={item.id}\n      title={item.title}\n      explanation={item.explanation}\n      example={item.example}\n    />\n  ));\n}"
          }
        ]
      },
      {
        "id": "react-fragment",
        "title": "Fragment",
        "description": "Fragment dùng để bọc nhiều phần tử JSX mà không tạo thêm thẻ HTML thật ngoài DOM. Có thể dùng cú pháp ngắn <>...</> hoặc Fragment đầy đủ khi cần truyền key.",
        "exampleText": "Một component có thể trả về tiêu đề và đoạn mô tả mà không cần bọc thêm một thẻ div không cần thiết.",
        "codeBlocks": [
          {
            "title": "Cú pháp ngắn",
            "code": "<>\n  <ElementA />\n  <ElementB />\n</>"
          },
          {
            "title": "Ví dụ",
            "code": "function Introduction() {\n  return (\n    <>\n      <h2>ReactJS</h2>\n      <p>Thư viện xây dựng giao diện.</p>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-conditional-class-name",
        "title": "Conditional className",
        "description": "Conditional className là cách thay đổi class dựa trên điều kiện. Cách này thường dùng để đổi giao diện khi active, selected, disabled hoặc error.",
        "exampleText": "Mục sidebar đang được chọn có thể thêm class active, còn các mục khác giữ class bình thường.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "className={condition ? \"base active\" : \"base\"}"
          },
          {
            "title": "Ví dụ",
            "code": "function MenuItem({ title, isActive }) {\n  return (\n    <a\n      href=\"#section\"\n      className={`menu-item${isActive ? \" active\" : \"\"}`}\n    >\n      {title}\n    </a>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-fallback-ui",
        "title": "Render fallback UI",
        "description": "Fallback UI là giao diện thay thế khi dữ liệu chưa có, đang tải, bị rỗng hoặc gặp lỗi. Nó giúp người dùng hiểu trạng thái hiện tại thay vì nhìn thấy trang trống.",
        "exampleText": "Nếu danh sách bài học chưa tải xong thì hiển thị “Đang tải...”. Nếu danh sách rỗng thì hiển thị “Chưa có bài học nào”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "if (isLoading) return <LoadingUI />;\nif (hasError) return <ErrorUI />;\nif (items.length === 0) return <EmptyUI />;"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList({ lessons, isLoading, error }) {\n  if (isLoading) return <p>Đang tải...</p>;\n  if (error) return <p>Không tải được bài học.</p>;\n  if (lessons.length === 0) return <p>Chưa có bài học nào.</p>;\n\n  return lessons.map((lesson) => (\n    <LessonCard key={lesson.id} lesson={lesson} />\n  ));\n}"
          }
        ]
      },
      {
        "id": "f8-react-render-list",
        "title": "Render danh sách & Conditional Rendering",
        "description": "Để render một mảng trong JSX, dùng .map() để tạo mảng JSX mới. Mỗi phần tử cần có prop key duy nhất. Conditional rendering dùng toán tử && hoặc ternary (? :) để hiển thị có điều kiện.",
        "exampleText": "Từ react01/App.jsx: Render danh sách users với .map(), dùng && để hiển thị loading, ternary cho login/logout.",
        "codeBlocks": [
          {
            "title": "Render list",
            "code": "const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];\n\n{users.map((item) => (\n  <h3 key={item.id}>{item.name}</h3>\n))}"
          },
          {
            "title": "Conditional",
            "code": "{loading && <h2>Đang tải...</h2>}\n\n{isLogin ? (\n  <h2>Chào mừng bạn</h2>\n) : (\n  <h3>Vui lòng đăng nhập</h3>\n)}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Event handling",
    "cards": [
      {
        "id": "react-events",
        "title": "Event trong React",
        "description": "Event trong React dùng để xử lý hành động của người dùng như click, nhập input, submit form, đưa chuột hoặc nhấn phím. Tên event trong JSX viết theo camelCase.",
        "exampleText": "Khi người dùng click vào button “Xem thêm”, React có thể hiển thị thêm nội dung bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element onEventName={eventHandler} />"
          },
          {
            "title": "Ví dụ",
            "code": "function Lesson() {\n  const handleShowMore = () => {\n    console.log(\"Hiển thị thêm nội dung\");\n  };\n\n  return <button onClick={handleShowMore}>Xem thêm</button>;\n}"
          }
        ]
      },
      {
        "id": "react-on-click",
        "title": "onClick",
        "description": "onClick dùng để xử lý sự kiện khi người dùng click vào một phần tử. Đây là event rất phổ biến khi làm button, menu, tab, modal hoặc card.",
        "exampleText": "Click vào button “HTML” trên trang tổng thì chuyển sang page HTML hoặc đổi nội dung đang hiển thị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button onClick={handleClick}>Nội dung</button>",
            "codeTsx": "function ClickButton(): JSX.Element {\n  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {\n    console.log('Clicked!', e.currentTarget);\n  };\n  return <button onClick={handleClick}>Bấm tôi</button>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function TopicButton({ onNavigate }) {\n  return (\n    <button type=\"button\" onClick={() => onNavigate(\"html\")}>\n      HTML\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-on-change",
        "title": "onChange",
        "description": "onChange dùng để xử lý khi giá trị của input, textarea hoặc select thay đổi. Event này thường dùng để đồng bộ giá trị form với state trong React.",
        "exampleText": "Khi người dùng nhập tên bài học vào ô input, React có thể cập nhật giá trị đó vào state.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input onChange={handleChange} />",
            "codeTsx": "import { useState } from 'react';\n\nfunction NameInput(): JSX.Element {\n  const [name, setName] = useState<string>('');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {\n    setName(e.target.value);\n  };\n\n  return <input value={name} onChange={handleChange} />;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonInput() {\n  const [lessonName, setLessonName] = useState(\"\");\n\n  return (\n    <input\n      value={lessonName}\n      onChange={(event) => setLessonName(event.target.value)}\n    />\n  );\n}"
          }
        ]
      },
      {
        "id": "react-on-submit",
        "title": "onSubmit",
        "description": "onSubmit dùng để xử lý khi người dùng gửi form. Nó thường được đặt trên thẻ form và kết hợp preventDefault để chặn reload trang khi tự xử lý dữ liệu bằng JavaScript.",
        "exampleText": "Khi submit form thêm kiến thức mới, React lấy dữ liệu trong input rồi thêm vào danh sách bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form onSubmit={handleSubmit}>...</form>",
            "codeTsx": "const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {\n  e.preventDefault();\n  console.log('Form submitted');\n};\n\n<form onSubmit={handleSubmit}>\n  <button type=\"submit\">Gửi</button>\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonForm() {\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    console.log(\"Thêm bài học\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"lessonName\" />\n      <button type=\"submit\">Thêm</button>\n    </form>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-on-mouse-enter",
        "title": "onMouseEnter",
        "description": "onMouseEnter xảy ra khi con trỏ đi vào phần tử. Nó thường dùng để tạo tương tác hover phức tạp hoặc hiển thị nội dung phụ cần quản lý bằng state.",
        "exampleText": "Khi rê chuột vào một card kiến thức, có thể hiển thị thêm nút “Xem chi tiết”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element onMouseEnter={handleMouseEnter} />"
          },
          {
            "title": "Ví dụ",
            "code": "<article onMouseEnter={() => setHovered(true)}>\n  <h2>React Events</h2>\n  {hovered && <button>Xem chi tiết</button>}\n</article>"
          }
        ]
      },
      {
        "id": "react-on-mouse-leave",
        "title": "onMouseLeave",
        "description": "onMouseLeave xảy ra khi con trỏ rời khỏi phần tử. Nó thường dùng cùng onMouseEnter để ẩn nội dung phụ hoặc đưa giao diện về trạng thái ban đầu.",
        "exampleText": "Khi chuột rời khỏi card kiến thức, nút “Xem chi tiết” có thể được ẩn đi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Element onMouseLeave={handleMouseLeave} />"
          },
          {
            "title": "Ví dụ",
            "code": "<article\n  onMouseEnter={() => setHovered(true)}\n  onMouseLeave={() => setHovered(false)}\n>\n  {hovered && <button>Xem chi tiết</button>}\n</article>"
          }
        ]
      },
      {
        "id": "react-pass-function-event",
        "title": "Truyền function vào event",
        "description": "Trong React, prop event nhận một function xử lý. Khi sự kiện xảy ra, React mới gọi function đó và truyền event object vào nếu cần.",
        "exampleText": "Có thể tạo function handleClick, sau đó truyền function này vào onClick của button.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button onClick={handleClick}>Click</button>"
          },
          {
            "title": "Ví dụ",
            "code": "function SaveButton() {\n  function handleClick() {\n    console.log(\"Đã lưu\");\n  }\n\n  return <button onClick={handleClick}>Lưu</button>;\n}"
          }
        ]
      },
      {
        "id": "react-do-not-call-handler-render",
        "title": "Không gọi function trực tiếp khi render",
        "description": "Khi truyền function vào event, không nên gọi function trực tiếp trong JSX nếu không muốn nó chạy ngay lúc component render. Hãy truyền tham chiếu function hoặc bọc lời gọi có tham số trong arrow function.",
        "exampleText": "Nếu viết kiểu gọi trực tiếp, function có thể chạy ngay khi component render, không cần người dùng click.",
        "codeBlocks": [
          {
            "title": "Sai",
            "code": "<button onClick={handleClick()}>Click</button>\n// handleClick chạy ngay khi render."
          },
          {
            "title": "Đúng",
            "code": "<button onClick={handleClick}>Click</button>\n<button onClick={() => handleSelect(courseId)}>Chọn</button>"
          }
        ]
      },
      {
        "id": "react-pass-event-argument",
        "title": "Truyền tham số vào event",
        "description": "Khi cần truyền tham số vào event handler, thường dùng arrow function để bọc lời gọi. Cách này giúp function chỉ chạy khi sự kiện xảy ra.",
        "exampleText": "Khi click vào một bài học trong danh sách, có thể truyền id của bài học đó vào function xử lý.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "onClick={() => handler(argument)}"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonItem({ lesson, onSelect }) {\n  return (\n    <button onClick={() => onSelect(lesson.id)}>\n      {lesson.title}\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-event-object",
        "title": "Event object",
        "description": "Event object chứa thông tin về sự kiện vừa xảy ra, như phần tử hiện tại, giá trị input, phím được nhấn hoặc tọa độ con trỏ. Trong React, handler nhận event làm tham số.",
        "exampleText": "Trong input, có thể lấy giá trị người dùng nhập thông qua event object để cập nhật state.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function handler(event) {\n  // event.currentTarget\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function SearchInput() {\n  const [keyword, setKeyword] = useState(\"\");\n\n  const handleChange = (event) => {\n    setKeyword(event.currentTarget.value);\n  };\n\n  return <input value={keyword} onChange={handleChange} />;\n}"
          }
        ]
      },
      {
        "id": "react-prevent-default",
        "title": "Prevent default",
        "description": "preventDefault dùng để chặn hành vi mặc định của trình duyệt. Trong React, nó thường dùng khi submit form để trang không reload hoặc khi cần tự kiểm soát hành vi của link.",
        "exampleText": "Khi submit form thêm bài học, preventDefault giúp giữ nguyên trang và xử lý dữ liệu ngay trong React.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "event.preventDefault();"
          },
          {
            "title": "Ví dụ",
            "code": "function handleSubmit(event) {\n  event.preventDefault();\n  addLesson();\n}\n\nreturn <form onSubmit={handleSubmit}>...</form>;"
          }
        ]
      },
      {
        "id": "react-stop-propagation",
        "title": "Stop propagation",
        "description": "stopPropagation dùng để chặn sự kiện tiếp tục lan lên các phần tử cha. Cách này hữu ích khi phần tử con và phần tử cha đều xử lý cùng một loại event.",
        "exampleText": "Click vào nút xóa trong card không làm chạy sự kiện click của cả card bên ngoài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "event.stopPropagation();"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonCard({ lesson, onOpen, onDelete }) {\n  return (\n    <article onClick={() => onOpen(lesson.id)}>\n      <h2>{lesson.title}</h2>\n      <button\n        onClick={(event) => {\n          event.stopPropagation();\n          onDelete(lesson.id);\n        }}\n      >\n        Xóa\n      </button>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-event-handler",
        "title": "Event handler",
        "description": "Event handler là function dùng để xử lý một sự kiện cụ thể. Tên handler thường bắt đầu bằng handle để thể hiện đây là logic phản ứng với event.",
        "exampleText": "Có thể đặt tên function là handleAddLesson, handleDeleteLesson hoặc handleSubmitForm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function handleEventName(event) {\n  statements;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function handleAddLesson() {\n  console.log(\"Thêm bài học\");\n}\n\nfunction handleDeleteLesson(lessonId) {\n  console.log(\"Xóa\", lessonId);\n}"
          }
        ]
      },
      {
        "id": "react-inline-event-handler",
        "title": "Inline event handler",
        "description": "Inline event handler là viết function xử lý trực tiếp trong JSX. Cách này tiện cho logic ngắn, nhưng nếu logic dài hoặc cần tái sử dụng thì nên tách ra function riêng.",
        "exampleText": "Một button chỉ đổi trạng thái đơn giản có thể viết xử lý trực tiếp ngay trong JSX.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<button onClick={() => shortAction()}>Click</button>"
          },
          {
            "title": "Ví dụ",
            "code": "function ToggleButton() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <button onClick={() => setIsOpen((current) => !current)}>\n      {isOpen ? \"Đóng\" : \"Mở\"}\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-extract-event-handler",
        "title": "Tách event handler ra function riêng",
        "description": "Khi logic xử lý dài hoặc dùng lại nhiều lần, nên tách event handler ra function riêng để JSX dễ đọc, logic dễ kiểm thử và code dễ bảo trì hơn.",
        "exampleText": "Logic kiểm tra form, thêm dữ liệu và reset input nên tách thành function handleSubmit.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function handleSubmit(event) {\n  event.preventDefault();\n  // Logic xử lý\n}\n\nreturn <form onSubmit={handleSubmit}>...</form>;"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonForm() {\n  const [title, setTitle] = useState(\"\");\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    if (!title.trim()) return;\n    addLesson(title.trim());\n    setTitle(\"\");\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={title} onChange={(event) => setTitle(event.target.value)} />\n      <button type=\"submit\">Thêm</button>\n    </form>\n  );\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Props & Children",
    "cards": [
      {
        "id": "react-props",
        "title": "Props",
        "description": "Props là dữ liệu được truyền từ component cha xuống component con. Props giúp component con nhận dữ liệu động và hiển thị nội dung khác nhau tùy theo dữ liệu được truyền vào. Component con không nên sửa trực tiếp props.",
        "exampleText": "Component KnowledgeCard có thể nhận props như tiêu đề, giải thích và ví dụ để hiển thị từng kiến thức khác nhau.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName(props) {\n  return <div>{props.value}</div>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeCard({ title, description, example }) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n      <code>{example}</code>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-pass-props-parent-child",
        "title": "Truyền props từ cha xuống con",
        "description": "Component cha truyền dữ liệu cho component con thông qua các thuộc tính đặt trên component con. Dữ liệu có thể là chuỗi, số, boolean, array, object, React element hoặc function.",
        "exampleText": "Component ReactPage có thể truyền title là “Props” và description là “Dữ liệu truyền từ cha xuống con” cho component KnowledgeCard.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<ChildComponent propName={value} />",
            "codeTsx": "interface GreetingProps {\n  name: string;\n}\n\nfunction Greeting({ name }: GreetingProps): JSX.Element {\n  return <h2>Xin chào, {name}!</h2>;\n}\n\n<Greeting name=\"An\" />"
          },
          {
            "title": "Ví dụ",
            "code": "function ReactPage() {\n  return (\n    <KnowledgeCard\n      title=\"Props\"\n      description=\"Dữ liệu truyền từ cha xuống con\"\n    />\n  );\n}"
          }
        ]
      },
      {
        "id": "react-receive-props-child",
        "title": "Nhận props trong component con",
        "description": "Component con nhận props thông qua tham số của function component. Sau khi nhận, component có thể dùng dữ liệu đó để render giao diện hoặc truyền tiếp xuống component khác.",
        "exampleText": "Component KnowledgeCard nhận props rồi hiển thị title ở phần tiêu đề và description ở phần nội dung.",
        "codeBlocks": [
          {
            "title": "Nhận object props",
            "code": "function ChildComponent(props) {\n  return <h2>{props.title}</h2>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeCard(props) {\n  return (\n    <article>\n      <h2>{props.title}</h2>\n      <p>{props.description}</p>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-destructuring-props",
        "title": "Destructuring props",
        "description": "Destructuring props là cách tách trực tiếp các giá trị trong object props thành biến riêng. Có thể destructuring ngay ở tham số function hoặc bên trong thân component.",
        "exampleText": "Thay vì dùng props.title nhiều lần, có thể tách ra biến title rồi dùng trực tiếp trong JSX.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName({ propA, propB }) {\n  ...\n}",
            "codeTsx": "interface UserCardProps {\n  name: string;\n  age: number;\n  isAdmin?: boolean;\n}\n\nfunction UserCard({ name, age, isAdmin = false }: UserCardProps): JSX.Element {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>Tuổi: {age}</p>\n      {isAdmin && <span>Admin</span>}\n    </div>\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeCard({ title, description }) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-string-prop",
        "title": "Props dạng string",
        "description": "Props dạng string là dữ liệu chuỗi được truyền vào component. Chuỗi cố định có thể viết trực tiếp trong dấu nháy; chuỗi nằm trong biến được truyền qua ngoặc nhọn.",
        "exampleText": "Truyền tên khóa học “ReactJS” vào component CourseItem để hiển thị tên khóa học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component text=\"Chuỗi cố định\" />\n<Component text={stringVariable} />"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseItem({ courseName }) {\n  return <h2>{courseName}</h2>;\n}\n\n<CourseItem courseName=\"ReactJS\" />;"
          }
        ]
      },
      {
        "id": "react-number-prop",
        "title": "Props dạng number",
        "description": "Props dạng number dùng để truyền dữ liệu số vào component. Khi truyền số trong JSX, cần đặt giá trị hoặc biểu thức trong cặp ngoặc nhọn {}.",
        "exampleText": "Truyền số lượng bài học, giá khóa học hoặc phần trăm tiến độ học vào component.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component count={10} />"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseProgress({ lessonCount, progress }) {\n  return <p>{lessonCount} bài học — {progress}%</p>;\n}\n\n<CourseProgress lessonCount={24} progress={65} />;"
          }
        ]
      },
      {
        "id": "react-boolean-prop",
        "title": "Props dạng boolean",
        "description": "Props dạng boolean dùng để biểu thị trạng thái đúng hoặc sai. Nó thường dùng cho active, disabled, selected, loading hoặc error. Viết tên prop không kèm giá trị tương đương truyền true.",
        "exampleText": "Truyền prop isActive cho một item sidebar để biết item đó có đang được chọn hay không.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component isActive={true} />\n<Component isActive />"
          },
          {
            "title": "Ví dụ",
            "code": "function SidebarItem({ title, isActive }) {\n  return (\n    <a className={isActive ? \"item active\" : \"item\"}>\n      {title}\n    </a>\n  );\n}\n\n<SidebarItem title=\"Props\" isActive />;"
          }
        ]
      },
      {
        "id": "react-array-prop",
        "title": "Props dạng array",
        "description": "Props dạng array dùng để truyền danh sách dữ liệu vào component. Component con có thể dùng array đó để lọc, biến đổi hoặc render danh sách bằng map.",
        "exampleText": "Truyền danh sách bài học vào component LessonList để hiển thị nhiều bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component items={arrayValue} />"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList({ lessons }) {\n  return (\n    <ul>\n      {lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}\n    </ul>\n  );\n}\n\n<LessonList lessons={[\"JSX\", \"Props\", \"State\"]} />;"
          }
        ]
      },
      {
        "id": "react-object-prop",
        "title": "Props dạng object",
        "description": "Props dạng object dùng khi một dữ liệu có nhiều thông tin liên quan. Object giúp gom các thông tin đó thành một khối dữ liệu và truyền qua một prop.",
        "exampleText": "Truyền một object course gồm id, title, description, image vào component CourseCard.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component item={objectValue} />"
          },
          {
            "title": "Ví dụ",
            "code": "const course = {\n  id: 1,\n  title: \"ReactJS\",\n  description: \"React cơ bản\",\n  image: \"/images/react.png\",\n};\n\nfunction CourseCard({ course }) {\n  return <h2>{course.title}</h2>;\n}\n\n<CourseCard course={course} />;"
          }
        ]
      },
      {
        "id": "react-function-prop",
        "title": "Props dạng function",
        "description": "Props dạng function dùng để truyền hành động từ component cha xuống component con. Component con gọi function đó khi xảy ra sự kiện và có thể truyền dữ liệu ngược lên qua đối số.",
        "exampleText": "Component cha truyền function onDelete xuống component LessonItem. Khi bấm nút xóa trong LessonItem, component con gọi onDelete.",
        "codeBlocks": [
          {
            "title": "Component con",
            "code": "function LessonItem({ lesson, onDelete }) {\n  return (\n    <button onClick={() => onDelete(lesson.id)}>\n      Xóa {lesson.title}\n    </button>\n  );\n}"
          },
          {
            "title": "Component cha",
            "code": "function LessonList() {\n  function handleDelete(lessonId) {\n    console.log(\"Xóa bài học\", lessonId);\n  }\n\n  return <LessonItem lesson={lesson} onDelete={handleDelete} />;\n}"
          }
        ]
      },
      {
        "id": "react-default-props",
        "title": "Default props",
        "description": "Default props là giá trị được dùng khi component cha không truyền prop hoặc truyền undefined. Với function component hiện đại, thường đặt giá trị mặc định ngay khi destructuring tham số.",
        "exampleText": "Nếu không truyền title cho KnowledgeCard, component có thể hiển thị mặc định là “Chưa có tiêu đề”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName({ propName = defaultValue }) {\n  ...\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeCard({\n  title = \"Chưa có tiêu đề\",\n  description = \"Chưa có mô tả\",\n}) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-children",
        "title": "Children",
        "description": "Children là nội dung nằm giữa thẻ mở và thẻ đóng của component. Children giúp component linh hoạt vì có thể nhận text, React element, danh sách element hoặc component khác.",
        "exampleText": "Component Card có thể nhận children là tiêu đề, đoạn văn, button hoặc một component khác.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<Component>\n  Nội dung children\n</Component>",
            "codeTsx": "interface CardProps {\n  children: React.ReactNode;\n}\n\nfunction Card({ children }: CardProps): JSX.Element {\n  return <div className=\"card\">{children}</div>;\n}\n\n<Card>\n  <h2>Tiêu đề</h2>\n  <p>Nội dung bên trong Card</p>\n</Card>"
          },
          {
            "title": "Ví dụ",
            "code": "<Card>\n  <h2>Props & Children</h2>\n  <p>Nội dung của card.</p>\n  <button>Xem thêm</button>\n</Card>"
          }
        ]
      },
      {
        "id": "react-render-children",
        "title": "Render children",
        "description": "Component con nhận children qua props rồi đặt {children} ở vị trí muốn hiển thị. Component cha quyết định nội dung truyền vào, component con quyết định khung và vị trí hiển thị.",
        "exampleText": "Component Modal có thể render children ở phần nội dung chính của hộp thoại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function ComponentName({ children }) {\n  return <div>{children}</div>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function Modal({ title, children }) {\n  return (\n    <section role=\"dialog\">\n      <h2>{title}</h2>\n      <div className=\"modal-content\">{children}</div>\n    </section>\n  );\n}\n\n<Modal title=\"Xác nhận\">\n  <p>Bạn có muốn xóa bài học?</p>\n</Modal>;"
          }
        ]
      },
      {
        "id": "react-reusable-component",
        "title": "Component tái sử dụng",
        "description": "Props và children giúp một component có thể tái sử dụng ở nhiều nơi. Cùng một component nhưng truyền dữ liệu hoặc nội dung khác nhau sẽ tạo ra giao diện phù hợp từng trường hợp.",
        "exampleText": "Một component Button có thể dùng cho “Lưu”, “Xóa”, “Cập nhật”, “Đăng nhập” bằng cách truyền text và type khác nhau.",
        "codeBlocks": [
          {
            "title": "Component",
            "code": "function Button({ children, variant = \"primary\", ...buttonProps }) {\n  return (\n    <button className={`button button--${variant}`} {...buttonProps}>\n      {children}\n    </button>\n  );\n}"
          },
          {
            "title": "Tái sử dụng",
            "code": "<Button type=\"submit\">Lưu</Button>\n<Button type=\"button\" variant=\"danger\">Xóa</Button>\n<Button type=\"button\" disabled>Đang xử lý</Button>"
          }
        ]
      },
      {
        "id": "react-props-drilling",
        "title": "Props drilling",
        "description": "Props drilling là tình trạng phải truyền props qua nhiều component trung gian chỉ để đưa dữ liệu đến component ở sâu bên trong. Khi cấu trúc lớn, nó có thể làm code dài và khó quản lý; có thể cân nhắc composition, Context hoặc công cụ quản lý state phù hợp.",
        "exampleText": "App truyền user xuống Layout, Layout truyền xuống Sidebar, Sidebar truyền tiếp xuống UserInfo dù Layout và Sidebar không trực tiếp dùng user.",
        "codeBlocks": [
          {
            "title": "Ví dụ props drilling",
            "code": "function App() {\n  const user = { name: \"Tú\" };\n  return <Layout user={user} />;\n}\n\nfunction Layout({ user }) {\n  return <Sidebar user={user} />;\n}\n\nfunction Sidebar({ user }) {\n  return <UserInfo user={user} />;\n}"
          },
          {
            "title": "Hướng xử lý",
            "code": "// 1. Đưa component cần dữ liệu lên gần nguồn hơn\n// 2. Dùng composition/children\n// 3. Dùng Context khi dữ liệu thật sự dùng ở nhiều tầng"
          }
        ]
      },
      {
        "id": "f8-react-props",
        "title": "Props, Render Props, Children",
        "description": "Props dùng để truyền dữ liệu từ component cha xuống con. Render props là kỹ thuật truyền một function trả về React element. Children props là nội dung được truyền vào bên trong cặp thẻ component. Dùng spread operator {...info} để truyền nhiều props cùng lúc.",
        "exampleText": "Từ react02/App01.jsx: Truyền dữ liệu, hàm xử lý từ component cha sang con.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Truyền props thông thường + spread\n<User name={name} email={email} {...info} />\n\n// Children props\n<Users onGetData={handleGetData}>\n  <h2>Users</h2>\n</Users>",
            "codeTsx": "interface CardProps {\n  title: string;\n  content: string;\n  footer?: React.ReactNode;\n}\n\nfunction Card({ title, content, footer }: CardProps): JSX.Element {\n  return (\n    <div className=\"card\">\n      <h3>{title}</h3>\n      <p>{content}</p>\n      {footer && <div>{footer}</div>}\n    </div>\n  );\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "State & useState",
    "cards": [
      {
        "id": "react-state",
        "title": "State",
        "description": "State là dữ liệu nội bộ của component. Khi state được cập nhật, React lên lịch render lại component để giao diện phản ánh dữ liệu mới.",
        "exampleText": "Một component có thể có state lưu trạng thái mở hoặc đóng của sidebar.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [state, setState] = useState(initialValue);"
          },
          {
            "title": "Ví dụ",
            "code": "function Sidebar() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <aside className={isOpen ? \"sidebar open\" : \"sidebar\"}>\n      <button onClick={() => setIsOpen(true)}>Mở sidebar</button>\n    </aside>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-use-state",
        "title": "useState",
        "description": "useState là Hook dùng để tạo state trong function component. Nó trả về một cặp gồm giá trị state hiện tại và function cập nhật state. Hook phải được gọi ở cấp cao nhất của component hoặc custom Hook.",
        "exampleText": "Có thể dùng useState để lưu giá trị ô input, trạng thái đăng nhập hoặc danh sách bài học.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { useState } from \"react\";\n\nconst [state, setState] = useState(initialValue);",
            "codeTsx": "const [count, setCount] = useState<number>(0);\nconst [name, setName] = useState<string>('');\nconst [user, setUser] = useState<User | null>(null);\nconst [items, setItems] = useState<string[]>([]);"
          },
          {
            "title": "Ví dụ",
            "code": "import { useState } from \"react\";\n\nfunction SearchBox() {\n  const [keyword, setKeyword] = useState(\"\");\n  return <input value={keyword} onChange={(event) => setKeyword(event.target.value)} />;\n}",
            "codeTsx": "import { useState } from 'react';\n\nfunction Counter(): JSX.Element {\n  const [count, setCount] = useState<number>(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Tăng</button>\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-initial-state",
        "title": "Giá trị state ban đầu",
        "description": "Khi tạo state, cần truyền giá trị ban đầu. Giá trị này có thể là string, number, boolean, array, object hoặc null. Với phép tính tốn kém, có thể truyền initializer function để chỉ tính lúc khởi tạo.",
        "exampleText": "State lưu trạng thái menu có thể có giá trị ban đầu là false, nghĩa là menu đang đóng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useState(initialValue);\nuseState(() => createInitialValue());"
          },
          {
            "title": "Ví dụ",
            "code": "const [isMenuOpen, setIsMenuOpen] = useState(false);\nconst [lessonName, setLessonName] = useState(\"\");\nconst [lessons, setLessons] = useState([]);\nconst [selectedLesson, setSelectedLesson] = useState(null);"
          }
        ]
      },
      {
        "id": "react-update-state",
        "title": "Cập nhật state",
        "description": "Muốn thay đổi state, không gán trực tiếp vào biến state mà gọi function cập nhật do useState trả về. State mới có hiệu lực từ lần render tiếp theo.",
        "exampleText": "Khi người dùng click button “Mở menu”, function cập nhật state sẽ đổi trạng thái menu từ đóng sang mở.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "setState(newValue);"
          },
          {
            "title": "Ví dụ",
            "code": "function Menu() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <button onClick={() => setIsOpen(true)}>\n      {isOpen ? \"Menu đang mở\" : \"Mở menu\"}\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-re-render",
        "title": "Re-render",
        "description": "Re-render là quá trình React gọi lại component để tính JSX mới khi state, props hoặc context thay đổi. React sau đó cập nhật những phần DOM cần thiết.",
        "exampleText": "Khi state số lượng sản phẩm tăng từ 1 lên 2, React re-render để hiển thị số lượng mới trên giao diện.",
        "codeBlocks": [
          {
            "title": "Luồng hoạt động",
            "code": "Event → setState → React render lại → cập nhật DOM"
          },
          {
            "title": "Ví dụ",
            "code": "function Quantity() {\n  const [quantity, setQuantity] = useState(1);\n\n  return (\n    <button onClick={() => setQuantity((current) => current + 1)}>\n      Số lượng: {quantity}\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-string-state",
        "title": "State dạng string",
        "description": "State dạng string thường dùng để lưu nội dung text như tên người dùng, giá trị input, tiêu đề bài học hoặc từ khóa tìm kiếm.",
        "exampleText": "Ô tìm kiếm trong website kiến thức có thể dùng state string để lưu từ khóa người dùng đang nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [text, setText] = useState(\"\");"
          },
          {
            "title": "Ví dụ",
            "code": "function SearchInput() {\n  const [keyword, setKeyword] = useState(\"\");\n\n  return (\n    <>\n      <input value={keyword} onChange={(event) => setKeyword(event.target.value)} />\n      <p>Từ khóa: {keyword}</p>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-number-state",
        "title": "State dạng number",
        "description": "State dạng number dùng để lưu dữ liệu số như số lượng, điểm số, giá tiền, index tab đang chọn hoặc số lượt click.",
        "exampleText": "Một button counter có thể dùng state number để tăng số lần người dùng bấm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [count, setCount] = useState(0);"
          },
          {
            "title": "Ví dụ",
            "code": "function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount((current) => current + 1)}>\n      Đã bấm {count} lần\n    </button>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-boolean-state",
        "title": "State dạng boolean",
        "description": "State dạng boolean dùng để lưu trạng thái đúng hoặc sai. Nó thường dùng cho giao diện bật/tắt, mở/đóng, hiển thị/ẩn hoặc chọn/bỏ chọn.",
        "exampleText": "Có thể dùng state boolean để kiểm soát modal đang mở hay đóng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [isOpen, setIsOpen] = useState(false);"
          },
          {
            "title": "Ví dụ",
            "code": "function ModalExample() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Mở modal</button>\n      {isOpen && <Modal onClose={() => setIsOpen(false)} />}\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-array-state",
        "title": "State dạng array",
        "description": "State dạng array dùng để lưu danh sách dữ liệu. Khi cập nhật, cần tạo array mới bằng spread, map, filter hoặc method không làm thay đổi array cũ.",
        "exampleText": "Danh sách bài học ReactJS có thể được lưu trong state array để thêm, xóa hoặc render ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [items, setItems] = useState([]);\nsetItems((current) => [...current, newItem]);"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList() {\n  const [lessons, setLessons] = useState([\"JSX\", \"Props\"]);\n\n  function addStateLesson() {\n    setLessons((current) => [...current, \"State\"]);\n  }\n\n  return <button onClick={addStateLesson}>{lessons.join(\", \")}</button>;\n}"
          }
        ]
      },
      {
        "id": "react-object-state",
        "title": "State dạng object",
        "description": "State dạng object dùng để lưu dữ liệu có nhiều thuộc tính liên quan. Khi cập nhật một thuộc tính, nên tạo object mới và sao chép các thuộc tính cũ bằng spread.",
        "exampleText": "Form đăng ký có thể dùng object state gồm name, email, password và phone.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [form, setForm] = useState(initialObject);\nsetForm((current) => ({ ...current, key: newValue }));"
          },
          {
            "title": "Ví dụ",
            "code": "function RegisterForm() {\n  const [form, setForm] = useState({\n    name: \"\",\n    email: \"\",\n    password: \"\",\n    phone: \"\",\n  });\n\n  function updateEmail(email) {\n    setForm((current) => ({ ...current, email }));\n  }\n}"
          }
        ]
      },
      {
        "id": "react-functional-state-update",
        "title": "Cập nhật state dựa vào state cũ",
        "description": "Khi state mới phụ thuộc vào state trước đó, nên truyền updater function vào function cập nhật. React sẽ đưa giá trị mới nhất vào updater, giúp nhiều lần cập nhật liên tiếp cho kết quả đúng.",
        "exampleText": "Khi tăng counter liên tục, nên cập nhật dựa trên giá trị counter trước đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "setState((previousState) => nextState);"
          },
          {
            "title": "Ví dụ",
            "code": "function Counter() {\n  const [count, setCount] = useState(0);\n\n  function increaseThreeTimes() {\n    setCount((current) => current + 1);\n    setCount((current) => current + 1);\n    setCount((current) => current + 1);\n  }\n\n  return <button onClick={increaseThreeTimes}>{count}</button>;\n}"
          }
        ]
      },
      {
        "id": "react-do-not-mutate-state",
        "title": "Không sửa state trực tiếp",
        "description": "Không nên sửa trực tiếp array hoặc object trong state vì dữ liệu state của lần render hiện tại phải được xem là bất biến. Hãy tạo dữ liệu mới rồi truyền cho setter để React nhận biết thay đổi.",
        "exampleText": "Khi thêm bài học vào danh sách, nên tạo array mới gồm các bài học cũ và bài học mới, thay vì push trực tiếp vào array cũ.",
        "codeBlocks": [
          {
            "title": "Sai",
            "code": "lessons.push(newLesson);\nsetLessons(lessons);"
          },
          {
            "title": "Đúng",
            "code": "setLessons((currentLessons) => [\n  ...currentLessons,\n  newLesson,\n]);\n\nsetUser((currentUser) => ({\n  ...currentUser,\n  email: newEmail,\n}));"
          }
        ]
      },
      {
        "id": "react-lifting-state-up",
        "title": "State lifting",
        "description": "State lifting là đưa state lên component cha chung gần nhất khi nhiều component cần đọc hoặc cập nhật cùng một dữ liệu. Component cha giữ nguồn dữ liệu duy nhất và truyền state cùng handler xuống qua props.",
        "exampleText": "Nếu Sidebar cần biết mục đang chọn và Content cũng cần hiển thị nội dung theo mục đang chọn, state active có thể đặt ở component cha.",
        "codeBlocks": [
          {
            "title": "Component cha",
            "code": "function KnowledgePage() {\n  const [activeId, setActiveId] = useState(\"jsx\");\n\n  return (\n    <>\n      <Sidebar activeId={activeId} onSelect={setActiveId} />\n      <Content activeId={activeId} />\n    </>\n  );\n}"
          },
          {
            "title": "Luồng dữ liệu",
            "code": "KnowledgePage state\n├── Sidebar: đọc activeId, gọi onSelect\n└── Content: đọc activeId"
          }
        ]
      },
      {
        "id": "react-local-state",
        "title": "State local",
        "description": "State local là state chỉ dùng trong một component hoặc một nhánh nhỏ. Nếu dữ liệu không cần chia sẻ, nên giữ state ở component gần nơi sử dụng nhất để tránh làm component cha phức tạp.",
        "exampleText": "State mở/đóng của một dropdown riêng có thể đặt trực tiếp trong component Dropdown.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function Component() {\n  const [localState, setLocalState] = useState(initialValue);\n  ...\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function Dropdown() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsOpen((current) => !current)}>Menu</button>\n      {isOpen && <DropdownMenu />}\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-ui-state",
        "title": "State dùng cho UI",
        "description": "State thường dùng để điều khiển giao diện như active tab, loading, error, modal, dropdown, sidebar hoặc form input. Chỉ nên lưu dữ liệu cần thiết; giá trị có thể tính từ props/state khác thường không cần state riêng.",
        "exampleText": "Khi đang gọi API, có thể dùng state loading để hiển thị dòng “Đang tải dữ liệu...”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [isLoading, setIsLoading] = useState(false);\nconst [error, setError] = useState(null);"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseSection() {\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  if (isLoading) return <p>Đang tải dữ liệu...</p>;\n  if (error) return <p>Không tải được dữ liệu.</p>;\n  return <CourseList />;\n}"
          }
        ]
      },
      {
        "id": "f8-react-state",
        "title": "State & Hooks",
        "description": "State thể hiện dữ liệu của component. Khi state thay đổi, component re-render. State không nên thay đổi trực tiếp mà qua hàm setState. Hàm setState bất đồng bộ. Hook là hàm đặc biệt bắt đầu bằng từ khóa 'use', chỉ gọi trong functional component hoặc hook khác.",
        "exampleText": "Có 2 loại hook: Built-in (có sẵn) và Custom Hook (do lập trình viên định nghĩa). Có 2 cách dùng State: Class Component (thuộc tính state) và Functional Component (useState, useReducer).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const [count, setCount] = React.useState(0);\nconst handleIncrement = () => setCount(count + 1);\n// Callback form (an toàn hơn khi phụ thuộc state trước)\nconst handleDecrement = () => setCount(prev => prev - 1);",
            "codeTsx": "import { useState } from 'react';\n\ninterface Todo {\n  id: number;\n  text: string;\n  done: boolean;\n}\n\nfunction TodoApp(): JSX.Element {\n  const [todos, setTodos] = useState<Todo[]>([]);\n  const [input, setInput] = useState<string>('');\n\n  const addTodo = (): void => {\n    setTodos((prev) => [\n      ...prev,\n      { id: Date.now(), text: input, done: false },\n    ]);\n    setInput('');\n  };\n\n  return <div>...</div>;\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Form trong React",
    "cards": [
      {
        "id": "react-form",
        "title": "Form trong React",
        "description": "Form trong React dùng để thu thập dữ liệu người dùng nhập vào. Khác với HTML thuần, form React thường kết hợp state, event handler và validation để quản lý dữ liệu trước khi xử lý hoặc gửi API.",
        "exampleText": "Một form thêm kiến thức mới có thể gồm tiêu đề, nhóm kiến thức, phần giải thích và ví dụ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function FormComponent() {\n  const [form, setForm] = useState(initialForm);\n  return <form onSubmit={handleSubmit}>...</form>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function KnowledgeForm() {\n  const [title, setTitle] = useState(\"\");\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    console.log({ title });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={title} onChange={(event) => setTitle(event.target.value)} />\n      <button type=\"submit\">Lưu</button>\n    </form>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-controlled-input",
        "title": "Controlled input",
        "description": "Controlled input là input có giá trị được quản lý bởi state. Prop value lấy dữ liệu từ state, còn onChange cập nhật state mỗi khi người dùng nhập.",
        "exampleText": "Ô nhập tên bài học có thể lấy value từ state title và cập nhật lại state khi người dùng gõ.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input value={state} onChange={(event) => setState(event.target.value)} />",
            "codeTsx": "import { useState } from 'react';\n\nfunction TextInput(): JSX.Element {\n  const [value, setValue] = useState<string>('');\n  return (\n    <input\n      type=\"text\"\n      value={value}\n      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}\n    />\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function TitleInput() {\n  const [title, setTitle] = useState(\"\");\n\n  return (\n    <input\n      value={title}\n      onChange={(event) => setTitle(event.target.value)}\n      placeholder=\"Tên bài học\"\n    />\n  );\n}"
          }
        ]
      },
      {
        "id": "react-form-text-input",
        "title": "Input text",
        "description": "Input text dùng để nhập dữ liệu chuỗi ngắn. Trong React, controlled text input thường đi với value và onChange, kèm label để hỗ trợ người dùng và accessibility.",
        "exampleText": "Có thể dùng input text để nhập tên khóa học, tiêu đề bài học hoặc từ khóa tìm kiếm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input type=\"text\" value={value} onChange={handleChange} />"
          },
          {
            "title": "Ví dụ",
            "code": "<label>\n  Tiêu đề bài học\n  <input\n    type=\"text\"\n    value={title}\n    onChange={(event) => setTitle(event.target.value)}\n  />\n</label>"
          }
        ]
      },
      {
        "id": "react-form-textarea",
        "title": "Textarea",
        "description": "Textarea dùng để nhập nội dung dài nhiều dòng. Trong React, textarea được quản lý bằng prop value và onChange giống input.",
        "exampleText": "Phần giải thích kiến thức trong website có thể dùng textarea để người dùng nhập nội dung dài.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<textarea value={value} onChange={handleChange} />"
          },
          {
            "title": "Ví dụ",
            "code": "<label>\n  Giải thích\n  <textarea\n    value={description}\n    onChange={(event) => setDescription(event.target.value)}\n    rows={6}\n  />\n</label>"
          }
        ]
      },
      {
        "id": "react-form-select",
        "title": "Select",
        "description": "Select dùng để chọn một giá trị trong danh sách. Trong controlled select, giá trị đang chọn được lưu trong state và truyền qua prop value của select.",
        "exampleText": "Form thêm bài học có thể có select để chọn nhóm kiến thức như HTML, CSS, JS hoặc ReactJS.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<select value={value} onChange={handleChange}>\n  <option value=\"...\">...</option>\n</select>",
            "codeTsx": "import { useState } from 'react';\n\nfunction SelectDemo(): JSX.Element {\n  const [selected, setSelected] = useState<string>('option1');\n  return (\n    <select\n      value={selected}\n      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value)}\n    >\n      <option value=\"option1\">Lựa chọn 1</option>\n      <option value=\"option2\">Lựa chọn 2</option>\n    </select>\n  );\n}"
          },
          {
            "title": "Ví dụ",
            "code": "<select\n  value={category}\n  onChange={(event) => setCategory(event.target.value)}\n>\n  <option value=\"html\">HTML</option>\n  <option value=\"css\">CSS</option>\n  <option value=\"js\">JavaScript</option>\n  <option value=\"react\">ReactJS</option>\n</select>"
          }
        ]
      },
      {
        "id": "react-form-checkbox",
        "title": "Checkbox",
        "description": "Checkbox dùng để chọn hoặc bỏ chọn một giá trị boolean, hoặc chọn nhiều mục. Với checkbox đơn, controlled value được truyền qua checked và đọc từ event.target.checked.",
        "exampleText": "Có thể dùng checkbox để đánh dấu bài học là đã hoàn thành hoặc chưa hoàn thành.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input\n  type=\"checkbox\"\n  checked={isChecked}\n  onChange={(event) => setIsChecked(event.target.checked)}\n/>"
          },
          {
            "title": "Ví dụ",
            "code": "<label>\n  <input\n    type=\"checkbox\"\n    checked={isCompleted}\n    onChange={(event) => setIsCompleted(event.target.checked)}\n  />\n  Đã hoàn thành\n</label>"
          }
        ]
      },
      {
        "id": "react-form-radio",
        "title": "Radio",
        "description": "Radio dùng khi người dùng chỉ được chọn một lựa chọn trong nhiều lựa chọn. Các radio cùng nhóm dùng chung name và thường được điều khiển bởi một state.",
        "exampleText": "Có thể dùng radio để chọn mức độ bài học: dễ, trung bình hoặc khó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<input\n  type=\"radio\"\n  name=\"group\"\n  value=\"option\"\n  checked={state === \"option\"}\n  onChange={handleChange}\n/>"
          },
          {
            "title": "Ví dụ",
            "code": "{[\"easy\", \"medium\", \"hard\"].map((value) => (\n  <label key={value}>\n    <input\n      type=\"radio\"\n      name=\"level\"\n      value={value}\n      checked={level === value}\n      onChange={(event) => setLevel(event.target.value)}\n    />\n    {value}\n  </label>\n))}"
          }
        ]
      },
      {
        "id": "react-form-submit",
        "title": "Form submit",
        "description": "Form submit xảy ra khi người dùng gửi form bằng button submit hoặc phím Enter. Trong React, submit thường được xử lý bằng handler trên thẻ form để validate và cập nhật state hoặc gọi API.",
        "exampleText": "Khi submit form thêm bài học, React có thể thêm bài học mới vào danh sách đang hiển thị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "<form onSubmit={handleSubmit}>\n  ...\n  <button type=\"submit\">Gửi</button>\n</form>"
          },
          {
            "title": "Ví dụ",
            "code": "function handleSubmit(event) {\n  event.preventDefault();\n  addLesson({ title, description });\n}\n\nreturn (\n  <form onSubmit={handleSubmit}>\n    <input value={title} onChange={(event) => setTitle(event.target.value)} />\n    <button type=\"submit\">Thêm bài học</button>\n  </form>\n);"
          }
        ]
      },
      {
        "id": "react-form-prevent-default",
        "title": "Prevent default",
        "description": "preventDefault dùng để chặn hành vi mặc định của form là điều hướng hoặc tải lại trang khi submit. Handler vẫn có thể validate, cập nhật state và gửi request theo logic của ứng dụng.",
        "exampleText": "Khi người dùng bấm nút “Lưu bài học”, trang không reload mà dữ liệu được xử lý ngay trong React.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function handleSubmit(event) {\n  event.preventDefault();\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function handleSubmit(event) {\n  event.preventDefault();\n  saveLesson(form);\n}"
          }
        ]
      },
      {
        "id": "react-store-form-state",
        "title": "Lưu dữ liệu form bằng state",
        "description": "Dữ liệu form thường được lưu trong state để React có thể kiểm soát, kiểm tra và render giao diện theo dữ liệu người dùng nhập. Có thể dùng state riêng hoặc một object state.",
        "exampleText": "Các giá trị như title, description, category và level có thể được lưu trong state trước khi tạo bài học mới.",
        "codeBlocks": [
          {
            "title": "Nhiều state",
            "code": "const [title, setTitle] = useState(\"\");\nconst [description, setDescription] = useState(\"\");\nconst [category, setCategory] = useState(\"react\");\nconst [level, setLevel] = useState(\"easy\");"
          },
          {
            "title": "Object state",
            "code": "const [form, setForm] = useState({\n  title: \"\",\n  description: \"\",\n  category: \"react\",\n  level: \"easy\",\n});"
          }
        ]
      },
      {
        "id": "react-form-validation",
        "title": "Validate form",
        "description": "Validate form là kiểm tra dữ liệu trước khi xử lý hoặc gửi đi. Có thể kiểm tra rỗng, độ dài, định dạng, giới hạn giá trị hoặc điều kiện nghiệp vụ. Validation phía client không thay thế validation phía server.",
        "exampleText": "Nếu tiêu đề bài học bị bỏ trống, React có thể không cho submit và yêu cầu người dùng nhập tiêu đề.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "function validate(values) {\n  const errors = {};\n  if (!values.field.trim()) errors.field = \"Thông báo lỗi\";\n  return errors;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "function validateLesson(form) {\n  const errors = {};\n\n  if (!form.title.trim()) {\n    errors.title = \"Vui lòng nhập tiêu đề\";\n  } else if (form.title.trim().length < 3) {\n    errors.title = \"Tiêu đề phải có ít nhất 3 ký tự\";\n  }\n\n  return errors;\n}"
          }
        ]
      },
      {
        "id": "react-form-errors",
        "title": "Hiển thị lỗi form",
        "description": "Khi validate thất bại, React có thể lưu object lỗi vào state rồi hiển thị thông báo gần field tương ứng. Nên liên kết lỗi bằng aria-describedby và aria-invalid để hỗ trợ accessibility.",
        "exampleText": "Nếu email không hợp lệ, dưới ô email có thể hiển thị dòng “Email không đúng định dạng”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{errors.field && <p role=\"alert\">{errors.field}</p>}"
          },
          {
            "title": "Ví dụ",
            "code": "<label htmlFor=\"email\">Email</label>\n<input\n  id=\"email\"\n  value={form.email}\n  onChange={handleChange}\n  aria-invalid={Boolean(errors.email)}\n  aria-describedby={errors.email ? \"email-error\" : undefined}\n/>\n{errors.email && (\n  <p id=\"email-error\" role=\"alert\">{errors.email}</p>\n)}"
          }
        ]
      },
      {
        "id": "react-reset-form",
        "title": "Reset form",
        "description": "Reset form là đưa các field về giá trị ban đầu sau khi submit thành công hoặc khi người dùng bấm nút nhập lại. Với controlled form, cần cập nhật state về initial values.",
        "exampleText": "Sau khi thêm bài học thành công, form có thể xóa trắng tiêu đề, giải thích và ví dụ để chuẩn bị nhập bài mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "setForm(initialForm);\nsetErrors({});"
          },
          {
            "title": "Ví dụ",
            "code": "const initialForm = {\n  title: \"\",\n  description: \"\",\n  category: \"react\",\n};\n\nfunction resetForm() {\n  setForm(initialForm);\n  setErrors({});\n}"
          }
        ]
      },
      {
        "id": "react-multi-field-form",
        "title": "Form nhiều field",
        "description": "Form nhiều field có nhiều ô nhập khác nhau. Có thể dùng state riêng cho từng field hoặc một object state; với object state, prop name giúp dùng chung một change handler.",
        "exampleText": "Form đăng ký có thể gồm họ tên, email, mật khẩu, số điện thoại, giới tính và tỉnh thành.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "<input name=\"name\" value={form.name} onChange={handleChange} />\n<input name=\"email\" value={form.email} onChange={handleChange} />\n<input name=\"password\" value={form.password} onChange={handleChange} />"
          },
          {
            "title": "Handler dùng chung",
            "code": "function handleChange(event) {\n  const { name, value } = event.target;\n  setForm((current) => ({\n    ...current,\n    [name]: value,\n  }));\n}"
          }
        ]
      },
      {
        "id": "react-form-object-state",
        "title": "Form object state",
        "description": "Form object state là cách gom toàn bộ dữ liệu form vào một object. Khi cập nhật, cần tạo object mới và giữ lại các field cũ bằng spread; checkbox đọc từ checked thay vì value.",
        "exampleText": "State form có thể gồm các thuộc tính title, description, category, level, isCompleted để lưu toàn bộ thông tin bài học.",
        "codeBlocks": [
          {
            "title": "State",
            "code": "const [form, setForm] = useState({\n  title: \"\",\n  description: \"\",\n  category: \"react\",\n  level: \"easy\",\n  isCompleted: false,\n});"
          },
          {
            "title": "Handler dùng chung",
            "code": "function handleChange(event) {\n  const { name, type, value, checked } = event.target;\n\n  setForm((current) => ({\n    ...current,\n    [name]: type === \"checkbox\" ? checked : value,\n  }));\n}"
          }
        ]
      },
      {
        "id": "f8-react-controlled-form",
        "title": "Controlled Form (Two-way binding)",
        "description": "Form được kiểm soát hoàn toàn bởi React state. Dùng onChange để cập nhật state, value để bind ngược lại input. Khi submit dùng e.preventDefault() để ngăn reload trang.",
        "exampleText": "Từ react02/App03.jsx: Quản lý form với state là object, dùng computed property name [e.target.name] để cập nhật.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const [form, setForm] = useState({ name: '', email: '' });\n\nconst handleChange = (e) => {\n  setForm({ ...form, [e.target.name]: e.target.value });\n};\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  console.log(form);\n  setForm({ name: '', email: '' });\n};\n\n<input name=\"name\" onChange={handleChange} value={form.name} />"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "useEffect & gọi API",
    "cards": [
      {
        "id": "react-use-effect",
        "title": "useEffect",
        "description": "useEffect là Hook dùng để đồng bộ React component với hệ thống bên ngoài. Nó thường dùng khi gọi API, thao tác API trình duyệt, cập nhật title, dùng timer hoặc đăng ký sự kiện.",
        "exampleText": "Khi mở page ReactJS, component có thể dùng useEffect để gọi API lấy danh sách bài học rồi hiển thị ra giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { useEffect } from \"react\";\n\nuseEffect(() => {\n  // Thiết lập effect\n  return () => {\n    // Cleanup nếu cần\n  };\n}, [dependencies]);",
            "codeTsx": "useEffect((): void | (() => void) => {\n  // Side effect\n  return () => { /* cleanup */ };\n}, [dependency]);"
          },
          {
            "title": "Ví dụ",
            "code": "function ReactPage() {\n  useEffect(() => {\n    document.title = \"ReactJS Knowledge\";\n  }, []);\n\n  return <main>ReactJS</main>;\n}",
            "codeTsx": "import { useState, useEffect } from 'react';\n\ninterface Post {\n  id: number;\n  title: string;\n}\n\nfunction PostList(): JSX.Element {\n  const [posts, setPosts] = useState<Post[]>([]);\n\n  useEffect(() => {\n    fetch('https://api.example.com/posts')\n      .then((res) => res.json())\n      .then((data: Post[]) => setPosts(data));\n  }, []);\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-side-effect",
        "title": "Side effect",
        "description": "Side effect là hành động tương tác với hệ thống bên ngoài quá trình tính JSX, ví dụ mạng, DOM, storage, timer hoặc event listener. Giá trị có thể tính trực tiếp từ props/state thường không cần useEffect.",
        "exampleText": "Gọi API, lưu dữ liệu vào localStorage, thay đổi title của tab trình duyệt hoặc đăng ký sự kiện scroll là các side effect.",
        "codeBlocks": [
          {
            "title": "Ví dụ side effect",
            "code": "useEffect(() => {\n  localStorage.setItem(\"theme\", theme);\n  document.title = `Theme: ${theme}`;\n}, [theme]);"
          },
          {
            "title": "Không cần effect",
            "code": "// Tính trực tiếp trong render\nconst fullName = `${firstName} ${lastName}`;"
          }
        ]
      },
      {
        "id": "react-effect-dependency-array",
        "title": "Dependency array",
        "description": "Dependency array là tham số thứ hai của useEffect. Nó liệt kê mọi giá trị reactive được đọc trong effect và quyết định khi nào React cần chạy lại quá trình đồng bộ.",
        "exampleText": "Nếu effect phụ thuộc vào keyword, mỗi khi keyword thay đổi thì effect sẽ chạy lại để tìm kiếm dữ liệu mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(effectFunction, [dependencyA, dependencyB]);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  searchLessons(keyword);\n}, [keyword]);"
          }
        ]
      },
      {
        "id": "react-effect-no-dependency-array",
        "title": "useEffect không dependency",
        "description": "Nếu không truyền dependency array, useEffect chạy sau mỗi lần component commit. Cần cẩn thận khi effect cập nhật state vì có thể tạo vòng lặp render liên tục.",
        "exampleText": "Nếu trong effect gọi API rồi set state, mà effect lại chạy sau mỗi render, component có thể bị lặp gọi API vô hạn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  // Chạy sau mọi lần render được commit\n});"
          },
          {
            "title": "Ví dụ cần tránh",
            "code": "useEffect(() => {\n  fetch(\"/api/lessons\")\n    .then((response) => response.json())\n    .then(setLessons);\n});\n// setLessons gây render mới, effect lại chạy."
          }
        ]
      },
      {
        "id": "react-effect-empty-dependencies",
        "title": "useEffect dependency rỗng",
        "description": "Với dependency array rỗng, effect không chạy lại do props hoặc state thay đổi. Nó thường dùng để đồng bộ khi component mount. Trong Strict Mode development, React có thể chạy thêm một chu kỳ setup–cleanup để phát hiện lỗi cleanup.",
        "exampleText": "Khi vào trang danh sách khóa học, chỉ cần gọi API lúc component được đưa vào giao diện để lấy dữ liệu ban đầu.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  // Effect khi mount\n}, []);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  loadCourses();\n}, []);"
          }
        ]
      },
      {
        "id": "react-effect-with-dependencies",
        "title": "useEffect có dependency",
        "description": "Nếu dependency array có giá trị, effect chạy sau lần mount và chạy lại khi một dependency thay đổi theo phép so sánh Object.is. Mọi giá trị reactive được đọc trong effect cần được khai báo đúng.",
        "exampleText": "Khi người dùng đổi category từ HTML sang ReactJS, effect có thể gọi API lại để lấy danh sách bài học thuộc category mới.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  synchronize(dependency);\n}, [dependency]);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  loadLessons(category);\n}, [category]);"
          }
        ]
      },
      {
        "id": "react-effect-cleanup",
        "title": "Cleanup function",
        "description": "Cleanup function là function được return từ effect. React gọi cleanup trước khi effect chạy lại với dependency mới và khi component unmount, giúp dừng timer, hủy request hoặc gỡ event listener.",
        "exampleText": "Nếu component có setInterval, cleanup function sẽ clearInterval để tránh timer vẫn chạy sau khi component bị xóa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  const resource = setup();\n  return () => cleanup(resource);\n}, [dependencies]);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  const timerId = window.setInterval(() => {\n    console.log(\"Tick\");\n  }, 1000);\n\n  return () => window.clearInterval(timerId);\n}, []);"
          }
        ]
      },
      {
        "id": "react-fetch-api",
        "title": "Fetch API trong React",
        "description": "Fetch API trong React dùng để lấy hoặc gửi dữ liệu đến server. Khi fetch thành công, dữ liệu thường được lưu vào state. Fetch không tự báo lỗi cho status 404/500 nên cần kiểm tra response.ok.",
        "exampleText": "Component CourseList có thể fetch danh sách khóa học từ server rồi lưu vào state courses.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const response = await fetch(url, options);\nif (!response.ok) throw new Error(`HTTP ${response.status}`);\nconst data = await response.json();",
            "codeTsx": "import { useState, useEffect } from 'react';\n\ninterface User {\n  id: number;\n  name: string;\n}\n\nfunction UserList(): JSX.Element {\n  const [users, setUsers] = useState<User[]>([]);\n  const [loading, setLoading] = useState<boolean>(true);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    fetch('https://api.example.com/users')\n      .then((res) => res.json())\n      .then((data: User[]) => setUsers(data))\n      .catch((err: Error) => setError(err.message))\n      .finally(() => setLoading(false));\n  }, []);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error}</p>;\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}"
          },
          {
            "title": "Ví dụ",
            "code": "async function fetchCourses(signal) {\n  const response = await fetch(\"/api/courses\", { signal });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}"
          }
        ]
      },
      {
        "id": "react-loading-state",
        "title": "Loading state",
        "description": "Loading state biểu thị dữ liệu đang được tải. Khi bắt đầu request, loading thường là true; trong finally, loading chuyển về false nếu request hiện tại vẫn còn hiệu lực.",
        "exampleText": "Trong lúc đang tải danh sách bài học, giao diện có thể hiển thị “Đang tải dữ liệu...”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [isLoading, setIsLoading] = useState(false);"
          },
          {
            "title": "Ví dụ",
            "code": "async function loadCourses() {\n  setIsLoading(true);\n  try {\n    const data = await fetchCourses();\n    setCourses(data);\n  } finally {\n    setIsLoading(false);\n  }\n}\n\nif (isLoading) return <p>Đang tải dữ liệu...</p>;"
          }
        ]
      },
      {
        "id": "react-error-state",
        "title": "Error state",
        "description": "Error state lưu thông tin lỗi khi request thất bại. Nó giúp giao diện hiển thị trạng thái rõ ràng và có thể cung cấp nút thử lại thay vì để trang trống.",
        "exampleText": "Nếu API lỗi mạng, component có thể hiển thị “Không thể tải dữ liệu, vui lòng thử lại”.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [error, setError] = useState(null);"
          },
          {
            "title": "Ví dụ",
            "code": "try {\n  setError(null);\n  const data = await fetchCourses();\n  setCourses(data);\n} catch (error) {\n  setError(error instanceof Error ? error.message : \"Lỗi không xác định\");\n}\n\nif (error) return <p role=\"alert\">{error}</p>;"
          }
        ]
      },
      {
        "id": "react-render-api-data",
        "title": "Render dữ liệu API",
        "description": "Sau khi request thành công, dữ liệu trả về thường là array hoặc object. React lưu dữ liệu cần hiển thị vào state rồi dùng map và conditional rendering để tạo JSX.",
        "exampleText": "API trả về danh sách bài học, component dùng map để render từng bài học thành một card.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "{data.map((item) => (\n  <Component key={item.id} item={item} />\n))}"
          },
          {
            "title": "Ví dụ",
            "code": "function CourseList({ courses }) {\n  if (courses.length === 0) return <p>Chưa có khóa học.</p>;\n\n  return (\n    <section>\n      {courses.map((course) => (\n        <CourseCard key={course.id} course={course} />\n      ))}\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-fetch-on-mount",
        "title": "Gọi API khi component mount",
        "description": "Gọi API khi mount thường dùng để lấy dữ liệu ban đầu. Effect có dependency rỗng và nên hủy request khi component unmount để tránh tiếp tục công việc không cần thiết.",
        "exampleText": "Khi người dùng mở page ReactJS, component gọi API để lấy toàn bộ nhóm kiến thức React.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  loadInitialData();\n}, []);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  const controller = new AbortController();\n\n  fetch(\"/api/react-groups\", { signal: controller.signal })\n    .then((response) => {\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      return response.json();\n    })\n    .then(setGroups)\n    .catch((error) => {\n      if (error.name !== \"AbortError\") setError(error.message);\n    });\n\n  return () => controller.abort();\n}, []);"
          }
        ]
      },
      {
        "id": "react-fetch-on-state-change",
        "title": "Gọi API khi state thay đổi",
        "description": "Khi request phụ thuộc keyword, category, page number hoặc filter, state đó cần nằm trong dependency array. Có thể debounce tìm kiếm để tránh gửi request sau mỗi ký tự quá nhanh.",
        "exampleText": "Khi người dùng nhập từ khóa tìm kiếm, component có thể gọi API lại để lấy danh sách bài học phù hợp với từ khóa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useEffect(() => {\n  loadData(stateValue);\n}, [stateValue]);"
          },
          {
            "title": "Ví dụ",
            "code": "useEffect(() => {\n  const controller = new AbortController();\n  const timerId = window.setTimeout(() => {\n    searchLessons(keyword, controller.signal);\n  }, 300);\n\n  return () => {\n    window.clearTimeout(timerId);\n    controller.abort();\n  };\n}, [keyword]);"
          }
        ]
      },
      {
        "id": "react-avoid-infinite-api-loop",
        "title": "Tránh gọi API vô hạn",
        "description": "Vòng lặp thường xảy ra khi effect cập nhật một state mà chính state đó làm effect chạy lại, hoặc khi dependency là object/function mới ở mọi render. Cần xác định dependency đúng và không dùng effect để tạo derived state không cần thiết.",
        "exampleText": "Nếu chỉ muốn gọi API khi component mount, dùng dependency rỗng và bảo đảm effect không phụ thuộc props hoặc state thay đổi.",
        "codeBlocks": [
          {
            "title": "Có thể gây lặp",
            "code": "useEffect(() => {\n  fetchCourses().then(setCourses);\n}, [courses]);\n// setCourses thay đổi courses, effect lại chạy."
          },
          {
            "title": "Sửa",
            "code": "useEffect(() => {\n  fetchCourses().then(setCourses);\n}, []);\n\n// Hoặc phụ thuộc đúng tham số request:\nuseEffect(() => {\n  fetchCourses(category).then(setCourses);\n}, [category]);"
          }
        ]
      },
      {
        "id": "react-async-function-use-effect",
        "title": "Async function trong useEffect",
        "description": "Không nên đặt trực tiếp callback của useEffect là async vì effect chỉ được return undefined hoặc cleanup function, trong khi async function luôn trả Promise. Hãy khai báo async function bên trong rồi gọi nó.",
        "exampleText": "Trong useEffect, có thể tạo function fetchCourses, bên trong dùng await fetch, sau đó gọi fetchCourses() để lấy dữ liệu.",
        "codeBlocks": [
          {
            "title": "Sai",
            "code": "useEffect(async () => {\n  const response = await fetch(url);\n}, []);"
          },
          {
            "title": "Đúng",
            "code": "useEffect(() => {\n  const controller = new AbortController();\n\n  async function loadCourses() {\n    try {\n      const response = await fetch(\"/api/courses\", {\n        signal: controller.signal,\n      });\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      const data = await response.json();\n      setCourses(data);\n    } catch (error) {\n      if (error.name !== \"AbortError\") setError(error.message);\n    }\n  }\n\n  loadCourses();\n  return () => controller.abort();\n}, []);"
          }
        ]
      },
      {
        "id": "f8-react-useeffect",
        "title": "useEffect & Lifecycle",
        "description": "useEffect xử lý side effect. Thứ tự: State thay đổi → Render → Update UI → Cleanup (lần trước) → Callback. Cleanup dọn dẹp: removeEventListener, clearInterval/Timeout, Blob, Storage, kiểm tra unmount trước khi setState.",
        "exampleText": "Từ react02: Mounting là khi component đưa vào DOM, Unmounting là khi loại bỏ khỏi DOM. useEffect(() => {...}, []) chạy 1 lần khi mount, return cleanup khi unmount.",
        "codeBlocks": [
          {
            "title": "Mount & Unmount",
            "code": "useEffect(() => {\n  console.log('Mounting');\n  return () => {\n    console.log('Unmounting');\n  };\n}, []);"
          },
          {
            "title": "Cleanup khi re-render",
            "code": "useEffect(() => {\n  console.log('Effect: ' + count);\n  return () => {\n    // Cleanup chạy TRƯỚC effect mới\n    console.log('Cleanup: ' + count);\n  };\n}); // Không có deps → chạy mỗi render"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 8",
    "title": "useRef, useMemo, useCallback",
    "cards": [
      {
        "id": "react-use-ref",
        "title": "useRef",
        "description": "useRef là hook dùng để tạo một giá trị tham chiếu có thể giữ nguyên qua các lần render. Giá trị trong useRef thay đổi nhưng không làm component re-render.",
        "exampleText": "Có thể dùng useRef để lưu id của timer, lưu giá trị cũ hoặc tham chiếu đến một input trong DOM.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const ref = useRef(initialValue);\nref.current",
            "codeTsx": "const inputRef = useRef<HTMLInputElement>(null);\nconst divRef = useRef<HTMLDivElement>(null);\nconst countRef = useRef<number>(0);"
          },
          {
            "title": "Ví dụ",
            "code": "import { useRef } from \"react\";\n\nfunction Timer() {\n  const timerIdRef = useRef(null);\n\n  function startTimer() {\n    timerIdRef.current = window.setInterval(() => {\n      console.log(\"Tick\");\n    }, 1000);\n  }\n\n  function stopTimer() {\n    window.clearInterval(timerIdRef.current);\n  }\n}",
            "codeTsx": "import { useRef } from 'react';\n\nfunction FocusInput(): JSX.Element {\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  const handleClick = (): void => {\n    inputRef.current?.focus();\n  };\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={handleClick}>Focus</button>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-use-ref-dom",
        "title": "Truy cập DOM bằng useRef",
        "description": "useRef thường dùng để truy cập trực tiếp một element trong DOM. Khi gắn ref vào element, có thể thao tác với element đó thông qua ref.current.",
        "exampleText": "Có thể lấy thẻ input để focus, lấy chiều cao của một box hoặc điều khiển video/audio.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const elementRef = useRef(null);\n<Element ref={elementRef} />"
          },
          {
            "title": "Ví dụ",
            "code": "function VideoPlayer() {\n  const videoRef = useRef(null);\n\n  return (\n    <>\n      <video ref={videoRef} src=\"/video/course.mp4\" />\n      <button onClick={() => videoRef.current?.play()}>Phát</button>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-use-ref-non-render-value",
        "title": "Lưu giá trị không gây re-render",
        "description": "Khác với state, khi thay đổi giá trị trong useRef, React không render lại component. Vì vậy useRef phù hợp để lưu dữ liệu phụ không cần hiển thị trực tiếp trên giao diện.",
        "exampleText": "Có thể lưu số lần component render hoặc lưu id của setInterval mà không cần cập nhật giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const valueRef = useRef(initialValue);\nvalueRef.current = newValue;"
          },
          {
            "title": "Ví dụ",
            "code": "function Stopwatch() {\n  const intervalIdRef = useRef(null);\n\n  function start() {\n    intervalIdRef.current = window.setInterval(tick, 1000);\n  }\n\n  function stop() {\n    window.clearInterval(intervalIdRef.current);\n  }\n}"
          }
        ]
      },
      {
        "id": "react-use-ref-vs-state",
        "title": "So sánh useRef và useState",
        "description": "useState dùng cho dữ liệu ảnh hưởng đến giao diện. Khi state thay đổi, component re-render. useRef dùng cho dữ liệu cần giữ lại nhưng không cần làm giao diện cập nhật.",
        "exampleText": "Giá trị ô input hiển thị ra giao diện nên dùng state. Id của timer chỉ dùng để clear timer thì có thể dùng ref.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useState: thay đổi UI\nuseRef: giữ dữ liệu phụ không kích hoạt render"
          },
          {
            "title": "Ví dụ",
            "code": "function Example() {\n  const [inputValue, setInputValue] = useState(\"\"); // Hiển thị trong UI\n  const timerIdRef = useRef(null); // Không cần render lại\n\n  return <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />;\n}"
          }
        ]
      },
      {
        "id": "react-use-ref-focus-input",
        "title": "Focus input bằng useRef",
        "description": "Một ứng dụng phổ biến của useRef là focus vào input sau khi người dùng click button hoặc sau khi component render xong.",
        "exampleText": "Trong form thêm bài học, sau khi thêm thành công có thể focus lại vào ô nhập tiêu đề để người dùng nhập bài tiếp theo.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "inputRef.current?.focus();"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonForm() {\n  const titleInputRef = useRef(null);\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    saveLesson();\n    titleInputRef.current?.focus();\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={titleInputRef} name=\"title\" />\n      <button type=\"submit\">Thêm</button>\n    </form>\n  );\n}"
          }
        ]
      },
      {
        "id": "react-use-memo",
        "title": "useMemo",
        "description": "useMemo là hook dùng để ghi nhớ kết quả của một phép tính. React chỉ tính lại giá trị đó khi dependency thay đổi.",
        "exampleText": "Nếu danh sách sản phẩm rất dài, có thể dùng useMemo để tính tổng tiền giỏ hàng, tránh tính lại không cần thiết mỗi lần component render.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const memoizedValue = useMemo(() => calculate(), [dependencies]);",
            "codeTsx": "const memoized = useMemo<number>(() => {\n  return expensiveCalculation(a, b);\n}, [a, b]);"
          },
          {
            "title": "Ví dụ",
            "code": "function CartSummary({ cartItems }) {\n  const total = useMemo(() => {\n    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);\n  }, [cartItems]);\n\n  return <p>Tổng tiền: {total}đ</p>;\n}",
            "codeTsx": "import { useMemo } from 'react';\n\ninterface Props {\n  items: number[];\n  filter: string;\n}\n\nfunction FilteredList({ items, filter }: Props): JSX.Element {\n  const filtered = useMemo<number[]>(\n    () => items.filter((item) => item > Number(filter)),\n    [items, filter]\n  );\n  return <ul>{filtered.map((i) => <li key={i}>{i}</li>)}</ul>;\n}"
          }
        ]
      },
      {
        "id": "react-use-memo-expensive-calculation",
        "title": "Tối ưu tính toán với useMemo",
        "description": "useMemo phù hợp cho các phép tính nặng hoặc xử lý dữ liệu lớn. Nó giúp tránh chạy lại logic tốn tài nguyên khi dữ liệu liên quan không đổi.",
        "exampleText": "Có thể lọc danh sách bài học theo từ khóa bằng useMemo để chỉ lọc lại khi từ khóa hoặc danh sách bài học thay đổi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const result = useMemo(() => expensiveCalculation(data), [data]);"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList({ lessons, keyword }) {\n  const filteredLessons = useMemo(() => {\n    const normalizedKeyword = keyword.trim().toLowerCase();\n    return lessons.filter((lesson) =>\n      lesson.title.toLowerCase().includes(normalizedKeyword),\n    );\n  }, [lessons, keyword]);\n\n  return filteredLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />);\n}"
          }
        ]
      },
      {
        "id": "react-use-memo-dependencies",
        "title": "Dependency của useMemo",
        "description": "Dependency của useMemo là các giá trị mà kết quả tính toán phụ thuộc vào. Khi một dependency thay đổi, React sẽ tính lại giá trị trong useMemo.",
        "exampleText": "Nếu tính tổng tiền dựa vào cartItems, dependency nên là cartItems.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useMemo(() => calculate(dependency), [dependency]);"
          },
          {
            "title": "Ví dụ",
            "code": "const total = useMemo(() => {\n  return cartItems.reduce((sum, item) => sum + item.price, 0);\n}, [cartItems]);\n// cartItems là dependency vì phép tính đọc giá trị này."
          }
        ]
      },
      {
        "id": "react-when-to-use-memo",
        "title": "Khi nào dùng useMemo",
        "description": "Không phải phép tính nào cũng cần useMemo. Chỉ nên dùng khi phép tính nặng, dữ liệu lớn hoặc việc tính toán lặp lại gây ảnh hưởng hiệu năng. Việc memo hóa cũng có chi phí, nên ưu tiên đo hiệu năng trước khi thêm.",
        "exampleText": "Tính tổng vài số nhỏ thì không cần useMemo. Lọc hàng nghìn bài học theo nhiều điều kiện thì có thể dùng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useMemo(() => expensiveCalculation(), [dependencies]);"
          },
          {
            "title": "Ví dụ",
            "code": "// Không cần memo cho phép tính rẻ\nconst fullName = `${firstName} ${lastName}`;\n\n// Có thể memo khi phép lọc lớn thực sự tốn thời gian\nconst visibleLessons = useMemo(\n  () => filterThousandsOfLessons(lessons, filters),\n  [lessons, filters],\n);"
          }
        ]
      },
      {
        "id": "react-use-callback",
        "title": "useCallback",
        "description": "useCallback là hook dùng để ghi nhớ một function. React chỉ tạo lại function đó khi dependency thay đổi.",
        "exampleText": "Có thể dùng useCallback cho function xóa bài học truyền xuống component con để tránh tạo function mới sau mỗi lần render.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const memoizedCallback = useCallback(() => { ... }, [dependencies]);",
            "codeTsx": "const memoizedFn = useCallback((item: string): void => {\n  console.log(item);\n}, [dependency]);"
          },
          {
            "title": "Ví dụ",
            "code": "function LessonList() {\n  const [lessons, setLessons] = useState([]);\n\n  const handleDelete = useCallback((lessonId) => {\n    setLessons((current) => current.filter((lesson) => lesson.id !== lessonId));\n  }, []);\n\n  return lessons.map((lesson) => (\n    <MemoizedLessonItem key={lesson.id} lesson={lesson} onDelete={handleDelete} />\n  ));\n}",
            "codeTsx": "import { useCallback } from 'react';\n\ninterface ChildProps {\n  onAdd: (item: string) => void;\n}\n\nfunction Parent(): JSX.Element {\n  const handleAdd = useCallback((item: string): void => {\n    console.log('Added:', item);\n  }, []);\n  return <Child onAdd={handleAdd} />;\n}"
          }
        ]
      },
      {
        "id": "react-use-callback-function-optimization",
        "title": "Tối ưu function với useCallback",
        "description": "Khi component cha re-render, các function bên trong component cha thường được tạo lại. Nếu truyền function đó xuống component con, component con có thể re-render không cần thiết. useCallback giúp giữ function ổn định hơn.",
        "exampleText": "Component LessonList truyền function onDelete xuống nhiều LessonItem. Có thể dùng useCallback để giữ function onDelete không đổi khi dependency chưa đổi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const handler = useCallback((value) => { ... }, [dependencies]);"
          },
          {
            "title": "Ví dụ",
            "code": "const MemoizedLessonItem = memo(LessonItem);\n\nfunction LessonList({ lessons }) {\n  const handleDelete = useCallback((lessonId) => {\n    deleteLesson(lessonId);\n  }, []);\n\n  return lessons.map((lesson) => (\n    <MemoizedLessonItem key={lesson.id} lesson={lesson} onDelete={handleDelete} />\n  ));\n}"
          }
        ]
      },
      {
        "id": "react-use-callback-dependencies",
        "title": "Dependency của useCallback",
        "description": "Dependency của useCallback là các giá trị được function sử dụng từ bên ngoài. Nếu các giá trị đó thay đổi, function cần được tạo lại để dùng dữ liệu mới.",
        "exampleText": "Nếu function tìm kiếm phụ thuộc vào keyword, thì keyword nên nằm trong dependency array của useCallback.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useCallback(() => useReactiveValues(), [reactiveValues]);"
          },
          {
            "title": "Ví dụ",
            "code": "function Search({ keyword }) {\n  const searchLessons = useCallback(() => {\n    return api.search(keyword);\n  }, [keyword]);\n\n  useEffect(() => {\n    searchLessons();\n  }, [searchLessons]);\n}"
          }
        ]
      },
      {
        "id": "react-when-to-use-callback",
        "title": "Khi nào dùng useCallback",
        "description": "useCallback nên dùng khi function được truyền xuống component con đã được tối ưu bằng React.memo, hoặc khi function nằm trong dependency của hook khác. Không nên bọc mọi function bằng useCallback nếu chưa có nhu cầu rõ ràng.",
        "exampleText": "Nếu component con rất đơn giản và không dùng React.memo, dùng useCallback có thể không đem lại lợi ích rõ ràng.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "useCallback(callback, dependencies);"
          },
          {
            "title": "Ví dụ",
            "code": "// Hữu ích khi truyền callback vào component memo hóa\nconst handleDelete = useCallback((id) => {\n  setLessons((current) => current.filter((lesson) => lesson.id !== id));\n}, []);\n\n// Không cần bọc mọi function ngắn nếu không có lợi ích đo được."
          }
        ]
      },
      {
        "id": "react-react-memo",
        "title": "React.memo",
        "description": "React.memo dùng để ghi nhớ component. Component được bọc bởi React.memo có thể tránh re-render nếu props không thay đổi.",
        "exampleText": "Một component KnowledgeCard có nhiều nội dung nhưng props không đổi có thể dùng React.memo để hạn chế render lại.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const MemoizedComponent = memo(Component);"
          },
          {
            "title": "Ví dụ",
            "code": "import { memo } from \"react\";\n\nconst KnowledgeCard = memo(function KnowledgeCard({ title, description }) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </article>\n  );\n});"
          }
        ]
      },
      {
        "id": "react-optimize-re-render",
        "title": "Tối ưu re-render",
        "description": "Tối ưu re-render là giảm các lần render không cần thiết để ứng dụng mượt hơn. Có thể dùng React.memo, useMemo, useCallback, tách component hợp lý và đặt state đúng vị trí.",
        "exampleText": "Nếu chỉ ô tìm kiếm thay đổi, không nên để toàn bộ danh sách lớn re-render quá nhiều nếu dữ liệu danh sách không đổi.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "memo + useMemo + useCallback + đặt state đúng vị trí"
          },
          {
            "title": "Ví dụ",
            "code": "const LessonItem = memo(function LessonItem({ lesson, onDelete }) {\n  return (\n    <article>\n      <h2>{lesson.title}</h2>\n      <button onClick={() => onDelete(lesson.id)}>Xóa</button>\n    </article>\n  );\n});\n\n// Giữ object lesson và onDelete ổn định khi phù hợp.\n// Dùng React DevTools Profiler để đo trước khi tối ưu."
          }
        ]
      },
      {
        "id": "f8-react-useref",
        "title": "useRef",
        "description": "Là 1 object, lưu giá trị cuối cùng sau mỗi lần re-render (giống state). Có thể thay đổi trực tiếp. Giá trị thay đổi luôn sau khi update. Không re-render. Tham chiếu tới 1 element → Trả về Node Element → Dễ dàng làm việc với DOM.",
        "exampleText": "Từ react05: Class component có React.createRef, Functional component có useRef.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const inputRef = useRef(null);\n\nuseEffect(() => {\n  inputRef.current.focus();\n}, []);\n\n<input ref={inputRef} />"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 9",
    "title": "Context, Reducer, HOC & Hooks nâng cao",
    "cards": [
      {
        "id": "f8-react-context",
        "title": "Context (Provider & Consumer)",
        "description": "Context là đối tượng truyền nhận dữ liệu. Provider dùng để gửi dữ liệu từ context tới các component khác, Consumer hoặc useContext dùng để nhận dữ liệu từ context.",
        "exampleText": "Từ react03: Truyền state hoặc giá trị toàn cục (global) mà không cần truyền props qua nhiều tầng (prop drilling). Có thể truyền cả hàm updateMessage: setMessage.",
        "codeBlocks": [
          {
            "title": "Tạo & cung cấp Context",
            "code": "export const AppContext = createContext();\n\n<AppContext.Provider value={{\n  message,\n  title,\n  updateMessage: setMessage\n}}>\n  <ComponentA />\n</AppContext.Provider>",
            "codeTsx": "import { createContext, useContext } from 'react';\n\ninterface ThemeContextType {\n  theme: 'light' | 'dark';\n  toggleTheme: () => void;\n}\n\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\nfunction useTheme(): ThemeContextType {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');\n  return ctx;\n}\n\nfunction Button(): JSX.Element {\n  const { theme, toggleTheme } = useTheme();\n  return <button onClick={toggleTheme}>Theme: {theme}</button>;\n}"
          }
        ]
      },
      {
        "id": "f8-react-usereducer",
        "title": "useReducer",
        "description": "Tách logic cập nhật state sang reducer. Phù hợp với state phức tạp hoặc nhiều state (Global State). Hoạt động giống reduce, nhận state và action để trả về state mới. Giải quyết vấn đề: logic phức tạp, không kế thừa được, nhiều component dùng chung state, khó bảo trì.",
        "exampleText": "Từ react04: Tư duy Global State → Component 1, Component 2 (2.1, 2.2), Component 3 (3.1, 3.2) chia sẻ state.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "const [state, dispatch] = useReducer(reducer, initialState);\n\n// Gọi dispatch để cập nhật state\ndispatch({ type: 'ADD_TODO', payload: newTodo });",
            "codeTsx": "import { useReducer } from 'react';\n\ninterface State { count: number; }\ntype Action =\n  | { type: 'increment' }\n  | { type: 'decrement' }\n  | { type: 'reset' };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    case 'decrement': return { count: state.count - 1 };\n    case 'reset': return { count: 0 };\n  }\n}\n\nfunction Counter(): JSX.Element {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  return (\n    <div>\n      <p>{state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "f8-react-hoc",
        "title": "Higher Order Component (HOC)",
        "description": "Là component cấp cao bọc component hiện tại. Tác dụng: Kế thừa logic, ví dụ tự động thêm logic giao diện, random background cho component.",
        "exampleText": "Từ react06: HOC nhận một component và trả về một component mới có thêm logic.",
        "codeBlocks": [
          {
            "title": "Ý tưởng",
            "code": "const EnhancedComponent = higherOrderComponent(WrappedComponent);\n\n// Ví dụ: HOC thêm random background\nfunction withRandomBg(Component) {\n  return function(props) {\n    const bg = randomColor();\n    return <Component {...props} style={{background: bg}} />;\n  };\n}"
          }
        ]
      },
      {
        "id": "f8-react-useid",
        "title": "useId",
        "description": "Hook tạo ID duy nhất cho mỗi instance component, đảm bảo không trùng khi render nhiều lần. Thường dùng cho thuộc tính id/htmlFor trong form.",
        "exampleText": "Từ react07/Input.jsx: Mỗi Input component tự tạo id riêng, không lo trùng lặp khi dùng nhiều lần.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import { useId } from 'react';\n\nconst Input = ({ title, type = 'text' }) => {\n  const id = useId();\n  return (\n    <div>\n      <label htmlFor={id}>{title}</label>\n      <input id={id} type={type} placeholder={title} />\n    </div>\n  );\n};"
          }
        ]
      },
      {
        "id": "f8-react-usetransition",
        "title": "useTransition",
        "description": "Hook đánh dấu một cập nhật state là ưu tiên thấp (transition), giúp UI không bị đóng băng khi xử lý tác vụ nặng (ví dụ: lọc danh sách lớn). pending cho biết transition đang xử lý.",
        "exampleText": "Từ react07/Students.jsx: Dùng startTransition khi filter danh sách 1000+ sinh viên, input vẫn mượt mà.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const [keyword, setKeyword] = useState('');\nconst [pending, startTransition] = useTransition();\n\nconst handleHighlight = (e) => {\n  startTransition(() => {\n    setKeyword(e.target.value);\n  });\n};\n\n{pending && <h2>Loading...</h2>}"
          }
        ]
      },
      {
        "id": "f8-react-redux",
        "title": "Redux Toolkit",
        "description": "Thư viện quản lý state toàn cục. Sử dụng useSelector để lấy state từ store, useDispatch để gọi các action cập nhật state (dùng reducer slice). Có 2 cách dispatch: gửi object thủ công hoặc dùng action creator.",
        "exampleText": "Từ react08/App01.jsx: Counter với increment/decrement bằng Redux Toolkit.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import { useDispatch, useSelector } from 'react-redux';\nimport { counterSlice } from './redux/slices/counterSlice';\nconst { decrement, increment } = counterSlice.actions;\n\nconst count = useSelector((state) => state.counter.count);\nconst dispatch = useDispatch();\n\n// Cách 1: Action creator\ndispatch(increment(5));\n// Cách 2: Object thủ công\n// dispatch({ type: 'counter/increment', payload: 5 });"
          }
        ]
      },
      {
        "id": "f8-react-proptypes",
        "title": "PropTypes",
        "description": "Thư viện kiểm tra kiểu dữ liệu của props khi runtime. Giúp phát hiện lỗi sớm khi truyền sai kiểu props. Hỗ trợ .isRequired để bắt buộc truyền prop.",
        "exampleText": "Từ react07/Input.jsx: Kiểm tra title phải là string bắt buộc, type là string tùy chọn.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import PropTypes from 'prop-types';\n\nInput.propTypes = {\n  title: PropTypes.string.isRequired,\n  type: PropTypes.string,\n};"
          }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 5",
  "title": "TypeScript trong React",
  "cards": [
    {
      "id": "react-ts-props",
      "title": "Định nghĩa Props (Interface)",
      "description": "Khi dùng TypeScript, chúng ta cần định nghĩa kiểu dữ liệu cho props truyền vào Component thông qua Interface hoặc Type.",
      "exampleText": "Tránh dùng 'any', hãy định nghĩa rõ ràng kiểu dữ liệu để tận dụng sức mạnh của TS.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "interface ButtonProps {\n  text: string;\n  color?: string; // Optional prop\n  onClick: () => void;\n}\n\nfunction Button({ text, color = 'blue', onClick }: ButtonProps) {\n  return (\n    <button style={{ backgroundColor: color }} onClick={onClick}>\n      {text}\n    </button>\n  );\n}",
          "codeTsx": "interface ButtonProps {\n  text: string;\n  color?: string; // Optional prop\n  onClick: () => void;\n}\n\nfunction Button({ text, color = 'blue', onClick }: ButtonProps): JSX.Element {\n  return (\n    <button style={{ backgroundColor: color }} onClick={onClick}>\n      {text}\n    </button>\n  );\n}"
        }
      ]
    },
    {
      "id": "react-ts-event",
      "title": "Định nghĩa Event (Sự kiện)",
      "description": "TypeScript cung cấp sẵn các kiểu dữ liệu cho sự kiện React như React.MouseEvent, React.ChangeEvent, React.FormEvent.",
      "exampleText": "Nên truyền thẳng hàm vào onChange để VSCode tự suy luận kiểu (inference), hoặc tự khai báo tường minh.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "function InputForm() {\n  const [val, setVal] = useState('');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setVal(e.target.value);\n  };\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    console.log(val);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input onChange={handleChange} value={val} />\n      <button type=\"submit\">Gửi</button>\n    </form>\n  );\n}",
          "codeTsx": "import { useState } from 'react';\n\nfunction InputForm(): JSX.Element {\n  const [val, setVal] = useState<string>('');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {\n    setVal(e.target.value);\n  };\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {\n    e.preventDefault();\n    console.log(val);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input onChange={handleChange} value={val} />\n      <button type=\"submit\">Gửi</button>\n    </form>\n  );\n}"
        }
      ]
    },
    {
      "id": "react-ts-children",
      "title": "Định nghĩa Children",
      "description": "Để định nghĩa children prop trong React, chúng ta sử dụng kiểu React.ReactNode (bao phủ tất cả những gì có thể render được như string, element, mảng...).",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "interface CardProps {\n  title: string;\n  children: React.ReactNode;\n}\n\nfunction Card({ title, children }: CardProps) {\n  return (\n    <div className=\"card\">\n      <h3>{title}</h3>\n      <div className=\"content\">{children}</div>\n    </div>\n  );\n}",
          "codeTsx": "interface CardProps {\n  title: string;\n  children: React.ReactNode;\n}\n\nfunction Card({ title, children }: CardProps): JSX.Element {\n  return (\n    <div className=\"card\">\n      <h3>{title}</h3>\n      <div className=\"content\">{children}</div>\n    </div>\n  );\n}"
        }
      ]
    }
  ]
},
{
  "label": "Nhóm 10",
  "title": "Xử lý File & Bộ nhớ (Blob, URL)",
  "cards": [
    {
      "id": "react-revoke-object-url",
      "title": "URL.createObjectURL & URL.revokeObjectURL",
      "description": "Trong React, khi chọn file ảnh (input type='file'), ta dùng URL.createObjectURL(file) để tạo đường dẫn tạm thời (Blob URL) xem trước ảnh mà không cần tải lên server. Tuy nhiên, URL này được lưu trong bộ nhớ. Để tránh rò rỉ bộ nhớ (memory leak), ta BẮT BUỘC phải gọi URL.revokeObjectURL() trong hàm cleanup của useEffect khi component bị unmount hoặc khi ảnh thay đổi.",
      "exampleText": "Ứng dụng trong Preview Image trước khi upload: Tạo preview URL khi chọn file và dọn dẹp nó bằng useEffect cleanup function.",
      "codeBlocks": [
        {
          "title": "Ví dụ Preview Image",
          "code": "import { useState, useEffect } from 'react';\n\nexport default function PreviewImage() {\n  const [preview, setPreview] = useState(null);\n\n  const handleFileChange = (e) => {\n    const file = e.target.files[0];\n    if (file) {\n      const url = URL.createObjectURL(file);\n      setPreview(url);\n    }\n  };\n\n  useEffect(() => {\n    // Cleanup function: Dọn dẹp bộ nhớ\n    return () => {\n      if (preview) {\n        URL.revokeObjectURL(preview);\n      }\n    };\n  }, [preview]);\n\n  return (\n    <div>\n      <input type=\"file\" onChange={handleFileChange} />\n      {preview && <img src={preview} width=\"300\" />}\n    </div>\n  );\n}"
        }
      ]
    }
  ]
}];
