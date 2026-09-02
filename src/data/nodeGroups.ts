import type { KnowledgeGroup } from "../types/knowledge";

export const nodeGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "Node.js cơ bản & Runtime",
    cards: [
      {
        id: "node-intro",
        title: "Node.js là gì",
        description: "Node.js là runtime environment chạy JavaScript ngoài trình duyệt, dựa trên V8 engine của Chrome. Hỗ trợ I/O bất đồng bộ (non-blocking), event-driven, single-threaded. Dùng để xây dựng server, API, CLI tools, microservices.",
        exampleText: "Kiểm tra phiên bản: node -v. Chạy file: node index.js. REPL: gõ node.",
        codeBlocks: [
          { title: "Hello World", code: "// index.js\nconsole.log('Hello from Node.js!');\nconsole.log(process.version);   // v20.x.x\nconsole.log(process.platform);  // win32, linux, darwin\nconsole.log(process.cwd());     // Thư mục hiện tại\nconsole.log(process.argv);      // Tham số CLI\nconsole.log(process.env.NODE_ENV); // Biến môi trường" }
        ]
      },
      {
        id: "node-event-loop",
        title: "Event Loop & Non-blocking I/O",
        description: "Node.js xử lý mọi thứ trên 1 thread duy nhất nhưng dùng event loop để xử lý I/O bất đồng bộ. Khi gọi I/O (đọc file, query DB), Node.js giao cho OS/thread pool xử lý, tiếp tục chạy code khác, khi xong thì callback được gọi.",
        exampleText: "Không bao giờ block event loop bằng tính toán nặng! Dùng Worker Threads cho CPU-intensive tasks.",
        codeBlocks: [
          { title: "Minh họa", code: "console.log('1: Bắt đầu');\n\nsetTimeout(() => {\n  console.log('2: Timeout (async)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3: Promise (microtask)');\n});\n\nconsole.log('4: Kết thúc');\n\n// Output: 1 → 4 → 3 → 2\n// Microtask (Promise) chạy trước Macrotask (setTimeout)" }
        ]
      },
      {
        id: "node-modules",
        title: "Module System (CommonJS & ESM)",
        description: "CommonJS: dùng require() và module.exports (mặc định Node.js). ES Modules: dùng import/export (cần \"type\": \"module\" trong package.json hoặc đuôi .mjs). ESM là chuẩn hiện đại, nên dùng cho project mới.",
        exampleText: null,
        codeBlocks: [
          { title: "CommonJS", code: "// math.js\nconst add = (a, b) => a + b;\nconst subtract = (a, b) => a - b;\nmodule.exports = { add, subtract };\n\n// app.js\nconst { add } = require('./math');\nconsole.log(add(2, 3)); // 5" },
          { title: "ES Modules", code: "// math.mjs (hoặc \"type\": \"module\" trong package.json)\nexport const add = (a, b) => a + b;\nexport default function multiply(a, b) { return a * b; }\n\n// app.mjs\nimport multiply, { add } from './math.mjs';\n\n// Dynamic import (lazy load)\nconst { readFile } = await import('fs/promises');" }
        ]
      },
      {
        id: "node-npm",
        title: "npm & package.json",
        description: "npm quản lý thư viện. package.json chứa metadata, scripts, dependencies. dependencies cho production, devDependencies cho dev. package-lock.json lock chính xác version.",
        exampleText: null,
        codeBlocks: [
          { title: "Lệnh thường dùng", code: "npm init -y              # Tạo package.json\nnpm install express      # Cài dependency (--save mặc định)\nnpm install -D nodemon   # Cài devDependency\nnpm uninstall express    # Gỡ package\nnpm update               # Cập nhật packages\nnpm run dev              # Chạy script 'dev'\nnpm list --depth=0       # Xem packages gốc\nnpm audit                # Kiểm tra bảo mật\nnpm ci                   # Cài từ lock file (CI/CD)" },
          { title: "package.json", code: "{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"start\": \"node dist/index.js\",\n    \"dev\": \"nodemon src/index.ts\",\n    \"build\": \"tsc\",\n    \"test\": \"vitest\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  },\n  \"devDependencies\": {\n    \"nodemon\": \"^3.0.0\",\n    \"typescript\": \"^5.0.0\"\n  }\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "Built-in Modules",
    cards: [
      {
        id: "node-fs",
        title: "fs (File System)",
        description: "Module fs đọc/ghi file. Nên dùng fs/promises cho async/await (thay vì callback). Hỗ trợ đọc/ghi text, JSON, binary. fs.watch() theo dõi thay đổi file.",
        exampleText: null,
        codeBlocks: [
          { title: "Đọc & Ghi", code: "import { readFile, writeFile, readdir, mkdir, stat, unlink } from 'fs/promises';\n\n// Đọc file\nconst data = await readFile('./data.json', 'utf-8');\nconst json = JSON.parse(data);\n\n// Ghi file\nawait writeFile('./output.txt', 'Hello Node!', 'utf-8');\n\n// Ghi JSON\nawait writeFile('./data.json', JSON.stringify(obj, null, 2));\n\n// Kiểm tra file tồn tại\nimport { existsSync } from 'fs';\nif (existsSync('./config.json')) { /* ... */ }\n\n// Liệt kê thư mục\nconst files = await readdir('./src');\n\n// Tạo thư mục (recursive)\nawait mkdir('./uploads/images', { recursive: true });\n\n// Xóa file\nawait unlink('./temp.txt');" }
        ]
      },
      {
        id: "node-path",
        title: "path & url",
        description: "Module path xử lý đường dẫn an toàn (cross-platform). Luôn dùng path.join() thay vì nối string. __dirname và __filename chỉ có trong CommonJS, ESM dùng import.meta.url.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import path from 'path';\nimport { fileURLToPath } from 'url';\n\npath.join('/users', 'an', 'docs');     // /users/an/docs\npath.resolve('src', 'index.js');       // Đường dẫn tuyệt đối\npath.extname('file.txt');              // .txt\npath.basename('/a/b/file.txt');        // file.txt\npath.dirname('/a/b/file.txt');         // /a/b\npath.parse('/a/b/file.txt');           // { root, dir, base, ext, name }\n\n// ESM: thay thế __dirname\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);" }
        ]
      },
      {
        id: "node-streams",
        title: "Streams & Buffer",
        description: "Streams xử lý data theo từng chunk (không load hết vào RAM). 4 loại: Readable, Writable, Duplex, Transform. Buffer chứa binary data. Dùng streams cho file lớn, upload/download, video...",
        exampleText: "Nếu file 2GB, readFile() sẽ dùng 2GB RAM. Stream chỉ dùng vài MB.",
        codeBlocks: [
          { title: "Ví dụ", code: "import { createReadStream, createWriteStream } from 'fs';\nimport { pipeline } from 'stream/promises';\nimport { createGzip } from 'zlib';\n\n// Đọc file lớn từng chunk\nconst stream = createReadStream('./big-file.csv', 'utf-8');\nstream.on('data', (chunk) => console.log(chunk.length));\nstream.on('end', () => console.log('Done'));\n\n// Pipe: đọc → nén → ghi\nawait pipeline(\n  createReadStream('./input.txt'),\n  createGzip(),\n  createWriteStream('./output.txt.gz')\n);\n\n// Buffer\nconst buf = Buffer.from('Hello', 'utf-8');\nconsole.log(buf.toString('base64')); // SGVsbG8=" }
        ]
      },
      {
        id: "node-events",
        title: "EventEmitter",
        description: "Node.js dựa trên event-driven architecture. EventEmitter cho phép tạo và lắng nghe custom events. Nhiều module built-in kế thừa từ EventEmitter (http, stream, fs...).",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import { EventEmitter } from 'events';\n\nclass OrderService extends EventEmitter {\n  create(order) {\n    // ... save to DB\n    this.emit('order:created', order);\n  }\n}\n\nconst service = new OrderService();\n\n// Đăng ký listeners\nservice.on('order:created', (order) => {\n  console.log('Send email:', order.email);\n});\n\nservice.on('order:created', (order) => {\n  console.log('Update inventory:', order.items);\n});\n\nservice.create({ id: 1, email: 'an@mail.com', items: ['A'] });\n// on: lắng nghe nhiều lần\n// once: lắng nghe 1 lần\n// off / removeListener: bỏ listener" }
        ]
      },
      {
        id: "node-crypto",
        title: "crypto (Mã hóa)",
        description: "Module crypto cung cấp hash, encrypt/decrypt, random bytes. Dùng cho hash password, tạo token, mã hóa dữ liệu. Trong thực tế, hash password nên dùng bcrypt (chậm hơn = an toàn hơn).",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import crypto from 'crypto';\n\n// Hash (1 chiều, không giải mã)\nconst hash = crypto.createHash('sha256')\n  .update('password123')\n  .digest('hex');\n\n// Random bytes (tạo token)\nconst token = crypto.randomBytes(32).toString('hex');\n\n// UUID\nconst id = crypto.randomUUID();\n\n// Trong thực tế: dùng bcrypt cho password\nimport bcrypt from 'bcrypt';\nconst hashed = await bcrypt.hash('password', 10);\nconst match = await bcrypt.compare('password', hashed);" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "HTTP Server & Express.js",
    cards: [
      {
        id: "node-http",
        title: "HTTP Server cơ bản",
        description: "Module http tạo server HTTP không cần framework. Thích hợp học nền tảng. Thực tế dùng Express hoặc framework khác vì routing, middleware... tiện hơn nhiều.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import http from 'http';\n\nconst server = http.createServer((req, res) => {\n  if (req.method === 'GET' && req.url === '/api/hello') {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ message: 'Hello!' }));\n  } else {\n    res.writeHead(404);\n    res.end('Not Found');\n  }\n});\n\nserver.listen(3000, () => {\n  console.log('Server on http://localhost:3000');\n});" }
        ]
      },
      {
        id: "node-express",
        title: "Express.js Setup & Routing",
        description: "Express là framework web phổ biến nhất cho Node.js. Cung cấp routing, middleware, request/response handling. Nhẹ, linh hoạt, hệ sinh thái lớn. NestJS, Adonis.js đều xây trên Express.",
        exampleText: "Cài: npm install express. Thêm nodemon cho dev: npm install -D nodemon.",
        codeBlocks: [
          { title: "Setup cơ bản", code: "import express from 'express';\nimport cors from 'cors';\n\nconst app = express();\n\n// Middleware phổ biến\napp.use(cors());            // Cho phép cross-origin\napp.use(express.json());    // Parse JSON body\napp.use(express.urlencoded({ extended: true })); // Parse form data\napp.use(express.static('public')); // Serve static files\n\napp.listen(3000, () => console.log('Server on :3000'));" },
          { title: "CRUD Routes", code: "// GET - Lấy danh sách\napp.get('/api/users', (req, res) => {\n  res.json(users);\n});\n\n// GET - Lấy theo ID\napp.get('/api/users/:id', (req, res) => {\n  const user = users.find(u => u.id === req.params.id);\n  if (!user) return res.status(404).json({ error: 'Not found' });\n  res.json(user);\n});\n\n// POST - Tạo mới\napp.post('/api/users', (req, res) => {\n  const user = { id: Date.now().toString(), ...req.body };\n  users.push(user);\n  res.status(201).json(user);\n});\n\n// PUT - Cập nhật toàn bộ\napp.put('/api/users/:id', (req, res) => {\n  const index = users.findIndex(u => u.id === req.params.id);\n  if (index === -1) return res.status(404).json({ error: 'Not found' });\n  users[index] = { ...users[index], ...req.body };\n  res.json(users[index]);\n});\n\n// DELETE - Xóa\napp.delete('/api/users/:id', (req, res) => {\n  users = users.filter(u => u.id !== req.params.id);\n  res.status(204).end();\n});" }
        ]
      },
      {
        id: "node-express-router",
        title: "Express Router & Tách file",
        description: "Router cho phép tách routes ra file riêng theo resource. Giữ code sạch, dễ quản lý. Mỗi resource (users, products, orders) có router riêng.",
        exampleText: null,
        codeBlocks: [
          { title: "Tách router", code: "// routes/users.js\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.get('/', (req, res) => { /* list users */ });\nrouter.get('/:id', (req, res) => { /* get user */ });\nrouter.post('/', (req, res) => { /* create user */ });\nrouter.put('/:id', (req, res) => { /* update user */ });\nrouter.delete('/:id', (req, res) => { /* delete user */ });\n\nexport default router;\n\n// app.js\nimport usersRouter from './routes/users.js';\nimport productsRouter from './routes/products.js';\n\napp.use('/api/users', usersRouter);\napp.use('/api/products', productsRouter);" }
        ]
      },
      {
        id: "node-middleware",
        title: "Middleware",
        description: "Middleware là function (req, res, next) chạy giữa request và response. next() chuyển sang middleware tiếp. Thứ tự quan trọng (chạy từ trên xuống). Dùng cho logging, auth, validation, error handling.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// Logger\nconst logger = (req, res, next) => {\n  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);\n  next();\n};\n\n// Auth\nconst auth = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid token' });\n  }\n};\n\n// Validate\nconst validate = (schema) => (req, res, next) => {\n  const { error } = schema.validate(req.body);\n  if (error) return res.status(400).json({ error: error.message });\n  next();\n};\n\napp.use(logger);                    // Tất cả routes\napp.get('/api/profile', auth, handler); // Chỉ route này\napp.post('/api/users', validate(userSchema), handler);" }
        ]
      },
      {
        id: "node-query-params",
        title: "Query, Params & Body",
        description: "req.params: URL params (/users/:id). req.query: query string (?page=1&limit=10). req.body: dữ liệu gửi lên (POST/PUT). Cần express.json() middleware để parse body.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// Params: /api/users/123\napp.get('/api/users/:id', (req, res) => {\n  console.log(req.params.id); // '123'\n});\n\n// Query: /api/users?page=2&limit=10&search=an\napp.get('/api/users', (req, res) => {\n  const { page = 1, limit = 10, search = '' } = req.query;\n  // Phân trang, tìm kiếm...\n});\n\n// Body: POST /api/users { \"name\": \"An\" }\napp.post('/api/users', (req, res) => {\n  const { name, email } = req.body;\n});\n\n// Headers\napp.get('/api/data', (req, res) => {\n  const token = req.headers.authorization;\n  const contentType = req.headers['content-type'];\n});" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "Async, Error Handling & Env",
    cards: [
      {
        id: "node-async",
        title: "Async/Await & Promise",
        description: "Async/await giúp viết code bất đồng bộ như đồng bộ. Luôn try/catch khi await. Promise.all() chạy song song, Promise.allSettled() chạy tất cả kể cả có lỗi, Promise.race() lấy kết quả nhanh nhất.",
        exampleText: null,
        codeBlocks: [
          { title: "Patterns", code: "// Sequential (tuần tự)\nconst user = await getUser(id);\nconst posts = await getPosts(user.id);\n\n// Parallel (song song - nhanh hơn!)\nconst [user, products, orders] = await Promise.all([\n  getUser(id),\n  getProducts(),\n  getOrders(id),\n]);\n\n// allSettled (không throw khi 1 cái lỗi)\nconst results = await Promise.allSettled([\n  fetchAPI1(), fetchAPI2(), fetchAPI3()\n]);\nresults.forEach(r => {\n  if (r.status === 'fulfilled') console.log(r.value);\n  else console.log('Error:', r.reason);\n});\n\n// Retry pattern\nasync function fetchWithRetry(url, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try { return await fetch(url); }\n    catch (err) { if (i === retries - 1) throw err; }\n  }\n}" }
        ]
      },
      {
        id: "node-error-handling",
        title: "Error Handling trong Express",
        description: "Express dùng middleware 4 tham số (err, req, res, next) để xử lý lỗi. Đặt cuối cùng. Dùng next(err) để chuyển lỗi. Async route cần wrap try/catch hoặc dùng express-async-errors.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// Tạo custom error class\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\n// Route handler\napp.get('/api/users/:id', async (req, res, next) => {\n  try {\n    const user = await User.findById(req.params.id);\n    if (!user) throw new AppError('User not found', 404);\n    res.json(user);\n  } catch (err) {\n    next(err); // Chuyển đến error handler\n  }\n});\n\n// Error handler (PHẢI có 4 params)\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    error: err.message,\n    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),\n  });\n});" }
        ]
      },
      {
        id: "node-env",
        title: "Environment Variables & dotenv",
        description: "Biến môi trường lưu cấu hình nhạy cảm. Truy cập qua process.env. Dùng dotenv để load từ .env file. Không bao giờ commit .env lên git!",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// .env\nPORT=3000\nNODE_ENV=development\nDATABASE_URL=mongodb://localhost/mydb\nJWT_SECRET=super_secret_key_123\nJWT_EXPIRES_IN=7d\n\n// Cài: npm install dotenv\n// app.js\nimport 'dotenv/config';\n\nconst port = process.env.PORT || 3000;\nconst dbUrl = process.env.DATABASE_URL;\n\n// Validate env (nên làm)\nconst required = ['DATABASE_URL', 'JWT_SECRET'];\nfor (const key of required) {\n  if (!process.env[key]) {\n    throw new Error(`Missing env: ${key}`);\n  }\n}\n\n// .gitignore → thêm .env" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 5",
    title: "Database & Authentication",
    cards: [
      {
        id: "node-mongoose",
        title: "MongoDB & Mongoose",
        description: "Mongoose là ODM (Object Data Modeling) cho MongoDB. Định nghĩa Schema → Model → CRUD. Hỗ trợ validation, middleware (pre/post hooks), populate (join), virtual fields.",
        exampleText: "Cài: npm install mongoose.",
        codeBlocks: [
          { title: "Schema & Model", code: "import mongoose from 'mongoose';\n\n// Kết nối\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// Schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true, trim: true },\n  email: { type: String, required: true, unique: true, lowercase: true },\n  password: { type: String, required: true, minlength: 6, select: false },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' },\n  createdAt: { type: Date, default: Date.now },\n});\n\n// Middleware (hash password trước khi lưu)\nuserSchema.pre('save', async function(next) {\n  if (!this.isModified('password')) return next();\n  this.password = await bcrypt.hash(this.password, 10);\n});\n\nconst User = mongoose.model('User', userSchema);" },
          { title: "CRUD", code: "// Create\nconst user = await User.create({ name: 'An', email: 'an@mail.com', password: '123456' });\n\n// Read\nconst all = await User.find({ role: 'user' }).sort('-createdAt').limit(10);\nconst one = await User.findById(id);\nconst byEmail = await User.findOne({ email: 'an@mail.com' }).select('+password');\n\n// Update\nawait User.findByIdAndUpdate(id, { name: 'An mới' }, { new: true, runValidators: true });\n\n// Delete\nawait User.findByIdAndDelete(id);\n\n// Pagination\nconst page = 1, limit = 10;\nconst users = await User.find()\n  .skip((page - 1) * limit)\n  .limit(limit);\nconst total = await User.countDocuments();" }
        ]
      },
      {
        id: "node-prisma",
        title: "Prisma (SQL/NoSQL ORM)",
        description: "Prisma là ORM hiện đại, type-safe. Định nghĩa schema trong file .prisma → generate client → query với autocomplete đầy đủ. Hỗ trợ PostgreSQL, MySQL, SQLite, MongoDB.",
        exampleText: "Cài: npm install prisma @prisma/client. Init: npx prisma init.",
        codeBlocks: [
          { title: "Schema & Query", code: "// prisma/schema.prisma\nmodel User {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String   @unique\n  posts     Post[]   // Relation\n  createdAt DateTime @default(now())\n}\n\n// CRUD\nimport { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nconst user = await prisma.user.create({ data: { name: 'An', email: 'an@mail.com' } });\nconst users = await prisma.user.findMany({ where: { name: { contains: 'An' } }, include: { posts: true } });\nawait prisma.user.update({ where: { id: 1 }, data: { name: 'An mới' } });\nawait prisma.user.delete({ where: { id: 1 } });\n\n// CLI\n// npx prisma migrate dev --name init\n// npx prisma studio  (GUI xem data)" }
        ]
      },
      {
        id: "node-jwt",
        title: "JWT Authentication",
        description: "JSON Web Token (JWT) dùng cho stateless auth. Flow: Login → server tạo JWT → client lưu (cookie/header) → gửi kèm mỗi request → server verify. Gồm 3 phần: header.payload.signature.",
        exampleText: "Cài: npm install jsonwebtoken. Luôn dùng HttpOnly cookie thay localStorage (an toàn hơn XSS).",
        codeBlocks: [
          { title: "Tạo & Verify", code: "import jwt from 'jsonwebtoken';\n\n// Tạo token\nconst token = jwt.sign(\n  { userId: user.id, role: user.role },  // Payload\n  process.env.JWT_SECRET,                 // Secret key\n  { expiresIn: '7d' }                    // Options\n);\n\n// Gửi qua cookie (an toàn nhất)\nres.cookie('token', token, {\n  httpOnly: true,   // JS không truy cập được\n  secure: true,     // Chỉ HTTPS\n  sameSite: 'strict',\n  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày\n});" },
          { title: "Auth Middleware", code: "const protect = async (req, res, next) => {\n  // Lấy token từ cookie hoặc header\n  const token = req.cookies.token ||\n    req.headers.authorization?.split(' ')[1];\n\n  if (!token) return res.status(401).json({ error: 'Not logged in' });\n\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = await User.findById(decoded.userId);\n    if (!req.user) return res.status(401).json({ error: 'User not found' });\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid token' });\n  }\n};\n\n// Phân quyền\nconst restrictTo = (...roles) => (req, res, next) => {\n  if (!roles.includes(req.user.role)) {\n    return res.status(403).json({ error: 'No permission' });\n  }\n  next();\n};\n\napp.delete('/api/users/:id', protect, restrictTo('admin'), deleteUser);" }
        ]
      },
      {
        id: "node-validation",
        title: "Request Validation (Joi / Zod)",
        description: "Không bao giờ tin dữ liệu từ client! Validate mọi input trước khi xử lý. Joi và Zod là 2 thư viện phổ biến nhất. Zod tích hợp TypeScript tốt hơn.",
        exampleText: null,
        codeBlocks: [
          { title: "Zod", code: "import { z } from 'zod';\n\n// Schema\nconst createUserSchema = z.object({\n  name: z.string().min(2).max(50),\n  email: z.string().email(),\n  password: z.string().min(6),\n  age: z.number().int().min(18).optional(),\n});\n\n// Middleware\nconst validate = (schema) => (req, res, next) => {\n  try {\n    req.body = schema.parse(req.body); // Validate + parse\n    next();\n  } catch (err) {\n    res.status(400).json({\n      error: 'Validation failed',\n      details: err.errors,\n    });\n  }\n};\n\napp.post('/api/users', validate(createUserSchema), createUser);" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 6",
    title: "Mẹo & Best Practices",
    cards: [
      {
        id: "node-project-structure",
        title: "Cấu trúc project chuẩn",
        description: "Tách code theo layers: routes, controllers, services, models. Mỗi layer có trách nhiệm riêng. Controller chỉ xử lý request/response, service chứa business logic, model quản lý database.",
        exampleText: null,
        codeBlocks: [
          { title: "Cấu trúc", code: "src/\n ┣ config/           ← DB connection, env config\n ┃ ┗ database.js\n ┣ middleware/        ← Auth, logger, validation\n ┃ ┣ auth.js\n ┃ ┗ validate.js\n ┣ models/            ← Database schemas\n ┃ ┗ User.js\n ┣ routes/            ← Route definitions\n ┃ ┗ users.js\n ┣ controllers/       ← Request handlers\n ┃ ┗ userController.js\n ┣ services/          ← Business logic\n ┃ ┗ userService.js\n ┣ utils/             ← Helper functions\n ┃ ┗ AppError.js\n ┗ app.js             ← Express setup\n.env\npackage.json" }
        ]
      },
      {
        id: "node-security",
        title: "Bảo mật cơ bản",
        description: "Checklist bảo mật cho mọi Node.js API: rate limiting, helmet headers, CORS, input sanitization, password hashing, HTTPS.",
        exampleText: null,
        codeBlocks: [
          { title: "Setup bảo mật", code: "import helmet from 'helmet';       // Security headers\nimport rateLimit from 'express-rate-limit';\nimport mongoSanitize from 'express-mongo-sanitize';\nimport cors from 'cors';\n\n// Security headers\napp.use(helmet());\n\n// CORS\napp.use(cors({ origin: 'https://myapp.com', credentials: true }));\n\n// Rate limiting (chống brute-force)\napp.use('/api', rateLimit({\n  windowMs: 15 * 60 * 1000,  // 15 phút\n  max: 100,                   // Max 100 requests\n  message: 'Too many requests',\n}));\n\n// Chống NoSQL injection\napp.use(mongoSanitize());\n\n// Giới hạn body size\napp.use(express.json({ limit: '10kb' }));" }
        ]
      },
      {
        id: "node-tips",
        title: "Mẹo hay",
        description: "Tổng hợp tips thực tế khi làm Node.js.",
        exampleText: null,
        codeBlocks: [
          { title: "Tips", code: "// 1. Luôn dùng async/await + try/catch\n// ❌ callback hell\n// ✅ const data = await fetchData();\n\n// 2. Dùng process.env cho mọi config\n// ❌ const port = 3000;\n// ✅ const port = process.env.PORT || 3000;\n\n// 3. Graceful shutdown\nprocess.on('SIGTERM', async () => {\n  await mongoose.disconnect();\n  server.close(() => process.exit(0));\n});\n\n// 4. Dùng TypeScript cho project lớn\n// 5. npm ci (không phải npm install) cho CI/CD\n// 6. Luôn có .gitignore: node_modules, .env\n// 7. Dùng nodemon cho dev, pm2 cho production\n// 8. Logging: dùng winston/pino thay console.log" }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 4",
  "title": "Express.js & Biến môi trường",
  "cards": [
    {
      "id": "node-express-basic",
      "title": "Khởi tạo Express.js",
      "description": "Express.js là framework phổ biến nhất của Node.js giúp tạo Web Server và API một cách nhanh chóng và dễ dàng hơn rất nhiều so với module 'http' mặc định.",
      "exampleText": "Cần cài đặt qua npm: npm install express",
      "codeBlocks": [
        {
          "title": "Cú pháp",
          "code": "const express = require('express');\nconst app = express();"
        },
        {
          "title": "Ví dụ",
          "code": "const express = require('express');\nconst app = express();\nconst port = 3000;\n\n// Định nghĩa Route GET\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\n// Lắng nghe cổng\napp.listen(port, () => {\n  console.log(`Server chạy tại http://localhost:${port}`);\n});"
        }
      ]
    },
    {
      "id": "node-process-env",
      "title": "Biến môi trường (process.env)",
      "description": "Trong thực tế, các thông tin nhạy cảm như Mật khẩu Database, API Key, hoặc Port không bao giờ được hardcode (viết cứng) trong code mà sẽ được đọc từ biến môi trường (thường lưu ở file .env).",
      "exampleText": "Dùng thư viện 'dotenv' để đọc file .env vào process.env.",
      "codeBlocks": [
        {
          "title": "Cú pháp",
          "code": "process.env.TEN_BIEN"
        },
        {
          "title": "Ví dụ",
          "code": "// File .env\n// PORT=8080\n// DB_PASS=secret123\n\nrequire('dotenv').config();\nconst express = require('express');\nconst app = express();\n\n// Đọc biến từ process.env\nconst port = process.env.PORT || 3000;\n\napp.listen(port, () => {\n  console.log(`Server is running on port ${port}`);\n});"
        }
      ]
    }
  ]
}];
