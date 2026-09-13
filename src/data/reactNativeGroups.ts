import type { KnowledgeGroup } from "../types/knowledge";

export const reactNativeGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "React Native cơ bản, Expo, khởi tạo project",
    "cards": [
      {
        "id": "rn-introduction",
        "title": "React Native là gì",
        "description": "React Native là framework mã nguồn mở do Meta (Facebook) phát triển, cho phép xây dựng ứng dụng di động native trên iOS và Android bằng JavaScript và React. Thay vì render ra DOM như React web, React Native render ra các native component thật (UIView trên iOS, android.view trên Android). Code một lần, chạy trên cả hai nền tảng.",
        "exampleText": "Một ứng dụng Todo List viết bằng React Native có thể chạy trên cả iPhone và Android mà không cần viết Swift hay Kotlin riêng.",
        "codeBlocks": [
          {
            "title": "Ý tưởng cơ bản",
            "code": "import { View, Text } from 'react-native';\n\nexport default function App() {\n  return (\n    <View>\n      <Text>Xin chào React Native!</Text>\n    </View>\n  );\n}"
          },
          {
            "title": "So sánh với React web",
            "code": "// React web\n<div><p>Hello</p></div>\n\n// React Native\n<View><Text>Hello</Text></View>\n\n// View = div, Text = p/span\n// Không có HTML tags trong RN"
          }
        ]
      },
      {
        "id": "rn-expo-introduction",
        "title": "Expo là gì",
        "description": "Expo là bộ công cụ và nền tảng giúp phát triển React Native dễ hơn. Expo cung cấp: (1) Expo CLI để tạo và quản lý project. (2) Expo Go app để test trực tiếp trên điện thoại không cần build native. (3) Các thư viện pre-built như camera, location, notifications. (4) EAS (Expo Application Services) để build và deploy app.",
        "exampleText": "Với Expo, chỉ cần quét QR code trên điện thoại là có thể xem app đang phát triển mà không cần cài Xcode hay Android Studio.",
        "codeBlocks": [
          {
            "title": "Tạo project với Expo",
            "code": "npx create-expo-app@latest my-app\ncd my-app\nnpx expo start"
          },
          {
            "title": "Expo vs React Native CLI",
            "code": "// Expo (khuyên dùng cho người mới)\n// ✅ Setup nhanh, không cần Xcode/Android Studio\n// ✅ Expo Go test trực tiếp trên điện thoại\n// ✅ Nhiều API sẵn có (camera, location...)\n// ⚠️ Giới hạn native modules (dùng expo-dev-client)\n\n// React Native CLI (bare workflow)\n// ✅ Toàn quyền kiểm soát native code\n// ⚠️ Setup phức tạp hơn\n// ⚠️ Cần Xcode (iOS) + Android Studio"
          }
        ]
      },
      {
        "id": "rn-create-project",
        "title": "Tạo project React Native + Expo",
        "description": "Dùng create-expo-app để tạo project mới. Project mặc định sử dụng TypeScript, file-based routing (Expo Router), và có sẵn cấu trúc thư mục chuẩn.",
        "exampleText": "Khi chạy lệnh tạo project, Expo sẽ tự cài đặt các dependencies cần thiết và tạo cấu trúc thư mục sẵn sàng để phát triển.",
        "codeBlocks": [
          {
            "title": "Tạo project",
            "code": "# Tạo project mới\nnpx create-expo-app@latest my-app\n\n# Hoặc với template cụ thể\nnpx create-expo-app@latest my-app --template blank\nnpx create-expo-app@latest my-app --template tabs"
          },
          {
            "title": "Chạy project",
            "code": "cd my-app\n\n# Chạy development server\nnpx expo start\n\n# Chạy trên iOS simulator\nnpx expo start --ios\n\n# Chạy trên Android emulator\nnpx expo start --android\n\n# Chạy trên web\nnpx expo start --web"
          }
        ]
      },
      {
        "id": "rn-project-structure",
        "title": "Cấu trúc project Expo",
        "description": "Project Expo có cấu trúc gồm: app/ chứa screens và routing (Expo Router), components/ chứa component tái sử dụng, assets/ chứa hình ảnh và font, app.json chứa config app, và package.json quản lý dependencies.",
        "exampleText": "Thư mục app/ hoạt động giống pages/ trong Next.js — mỗi file tương ứng với một màn hình trong app.",
        "codeBlocks": [
          {
            "title": "Cấu trúc thư mục",
            "code": "my-app/\n├── app/                  # Screens + routing\n│   ├── (tabs)/           # Tab layout group\n│   │   ├── index.tsx     # Tab Home\n│   │   ├── explore.tsx   # Tab Explore\n│   │   └── _layout.tsx   # Tab layout config\n│   ├── _layout.tsx       # Root layout\n│   └── +not-found.tsx    # 404 screen\n├── assets/               # Images, fonts\n├── components/           # Reusable components\n├── constants/            # Colors, config\n├── hooks/                # Custom hooks\n├── app.json              # App config\n├── package.json\n└── tsconfig.json"
          },
          {
            "title": "Gợi ý",
            "code": "// app/ → screens và routes (file-based routing)\n// components/ → UI components tái sử dụng\n// hooks/ → custom hooks\n// constants/ → giá trị cố định (màu, API URL)\n// assets/ → hình ảnh, icon, fonts"
          }
        ]
      },
      {
        "id": "rn-app-json",
        "title": "File app.json",
        "description": "app.json (hoặc app.config.js) là file cấu hình chính của Expo app. Nó chứa thông tin như tên app, icon, splash screen, version, permissions, và các config cho iOS/Android riêng.",
        "exampleText": "Khi muốn đổi tên app hiển thị trên điện thoại, đổi icon, hoặc cấu hình permissions, sửa trong app.json.",
        "codeBlocks": [
          {
            "title": "Cấu hình cơ bản",
            "code": "{\n  \"expo\": {\n    \"name\": \"My App\",\n    \"slug\": \"my-app\",\n    \"version\": \"1.0.0\",\n    \"orientation\": \"portrait\",\n    \"icon\": \"./assets/icon.png\",\n    \"splash\": {\n      \"image\": \"./assets/splash.png\",\n      \"resizeMode\": \"contain\",\n      \"backgroundColor\": \"#ffffff\"\n    },\n    \"ios\": {\n      \"bundleIdentifier\": \"com.example.myapp\",\n      \"supportsTablet\": true\n    },\n    \"android\": {\n      \"package\": \"com.example.myapp\",\n      \"adaptiveIcon\": {\n        \"foregroundImage\": \"./assets/adaptive-icon.png\",\n        \"backgroundColor\": \"#ffffff\"\n      }\n    }\n  }\n}"
          },
          {
            "title": "Gợi ý",
            "code": "// name: tên hiển thị trên điện thoại\n// slug: URL-friendly name\n// icon: icon app (1024x1024)\n// splash: màn hình loading\n// ios.bundleIdentifier: ID app trên App Store\n// android.package: ID app trên Google Play"
          }
        ]
      },
      {
        "id": "rn-expo-go",
        "title": "Expo Go & Development",
        "description": "Expo Go là app miễn phí trên iOS/Android dùng để test ứng dụng Expo đang phát triển. Chỉ cần quét QR code từ terminal là app chạy trên điện thoại thật, hỗ trợ hot reload khi code thay đổi.",
        "exampleText": "Khi đang code trên máy tính, mở Expo Go trên điện thoại, quét QR code và thấy app cập nhật real-time khi lưu file.",
        "codeBlocks": [
          {
            "title": "Workflow",
            "code": "# 1. Chạy dev server\nnpx expo start\n\n# 2. Quét QR code bằng:\n#    - iOS: Camera app\n#    - Android: Expo Go app\n\n# 3. Hot reload tự động khi lưu file\n# 4. Shake device để mở dev menu"
          },
          {
            "title": "Dev menu",
            "code": "// Shake device hoặc Ctrl+M (Android) / Cmd+D (iOS)\n// Các tùy chọn:\n// - Reload: tải lại app\n// - Debug Remote JS: debug trên Chrome\n// - Toggle Inspector: inspect elements\n// - Show Performance Monitor"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Core Components",
    "cards": [
      {
        "id": "rn-view",
        "title": "View",
        "description": "View là container cơ bản nhất trong React Native, tương đương div trong HTML. View hỗ trợ layout bằng Flexbox, styling, touch handling, và accessibility. Mọi component hiển thị đều nằm trong View.",
        "exampleText": "Một màn hình app có thể chia thành nhiều View: header View, content View, footer View.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { View } from 'react-native';\n\n<View style={{ flex: 1 }}>\n  {/* children components */}\n</View>"
          },
          {
            "title": "Ví dụ",
            "code": "import { View, StyleSheet } from 'react-native';\n\nfunction Card() {\n  return (\n    <View style={styles.card}>\n      <View style={styles.header}>\n        {/* Header content */}\n      </View>\n      <View style={styles.body}>\n        {/* Body content */}\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: '#fff',\n    borderRadius: 12,\n    padding: 16,\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 2 },\n    shadowOpacity: 0.1,\n    shadowRadius: 4,\n    elevation: 3, // Android shadow\n  },\n  header: { marginBottom: 8 },\n  body: { flex: 1 },\n});"
          }
        ]
      },
      {
        "id": "rn-text",
        "title": "Text",
        "description": "Text là component duy nhất để hiển thị văn bản trong React Native. Tất cả text phải nằm trong component Text. Text có thể lồng nhau để tạo inline styling.",
        "exampleText": "Không giống HTML, trong React Native không thể đặt text trực tiếp trong View. Mọi chữ phải nằm trong <Text>.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { Text } from 'react-native';\n\n<Text style={{ fontSize: 16 }}>Nội dung</Text>"
          },
          {
            "title": "Ví dụ",
            "code": "import { Text, StyleSheet } from 'react-native';\n\nfunction ArticleTitle() {\n  return (\n    <Text style={styles.title}>\n      React Native{' '}\n      <Text style={styles.highlight}>cơ bản</Text>\n    </Text>\n  );\n}\n\nconst styles = StyleSheet.create({\n  title: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    color: '#111827',\n  },\n  highlight: {\n    color: '#61dafb',\n  },\n});"
          }
        ]
      },
      {
        "id": "rn-image",
        "title": "Image",
        "description": "Image dùng để hiển thị hình ảnh trong React Native. Hỗ trợ hình ảnh local (require), hình ảnh từ URL (source={{ uri }}), và nhiều resizeMode khác nhau.",
        "exampleText": "Có thể hiển thị avatar người dùng từ URL hoặc icon local từ thư mục assets.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { Image } from 'react-native';\n\n// Hình local\n<Image source={require('./assets/logo.png')} />\n\n// Hình từ URL\n<Image source={{ uri: 'https://example.com/photo.jpg' }} />"
          },
          {
            "title": "Ví dụ",
            "code": "import { Image, StyleSheet } from 'react-native';\n\nfunction Avatar({ uri }: { uri: string }) {\n  return (\n    <Image\n      source={{ uri }}\n      style={styles.avatar}\n      resizeMode=\"cover\"\n    />\n  );\n}\n\nconst styles = StyleSheet.create({\n  avatar: {\n    width: 80,\n    height: 80,\n    borderRadius: 40,\n    borderWidth: 2,\n    borderColor: '#61dafb',\n  },\n});\n\n// resizeMode: 'cover' | 'contain' | 'stretch' | 'center'"
          }
        ]
      },
      {
        "id": "rn-scrollview",
        "title": "ScrollView",
        "description": "ScrollView là container cuộn được, dùng khi nội dung dài hơn màn hình. Phù hợp cho nội dung có số lượng cố định và không quá nhiều. Với danh sách dài, nên dùng FlatList thay vì ScrollView.",
        "exampleText": "Một màn hình settings có nhiều mục cài đặt có thể bọc trong ScrollView để người dùng cuộn xem hết.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { ScrollView } from 'react-native';\n\n<ScrollView>\n  {/* Nội dung dài */}\n</ScrollView>"
          },
          {
            "title": "Ví dụ",
            "code": "import { ScrollView, View, Text, StyleSheet } from 'react-native';\n\nfunction SettingsScreen() {\n  return (\n    <ScrollView\n      style={styles.container}\n      showsVerticalScrollIndicator={false}\n    >\n      <View style={styles.section}>\n        <Text style={styles.heading}>Tài khoản</Text>\n        <Text>Thông tin cá nhân</Text>\n        <Text>Đổi mật khẩu</Text>\n      </View>\n      <View style={styles.section}>\n        <Text style={styles.heading}>Thông báo</Text>\n        <Text>Bật/tắt thông báo</Text>\n      </View>\n    </ScrollView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, padding: 16 },\n  section: { marginBottom: 24 },\n  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },\n});"
          }
        ]
      },
      {
        "id": "rn-flatlist",
        "title": "FlatList",
        "description": "FlatList là component tối ưu để render danh sách dài. Khác ScrollView, FlatList chỉ render các item đang hiển thị trên màn hình (lazy rendering), tiết kiệm bộ nhớ và tăng hiệu năng.",
        "exampleText": "Danh sách 1000 sản phẩm nên dùng FlatList vì nó chỉ render các sản phẩm đang thấy trên màn hình.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { FlatList } from 'react-native';\n\n<FlatList\n  data={array}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => <Component data={item} />}\n/>"
          },
          {
            "title": "Ví dụ",
            "code": "import { FlatList, Text, View, StyleSheet } from 'react-native';\n\ninterface Product {\n  id: string;\n  name: string;\n  price: number;\n}\n\nfunction ProductList({ products }: { products: Product[] }) {\n  return (\n    <FlatList\n      data={products}\n      keyExtractor={(item) => item.id}\n      renderItem={({ item }) => (\n        <View style={styles.item}>\n          <Text style={styles.name}>{item.name}</Text>\n          <Text style={styles.price}>{item.price}đ</Text>\n        </View>\n      )}\n      ItemSeparatorComponent={() => <View style={styles.sep} />}\n      ListEmptyComponent={<Text>Không có sản phẩm</Text>}\n    />\n  );\n}\n\nconst styles = StyleSheet.create({\n  item: { padding: 16, flexDirection: 'row', justifyContent: 'space-between' },\n  name: { fontSize: 16 },\n  price: { fontSize: 16, fontWeight: 'bold', color: '#059669' },\n  sep: { height: 1, backgroundColor: '#e5e7eb' },\n});"
          }
        ]
      },
      {
        "id": "rn-touchable-pressable",
        "title": "TouchableOpacity & Pressable",
        "description": "TouchableOpacity và Pressable dùng để tạo vùng nhấn (touchable area). TouchableOpacity giảm opacity khi nhấn. Pressable là API mới hơn, linh hoạt hơn, cho phép tuỳ chỉnh style khi pressed, hovered, focused.",
        "exampleText": "Một nút \"Thêm vào giỏ hàng\" có thể dùng Pressable để đổi màu khi người dùng nhấn giữ.",
        "codeBlocks": [
          {
            "title": "TouchableOpacity",
            "code": "import { TouchableOpacity, Text } from 'react-native';\n\n<TouchableOpacity\n  onPress={() => console.log('Pressed!')}\n  activeOpacity={0.7}\n>\n  <Text>Nhấn vào đây</Text>\n</TouchableOpacity>"
          },
          {
            "title": "Pressable",
            "code": "import { Pressable, Text, StyleSheet } from 'react-native';\n\nfunction Button({ title, onPress }: { title: string; onPress: () => void }) {\n  return (\n    <Pressable\n      onPress={onPress}\n      style={({ pressed }) => [\n        styles.button,\n        pressed && styles.pressed,\n      ]}\n    >\n      <Text style={styles.text}>{title}</Text>\n    </Pressable>\n  );\n}\n\nconst styles = StyleSheet.create({\n  button: {\n    backgroundColor: '#3b82f6',\n    paddingVertical: 12,\n    paddingHorizontal: 24,\n    borderRadius: 8,\n    alignItems: 'center',\n  },\n  pressed: {\n    backgroundColor: '#2563eb',\n    transform: [{ scale: 0.98 }],\n  },\n  text: { color: '#fff', fontWeight: '600', fontSize: 16 },\n});"
          }
        ]
      },
      {
        "id": "rn-textinput",
        "title": "TextInput",
        "description": "TextInput là component để người dùng nhập text, tương đương input trong HTML. Hỗ trợ placeholder, secure text (mật khẩu), keyboard type, multiline, và controlled/uncontrolled mode.",
        "exampleText": "Ô tìm kiếm sản phẩm, form đăng nhập, hoặc ô nhập comment đều dùng TextInput.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { TextInput } from 'react-native';\n\n<TextInput\n  value={text}\n  onChangeText={setText}\n  placeholder=\"Nhập nội dung...\"\n/>"
          },
          {
            "title": "Ví dụ",
            "code": "import { useState } from 'react';\nimport { TextInput, View, StyleSheet } from 'react-native';\n\nfunction LoginForm() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n\n  return (\n    <View style={styles.form}>\n      <TextInput\n        style={styles.input}\n        value={email}\n        onChangeText={setEmail}\n        placeholder=\"Email\"\n        keyboardType=\"email-address\"\n        autoCapitalize=\"none\"\n      />\n      <TextInput\n        style={styles.input}\n        value={password}\n        onChangeText={setPassword}\n        placeholder=\"Mật khẩu\"\n        secureTextEntry\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  form: { gap: 12 },\n  input: {\n    borderWidth: 1,\n    borderColor: '#d1d5db',\n    borderRadius: 8,\n    padding: 12,\n    fontSize: 16,\n  },\n});"
          }
        ]
      },
      {
        "id": "rn-safe-area-view",
        "title": "SafeAreaView",
        "description": "SafeAreaView đảm bảo nội dung không bị che bởi notch, status bar, hoặc home indicator trên iPhone. Nên bọc toàn bộ screen trong SafeAreaView. Expo cung cấp SafeAreaView từ react-native-safe-area-context với nhiều tùy chỉnh hơn.",
        "exampleText": "Trên iPhone có notch, nếu không dùng SafeAreaView, phần header có thể bị che mất phía trên.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "// React Native built-in\nimport { SafeAreaView } from 'react-native';\n\n// Hoặc từ thư viện (khuyên dùng)\nimport { SafeAreaView } from 'react-native-safe-area-context';"
          },
          {
            "title": "Ví dụ",
            "code": "import { SafeAreaView } from 'react-native-safe-area-context';\nimport { View, Text, StyleSheet } from 'react-native';\n\nfunction HomeScreen() {\n  return (\n    <SafeAreaView style={styles.container}>\n      <View style={styles.header}>\n        <Text style={styles.title}>Trang chủ</Text>\n      </View>\n      <View style={styles.content}>\n        <Text>Nội dung chính</Text>\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#fff' },\n  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },\n  title: { fontSize: 20, fontWeight: 'bold' },\n  content: { flex: 1, padding: 16 },\n});"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Styling & Layout",
    "cards": [
      {
        "id": "rn-stylesheet",
        "title": "StyleSheet",
        "description": "StyleSheet.create() dùng để tạo style object trong React Native. Style trong RN viết bằng JavaScript object, dùng camelCase thay cho kebab-case (backgroundColor thay vì background-color). StyleSheet.create giúp validate style và tối ưu hiệu năng.",
        "exampleText": "Thay vì viết CSS file riêng, React Native khai báo style ngay trong file JavaScript.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    padding: 16,\n  },\n});\n\n// Sử dụng\n<View style={styles.container} />"
          },
          {
            "title": "Ví dụ",
            "code": "import { View, Text, StyleSheet } from 'react-native';\n\nfunction Card({ title, content }: { title: string; content: string }) {\n  return (\n    <View style={styles.card}>\n      <Text style={styles.title}>{title}</Text>\n      <Text style={styles.content}>{content}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: '#f9fafb',\n    borderRadius: 12,\n    padding: 16,\n    marginBottom: 12,\n    borderWidth: 1,\n    borderColor: '#e5e7eb',\n  },\n  title: {\n    fontSize: 18,\n    fontWeight: '600',\n    color: '#111827',\n    marginBottom: 4,\n  },\n  content: {\n    fontSize: 14,\n    color: '#6b7280',\n    lineHeight: 20,\n  },\n});"
          }
        ]
      },
      {
        "id": "rn-flexbox",
        "title": "Flexbox trong React Native",
        "description": "React Native sử dụng Flexbox để layout, nhưng mặc định flexDirection là 'column' (khác CSS web là 'row'). Các thuộc tính phổ biến: flex, flexDirection, justifyContent, alignItems, gap, flexWrap.",
        "exampleText": "Layout hai cột trong React Native dùng flexDirection: 'row' và mỗi cột có flex: 1.",
        "codeBlocks": [
          {
            "title": "Flexbox cơ bản",
            "code": "// Mặc định: flexDirection = 'column' (dọc)\n// → justifyContent: dọc, alignItems: ngang\n\nconst styles = StyleSheet.create({\n  row: {\n    flexDirection: 'row',    // Ngang\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    gap: 8,\n  },\n  column: {\n    flexDirection: 'column', // Dọc (mặc định)\n    justifyContent: 'center',\n    alignItems: 'stretch',\n  },\n});"
          },
          {
            "title": "Ví dụ",
            "code": "import { View, Text, StyleSheet } from 'react-native';\n\nfunction TwoColumnLayout() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.sidebar}>\n        <Text>Sidebar</Text>\n      </View>\n      <View style={styles.main}>\n        <Text>Main Content</Text>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'row',\n  },\n  sidebar: {\n    width: 200,\n    backgroundColor: '#f3f4f6',\n    padding: 16,\n  },\n  main: {\n    flex: 1,\n    padding: 16,\n  },\n});"
          }
        ]
      },
      {
        "id": "rn-dimensions-platform",
        "title": "Dimensions & Platform",
        "description": "Dimensions API lấy kích thước màn hình thiết bị. Platform API kiểm tra đang chạy trên iOS hay Android để áp dụng style hoặc logic khác nhau. Có thể dùng Platform.select() để chọn giá trị theo platform.",
        "exampleText": "Shadow trên iOS dùng shadowColor, shadowOffset, nhưng trên Android dùng elevation.",
        "codeBlocks": [
          {
            "title": "Dimensions",
            "code": "import { Dimensions } from 'react-native';\n\nconst { width, height } = Dimensions.get('window');\n\n// Image chiếm toàn bộ chiều rộng, cao 40%\nconst styles = StyleSheet.create({\n  banner: {\n    width: width,\n    height: height * 0.4,\n  },\n});"
          },
          {
            "title": "Platform",
            "code": "import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: '#fff',\n    borderRadius: 12,\n    padding: 16,\n    // Shadow khác nhau giữa iOS và Android\n    ...Platform.select({\n      ios: {\n        shadowColor: '#000',\n        shadowOffset: { width: 0, height: 2 },\n        shadowOpacity: 0.1,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 4,\n      },\n    }),\n  },\n});\n\n// Kiểm tra platform\nif (Platform.OS === 'ios') {\n  // Code chỉ chạy trên iOS\n}"
          }
        ]
      },
      {
        "id": "rn-combine-styles",
        "title": "Kết hợp styles",
        "description": "Trong React Native, có thể kết hợp nhiều style bằng cách truyền array vào prop style. Style sau sẽ ghi đè style trước. Cách này hữu ích cho conditional styling hoặc khi component nhận style từ props.",
        "exampleText": "Một button có style mặc định, nhưng khi disabled thì thêm style opacity thấp hơn.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "// Kết hợp styles bằng array\n<View style={[styles.base, styles.extra]} />\n\n// Conditional style\n<View style={[styles.button, isActive && styles.active]} />\n\n// Inline override\n<View style={[styles.card, { marginTop: 20 }]} />"
          },
          {
            "title": "Ví dụ",
            "code": "import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';\n\ninterface ButtonProps {\n  title: string;\n  variant?: 'primary' | 'secondary';\n  disabled?: boolean;\n  style?: ViewStyle;\n  onPress: () => void;\n}\n\nfunction Button({ title, variant = 'primary', disabled, style, onPress }: ButtonProps) {\n  return (\n    <Pressable\n      onPress={onPress}\n      disabled={disabled}\n      style={[\n        styles.base,\n        variant === 'primary' ? styles.primary : styles.secondary,\n        disabled && styles.disabled,\n        style,\n      ]}\n    >\n      <Text style={styles.text}>{title}</Text>\n    </Pressable>\n  );\n}\n\nconst styles = StyleSheet.create({\n  base: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, alignItems: 'center' },\n  primary: { backgroundColor: '#3b82f6' },\n  secondary: { backgroundColor: '#6b7280' },\n  disabled: { opacity: 0.5 },\n  text: { color: '#fff', fontWeight: '600' },\n});"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Navigation (React Navigation)",
    "cards": [
      {
        "id": "rn-expo-router",
        "title": "Expo Router",
        "description": "Expo Router là hệ thống file-based routing cho React Native, lấy cảm hứng từ Next.js. Mỗi file trong thư mục app/ tương ứng với một route. Hỗ trợ nested layouts, dynamic routes, deep linking tự động.",
        "exampleText": "File app/profile.tsx tự động tạo route /profile. File app/user/[id].tsx tạo dynamic route /user/123.",
        "codeBlocks": [
          {
            "title": "Cấu trúc routes",
            "code": "app/\n├── _layout.tsx          # Root layout\n├── index.tsx            # Route: /\n├── about.tsx            # Route: /about\n├── user/\n│   ├── [id].tsx         # Route: /user/:id\n│   └── index.tsx        # Route: /user\n└── (tabs)/\n    ├── _layout.tsx      # Tab layout\n    ├── index.tsx         # Tab 1\n    └── settings.tsx      # Tab 2"
          },
          {
            "title": "Ví dụ",
            "code": "// app/_layout.tsx\nimport { Stack } from 'expo-router';\n\nexport default function RootLayout() {\n  return (\n    <Stack>\n      <Stack.Screen name=\"index\" options={{ title: 'Trang chủ' }} />\n      <Stack.Screen name=\"about\" options={{ title: 'Giới thiệu' }} />\n    </Stack>\n  );\n}\n\n// app/index.tsx\nimport { Link } from 'expo-router';\nimport { View, Text } from 'react-native';\n\nexport default function HomeScreen() {\n  return (\n    <View>\n      <Text>Trang chủ</Text>\n      <Link href=\"/about\">Xem giới thiệu</Link>\n      <Link href=\"/user/42\">Xem user 42</Link>\n    </View>\n  );\n}"
          }
        ]
      },
      {
        "id": "rn-stack-navigator",
        "title": "Stack Navigator",
        "description": "Stack Navigator tạo hiệu ứng chuyển màn hình kiểu chồng lên nhau (stack). Màn hình mới đẩy lên trên, quay lại thì pop ra. Đây là pattern phổ biến nhất trong app di động. Trong Expo Router, dùng Stack component.",
        "exampleText": "Từ danh sách sản phẩm nhấn vào một sản phẩm, màn hình chi tiết sẽ slide vào từ bên phải (iOS) hoặc fade in (Android).",
        "codeBlocks": [
          {
            "title": "Expo Router Stack",
            "code": "// app/_layout.tsx\nimport { Stack } from 'expo-router';\n\nexport default function Layout() {\n  return (\n    <Stack\n      screenOptions={{\n        headerStyle: { backgroundColor: '#3b82f6' },\n        headerTintColor: '#fff',\n        headerTitleStyle: { fontWeight: 'bold' },\n      }}\n    >\n      <Stack.Screen name=\"index\" options={{ title: 'Home' }} />\n      <Stack.Screen name=\"details\" options={{ title: 'Chi tiết' }} />\n    </Stack>\n  );\n}"
          },
          {
            "title": "Điều hướng",
            "code": "// app/index.tsx\nimport { router } from 'expo-router';\nimport { Pressable, Text } from 'react-native';\n\nexport default function Home() {\n  return (\n    <Pressable onPress={() => router.push('/details')}\n    >\n      <Text>Xem chi tiết</Text>\n    </Pressable>\n  );\n}\n\n// Các cách điều hướng:\n// router.push('/path')     — push screen mới\n// router.replace('/path')  — replace screen hiện tại\n// router.back()            — quay lại\n// router.navigate('/path') — navigate (không duplicate)"
          }
        ]
      },
      {
        "id": "rn-tab-navigator",
        "title": "Tab Navigator",
        "description": "Tab Navigator tạo thanh tab ở dưới (hoặc trên) màn hình, cho phép chuyển giữa các màn hình chính. Trong Expo Router, dùng thư mục (tabs)/ với Tabs component trong _layout.tsx.",
        "exampleText": "App có 3 tab chính: Home, Search, Profile — người dùng nhấn tab để chuyển màn hình.",
        "codeBlocks": [
          {
            "title": "Expo Router Tabs",
            "code": "// app/(tabs)/_layout.tsx\nimport { Tabs } from 'expo-router';\nimport { Ionicons } from '@expo/vector-icons';\n\nexport default function TabLayout() {\n  return (\n    <Tabs screenOptions={{ tabBarActiveTintColor: '#3b82f6' }}>\n      <Tabs.Screen\n        name=\"index\"\n        options={{\n          title: 'Trang chủ',\n          tabBarIcon: ({ color, size }) => (\n            <Ionicons name=\"home\" size={size} color={color} />\n          ),\n        }}\n      />\n      <Tabs.Screen\n        name=\"search\"\n        options={{\n          title: 'Tìm kiếm',\n          tabBarIcon: ({ color, size }) => (\n            <Ionicons name=\"search\" size={size} color={color} />\n          ),\n        }}\n      />\n      <Tabs.Screen\n        name=\"profile\"\n        options={{\n          title: 'Cá nhân',\n          tabBarIcon: ({ color, size }) => (\n            <Ionicons name=\"person\" size={size} color={color} />\n          ),\n        }}\n      />\n    </Tabs>\n  );\n}"
          },
          {
            "title": "Tab screens",
            "code": "// app/(tabs)/index.tsx\nimport { View, Text } from 'react-native';\n\nexport default function HomeTab() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Trang chủ</Text>\n    </View>\n  );\n}\n\n// app/(tabs)/search.tsx\nexport default function SearchTab() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Tìm kiếm</Text>\n    </View>\n  );\n}"
          }
        ]
      },
      {
        "id": "rn-pass-params",
        "title": "Truyền params giữa màn hình",
        "description": "Trong Expo Router, truyền params qua URL (giống web). Dynamic route dùng [param] trong tên file. Nhận params bằng useLocalSearchParams() hoặc useGlobalSearchParams().",
        "exampleText": "Từ danh sách sản phẩm, nhấn vào sản phẩm có id=42, màn hình chi tiết nhận id=42 qua URL params.",
        "codeBlocks": [
          {
            "title": "Truyền params",
            "code": "// Truyền qua href\nimport { Link } from 'expo-router';\n\n<Link href={`/product/${product.id}`}>Xem chi tiết</Link>\n\n// Hoặc dùng router\nimport { router } from 'expo-router';\n\nrouter.push({\n  pathname: '/product/[id]',\n  params: { id: '42', name: 'iPhone 15' },\n});"
          },
          {
            "title": "Nhận params",
            "code": "// app/product/[id].tsx\nimport { useLocalSearchParams } from 'expo-router';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function ProductDetail() {\n  const { id, name } = useLocalSearchParams<{\n    id: string;\n    name?: string;\n  }>();\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Sản phẩm #{id}</Text>\n      {name && <Text>Tên: {name}</Text>}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, padding: 16 },\n  title: { fontSize: 24, fontWeight: 'bold' },\n});"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "State, Hooks & Data",
    "cards": [
      {
        "id": "rn-usestate",
        "title": "useState trong React Native",
        "description": "useState hoạt động giống React web. Dùng để quản lý state local của component. Khi state thay đổi, component re-render và giao diện cập nhật.",
        "exampleText": "Counter app: nhấn nút tăng/giảm, số trên màn hình thay đổi theo state.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { useState } from 'react';\n\nconst [value, setValue] = useState(initialValue);"
          },
          {
            "title": "Ví dụ",
            "code": "import { useState } from 'react';\nimport { View, Text, Pressable, StyleSheet } from 'react-native';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.count}>{count}</Text>\n      <View style={styles.buttons}>\n        <Pressable style={styles.btn} onPress={() => setCount(c => c - 1)}>\n          <Text style={styles.btnText}>−</Text>\n        </Pressable>\n        <Pressable style={styles.btn} onPress={() => setCount(c => c + 1)}>\n          <Text style={styles.btnText}>+</Text>\n        </Pressable>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  count: { fontSize: 48, fontWeight: 'bold', marginBottom: 20 },\n  buttons: { flexDirection: 'row', gap: 16 },\n  btn: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#3b82f6', justifyContent: 'center', alignItems: 'center' },\n  btnText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },\n});"
          }
        ]
      },
      {
        "id": "rn-useeffect",
        "title": "useEffect trong React Native",
        "description": "useEffect dùng để thực hiện side effect: gọi API, subscribe event, đọc storage. Hoạt động giống React web. Lưu ý cleanup function khi component unmount.",
        "exampleText": "Khi màn hình mở, useEffect gọi API lấy danh sách sản phẩm và cập nhật vào state.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "import { useEffect } from 'react';\n\nuseEffect(() => {\n  // Side effect\n  return () => {\n    // Cleanup\n  };\n}, [dependencies]);"
          },
          {
            "title": "Ví dụ",
            "code": "import { useState, useEffect } from 'react';\nimport { View, Text, FlatList, ActivityIndicator } from 'react-native';\n\ninterface Post {\n  id: number;\n  title: string;\n}\n\nexport default function PostList() {\n  const [posts, setPosts] = useState<Post[]>([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    async function fetchPosts() {\n      try {\n        const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n        const data = await res.json();\n        setPosts(data.slice(0, 20));\n      } catch (error) {\n        console.error('Lỗi:', error);\n      } finally {\n        setLoading(false);\n      }\n    }\n\n    fetchPosts();\n  }, []);\n\n  if (loading) return <ActivityIndicator size=\"large\" />;\n\n  return (\n    <FlatList\n      data={posts}\n      keyExtractor={(item) => String(item.id)}\n      renderItem={({ item }) => <Text>{item.title}</Text>}\n    />\n  );\n}"
          }
        ]
      },
      {
        "id": "rn-async-storage",
        "title": "AsyncStorage",
        "description": "AsyncStorage là hệ thống lưu trữ key-value bất đồng bộ, dùng để lưu dữ liệu nhỏ trên device (settings, token, theme preference). Tương tự localStorage trên web nhưng async. Cài qua @react-native-async-storage/async-storage.",
        "exampleText": "Lưu trạng thái dark mode của người dùng để khi mở lại app vẫn giữ chế độ đã chọn.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "npx expo install @react-native-async-storage/async-storage"
          },
          {
            "title": "Ví dụ",
            "code": "import AsyncStorage from '@react-native-async-storage/async-storage';\n\n// Lưu dữ liệu\nconst saveTheme = async (theme: string) => {\n  try {\n    await AsyncStorage.setItem('theme', theme);\n  } catch (error) {\n    console.error('Lỗi lưu:', error);\n  }\n};\n\n// Đọc dữ liệu\nconst loadTheme = async (): Promise<string | null> => {\n  try {\n    const theme = await AsyncStorage.getItem('theme');\n    return theme;\n  } catch (error) {\n    console.error('Lỗi đọc:', error);\n    return null;\n  }\n};\n\n// Lưu object (cần JSON.stringify)\nconst saveUser = async (user: { name: string; email: string }) => {\n  await AsyncStorage.setItem('user', JSON.stringify(user));\n};\n\n// Đọc object\nconst loadUser = async () => {\n  const json = await AsyncStorage.getItem('user');\n  return json ? JSON.parse(json) : null;\n};\n\n// Xóa\nawait AsyncStorage.removeItem('theme');\nawait AsyncStorage.clear(); // Xóa tất cả"
          }
        ]
      },
      {
        "id": "rn-fetch-api",
        "title": "Gọi API với fetch",
        "description": "React Native hỗ trợ fetch API giống trình duyệt. Dùng fetch kết hợp async/await để gọi REST API. Thường gọi trong useEffect hoặc event handler.",
        "exampleText": "Khi mở màn hình danh sách người dùng, gọi API lấy dữ liệu rồi hiển thị lên FlatList.",
        "codeBlocks": [
          {
            "title": "GET request",
            "code": "const fetchUsers = async () => {\n  const response = await fetch('https://api.example.com/users');\n  const data = await response.json();\n  return data;\n};"
          },
          {
            "title": "POST request",
            "code": "const createUser = async (name: string, email: string) => {\n  try {\n    const response = await fetch('https://api.example.com/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': `Bearer ${token}`,\n      },\n      body: JSON.stringify({ name, email }),\n    });\n\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n\n    const newUser = await response.json();\n    return newUser;\n  } catch (error) {\n    console.error('Lỗi tạo user:', error);\n    throw error;\n  }\n};"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Expo APIs",
    "cards": [
      {
        "id": "rn-expo-camera",
        "title": "expo-camera",
        "description": "expo-camera cho phép sử dụng camera của thiết bị để chụp ảnh hoặc quay video. Cần xin quyền (permission) trước khi sử dụng. Hỗ trợ cả camera trước và sau.",
        "exampleText": "App scan QR code hoặc chụp ảnh sản phẩm dùng expo-camera.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "npx expo install expo-camera"
          },
          {
            "title": "Ví dụ",
            "code": "import { CameraView, useCameraPermissions } from 'expo-camera';\nimport { useState } from 'react';\nimport { View, Text, Pressable, StyleSheet } from 'react-native';\n\nexport default function CameraScreen() {\n  const [facing, setFacing] = useState<'front' | 'back'>('back');\n  const [permission, requestPermission] = useCameraPermissions();\n\n  if (!permission) return <View />;\n\n  if (!permission.granted) {\n    return (\n      <View style={styles.container}>\n        <Text>Cần quyền truy cập camera</Text>\n        <Pressable onPress={requestPermission}>\n          <Text>Cấp quyền</Text>\n        </Pressable>\n      </View>\n    );\n  }\n\n  return (\n    <View style={styles.container}>\n      <CameraView style={styles.camera} facing={facing}>\n        <Pressable\n          onPress={() => setFacing(f => f === 'back' ? 'front' : 'back')}\n        >\n          <Text style={styles.flipText}>Đổi camera</Text>\n        </Pressable>\n      </CameraView>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1 },\n  camera: { flex: 1 },\n  flipText: { color: '#fff', fontSize: 18, padding: 16 },\n});"
          }
        ]
      },
      {
        "id": "rn-expo-location",
        "title": "expo-location",
        "description": "expo-location cho phép truy cập vị trí GPS của thiết bị. Hỗ trợ lấy vị trí hiện tại, theo dõi vị trí liên tục (tracking), và geocoding (đổi toạ độ thành địa chỉ).",
        "exampleText": "App giao hàng cần lấy vị trí hiện tại của người dùng để tìm cửa hàng gần nhất.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "npx expo install expo-location"
          },
          {
            "title": "Ví dụ",
            "code": "import * as Location from 'expo-location';\nimport { useState, useEffect } from 'react';\nimport { View, Text } from 'react-native';\n\nexport default function LocationScreen() {\n  const [location, setLocation] = useState<Location.LocationObject | null>(null);\n  const [errorMsg, setErrorMsg] = useState<string | null>(null);\n\n  useEffect(() => {\n    async function getLocation() {\n      const { status } = await Location.requestForegroundPermissionsAsync();\n\n      if (status !== 'granted') {\n        setErrorMsg('Không có quyền truy cập vị trí');\n        return;\n      }\n\n      const currentLocation = await Location.getCurrentPositionAsync({});\n      setLocation(currentLocation);\n    }\n\n    getLocation();\n  }, []);\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      {errorMsg ? (\n        <Text>{errorMsg}</Text>\n      ) : location ? (\n        <Text>\n          Lat: {location.coords.latitude}\\n\n          Lng: {location.coords.longitude}\n        </Text>\n      ) : (\n        <Text>Đang lấy vị trí...</Text>\n      )}\n    </View>\n  );\n}"
          }
        ]
      },
      {
        "id": "rn-expo-image-picker",
        "title": "expo-image-picker",
        "description": "expo-image-picker cho phép người dùng chọn ảnh/video từ thư viện hoặc chụp ảnh mới. Trả về URI của file đã chọn để hiển thị hoặc upload lên server.",
        "exampleText": "Chức năng đổi avatar: người dùng nhấn vào avatar, chọn ảnh từ thư viện hoặc chụp mới.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "npx expo install expo-image-picker"
          },
          {
            "title": "Ví dụ",
            "code": "import * as ImagePicker from 'expo-image-picker';\nimport { useState } from 'react';\nimport { View, Image, Pressable, Text, StyleSheet } from 'react-native';\n\nexport default function AvatarPicker() {\n  const [imageUri, setImageUri] = useState<string | null>(null);\n\n  const pickImage = async () => {\n    const result = await ImagePicker.launchImageLibraryAsync({\n      mediaTypes: ['images'],\n      allowsEditing: true,\n      aspect: [1, 1],\n      quality: 0.8,\n    });\n\n    if (!result.canceled) {\n      setImageUri(result.assets[0].uri);\n    }\n  };\n\n  return (\n    <View style={styles.container}>\n      <Pressable onPress={pickImage}>\n        {imageUri ? (\n          <Image source={{ uri: imageUri }} style={styles.avatar} />\n        ) : (\n          <View style={[styles.avatar, styles.placeholder]}>\n            <Text>Chọn ảnh</Text>\n          </View>\n        )}\n      </Pressable>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { alignItems: 'center', padding: 20 },\n  avatar: { width: 120, height: 120, borderRadius: 60 },\n  placeholder: { backgroundColor: '#e5e7eb', justifyContent: 'center', alignItems: 'center' },\n});"
          }
        ]
      },
      {
        "id": "rn-expo-notifications",
        "title": "expo-notifications",
        "description": "expo-notifications cho phép gửi và nhận push notifications. Hỗ trợ local notifications (lên lịch thông báo) và remote notifications (gửi từ server). Cần xin quyền trước khi dùng.",
        "exampleText": "App nhắc nhở uống nước: lên lịch local notification mỗi 2 tiếng.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "npx expo install expo-notifications"
          },
          {
            "title": "Ví dụ",
            "code": "import * as Notifications from 'expo-notifications';\n\n// Xin quyền\nasync function registerForPushNotifications() {\n  const { status } = await Notifications.requestPermissionsAsync();\n  if (status !== 'granted') {\n    alert('Cần bật quyền thông báo!');\n    return;\n  }\n\n  // Lấy push token (để gửi từ server)\n  const token = await Notifications.getExpoPushTokenAsync();\n  console.log('Push token:', token.data);\n}\n\n// Local notification\nasync function scheduleNotification() {\n  await Notifications.scheduleNotificationAsync({\n    content: {\n      title: 'Nhắc nhở',\n      body: 'Đã đến giờ uống nước!',\n      data: { screen: 'reminder' },\n    },\n    trigger: {\n      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,\n      seconds: 7200, // 2 tiếng\n      repeats: true,\n    },\n  });\n}"
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
        "id": "rn-eas-build",
        "title": "EAS Build",
        "description": "EAS (Expo Application Services) Build là dịch vụ cloud build của Expo, cho phép build app iOS và Android mà không cần cài Xcode hay Android Studio trên máy. Tạo ra file .apk/.aab (Android) và .ipa (iOS).",
        "exampleText": "Khi muốn chia sẻ app cho người test hoặc submit lên store, dùng EAS Build để tạo file cài đặt.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài EAS CLI\nnpm install -g eas-cli\n\n# Đăng nhập\neas login\n\n# Cấu hình build\neas build:configure"
          },
          {
            "title": "Build",
            "code": "# Build cho Android (APK để test)\neas build --platform android --profile preview\n\n# Build cho iOS\neas build --platform ios --profile preview\n\n# Build cả hai\neas build --platform all\n\n# Build production (để submit store)\neas build --platform android --profile production\neas build --platform ios --profile production"
          }
        ]
      },
      {
        "id": "rn-eas-config",
        "title": "Cấu hình eas.json",
        "description": "eas.json chứa cấu hình build profiles. Mỗi profile định nghĩa cách build (development, preview, production) với các tùy chọn như distribution, build type, environment variables.",
        "exampleText": "Profile 'preview' tạo APK để test nội bộ, profile 'production' tạo AAB để submit Google Play.",
        "codeBlocks": [
          {
            "title": "eas.json",
            "code": "{\n  \"cli\": {\n    \"version\": \">= 5.0.0\"\n  },\n  \"build\": {\n    \"development\": {\n      \"developmentClient\": true,\n      \"distribution\": \"internal\"\n    },\n    \"preview\": {\n      \"distribution\": \"internal\",\n      \"android\": {\n        \"buildType\": \"apk\"\n      }\n    },\n    \"production\": {\n      \"android\": {\n        \"buildType\": \"app-bundle\"\n      }\n    }\n  },\n  \"submit\": {\n    \"production\": {\n      \"android\": {\n        \"serviceAccountKeyPath\": \"./google-services.json\",\n        \"track\": \"internal\"\n      },\n      \"ios\": {\n        \"appleId\": \"your@email.com\"\n      }\n    }\n  }\n}"
          },
          {
            "title": "Gợi ý",
            "code": "// development: chạy với dev client (debug)\n// preview: chia sẻ nội bộ để test\n// production: submit lên App Store / Google Play\n\n// distribution:\n//   internal → cài trực tiếp (test)\n//   store → gửi lên store\n\n// Android buildType:\n//   apk → file .apk (cài trực tiếp)\n//   app-bundle → file .aab (Google Play)"
          }
        ]
      },
      {
        "id": "rn-ota-updates",
        "title": "OTA Updates",
        "description": "OTA (Over-The-Air) Updates cho phép cập nhật JavaScript code mà không cần build lại app. Người dùng nhận bản cập nhật khi mở app mà không cần tải lại từ store. Dùng EAS Update hoặc expo-updates.",
        "exampleText": "Sửa lỗi typo hoặc đổi màu button: push OTA update, người dùng thấy thay đổi ngay lần mở app tiếp theo.",
        "codeBlocks": [
          {
            "title": "Setup",
            "code": "# Cài expo-updates\nnpx expo install expo-updates\n\n# Cấu hình EAS Update\neas update:configure\n\n# Push update\neas update --branch production --message \"Fix typo\""
          },
          {
            "title": "Giới hạn",
            "code": "// OTA CÓ THỂ cập nhật:\n// ✅ JavaScript code\n// ✅ Styles, images trong bundle\n// ✅ Logic, UI changes\n\n// OTA KHÔNG THỂ cập nhật:\n// ❌ Native code (Swift, Kotlin)\n// ❌ Native dependencies mới\n// ❌ app.json config (icon, splash)\n// ❌ Permissions mới\n// → Cần build lại qua EAS Build"
          }
        ]
      },
      {
        "id": "rn-submit-store",
        "title": "Submit lên Store",
        "description": "EAS Submit giúp submit app lên Google Play Store và Apple App Store. Cần tài khoản developer ($25 Google Play, $99/năm Apple). EAS Submit tự động upload file build và tạo submission.",
        "exampleText": "Sau khi build production xong, dùng EAS Submit để upload .aab lên Google Play và .ipa lên App Store.",
        "codeBlocks": [
          {
            "title": "Submit",
            "code": "# Submit lên Google Play\neas submit --platform android --profile production\n\n# Submit lên App Store\neas submit --platform ios --profile production\n\n# Submit cả hai\neas submit --platform all --profile production"
          },
          {
            "title": "Checklist trước khi submit",
            "code": "// 1. app.json: version, bundleIdentifier, package\n// 2. Icon: 1024x1024 (iOS), adaptive icon (Android)\n// 3. Splash screen\n// 4. Privacy policy URL\n// 5. Screenshots cho store listing\n// 6. Build production thành công\n// 7. Test trên thiết bị thật\n// 8. Tài khoản developer đã setup"
          }
        ]
      }
    ]
  }
];
