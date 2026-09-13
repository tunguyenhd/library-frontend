import type { KnowledgeGroup } from "../types/knowledge";

export const flutterGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "Flutter & Dart cơ bản, khởi tạo project",
    "cards": [
      {
        "id": "flutter-introduction",
        "title": "Flutter là gì",
        "description": "Flutter là framework UI mã nguồn mở do Google phát triển, cho phép xây dựng ứng dụng native cho mobile (iOS, Android), web và desktop từ một codebase duy nhất. Flutter dùng ngôn ngữ Dart và render UI bằng engine riêng (Skia/Impeller) thay vì dùng native component, đảm bảo giao diện giống nhau trên mọi nền tảng.",
        "exampleText": "Một ứng dụng Todo viết bằng Flutter có thể chạy trên iPhone, Android, trình duyệt web và máy tính Windows/macOS mà không cần viết lại code.",
        "codeBlocks": [
          {
            "title": "Ý tưởng cơ bản",
            "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(\n    const MaterialApp(\n      home: Scaffold(\n        body: Center(\n          child: Text('Xin chào Flutter!'),\n        ),\n      ),\n    ),\n  );\n}"
          },
          {
            "title": "So sánh với React Native",
            "code": "// Flutter: render bằng engine riêng (Skia/Impeller)\n// → UI giống pixel-perfect trên mọi platform\n// → Dùng ngôn ngữ Dart\n// → Widget tree (tất cả đều là Widget)\n\n// React Native: bridge sang native components\n// → UI dùng native component thật\n// → Dùng JavaScript/TypeScript\n// → Component tree"
          }
        ]
      },
      {
        "id": "flutter-dart-basics",
        "title": "Dart cơ bản",
        "description": "Dart là ngôn ngữ lập trình do Google tạo ra, được dùng để viết Flutter. Dart hỗ trợ: type-safe (kiểu tĩnh), null safety, async/await, class và mixin. Cú pháp gần giống Java/TypeScript nên dễ học.",
        "exampleText": "Nếu đã biết JavaScript hoặc Java, học Dart khá nhanh vì cú pháp tương tự.",
        "codeBlocks": [
          {
            "title": "Biến & kiểu dữ liệu",
            "code": "// Khai báo biến\nString name = 'Flutter';\nint age = 5;\ndouble version = 3.24;\nbool isAwesome = true;\nList<String> topics = ['Widget', 'State', 'Layout'];\nMap<String, int> scores = {'math': 90, 'english': 85};\n\n// var: tự suy luận kiểu\nvar greeting = 'Xin chào'; // String\n\n// final & const (không đổi giá trị)\nfinal String appName = 'My App'; // runtime constant\nconst double pi = 3.14159;       // compile-time constant\n\n// Null safety\nString? nullableName; // có thể null\nString nonNullName = 'Dart'; // không thể null"
          },
          {
            "title": "Function & Class",
            "code": "// Function\nint add(int a, int b) {\n  return a + b;\n}\n\n// Arrow function\nint multiply(int a, int b) => a * b;\n\n// Named parameters\nvoid greet({required String name, int age = 0}) {\n  print('Xin chào $name, $age tuổi');\n}\n\n// Class\nclass User {\n  final String name;\n  final int age;\n\n  const User({required this.name, required this.age});\n\n  String get info => '$name - $age tuổi';\n}\n\n// Sử dụng\nfinal user = User(name: 'An', age: 25);\nprint(user.info); // An - 25 tuổi"
          }
        ]
      },
      {
        "id": "flutter-create-project",
        "title": "Tạo project Flutter",
        "description": "Dùng Flutter CLI để tạo project mới. Cần cài Flutter SDK và Dart trước. Sau khi tạo, project có sẵn cấu trúc thư mục chuẩn với file main.dart là entry point.",
        "exampleText": "Chạy lệnh flutter create sẽ tạo project mới với đầy đủ cấu trúc thư mục cho iOS, Android, web.",
        "codeBlocks": [
          {
            "title": "Tạo project",
            "code": "# Tạo project mới\nflutter create my_app\n\n# Tạo với package name cụ thể\nflutter create --org com.example my_app\n\n# Kiểm tra Flutter đã cài đúng chưa\nflutter doctor"
          },
          {
            "title": "Chạy project",
            "code": "cd my_app\n\n# Chạy trên thiết bị/emulator đang kết nối\nflutter run\n\n# Chạy trên Chrome (web)\nflutter run -d chrome\n\n# Chạy trên iOS simulator\nflutter run -d ios\n\n# Hot reload: nhấn 'r' trong terminal\n# Hot restart: nhấn 'R' trong terminal"
          }
        ]
      },
      {
        "id": "flutter-project-structure",
        "title": "Cấu trúc project Flutter",
        "description": "Project Flutter có lib/ chứa code Dart chính, android/ và ios/ chứa config native, web/ cho web app, test/ chứa unit test, và pubspec.yaml quản lý dependencies.",
        "exampleText": "File main.dart trong thư mục lib/ là nơi bắt đầu của ứng dụng, tương tự main.tsx trong React.",
        "codeBlocks": [
          {
            "title": "Cấu trúc thư mục",
            "code": "my_app/\n├── android/              # Android native config\n├── ios/                  # iOS native config\n├── web/                  # Web config\n├── lib/                  # Code Dart chính\n│   ├── main.dart         # Entry point\n│   ├── screens/          # Các màn hình\n│   ├── widgets/          # Widget tái sử dụng\n│   ├── models/           # Data models\n│   ├── services/         # API, storage\n│   └── utils/            # Helpers\n├── test/                 # Unit & widget tests\n├── assets/               # Images, fonts\n├── pubspec.yaml          # Dependencies\n└── pubspec.lock"
          },
          {
            "title": "pubspec.yaml",
            "code": "name: my_app\ndescription: A Flutter application.\npublish_to: 'none'\nversion: 1.0.0+1\n\nenvironment:\n  sdk: '>=3.0.0 <4.0.0'\n\ndependencies:\n  flutter:\n    sdk: flutter\n  http: ^1.1.0\n  provider: ^6.1.0\n  shared_preferences: ^2.2.0\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n  flutter_lints: ^3.0.0\n\nflutter:\n  uses-material-design: true\n  assets:\n    - assets/images/"
          }
        ]
      },
      {
        "id": "flutter-hot-reload",
        "title": "Hot Reload & Hot Restart",
        "description": "Hot Reload là tính năng giúp cập nhật UI ngay lập tức khi sửa code mà không mất state hiện tại. Hot Restart thì khởi động lại app từ đầu (mất state). Đây là một trong những ưu điểm lớn nhất của Flutter.",
        "exampleText": "Khi đổi màu button từ xanh sang đỏ, nhấn Ctrl+S (với auto-save) hoặc 'r' trong terminal, UI cập nhật ngay không cần chờ build lại.",
        "codeBlocks": [
          {
            "title": "Cách sử dụng",
            "code": "# Trong terminal khi đang flutter run:\n# r  → Hot Reload (giữ state)\n# R  → Hot Restart (reset state)\n# q  → Thoát\n\n# Trong IDE:\n# VS Code: Ctrl+S (auto hot reload)\n# Android Studio: Ctrl+\\ (hot reload)"
          },
          {
            "title": "Khi nào cần Hot Restart",
            "code": "// Hot Reload ĐỦ khi:\n// ✅ Sửa UI (đổi màu, font, layout)\n// ✅ Sửa logic trong build()\n// ✅ Thêm/sửa widget\n\n// Cần Hot Restart khi:\n// ⚠️ Sửa initState()\n// ⚠️ Thêm static field\n// ⚠️ Đổi enum values\n// ⚠️ Thêm generic type params\n\n// Cần build lại (flutter run) khi:\n// ❌ Thêm native plugin mới\n// ❌ Sửa pubspec.yaml\n// ❌ Sửa code trong android/ hoặc ios/"
          }
        ]
      },
      {
        "id": "flutter-main-dart",
        "title": "File main.dart",
        "description": "main.dart là entry point của ứng dụng Flutter. Hàm main() gọi runApp() với widget gốc. Widget gốc thường là MaterialApp (Material Design) hoặc CupertinoApp (iOS style).",
        "exampleText": "runApp() giống createRoot().render() trong React — nó gắn widget gốc vào màn hình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'My App',\n      debugShowCheckedModeBanner: false,\n      theme: ThemeData(\n        colorSchemeSeed: Colors.blue,\n        useMaterial3: true,\n      ),\n      home: const HomeScreen(),\n    );\n  }\n}\n\nclass HomeScreen extends StatelessWidget {\n  const HomeScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Trang chủ')),\n      body: const Center(\n        child: Text('Xin chào Flutter!'),\n      ),\n    );\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Widget cơ bản",
    "cards": [
      {
        "id": "flutter-stateless-widget",
        "title": "StatelessWidget",
        "description": "StatelessWidget là widget không có state nội bộ. Nó chỉ phụ thuộc vào dữ liệu truyền vào qua constructor. Một khi được tạo, giao diện không thay đổi trừ khi widget cha rebuild với dữ liệu mới.",
        "exampleText": "Một widget hiển thị tên người dùng không cần state riêng — chỉ nhận tên qua constructor và hiển thị.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "class MyWidget extends StatelessWidget {\n  const MyWidget({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(); // Trả về widget tree\n  }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "class UserCard extends StatelessWidget {\n  final String name;\n  final String email;\n\n  const UserCard({\n    super.key,\n    required this.name,\n    required this.email,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      child: Padding(\n        padding: const EdgeInsets.all(16),\n        child: Column(\n          crossAxisAlignment: CrossAxisAlignment.start,\n          children: [\n            Text(\n              name,\n              style: const TextStyle(\n                fontSize: 18,\n                fontWeight: FontWeight.bold,\n              ),\n            ),\n            const SizedBox(height: 4),\n            Text(\n              email,\n              style: TextStyle(color: Colors.grey[600]),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-stateful-widget",
        "title": "StatefulWidget",
        "description": "StatefulWidget là widget có state nội bộ có thể thay đổi. Gồm 2 class: widget class (immutable) và state class (mutable). Gọi setState() để cập nhật state và trigger rebuild giao diện.",
        "exampleText": "Counter app: nhấn nút tăng số, state thay đổi và giao diện cập nhật — cần StatefulWidget.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "class MyWidget extends StatefulWidget {\n  const MyWidget({super.key});\n\n  @override\n  State<MyWidget> createState() => _MyWidgetState();\n}\n\nclass _MyWidgetState extends State<MyWidget> {\n  // State variables ở đây\n\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}"
          },
          {
            "title": "Ví dụ",
            "code": "class Counter extends StatefulWidget {\n  const Counter({super.key});\n\n  @override\n  State<Counter> createState() => _CounterState();\n}\n\nclass _CounterState extends State<Counter> {\n  int _count = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      mainAxisAlignment: MainAxisAlignment.center,\n      children: [\n        Text(\n          '$_count',\n          style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),\n        ),\n        const SizedBox(height: 16),\n        Row(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            FloatingActionButton(\n              onPressed: () => setState(() => _count--),\n              child: const Icon(Icons.remove),\n            ),\n            const SizedBox(width: 16),\n            FloatingActionButton(\n              onPressed: () => setState(() => _count++),\n              child: const Icon(Icons.add),\n            ),\n          ],\n        ),\n      ],\n    );\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-container",
        "title": "Container",
        "description": "Container là widget đa năng kết hợp painting, positioning và sizing. Tương đương div có style trong HTML. Có thể set decoration (border, borderRadius, gradient), padding, margin, width, height.",
        "exampleText": "Một card với viền bo tròn, shadow, padding bên trong có thể dùng Container với BoxDecoration.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Container(\n  width: 200,\n  height: 100,\n  padding: const EdgeInsets.all(16),\n  margin: const EdgeInsets.all(8),\n  decoration: BoxDecoration(\n    color: Colors.white,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: Text('Nội dung'),\n)"
          },
          {
            "title": "Ví dụ",
            "code": "Container(\n  width: double.infinity,\n  padding: const EdgeInsets.all(20),\n  margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),\n  decoration: BoxDecoration(\n    gradient: const LinearGradient(\n      colors: [Color(0xFF3b82f6), Color(0xFF8b5cf6)],\n    ),\n    borderRadius: BorderRadius.circular(16),\n    boxShadow: [\n      BoxShadow(\n        color: Colors.blue.withOpacity(0.3),\n        blurRadius: 12,\n        offset: const Offset(0, 4),\n      ),\n    ],\n  ),\n  child: const Column(\n    crossAxisAlignment: CrossAxisAlignment.start,\n    children: [\n      Text(\n        'Flutter',\n        style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),\n      ),\n      SizedBox(height: 4),\n      Text(\n        'Framework xây dựng UI đa nền tảng',\n        style: TextStyle(color: Colors.white70, fontSize: 14),\n      ),\n    ],\n  ),\n)"
          }
        ]
      },
      {
        "id": "flutter-row-column",
        "title": "Row & Column",
        "description": "Row sắp xếp children theo chiều ngang. Column sắp xếp children theo chiều dọc. Cả hai đều hỗ trợ mainAxisAlignment (trục chính) và crossAxisAlignment (trục phụ).",
        "exampleText": "Header có logo bên trái và menu bên phải dùng Row. Danh sách setting items xếp dọc dùng Column.",
        "codeBlocks": [
          {
            "title": "Row (ngang)",
            "code": "Row(\n  mainAxisAlignment: MainAxisAlignment.spaceBetween,\n  crossAxisAlignment: CrossAxisAlignment.center,\n  children: [\n    Text('Tên sản phẩm'),\n    Text('150.000đ',\n      style: TextStyle(fontWeight: FontWeight.bold),\n    ),\n  ],\n)"
          },
          {
            "title": "Column (dọc)",
            "code": "Column(\n  mainAxisAlignment: MainAxisAlignment.start,\n  crossAxisAlignment: CrossAxisAlignment.stretch,\n  children: [\n    Container(\n      padding: const EdgeInsets.all(16),\n      color: Colors.blue,\n      child: const Text('Header',\n        style: TextStyle(color: Colors.white)),\n    ),\n    const Expanded(\n      child: Center(child: Text('Content')),\n    ),\n    Container(\n      padding: const EdgeInsets.all(16),\n      color: Colors.grey[200],\n      child: const Text('Footer'),\n    ),\n  ],\n)\n\n// MainAxisAlignment values:\n// start, end, center, spaceBetween,\n// spaceAround, spaceEvenly"
          }
        ]
      },
      {
        "id": "flutter-stack",
        "title": "Stack & Positioned",
        "description": "Stack cho phép chồng widget lên nhau (giống position: relative/absolute trong CSS). Widget sau sẽ nằm trên widget trước. Dùng Positioned để đặt vị trí cụ thể cho child trong Stack.",
        "exampleText": "Ảnh sản phẩm với badge giảm giá ở góc trên phải — dùng Stack chồng badge lên ảnh.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "Stack(\n  children: [\n    Widget1(), // Nằm dưới\n    Widget2(), // Nằm trên\n    Positioned(\n      top: 8,\n      right: 8,\n      child: Widget3(), // Vị trí cụ thể\n    ),\n  ],\n)"
          },
          {
            "title": "Ví dụ",
            "code": "Stack(\n  children: [\n    // Ảnh nền\n    ClipRRect(\n      borderRadius: BorderRadius.circular(12),\n      child: Image.network(\n        'https://example.com/product.jpg',\n        width: double.infinity,\n        height: 200,\n        fit: BoxFit.cover,\n      ),\n    ),\n    // Badge giảm giá\n    Positioned(\n      top: 8,\n      right: 8,\n      child: Container(\n        padding: const EdgeInsets.symmetric(\n          horizontal: 8, vertical: 4),\n        decoration: BoxDecoration(\n          color: Colors.red,\n          borderRadius: BorderRadius.circular(4),\n        ),\n        child: const Text(\n          '-30%',\n          style: TextStyle(color: Colors.white,\n            fontWeight: FontWeight.bold),\n        ),\n      ),\n    ),\n  ],\n)"
          }
        ]
      },
      {
        "id": "flutter-text-widget",
        "title": "Text & TextStyle",
        "description": "Text widget dùng để hiển thị văn bản. TextStyle dùng để định dạng text (font size, weight, color, letterSpacing...). Có thể dùng RichText hoặc Text.rich để kết hợp nhiều style trong một đoạn text.",
        "exampleText": "Tiêu đề bài viết dùng Text với TextStyle bold và cỡ lớn, mô tả dùng TextStyle nhỏ hơn và màu xám.",
        "codeBlocks": [
          {
            "title": "Text cơ bản",
            "code": "Text(\n  'Xin chào Flutter',\n  style: TextStyle(\n    fontSize: 24,\n    fontWeight: FontWeight.bold,\n    color: Color(0xFF111827),\n    letterSpacing: 0.5,\n    height: 1.5, // line-height\n  ),\n  textAlign: TextAlign.center,\n  maxLines: 2,\n  overflow: TextOverflow.ellipsis,\n)"
          },
          {
            "title": "Rich Text",
            "code": "Text.rich(\n  TextSpan(\n    text: 'Flutter ',\n    style: const TextStyle(fontSize: 18),\n    children: [\n      TextSpan(\n        text: 'cơ bản',\n        style: TextStyle(\n          fontWeight: FontWeight.bold,\n          color: Colors.blue[700],\n        ),\n      ),\n      const TextSpan(text: ' cho người mới'),\n    ],\n  ),\n)"
          }
        ]
      },
      {
        "id": "flutter-image-icon",
        "title": "Image & Icon",
        "description": "Image widget hiển thị hình ảnh từ network, assets, hoặc file. Icon widget hiển thị Material Icons có sẵn. Flutter có bộ icon Material rất phong phú, không cần thêm thư viện icon.",
        "exampleText": "Logo app dùng Image.asset từ thư mục assets. Nút menu dùng Icon(Icons.menu).",
        "codeBlocks": [
          {
            "title": "Image",
            "code": "// Hình từ internet\nImage.network(\n  'https://example.com/photo.jpg',\n  width: 200,\n  height: 200,\n  fit: BoxFit.cover,\n  loadingBuilder: (context, child, progress) {\n    if (progress == null) return child;\n    return const CircularProgressIndicator();\n  },\n)\n\n// Hình từ assets\nImage.asset(\n  'assets/images/logo.png',\n  width: 100,\n)"
          },
          {
            "title": "Icon",
            "code": "// Icon cơ bản\nIcon(\n  Icons.favorite,\n  color: Colors.red,\n  size: 32,\n)\n\n// Icon trong button\nIconButton(\n  icon: const Icon(Icons.delete, color: Colors.red),\n  onPressed: () => print('Xóa'),\n  tooltip: 'Xóa',\n)\n\n// Icon phổ biến:\n// Icons.home, Icons.search, Icons.settings\n// Icons.person, Icons.add, Icons.edit\n// Icons.delete, Icons.close, Icons.menu\n// Icons.arrow_back, Icons.chevron_right"
          }
        ]
      },
      {
        "id": "flutter-scaffold",
        "title": "Scaffold & AppBar",
        "description": "Scaffold cung cấp cấu trúc layout chuẩn cho một màn hình: appBar, body, bottomNavigationBar, floatingActionButton, drawer. AppBar là thanh header phía trên với title, actions và leading.",
        "exampleText": "Một màn hình chuẩn có AppBar với tiêu đề, body chứa nội dung, và FloatingActionButton ở góc dưới.",
        "codeBlocks": [
          {
            "title": "Scaffold cơ bản",
            "code": "Scaffold(\n  appBar: AppBar(\n    title: const Text('Trang chủ'),\n    actions: [\n      IconButton(\n        icon: const Icon(Icons.search),\n        onPressed: () {},\n      ),\n    ],\n  ),\n  body: const Center(\n    child: Text('Nội dung chính'),\n  ),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n)"
          },
          {
            "title": "Scaffold đầy đủ",
            "code": "Scaffold(\n  appBar: AppBar(\n    leading: IconButton(\n      icon: const Icon(Icons.menu),\n      onPressed: () {},\n    ),\n    title: const Text('My App'),\n    centerTitle: true,\n    backgroundColor: Colors.blue,\n    foregroundColor: Colors.white,\n    elevation: 0,\n    actions: [\n      IconButton(icon: const Icon(Icons.search), onPressed: () {}),\n      IconButton(icon: const Icon(Icons.more_vert), onPressed: () {}),\n    ],\n  ),\n  body: ListView(\n    children: const [\n      ListTile(title: Text('Item 1')),\n      ListTile(title: Text('Item 2')),\n    ],\n  ),\n  bottomNavigationBar: BottomNavigationBar(\n    items: const [\n      BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),\n      BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),\n    ],\n  ),\n)"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Layout & Styling",
    "cards": [
      {
        "id": "flutter-padding-margin",
        "title": "Padding & Margin",
        "description": "Padding widget thêm khoảng cách bên trong. Margin thêm khoảng cách bên ngoài (thường dùng qua Container). EdgeInsets dùng để set giá trị padding/margin với các method: all(), symmetric(), only(), fromLTRB().",
        "exampleText": "Card có padding bên trong 16px và margin bên ngoài 8px để tạo khoảng cách giữa các card.",
        "codeBlocks": [
          {
            "title": "EdgeInsets",
            "code": "// Tất cả các cạnh\nEdgeInsets.all(16)\n\n// Ngang và dọc\nEdgeInsets.symmetric(horizontal: 16, vertical: 8)\n\n// Từng cạnh\nEdgeInsets.only(left: 16, top: 8)\n\n// Left, Top, Right, Bottom\nEdgeInsets.fromLTRB(16, 8, 16, 8)"
          },
          {
            "title": "Ví dụ",
            "code": "// Padding widget\nPadding(\n  padding: const EdgeInsets.all(16),\n  child: Text('Nội dung có padding'),\n)\n\n// Container với padding + margin\nContainer(\n  padding: const EdgeInsets.all(16),\n  margin: const EdgeInsets.symmetric(\n    horizontal: 16, vertical: 8),\n  decoration: BoxDecoration(\n    color: Colors.white,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: const Text('Card content'),\n)"
          }
        ]
      },
      {
        "id": "flutter-sizedbox-spacer",
        "title": "SizedBox & Spacer",
        "description": "SizedBox tạo box có kích thước cố định, thường dùng làm khoảng cách giữa các widget. Spacer chiếm hết không gian còn lại trong Row/Column (tương đương flex: 1 trống).",
        "exampleText": "Giữa tiêu đề và mô tả thêm SizedBox(height: 8) để tạo khoảng cách 8px.",
        "codeBlocks": [
          {
            "title": "SizedBox",
            "code": "Column(\n  children: [\n    Text('Tiêu đề', style: TextStyle(fontSize: 24)),\n    const SizedBox(height: 8),  // Khoảng cách dọc\n    Text('Mô tả'),\n    const SizedBox(height: 16),\n    ElevatedButton(\n      onPressed: () {},\n      child: const Text('Bắt đầu'),\n    ),\n  ],\n)"
          },
          {
            "title": "Spacer",
            "code": "// Spacer đẩy widget ra hai đầu\nRow(\n  children: [\n    const Text('Logo'),\n    const Spacer(), // Chiếm hết khoảng trống\n    IconButton(\n      icon: const Icon(Icons.settings),\n      onPressed: () {},\n    ),\n  ],\n)\n\n// Kết quả: Logo bên trái, icon bên phải"
          }
        ]
      },
      {
        "id": "flutter-expanded-flexible",
        "title": "Expanded & Flexible",
        "description": "Expanded bắt widget con chiếm hết không gian còn lại trong Row/Column (flex: 1 mặc định). Flexible cho phép widget con chiếm tối đa không gian được phân, nhưng có thể nhỏ hơn.",
        "exampleText": "Layout 2 cột: cột trái cố định 100px, cột phải Expanded chiếm hết phần còn lại.",
        "codeBlocks": [
          {
            "title": "Expanded",
            "code": "Row(\n  children: [\n    // Cố định 80px\n    Container(width: 80, height: 80, color: Colors.blue),\n    const SizedBox(width: 12),\n    // Chiếm hết phần còn lại\n    Expanded(\n      child: Column(\n        crossAxisAlignment: CrossAxisAlignment.start,\n        children: [\n          Text('Tên sản phẩm',\n            style: TextStyle(fontWeight: FontWeight.bold)),\n          Text('Mô tả ngắn...'),\n        ],\n      ),\n    ),\n  ],\n)"
          },
          {
            "title": "Flex ratio",
            "code": "Row(\n  children: [\n    // 1/3 chiều rộng\n    Expanded(\n      flex: 1,\n      child: Container(color: Colors.red, height: 50),\n    ),\n    // 2/3 chiều rộng\n    Expanded(\n      flex: 2,\n      child: Container(color: Colors.blue, height: 50),\n    ),\n  ],\n)\n\n// Flexible vs Expanded:\n// Expanded = Flexible(fit: FlexFit.tight)\n//   → Bắt buộc chiếm hết\n// Flexible(fit: FlexFit.loose)\n//   → Có thể nhỏ hơn"
          }
        ]
      },
      {
        "id": "flutter-listview",
        "title": "ListView",
        "description": "ListView là widget cuộn được để hiển thị danh sách. ListView.builder dùng cho danh sách dài vì chỉ build item đang hiển thị (lazy loading). ListView thường dùng thay ScrollView + Column.",
        "exampleText": "Danh sách 100 sản phẩm dùng ListView.builder để chỉ render sản phẩm đang hiển thị trên màn hình.",
        "codeBlocks": [
          {
            "title": "ListView.builder",
            "code": "ListView.builder(\n  itemCount: products.length,\n  itemBuilder: (context, index) {\n    final product = products[index];\n    return ListTile(\n      title: Text(product.name),\n      subtitle: Text('${product.price}đ'),\n      trailing: const Icon(Icons.chevron_right),\n      onTap: () => openProduct(product),\n    );\n  },\n)"
          },
          {
            "title": "ListView.separated",
            "code": "ListView.separated(\n  itemCount: items.length,\n  separatorBuilder: (context, index) => const Divider(),\n  itemBuilder: (context, index) {\n    return ListTile(\n      leading: CircleAvatar(\n        child: Text(items[index].name[0]),\n      ),\n      title: Text(items[index].name),\n      subtitle: Text(items[index].email),\n    );\n  },\n)"
          }
        ]
      },
      {
        "id": "flutter-mediaquery-theme",
        "title": "MediaQuery & Theme",
        "description": "MediaQuery cung cấp thông tin về thiết bị (kích thước màn hình, padding, orientation). Theme cho phép định nghĩa style chung cho toàn bộ app (màu sắc, typography, component themes).",
        "exampleText": "Dùng MediaQuery để kiểm tra chiều rộng màn hình và hiển thị layout khác nhau cho tablet và phone.",
        "codeBlocks": [
          {
            "title": "MediaQuery",
            "code": "@override\nWidget build(BuildContext context) {\n  final size = MediaQuery.of(context).size;\n  final padding = MediaQuery.of(context).padding;\n  final isTablet = size.width > 600;\n\n  return isTablet\n      ? Row(\n          children: [\n            SizedBox(width: 300, child: Sidebar()),\n            Expanded(child: MainContent()),\n          ],\n        )\n      : MainContent();\n}"
          },
          {
            "title": "Theme",
            "code": "// Định nghĩa theme\nMaterialApp(\n  theme: ThemeData(\n    colorSchemeSeed: Colors.blue,\n    useMaterial3: true,\n    textTheme: const TextTheme(\n      headlineLarge: TextStyle(\n        fontWeight: FontWeight.bold,\n        fontSize: 28,\n      ),\n      bodyMedium: TextStyle(fontSize: 16),\n    ),\n  ),\n  home: const HomeScreen(),\n)\n\n// Sử dụng theme\n@override\nWidget build(BuildContext context) {\n  final theme = Theme.of(context);\n\n  return Text(\n    'Tiêu đề',\n    style: theme.textTheme.headlineLarge,\n  );\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Navigation & Routing",
    "cards": [
      {
        "id": "flutter-navigator-push-pop",
        "title": "Navigator.push & pop",
        "description": "Navigator quản lý stack màn hình trong Flutter. push() thêm màn hình mới lên trên stack. pop() quay lại màn hình trước. Navigator hoạt động theo cơ chế LIFO (Last In, First Out).",
        "exampleText": "Nhấn vào sản phẩm → push màn hình chi tiết lên. Nhấn nút back → pop quay lại danh sách.",
        "codeBlocks": [
          {
            "title": "Push (chuyển trang)",
            "code": "// Push màn hình mới\nNavigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => const DetailScreen(),\n  ),\n);\n\n// Push và nhận kết quả trả về\nfinal result = await Navigator.push<String>(\n  context,\n  MaterialPageRoute(\n    builder: (context) => const SelectScreen(),\n  ),\n);\nprint('Kết quả: $result');"
          },
          {
            "title": "Pop (quay lại)",
            "code": "// Quay lại trang trước\nNavigator.pop(context);\n\n// Quay lại và trả kết quả\nNavigator.pop(context, 'selected_item');\n\n// Replace trang hiện tại\nNavigator.pushReplacement(\n  context,\n  MaterialPageRoute(builder: (context) => const HomeScreen()),\n);\n\n// Xóa hết stack và push trang mới (ví dụ sau login)\nNavigator.pushAndRemoveUntil(\n  context,\n  MaterialPageRoute(builder: (context) => const HomeScreen()),\n  (route) => false, // Xóa tất cả routes\n);"
          }
        ]
      },
      {
        "id": "flutter-named-routes",
        "title": "Named Routes",
        "description": "Named routes cho phép định nghĩa routes bằng tên (string) trong MaterialApp. Dùng Navigator.pushNamed() để điều hướng. Cách này giúp quản lý routes tập trung và dễ bảo trì.",
        "exampleText": "Thay vì viết MaterialPageRoute mỗi lần, chỉ cần gọi Navigator.pushNamed(context, '/detail').",
        "codeBlocks": [
          {
            "title": "Định nghĩa routes",
            "code": "MaterialApp(\n  initialRoute: '/',\n  routes: {\n    '/': (context) => const HomeScreen(),\n    '/detail': (context) => const DetailScreen(),\n    '/settings': (context) => const SettingsScreen(),\n    '/profile': (context) => const ProfileScreen(),\n  },\n)"
          },
          {
            "title": "Sử dụng",
            "code": "// Điều hướng bằng tên\nNavigator.pushNamed(context, '/detail');\n\n// Truyền arguments\nNavigator.pushNamed(\n  context,\n  '/detail',\n  arguments: {'id': 42, 'title': 'Flutter'},\n);\n\n// Nhận arguments\nclass DetailScreen extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    final args = ModalRoute.of(context)!.settings.arguments\n        as Map<String, dynamic>;\n\n    return Scaffold(\n      appBar: AppBar(title: Text(args['title'])),\n      body: Text('ID: ${args[\"id\"]}'),\n    );\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-go-router",
        "title": "GoRouter",
        "description": "GoRouter là thư viện routing phổ biến cho Flutter, hỗ trợ declarative routing, deep linking, nested navigation, và redirects. Được Google duy trì và là routing solution khuyên dùng cho các app lớn.",
        "exampleText": "App có nested tabs, deep linking từ URL, và auth redirect dùng GoRouter cho dễ quản lý.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add go_router"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:go_router/go_router.dart';\n\nfinal router = GoRouter(\n  initialLocation: '/',\n  routes: [\n    GoRoute(\n      path: '/',\n      builder: (context, state) => const HomeScreen(),\n    ),\n    GoRoute(\n      path: '/product/:id',\n      builder: (context, state) {\n        final id = state.pathParameters['id']!;\n        return ProductScreen(id: id);\n      },\n    ),\n    GoRoute(\n      path: '/settings',\n      builder: (context, state) => const SettingsScreen(),\n    ),\n  ],\n  redirect: (context, state) {\n    final isLoggedIn = authService.isLoggedIn;\n    if (!isLoggedIn && state.matchedLocation != '/login') {\n      return '/login';\n    }\n    return null;\n  },\n);\n\n// Sử dụng trong MaterialApp\nMaterialApp.router(routerConfig: router)\n\n// Điều hướng\ncontext.go('/product/42');\ncontext.push('/settings');\ncontext.pop();"
          }
        ]
      },
      {
        "id": "flutter-pass-arguments",
        "title": "Truyền dữ liệu giữa màn hình",
        "description": "Có nhiều cách truyền dữ liệu giữa các màn hình: qua constructor (phổ biến nhất), qua route arguments, qua path/query parameters (GoRouter), hoặc qua state management.",
        "exampleText": "Từ danh sách sản phẩm, nhấn vào sản phẩm thì truyền cả object Product sang màn hình chi tiết.",
        "codeBlocks": [
          {
            "title": "Qua constructor",
            "code": "// Màn hình nhận dữ liệu\nclass ProductDetail extends StatelessWidget {\n  final Product product;\n\n  const ProductDetail({super.key, required this.product});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text(product.name)),\n      body: Text('Giá: ${product.price}đ'),\n    );\n  }\n}\n\n// Truyền khi push\nNavigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => ProductDetail(product: myProduct),\n  ),\n);"
          },
          {
            "title": "Nhận kết quả trả về",
            "code": "// Màn hình A: push và đợi kết quả\nfinal selectedColor = await Navigator.push<String>(\n  context,\n  MaterialPageRoute(\n    builder: (context) => const ColorPicker(),\n  ),\n);\n\nif (selectedColor != null) {\n  setState(() => _color = selectedColor);\n}\n\n// Màn hình B: pop và trả kết quả\nclass ColorPicker extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: Column(\n        children: [\n          ElevatedButton(\n            onPressed: () => Navigator.pop(context, 'red'),\n            child: const Text('Đỏ'),\n          ),\n          ElevatedButton(\n            onPressed: () => Navigator.pop(context, 'blue'),\n            child: const Text('Xanh'),\n          ),\n        ],\n      ),\n    );\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "State Management",
    "cards": [
      {
        "id": "flutter-setstate",
        "title": "setState",
        "description": "setState() là cách đơn giản nhất để quản lý state local trong StatefulWidget. Khi gọi setState(), Flutter rebuild widget và cập nhật UI. Phù hợp cho state đơn giản trong một widget.",
        "exampleText": "Toggle dark mode: nhấn nút đổi giá trị isDark, gọi setState để cập nhật giao diện.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "setState(() {\n  _variable = newValue;\n});"
          },
          {
            "title": "Ví dụ",
            "code": "class TodoList extends StatefulWidget {\n  const TodoList({super.key});\n\n  @override\n  State<TodoList> createState() => _TodoListState();\n}\n\nclass _TodoListState extends State<TodoList> {\n  final List<String> _todos = [];\n  final _controller = TextEditingController();\n\n  void _addTodo() {\n    if (_controller.text.trim().isEmpty) return;\n    setState(() {\n      _todos.add(_controller.text.trim());\n    });\n    _controller.clear();\n  }\n\n  void _removeTodo(int index) {\n    setState(() {\n      _todos.removeAt(index);\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        TextField(\n          controller: _controller,\n          onSubmitted: (_) => _addTodo(),\n        ),\n        Expanded(\n          child: ListView.builder(\n            itemCount: _todos.length,\n            itemBuilder: (context, index) => ListTile(\n              title: Text(_todos[index]),\n              trailing: IconButton(\n                icon: const Icon(Icons.delete),\n                onPressed: () => _removeTodo(index),\n              ),\n            ),\n          ),\n        ),\n      ],\n    );\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-provider",
        "title": "Provider",
        "description": "Provider là thư viện state management chính thức được Flutter team khuyên dùng. Nó dùng InheritedWidget bên dưới để truyền state xuống widget tree mà không cần truyền qua constructor từng cấp (prop drilling).",
        "exampleText": "Theme, auth state, hoặc giỏ hàng có thể quản lý bằng Provider để mọi widget trong app đều truy cập được.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add provider"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:provider/provider.dart';\n\n// 1. Tạo model\nclass CartModel extends ChangeNotifier {\n  final List<String> _items = [];\n\n  List<String> get items => List.unmodifiable(_items);\n  int get count => _items.length;\n\n  void add(String item) {\n    _items.add(item);\n    notifyListeners(); // Báo cho UI rebuild\n  }\n\n  void remove(String item) {\n    _items.remove(item);\n    notifyListeners();\n  }\n}\n\n// 2. Cung cấp provider\nvoid main() {\n  runApp(\n    ChangeNotifierProvider(\n      create: (context) => CartModel(),\n      child: const MyApp(),\n    ),\n  );\n}\n\n// 3. Sử dụng trong widget\nclass CartIcon extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    final count = context.watch<CartModel>().count;\n\n    return Badge(\n      label: Text('$count'),\n      child: const Icon(Icons.shopping_cart),\n    );\n  }\n}\n\n// context.watch<T>() → listen + rebuild\n// context.read<T>() → đọc một lần, không rebuild"
          }
        ]
      },
      {
        "id": "flutter-riverpod",
        "title": "Riverpod",
        "description": "Riverpod là thư viện state management hiện đại, là sự tiến hóa của Provider. Riverpod type-safe, compile-time safe, không phụ thuộc BuildContext, hỗ trợ code generation và dễ test.",
        "exampleText": "Riverpod phổ biến trong cộng đồng Flutter vì dễ dùng hơn BLoC và mạnh hơn Provider.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add flutter_riverpod"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:flutter_riverpod/flutter_riverpod.dart';\n\n// 1. Định nghĩa provider\nfinal counterProvider = StateNotifierProvider<CounterNotifier, int>(\n  (ref) => CounterNotifier(),\n);\n\nclass CounterNotifier extends StateNotifier<int> {\n  CounterNotifier() : super(0);\n\n  void increment() => state++;\n  void decrement() => state--;\n}\n\n// 2. Bọc app bằng ProviderScope\nvoid main() {\n  runApp(const ProviderScope(child: MyApp()));\n}\n\n// 3. Sử dụng trong widget\nclass CounterScreen extends ConsumerWidget {\n  const CounterScreen({super.key});\n\n  @override\n  Widget build(BuildContext context, WidgetRef ref) {\n    final count = ref.watch(counterProvider);\n\n    return Scaffold(\n      body: Center(child: Text('$count', style: TextStyle(fontSize: 48))),\n      floatingActionButton: FloatingActionButton(\n        onPressed: () => ref.read(counterProvider.notifier).increment(),\n        child: const Icon(Icons.add),\n      ),\n    );\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-bloc",
        "title": "BLoC Pattern",
        "description": "BLoC (Business Logic Component) là pattern tách biệt business logic khỏi UI. BLoC nhận Events, xử lý logic, và emit States. Thư viện flutter_bloc cung cấp BlocProvider, BlocBuilder, BlocListener.",
        "exampleText": "Form đăng nhập: UI gửi LoginEvent → BLoC xử lý authentication → emit LoginSuccess hoặc LoginFailure state.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add flutter_bloc"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:flutter_bloc/flutter_bloc.dart';\n\n// Events\nabstract class CounterEvent {}\nclass Increment extends CounterEvent {}\nclass Decrement extends CounterEvent {}\n\n// BLoC\nclass CounterBloc extends Bloc<CounterEvent, int> {\n  CounterBloc() : super(0) {\n    on<Increment>((event, emit) => emit(state + 1));\n    on<Decrement>((event, emit) => emit(state - 1));\n  }\n}\n\n// UI\nclass CounterPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return BlocProvider(\n      create: (context) => CounterBloc(),\n      child: BlocBuilder<CounterBloc, int>(\n        builder: (context, count) {\n          return Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text('$count', style: TextStyle(fontSize: 48)),\n              Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: [\n                  IconButton(\n                    icon: Icon(Icons.remove),\n                    onPressed: () =>\n                        context.read<CounterBloc>().add(Decrement()),\n                  ),\n                  IconButton(\n                    icon: Icon(Icons.add),\n                    onPressed: () =>\n                        context.read<CounterBloc>().add(Increment()),\n                  ),\n                ],\n              ),\n            ],\n          );\n        },\n      ),\n    );\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Networking & Storage",
    "cards": [
      {
        "id": "flutter-http",
        "title": "HTTP requests (http package)",
        "description": "Package http cung cấp các method GET, POST, PUT, DELETE để gọi REST API. Kết hợp với dart:convert để parse JSON. Mọi HTTP request đều async nên dùng async/await.",
        "exampleText": "Gọi API lấy danh sách bài viết, parse JSON response thành List<Post> rồi hiển thị lên ListView.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add http"
          },
          {
            "title": "Ví dụ",
            "code": "import 'dart:convert';\nimport 'package:http/http.dart' as http;\n\nclass Post {\n  final int id;\n  final String title;\n  final String body;\n\n  Post({required this.id, required this.title, required this.body});\n\n  factory Post.fromJson(Map<String, dynamic> json) {\n    return Post(\n      id: json['id'],\n      title: json['title'],\n      body: json['body'],\n    );\n  }\n}\n\n// GET\nFuture<List<Post>> fetchPosts() async {\n  final response = await http.get(\n    Uri.parse('https://jsonplaceholder.typicode.com/posts'),\n  );\n\n  if (response.statusCode == 200) {\n    final List<dynamic> data = jsonDecode(response.body);\n    return data.map((json) => Post.fromJson(json)).toList();\n  } else {\n    throw Exception('Lỗi tải dữ liệu: ${response.statusCode}');\n  }\n}\n\n// POST\nFuture<Post> createPost(String title, String body) async {\n  final response = await http.post(\n    Uri.parse('https://jsonplaceholder.typicode.com/posts'),\n    headers: {'Content-Type': 'application/json'},\n    body: jsonEncode({'title': title, 'body': body, 'userId': 1}),\n  );\n\n  if (response.statusCode == 201) {\n    return Post.fromJson(jsonDecode(response.body));\n  } else {\n    throw Exception('Lỗi tạo post');\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-dio",
        "title": "Dio",
        "description": "Dio là HTTP client mạnh hơn http package, hỗ trợ interceptors, cancel requests, upload/download progress, timeout, retry, và nhiều tính năng nâng cao. Phổ biến trong các project Flutter lớn.",
        "exampleText": "Thêm interceptor để tự động gắn auth token vào mọi request và xử lý token refresh khi hết hạn.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add dio"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:dio/dio.dart';\n\nclass ApiService {\n  late final Dio _dio;\n\n  ApiService() {\n    _dio = Dio(BaseOptions(\n      baseUrl: 'https://api.example.com',\n      connectTimeout: const Duration(seconds: 10),\n      receiveTimeout: const Duration(seconds: 10),\n      headers: {'Content-Type': 'application/json'},\n    ));\n\n    // Interceptor\n    _dio.interceptors.add(InterceptorsWrapper(\n      onRequest: (options, handler) {\n        options.headers['Authorization'] = 'Bearer $token';\n        handler.next(options);\n      },\n      onError: (error, handler) {\n        if (error.response?.statusCode == 401) {\n          // Refresh token logic\n        }\n        handler.next(error);\n      },\n    ));\n  }\n\n  Future<List<Post>> getPosts() async {\n    try {\n      final response = await _dio.get('/posts');\n      return (response.data as List)\n          .map((json) => Post.fromJson(json))\n          .toList();\n    } on DioException catch (e) {\n      throw Exception('Lỗi: ${e.message}');\n    }\n  }\n}"
          }
        ]
      },
      {
        "id": "flutter-shared-preferences",
        "title": "SharedPreferences",
        "description": "SharedPreferences lưu trữ key-value đơn giản trên device, tương tự AsyncStorage trong React Native. Phù hợp cho settings, preferences, token. Chỉ hỗ trợ các kiểu: int, double, bool, String, List<String>.",
        "exampleText": "Lưu trạng thái dark mode, ngôn ngữ đã chọn, hoặc thông tin login đơn giản.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài đặt\nflutter pub add shared_preferences"
          },
          {
            "title": "Ví dụ",
            "code": "import 'package:shared_preferences/shared_preferences.dart';\n\nclass SettingsService {\n  // Lưu\n  Future<void> setDarkMode(bool isDark) async {\n    final prefs = await SharedPreferences.getInstance();\n    await prefs.setBool('darkMode', isDark);\n  }\n\n  // Đọc\n  Future<bool> getDarkMode() async {\n    final prefs = await SharedPreferences.getInstance();\n    return prefs.getBool('darkMode') ?? false;\n  }\n\n  // Lưu String\n  Future<void> saveToken(String token) async {\n    final prefs = await SharedPreferences.getInstance();\n    await prefs.setString('authToken', token);\n  }\n\n  // Xóa\n  Future<void> clearAll() async {\n    final prefs = await SharedPreferences.getInstance();\n    await prefs.clear();\n  }\n}\n\n// Sử dụng\nfinal settings = SettingsService();\nawait settings.setDarkMode(true);\nfinal isDark = await settings.getDarkMode();"
          }
        ]
      },
      {
        "id": "flutter-futurebuilder",
        "title": "FutureBuilder & StreamBuilder",
        "description": "FutureBuilder build widget dựa trên kết quả của Future (async operation). StreamBuilder build widget dựa trên data từ Stream (dữ liệu liên tục). Cả hai giúp xử lý loading, error, data states trong UI.",
        "exampleText": "Khi gọi API, FutureBuilder tự hiển thị loading spinner, sau đó hiển thị data hoặc error message.",
        "codeBlocks": [
          {
            "title": "FutureBuilder",
            "code": "FutureBuilder<List<Post>>(\n  future: fetchPosts(),\n  builder: (context, snapshot) {\n    // Đang loading\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return const Center(child: CircularProgressIndicator());\n    }\n\n    // Có lỗi\n    if (snapshot.hasError) {\n      return Center(child: Text('Lỗi: ${snapshot.error}'));\n    }\n\n    // Có data\n    final posts = snapshot.data!;\n    return ListView.builder(\n      itemCount: posts.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(posts[index].title),\n      ),\n    );\n  },\n)"
          },
          {
            "title": "StreamBuilder",
            "code": "// Stream đếm giây\nStream<int> countStream() async* {\n  for (int i = 0; i < 100; i++) {\n    await Future.delayed(const Duration(seconds: 1));\n    yield i;\n  }\n}\n\n// UI\nStreamBuilder<int>(\n  stream: countStream(),\n  builder: (context, snapshot) {\n    if (!snapshot.hasData) {\n      return const Text('Đang chờ...');\n    }\n    return Text(\n      '${snapshot.data} giây',\n      style: const TextStyle(fontSize: 48),\n    );\n  },\n)"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Build & Deploy",
    "cards": [
      {
        "id": "flutter-build",
        "title": "Flutter Build",
        "description": "Flutter CLI hỗ trợ build app cho nhiều platform. Build Android tạo file .apk hoặc .aab. Build iOS tạo .ipa. Có thể build mode debug, profile (kiểm tra hiệu năng), hoặc release (production).",
        "exampleText": "Khi muốn gửi app cho người test, build APK debug. Khi submit store, build release.",
        "codeBlocks": [
          {
            "title": "Build Android",
            "code": "# APK (cài trực tiếp)\nflutter build apk --release\n\n# Split APKs (nhẹ hơn, theo kiến trúc CPU)\nflutter build apk --split-per-abi\n\n# AAB (upload Google Play)\nflutter build appbundle --release\n\n# Output: build/app/outputs/..."
          },
          {
            "title": "Build iOS & Web",
            "code": "# iOS (cần macOS + Xcode)\nflutter build ios --release\n\n# Web\nflutter build web --release\n# Output: build/web/\n\n# Windows\nflutter build windows --release\n\n# macOS\nflutter build macos --release\n\n# Kiểm tra platforms đã enable\nflutter devices"
          }
        ]
      },
      {
        "id": "flutter-flavors",
        "title": "Flavors / Environments",
        "description": "Flavors cho phép tạo nhiều biến thể của app (dev, staging, production) với config khác nhau (API URL, app name, icon). Mỗi flavor có thể có bundleId, tên app, và biến môi trường riêng.",
        "exampleText": "Flavor 'dev' kết nối API localhost, flavor 'prod' kết nối API production, hai app có tên và icon khác nhau.",
        "codeBlocks": [
          {
            "title": "Dart-define",
            "code": "# Truyền biến khi build/run\nflutter run --dart-define=API_URL=https://dev.api.com\nflutter run --dart-define=ENV=development\n\n# Đọc trong code\nconst apiUrl = String.fromEnvironment(\n  'API_URL',\n  defaultValue: 'https://api.example.com',\n);\n\nconst env = String.fromEnvironment(\n  'ENV',\n  defaultValue: 'production',\n);"
          },
          {
            "title": "Env config file",
            "code": "// lib/config/env.dart\nenum Environment { dev, staging, prod }\n\nclass EnvConfig {\n  final String apiUrl;\n  final String appName;\n  final Environment env;\n\n  const EnvConfig({\n    required this.apiUrl,\n    required this.appName,\n    required this.env,\n  });\n\n  static const dev = EnvConfig(\n    apiUrl: 'https://dev.api.com',\n    appName: 'My App (Dev)',\n    env: Environment.dev,\n  );\n\n  static const prod = EnvConfig(\n    apiUrl: 'https://api.example.com',\n    appName: 'My App',\n    env: Environment.prod,\n  );\n}\n\n// Sử dụng\nfinal config = EnvConfig.dev;\nprint(config.apiUrl);"
          }
        ]
      },
      {
        "id": "flutter-testing",
        "title": "Testing",
        "description": "Flutter hỗ trợ 3 loại test: Unit test (test logic), Widget test (test UI component), và Integration test (test toàn bộ app). Framework test tích hợp sẵn, không cần cài thêm.",
        "exampleText": "Test hàm tính tổng giỏ hàng (unit test), test widget Counter hiển thị đúng số (widget test).",
        "codeBlocks": [
          {
            "title": "Unit test",
            "code": "// test/calculator_test.dart\nimport 'package:flutter_test/flutter_test.dart';\n\nint add(int a, int b) => a + b;\n\nvoid main() {\n  group('Calculator', () {\n    test('cộng hai số dương', () {\n      expect(add(2, 3), equals(5));\n    });\n\n    test('cộng số âm', () {\n      expect(add(-1, 1), equals(0));\n    });\n  });\n}\n\n# Chạy test\n# flutter test\n# flutter test test/calculator_test.dart"
          },
          {
            "title": "Widget test",
            "code": "// test/counter_test.dart\nimport 'package:flutter/material.dart';\nimport 'package:flutter_test/flutter_test.dart';\nimport 'package:my_app/counter.dart';\n\nvoid main() {\n  testWidgets('Counter tăng khi nhấn +', (tester) async {\n    await tester.pumpWidget(const MaterialApp(\n      home: Counter(),\n    ));\n\n    // Ban đầu hiển thị 0\n    expect(find.text('0'), findsOneWidget);\n\n    // Nhấn nút +\n    await tester.tap(find.byIcon(Icons.add));\n    await tester.pump();\n\n    // Hiển thị 1\n    expect(find.text('1'), findsOneWidget);\n    expect(find.text('0'), findsNothing);\n  });\n}"
          }
        ]
      },
      {
        "id": "flutter-submit-store",
        "title": "Submit lên Store",
        "description": "Submit Flutter app lên Google Play Store (AAB file) và Apple App Store (qua Xcode hoặc Transporter). Cần tài khoản developer, icon, screenshots, và thông tin listing.",
        "exampleText": "Sau khi build release thành công, upload AAB lên Google Play Console và archive + upload lên App Store Connect.",
        "codeBlocks": [
          {
            "title": "Google Play",
            "code": "# 1. Tạo keystore (chỉ làm 1 lần)\nkeytool -genkey -v -keystore ~/upload-keystore.jks \\\n  -keyalg RSA -keysize 2048 -validity 10000 \\\n  -alias upload\n\n# 2. Cấu hình signing trong android/app/build.gradle\n\n# 3. Build AAB\nflutter build appbundle --release\n\n# 4. Upload lên Google Play Console\n# → Tạo app → Production → Create release\n# → Upload .aab file\n# → Điền listing info → Submit for review"
          },
          {
            "title": "Checklist",
            "code": "// Trước khi submit:\n// 1. Đổi version trong pubspec.yaml\n//    version: 1.0.0+1 (name+build)\n// 2. App icon: flutter_launcher_icons package\n// 3. Splash screen: flutter_native_splash package\n// 4. Permissions tối thiểu\n// 5. ProGuard rules (Android)\n// 6. Test trên thiết bị thật\n// 7. Screenshots cho store listing\n// 8. Privacy policy URL\n\n# Packages hữu ích:\n# flutter pub add flutter_launcher_icons\n# flutter pub add flutter_native_splash"
          }
        ]
      }
    ]
  }
];
