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
        "description": "Dynamic routes cho phép tạo các URL động dựa trên thư mục có tên được bao bọc bởi ngoặc vuông (ví dụ: [id]). Tham số sẽ được truyền vào component qua thuộc tính params.",
        "exampleText": "Tạo trang chi tiết bài viết với URL dạng /posts/:id.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "const PostDetail = async ({ params }) => {\n  const { id } = params;\n  const post = await getPost(id);\n  return <h1>{post.title}</h1>;\n};\nexport default PostDetail;",
            "codeTsx": "interface PageProps {\n  params: { id: string };\n}\n\ninterface Post {\n  title: string;\n}\n\nconst PostDetail = async ({ params }: PageProps): Promise<JSX.Element> => {\n  const { id } = params;\n  const post: Post = await getPost(id);\n  return <h1>{post.title}</h1>;\n};\nexport default PostDetail;"
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
        "description": "Middleware cho phép chạy code trước khi request hoàn tất (thường dùng để kiểm tra đăng nhập, phân quyền). Trả về NextResponse.redirect hoặc rewrite.",
        "exampleText": "Tạo file middleware.js ở thư mục gốc (cùng cấp với cấu hình) và định nghĩa config.matcher để lọc các URL cần áp dụng.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "import { NextResponse } from 'next/server';\n\nexport const middleware = (request) => {\n  if (!isLogin) return NextResponse.redirect(new URL('/auth', request.url));\n};\nexport const config = { matcher: ['/products/:path*'] };",
            "codeTsx": "import { NextResponse, NextRequest } from 'next/server';\n\nexport const middleware = (request: NextRequest): NextResponse | void => {\n  if (!isLogin) return NextResponse.redirect(new URL('/auth', request.url));\n};\n\nexport const config = { matcher: ['/products/:path*'] };"
          }
        ]
      },
      {
        "id": "f8-next-catch-all-routes",
        "title": "Catch-all & Optional Catch-all Segments",
        "description": "Dynamic route bắt mọi segment con: [...slug] bắt /a/b/c (nhưng không bắt /). Optional catch-all [[...slug]] bắt /a/b/c và cả /.",
        "exampleText": "Thường dùng để xây dựng doc pages, blogs với path lồng nhau sâu.",
        "codeBlocks": [
          {
            "title": "Ví dụ [[...id]]",
            "code": "const PostsPage = ({ params }) => {\n  const ids = params.id; // Array ['chuyen-muc', 'bai-viet']\n  if (!ids) return <h1>Danh sách bài viết</h1>;\n  return <h2>{ids[0]} - {ids[1]}</h2>;\n};"
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
        "description": "Route Handlers cho phép tạo API RESTful ngay trong Next.js thông qua file route.js. Hỗ trợ các HTTP method (GET, POST, PUT, DELETE).",
        "exampleText": "Nhận params, headers hoặc body json từ request và trả về dữ liệu dùng Response.json().",
        "codeBlocks": [
          {
            "title": "GET",
            "code": "export function GET(request) {\n  const apiKey = request.headers.get('x-api-key');\n  return Response.json({ message: 'Success' });\n}",
            "codeTsx": "import { NextRequest } from 'next/server';\n\nexport function GET(request: NextRequest): Response {\n  const apiKey = request.headers.get('x-api-key');\n  return Response.json({ message: 'Success' });\n}"
          },
          {
            "title": "POST",
            "code": "export async function POST(request) {\n  const body = await request.json();\n  return Response.json({ body }, { status: 201 });\n}",
            "codeTsx": "import { NextRequest } from 'next/server';\n\nexport async function POST(request: NextRequest): Promise<Response> {\n  const body = await request.json() as { title: string };\n  return Response.json({ body }, { status: 201 });\n}"
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
        "description": "Server Actions (có 'use server') là các hàm chạy hoàn toàn trên server, thường được gọi từ form action hoặc event handler. Hỗ trợ thao tác với database hoặc API trực tiếp mà không cần viết Route API.",
        "exampleText": "Có thể kết hợp với revalidatePath hoặc revalidateTag để xóa cache, rồi dùng redirect để chuyển trang.",
        "codeBlocks": [
          {
            "title": "action.js",
            "code": "'use server';\nimport { revalidateTag } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\nexport const handleSubmit = async (formData) => {\n  const title = formData.get('title');\n  // Gọi API nội bộ\n  revalidateTag('todo-list');\n  redirect('/');\n};",
            "codeTsx": "'use server';\nimport { revalidateTag } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\nexport const handleSubmit = async (formData: FormData): Promise<void> => {\n  const title = formData.get('title') as string;\n  // Gọi API nội bộ\n  revalidateTag('todo-list');\n  redirect('/');\n};"
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
        "description": "Tạo file not-found.js trong thư mục app để tùy chỉnh trang 404. Dùng useRouter() từ next/navigation để điều hướng programmatically (router.push, router.refresh).",
        "exampleText": "Từ next01/not-found.js: Trang 404 tùy chỉnh với hình ảnh và nút quay về trang chủ.",
        "codeBlocks": [
          {
            "title": "not-found.js",
            "code": "'use client';\nimport { useRouter } from 'next/navigation';\n\nconst NotFound = () => {\n  const router = useRouter();\n  return (\n    <div>\n      <h1>PAGE NOT FOUND</h1>\n      <button onClick={() => router.push('/')}>\n        Về trang chủ\n      </button>\n    </div>\n  );\n};",
            "codeTsx": "'use client';\nimport { useRouter } from 'next/navigation';\nimport type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';\n\nconst NotFound = (): JSX.Element => {\n  const router: AppRouterInstance = useRouter();\n  return (\n    <div>\n      <h1>PAGE NOT FOUND</h1>\n      <button onClick={() => router.push('/')}>\n        Về trang chủ\n      </button>\n    </div>\n  );\n};"
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
        "description": "Đặt file loading.tsx trong bất kỳ thư mục route nào để tự động tạo Suspense boundary. Next.js sẽ hiển thị UI này trong khi Server Component đang fetch dữ liệu. Mỗi segment route có thể có loading riêng.",
        "exampleText": "Khi user chuyển trang, loading UI hiển thị ngay lập tức trong khi nội dung đang được server render (streaming).",
        "codeBlocks": [
          {
            "title": "loading.tsx",
            "code": "// app/posts/loading.tsx\nexport default function Loading() {\n  return (\n    <div className=\"loading-skeleton\">\n      <div className=\"skeleton-title\" />\n      <div className=\"skeleton-content\" />\n    </div>\n  );\n}",
            "codeTsx": "// app/posts/loading.tsx\nexport default function Loading(): JSX.Element {\n  return (\n    <div className=\"loading-skeleton\">\n      <div className=\"skeleton-title\" />\n      <div className=\"skeleton-content\" />\n    </div>\n  );\n}"
          },
          {
            "title": "Suspense thủ công",
            "code": "import { Suspense } from 'react';\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Bài viết</h1>\n      <Suspense fallback={<p>Đang tải...</p>}>\n        <PostList /> {/* Server Component async */}\n      </Suspense>\n    </>\n  );\n}",
            "codeTsx": "import { Suspense } from 'react';\n\nexport default function Page(): JSX.Element {\n  return (\n    <>\n      <h1>Bài viết</h1>\n      <Suspense fallback={<p>Đang tải...</p>}>\n        <PostList /> {/* Server Component async */}\n      </Suspense>\n    </>\n  );\n}"
          }
        ]
      },
      {
        "id": "next-error-ui",
        "title": "error.tsx (Error Boundary)",
        "description": "File error.tsx định nghĩa error boundary cho route segment. Phải là Client Component ('use client'). Nhận props error (Error object) và reset (function gọi để thử lại). Lỗi ở segment con sẽ được bắt bởi error.tsx của segment cha gần nhất.",
        "exampleText": "Khi fetch data thất bại, error.tsx hiển thị thông báo lỗi + nút 'Thử lại' mà không crash toàn bộ app.",
        "codeBlocks": [
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
        "description": "Biến môi trường trong .env chỉ có sẵn trên server. Để dùng ở client (trình duyệt), phải thêm prefix NEXT_PUBLIC_. Biến NEXT_PUBLIC_ được inline vào JS bundle lúc build → không để secret ở đây.",
        "exampleText": "SERVER_API chỉ dùng trong Server Component/Route Handler. NEXT_PUBLIC_SERVER_API dùng được ở cả Client Component.",
        "codeBlocks": [
          {
            "title": ".env",
            "code": "# Chỉ server (an toàn)\nSERVER_API=http://localhost:3001\nDATABASE_URL=postgresql://...\n\n# Client + Server (công khai)\nNEXT_PUBLIC_SERVER_API=http://localhost:3001\nNEXT_PUBLIC_APP_NAME=MyApp"
          },
          {
            "title": "Sử dụng",
            "code": "// Server Component / Route Handler\nprocess.env.SERVER_API // ✅\nprocess.env.DATABASE_URL // ✅\n\n// Client Component\nprocess.env.NEXT_PUBLIC_SERVER_API // ✅\nprocess.env.SERVER_API // ❌ undefined"
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
  }
];
