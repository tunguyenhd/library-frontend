# Code Knowledge

Project React + TypeScript được xây dựng bằng Vite.

## Chạy development

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ Vite hiển thị trong terminal.

## Kiểm tra TypeScript

```bash
npm run typecheck
```

## Build production

```bash
npm run build
npm run preview
```

Lệnh `npm run build` sẽ chạy TypeScript type-check trước khi Vite build.

## Cấu trúc chính

- `src/components/`: component TypeScript cho sidebar, nhóm, card và code.
- src/data/htmlGroups.ts: dữ liệu của 9 nhóm HTML.
- src/data/cssGroups.ts: dữ liệu kiến thức CSS.
- `src/pages/`: các page React viết bằng TSX.
- `src/types/`: interface và type dùng chung.
- `src/styles.css`: giao diện của ứng dụng.
- `tsconfig.app.json`: cấu hình strict cho source trình duyệt.
- `tsconfig.node.json`: cấu hình TypeScript cho Vite.

Các file tĩnh cũ trong `pages/` và `css/` được giữ lại làm bản tham chiếu, không nằm trong entry React.
