import type { KnowledgeGroup } from "../types/knowledge";

export const scssGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "SCSS cơ bản & Biến",
    "cards": [
      {
        "id": "scss-intro",
        "title": "SCSS là gì",
        "description": "SCSS (Sassy CSS) là CSS preprocessor, mở rộng CSS với biến, nesting, mixins, functions, partials... SCSS là cú pháp mới của Sass (dùng {} thay vì indent). File .scss được compile thành .css. Hầu hết framework đều hỗ trợ SCSS.",
        "exampleText": "Vite, Next.js, CRA đều hỗ trợ SCSS: npm install -D sass.",
        "codeBlocks": [
          {
            "title": "So sánh CSS vs SCSS",
            "code": "/* CSS thông thường */\n.card { background: #fff; }\n.card .title { font-size: 18px; }\n.card .title:hover { color: blue; }\n\n/* SCSS - gọn hơn nhiều */\n.card {\n  background: #fff;\n\n  .title {\n    font-size: 18px;\n\n    &:hover {\n      color: blue;\n    }\n  }\n}"
          }
        ]
      },
      {
        "id": "scss-variables",
        "title": "Biến ($variable)",
        "description": "Biến SCSS dùng $ prefix. Lưu colors, fonts, spacing... để tái sử dụng. Khác CSS custom properties (--var): SCSS biến compile-time, CSS vars runtime. Dùng SCSS vars cho giá trị cố định, CSS vars cho theming.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Định nghĩa biến\n$primary: #3b82f6;\n$secondary: #64748b;\n$danger: #ef4444;\n$success: #22c55e;\n\n$font-main: 'Inter', sans-serif;\n$font-mono: 'Fira Code', monospace;\n\n$spacing-sm: 8px;\n$spacing-md: 16px;\n$spacing-lg: 24px;\n$spacing-xl: 32px;\n\n$border-radius: 8px;\n$shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n$transition: all 0.3s ease;\n\n// Sử dụng\n.button {\n  background: $primary;\n  font-family: $font-main;\n  padding: $spacing-sm $spacing-md;\n  border-radius: $border-radius;\n  box-shadow: $shadow;\n  transition: $transition;\n\n  &:hover {\n    background: darken($primary, 10%);\n  }\n}"
          }
        ]
      },
      {
        "id": "scss-nesting",
        "title": "Nesting & Parent Selector (&)",
        "description": "SCSS cho phép viết CSS lồng nhau theo cấu trúc HTML. & tham chiếu đến selector cha. Không nên nesting quá 3-4 cấp (khó đọc, specificity cao). & cũng dùng cho BEM naming.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Nesting cơ bản\n.nav {\n  display: flex;\n  gap: 16px;\n\n  .nav-item {\n    padding: 8px 16px;\n\n    a {\n      color: #333;\n      text-decoration: none;\n    }\n  }\n}\n\n// & (parent selector)\n.btn {\n  background: blue;\n\n  &:hover { background: darkblue; }  // .btn:hover\n  &:focus { outline: 2px solid; }    // .btn:focus\n  &:active { transform: scale(0.98); }\n  &.active { background: green; }    // .btn.active\n  &::before { content: '→'; }       // .btn::before\n  &-primary { background: blue; }    // .btn-primary (BEM)\n  &-secondary { background: gray; }  // .btn-secondary\n\n  .dark & { color: white; }          // .dark .btn\n}\n\n// ⚠️ Tránh nesting quá sâu\n// ❌ .page .content .sidebar .menu .item a { }\n// ✅ .menu-item a { }"
          }
        ]
      },
      {
        "id": "scss-partials",
        "title": "Partials & @use / @forward",
        "description": "Partial là file SCSS bắt đầu bằng _ (vd: _variables.scss). Không compile riêng, chỉ import vào file khác. @use thay thế @import (deprecated). @forward re-export module cho file khác dùng.",
        "exampleText": "@import đã deprecated. Luôn dùng @use cho project mới.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "scss/\n ┣ abstracts/\n ┃ ┣ _variables.scss\n ┃ ┣ _mixins.scss\n ┃ ┗ _index.scss       ← @forward tất cả\n ┣ base/\n ┃ ┣ _reset.scss\n ┃ ┗ _typography.scss\n ┣ components/\n ┃ ┣ _button.scss\n ┃ ┗ _card.scss\n ┣ layout/\n ┃ ┣ _header.scss\n ┃ ┗ _footer.scss\n ┗ main.scss           ← Entry point"
          },
          {
            "title": "@use & @forward",
            "code": "// abstracts/_variables.scss\n$primary: #3b82f6;\n$font-size-base: 16px;\n\n// abstracts/_index.scss\n@forward 'variables';\n@forward 'mixins';\n\n// components/_button.scss\n@use '../abstracts' as *;  // Dùng biến/mixin\n// hoặc: @use '../abstracts' as abs;\n// rồi dùng: abs.$primary\n\n.btn {\n  background: $primary;\n  font-size: $font-size-base;\n}\n\n// main.scss\n@use 'abstracts';\n@use 'base/reset';\n@use 'base/typography';\n@use 'components/button';\n@use 'layout/header';"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Mixins, Functions & Operators",
    "cards": [
      {
        "id": "scss-mixins",
        "title": "Mixins (@mixin / @include)",
        "description": "Mixin là nhóm CSS có thể tái sử dụng. Nhận tham số (có default value). Dùng @mixin để định nghĩa, @include để sử dụng. Tuyệt vời cho responsive, vendor prefixes, patterns lặp lại.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Mixin cơ bản\n@mixin flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero { @include flex-center; }\n\n// Mixin với tham số\n@mixin button($bg: #3b82f6, $color: white) {\n  background: $bg;\n  color: $color;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background: darken($bg, 10%);\n  }\n}\n\n.btn-primary { @include button; }\n.btn-danger { @include button(#ef4444); }\n.btn-outline { @include button(transparent, #333); }"
          },
          {
            "title": "Responsive Mixin",
            "code": "// Breakpoint mixin\n$breakpoints: (\n  'sm': 640px,\n  'md': 768px,\n  'lg': 1024px,\n  'xl': 1280px,\n);\n\n@mixin respond-to($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    @media (min-width: map-get($breakpoints, $breakpoint)) {\n      @content;  // Nội dung bên trong @include\n    }\n  }\n}\n\n// Sử dụng\n.container {\n  padding: 16px;\n\n  @include respond-to('md') {\n    padding: 24px;\n  }\n\n  @include respond-to('lg') {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}"
          }
        ]
      },
      {
        "id": "scss-functions",
        "title": "Functions",
        "description": "SCSS có built-in functions và cho phép tạo custom functions. Built-in: darken(), lighten(), rgba(), mix(), percentage()... Custom function dùng @function, return giá trị.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Built-in Functions",
            "code": "// Color functions\ndarken($primary, 10%)      // Tối hơn\nlighten($primary, 10%)     // Sáng hơn\nmix($primary, $secondary, 50%)  // Trộn 2 màu\nrgba($primary, 0.5)        // Thêm opacity\nadjust-hue($primary, 30deg)\ncomplement($primary)       // Màu đối\n\n// String\nto-upper-case('hello')     // 'HELLO'\nunquote('\"hello\"')         // hello\n\n// Number\npercentage(0.5)            // 50%\nround(3.7)                 // 4\nceil(3.1)                  // 4\nfloor(3.9)                 // 3\nmin(10px, 20px)            // 10px\nmax(10px, 20px)            // 20px\nmath.div(10, 3)            // 3.333..."
          },
          {
            "title": "Custom Functions",
            "code": "@use 'sass:math';\n\n// px to rem\n@function rem($px, $base: 16) {\n  @return math.div($px, $base) * 1rem;\n}\n\n.title {\n  font-size: rem(24);    // 1.5rem\n  margin-bottom: rem(16); // 1rem\n}\n\n// Spacing scale\n@function space($n) {\n  @return $n * 4px;\n}\n\n.card {\n  padding: space(4);     // 16px\n  margin-bottom: space(6); // 24px\n}"
          }
        ]
      },
      {
        "id": "scss-extend",
        "title": "@extend & Placeholder (%)",
        "description": "@extend kế thừa CSS từ selector khác. Placeholder (%) là class ẩn chỉ dùng để @extend (không compile nếu không dùng). Ưu tiên @mixin hơn @extend trong hầu hết trường hợp.",
        "exampleText": "⚠️ @extend có thể gây CSS output lớn ngoài dự kiến. Dùng @mixin an toàn hơn.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Placeholder (không compile riêng)\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n%text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n// @extend\n.hero {\n  @extend %flex-center;\n  min-height: 100vh;\n}\n\n.card-title {\n  @extend %text-truncate;\n  font-size: 18px;\n}\n\n// Khi nào dùng gì?\n// @mixin: Có tham số, logic phức tạp, media queries\n// @extend: CSS giống hệt, không cần tham số\n// Placeholder %: Giống @extend nhưng không tạo class thừa"
          }
        ]
      },
      {
        "id": "scss-operators",
        "title": "Operators & Interpolation",
        "description": "SCSS hỗ trợ tính toán: +, -, *, /. Interpolation #{$var} dùng trong selectors, property names, strings. @if/@else, @for, @each, @while cho control flow.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "@use 'sass:math';\n\n// Operators\n.container {\n  width: 100% - 40px;  // calc() tự động\n  padding: math.div(30px, 2); // 15px (/ cần math.div)\n}\n\n// Interpolation #{}\n$property: 'border';\n$side: 'top';\n\n.box {\n  #{$property}-#{$side}: 1px solid;  // border-top: 1px solid\n}\n\n@mixin theme($name) {\n  .theme-#{$name} { @content; }\n}\n\n@include theme('dark') {\n  background: #111;\n  color: #fff;\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Control Flow & Maps",
    "cards": [
      {
        "id": "scss-control-flow",
        "title": "@if, @for, @each, @while",
        "description": "SCSS có control flow giống programming language. @if/@else cho điều kiện. @for lặp với counter. @each duyệt list/map. @while lặp với điều kiện. Rất mạnh khi generate utility classes.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "@if & @for",
            "code": "// @if\n@mixin text-style($type) {\n  @if $type == 'heading' {\n    font-size: 24px;\n    font-weight: 700;\n  } @else if $type == 'body' {\n    font-size: 16px;\n    font-weight: 400;\n  } @else {\n    font-size: 14px;\n  }\n}\n\n.title { @include text-style('heading'); }\n\n// @for (generate classes)\n@for $i from 1 through 5 {\n  .mt-#{$i} { margin-top: #{$i * 4}px; }\n}\n// → .mt-1 { margin-top: 4px; }\n// → .mt-2 { margin-top: 8px; }\n// → ... .mt-5 { margin-top: 20px; }"
          },
          {
            "title": "@each",
            "code": "// @each với list\n$sizes: 'sm' 12px, 'md' 16px, 'lg' 20px, 'xl' 24px;\n\n@each $name, $size in $sizes {\n  .text-#{$name} { font-size: $size; }\n}\n\n// @each với map\n$colors: (\n  'primary': #3b82f6,\n  'danger': #ef4444,\n  'success': #22c55e,\n);\n\n@each $name, $color in $colors {\n  .bg-#{$name} { background: $color; }\n  .text-#{$name} { color: $color; }\n  .border-#{$name} { border-color: $color; }\n}"
          }
        ]
      },
      {
        "id": "scss-maps",
        "title": "Maps",
        "description": "SCSS Maps là key-value store. Dùng cho themes, breakpoints, color palettes. map-get(), map-has-key(), map-merge(), map-keys()... Kết hợp @each để generate classes.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "@use 'sass:map';\n\n// Định nghĩa map\n$theme: (\n  'bg': #ffffff,\n  'text': #1a1a1a,\n  'primary': #3b82f6,\n  'border': #e5e7eb,\n);\n\n// Truy cập\ncolor: map.get($theme, 'primary');  // #3b82f6\n\n// Kiểm tra\n@if map.has-key($theme, 'primary') { /* ... */ }\n\n// Merge\n$dark-theme: map.merge($theme, (\n  'bg': #111827,\n  'text': #f9fafb,\n));\n\n// Nested map\n$tokens: (\n  'spacing': ('sm': 8px, 'md': 16px, 'lg': 24px),\n  'radius': ('sm': 4px, 'md': 8px, 'lg': 16px),\n);\n\n$radius: map.get(map.get($tokens, 'radius'), 'md'); // 8px\n\n// Generate utilities từ map\n@each $key, $value in map.get($tokens, 'spacing') {\n  .p-#{$key} { padding: $value; }\n  .m-#{$key} { margin: $value; }\n}"
          }
        ]
      },
      {
        "id": "scss-best-practices",
        "title": "Best Practices & Mẹo",
        "description": "Tổng hợp tips viết SCSS clean và maintainable.",
        "exampleText": null,
        "codeBlocks": [
          {
            "title": "Tips",
            "code": "// 1. Nesting tối đa 3 cấp\n// ❌ .page .content .sidebar .menu .item a { }\n// ✅ .menu-item a { }\n\n// 2. Dùng biến cho magic numbers\n// ❌ margin-top: 47px;\n// ✅ margin-top: $header-height + $spacing-md;\n\n// 3. Tên biến có ý nghĩa\n// ❌ $c1: #3b82f6;\n// ✅ $color-primary: #3b82f6;\n\n// 4. Dùng mixins cho media queries\n// ❌ @media (min-width: 768px) { }\n// ✅ @include respond-to('md') { }\n\n// 5. BEM naming + nesting\n.card {\n  &__header { }     // .card__header\n  &__body { }       // .card__body\n  &__footer { }     // .card__footer\n  &--featured { }   // .card--featured\n}\n\n// 6. Utility mixin\n@mixin visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n\n// 7. Dark mode\n@mixin dark {\n  @media (prefers-color-scheme: dark) { @content; }\n  .dark & { @content; }\n}"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "@use/@forward & Responsive",
    "cards": [
      {
        "id": "scss-use-forward",
        "title": "@use và @forward",
        "description": "@use thay thế @import (đã deprecated). @use namespace hóa, chỉ load 1 lần, rõ ràng hơn. @forward re-export module cho module khác dùng. @use 'sass:math' cho built-in modules.",
        "exampleText": "@import sẽ bị xóa trong tương lai. Nên chuyển sang @use/@forward cho project mới.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// _variables.scss\n$primary: #3b82f6;\n$font-size-base: 16px;\n\n// _mixins.scss\n@mixin flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n// _index.scss (barrel file)\n@forward 'variables';\n@forward 'mixins';\n\n// style.scss - Dùng @use\n@use 'variables' as vars;   // Namespace\n@use 'mixins' as mix;\n@use 'variables' as *;      // Không namespace\n\n.btn {\n  color: vars.$primary;      // Có namespace\n  color: $primary;           // Không namespace (as *)\n  @include mix.flex-center;  // Mixin với namespace\n}\n\n// Dùng barrel file\n@use 'abstracts' as *;      // Load từ _index.scss\n\n// So sánh @import vs @use\n// ❌ @import 'variables'; (deprecated, load nhiều lần)\n// ✅ @use 'variables' as vars; (load 1 lần, scoped)"
          }
        ]
      },
      {
        "id": "scss-built-in-modules",
        "title": "Built-in Modules",
        "description": "Sass cung cấp built-in modules: sass:math (tính toán), sass:color (thao tác màu), sass:string, sass:list, sass:map, sass:meta. Dùng @use 'sass:xxx' để import.",
        "exampleText": "Không dùng math.div() thay / cho phép chia (/ bị deprecated cho division).",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "@use 'sass:math';\n@use 'sass:color';\n@use 'sass:list';\n@use 'sass:string';\n\n// sass:math\nwidth: math.div(100%, 3);      // 33.333%\nwidth: math.percentage(0.75);  // 75%\nwidth: math.ceil(4.2);         // 5\nwidth: math.floor(4.8);        // 4\nwidth: math.round(4.5);        // 5\nwidth: math.max(10px, 20px);   // 20px\nwidth: math.min(10px, 20px);   // 10px\n\n// sass:color\n$blue: #3b82f6;\ncolor: color.adjust($blue, $lightness: 20%);  // Sáng hơn\ncolor: color.adjust($blue, $lightness: -20%); // Tối hơn\ncolor: color.mix($blue, white, 50%);          // Pha 50%\ncolor: color.scale($blue, $alpha: -50%);      // 50% transparent\ncolor: color.change($blue, $hue: 120);        // Đổi hue\n\n// sass:string\n$name: 'Nguyễn An';\nresult: string.to-upper-case($name);  // 'NGUYỄN AN'\nresult: string.index($name, 'An');    // 8\nresult: string.slice($name, 8);       // 'An'\n\n// sass:list\n$sizes: 4px, 8px, 16px, 24px;\nlength: list.length($sizes);  // 4\nvalue: list.nth($sizes, 2);   // 8px\nnew: list.append($sizes, 32px);"
          }
        ]
      },
      {
        "id": "scss-responsive-pattern",
        "title": "Responsive Patterns",
        "description": "Tạo responsive mixins để quản lý breakpoints tập trung. Dùng map lưu breakpoints, mixin generate media queries. Mobile-first (min-width) hoặc desktop-first (max-width).",
        "exampleText": "Mobile-first: viết mobile trước, dùng min-width mở rộng. Phổ biến hơn desktop-first.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Breakpoints map\n$breakpoints: (\n  'xs': 480px,\n  'sm': 640px,\n  'md': 768px,\n  'lg': 1024px,\n  'xl': 1280px,\n  '2xl': 1536px,\n);\n\n// Mobile-first mixin (min-width)\n@mixin respond-to($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    @media (min-width: map-get($breakpoints, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn 'Unknown breakpoint: #{$breakpoint}';\n  }\n}\n\n// Desktop-first mixin (max-width)\n@mixin respond-below($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    @media (max-width: map-get($breakpoints, $breakpoint) - 1) {\n      @content;\n    }\n  }\n}\n\n// Sử dụng\n.container {\n  padding: 16px;            // Mobile default\n\n  @include respond-to('md') {\n    padding: 32px;          // >= 768px\n    max-width: 720px;\n  }\n\n  @include respond-to('lg') {\n    padding: 48px;          // >= 1024px\n    max-width: 960px;\n  }\n}\n\n.sidebar {\n  display: none;            // Mobile: ẩn\n\n  @include respond-to('md') {\n    display: block;         // Tablet+: hiện\n    width: 250px;\n  }\n}"
          }
        ]
      },
      {
        "id": "scss-architecture",
        "title": "Kiến trúc 7-1 Pattern",
        "description": "7-1 pattern chia SCSS thành 7 thư mục + 1 file main. Giúp tổ chức code lớn. 7 folders: abstracts (biến, mixins), base (reset, typography), components (button, card), layout (header, footer, grid), pages, themes, vendors.",
        "exampleText": "Không nhất thiết dùng đủ 7 folders. Chọn folders phù hợp với project size.",
        "codeBlocks": [
          {
            "title": "Cấu trúc",
            "code": "scss/\n├── abstracts/\n│   ├── _variables.scss    # Biến: colors, fonts, spacing\n│   ├── _mixins.scss       # Mixins: responsive, flex...\n│   ├── _functions.scss    # Custom functions\n│   └── _index.scss        # @forward tất cả\n├── base/\n│   ├── _reset.scss        # Reset/Normalize\n│   ├── _typography.scss   # Font rules\n│   └── _index.scss\n├── components/\n│   ├── _button.scss       # .btn, .btn--primary\n│   ├── _card.scss         # .card, .card__body\n│   ├── _modal.scss\n│   └── _index.scss\n├── layout/\n│   ├── _header.scss\n│   ├── _footer.scss\n│   ├── _sidebar.scss\n│   ├── _grid.scss\n│   └── _index.scss\n├── pages/\n│   ├── _home.scss\n│   └── _about.scss\n├── themes/\n│   ├── _dark.scss\n│   └── _light.scss\n├── vendors/\n│   └── _normalize.scss\n└── main.scss              # Entry point\n\n// main.scss\n@use 'abstracts';\n@use 'base';\n@use 'components';\n@use 'layout';\n@use 'pages';\n@use 'themes';"
          }
        ]
      },
      {
        "id": "scss-placeholder",
        "title": "Placeholder Selectors (%)",
        "description": "Placeholder (%name) chỉ được compile khi @extend. Không tạo CSS thừa nếu không dùng. Khác với mixin: placeholder merge selectors (nhỏ hơn), mixin copy code (linh hoạt hơn với params).",
        "exampleText": "Dùng %placeholder khi không cần tham số. Dùng @mixin khi cần tham số.",
        "codeBlocks": [
          {
            "title": "Ví dụ",
            "code": "// Placeholder definition\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n%visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n}\n\n%card-base {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n}\n\n// Sử dụng @extend\n.hero { @extend %flex-center; height: 100vh; }\n.modal { @extend %flex-center; }\n.sr-only { @extend %visually-hidden; }\n.product-card { @extend %card-base; }\n.user-card { @extend %card-base; border: 1px solid #eee; }\n\n// Output CSS (merged selectors - hiệu quả!)\n// .hero, .modal {\n//   display: flex;\n//   align-items: center;\n//   justify-content: center;\n// }\n//\n// .product-card, .user-card {\n//   background: white;\n//   border-radius: 8px;\n//   ...\n// }"
          }
        ]
      }
    ]
  },
  {
    "label": "notes-scss",
    "title": "Ghi Chú Từ Khóa Học",
    "cards": [
      {
        "id": "frontend-f8---offline-hocscss-note-md",
        "title": "📝 SCSS Compiler",
        "description": "Ngôn ngữ tiền xử lý scss. Cài đặt trình biên dịch. 1. Cài đặt NodeJS",
        "exampleText": "# Ngôn ngữ tiền xử lý scss\r\n\r\n## Cài đặt trình biên dịch\r\n\r\n1. Cài đặt NodeJS\r\n\r\n2. Cài đặt SASS\r\n\r\nnpm i sass -g\r\n\r\n## Câu lệnh biên dịch SCSS sang CSS\r\n\r\n1. Biên dịch cả folder scss sang css\r\n\r\nsass folder_scss:foldercss\r\n\r\nWatch mode\r\n\r\nsass folder_scss:folder --watch\r\n\r\n2. Biên dịch 1 file scss sang 1 file css\r\n\r\nsass duong-dan-file-scss duong-dan-file-css\r\nvd: sass scss/ex01.scss build/style.css\r\n\r\n3. Nén file CSS từ file SCSS\r\n   => Tạo ra file .min (minify)\r\n\r\nsass duong-dan-file-scss duong-dan-file --style compressed\r\nvd: sass scss/ex01.scss build/style.min.css --style compressed\r\n",
        "codeBlocks": []
      },
      {
        "id": "fullstack-nodejs-08-hocscss-note-md",
        "title": "📝 Sass Compiler",
        "description": "Sass. Biên dịch từ file SCSS => CSS. sass duong-dan-file-scss duong-dan-file-css --watch",
        "exampleText": "# Sass\r\n\r\n## Biên dịch từ file SCSS => CSS\r\n\r\nsass duong-dan-file-scss duong-dan-file-css --watch\r\n\r\n## Biên dịch folder SCSS => CSS\r\n\r\nsass duong-dan-folder-scss:duong-dan-folder-css --watch\r\n\r\n## Nén file SCSS => CSS\r\n\r\nTạo minify css\r\n\r\nsass duong-dan-file-scss duong-dan-file-css --style compressed\r\n",
        "codeBlocks": []
      }
    ]
  }
];
