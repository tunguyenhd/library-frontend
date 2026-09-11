import type { KnowledgeGroup } from "../types/knowledge";

export const tailwindGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "Tailwind CSS cơ bản",
    "cards": [
      {
        "id": "tw-intro",
        "title": "Tailwind CSS là gì",
        "description": "Tailwind CSS là utility-first CSS framework. Thay vì viết CSS custom, dùng class nhỏ trực tiếp trong HTML (vd: flex, pt-4, text-center). Build time loại bỏ CSS không dùng → file nhỏ. Phổ biến nhất hiện tại.",
        "exampleText": "Cài: npm install -D tailwindcss. Init: npx tailwindcss init.",
        "codeBlocks": [
          {
            "title": "So sánh",
            "code": "<!-- CSS truyền thống -->\n<div class=\"card\">\n  <h2 class=\"card-title\">Hello</h2>\n</div>\n<style>\n.card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n.card-title { font-size: 20px; font-weight: 700; color: #333; }\n</style>\n\n<!-- Tailwind CSS -->\n<div class=\"bg-white p-6 rounded-xl shadow-md\">\n  <h2 class=\"text-xl font-bold text-gray-800\">Hello</h2>\n</div>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- CSS truyền thống -->\n<div class=\"card\">\n  <h2 class=\"card-title\">Hello</h2>\n</div>\n<style>\n.card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n.card-title { font-size: 20px; font-weight: 700; color: #333; }\n</style>\n\n<!-- Tailwind CSS -->\n<div class=\"bg-white p-6 rounded-xl shadow-md\">\n  <h2 class=\"text-xl font-bold text-gray-800\">Hello</h2>\n</div>\n</div>"
          },
          {
            "title": "Cài đặt (Vite)",
            "code": "npm install -D tailwindcss @tailwindcss/vite\n\n// vite.config.ts\nimport tailwindcss from '@tailwindcss/vite'\nexport default defineConfig({\n  plugins: [tailwindcss()],\n})\n\n// src/index.css\n@import 'tailwindcss';\n\n// Tailwind v3 (cũ hơn)\nnpx tailwindcss init\n// tailwind.config.js → content: ['./src/**/*.{html,jsx,tsx}']\n// CSS: @tailwind base; @tailwind components; @tailwind utilities;"
          }
        ]
      },
      {
        "id": "tw-spacing",
        "title": "Spacing & Sizing",
        "description": "Spacing dùng scale: 1 unit = 4px. p-4 = padding 16px. m-2 = margin 8px. Hướng: t(top), b(bottom), l(left), r(right), x(horizontal), y(vertical). w-full = width 100%.",
        "exampleText": "p-1=4px, p-2=8px, p-3=12px, p-4=16px, p-5=20px, p-6=24px, p-8=32px.",
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Padding -->\np-4      → padding: 16px (all)\npx-4     → padding-left/right: 16px\npy-2     → padding-top/bottom: 8px\npt-4     → padding-top: 16px\n\n<!-- Margin -->\nm-4      → margin: 16px\nmx-auto  → margin-left/right: auto (center)\n-mt-4    → margin-top: -16px (negative)\n\n<!-- Width -->\nw-full   → width: 100%\nw-1/2    → width: 50%\nw-1/3    → width: 33.33%\nw-screen → width: 100vw\nw-64     → width: 256px\nw-[350px] → width: 350px (arbitrary)\nmax-w-md → max-width: 448px\nmin-w-0  → min-width: 0\n\n<!-- Height -->\nh-screen → height: 100vh\nh-full   → height: 100%\nh-auto   → height: auto\nmin-h-screen → min-height: 100vh\n\n<!-- Gap -->\ngap-4    → gap: 16px",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <!-- Padding -->\np-4      → padding: 16px (all)\npx-4     → padding-left/right: 16px\npy-2     → padding-top/bottom: 8px\npt-4     → padding-top: 16px\n\n<!-- Margin -->\nm-4      → margin: 16px\nmx-auto  → margin-left/right: auto (center)\n-mt-4    → margin-top: -16px (negative)\n\n<!-- Width -->\nw-full   → width: 100%\nw-1/2    → width: 50%\nw-1/3    → width: 33.33%\nw-screen → width: 100vw\nw-64     → width: 256px\nw-[350px] → width: 350px (arbitrary)\nmax-w-md → max-width: 448px\nmin-w-0  → min-width: 0\n\n<!-- Height -->\nh-screen → height: 100vh\nh-full   → height: 100%\nh-auto   → height: auto\nmin-h-screen → min-height: 100vh\n\n<!-- Gap -->\ngap-4    → gap: 16px\n</div>"
          }
        ]
      },
      {
        "id": "tw-colors",
        "title": "Colors & Opacity",
        "description": "Tailwind có palette sẵn: gray, red, blue, green, yellow, purple, pink... Mỗi màu có shade 50-950. Áp dụng cho bg-, text-, border-, ring-...",
        "exampleText": "Shade: 50(nhạt nhất) → 500(trung bình) → 950(đậm nhất).",
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Background -->\nbg-white       → #ffffff\nbg-black       → #000000\nbg-gray-100    → #f3f4f6\nbg-blue-500    → #3b82f6\nbg-red-600     → #dc2626\nbg-gradient-to-r from-blue-500 to-purple-500\n\n<!-- Text -->\ntext-gray-800  → color: #1f2937\ntext-blue-600  → color: #2563eb\ntext-white\n\n<!-- Border -->\nborder-gray-200\nborder-red-500\n\n<!-- Opacity -->\nbg-black/50    → rgba(0,0,0,0.5)\ntext-white/80  → rgba(255,255,255,0.8)\n\n<!-- Arbitrary -->\nbg-[#1a1a2e]  → Màu custom\ntext-[#e94560]",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <!-- Background -->\nbg-white       → #ffffff\nbg-black       → #000000\nbg-gray-100    → #f3f4f6\nbg-blue-500    → #3b82f6\nbg-red-600     → #dc2626\nbg-gradient-to-r from-blue-500 to-purple-500\n\n<!-- Text -->\ntext-gray-800  → color: #1f2937\ntext-blue-600  → color: #2563eb\ntext-white\n\n<!-- Border -->\nborder-gray-200\nborder-red-500\n\n<!-- Opacity -->\nbg-black/50    → rgba(0,0,0,0.5)\ntext-white/80  → rgba(255,255,255,0.8)\n\n<!-- Arbitrary -->\nbg-[#1a1a2e]  → Màu custom\ntext-[#e94560]\n</div>"
          }
        ]
      },
      {
        "id": "tw-typography",
        "title": "Typography",
        "description": "Font size: text-xs đến text-9xl. Font weight: font-thin đến font-black. Text alignment, decoration, transform, line-height, letter-spacing...",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Font size -->\ntext-xs    → 12px\ntext-sm    → 14px\ntext-base  → 16px\ntext-lg    → 18px\ntext-xl    → 20px\ntext-2xl   → 24px\ntext-3xl   → 30px\ntext-4xl   → 36px\n\n<!-- Font weight -->\nfont-light    → 300\nfont-normal   → 400\nfont-medium   → 500\nfont-semibold → 600\nfont-bold     → 700\n\n<!-- Alignment & others -->\ntext-left / text-center / text-right\nunderline / line-through / no-underline\nuppercase / lowercase / capitalize\nleading-tight → line-height: 1.25\ntracking-wide → letter-spacing: 0.025em\ntruncate → overflow hidden + text-overflow ellipsis\nline-clamp-3 → Giới hạn 3 dòng",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <!-- Font size -->\ntext-xs    → 12px\ntext-sm    → 14px\ntext-base  → 16px\ntext-lg    → 18px\ntext-xl    → 20px\ntext-2xl   → 24px\ntext-3xl   → 30px\ntext-4xl   → 36px\n\n<!-- Font weight -->\nfont-light    → 300\nfont-normal   → 400\nfont-medium   → 500\nfont-semibold → 600\nfont-bold     → 700\n\n<!-- Alignment & others -->\ntext-left / text-center / text-right\nunderline / line-through / no-underline\nuppercase / lowercase / capitalize\nleading-tight → line-height: 1.25\ntracking-wide → letter-spacing: 0.025em\ntruncate → overflow hidden + text-overflow ellipsis\nline-clamp-3 → Giới hạn 3 dòng\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Layout & Flexbox/Grid",
    "cards": [
      {
        "id": "tw-display-position",
        "title": "Display & Position",
        "description": "Display: block, inline-block, flex, grid, hidden, inline-flex. Position: static, relative, absolute, fixed, sticky. Dùng top/right/bottom/left + inset để căn chỉnh.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Display -->\nblock / inline-block / inline / flex / grid / hidden\n\n<!-- Position -->\nrelative / absolute / fixed / sticky\ntop-0 / right-0 / bottom-0 / left-0\ninset-0    → top/right/bottom/left: 0\ninset-x-0  → left/right: 0\n\n<!-- Z-index -->\nz-0 / z-10 / z-20 / z-30 / z-40 / z-50\n\n<!-- Ví dụ: Modal overlay -->\n<div class=\"fixed inset-0 z-50 flex items-center justify-center bg-black/50\">\n  <div class=\"bg-white rounded-xl p-6 w-full max-w-md\">\n    Modal content\n  </div>\n</div>\n\n<!-- Ví dụ: Sticky header -->\n<header class=\"sticky top-0 z-40 bg-white shadow-sm\">\n  Navbar\n</header>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Display -->\nblock / inline-block / inline / flex / grid / hidden\n\n<!-- Position -->\nrelative / absolute / fixed / sticky\ntop-0 / right-0 / bottom-0 / left-0\ninset-0    → top/right/bottom/left: 0\ninset-x-0  → left/right: 0\n\n<!-- Z-index -->\nz-0 / z-10 / z-20 / z-30 / z-40 / z-50\n\n<!-- Ví dụ: Modal overlay -->\n<div class=\"fixed inset-0 z-50 flex items-center justify-center bg-black/50\">\n  <div class=\"bg-white rounded-xl p-6 w-full max-w-md\">\n    Modal content\n  </div>\n</div>\n\n<!-- Ví dụ: Sticky header -->\n<header class=\"sticky top-0 z-40 bg-white shadow-sm\">\n  Navbar\n</header>\n</div>"
          }
        ]
      },
      {
        "id": "tw-flexbox",
        "title": "Flexbox",
        "description": "flex bật flexbox. flex-row/col đổi hướng. justify-* căn ngang. items-* căn dọc. gap-* khoảng cách. flex-1 chiếm hết. flex-wrap xuống dòng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Flex container -->\nflex               → display: flex\nflex-row            → hướng ngang (mặc định)\nflex-col            → hướng dọc\nflex-wrap           → xuống dòng\nflex-nowrap         → không xuống dòng\n\n<!-- Justify (main axis) -->\njustify-start / justify-center / justify-end\njustify-between / justify-around / justify-evenly\n\n<!-- Items (cross axis) -->\nitems-start / items-center / items-end / items-stretch\n\n<!-- Flex children -->\nflex-1              → flex: 1 1 0% (chiếm hết)\nflex-auto           → flex: 1 1 auto\nflex-none           → flex: none (không co giãn)\ngrow / grow-0       → flex-grow\nshrink / shrink-0   → flex-shrink\n\n<!-- Ví dụ: Navbar -->\n<nav class=\"flex items-center justify-between px-6 py-4\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  <div class=\"flex gap-4\">\n    <a>Home</a>\n    <a>About</a>\n  </div>\n</nav>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Flex container -->\nflex               → display: flex\nflex-row            → hướng ngang (mặc định)\nflex-col            → hướng dọc\nflex-wrap           → xuống dòng\nflex-nowrap         → không xuống dòng\n\n<!-- Justify (main axis) -->\njustify-start / justify-center / justify-end\njustify-between / justify-around / justify-evenly\n\n<!-- Items (cross axis) -->\nitems-start / items-center / items-end / items-stretch\n\n<!-- Flex children -->\nflex-1              → flex: 1 1 0% (chiếm hết)\nflex-auto           → flex: 1 1 auto\nflex-none           → flex: none (không co giãn)\ngrow / grow-0       → flex-grow\nshrink / shrink-0   → flex-shrink\n\n<!-- Ví dụ: Navbar -->\n<nav class=\"flex items-center justify-between px-6 py-4\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  <div class=\"flex gap-4\">\n    <a>Home</a>\n    <a>About</a>\n  </div>\n</nav>\n</div>"
          }
        ]
      },
      {
        "id": "tw-grid",
        "title": "Grid",
        "description": "grid bật CSS Grid. grid-cols-* số cột. col-span-* trải rộng. gap-* khoảng cách. Template columns/rows linh hoạt.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Grid container -->\ngrid                → display: grid\ngrid-cols-1         → 1 cột\ngrid-cols-2         → 2 cột\ngrid-cols-3         → 3 cột\ngrid-cols-12        → 12 cột\ngrid-cols-[200px_1fr] → custom\ngrid-rows-3         → 3 hàng\n\n<!-- Gap -->\ngap-4               → gap: 16px\ngap-x-4 gap-y-2     → gap riêng x/y\n\n<!-- Span -->\ncol-span-2          → chiếm 2 cột\ncol-span-full       → chiếm hết\nrow-span-2          → chiếm 2 hàng\n\n<!-- Ví dụ: Responsive grid -->\n<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\">\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 1</div>\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 2</div>\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 3</div>\n</div>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Grid container -->\ngrid                → display: grid\ngrid-cols-1         → 1 cột\ngrid-cols-2         → 2 cột\ngrid-cols-3         → 3 cột\ngrid-cols-12        → 12 cột\ngrid-cols-[200px_1fr] → custom\ngrid-rows-3         → 3 hàng\n\n<!-- Gap -->\ngap-4               → gap: 16px\ngap-x-4 gap-y-2     → gap riêng x/y\n\n<!-- Span -->\ncol-span-2          → chiếm 2 cột\ncol-span-full       → chiếm hết\nrow-span-2          → chiếm 2 hàng\n\n<!-- Ví dụ: Responsive grid -->\n<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\">\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 1</div>\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 2</div>\n  <div class=\"bg-white p-4 rounded-lg shadow\">Card 3</div>\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "tw-container",
        "title": "Container & Max-Width",
        "description": "container class tự responsive max-width. mx-auto center. max-w-* giới hạn chiều rộng. Thường dùng cho page wrapper.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Container -->\ncontainer       → max-width responsive\nmx-auto         → center ngang\n\n<!-- Max-width -->\nmax-w-xs   → 320px\nmax-w-sm   → 384px\nmax-w-md   → 448px\nmax-w-lg   → 512px\nmax-w-xl   → 576px\nmax-w-2xl  → 672px\nmax-w-4xl  → 896px\nmax-w-6xl  → 1152px\nmax-w-7xl  → 1280px\nmax-w-full → 100%\nmax-w-screen-xl → 1280px\n\n<!-- Layout phổ biến -->\n<main class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n  <!-- Content -->\n</main>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n  <!-- Container -->\ncontainer       → max-width responsive\nmx-auto         → center ngang\n\n<!-- Max-width -->\nmax-w-xs   → 320px\nmax-w-sm   → 384px\nmax-w-md   → 448px\nmax-w-lg   → 512px\nmax-w-xl   → 576px\nmax-w-2xl  → 672px\nmax-w-4xl  → 896px\nmax-w-6xl  → 1152px\nmax-w-7xl  → 1280px\nmax-w-full → 100%\nmax-w-screen-xl → 1280px\n\n<!-- Layout phổ biến -->\n<main class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n  <!-- Content -->\n</main>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Responsive, States & Effects",
    "cards": [
      {
        "id": "tw-responsive",
        "title": "Responsive Design",
        "description": "Tailwind dùng mobile-first. Prefix: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px). Không có prefix = mặc định (mobile). Prefix áp dụng từ breakpoint đó trở lên.",
        "exampleText": "Mobile-first: viết cho mobile trước, thêm sm:/md:/lg: cho màn hình lớn hơn.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "<!-- Mobile: 1 cột, Tablet: 2 cột, Desktop: 3 cột -->\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n  ...\n</div>\n\n<!-- Ẩn/hiện theo breakpoint -->\n<div class=\"hidden md:block\">Chỉ thấy từ tablet</div>\n<div class=\"block md:hidden\">Chỉ thấy trên mobile</div>\n\n<!-- Font size responsive -->\n<h1 class=\"text-2xl md:text-4xl lg:text-6xl\">Title</h1>\n\n<!-- Padding responsive -->\n<section class=\"px-4 md:px-8 lg:px-16\">\n\n<!-- Flex direction -->\n<div class=\"flex flex-col md:flex-row gap-4\">\n  <aside class=\"w-full md:w-64\">Sidebar</aside>\n  <main class=\"flex-1\">Content</main>\n</div>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Mobile: 1 cột, Tablet: 2 cột, Desktop: 3 cột -->\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n  ...\n</div>\n\n<!-- Ẩn/hiện theo breakpoint -->\n<div class=\"hidden md:block\">Chỉ thấy từ tablet</div>\n<div class=\"block md:hidden\">Chỉ thấy trên mobile</div>\n\n<!-- Font size responsive -->\n<h1 class=\"text-2xl md:text-4xl lg:text-6xl\">Title</h1>\n\n<!-- Padding responsive -->\n<section class=\"px-4 md:px-8 lg:px-16\">\n\n<!-- Flex direction -->\n<div class=\"flex flex-col md:flex-row gap-4\">\n  <aside class=\"w-full md:w-64\">Sidebar</aside>\n  <main class=\"flex-1\">Content</main>\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "tw-states",
        "title": "Hover, Focus & States",
        "description": "Prefix hover:, focus:, active:, disabled:, group-hover:, peer:... Dark mode: dark:. First/last child: first:, last:. Odd/even: odd:, even:.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Hover -->\nhover:bg-blue-600\nhover:text-white\nhover:scale-105\nhover:shadow-lg\n\n<!-- Focus -->\nfocus:outline-none\nfocus:ring-2\nfocus:ring-blue-500\nfocus:border-blue-500\n\n<!-- Active & Disabled -->\nactive:scale-95\ndisabled:opacity-50\ndisabled:cursor-not-allowed\n\n<!-- Group hover (hover parent → thay đổi child) -->\n<div class=\"group hover:bg-gray-100 p-4 cursor-pointer\">\n  <h3 class=\"group-hover:text-blue-600\">Title</h3>\n  <p class=\"group-hover:text-gray-700\">Text</p>\n</div>\n\n<!-- Dark mode -->\n<div class=\"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100\">\n\n<!-- First/Last/Odd/Even -->\n<li class=\"first:pt-0 last:pb-0\">\n<tr class=\"odd:bg-gray-50 even:bg-white\">",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Hover -->\nhover:bg-blue-600\nhover:text-white\nhover:scale-105\nhover:shadow-lg\n\n<!-- Focus -->\nfocus:outline-none\nfocus:ring-2\nfocus:ring-blue-500\nfocus:border-blue-500\n\n<!-- Active & Disabled -->\nactive:scale-95\ndisabled:opacity-50\ndisabled:cursor-not-allowed\n\n<!-- Group hover (hover parent → thay đổi child) -->\n<div class=\"group hover:bg-gray-100 p-4 cursor-pointer\">\n  <h3 class=\"group-hover:text-blue-600\">Title</h3>\n  <p class=\"group-hover:text-gray-700\">Text</p>\n</div>\n\n<!-- Dark mode -->\n<div class=\"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100\">\n\n<!-- First/Last/Odd/Even -->\n<li class=\"first:pt-0 last:pb-0\">\n<tr class=\"odd:bg-gray-50 even:bg-white\">\n</div>"
          }
        ]
      },
      {
        "id": "tw-effects",
        "title": "Borders, Shadows & Effects",
        "description": "Border: border, border-2, rounded-*. Shadow: shadow-sm đến shadow-2xl. Opacity, blur, backdrop-blur. Ring cho focus states.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Border -->\nborder           → 1px\nborder-2         → 2px\nborder-t-2       → border-top: 2px\nborder-gray-200  → border-color\nborder-dashed / border-dotted\n\n<!-- Border Radius -->\nrounded-sm   → 2px\nrounded      → 4px\nrounded-md   → 6px\nrounded-lg   → 8px\nrounded-xl   → 12px\nrounded-2xl  → 16px\nrounded-full → 9999px (circle)\n\n<!-- Shadow -->\nshadow-sm / shadow / shadow-md / shadow-lg / shadow-xl / shadow-2xl\nshadow-none / shadow-inner\n\n<!-- Opacity -->\nopacity-0 / opacity-50 / opacity-100\n\n<!-- Ring (focus outline thay thế) -->\nring-2 ring-blue-500  → Outline 2px blue\nring-offset-2         → Offset\n\n<!-- Backdrop blur (glassmorphism) -->\n<div class=\"backdrop-blur-md bg-white/30 rounded-xl p-6\">",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Border -->\nborder           → 1px\nborder-2         → 2px\nborder-t-2       → border-top: 2px\nborder-gray-200  → border-color\nborder-dashed / border-dotted\n\n<!-- Border Radius -->\nrounded-sm   → 2px\nrounded      → 4px\nrounded-md   → 6px\nrounded-lg   → 8px\nrounded-xl   → 12px\nrounded-2xl  → 16px\nrounded-full → 9999px (circle)\n\n<!-- Shadow -->\nshadow-sm / shadow / shadow-md / shadow-lg / shadow-xl / shadow-2xl\nshadow-none / shadow-inner\n\n<!-- Opacity -->\nopacity-0 / opacity-50 / opacity-100\n\n<!-- Ring (focus outline thay thế) -->\nring-2 ring-blue-500  → Outline 2px blue\nring-offset-2         → Offset\n\n<!-- Backdrop blur (glassmorphism) -->\n<div class=\"backdrop-blur-md bg-white/30 rounded-xl p-6\">\n</div>"
          }
        ]
      },
      {
        "id": "tw-transition-animation",
        "title": "Transitions & Animations",
        "description": "transition-* cho smooth changes. duration-*, ease-*. animate-* cho keyframe animations. transform: scale, rotate, translate.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Cheat Sheet",
            "code": "<!-- Transition -->\ntransition-all duration-300 ease-in-out\ntransition-colors duration-200\ntransition-transform duration-150\n\n<!-- Transform -->\nscale-95 / scale-100 / scale-105 / scale-110\nrotate-45 / rotate-90 / rotate-180\ntranslate-x-4 / translate-y-2 / -translate-y-1\n\n<!-- Built-in Animations -->\nanimate-spin     → Quay liên tục (loading)\nanimate-ping     → Ping effect\nanimate-pulse    → Fade in/out\nanimate-bounce   → Nhún\n\n<!-- Ví dụ: Button hover -->\n<button class=\"bg-blue-500 text-white px-6 py-3 rounded-lg\n  transition-all duration-300\n  hover:bg-blue-600 hover:shadow-lg hover:scale-105\n  active:scale-95\">\n  Click me\n</button>\n\n<!-- Loading spinner -->\n<svg class=\"animate-spin h-5 w-5 text-white\" ...>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Transition -->\ntransition-all duration-300 ease-in-out\ntransition-colors duration-200\ntransition-transform duration-150\n\n<!-- Transform -->\nscale-95 / scale-100 / scale-105 / scale-110\nrotate-45 / rotate-90 / rotate-180\ntranslate-x-4 / translate-y-2 / -translate-y-1\n\n<!-- Built-in Animations -->\nanimate-spin     → Quay liên tục (loading)\nanimate-ping     → Ping effect\nanimate-pulse    → Fade in/out\nanimate-bounce   → Nhún\n\n<!-- Ví dụ: Button hover -->\n<button class=\"bg-blue-500 text-white px-6 py-3 rounded-lg\n  transition-all duration-300\n  hover:bg-blue-600 hover:shadow-lg hover:scale-105\n  active:scale-95\">\n  Click me\n</button>\n\n<!-- Loading spinner -->\n<svg class=\"animate-spin h-5 w-5 text-white\" ...>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Components & Customization",
    "cards": [
      {
        "id": "tw-components",
        "title": "Component Patterns phổ biến",
        "description": "Tailwind không có component sẵn nhưng dễ tạo. Các pattern card, button, input, badge, alert thường dùng.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Card & Button",
            "code": "<!-- Card -->\n<div class=\"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow\">\n  <img class=\"w-full h-48 object-cover\" src=\"...\" />\n  <div class=\"p-6\">\n    <span class=\"text-xs font-semibold text-blue-600 uppercase\">Category</span>\n    <h3 class=\"mt-2 text-xl font-bold text-gray-900\">Title</h3>\n    <p class=\"mt-2 text-gray-600 line-clamp-2\">Description...</p>\n  </div>\n</div>\n\n<!-- Button variants -->\n<button class=\"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700\">Primary</button>\n<button class=\"border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50\">Outline</button>\n<button class=\"text-blue-600 hover:underline\">Link</button>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Card -->\n<div class=\"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow\">\n  <img class=\"w-full h-48 object-cover\" src=\"...\" />\n  <div class=\"p-6\">\n    <span class=\"text-xs font-semibold text-blue-600 uppercase\">Category</span>\n    <h3 class=\"mt-2 text-xl font-bold text-gray-900\">Title</h3>\n    <p class=\"mt-2 text-gray-600 line-clamp-2\">Description...</p>\n  </div>\n</div>\n\n<!-- Button variants -->\n<button class=\"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700\">Primary</button>\n<button class=\"border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50\">Outline</button>\n<button class=\"text-blue-600 hover:underline\">Link</button>\n</div>"
          },
          {
            "title": "Input & Badge",
            "code": "<!-- Input -->\n<input class=\"w-full px-4 py-2 border border-gray-300 rounded-lg\n  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\n  placeholder-gray-400\"\n  placeholder=\"Enter text...\" />\n\n<!-- Badge -->\n<span class=\"inline-flex items-center px-2.5 py-0.5 rounded-full\n  text-xs font-medium bg-green-100 text-green-800\">\n  Active\n</span>\n\n<!-- Alert -->\n<div class=\"flex items-center gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200\">\n  <span class=\"text-yellow-600\">⚠️</span>\n  <p class=\"text-yellow-800\">Warning message</p>\n</div>",
            "preview": "<script src=\"https://cdn.tailwindcss.com\"></script>\n<div style=\"padding: 16px; font-family: sans-serif;\">\n<!-- Input -->\n<input class=\"w-full px-4 py-2 border border-gray-300 rounded-lg\n  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\n  placeholder-gray-400\"\n  placeholder=\"Enter text...\" />\n\n<!-- Badge -->\n<span class=\"inline-flex items-center px-2.5 py-0.5 rounded-full\n  text-xs font-medium bg-green-100 text-green-800\">\n  Active\n</span>\n\n<!-- Alert -->\n<div class=\"flex items-center gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200\">\n  <span class=\"text-yellow-600\">⚠️</span>\n  <p class=\"text-yellow-800\">Warning message</p>\n</div>\n</div>"
          }
        ]
      },
      {
        "id": "tw-custom",
        "title": "Customization & Arbitrary Values",
        "description": "Arbitrary values: class-[value] cho giá trị tùy ý. @apply trích CSS từ utilities. Extend theme trong config. CSS variables kết hợp Tailwind.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "<!-- Arbitrary values -->\nw-[350px]          → width: 350px\nh-[calc(100vh-80px)]\nbg-[#1a1a2e]      → custom color\ntext-[14px]        → custom size\ngrid-cols-[200px_1fr_200px]\ntop-[10%]\n\n<!-- @apply (trong CSS file) -->\n@layer components {\n  .btn-primary {\n    @apply bg-blue-600 text-white px-4 py-2 rounded-lg\n      hover:bg-blue-700 transition-colors;\n  }\n}\n\n<!-- tailwind.config.js (v3) -->\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        brand: '#6366f1',\n        'brand-dark': '#4f46e5',\n      },\n      fontFamily: {\n        sans: ['Inter', 'sans-serif'],\n      },\n      spacing: {\n        '128': '32rem',\n      },\n    },\n  },\n}"
          }
        ]
      },
      {
        "id": "tw-tips",
        "title": "Mẹo & Best Practices",
        "description": "Tips giúp dùng Tailwind hiệu quả hơn.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Tips",
            "code": "// 1. Dùng component (React) thay vì lặp class\n// ❌ Copy-paste class dài ở nhiều nơi\n// ✅ Tạo <Button variant='primary'> component\n\n// 2. clsx / cn() merge class có điều kiện\nimport { clsx } from 'clsx';\nclsx('px-4 py-2', isActive && 'bg-blue-500', disabled && 'opacity-50')\n\n// 3. Tailwind Merge (tránh conflict)\nimport { twMerge } from 'tailwind-merge';\ntwMerge('px-4 py-2', 'px-6') // → 'py-2 px-6'\n\n// 4. Mobile-first: viết class mặc định cho mobile\n// ❌ class=\"lg:text-base text-sm\"\n// ✅ class=\"text-sm lg:text-base\"\n\n// 5. Group & Peer cho hover/focus parent-child\n// 6. Dùng Tailwind UI, shadcn/ui, DaisyUI cho components\n// 7. VS Code extension: Tailwind CSS IntelliSense\n// 8. prettier-plugin-tailwindcss tự sắp xếp class"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Dark Mode, Plugins & Nâng cao",
    "cards": [
      {
        "id": "tw-dark-mode",
        "title": "Dark Mode",
        "description": "Tailwind hỗ trợ dark mode bằng dark: prefix. 2 strategies: media (theo system setting) và class/selector (toggle bằng JS). Class strategy linh hoạt hơn, cho user chọn theme.",
        "exampleText": "darkMode: 'class' → thêm class 'dark' vào html tag. darkMode: 'media' → tự theo system.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "<!-- tailwind.config.js -->\nmodule.exports = {\n  darkMode: 'class', // 'media' | 'class' | 'selector'\n}\n\n<!-- HTML -->\n<html class=\"dark\"> <!-- Toggle bằng JS -->\n<body class=\"bg-white dark:bg-gray-900\">\n  <h1 class=\"text-gray-900 dark:text-white\">\n    Dark Mode\n  </h1>\n  <p class=\"text-gray-600 dark:text-gray-300\">\n    Nội dung\n  </p>\n  <div class=\"\n    bg-white dark:bg-gray-800\n    border border-gray-200 dark:border-gray-700\n    shadow-lg dark:shadow-gray-900/50\n    rounded-lg p-4\n  \">\n    Card content\n  </div>\n</body>\n</html>\n\n<!-- Toggle JS -->\n<script>\n  const toggle = () => {\n    document.documentElement.classList.toggle('dark');\n    // Lưu vào localStorage\n    const isDark = document.documentElement.classList.contains('dark');\n    localStorage.setItem('theme', isDark ? 'dark' : 'light');\n  };\n\n  // Load saved theme\n  if (localStorage.theme === 'dark' ||\n    (!('theme' in localStorage) &&\n      window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n    document.documentElement.classList.add('dark');\n  }\n</script>"
          }
        ]
      },
      {
        "id": "tw-arbitrary-detail",
        "title": "Arbitrary Values & Properties",
        "description": "Arbitrary values [value] cho phép dùng giá trị tùy ý không có trong config. Arbitrary properties [property:value] cho phép dùng CSS property bất kỳ. Rất mạnh cho one-off styles.",
        "exampleText": "Dùng _ thay khoảng trắng trong arbitrary values. VD: bg-[url('/img.png')].",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "<!-- Arbitrary values -->\n<div class=\"w-[350px]\">        <!-- width: 350px -->\n<div class=\"h-[calc(100vh-80px)]\"> <!-- calc() -->\n<div class=\"bg-[#1da1f2]\">     <!-- custom color -->\n<div class=\"text-[14px]\">      <!-- custom font size -->\n<div class=\"top-[10%]\">        <!-- percentage -->\n<div class=\"grid-cols-[200px_1fr_200px]\"> <!-- grid -->\n<div class=\"content-['Hello']\">  <!-- CSS content -->\n<div class=\"bg-[url('/hero.jpg')] bg-cover\"> <!-- bg image -->\n\n<!-- Arbitrary properties (CSS tùy ý) -->\n<div class=\"[mask-type:luminance]\"> <!-- CSS property -->\n<div class=\"[--my-color:#3b82f6]\"> <!-- CSS variable -->\n<div class=\"[text-wrap:balance]\">  <!-- Modern CSS -->\n<div class=\"[writing-mode:vertical-rl]\"> <!-- Vertical text -->\n\n<!-- Kết hợp với modifiers -->\n<div class=\"hover:bg-[#1da1f2]/80\"> <!-- hover + opacity -->\n<div class=\"dark:[--brand:#60a5fa]\">  <!-- dark + CSS var -->\n<div class=\"md:w-[calc(100%-2rem)]\"> <!-- responsive + calc -->\n\n<!-- Dùng CSS variable -->\n<div\n  style=\"--brand: #6366f1\"\n  class=\"bg-[--brand] text-white\"\n>\n  Dynamic color\n</div>"
          }
        ]
      },
      {
        "id": "tw-apply-directive",
        "title": "@apply Directive",
        "description": "@apply cho phép dùng Tailwind classes trong CSS file. Hữu ích khi tạo base styles hoặc component styles quá dài. Nên hạn chế - component-based (React) tốt hơn. Dùng trong @layer components hoặc @layer utilities.",
        "exampleText": "Ưu tiên dùng React components thay vì @apply. @apply chỉ cho global styles hoặc 3rd-party.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "/* globals.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* @layer base - Reset, typography */\n@layer base {\n  body {\n    @apply bg-white text-gray-900 dark:bg-gray-900 dark:text-white;\n  }\n\n  h1 { @apply text-3xl font-bold mb-4; }\n  h2 { @apply text-2xl font-semibold mb-3; }\n  a { @apply text-blue-600 hover:text-blue-800 underline; }\n}\n\n/* @layer components - Reusable components */\n@layer components {\n  .btn {\n    @apply px-4 py-2 rounded-lg font-medium\n      transition-colors duration-200;\n  }\n\n  .btn-primary {\n    @apply btn bg-blue-600 text-white\n      hover:bg-blue-700 active:bg-blue-800;\n  }\n\n  .btn-outline {\n    @apply btn border-2 border-blue-600 text-blue-600\n      hover:bg-blue-600 hover:text-white;\n  }\n\n  .card {\n    @apply bg-white dark:bg-gray-800 rounded-xl\n      shadow-md p-6 border border-gray-100\n      dark:border-gray-700;\n  }\n\n  .input {\n    @apply w-full px-3 py-2 rounded-lg border\n      border-gray-300 dark:border-gray-600\n      bg-white dark:bg-gray-800\n      focus:ring-2 focus:ring-blue-500\n      focus:border-transparent outline-none;\n  }\n}\n\n/* @layer utilities - Custom utilities */\n@layer utilities {\n  .text-balance {\n    text-wrap: balance;\n  }\n}"
          }
        ]
      },
      {
        "id": "tw-plugins",
        "title": "Official Plugins",
        "description": "Tailwind có plugins chính thức: @tailwindcss/forms (form styles), @tailwindcss/typography (prose - content formatting), @tailwindcss/aspect-ratio, @tailwindcss/container-queries.",
        "exampleText": "Cài: npm i @tailwindcss/forms @tailwindcss/typography. Thêm vào plugins trong config.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// tailwind.config.js\nmodule.exports = {\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography'),\n    require('@tailwindcss/aspect-ratio'),\n    require('@tailwindcss/container-queries'),\n  ],\n}\n\n<!-- @tailwindcss/forms - Input styles đẹp mặc định -->\n<input type=\"text\" class=\"rounded-md border-gray-300\n  focus:border-blue-500 focus:ring-blue-500\">\n<select class=\"rounded-md border-gray-300\">\n  <option>Option 1</option>\n</select>\n\n<!-- @tailwindcss/typography - Prose cho content -->\n<article class=\"prose prose-lg dark:prose-invert\n  prose-headings:text-blue-600\n  prose-a:text-blue-500\n  prose-code:bg-gray-100\n  max-w-none\">\n  <h1>Tiêu đề bài viết</h1>\n  <p>Nội dung markdown render ra HTML...</p>\n  <pre><code>console.log('code block')</code></pre>\n</article>\n\n<!-- @tailwindcss/container-queries -->\n<div class=\"@container\">\n  <div class=\"@lg:flex @lg:gap-4\">\n    <div class=\"@lg:w-1/3\">Sidebar</div>\n    <div class=\"@lg:w-2/3\">Content</div>\n  </div>\n</div>"
          }
        ]
      },
      {
        "id": "tw-config-detail",
        "title": "Cấu hình chi tiết",
        "description": "tailwind.config.js cấu hình colors, fonts, spacing, breakpoints... theme.extend thêm mới (giữ defaults). theme override toàn bộ. safelist giữ classes không bị purge. content chỉ định files cần scan.",
        "exampleText": "Luôn dùng theme.extend thay vì theme trực tiếp (để giữ default classes).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// tailwind.config.js (v3)\nmodule.exports = {\n  // Scan files để tìm classes\n  content: [\n    './src/**/*.{js,jsx,ts,tsx}',\n    './public/index.html',\n  ],\n\n  darkMode: 'class',\n\n  theme: {\n    // Override breakpoints\n    screens: {\n      sm: '640px',\n      md: '768px',\n      lg: '1024px',\n      xl: '1280px',\n    },\n\n    extend: {\n      // Thêm colors (giữ defaults)\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          100: '#dbeafe',\n          500: '#3b82f6',\n          600: '#2563eb',\n          700: '#1d4ed8',\n          900: '#1e3a5f',\n        },\n      },\n\n      fontFamily: {\n        sans: ['Inter', 'system-ui', 'sans-serif'],\n        mono: ['JetBrains Mono', 'monospace'],\n      },\n\n      spacing: {\n        '18': '4.5rem',\n        '88': '22rem',\n      },\n\n      borderRadius: {\n        '4xl': '2rem',\n      },\n\n      animation: {\n        'fade-in': 'fadeIn 0.5s ease-out',\n        'slide-up': 'slideUp 0.3s ease-out',\n      },\n\n      keyframes: {\n        fadeIn: {\n          '0%': { opacity: '0' },\n          '100%': { opacity: '1' },\n        },\n        slideUp: {\n          '0%': { transform: 'translateY(10px)', opacity: '0' },\n          '100%': { transform: 'translateY(0)', opacity: '1' },\n        },\n      },\n    },\n  },\n\n  // Giữ classes luôn có (không bị purge)\n  safelist: [\n    'bg-red-500',\n    'bg-green-500',\n    { pattern: /^bg-(red|green|blue)-(100|500)$/ },\n  ],\n};"
          }
        ]
      }
    ]
  }
];
