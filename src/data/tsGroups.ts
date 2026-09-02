import type { KnowledgeGroup } from "../types/knowledge";

export const tsGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "TypeScript cơ bản & Kiểu dữ liệu",
    cards: [
      {
        id: "ts-introduction",
        title: "TypeScript là gì",
        description: "TypeScript là ngôn ngữ mở rộng (superset) của JavaScript, thêm hệ thống kiểu tĩnh (static typing). Code TypeScript được biên dịch sang JavaScript trước khi chạy. Giúp phát hiện lỗi sớm, hỗ trợ IDE tốt hơn (autocomplete, refactor).",
        exampleText: "File TypeScript có đuôi .ts (logic) hoặc .tsx (có JSX). Cần cài typescript và dùng tsc hoặc bundler để biên dịch.",
        codeBlocks: [
          { title: "Cài đặt", code: "npm install -D typescript\nnpx tsc --init  // Tạo tsconfig.json\n\n// Biên dịch\nnpx tsc          // Biên dịch tất cả\nnpx tsc index.ts // Biên dịch 1 file" },
          { title: "So sánh", code: "// JavaScript - không biết lỗi cho đến khi chạy\nfunction add(a, b) { return a + b; }\nadd('5', 3); // '53' (bug!)\n\n// TypeScript - báo lỗi ngay khi viết\nfunction add(a: number, b: number): number {\n  return a + b;\n}\nadd('5', 3); // ❌ Error: string không phải number" }
        ]
      },
      {
        id: "ts-basic-types",
        title: "Kiểu dữ liệu cơ bản",
        description: "TypeScript có các kiểu cơ bản: string, number, boolean, null, undefined, any (bỏ qua kiểm tra kiểu), unknown (an toàn hơn any, phải kiểm tra trước khi dùng), void (hàm không trả về), never (hàm không bao giờ return).",
        exampleText: "Dùng : để khai báo kiểu sau tên biến hoặc tham số. TypeScript cũng tự suy luận kiểu (type inference) nếu không khai báo.",
        codeBlocks: [
          { title: "Primitives", code: "let name: string = 'An';\nlet age: number = 25;\nlet isActive: boolean = true;\nlet data: null = null;\nlet value: undefined = undefined;" },
          { title: "any vs unknown", code: "let x: any = 'hello';\nx.foo(); // ✅ Không kiểm tra - nguy hiểm!\n\nlet y: unknown = 'hello';\n// y.foo(); // ❌ Error: phải kiểm tra trước\nif (typeof y === 'string') {\n  y.toUpperCase(); // ✅ An toàn\n}" },
          { title: "void & never", code: "function log(msg: string): void {\n  console.log(msg); // Không return\n}\n\nfunction throwError(msg: string): never {\n  throw new Error(msg); // Không bao giờ return\n}" }
        ]
      },
      {
        id: "ts-array-tuple",
        title: "Array & Tuple",
        description: "Array có 2 cách khai báo: type[] hoặc Array<type>. Tuple là mảng có số lượng phần tử cố định và kiểu xác định cho từng vị trí.",
        exampleText: "Tuple thường dùng cho giá trị trả về của hook React (useState trả về [state, setState]).",
        codeBlocks: [
          { title: "Array", code: "const numbers: number[] = [1, 2, 3];\nconst names: Array<string> = ['An', 'Bình'];\n\n// Mảng nhiều kiểu\nconst mixed: (string | number)[] = ['An', 25];" },
          { title: "Tuple", code: "// Tuple: kiểu cố định từng vị trí\nconst user: [string, number] = ['An', 25];\n\n// Giống useState!\nconst [name, setName]: [string, (v: string) => void] = useState('');" }
        ]
      },
      {
        id: "ts-union-literal",
        title: "Union Types & Literal Types",
        description: "Union type (|) cho phép biến nhận một trong nhiều kiểu. Literal type giới hạn giá trị cụ thể (không chỉ kiểu). Kết hợp cả hai tạo ra kiểu rất chính xác.",
        exampleText: "Literal type thường dùng cho status, direction, theme... Giống enum nhưng nhẹ hơn.",
        codeBlocks: [
          { title: "Union", code: "let id: string | number;\nid = 'abc';  // ✅\nid = 123;    // ✅\n// id = true; // ❌\n\n// Trong function\nfunction format(value: string | number): string {\n  if (typeof value === 'string') return value.trim();\n  return value.toFixed(2);\n}" },
          { title: "Literal", code: "type Direction = 'up' | 'down' | 'left' | 'right';\ntype Status = 'idle' | 'loading' | 'success' | 'error';\ntype HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';\n\nfunction move(dir: Direction) { /* ... */ }\nmove('up');    // ✅\n// move('top'); // ❌ Error!" }
        ]
      },
      {
        id: "ts-type-alias",
        title: "Type Alias (type)",
        description: "Type alias dùng từ khóa type để đặt tên cho một kiểu. Có thể dùng cho primitive, union, object, function, tuple... Type không thể mở rộng bằng cách khai báo lại (khác với interface).",
        exampleText: "Dùng type khi cần union, intersection, tuple, hoặc kiểu phức tạp. Dùng interface cho object shape.",
        codeBlocks: [
          { title: "Ví dụ", code: "// Primitive & Union\ntype ID = string | number;\ntype Status = 'active' | 'inactive';\n\n// Object\ntype User = {\n  name: string;\n  age: number;\n  email?: string; // Optional\n};\n\n// Function\ntype Callback = (data: string) => void;\n\n// Intersection (kết hợp)\ntype Admin = User & { role: 'admin' };" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "Interface & Object Types",
    cards: [
      {
        id: "ts-interface",
        title: "Interface",
        description: "Interface định nghĩa 'hình dạng' (shape) của object. Hỗ trợ optional (?), readonly, extends (kế thừa). Interface có thể khai báo lại để mở rộng (declaration merging). Dùng interface cho object, class, và React props.",
        exampleText: "Trong React, interface thường dùng để định nghĩa props của component.",
        codeBlocks: [
          { title: "Cú pháp", code: "interface User {\n  readonly id: number;    // Không thể thay đổi\n  name: string;\n  email: string;\n  age?: number;           // Optional\n}\n\nconst user: User = {\n  id: 1,\n  name: 'An',\n  email: 'an@gmail.com',\n};\n// user.id = 2; // ❌ Error: readonly" },
          { title: "Extends", code: "interface Animal {\n  name: string;\n}\n\ninterface Dog extends Animal {\n  breed: string;\n}\n\n// Kế thừa nhiều interface\ninterface AdminUser extends User, Permissions {\n  adminSince: Date;\n}" }
        ]
      },
      {
        id: "ts-type-vs-interface",
        title: "Type vs Interface - Khi nào dùng gì?",
        description: "Interface: dùng cho object shape, class contract, React props. Hỗ trợ extends và declaration merging. Type: dùng cho union, intersection, tuple, mapped types, và kiểu phức tạp. Không thể khai báo lại.",
        exampleText: "Quy tắc đơn giản: dùng interface cho object/props, dùng type cho mọi thứ khác.",
        codeBlocks: [
          { title: "So sánh", code: "// ✅ Interface: object shape, props\ninterface ButtonProps {\n  label: string;\n  onClick: () => void;\n}\n\n// ✅ Type: union, intersection, utility\ntype Status = 'idle' | 'loading' | 'error';\ntype Result = Success | Failure;\ntype UserWithRole = User & { role: string };\n\n// ⚠️ Chỉ interface hỗ trợ declaration merging\ninterface Window { myProp: string; } // Mở rộng Window" }
        ]
      },
      {
        id: "ts-optional-readonly",
        title: "Optional, Readonly & Index Signature",
        description: "Optional (?) cho phép thuộc tính có thể không tồn tại. Readonly ngăn thay đổi sau khi khởi tạo. Index signature cho phép object có key động.",
        exampleText: "Index signature thường dùng cho dictionary/map hoặc object có key không biết trước.",
        codeBlocks: [
          { title: "Ví dụ", code: "interface Config {\n  readonly apiUrl: string;      // Bất biến\n  timeout?: number;             // Tùy chọn\n  [key: string]: unknown;       // Key động\n}\n\n// Readonly toàn bộ object\nconst config: Readonly<Config> = {\n  apiUrl: 'https://api.example.com',\n};\n// config.apiUrl = '...'; // ❌ Error" }
        ]
      },
      {
        id: "ts-function-types",
        title: "Function Types",
        description: "Khai báo kiểu cho tham số và giá trị trả về. Hỗ trợ optional parameter (?), default value (=), rest parameter (...args), overload (nhiều signature).",
        exampleText: "TypeScript tự suy luận kiểu trả về nếu không khai báo, nhưng khai báo rõ ràng giúp code dễ đọc hơn.",
        codeBlocks: [
          { title: "Cú pháp", code: "// Khai báo đầy đủ\nfunction greet(name: string, age?: number): string {\n  return `Xin chào ${name}`;\n}\n\n// Arrow function\nconst add = (a: number, b: number): number => a + b;\n\n// Function type alias\ntype MathFn = (a: number, b: number) => number;\nconst multiply: MathFn = (a, b) => a * b;\n\n// Rest parameters\nfunction sum(...nums: number[]): number {\n  return nums.reduce((a, b) => a + b, 0);\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "Generics",
    cards: [
      {
        id: "ts-generics-basic",
        title: "Generics cơ bản",
        description: "Generics (<T>) cho phép tạo component/function tái sử dụng mà vẫn giữ type safety. T là 'biến kiểu' - được xác định khi gọi. Không cần biết trước kiểu cụ thể, nhưng vẫn đảm bảo nhất quán.",
        exampleText: "Giống như hàm nhận tham số, nhưng tham số ở đây là kiểu dữ liệu thay vì giá trị.",
        codeBlocks: [
          { title: "Ví dụ", code: "// Không generic: phải viết nhiều hàm\nfunction firstString(arr: string[]): string { return arr[0]; }\nfunction firstNumber(arr: number[]): number { return arr[0]; }\n\n// Với generic: 1 hàm cho mọi kiểu\nfunction first<T>(arr: T[]): T {\n  return arr[0];\n}\n\nfirst<string>(['a', 'b']);  // kiểu: string\nfirst([1, 2, 3]);           // tự suy luận: number" }
        ]
      },
      {
        id: "ts-generics-constraints",
        title: "Generic Constraints (extends)",
        description: "Dùng extends để giới hạn kiểu generic phải thỏa mãn điều kiện. Ví dụ: T extends object nghĩa là T phải là object. T extends { length: number } nghĩa là T phải có thuộc tính length.",
        exampleText: "Constraint giúp sử dụng thuộc tính/method của kiểu bên trong generic function.",
        codeBlocks: [
          { title: "Ví dụ", code: "// T phải có thuộc tính length\nfunction logLength<T extends { length: number }>(item: T): void {\n  console.log(item.length);\n}\n\nlogLength('hello');      // ✅ string có length\nlogLength([1, 2, 3]);    // ✅ array có length\n// logLength(123);       // ❌ number không có length\n\n// Generic với nhiều tham số\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}" }
        ]
      },
      {
        id: "ts-generics-interface",
        title: "Generic Interface & Type",
        description: "Interface và type cũng hỗ trợ generic. Rất hữu ích cho API response, state management, container types.",
        exampleText: "Pattern phổ biến: ApiResponse<T> bọc data với status/error, giúp xử lý response thống nhất.",
        codeBlocks: [
          { title: "Ví dụ", code: "// Generic interface\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\n// Sử dụng\nconst userRes: ApiResponse<User> = {\n  data: { name: 'An', age: 25 },\n  status: 200,\n  message: 'OK',\n};\n\nconst listRes: ApiResponse<User[]> = {\n  data: [{ name: 'An', age: 25 }],\n  status: 200,\n  message: 'OK',\n};" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "Utility Types & Type Manipulation",
    cards: [
      {
        id: "ts-utility-types",
        title: "Utility Types phổ biến",
        description: "TypeScript cung cấp sẵn các utility type để biến đổi kiểu: Partial<T> (tất cả optional), Required<T> (tất cả bắt buộc), Pick<T,K> (chọn thuộc tính), Omit<T,K> (bỏ thuộc tính), Record<K,V> (tạo object type).",
        exampleText: "Không cần tạo interface mới mỗi lần. Biến đổi từ interface có sẵn giúp DRY (Don't Repeat Yourself).",
        codeBlocks: [
          { title: "Partial & Required", code: "interface User {\n  name: string;\n  email: string;\n  age: number;\n}\n\n// Partial: tất cả optional (dùng cho update)\ntype UpdateUser = Partial<User>;\n// { name?: string; email?: string; age?: number; }\n\nfunction updateUser(id: number, data: Partial<User>) {\n  // Chỉ cần truyền field cần update\n}\nupdateUser(1, { name: 'An mới' }); // ✅" },
          { title: "Pick & Omit", code: "// Pick: chỉ lấy một số field\ntype UserPreview = Pick<User, 'name' | 'email'>;\n// { name: string; email: string; }\n\n// Omit: bỏ một số field\ntype UserWithoutAge = Omit<User, 'age'>;\n// { name: string; email: string; }" },
          { title: "Record & ReturnType", code: "// Record: tạo object type từ key + value\ntype StatusMap = Record<string, boolean>;\n// { [key: string]: boolean }\n\ntype Roles = Record<'admin' | 'user' | 'guest', string[]>;\n\n// ReturnType: lấy kiểu trả về của function\nfunction getUser() { return { name: 'An', age: 25 }; }\ntype UserType = ReturnType<typeof getUser>;\n// { name: string; age: number; }" }
        ]
      },
      {
        id: "ts-type-narrowing",
        title: "Type Narrowing (Thu hẹp kiểu)",
        description: "Type narrowing là kỹ thuật thu hẹp kiểu union thành kiểu cụ thể hơn. Dùng typeof, instanceof, in, equality check, hoặc custom type guard (is). TypeScript tự hiểu kiểu sau khi narrowing.",
        exampleText: "Khi có union type (string | number), cần narrow trước khi dùng method riêng (toUpperCase chỉ có ở string).",
        codeBlocks: [
          { title: "typeof & instanceof", code: "function process(value: string | number) {\n  if (typeof value === 'string') {\n    // TypeScript biết value là string\n    return value.toUpperCase();\n  }\n  // TypeScript biết value là number\n  return value.toFixed(2);\n}\n\nfunction logDate(date: Date | string) {\n  if (date instanceof Date) {\n    console.log(date.toISOString());\n  } else {\n    console.log(date);\n  }\n}" },
          { title: "Custom Type Guard (is)", code: "interface Fish { swim: () => void; }\ninterface Bird { fly: () => void; }\n\n// Custom type guard\nfunction isFish(pet: Fish | Bird): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}\n\nfunction move(pet: Fish | Bird) {\n  if (isFish(pet)) {\n    pet.swim(); // ✅ TypeScript biết là Fish\n  } else {\n    pet.fly();  // ✅ TypeScript biết là Bird\n  }\n}" }
        ]
      },
      {
        id: "ts-discriminated-union",
        title: "Discriminated Union",
        description: "Pattern dùng thuộc tính chung (discriminant) có literal type để phân biệt các kiểu trong union. TypeScript tự narrow kiểu khi check discriminant. Thay thế tuyệt vời cho enum trong nhiều trường hợp.",
        exampleText: "Rất phổ biến trong Redux action, API response, và state machine. switch/case trên discriminant rất clean.",
        codeBlocks: [
          { title: "Ví dụ", code: "type LoadingState = { status: 'loading' };\ntype SuccessState = { status: 'success'; data: string[] };\ntype ErrorState = { status: 'error'; error: string };\n\ntype State = LoadingState | SuccessState | ErrorState;\n\nfunction render(state: State) {\n  switch (state.status) {\n    case 'loading':\n      return 'Đang tải...';\n    case 'success':\n      return state.data.join(', '); // ✅ TypeScript biết có data\n    case 'error':\n      return state.error; // ✅ TypeScript biết có error\n  }\n}" }
        ]
      },
      {
        id: "ts-enums",
        title: "Enum",
        description: "Enum định nghĩa tập hợp hằng số có tên. Numeric enum (mặc định, bắt đầu từ 0) hoặc string enum (phải gán giá trị). const enum được inline lúc biên dịch (hiệu suất tốt hơn).",
        exampleText: "Nhiều developer ưa dùng literal union type hơn enum vì nhẹ hơn và không tạo code JS dư thừa.",
        codeBlocks: [
          { title: "Ví dụ", code: "// String enum\nenum Status {\n  Active = 'ACTIVE',\n  Inactive = 'INACTIVE',\n  Pending = 'PENDING',\n}\n\nfunction setStatus(status: Status) { /* ... */ }\nsetStatus(Status.Active);\n\n// const enum (inline, không tạo object)\nconst enum Direction {\n  Up, Down, Left, Right\n}\nlet dir = Direction.Up; // Biên dịch thành: let dir = 0;\n\n// 💡 Alternative: Literal union (nhẹ hơn)\ntype Status2 = 'ACTIVE' | 'INACTIVE' | 'PENDING';" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 5",
    title: "TypeScript với React & Mẹo hay",
    cards: [
      {
        id: "ts-react-props",
        title: "React Props & Component Types",
        description: "Dùng interface/type để khai báo props. React.FC<Props> (optional), children dùng React.ReactNode. Event handler dùng React.MouseEvent, React.ChangeEvent...",
        exampleText: "Khai báo props rõ ràng giúp IDE gợi ý chính xác và phát hiện lỗi truyền props sai.",
        codeBlocks: [
          { title: "Props cơ bản", code: "interface ButtonProps {\n  label: string;\n  variant?: 'primary' | 'secondary';\n  disabled?: boolean;\n  onClick: () => void;\n  children?: React.ReactNode;\n}\n\nfunction Button({ label, variant = 'primary', onClick }: ButtonProps) {\n  return <button className={variant} onClick={onClick}>{label}</button>;\n}" },
          { title: "Event & Ref", code: "// Event types\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  console.log(e.target.value);\n};\n\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n};\n\n// Ref type\nconst inputRef = useRef<HTMLInputElement>(null);" }
        ]
      },
      {
        id: "ts-react-hooks",
        title: "TypeScript với Hooks",
        description: "useState<T> khai báo kiểu state. useRef<T>(null) khai báo kiểu ref. useReducer cần type cho state và action. Custom hook cần khai báo kiểu trả về.",
        exampleText: "TypeScript tự suy luận kiểu cho useState nếu có giá trị khởi tạo. Cần khai báo rõ khi initial value là null/undefined.",
        codeBlocks: [
          { title: "useState & useRef", code: "// Tự suy luận\nconst [count, setCount] = useState(0); // number\nconst [name, setName] = useState('');  // string\n\n// Cần khai báo rõ\nconst [user, setUser] = useState<User | null>(null);\nconst [items, setItems] = useState<string[]>([]);\n\n// useRef\nconst divRef = useRef<HTMLDivElement>(null);\nconst timerRef = useRef<number>(0);" },
          { title: "useReducer", code: "type State = { count: number; name: string };\ntype Action =\n  | { type: 'increment'; payload: number }\n  | { type: 'setName'; payload: string };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case 'increment':\n      return { ...state, count: state.count + action.payload };\n    case 'setName':\n      return { ...state, name: action.payload };\n  }\n}\n\nconst [state, dispatch] = useReducer(reducer, { count: 0, name: '' });" }
        ]
      },
      {
        id: "ts-assertion-casting",
        title: "Type Assertion & as const",
        description: "Type assertion (as) nói TypeScript tin bạn về kiểu. Chỉ dùng khi bạn biết chắc hơn TS. as const biến giá trị thành literal type readonly (hữu ích cho config, constants).",
        exampleText: "Cẩn thận: type assertion không kiểm tra runtime, nếu sai sẽ crash. Ưu tiên type guard hơn assertion.",
        codeBlocks: [
          { title: "Ví dụ", code: "// Type assertion\nconst input = document.getElementById('email') as HTMLInputElement;\ninput.value; // ✅ TypeScript biết có .value\n\n// Non-null assertion (!)\nconst el = document.querySelector('.box')!; // Khẳng định không null\n\n// as const - biến thành literal readonly\nconst COLORS = ['red', 'blue', 'green'] as const;\n// type: readonly ['red', 'blue', 'green']\n// Không phải string[] → chính xác hơn\n\nconst config = {\n  api: 'https://api.example.com',\n  timeout: 5000,\n} as const;\n// config.api: 'https://api.example.com' (literal, readonly)" }
        ]
      },
      {
        id: "ts-tips",
        title: "Mẹo & Best Practices",
        description: "Tổng hợp mẹo TypeScript từ cộng đồng giúp code sạch hơn, an toàn hơn.",
        exampleText: "Nguyên tắc vàng: strict mode luôn bật, tránh any, ưu tiên unknown + type guard.",
        codeBlocks: [
          { title: "✅ Nên làm", code: "// 1. Bật strict mode trong tsconfig.json\n{ \"compilerOptions\": { \"strict\": true } }\n\n// 2. Dùng unknown thay any\nfunction parse(input: unknown) {\n  if (typeof input === 'string') return JSON.parse(input);\n}\n\n// 3. Dùng satisfies để kiểm tra mà giữ literal type\nconst palette = {\n  red: [255, 0, 0],\n  green: '#00ff00',\n} satisfies Record<string, string | number[]>;\n// palette.red vẫn là number[] (không bị widened)\n\n// 4. Dùng const assertion cho config\nconst routes = ['/', '/about', '/contact'] as const;" },
          { title: "❌ Tránh làm", code: "// ❌ Dùng any khắp nơi\nfunction bad(data: any) { return data.whatever; }\n\n// ❌ Type assertion thay vì type guard\nconst value = someUnknown as string; // Nguy hiểm!\n\n// ❌ Bỏ qua strict null checks\n// user có thể null nhưng không kiểm tra\nuser.name; // Runtime error!\n\n// ❌ Quá phức tạp hóa types\n// Nếu type dài hơn 5 dòng, cân nhắc tách nhỏ" }
        ]
      }
    ]
  }
,
  {
  "label": "Nhóm 3",
  "title": "TypeScript Nâng cao",
  "cards": [
    {
      "id": "ts-generics",
      "title": "Generics (<T>)",
      "description": "Generics cho phép tạo ra các hàm, class, hoặc interface có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo Type Safety.",
      "exampleText": "Chữ T thường được dùng làm quy ước (viết tắt của Type).",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": `function identity<T>(arg: T): T {
  return arg;
}

// Sử dụng
const num = identity<number>(10);
const str = identity<string>('Hello');`
        }
      ]
    },
    {
      "id": "ts-interface-vs-type",
      "title": "Interface vs Type",
      "description": "Cả Interface và Type Alias đều dùng để định nghĩa kiểu dữ liệu. Khác biệt lớn nhất là Interface có thể được kế thừa (extends) và gộp lại (declaration merging), trong khi Type thì phù hợp hơn với Union/Intersection.",
      "exampleText": "Quy tắc chung: Ưu tiên dùng Interface cho Object/Class. Dùng Type khi cần Union (A | B).",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": `// Interface (Có thể extends)
interface Animal { name: string; }
interface Bear extends Animal { honey: boolean; }

// Type (Có thể dùng Intersection)
type AnimalType = { name: string; };
type BearType = AnimalType & { honey: boolean; };`
        }
      ]
    },
    {
      "id": "ts-enums",
      "title": "Enums",
      "description": "Enum giúp định nghĩa một tập hợp các hằng số có tên. Rất hữu ích khi một biến chỉ được phép nhận một trong số các giá trị cố định.",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": `enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// Hoặc String Enum
enum Status {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failed = 'FAILED'
}

const currStatus: Status = Status.Success;`
        }
      ]
    },
    {
      "id": "ts-type-assertion",
      "title": "Type Assertion (as)",
      "description": "Dùng từ khóa `as` để báo cho trình biên dịch biết rõ kiểu dữ liệu của một biến khi bạn biết chắc chắn hơn nó.",
      "exampleText": "Thường dùng khi thao tác với DOM Element hoặc dữ liệu từ API.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": `// Báo cho TS biết đây chắc chắn là HTMLInputElement
const myInput = document.getElementById('my-input') as HTMLInputElement;
myInput.value = 'Hello';

// Cú pháp khác (ít dùng trong React/JSX)
const someValue: any = 'this is a string';
const strLength: number = (<string>someValue).length;`
        }
      ]
    },
    {
      "id": "ts-utility-types",
      "title": "Utility Types",
      "description": "TypeScript cung cấp sẵn nhiều tiện ích để biến đổi kiểu dữ liệu một cách nhanh chóng:\n- Partial<T>: Biến mọi thuộc tính thành optional (có thể có hoặc không).\n- Pick<T, Keys>: Trích xuất một vài thuộc tính từ T.\n- Omit<T, Keys>: Loại bỏ một vài thuộc tính khỏi T.",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": `interface User {
  id: number;
  name: string;
  email: string;
}

// Tạo kiểu mới chỉ cần name và email
type UserCreate = Omit<User, 'id'>;

// Tạo kiểu mới mà các trường đều là tùy chọn
type UserUpdate = Partial<User>;`
        }
      ]
    }
  ]
}];
