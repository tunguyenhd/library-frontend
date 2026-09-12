import type { KnowledgeGroup } from "../types/knowledge";

export const nextGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "NextJS cơ bản & Routing",
    "cards": [
      {
        "id": "next-app-router",
        "title": "App Router",
        "description": "App Router là mô hình routing mới trong Next.js 13+, sử dụng thư mục app/. Mô hình này hỗ trợ Server Components, layout lồng nhau và streaming.",
        "exampleText": "Trong thư mục app, mỗi thư mục con đại diện cho một route (ví dụ app/about/ tương ứng với route /about).",
        "codeBlocks": [
          {
            "title": "Cấu trúc thư mục",
            "code": "app/\n ┣ layout.tsx\n ┣ page.tsx (Trang chủ /)\n ┗ about/\n   ┗ page.tsx (Trang /about)"
          }
        ]
      },
      {
        "id": "next-server-components",
        "title": "React Server Components",
        "description": "Mặc định trong thư mục app, tất cả các component đều là Server Components. Chúng được render trên server, giúp giảm dung lượng JavaScript gửi xuống client và cải thiện hiệu suất.",
        "exampleText": "Không thể dùng các hook như useState hay useEffect trong Server Component.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "export default async function Page() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return <div>{data.title}</div>;\n}",
            "codeTsx": "interface PageData {\n  title: string;\n}\n\nexport default async function Page(): Promise<JSX.Element> {\n  const res = await fetch('https://api.example.com/data');\n  const data: PageData = await res.json();\n  return <div>{data.title}</div>;\n}"
          }
        ]
      },
      {
        "id": "next-client-components",
        "title": "Client Components",
        "description": "Client Components được sử dụng khi cần tương tác từ người dùng, dùng state/lifecycle hooks (useState, useEffect) hoặc các API của browser.",
        "exampleText": "Để sử dụng Client Component, cần thêm chỉ thị 'use client' ở đầu file.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "'use client';\n\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}",
            "codeTsx": "'use client';\n\nimport { useState } from 'react';\n\nexport default function Counter(): JSX.Element {\n  const [count, setCount] = useState<number>(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}"
          }
        ]
      },
      {
        "id": "f8-next-dynamic-routes",
        "title": "Dynamic Routes",
        "description": "Dynamic routes tạo URL động bằng thư mục [tên_param]. Next.js tự map URL → params: /posts/5 → params.id = '5'. Folder name = param name. Dùng cho trang chi tiết (bài viết, sản phẩm, user profile) — bất kỳ trang nào mà URL phụ thuộc vào dữ liệu.",
        "exampleText": "Quy tắc: tên folder [id] → params.id. Tên folder [slug] → params.slug. Luôn là string, cần parseInt() nếu muốn number.",
        "codeBlocks": [
          {
            "title": "📁 Cấu trúc thư mục → URL",
            "code": "app/\n ┣ posts/\n ┃ ┗ [id]/\n ┃   ┗ page.tsx        ← /posts/1, /posts/abc\n ┣ users/\n ┃ ┗ [userId]/\n ┃   ┣ page.tsx        ← /users/123\n ┃   ┗ settings/\n ┃     ┗ page.tsx      ← /users/123/settings\n ┗ products/\n   ┗ [category]/\n     ┗ [productId]/\n       ┗ page.tsx      ← /products/phone/iphone-15\n                          params = { category: 'phone', productId: 'iphone-15' }"
          },
          {
            "title": "Component nhận params",
            "code": "// app/posts/[id]/page.tsx\nconst PostDetail = async ({ params }) => {\n  const { id } = params;\n  // URL /posts/5 → id = '5' (luôn là string!)\n  const post = await getPost(id);\n  return <h1>{post.title}</h1>;\n};\nexport default PostDetail;",
            "codeTsx": "// app/posts/[id]/page.tsx\ninterface PageProps {\n  params: { id: string };\n}\n\nconst PostDetail = async ({ params }: PageProps): Promise<JSX.Element> => {\n  const { id } = params;\n  const post = await getPost(id);\n  return <h1>{post.title}</h1>;\n};\nexport default PostDetail;"
          }
        ]
      },
      {
        "id": "f8-next-not-found",
        "title": "notFound()",
        "description": "Hàm notFound() từ next/navigation dùng để kích hoạt trang 404 tùy chỉnh. Khi gọi hàm này, Next.js sẽ ngừng render component hiện tại và chuyển hướng đến file not-found.js gần nhất.",
        "exampleText": "Sử dụng khi fetch dữ liệu không thành công hoặc post không tồn tại.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import { notFound } from 'next/navigation';\n\nconst post = await getPost(id);\nif (!post.id) {\n  notFound();\n}"
          }
        ]
      },
      {
        "id": "f8-next-image-font",
        "title": "Tối ưu Image & Font",
        "description": "Sử dụng next/image để tự động tối ưu hình ảnh (lazy load, resize) và next/font/google để nạp font chữ không làm ảnh hưởng đến hiệu suất.",
        "exampleText": "Import component Image và font Inter từ Next.js.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import Img from 'next/image';\nimport { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n\n<Img src='/images/next.svg' width={300} height={200} />\n<h2 className={inter.className}>Font Inter</h2>"
          }
        ]
      },
      {
        "id": "f8-next-middleware",
        "title": "Middleware",
        "description": "Middleware chạy TRƯỚC mỗi request đến server. Dùng để: kiểm tra đăng nhập (redirect về /login nếu chưa auth), phân quyền, rewrite URL, set headers. Chạy trên Edge Runtime (nhẹ, nhanh, nhưng KHÔNG dùng được Node.js APIs như fs, path). Chỉ có 1 file middleware duy nhất cho cả project.",
        "exampleText": "config.matcher chọn route cần middleware. Không có matcher → chạy cho TẤT CẢ routes (kể cả _next, favicon).",
        "codeBlocks": [
          {
            "title": "📁 Vị trí file (project root)",
            "code": "my-next-app/\n ┣ app/\n ┃ ┣ layout.tsx\n ┃ ┣ page.tsx\n ┃ ┗ dashboard/\n ┃   ┗ page.tsx\n ┣ middleware.ts       ← ĐẶT Ở ĐÂY (cùng cấp với app/)\n ┣ next.config.js\n ┣ package.json\n ┗ .env"
          },
          {
            "title": "Ví dụ",
            "code": "// middleware.ts\nimport { NextResponse } from 'next/server';\n\nexport const middleware = (request) => {\n  const token = request.cookies.get('token');\n  if (!token) {\n    return NextResponse.redirect(new URL('/auth', request.url));\n  }\n  return NextResponse.next(); // Cho đi tiếp\n};\n\n// Chỉ chạy middleware cho các route này\nexport const config = {\n  matcher: ['/dashboard/:path*', '/profile/:path*']\n};",
            "codeTsx": "// middleware.ts\nimport { NextResponse, NextRequest } from 'next/server';\n\nexport const middleware = (request: NextRequest): NextResponse => {\n  const token = request.cookies.get('token');\n  if (!token) {\n    return NextResponse.redirect(new URL('/auth', request.url));\n  }\n  return NextResponse.next();\n};\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/profile/:path*']\n};"
          }
        ]
      },
      {
        "id": "f8-next-catch-all-routes",
        "title": "Catch-all & Optional Catch-all Segments",
        "description": "Catch-all bắt TẤT CẢ segment con thành 1 mảng. [...slug] bắt buộc ít nhất 1 segment (không match /). [[...slug]] là optional — match cả / (không có segment nào). params trả về mảng string.",
        "exampleText": "Dùng cho: doc pages (/docs/getting-started/install), breadcrumb navigation, blog categories (/blog/2024/react/hooks).",
        "codeBlocks": [
          {
            "title": "📁 Cấu trúc & URL matching",
            "code": "app/\n ┣ docs/\n ┃ ┗ [...slug]/\n ┃   ┗ page.tsx      ← Catch-all (bắt buộc)\n ┗ blog/\n   ┗ [[...slug]]/\n     ┗ page.tsx      ← Optional catch-all\n\n// So sánh URL matching:\n// ┌──────────────────┬────────────────┬──────────────────┐\n// │ URL              │ [...slug]      │ [[...slug]]      │\n// ├──────────────────┼────────────────┼──────────────────┤\n// │ /docs            │ ❌ 404         │ ✅ slug = undef  │\n// │ /docs/intro      │ ✅ ['intro']   │ ✅ ['intro']     │\n// │ /docs/a/b/c      │ ✅ ['a','b','c']│ ✅ ['a','b','c'] │\n// └──────────────────┴────────────────┴──────────────────┘"
          },
          {
            "title": "Ví dụ [[...slug]]",
            "code": "// app/blog/[[...slug]]/page.tsx\nconst BlogPage = ({ params }) => {\n  const slugs = params.slug;\n  // /blog          → slugs = undefined\n  // /blog/react    → slugs = ['react']\n  // /blog/react/hooks → slugs = ['react', 'hooks']\n\n  if (!slugs) return <h1>Tất cả bài viết</h1>;\n  return <h2>Danh mục: {slugs.join(' > ')}</h2>;\n  // 'react > hooks'\n};"
          }
        ]
      },
      {
        "id": "f8-next-route-groups",
        "title": "Route Groups",
        "description": "Dùng thư mục có tên trong dấu ngoặc đơn (ví dụ: (client) hoặc (admin)) để gom nhóm các route có chung layout mà không làm ảnh hưởng đến cấu trúc URL.",
        "exampleText": "URL app/(client)/about/page.js vẫn là /about.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "app/\n ┣ (client)/\n ┃ ┣ layout.js (Layout riêng cho client)\n ┃ ┗ page.js (URL: /)\n ┗ (admin)/\n   ┣ layout.js (Layout riêng cho admin)\n   ┗ dashboard/page.js (URL: /dashboard)"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Data Fetching",
    "cards": [
      {
        "id": "next-fetch",
        "title": "fetch() API",
        "description": "Next.js mở rộng Web fetch() API để cấu hình caching và revalidating cho mỗi request. Mặc định Next.js sẽ tự động phân tích và cache dữ liệu (tuỳ thuộc vào hàm).",
        "exampleText": "Sử dụng { cache: 'no-store' } để lấy dữ liệu mới ở mỗi request (tương đương với SSR).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "async function getData() {\n  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });\n  if (!res.ok) throw new Error('Failed to fetch data');\n  return res.json();\n}"
          }
        ]
      },
      {
        "id": "f8-next-metadata",
        "title": "Dynamic Metadata",
        "description": "Next.js hỗ trợ tạo metadata động thông qua hàm generateMetadata. Hàm này nhận params (hoặc searchParams) để fetch dữ liệu và trả về object cấu hình SEO (title, description,...).",
        "exampleText": "Giúp tối ưu SEO cho các trang có dữ liệu động như trang chi tiết bài viết.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "export async function generateMetadata({ params }) {\n  const post = await getPost(params.id);\n  return {\n    title: post.title,\n    description: post.body\n  };\n}",
            "codeTsx": "import type { Metadata } from 'next';\n\ninterface PageProps {\n  params: { id: string };\n}\n\nexport async function generateMetadata({ params }: PageProps): Promise<Metadata> {\n  const post = await getPost(params.id);\n  return {\n    title: post.title,\n    description: post.body,\n  };\n}"
          }
        ]
      },
      {
        "id": "f8-next-route-handlers",
        "title": "Route Handlers (API Routes)",
        "description": "Route Handlers tạo API endpoints bằng file route.ts (KHÔNG phải page.tsx). Đặt trong app/api/. Export các hàm GET, POST, PUT, DELETE — mỗi hàm xử lý 1 HTTP method. Thay thế pages/api/ của Pages Router cũ.",
        "exampleText": "Lưu ý: route.ts và page.tsx KHÔNG được ở cùng thư mục. route.ts dùng Response.json() để trả JSON.",
        "codeBlocks": [
          {
            "title": "📁 Cấu trúc API routes",
            "code": "app/\n ┗ api/\n   ┣ users/\n   ┃ ┣ route.ts          ← GET /api/users, POST /api/users\n   ┃ ┗ [id]/\n   ┃   ┗ route.ts        ← GET /api/users/123, DELETE /api/users/123\n   ┣ posts/\n   ┃ ┗ route.ts          ← GET /api/posts\n   ┗ auth/\n     ┗ login/\n       ┗ route.ts        ← POST /api/auth/login"
          },
          {
            "title": "GET & POST",
            "code": "// app/api/users/route.ts\nexport function GET(request) {\n  const apiKey = request.headers.get('x-api-key');\n  return Response.json({ message: 'Success' });\n}\n\nexport async function POST(request) {\n  const body = await request.json();\n  return Response.json({ data: body }, { status: 201 });\n}",
            "codeTsx": "// app/api/users/route.ts\nimport { NextRequest } from 'next/server';\n\nexport function GET(request: NextRequest): Response {\n  const apiKey = request.headers.get('x-api-key');\n  return Response.json({ message: 'Success' });\n}\n\nexport async function POST(request: NextRequest): Promise<Response> {\n  const body = await request.json() as { title: string };\n  return Response.json({ data: body }, { status: 201 });\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Server Actions, Caching & Form",
    "cards": [
      {
        "id": "f8-next-server-actions",
        "title": "Server Actions",
        "description": "Server Actions là hàm chạy trên server, gọi trực tiếp từ Client Component — KHÔNG cần viết API route trung gian. So với Route Handler: Route Handler = REST API truyền thống (GET/POST/PUT/DELETE), Server Action = gọi hàm server trực tiếp từ form/button (đơn giản hơn, ít boilerplate). Đánh dấu bằng 'use server' ở đầu file hoặc đầu hàm.",
        "exampleText": "Luồng: Client submit form → Server Action chạy trên server → revalidate cache → redirect. Không cần fetch(), không cần API route.",
        "codeBlocks": [
          {
            "title": "📁 Vị trí file",
            "code": "app/\n ┣ todos/\n ┃ ┣ page.tsx          ← Server Component (hiển thị list)\n ┃ ┣ TodoForm.tsx      ← Client Component ('use client')\n ┃ ┗ actions.ts        ← Server Actions ('use server')\n ┗ layout.tsx"
          },
          {
            "title": "actions.ts",
            "code": "'use server';\nimport { revalidateTag } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\nexport const handleSubmit = async (formData) => {\n  const title = formData.get('title');\n  // Gọi DB trực tiếp (đang ở server!)\n  await db.todo.create({ data: { title } });\n  revalidateTag('todo-list'); // Xóa cache\n  redirect('/todos');         // Chuyển trang\n};",
            "codeTsx": "'use server';\nimport { revalidateTag } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\nexport const handleSubmit = async (formData: FormData): Promise<void> => {\n  const title = formData.get('title') as string;\n  await db.todo.create({ data: { title } });\n  revalidateTag('todo-list');\n  redirect('/todos');\n};"
          }
        ]
      },
      {
        "id": "f8-next-searchparams",
        "title": "searchParams (Query String)",
        "description": "Server Component nhận searchParams từ props để đọc query string từ URL. Ví dụ: /products?status=active&keyword=abc sẽ nhận được { status: 'active', keyword: 'abc' }.",
        "exampleText": "Từ next01/products/page.js: Dùng searchParams để lọc hoặc tìm kiếm sản phẩm.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const ProductsPage = ({ searchParams }) => {\n  const { status, keyword } = searchParams;\n  return (\n    <div>\n      <h2>Status: {status}</h2>\n      <h2>Keyword: {keyword}</h2>\n    </div>\n  );\n};\n// URL: /products?status=active&keyword=abc",
            "codeTsx": "interface PageProps {\n  searchParams: { status?: string; keyword?: string };\n}\n\nconst ProductsPage = ({ searchParams }: PageProps): JSX.Element => {\n  const { status, keyword } = searchParams;\n  return (\n    <div>\n      <h2>Status: {status}</h2>\n      <h2>Keyword: {keyword}</h2>\n    </div>\n  );\n};\n// URL: /products?status=active&keyword=abc"
          }
        ]
      },
      {
        "id": "f8-next-nested-layout",
        "title": "Nested Layout (Layout lồng nhau)",
        "description": "Mỗi route group hoặc thư mục con có thể có layout.js riêng, tạo ra layout lồng nhau. Layout cha bọc layout con, giúp chia sẻ header/footer chung cho một nhóm trang.",
        "exampleText": "Từ next01: RootLayout (html, body) → ClientLayout (header, main, footer) → Page content.",
        "codeBlocks": [
          {
            "title": "Root Layout",
            "code": "// app/layout.js\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>{children}</body>\n    </html>\n  );\n}",
            "codeTsx": "// app/layout.tsx\ninterface LayoutProps {\n  children: React.ReactNode;\n}\n\nexport default function RootLayout({ children }: LayoutProps): JSX.Element {\n  return (\n    <html lang=\"en\">\n      <body>{children}</body>\n    </html>\n  );\n}"
          },
          {
            "title": "Client Layout",
            "code": "// app/(client)/layout.js\nconst ClientLayout = ({ children }) => (\n  <>\n    <header><h2>HEADER</h2></header>\n    <main>{children}</main>\n    <footer><h2>FOOTER</h2></footer>\n  </>\n);",
            "codeTsx": "// app/(client)/layout.tsx\ninterface ClientLayoutProps {\n  children: React.ReactNode;\n}\n\nconst ClientLayout = ({ children }: ClientLayoutProps): JSX.Element => (\n  <>\n    <header><h2>HEADER</h2></header>\n    <main>{children}</main>\n    <footer><h2>FOOTER</h2></footer>\n  </>\n);"
          }
        ]
      },
      {
        "id": "f8-next-caching",
        "title": "Caching: force-cache, revalidate & tags",
        "description": "Next.js mở rộng fetch() với các tuỳ chọn cache. force-cache lưu vĩnh viễn, revalidate (giây) để auto refresh, tags để xóa cache thủ công bằng revalidateTag(). Chỉ hoạt động ở Server Action và Route Handler.",
        "exampleText": "Từ next02/TodoList.js: Server Component fetch dữ liệu với tag 'todo-list', khi thêm todo mới thì gọi revalidateTag('todo-list') để làm mới.",
        "codeBlocks": [
          {
            "title": "Fetch với cache",
            "code": "const response = await fetch(`${process.env.SERVER_API}/todos`, {\n  cache: 'force-cache',\n  next: {\n    // revalidate: 5, // tự refresh sau 5 giây\n    tags: ['todo-list'], // dùng với revalidateTag\n  },\n});"
          },
          {
            "title": "Xóa cache",
            "code": "// Trong Server Action hoặc Route Handler:\nimport { revalidateTag } from 'next/cache';\nrevalidateTag('todo-list');"
          }
        ]
      },
      {
        "id": "f8-next-custom-not-found",
        "title": "Custom Not Found Page & useRouter",
        "description": "not-found.tsx hiển thị khi gọi notFound() hoặc truy cập URL không tồn tại. Đặt ở app/ cho toàn app, hoặc trong folder route cho từng phần. Next.js tìm not-found.tsx gần nhất (giống error.tsx). Dùng useRouter() để điều hướng programmatically.",
        "exampleText": "not-found.tsx CÓ THỂ là Server Component (khác error.tsx bắt buộc 'use client'). Chỉ cần 'use client' khi dùng hooks.",
        "codeBlocks": [
          {
            "title": "📁 Vị trí file",
            "code": "app/\n ┣ not-found.tsx        ← 404 mặc định cho toàn app\n ┣ layout.tsx\n ┣ page.tsx\n ┗ posts/\n   ┣ not-found.tsx      ← 404 riêng cho /posts/*\n   ┗ [id]/\n     ┗ page.tsx         ← Gọi notFound() nếu post không tồn tại"
          },
          {
            "title": "not-found.tsx",
            "code": "'use client';\nimport { useRouter } from 'next/navigation';\n\nexport default function NotFound() {\n  const router = useRouter();\n  return (\n    <div>\n      <h1>PAGE NOT FOUND</h1>\n      <p>Trang bạn tìm không tồn tại hoặc đã bị xóa.</p>\n      <button onClick={() => router.push('/')}>\n        Về trang chủ\n      </button>\n    </div>\n  );\n}",
            "codeTsx": "'use client';\nimport { useRouter } from 'next/navigation';\n\nexport default function NotFound(): JSX.Element {\n  const router = useRouter();\n  return (\n    <div>\n      <h1>PAGE NOT FOUND</h1>\n      <p>Trang bạn tìm không tồn tại hoặc đã bị xóa.</p>\n      <button onClick={() => router.push('/')}>\n        Về trang chủ\n      </button>\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "f8-next-server-vs-client-form",
        "title": "Client Form vs Server Action Form",
        "description": "Có 2 cách xử lý form: Client Component dùng onSubmit + e.preventDefault() + fetch (truyền thống). Server Action dùng form action={serverFn} + FormData (mới, không cần viết API route).",
        "exampleText": "Từ next02: TodoForm (client) dùng useState + onSubmit, TodoForm2 dùng Server Action với form action.",
        "codeBlocks": [
          {
            "title": "Client Form",
            "code": "// TodoForm.js ('use client')\nconst handleSubmit = async (e) => {\n  e.preventDefault();\n  await fetch('/api/todos', {\n    method: 'POST',\n    body: JSON.stringify({ title }),\n  });\n  router.refresh();\n};\n<form onSubmit={handleSubmit}>...</form>",
            "codeTsx": "// TodoForm.tsx ('use client')\nimport { useState, FormEvent } from 'react';\nimport { useRouter } from 'next/navigation';\n\nconst [title, setTitle] = useState<string>('');\nconst router = useRouter();\n\nconst handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {\n  e.preventDefault();\n  await fetch('/api/todos', {\n    method: 'POST',\n    body: JSON.stringify({ title }),\n  });\n  router.refresh();\n};\n<form onSubmit={handleSubmit}>...</form>"
          },
          {
            "title": "Server Action Form",
            "code": "// TodoForm2.js ('use client') + action.js ('use server')\nimport { handleSubmit } from './action';\n\n<form action={async (formData) => {\n  await handleSubmit(formData);\n  inputRef.current.value = '';\n}}>\n  <input name=\"title\" ref={inputRef} />\n  <button>Add</button>\n</form>",
            "codeTsx": "// TodoForm2.tsx ('use client') + action.ts ('use server')\nimport { useRef } from 'react';\nimport { handleSubmit } from './action';\n\nconst inputRef = useRef<HTMLInputElement>(null);\n\n<form action={async (formData: FormData) => {\n  await handleSubmit(formData);\n  if (inputRef.current) inputRef.current.value = '';\n}}>\n  <input name=\"title\" ref={inputRef} />\n  <button>Add</button>\n</form>"
          }
        ]
      },
      {
        "id": "f8-next-server-client-rules",
        "title": "Quy tắc Server & Client Component",
        "description": "Mặc định tất cả component trong app/ là Server Component. Khi cần tương tác (useState, useEffect, onClick, window, document, localStorage) phải thêm 'use client'. Cha ở đâu con ở đấy: nếu cha là Server thì con cũng là Server, trừ khi con khai báo 'use client'.",
        "exampleText": "Từ next01: Button.js và TodoList.js phải thêm 'use client' vì dùng useEffect, onClick. products/page.js là Server Component vì chỉ render static.",
        "codeBlocks": [
          {
            "title": "Quy tắc",
            "code": "// Server Component (mặc định)\n// ✅ async/await, fetch trực tiếp\n// ❌ useState, useEffect, onClick, window\n\n// Client Component\n'use client';\n// ✅ useState, useEffect, onClick, window\n// ❌ async component, truy cập DB trực tiếp"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Loading, Error & Navigation",
    "cards": [
      {
        "id": "next-loading-ui",
        "title": "loading.tsx (Loading UI)",
        "description": "Đặt loading.tsx trong thư mục route → Next.js TỰ ĐỘNG bọc page.tsx bằng <Suspense>. Khi user chuyển trang, loading UI hiển thị NGAY LẬP TỨC (instant) trong khi server đang render page (streaming). Mỗi route segment có thể có loading riêng → loading chi tiết cho từng phần.",
        "exampleText": "loading.tsx = Suspense tự động. Muốn loading cho 1 phần nhỏ trong page (không phải cả trang) → dùng <Suspense> thủ công.",
        "codeBlocks": [
          {
            "title": "📁 Vị trí & cách hoạt động",
            "code": "app/\n ┣ layout.tsx\n ┣ page.tsx\n ┣ loading.tsx          ← Loading cho trang chủ /\n ┗ posts/\n   ┣ loading.tsx        ← Loading riêng cho /posts\n   ┣ page.tsx\n   ┗ [id]/\n     ┣ loading.tsx      ← Loading riêng cho /posts/123\n     ┗ page.tsx\n\n// Next.js tự chuyển thành:\n// <Suspense fallback={<Loading />}>\n//   <Page />\n// </Suspense>"
          },
          {
            "title": "loading.tsx",
            "code": "// app/posts/loading.tsx\nexport default function Loading() {\n  return (\n    <div className=\"loading-skeleton\">\n      <div className=\"skeleton-title\" />\n      <div className=\"skeleton-content\" />\n    </div>\n  );\n}",
            "codeTsx": "// app/posts/loading.tsx\nexport default function Loading(): JSX.Element {\n  return (\n    <div className=\"loading-skeleton\">\n      <div className=\"skeleton-title\" />\n      <div className=\"skeleton-content\" />\n    </div>\n  );\n}"
          },
          {
            "title": "Suspense thủ công (loading 1 phần)",
            "code": "// Khi muốn loading cho 1 component cụ thể, không phải cả trang\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Bài viết</h1>  {/* Hiển thị ngay */}\n      <Suspense fallback={<p>Đang tải danh sách...</p>}>\n        <PostList />     {/* Chờ fetch xong mới hiện */}\n      </Suspense>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-error-ui",
        "title": "error.tsx (Error Boundary)",
        "description": "error.tsx bắt lỗi runtime trong route segment. BẮT BUỘC 'use client'. Nhận 2 props: error (Error object) và reset (gọi để thử lại). Lỗi 'nổi bọt' lên: lỗi ở segment con → bị bắt bởi error.tsx của segment CHA gần nhất. Lưu ý: error.tsx KHÔNG bắt lỗi của layout.tsx CÙNG CẤP (dùng global-error.tsx cho root layout).",
        "exampleText": "error.tsx giống React Error Boundary nhưng tự động. App không crash, chỉ phần bị lỗi hiển thị fallback + nút thử lại.",
        "codeBlocks": [
          {
            "title": "📁 Error bubbling (nổi bọt)",
            "code": "app/\n ┣ layout.tsx\n ┣ error.tsx             ← Bắt lỗi của page.tsx + segment con\n ┣ global-error.tsx      ← Bắt lỗi của ROOT layout.tsx\n ┣ page.tsx\n ┗ posts/\n   ┣ error.tsx           ← Bắt lỗi /posts và /posts/[id]\n   ┣ page.tsx\n   ┗ [id]/\n     ┗ page.tsx          ← Lỗi ở đây → nổi lên posts/error.tsx\n\n// Thứ tự bắt lỗi (gần nhất trước):\n// posts/[id]/page.tsx lỗi\n//   → tìm posts/[id]/error.tsx (không có)\n//   → tìm posts/error.tsx ✅ (bắt ở đây)"
          },
          {
            "title": "error.tsx",
            "code": "'use client';\n\nexport default function Error({\n  error,\n  reset,\n}: {\n  error: Error;\n  reset: () => void;\n}) {\n  return (\n    <div>\n      <h2>Có lỗi xảy ra!</h2>\n      <p>{error.message}</p>\n      <button onClick={() => reset()}>Thử lại</button>\n    </div>\n  );\n}",
            "codeTsx": "'use client';\n\ninterface ErrorProps {\n  error: Error;\n  reset: () => void;\n}\n\nexport default function Error({ error, reset }: ErrorProps): JSX.Element {\n  return (\n    <div>\n      <h2>Có lỗi xảy ra!</h2>\n      <p>{error.message}</p>\n      <button onClick={() => reset()}>Thử lại</button>\n    </div>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-link-component",
        "title": "Link Component & Prefetch",
        "description": "Component Link từ next/link dùng để điều hướng client-side (không reload trang). Mặc định tự động prefetch route khi Link xuất hiện trong viewport, giúp chuyển trang gần như tức thì. Dùng prefetch={false} để tắt.",
        "exampleText": "Luôn dùng <Link> thay vì <a> cho internal navigation. Link tự động prefetch code + data của trang đích.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import Link from 'next/link';\n\n<Link href=\"/about\">Về chúng tôi</Link>\n\n// Dynamic route\n<Link href={`/posts/${post.id}`}>{post.title}</Link>\n\n// Tắt prefetch\n<Link href=\"/heavy-page\" prefetch={false}>Trang nặng</Link>"
          }
        ]
      },
      {
        "id": "next-use-router",
        "title": "useRouter, usePathname, useSearchParams",
        "description": "useRouter() để điều hướng programmatically (push, replace, refresh, back). usePathname() trả về path hiện tại. useSearchParams() trả về query string. Tất cả từ next/navigation, chỉ dùng trong Client Component.",
        "exampleText": "router.refresh() rất hữu ích để cập nhật Server Component mà không mất client state (ví dụ: sau khi submit form).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "'use client';\nimport { useRouter, usePathname, useSearchParams } from 'next/navigation';\n\nconst router = useRouter();\nconst pathname = usePathname(); // '/products'\nconst searchParams = useSearchParams(); // URLSearchParams\n\nrouter.push('/login');    // Chuyển trang\nrouter.replace('/home');  // Thay thế (không lưu history)\nrouter.refresh();         // Refresh Server Components\nrouter.back();            // Quay lại",
            "codeTsx": "'use client';\nimport { useRouter, usePathname, useSearchParams } from 'next/navigation';\nimport type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';\n\nconst router: AppRouterInstance = useRouter();\nconst pathname: string = usePathname(); // '/products'\nconst searchParams: URLSearchParams = useSearchParams();\n\nrouter.push('/login');\nrouter.replace('/home');\nrouter.refresh();\nrouter.back();"
          }
        ]
      },
      {
        "id": "next-env-variables",
        "title": "Environment Variables",
        "description": "Biến môi trường trong .env chỉ server đọc được (an toàn cho secret). Muốn client (trình duyệt) đọc được → PHẢI thêm prefix NEXT_PUBLIC_. Lưu ý: NEXT_PUBLIC_ được inline vào JS bundle lúc build → user có thể thấy trong DevTools → KHÔNG để API key, password ở đây!",
        "exampleText": "Next.js hỗ trợ nhiều file .env: .env (mặc định), .env.local (local override, git ignore), .env.production, .env.development. Thứ tự ưu tiên: .env.local > .env.[mode] > .env",
        "codeBlocks": [
          {
            "title": "📁 Vị trí file .env",
            "code": "my-next-app/\n ┣ app/\n ┣ .env                  ← Mặc định (commit vào git)\n ┣ .env.local             ← Override local (GIT IGNORE!)\n ┣ .env.development       ← Chỉ dùng khi npm run dev\n ┣ .env.production        ← Chỉ dùng khi npm run build\n ┣ next.config.js\n ┗ package.json"
          },
          {
            "title": ".env.local",
            "code": "# ✅ Chỉ server (an toàn — KHÔNG lộ ra client)\nSERVER_API=http://localhost:3001\nDATABASE_URL=postgresql://user:pass@localhost:5432/mydb\nJWT_SECRET=super-secret-key\n\n# ⚠️ Client + Server (công khai — AI CŨNG THẤY!)\nNEXT_PUBLIC_API_URL=http://localhost:3001\nNEXT_PUBLIC_APP_NAME=MyApp"
          },
          {
            "title": "Sử dụng",
            "code": "// Server Component / Route Handler / Server Action\nprocess.env.SERVER_API      // ✅ 'http://localhost:3001'\nprocess.env.DATABASE_URL    // ✅ 'postgresql://...'\nprocess.env.JWT_SECRET      // ✅ 'super-secret-key'\n\n// Client Component ('use client')\nprocess.env.NEXT_PUBLIC_API_URL  // ✅ 'http://localhost:3001'\nprocess.env.SERVER_API           // ❌ undefined (bảo mật!)\nprocess.env.JWT_SECRET           // ❌ undefined"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Routing nâng cao & SSG",
    "cards": [
      {
        "id": "next-parallel-routes",
        "title": "Parallel Routes (@slot)",
        "description": "Parallel routes render nhiều page cùng lúc trong cùng một layout. Dùng thư mục @tên (ví dụ: @modal, @analytics). Slot được truyền làm props cho layout. Không ảnh hưởng URL. Bắt buộc tạo default.tsx cho mỗi slot (fallback khi không khớp URL).",
        "exampleText": "Dashboard hiển thị đồng thời @analytics và @team trong cùng layout, mỗi phần có loading/error riêng.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "app/\n ┣ layout.tsx\n ┣ page.tsx\n ┣ @modal/\n ┃ ┣ default.tsx   ← Bắt buộc!\n ┃ ┗ login/page.tsx\n ┗ @analytics/\n   ┣ default.tsx\n   ┗ page.tsx"
          },
          {
            "title": "Layout nhận slots",
            "code": "// app/layout.tsx\nexport default function Layout({\n  children,\n  modal,\n  analytics,\n}: {\n  children: React.ReactNode;\n  modal: React.ReactNode;\n  analytics: React.ReactNode;\n}) {\n  return (\n    <>\n      {children}\n      {modal}\n      {analytics}\n    </>\n  );\n}",
            "codeTsx": "// app/layout.tsx\ninterface LayoutProps {\n  children: React.ReactNode;\n  modal: React.ReactNode;\n  analytics: React.ReactNode;\n}\n\nexport default function Layout({\n  children,\n  modal,\n  analytics,\n}: LayoutProps): JSX.Element {\n  return (\n    <>\n      {children}\n      {modal}\n      {analytics}\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-intercepting-routes",
        "title": "Intercepting Routes (Modal Pattern)",
        "description": "Intercepting routes hiển thị route từ nơi khác trong layout hiện tại mà không thay đổi context (ví dụ: mở ảnh từ feed dạng modal). Quy ước: (.) cùng cấp, (..) trên 1 cấp, (...) từ root. Khi refresh trang → hiển thị trang đầy đủ thay vì modal.",
        "exampleText": "Pattern Instagram: Click ảnh → mở modal (client-side), refresh → hiển thị trang ảnh đầy đủ (server-side).",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "app/\n ┣ feed/\n ┃ ┗ page.tsx           ← Danh sách ảnh\n ┣ photo/[id]/\n ┃ ┗ page.tsx           ← Trang đầy đủ (khi refresh)\n ┗ @modal/\n   ┗ (.)photo/[id]/\n     ┗ page.tsx         ← Modal (khi click từ feed)"
          },
          {
            "title": "Quy ước",
            "code": "// (.) → cùng cấp\n// (..) → trên 1 cấp\n// (..)(..) → trên 2 cấp\n// (...) → từ app/ root"
          }
        ]
      },
      {
        "id": "next-generate-static-params",
        "title": "generateStaticParams (SSG)",
        "description": "Hàm generateStaticParams kết hợp với dynamic route để pre-render (tạo tĩnh) các trang lúc build time thay vì on-demand. Cải thiện hiệu suất đáng kể cho các trang có dữ liệu biết trước (blog posts, products).",
        "exampleText": "Build lúc deploy sẽ tạo sẵn HTML cho tất cả bài viết, user truy cập không cần chờ server render.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// app/posts/[id]/page.tsx\nexport async function generateStaticParams() {\n  const posts = await getPosts();\n  return posts.map((post) => ({\n    id: post.id.toString(),\n  }));\n  // → Tạo: /posts/1, /posts/2, /posts/3...\n}\n\nexport default async function Post({ params }) {\n  const post = await getPost(params.id);\n  return <h1>{post.title}</h1>;\n}",
            "codeTsx": "// app/posts/[id]/page.tsx\ninterface Post {\n  id: number;\n  title: string;\n}\n\ninterface PageProps {\n  params: { id: string };\n}\n\nexport async function generateStaticParams(): Promise<{ id: string }[]> {\n  const posts: Post[] = await getPosts();\n  return posts.map((post) => ({\n    id: post.id.toString(),\n  }));\n}\n\nexport default async function Post({ params }: PageProps): Promise<JSX.Element> {\n  const post: Post = await getPost(params.id);\n  return <h1>{post.title}</h1>;\n}"
          }
        ]
      },
      {
        "id": "next-dynamic-import",
        "title": "next/dynamic (Lazy Loading)",
        "description": "Dùng next/dynamic để lazy load component (chỉ tải khi cần). Giảm bundle size ban đầu. Hỗ trợ ssr: false để chỉ render ở client (hữu ích cho thư viện không hỗ trợ SSR như chart, editor).",
        "exampleText": "Thư viện nặng (rich text editor, chart library) nên luôn dùng dynamic import để không ảnh hưởng tốc độ tải trang.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import dynamic from 'next/dynamic';\n\n// Lazy load với loading fallback\nconst HeavyChart = dynamic(\n  () => import('../components/Chart'),\n  {\n    loading: () => <p>Đang tải biểu đồ...</p>,\n    ssr: false, // Chỉ render ở client\n  }\n);\n\nexport default function Dashboard() {\n  return <HeavyChart data={chartData} />;\n}",
            "codeTsx": "import dynamic from 'next/dynamic';\nimport type { ComponentType } from 'react';\n\ninterface ChartProps {\n  data: number[];\n}\n\nconst HeavyChart: ComponentType<ChartProps> = dynamic(\n  () => import('../components/Chart'),\n  {\n    loading: () => <p>Đang tải biểu đồ...</p>,\n    ssr: false,\n  }\n);\n\nexport default function Dashboard(): JSX.Element {\n  return <HeavyChart data={chartData} />\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Form hooks & Mẹo hay",
    "cards": [
      {
        "id": "next-use-form-status",
        "title": "useFormStatus",
        "description": "Hook React cung cấp trạng thái submit của form (pending). Phải gọi từ component CON của <form> (không phải trong cùng component chứa form). Dùng để disable nút submit hoặc hiển thị loading khi đang gửi.",
        "exampleText": "Tạo component SubmitButton riêng, đặt bên trong form. Button tự biết form đang submit hay không.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "'use client';\nimport { useFormStatus } from 'react-dom';\n\nfunction SubmitButton() {\n  const { pending } = useFormStatus();\n  return (\n    <button type=\"submit\" disabled={pending}>\n      {pending ? 'Đang gửi...' : 'Gửi'}\n    </button>\n  );\n}\n\n// Sử dụng\n<form action={serverAction}>\n  <input name=\"title\" />\n  <SubmitButton /> {/* ← phải là con của form */}\n</form>",
            "codeTsx": "'use client';\nimport { useFormStatus } from 'react-dom';\n\nfunction SubmitButton(): JSX.Element {\n  const { pending } = useFormStatus();\n  return (\n    <button type=\"submit\" disabled={pending}>\n      {pending ? 'Đang gửi...' : 'Gửi'}\n    </button>\n  );\n}\n\n// Sử dụng\n<form action={serverAction}>\n  <input name=\"title\" />\n  <SubmitButton />\n</form>"
          }
        ]
      },
      {
        "id": "next-use-action-state",
        "title": "useActionState (trước là useFormState)",
        "description": "Hook quản lý state của form dựa trên kết quả Server Action. Nhận server action + initial state, trả về [state, formAction]. state tự động cập nhật khi action hoàn thành. Hữu ích để hiển thị thông báo lỗi/thành công.",
        "exampleText": "Server Action trả về { error: 'Tên quá ngắn' } → useActionState cập nhật state → hiển thị lỗi.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "'use client';\nimport { useActionState } from 'react';\nimport { createTodo } from './action';\n\nexport default function TodoForm() {\n  const [state, formAction] = useActionState(createTodo, {\n    error: null,\n  });\n  return (\n    <form action={formAction}>\n      <input name=\"title\" />\n      {state.error && <p style={{color:'red'}}>{state.error}</p>}\n      <button>Thêm</button>\n    </form>\n  );\n}",
            "codeTsx": "'use client';\nimport { useActionState } from 'react';\nimport { createTodo } from './action';\n\ninterface FormState {\n  error: string | null;\n}\n\nexport default function TodoForm(): JSX.Element {\n  const [state, formAction] = useActionState<FormState, FormData>(createTodo, {\n    error: null,\n  });\n  return (\n    <form action={formAction}>\n      <input name=\"title\" />\n      {state.error && <p style={{color:'red'}}>{state.error}</p>}\n      <button>Thêm</button>\n    </form>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-use-optimistic",
        "title": "useOptimistic",
        "description": "Hook cập nhật UI 'lạc quan' trước khi server action hoàn thành. UI thay đổi ngay lập tức, nếu server lỗi thì tự rollback. Cải thiện trải nghiệm đáng kể (user không phải chờ).",
        "exampleText": "Thêm todo mới → hiển thị ngay trong danh sách (mờ/italic) → khi server xác nhận → hiển thị bình thường.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "'use client';\nimport { useOptimistic } from 'react';\n\nexport default function TodoList({ todos, addTodo }) {\n  const [optimisticTodos, addOptimistic] = useOptimistic(\n    todos,\n    (state, newTodo) => [...state, { ...newTodo, pending: true }]\n  );\n\n  return (\n    <form action={async (formData) => {\n      addOptimistic({ title: formData.get('title') });\n      await addTodo(formData);\n    }}>\n      {optimisticTodos.map(todo => (\n        <li key={todo.id} style={{opacity: todo.pending ? 0.5 : 1}}>\n          {todo.title}\n        </li>\n      ))}\n    </form>\n  );\n}",
            "codeTsx": "'use client';\nimport { useOptimistic } from 'react';\n\ninterface Todo {\n  id: number;\n  title: string;\n  pending?: boolean;\n}\n\ninterface TodoListProps {\n  todos: Todo[];\n  addTodo: (formData: FormData) => Promise<void>;\n}\n\nexport default function TodoList({ todos, addTodo }: TodoListProps): JSX.Element {\n  const [optimisticTodos, addOptimistic] = useOptimistic<Todo[], Partial<Todo>>(\n    todos,\n    (state, newTodo) => [...state, { ...newTodo, id: Date.now(), pending: true } as Todo]\n  );\n\n  return (\n    <form action={async (formData: FormData) => {\n      addOptimistic({ title: formData.get('title') as string });\n      await addTodo(formData);\n    }}>\n      {optimisticTodos.map((todo) => (\n        <li key={todo.id} style={{opacity: todo.pending ? 0.5 : 1}}>\n          {todo.title}\n        </li>\n      ))}\n    </form>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-tips-best-practices",
        "title": "Mẹo & Best Practices",
        "description": "Tổng hợp mẹo hay từ cộng đồng và trang chủ NextJS giúp code sạch, hiệu suất tốt.",
        "exampleText": "Áp dụng những mẹo này giúp app nhanh hơn, bundle nhỏ hơn, và dễ bảo trì.",
        "codeBlocks": [
          {
            "title": "⚡ Hiệu suất",
            "code": "// 1. Fetch trực tiếp trong Server Component\n// ❌ Gọi /api route từ Server Component\nconst data = await fetch('/api/posts'); // Thừa 1 bước!\n// ✅ Gọi DB/API trực tiếp\nconst posts = await db.post.findMany();\n\n// 2. Dùng next/dynamic cho thư viện nặng\nconst Chart = dynamic(() => import('./Chart'), { ssr: false });\n\n// 3. Dùng next/image + next/font luôn\n// → Auto optimize, lazy load, tránh layout shift"
          },
          {
            "title": "🏗️ Kiến trúc",
            "code": "// 1. 'use client' càng ít càng tốt\n// Đẩy 'use client' xuống component LÁ nhỏ nhất\n\n// 2. Cấu trúc thư mục theo feature\n// app/(client)/products/\n//   ┣ page.tsx\n//   ┣ components/ ← components riêng\n//   ┗ actions.ts  ← server actions riêng\n\n// 3. Đặt fetch gần component cần data\n// Tránh fetch ở layout rồi truyền props xuống\n\n// 4. Luôn có loading.tsx + error.tsx\n// cho mỗi route segment quan trọng"
          },
          {
            "title": "🚫 Sai lầm thường gặp",
            "code": "// ❌ Dùng useEffect để fetch data\nuseEffect(() => { fetch('/api/data')... }, [])\n// ✅ Fetch trực tiếp trong Server Component\nconst data = await getData();\n\n// ❌ 'use client' ở component cha\n// → Biến TẤT CẢ con thành Client Component\n\n// ❌ Quên default.tsx cho Parallel Routes\n// → Lỗi 404 khi hard refresh\n\n// ❌ Để secret ở NEXT_PUBLIC_\n// → Ai cũng thấy! Chỉ dùng cho public data"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "API Routes, Metadata & Middleware",
    "cards": [
      {
        "id": "next-api-route",
        "title": "Route Handlers (API Routes)",
        "description": "Route Handlers tạo API endpoints trong App Router. File route.ts trong thư mục app/api/. Export hàm GET, POST, PUT, DELETE, PATCH. Nhận Request object, trả về Response. Thay thế pages/api/ cũ.",
        "exampleText": "Route handlers chạy trên server. Có thể đọc cookies, headers, query params.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// app/api/users/route.ts\nimport { NextRequest, NextResponse } from 'next/server';\nimport { db } from '@/lib/db';\n\n// GET /api/users?page=1&limit=10\nexport async function GET(request: NextRequest) {\n  const { searchParams } = new URL(request.url);\n  const page = Number(searchParams.get('page')) || 1;\n  const limit = Number(searchParams.get('limit')) || 10;\n\n  const users = await db.user.findMany({\n    skip: (page - 1) * limit,\n    take: limit,\n  });\n\n  return NextResponse.json({ data: users, page, limit });\n}\n\n// POST /api/users\nexport async function POST(request: NextRequest) {\n  const body = await request.json();\n\n  const user = await db.user.create({ data: body });\n  return NextResponse.json(user, { status: 201 });\n}\n\n// app/api/users/[id]/route.ts\n// GET /api/users/123\nexport async function GET(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  const user = await db.user.findUnique({\n    where: { id: params.id },\n  });\n\n  if (!user) {\n    return NextResponse.json(\n      { error: 'User not found' },\n      { status: 404 }\n    );\n  }\n  return NextResponse.json(user);\n}\n\n// DELETE /api/users/123\nexport async function DELETE(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  await db.user.delete({ where: { id: params.id } });\n  return new NextResponse(null, { status: 204 });\n}"
          }
        ]
      },
      {
        "id": "next-metadata",
        "title": "Metadata API (SEO)",
        "description": "Metadata API quản lý SEO cho từng page. 2 cách: static metadata (export const metadata) hoặc dynamic (export generateMetadata function). Tự động merge metadata từ layout → page. Hỗ trợ title, description, og, twitter.",
        "exampleText": "metadata trong layout là mặc định. Page metadata override layout metadata.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// app/layout.tsx - Default metadata\nimport type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: {\n    default: 'My App',\n    template: '%s | My App', // \"About | My App\"\n  },\n  description: 'A modern web application',\n  metadataBase: new URL('https://myapp.com'),\n  openGraph: {\n    type: 'website',\n    locale: 'vi_VN',\n    siteName: 'My App',\n    images: ['/og-image.jpg'],\n  },\n  twitter: {\n    card: 'summary_large_image',\n    creator: '@myapp',\n  },\n  robots: {\n    index: true,\n    follow: true,\n  },\n};\n\n// app/products/[id]/page.tsx - Dynamic metadata\nexport async function generateMetadata(\n  { params }: { params: { id: string } }\n): Promise<Metadata> {\n  const product = await getProduct(params.id);\n\n  return {\n    title: product.name,                    // \"iPhone | My App\"\n    description: product.description,\n    openGraph: {\n      title: product.name,\n      description: product.description,\n      images: [product.image],\n    },\n  };\n}\n\n// app/blog/page.tsx - Static metadata\nexport const metadata: Metadata = {\n  title: 'Blog',\n  description: 'Bài viết mới nhất',\n};"
          }
        ]
      },
      {
        "id": "next-middleware-detail",
        "title": "Middleware chi tiết",
        "description": "Middleware chạy TRƯỚC mỗi request. File middleware.ts ở root. Dùng cho: auth check, redirect, rewrite, set headers/cookies, i18n, A/B testing. Config matcher chỉ định routes cần middleware.",
        "exampleText": "Middleware chạy ở Edge Runtime. Không dùng Node.js APIs (fs, path...). Chỉ 1 file middleware.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// middleware.ts (root project)\nimport { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  const { pathname } = request.nextUrl;\n  const token = request.cookies.get('token')?.value;\n\n  // 1. Auth check - redirect nếu chưa login\n  const protectedPaths = ['/dashboard', '/profile', '/settings'];\n  if (protectedPaths.some(p => pathname.startsWith(p))) {\n    if (!token) {\n      const loginUrl = new URL('/login', request.url);\n      loginUrl.searchParams.set('from', pathname);\n      return NextResponse.redirect(loginUrl);\n    }\n  }\n\n  // 2. Đã login thì không vào /login nữa\n  if (pathname === '/login' && token) {\n    return NextResponse.redirect(new URL('/dashboard', request.url));\n  }\n\n  // 3. Rewrite (URL giữ nguyên, content khác)\n  if (pathname === '/old-page') {\n    return NextResponse.rewrite(new URL('/new-page', request.url));\n  }\n\n  // 4. Set headers\n  const response = NextResponse.next();\n  response.headers.set('x-request-id', crypto.randomUUID());\n  return response;\n}\n\n// Config: chỉ chạy middleware cho paths này\nexport const config = {\n  matcher: [\n    '/dashboard/:path*',\n    '/profile/:path*',\n    '/settings/:path*',\n    '/login',\n    '/old-page',\n  ],\n};"
          }
        ]
      }
    ]
  },
  {
    "label": "notes-next",
    "title": "Ghi Chú Từ Khóa Học",
    "cards": [
      {
        "id": "frontend-f8---offline-hocnextjs-next01-note-md",
        "title": "📝 NextJS Flow & Middleware",
        "description": "flow NextJS. Request -> RootLayout -> Custom Layout -> Page -> Render JSX -> Response (HTML). Layout: Tạo ra 1 bố cục cho trang web, đại diện cho nhiều router khác nhau",
        "exampleText": "# flow NextJS\r\n\r\nRequest -> RootLayout -> Custom Layout -> Page -> Render JSX -> Response (HTML)\r\n\r\nLayout: Tạo ra 1 bố cục cho trang web, đại diện cho nhiều router khác nhau\r\nPage: Nội dung chính của trang, chỉ duy nhất 1 router\r\n\r\n# Middleware\r\n\r\nRequest -> Middleware -> RootLayout -> Custom Layout -> Page -> Render JSX -> Response (HTML)\r\n",
        "codeBlocks": []
      },
      {
        "id": "frontend-f8---offline-hocnextjs-next03-note-md",
        "title": "📝 Router Handler",
        "description": "Router Handler. Request --> Layout --> Page --> Call API (Server khác). Custom API --> Router Handler",
        "exampleText": "# Router Handler\r\n\r\nRequest --> Layout --> Page --> Call API (Server khác)\r\n\r\nCustom API --> Router Handler\r\nHost API --> Router Handler\r\n\r\nEndpoint: GET /api/users\r\n",
        "codeBlocks": []
      },
      {
        "id": "fullstack-nodejs-08-hocnextjs-nextjs01-note-md",
        "title": "📝 NextJS Router",
        "description": "Luồng chạy. Request => Middleware ==> Root Layout ==> Custom Layout (Nếu có) ==> Page ==> Response. Cơ chế Router",
        "exampleText": "# Luồng chạy\r\n\r\nRequest => Middleware ==> Root Layout ==> Custom Layout (Nếu có) ==> Page ==> Response\r\n\r\n# Cơ chế Router\r\n\r\napp/ten-folder-1/page.jsx ==> Đường dẫn: /ten-folder-1\r\n\r\nXây dựng đường dẫn sau\r\n\r\n/posts\r\n/posts/id\r\n\r\nChỉ được dùng 1 file page.jsx\r\n",
        "codeBlocks": []
      }
    ]
  }
];
