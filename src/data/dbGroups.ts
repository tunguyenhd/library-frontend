import type { KnowledgeGroup } from "../types/knowledge";

export const dbGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "SQL cơ bản",
    cards: [
      {
        id: "db-intro",
        title: "Database là gì",
        description: "Database (cơ sở dữ liệu) lưu trữ dữ liệu có cấu trúc. 2 loại chính: SQL (relational - bảng, quan hệ) và NoSQL (document, key-value, graph). SQL phổ biến: PostgreSQL, MySQL, SQLite. NoSQL phổ biến: MongoDB, Redis.",
        exampleText: null,
        codeBlocks: [
          { title: "So sánh", code: "-- SQL (Relational - PostgreSQL, MySQL)\n-- ✅ Dữ liệu có cấu trúc rõ ràng\n-- ✅ Quan hệ phức tạp (JOIN)\n-- ✅ ACID (transactions an toàn)\n-- ✅ Dùng cho: E-commerce, banking, CRM\n\n-- NoSQL (Document - MongoDB)\n-- ✅ Schema linh hoạt (không cần định nghĩa trước)\n-- ✅ Scale ngang dễ\n-- ✅ Dữ liệu nested/phức tạp\n-- ✅ Dùng cho: Real-time apps, CMS, IoT\n\n-- Chọn gì?\n-- Quan hệ phức tạp → SQL\n-- Data thay đổi thường xuyên → NoSQL\n-- Cần transactions → SQL\n-- Prototype nhanh → NoSQL\n-- Phần lớn projects → SQL (PostgreSQL)" }
        ]
      },
      {
        id: "db-create-table",
        title: "CREATE TABLE",
        description: "Tạo bảng với columns, types, constraints. Types phổ biến: INT, VARCHAR(n), TEXT, BOOLEAN, DATE, TIMESTAMP, DECIMAL, SERIAL (auto increment). Constraints: PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "CREATE TABLE users (\n  id          SERIAL PRIMARY KEY,   -- Auto increment\n  name        VARCHAR(100) NOT NULL,\n  email       VARCHAR(255) UNIQUE NOT NULL,\n  password    VARCHAR(255) NOT NULL,\n  role        VARCHAR(20) DEFAULT 'user',\n  age         INT CHECK (age >= 0),\n  is_active   BOOLEAN DEFAULT true,\n  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id          SERIAL PRIMARY KEY,\n  title       VARCHAR(255) NOT NULL,\n  content     TEXT,\n  user_id     INT NOT NULL,\n  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE  -- Xóa user → xóa posts\n);\n\n-- Sửa bảng\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\nALTER TABLE users DROP COLUMN phone;\nALTER TABLE users ALTER COLUMN name TYPE TEXT;\n\n-- Xóa bảng\nDROP TABLE IF EXISTS posts;" }
        ]
      },
      {
        id: "db-insert",
        title: "INSERT (Thêm dữ liệu)",
        description: "INSERT INTO thêm records mới. Có thể thêm 1 hoặc nhiều records. RETURNING (PostgreSQL) trả về record vừa tạo.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "-- Thêm 1 record\nINSERT INTO users (name, email, password)\nVALUES ('An', 'an@mail.com', 'hashed_password');\n\n-- Thêm nhiều records\nINSERT INTO users (name, email, password) VALUES\n  ('Bình', 'binh@mail.com', 'pass1'),\n  ('Chi', 'chi@mail.com', 'pass2'),\n  ('Dũng', 'dung@mail.com', 'pass3');\n\n-- RETURNING (PostgreSQL)\nINSERT INTO users (name, email, password)\nVALUES ('An', 'an@mail.com', 'hash')\nRETURNING id, name, email;\n\n-- INSERT nếu chưa tồn tại (UPSERT)\nINSERT INTO users (email, name, password)\nVALUES ('an@mail.com', 'An', 'hash')\nON CONFLICT (email) DO UPDATE\nSET name = EXCLUDED.name;" }
        ]
      },
      {
        id: "db-select",
        title: "SELECT (Truy vấn)",
        description: "SELECT lấy dữ liệu. WHERE lọc điều kiện. ORDER BY sắp xếp. LIMIT/OFFSET phân trang. DISTINCT loại trùng. Operators: =, !=, <, >, LIKE, IN, BETWEEN, IS NULL.",
        exampleText: null,
        codeBlocks: [
          { title: "Cú pháp", code: "-- Lấy tất cả\nSELECT * FROM users;\n\n-- Lấy cột cụ thể\nSELECT name, email FROM users;\n\n-- WHERE (điều kiện)\nSELECT * FROM users WHERE role = 'admin';\nSELECT * FROM users WHERE age >= 18 AND is_active = true;\nSELECT * FROM users WHERE role IN ('admin', 'editor');\nSELECT * FROM users WHERE name LIKE '%An%';  -- Chứa 'An'\nSELECT * FROM users WHERE name LIKE 'A%';    -- Bắt đầu bằng A\nSELECT * FROM users WHERE age BETWEEN 18 AND 30;\nSELECT * FROM users WHERE phone IS NULL;\nSELECT * FROM users WHERE phone IS NOT NULL;\n\n-- ORDER BY\nSELECT * FROM users ORDER BY created_at DESC;\nSELECT * FROM users ORDER BY name ASC, age DESC;\n\n-- LIMIT & OFFSET (phân trang)\nSELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;\n-- Page 3 (10 items/page): OFFSET = (3-1) * 10 = 20\n\n-- DISTINCT\nSELECT DISTINCT role FROM users;\n\n-- Alias\nSELECT name AS \"Tên\", email AS \"Email\" FROM users;" }
        ]
      },
      {
        id: "db-update-delete",
        title: "UPDATE & DELETE",
        description: "UPDATE sửa records. DELETE xóa records. LUÔN có WHERE khi UPDATE/DELETE (không có WHERE → thay đổi TẤT CẢ records)! Dùng RETURNING để kiểm tra.",
        exampleText: "⚠️ DELETE FROM users; (không có WHERE) → XÓA HẾT!",
        codeBlocks: [
          { title: "Ví dụ", code: "-- UPDATE\nUPDATE users\nSET name = 'An Nguyễn', updated_at = CURRENT_TIMESTAMP\nWHERE id = 1;\n\n-- Update nhiều cột\nUPDATE users\nSET role = 'admin', is_active = true\nWHERE email = 'an@mail.com'\nRETURNING *;\n\n-- Update có điều kiện\nUPDATE products\nSET price = price * 0.9  -- Giảm 10%\nWHERE category = 'electronics' AND stock > 100;\n\n-- DELETE\nDELETE FROM users WHERE id = 1;\nDELETE FROM users WHERE is_active = false;\nDELETE FROM posts WHERE created_at < '2023-01-01';\n\n-- Xóa hết (nhưng giữ bảng)\nDELETE FROM logs;   -- Chậm, ghi log\nTRUNCATE TABLE logs; -- Nhanh, không ghi log\n\n-- ⚠️ LUÔN test với SELECT trước!\nSELECT * FROM users WHERE is_active = false;\n-- OK rồi mới:\nDELETE FROM users WHERE is_active = false;" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "JOIN & Aggregate",
    cards: [
      {
        id: "db-join",
        title: "JOIN (Nối bảng)",
        description: "JOIN kết hợp dữ liệu từ 2+ bảng dựa trên quan hệ. INNER JOIN: chỉ lấy rows khớp 2 bên. LEFT JOIN: lấy hết bên trái + khớp bên phải. RIGHT JOIN: ngược lại. FULL JOIN: lấy hết cả 2.",
        exampleText: "INNER JOIN phổ biến nhất. LEFT JOIN dùng khi muốn giữ lại records bên trái dù không khớp.",
        codeBlocks: [
          { title: "Ví dụ", code: "-- INNER JOIN (chỉ lấy khớp)\nSELECT users.name, posts.title\nFROM users\nINNER JOIN posts ON users.id = posts.user_id;\n\n-- LEFT JOIN (lấy hết users, kể cả chưa có posts)\nSELECT u.name, p.title\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id;\n\n-- Nhiều JOIN\nSELECT u.name, p.title, c.content AS comment\nFROM users u\nJOIN posts p ON u.id = p.user_id\nJOIN comments c ON p.id = c.post_id\nWHERE u.role = 'admin';\n\n-- Self JOIN (bảng tham chiếu chính nó)\nSELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;" }
        ]
      },
      {
        id: "db-aggregate",
        title: "Aggregate Functions",
        description: "Hàm tính toán trên tập dữ liệu: COUNT, SUM, AVG, MIN, MAX. GROUP BY nhóm kết quả. HAVING lọc SAU khi nhóm (WHERE lọc TRƯỚC). Kết hợp với JOIN rất mạnh.",
        exampleText: "WHERE lọc rows → GROUP BY nhóm → HAVING lọc nhóm → ORDER BY sắp xếp.",
        codeBlocks: [
          { title: "Ví dụ", code: "-- COUNT\nSELECT COUNT(*) FROM users;                    -- Tổng users\nSELECT COUNT(*) FROM users WHERE role = 'admin'; -- Đếm admin\n\n-- SUM, AVG, MIN, MAX\nSELECT SUM(amount) FROM orders;       -- Tổng doanh thu\nSELECT AVG(price) FROM products;      -- Giá trung bình\nSELECT MIN(age), MAX(age) FROM users; -- Tuổi min/max\n\n-- GROUP BY\nSELECT role, COUNT(*) AS total\nFROM users\nGROUP BY role;\n-- role    | total\n-- admin   | 5\n-- user    | 120\n\n-- GROUP BY + HAVING (lọc nhóm)\nSELECT user_id, COUNT(*) AS post_count\nFROM posts\nGROUP BY user_id\nHAVING COUNT(*) > 10\nORDER BY post_count DESC;\n\n-- GROUP BY + JOIN\nSELECT u.name, COUNT(p.id) AS posts, SUM(p.views) AS total_views\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id, u.name\nORDER BY total_views DESC\nLIMIT 10;" }
        ]
      },
      {
        id: "db-subquery",
        title: "Subquery & CTE",
        description: "Subquery: query lồng trong query khác. CTE (Common Table Expression): dùng WITH để tạo bảng tạm, dễ đọc hơn subquery. Cả 2 dùng cho logic phức tạp.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "-- Subquery trong WHERE\nSELECT * FROM users\nWHERE id IN (\n  SELECT user_id FROM posts\n  GROUP BY user_id\n  HAVING COUNT(*) > 5\n);\n\n-- Subquery trong SELECT\nSELECT name,\n  (SELECT COUNT(*) FROM posts WHERE posts.user_id = users.id) AS post_count\nFROM users;\n\n-- CTE (WITH) - dễ đọc hơn!\nWITH active_authors AS (\n  SELECT user_id, COUNT(*) AS post_count\n  FROM posts\n  WHERE created_at > '2024-01-01'\n  GROUP BY user_id\n  HAVING COUNT(*) > 5\n)\nSELECT u.name, a.post_count\nFROM users u\nJOIN active_authors a ON u.id = a.user_id\nORDER BY a.post_count DESC;\n\n-- EXISTS (kiểm tra tồn tại)\nSELECT * FROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "Index, Transaction & Nâng cao",
    cards: [
      {
        id: "db-index",
        title: "Index (Chỉ mục)",
        description: "Index tăng tốc query (giống mục lục sách). Tạo index cho cột hay WHERE, JOIN, ORDER BY. Tradeoff: đọc nhanh hơn nhưng ghi chậm hơn (phải cập nhật index). Không index cột ít giá trị (boolean) hoặc bảng nhỏ.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "-- Tạo index\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_posts_user_id ON posts(user_id);\n\n-- Unique index\nCREATE UNIQUE INDEX idx_users_email ON users(email);\n\n-- Composite index (nhiều cột)\nCREATE INDEX idx_posts_user_date ON posts(user_id, created_at);\n\n-- Xóa index\nDROP INDEX idx_users_email;\n\n-- Kiểm tra query có dùng index\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'an@mail.com';\n\n-- Khi nào tạo index?\n-- ✅ Cột trong WHERE: WHERE email = '...'\n-- ✅ Cột trong JOIN: ON users.id = posts.user_id\n-- ✅ Cột trong ORDER BY: ORDER BY created_at DESC\n-- ❌ Bảng nhỏ (< 1000 rows)\n-- ❌ Cột boolean (ít giá trị distinct)\n-- ❌ Cột ít khi query" }
        ]
      },
      {
        id: "db-transaction",
        title: "Transaction",
        description: "Transaction nhóm nhiều SQL statements thành 1 đơn vị: tất cả thành công hoặc tất cả rollback. ACID: Atomicity, Consistency, Isolation, Durability. Quan trọng cho banking, e-commerce.",
        exampleText: "Chuyển tiền: trừ tài khoản A VÀ cộng tài khoản B. Nếu 1 cái lỗi → rollback cả 2!",
        codeBlocks: [
          { title: "Ví dụ", code: "-- Chuyển tiền: A → B\nBEGIN;\n\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Kiểm tra\nSELECT * FROM accounts WHERE id IN (1, 2);\n\nCOMMIT;   -- Lưu thay đổi\n-- hoặc\nROLLBACK; -- Hủy tất cả\n\n-- Trong code (Node.js + Prisma)\nconst result = await prisma.$transaction(async (tx) => {\n  await tx.account.update({\n    where: { id: 1 },\n    data: { balance: { decrement: 100 } },\n  });\n  await tx.account.update({\n    where: { id: 2 },\n    data: { balance: { increment: 100 } },\n  });\n  return { success: true };\n});\n// Nếu bất kỳ query nào fail → tự rollback" }
        ]
      },
      {
        id: "db-views",
        title: "Views & Stored Procedures",
        description: "View là query lưu sẵn, truy vấn như bảng. Stored procedure là function trong DB. View đơn giản hóa query phức tạp. Function tái sử dụng logic.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "-- View (bảng ảo từ query)\nCREATE VIEW active_users AS\nSELECT id, name, email, role\nFROM users\nWHERE is_active = true;\n\n-- Dùng như bảng thường\nSELECT * FROM active_users WHERE role = 'admin';\n\n-- View phức tạp\nCREATE VIEW user_stats AS\nSELECT u.id, u.name,\n  COUNT(p.id) AS post_count,\n  COALESCE(SUM(p.views), 0) AS total_views\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id, u.name;\n\n-- Function (PostgreSQL)\nCREATE OR REPLACE FUNCTION get_user_posts(uid INT)\nRETURNS TABLE(title VARCHAR, created_at TIMESTAMP) AS $$\nBEGIN\n  RETURN QUERY\n  SELECT p.title, p.created_at\n  FROM posts p WHERE p.user_id = uid\n  ORDER BY p.created_at DESC;\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT * FROM get_user_posts(1);" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "MongoDB (NoSQL)",
    cards: [
      {
        id: "db-mongo-basics",
        title: "MongoDB CRUD",
        description: "MongoDB lưu data dạng document (JSON/BSON). Collection ≈ Table. Document ≈ Row. Field ≈ Column. Không cần schema cố định. _id tự tạo (ObjectId).",
        exampleText: null,
        codeBlocks: [
          { title: "CRUD", code: "// INSERT\ndb.users.insertOne({ name: 'An', email: 'an@mail.com', age: 25 })\ndb.users.insertMany([\n  { name: 'Bình', email: 'binh@mail.com' },\n  { name: 'Chi', email: 'chi@mail.com' },\n])\n\n// FIND (SELECT)\ndb.users.find()                      // Tất cả\ndb.users.find({ role: 'admin' })     // Lọc\ndb.users.findOne({ email: 'an@mail.com' })\n\n// Operators\ndb.users.find({ age: { $gt: 18 } })       // > 18\ndb.users.find({ age: { $gte: 18, $lte: 30 } }) // 18-30\ndb.users.find({ role: { $in: ['admin', 'editor'] } })\ndb.users.find({ name: { $regex: /^An/i } })  // Regex\ndb.users.find({ phone: { $exists: false } }) // Không có field\n\n// Sort, Limit, Skip\ndb.users.find().sort({ created_at: -1 }).limit(10).skip(20)\n\n// Projection (chọn fields)\ndb.users.find({}, { name: 1, email: 1, _id: 0 })" },
          { title: "UPDATE & DELETE", code: "// UPDATE\ndb.users.updateOne(\n  { email: 'an@mail.com' },\n  { $set: { name: 'An Nguyễn', role: 'admin' } }\n)\n\n// Operators\n{ $set: { name: 'An' } }         // Set giá trị\n{ $unset: { phone: '' } }        // Xóa field\n{ $inc: { age: 1 } }             // Tăng/giảm\n{ $push: { tags: 'new' } }       // Thêm vào array\n{ $pull: { tags: 'old' } }       // Xóa khỏi array\n{ $addToSet: { tags: 'unique' } } // Thêm nếu chưa có\n\n// Update nhiều\ndb.users.updateMany(\n  { is_active: false },\n  { $set: { is_active: true } }\n)\n\n// DELETE\ndb.users.deleteOne({ email: 'an@mail.com' })\ndb.users.deleteMany({ is_active: false })" }
        ]
      },
      {
        id: "db-mongo-aggregate",
        title: "MongoDB Aggregation Pipeline",
        description: "Aggregation Pipeline xử lý data qua nhiều stages: $match (lọc), $group (nhóm), $sort, $project (chọn fields), $lookup (JOIN), $limit, $skip. Rất mạnh cho analytics.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "db.orders.aggregate([\n  // Stage 1: Lọc\n  { $match: { status: 'completed', created_at: { $gte: new Date('2024-01-01') } } },\n\n  // Stage 2: Nhóm + tính toán\n  { $group: {\n    _id: '$user_id',\n    total_orders: { $sum: 1 },\n    total_spent: { $sum: '$amount' },\n    avg_order: { $avg: '$amount' },\n  }},\n\n  // Stage 3: Lọc nhóm (HAVING)\n  { $match: { total_orders: { $gte: 5 } } },\n\n  // Stage 4: JOIN với users\n  { $lookup: {\n    from: 'users',\n    localField: '_id',\n    foreignField: '_id',\n    as: 'user',\n  }},\n  { $unwind: '$user' },\n\n  // Stage 5: Chọn fields\n  { $project: {\n    name: '$user.name',\n    total_orders: 1,\n    total_spent: 1,\n  }},\n\n  // Stage 6: Sắp xếp\n  { $sort: { total_spent: -1 } },\n  { $limit: 10 },\n])" }
        ]
      },
      {
        id: "db-mongo-index",
        title: "MongoDB Index & Schema Design",
        description: "Index trong MongoDB tương tự SQL. createIndex() tạo index. Compound index, text index, TTL index (tự xóa data cũ). Schema design: embed (nhúng) vs reference (tham chiếu).",
        exampleText: null,
        codeBlocks: [
          { title: "Index & Schema", code: "// Index\ndb.users.createIndex({ email: 1 }, { unique: true })\ndb.posts.createIndex({ user_id: 1, created_at: -1 })\ndb.products.createIndex({ name: 'text', description: 'text' }) // Full-text search\ndb.sessions.createIndex({ expires_at: 1 }, { expireAfterSeconds: 0 }) // TTL\n\n// Schema: Embed (cho data luôn đọc cùng nhau)\n// Ví dụ: User có addresses\n{\n  name: 'An',\n  addresses: [\n    { street: '123 ABC', city: 'HCM' },\n    { street: '456 XYZ', city: 'HN' },\n  ]\n}\n\n// Schema: Reference (cho data độc lập)\n// Ví dụ: Post tham chiếu User\n{ title: 'My Post', user_id: ObjectId('...') }\n\n// Khi nào Embed vs Reference?\n// Embed: data nhỏ, đọc cùng nhau, ít thay đổi\n// Reference: data lớn, đọc riêng, thay đổi thường xuyên" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 5",
    title: "Mẹo & Best Practices",
    cards: [
      {
        id: "db-naming",
        title: "Naming & Convention",
        description: "Quy tắc đặt tên giúp DB dễ đọc, nhất quán.",
        exampleText: null,
        codeBlocks: [
          { title: "Convention", code: "-- Bảng: số nhiều, snake_case\nusers, blog_posts, order_items\n\n-- Cột: snake_case, rõ ý nghĩa\nid, user_id, created_at, is_active, first_name\n\n-- Foreign key: [table_singular]_id\nuser_id, post_id, category_id\n\n-- Index: idx_[table]_[columns]\nidx_users_email, idx_posts_user_id_created\n\n-- Boolean: is_, has_, can_\nis_active, has_verified, can_edit\n\n-- Timestamp: [action]_at\ncreated_at, updated_at, deleted_at, published_at\n\n-- Tránh:\n-- ❌ Từ reserved: user, order, group → dùng users, orders, groups\n-- ❌ Viết tắt khó hiểu: usr, crt_dt\n-- ❌ camelCase trong SQL: firstName → first_name" }
        ]
      },
      {
        id: "db-security",
        title: "Bảo mật Database",
        description: "Checklist bảo mật cho database.",
        exampleText: null,
        codeBlocks: [
          { title: "Tips", code: "-- 1. KHÔNG BAO GIỜ lưu password dạng plain text\n-- ✅ Dùng bcrypt hash\n\n-- 2. SQL Injection Prevention\n-- ❌ `SELECT * FROM users WHERE id = ${userId}`\n-- ✅ `SELECT * FROM users WHERE id = $1` (parameterized)\n\n-- 3. Principle of Least Privilege\n-- Tạo user riêng cho app, chỉ cấp quyền cần thiết\nCREATE USER app_user WITH PASSWORD 'strong_password';\nGRANT SELECT, INSERT, UPDATE ON users TO app_user;\n-- Không cấp DELETE, DROP TABLE!\n\n-- 4. Backup thường xuyên\npg_dump mydb > backup.sql\n\n-- 5. Soft delete (thay vì xóa thật)\nALTER TABLE users ADD COLUMN deleted_at TIMESTAMP;\n-- Xóa: UPDATE users SET deleted_at = NOW() WHERE id = 1;\n-- Query: SELECT * FROM users WHERE deleted_at IS NULL;\n\n-- 6. Connection pooling (không mở quá nhiều connections)\n-- 7. Encrypt data nhạy cảm\n-- 8. Audit log cho thay đổi quan trọng" }
        ]
      },
      {
        id: "db-performance",
        title: "Tối ưu hiệu suất",
        description: "Mẹo tối ưu query và database performance.",
        exampleText: null,
        codeBlocks: [
          { title: "Tips", code: "-- 1. EXPLAIN ANALYZE (kiểm tra query plan)\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'an@mail.com';\n\n-- 2. SELECT cột cần thiết (không SELECT *)\n-- ❌ SELECT * FROM users;\n-- ✅ SELECT id, name, email FROM users;\n\n-- 3. Tạo index cho cột hay query\n-- 4. Tránh N+1 query (dùng JOIN thay vì loop query)\n\n-- ❌ N+1 problem\n-- Query 1: SELECT * FROM posts;\n-- Rồi loop: SELECT * FROM users WHERE id = post.user_id; (N lần!)\n\n-- ✅ 1 query JOIN\n-- SELECT p.*, u.name FROM posts p JOIN users u ON p.user_id = u.id;\n\n-- 5. Pagination: dùng cursor thay offset cho data lớn\n-- ❌ OFFSET 1000000 (quét 1M rows rồi bỏ)\n-- ✅ WHERE id > last_id LIMIT 20\n\n-- 6. Connection pooling\n-- 7. Cache (Redis) cho query hay lặp lại\n-- 8. Denormalize data đọc nhiều (thêm field tính sẵn)" }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 7",
  "title": "Sắp xếp & Gộp nhóm",
  "cards": [
    {
      "id": "sql-order-by-limit",
      "title": "ORDER BY & LIMIT",
      "description": "ORDER BY dùng để sắp xếp kết quả trả về theo một hoặc nhiều cột (tăng dần ASC, giảm dần DESC). LIMIT dùng để giới hạn số lượng dòng trả về (rất hay dùng để làm Phân trang - Pagination).",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Cú pháp",
          "code": "SELECT cột FROM bảng\nORDER BY cột [ASC|DESC]\nLIMIT số_lượng OFFSET vị_trí;"
        },
        {
          "title": "Ví dụ",
          "code": "-- Lấy 5 nhân viên có lương cao nhất\nSELECT name, salary FROM employees\nORDER BY salary DESC\nLIMIT 5;\n\n-- Lấy 10 sản phẩm ở trang số 2 (Bỏ qua 10 sản phẩm đầu)\nSELECT * FROM products\nORDER BY created_at DESC\nLIMIT 10 OFFSET 10;"
        }
      ]
    },
    {
      "id": "sql-group-by",
      "title": "GROUP BY & HAVING",
      "description": "GROUP BY gom nhóm các dòng có cùng giá trị lại với nhau, thường đi kèm với các hàm tính toán Aggregate (COUNT, SUM, AVG). HAVING đóng vai trò giống như WHERE, nhưng dùng để lọc dữ liệu SAU KHI đã gom nhóm.",
      "exampleText": "WHERE lọc từng dòng trước khi gộp. HAVING lọc các nhóm sau khi gộp.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "-- Đếm số lượng nhân viên của từng phòng ban\nSELECT department_id, COUNT(id) as total_emp\nFROM employees\nGROUP BY department_id;\n\n-- Chỉ lấy những phòng ban có nhiều hơn 10 nhân viên\nSELECT department_id, COUNT(id) as total_emp\nFROM employees\nGROUP BY department_id\nHAVING COUNT(id) > 10;"
        }
      ]
    }
  ]
},
{
  "label": "Nhóm 7",
  "title": "Subquery, View, CTE & Window Functions",
  "cards": [
    {
      "id": "db-subquery",
      "title": "Subquery (Truy vấn con)",
      "description": "Subquery là SELECT nằm bên trong SELECT/WHERE/FROM khác. Correlated subquery phụ thuộc vào query ngoài (chạy mỗi row). EXISTS kiểm tra có dữ liệu hay không. IN so sánh với danh sách giá trị.",
      "exampleText": "Subquery trong WHERE phổ biến nhất. JOIN thường nhanh hơn subquery với bảng lớn.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "-- Subquery trong WHERE\nSELECT name, salary FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- IN subquery\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 1000);\n\n-- EXISTS (kiểm tra tồn tại)\nSELECT * FROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.user_id = u.id AND o.total > 500\n);\n\n-- Subquery trong FROM (derived table)\nSELECT dept, avg_salary\nFROM (\n  SELECT department AS dept, AVG(salary) AS avg_salary\n  FROM employees\n  GROUP BY department\n) AS dept_stats\nWHERE avg_salary > 50000;\n\n-- Subquery trong SELECT\nSELECT name,\n  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count\nFROM users u;"
        }
      ]
    },
    {
      "id": "db-view",
      "title": "VIEW (Bảng ảo)",
      "description": "VIEW là truy vấn được lưu lại thành bảng ảo. Không lưu data thật, chạy query mỗi lần truy cập. Materialized View (PostgreSQL) lưu kết quả, cần REFRESH. Dùng để đơn giản hóa query phức tạp.",
      "exampleText": "View giống alias cho query dài. Materialized View giống cache cho query chậm.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "-- Tạo View\nCREATE VIEW active_users AS\nSELECT id, name, email, created_at\nFROM users\nWHERE is_active = true;\n\n-- Sử dụng như bảng thường\nSELECT * FROM active_users WHERE name LIKE 'A%';\n\n-- View phức tạp (gộp nhiều bảng)\nCREATE VIEW order_summary AS\nSELECT\n  u.name AS customer,\n  COUNT(o.id) AS total_orders,\n  SUM(o.total) AS total_spent,\n  MAX(o.created_at) AS last_order\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id, u.name;\n\n-- Materialized View (PostgreSQL)\nCREATE MATERIALIZED VIEW monthly_revenue AS\nSELECT\n  DATE_TRUNC('month', created_at) AS month,\n  SUM(total) AS revenue,\n  COUNT(*) AS order_count\nFROM orders\nGROUP BY DATE_TRUNC('month', created_at);\n\n-- Cập nhật data\nREFRESH MATERIALIZED VIEW monthly_revenue;\n\n-- Xóa view\nDROP VIEW IF EXISTS active_users;\nDROP MATERIALIZED VIEW IF EXISTS monthly_revenue;"
        }
      ]
    },
    {
      "id": "db-cte",
      "title": "CTE (Common Table Expression)",
      "description": "CTE dùng WITH...AS tạo bảng tạm (chỉ tồn tại trong query đó). Dễ đọc hơn subquery. Recursive CTE cho tree/hierarchy data. Có thể chain nhiều CTE.",
      "exampleText": "CTE giúp chia query phức tạp thành các bước nhỏ, dễ hiểu.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "-- CTE cơ bản\nWITH high_value_customers AS (\n  SELECT user_id, SUM(total) AS total_spent\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(total) > 10000\n)\nSELECT u.name, u.email, hvc.total_spent\nFROM users u\nJOIN high_value_customers hvc ON u.id = hvc.user_id\nORDER BY hvc.total_spent DESC;\n\n-- Multiple CTEs\nWITH\n  monthly_sales AS (\n    SELECT DATE_TRUNC('month', created_at) AS month,\n           SUM(total) AS revenue\n    FROM orders\n    GROUP BY 1\n  ),\n  avg_revenue AS (\n    SELECT AVG(revenue) AS avg_rev FROM monthly_sales\n  )\nSELECT month, revenue,\n  CASE WHEN revenue > (SELECT avg_rev FROM avg_revenue)\n    THEN 'Above Average' ELSE 'Below Average'\n  END AS performance\nFROM monthly_sales;\n\n-- Recursive CTE (tree structure)\nWITH RECURSIVE category_tree AS (\n  -- Base case\n  SELECT id, name, parent_id, 0 AS depth\n  FROM categories\n  WHERE parent_id IS NULL\n\n  UNION ALL\n\n  -- Recursive case\n  SELECT c.id, c.name, c.parent_id, ct.depth + 1\n  FROM categories c\n  JOIN category_tree ct ON c.parent_id = ct.id\n)\nSELECT * FROM category_tree ORDER BY depth, name;"
        }
      ]
    },
    {
      "id": "db-window-functions",
      "title": "Window Functions",
      "description": "Window functions tính toán trên tập rows liên quan mà KHÔNG gộp rows (khác GROUP BY). OVER() định nghĩa window. PARTITION BY chia nhóm. ORDER BY sắp xếp. ROW_NUMBER, RANK, DENSE_RANK đánh số. LEAD/LAG truy cập row trước/sau.",
      "exampleText": "Window functions mạnh hơn GROUP BY vì giữ nguyên từng row.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "-- ROW_NUMBER - Đánh số thứ tự\nSELECT name, department, salary,\n  ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank\nFROM employees;\n\n-- RANK trong mỗi phòng ban\nSELECT name, department, salary,\n  RANK() OVER (\n    PARTITION BY department\n    ORDER BY salary DESC\n  ) AS dept_rank\nFROM employees;\n\n-- ROW_NUMBER vs RANK vs DENSE_RANK\n-- ROW_NUMBER: 1, 2, 3, 4 (luôn khác nhau)\n-- RANK:       1, 2, 2, 4 (bỏ qua số sau tie)\n-- DENSE_RANK: 1, 2, 2, 3 (không bỏ qua)\n\n-- LEAD / LAG (truy cập row kế tiếp / trước)\nSELECT month, revenue,\n  LAG(revenue, 1) OVER (ORDER BY month) AS prev_month,\n  revenue - LAG(revenue, 1) OVER (ORDER BY month) AS growth\nFROM monthly_revenue;\n\n-- SUM / AVG running total\nSELECT date, amount,\n  SUM(amount) OVER (ORDER BY date) AS running_total,\n  AVG(amount) OVER (\n    ORDER BY date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_7d\nFROM daily_sales;\n\n-- Top N mỗi nhóm\nWITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER (\n    PARTITION BY department ORDER BY salary DESC\n  ) AS rn\n  FROM employees\n)\nSELECT * FROM ranked WHERE rn <= 3;"
        }
      ]
    },
    {
      "id": "db-redis",
      "title": "Redis Cơ bản",
      "description": "Redis là in-memory key-value store, cực nhanh. Dùng cho cache, session, pub/sub, rate limiting, leaderboard. Hỗ trợ nhiều data types: String, Hash, List, Set, Sorted Set. Data trong RAM nên nhanh nhưng giới hạn dung lượng.",
      "exampleText": "Redis phổ biến cho caching API responses, session storage, real-time features.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "# String (key-value đơn giản)\nSET user:1:name \"An Nguyễn\"\nGET user:1:name            # \"An Nguyễn\"\nSETEX session:abc 3600 \"{...}\"  # Expire sau 1h\nTTL session:abc             # Thời gian còn lại (giây)\n\n# Hash (object)\nHSET user:1 name \"An\" age 25 email \"an@mail.com\"\nHGET user:1 name           # \"An\"\nHGETALL user:1             # Tất cả fields\nHINCRBY user:1 age 1       # age = 26\n\n# List (queue/stack)\nLPUSH queue:emails \"email1\" \"email2\"\nRPOP queue:emails           # \"email1\" (FIFO)\nLRANGE queue:emails 0 -1    # Xem tất cả\n\n# Set (unique values)\nSADD tags:post:1 \"nodejs\" \"typescript\" \"api\"\nSMEMBERS tags:post:1       # Tất cả members\nSISMEMBER tags:post:1 \"nodejs\"  # true\n\n# Sorted Set (leaderboard)\nZADD leaderboard 100 \"player1\" 200 \"player2\" 150 \"player3\"\nZREVRANGE leaderboard 0 2 WITHSCORES  # Top 3\nZRANK leaderboard \"player1\"            # Xếp hạng\n\n# Node.js với ioredis\nimport Redis from 'ioredis';\nconst redis = new Redis();\n\n// Cache pattern\nasync function getUser(id) {\n  const cached = await redis.get(`user:${id}`);\n  if (cached) return JSON.parse(cached);\n\n  const user = await db.findUser(id);\n  await redis.setex(`user:${id}`, 300, JSON.stringify(user));\n  return user;\n}"
        }
      ]
    }
  ]
},
  {
    "label": "notes-db",
    "title": "Ghi Chú Từ Khóa Học",
    "cards": [
      {
        "id": "fullstack-nodejs-08-database-note-md",
        "title": "📝 Ngôn ngữ SQL",
        "description": "Ngôn ngữ truy vấn SQL. Kiểu dữ liệu. 1. Number",
        "exampleText": "# Ngôn ngữ truy vấn SQL\r\n\r\n## Kiểu dữ liệu\r\n\r\n1. Number\r\n\r\n- integer\r\n- bigint\r\n- double\r\n- smallint\r\n\r\n2. String\r\n\r\n- charactor varying (varchar)\r\n- charactor (char)\r\n- text\r\n\r\n3. DateTime\r\n\r\n- date\r\n- timestamp\r\n- time\r\n\r\n4. Logic\r\n\r\n- boolean\r\n\r\n## Toán tử\r\n\r\n```\r\n>, <, >=, <=, =, !=, <>, IS, LIKE, ILIKE, IN, BETWEEN, EXISTS\r\n```\r\n\r\n```\r\nAND, OR, NOT\r\n```\r\n\r\nLưu ý: Giá trị null phải so sánh bằng toán tử IS\r\n\r\nVí dụ: updated_at IS NOT NULL\r\n\r\n## Mô hình quan hệ\r\n",
        "codeBlocks": []
      }
    ]
  }
];
