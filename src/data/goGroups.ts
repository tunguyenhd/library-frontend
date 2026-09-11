import type { KnowledgeGroup } from "../types/knowledge";

export const goGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "Go cơ bản & Kiểu dữ liệu",
    cards: [
      {
        id: "go-intro",
        title: "Go là gì",
        description: "Go (Golang) là ngôn ngữ do Google tạo. Biên dịch nhanh, statically typed, garbage collected. Nổi bật: concurrency (goroutines), đơn giản, hiệu suất cao. Dùng cho backend, microservices, CLI tools, DevOps tools (Docker, K8s viết bằng Go).",
        exampleText: null,
        codeBlocks: [
          { title: "Hello World", code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}" },
          { title: "Go CLI", code: "go run main.go       # Chạy trực tiếp\ngo build -o app      # Biên dịch thành binary\ngo mod init myapp    # Tạo module (go.mod)\ngo mod tidy          # Cập nhật dependencies\ngo get github.com/gin-gonic/gin  # Cài package\ngo test ./...        # Chạy tests\ngo test -race ./...  # Chạy tests + phát hiện race condition\ngo fmt ./...         # Format code\ngo vet ./...         # Phân tích lỗi tiềm ẩn" }
        ]
      },
      {
        id: "go-variables",
        title: "Biến & Kiểu dữ liệu",
        description: "Go có: string, int (int8/16/32/64), float64, bool, byte, rune (Unicode char). Khai báo bằng var hoặc := (short). Zero values: string→\"\", int→0, bool→false, pointer→nil. Constants dùng const.",
        exampleText: ":= chỉ dùng trong function. var dùng ở cấp package hoặc function.",
        codeBlocks: [
          { title: "Ví dụ", code: "// var + type\nvar name string = \"An\"\nvar age int = 25\nvar pi float64 = 3.14\n\n// Short declaration (tự suy luận kiểu)\nname := \"An\"      // string\nage := 25          // int\nscore := 9.5       // float64\nactive := true     // bool\n\n// Multiple\nvar x, y int = 10, 20\na, b := \"hello\", 42\n\n// Constants\nconst Pi = 3.14159\nconst (\n    StatusOK    = 200\n    StatusError = 500\n)\n\n// iota (auto increment)\nconst (\n    Sunday = iota  // 0\n    Monday         // 1\n    Tuesday        // 2\n)\n\n// Type conversion (Go không tự convert)\nvar i int = 42\nvar f float64 = float64(i)\nvar s string = fmt.Sprintf(\"%d\", i)" }
        ]
      },
      {
        id: "go-functions",
        title: "Functions",
        description: "Go hỗ trợ multiple return values (phổ biến cho error handling). Named return values, variadic (...), first-class functions. Không có function overloading.",
        exampleText: "Pattern phổ biến: return (value, error). Caller PHẢI check error.",
        codeBlocks: [
          { title: "Cú pháp", code: "// Hàm cơ bản\nfunc add(a, b int) int {\n    return a + b\n}\n\n// Multiple return\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New(\"cannot divide by zero\")\n    }\n    return a / b, nil\n}\n\nresult, err := divide(10, 3)\nif err != nil {\n    log.Fatal(err)\n}\n\n// Named return\nfunc swap(a, b string) (first, second string) {\n    first = b\n    second = a\n    return // naked return\n}\n\n// Variadic\nfunc sum(nums ...int) int {\n    total := 0\n    for _, n := range nums {\n        total += n\n    }\n    return total\n}\nsum(1, 2, 3, 4) // 10\n\n// Function as value\nadd := func(a, b int) int { return a + b }\nresult := add(3, 4)" }
        ]
      },
      {
        id: "go-control-flow",
        title: "If, For, Switch",
        description: "Go chỉ có for loop (không có while). if có thể khai báo biến (short statement). switch không cần break (tự ngừng). select giống switch nhưng cho channels.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// If (có short statement)\nif x := 10; x > 5 {\n    fmt.Println(\"x > 5\")\n}\n\n// For loop (nhiều dạng)\nfor i := 0; i < 10; i++ { }       // Classic\nfor i < 10 { i++ }                 // While-like\nfor { break }                       // Infinite\n\n// Range (duyệt slice, map, string)\nfor index, value := range slice {\n    fmt.Println(index, value)\n}\n\nfor key, value := range myMap { }\n\n// Switch (không cần break)\nswitch day {\ncase \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\":\n    fmt.Println(\"Weekday\")\ncase \"Sat\", \"Sun\":\n    fmt.Println(\"Weekend\")\ndefault:\n    fmt.Println(\"Unknown\")\n}\n\n// Type switch\nswitch v := x.(type) {\ncase int:    fmt.Println(\"int\", v)\ncase string: fmt.Println(\"string\", v)\n}" }
        ]
      },
      {
        id: "go-slice-map",
        title: "Slice & Map",
        description: "Slice là mảng động. Map là key-value store. Slice dùng make() hoặc literal. append() thêm phần tử. Map check key tồn tại bằng comma-ok idiom. Cả hai đều reference type.",
        exampleText: null,
        codeBlocks: [
          { title: "Slice", code: "// Khai báo\nnums := []int{1, 2, 3}\nnames := make([]string, 0, 10) // len=0, cap=10\n\n// Thao tác\nnums = append(nums, 4, 5)  // [1,2,3,4,5]\nsliced := nums[1:3]        // [2, 3] (shared memory!)\ncopy(dst, src)              // Deep copy\nlen(nums)                   // 5\ncap(nums)                   // Capacity\n\n// Duyệt\nfor i, v := range nums {\n    fmt.Printf(\"%d: %d\\n\", i, v)\n}\n\n// Filter pattern\nvar evens []int\nfor _, n := range nums {\n    if n%2 == 0 {\n        evens = append(evens, n)\n    }\n}" },
          { title: "Map", code: "// Khai báo\nuser := map[string]string{\n    \"name\":  \"An\",\n    \"email\": \"an@mail.com\",\n}\nscores := make(map[string]int)\n\n// CRUD\nuser[\"age\"] = \"25\"       // Create/Update\ndelete(user, \"email\")    // Delete\n\n// Read (comma-ok idiom)\nvalue, ok := user[\"name\"]\nif ok {\n    fmt.Println(value) // \"An\"\n}\n\n// Duyệt (thứ tự KHÔNG đảm bảo)\nfor key, value := range user {\n    fmt.Printf(\"%s: %s\\n\", key, value)\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "Struct, Interface & Pointer",
    cards: [
      {
        id: "go-struct",
        title: "Struct & Methods",
        description: "Struct gom nhóm các field. Go không có class, dùng struct + method. Method gắn vào struct bằng receiver. Tên viết hoa = exported (public), viết thường = unexported (private).",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "type User struct {\n    Name  string `json:\"name\"`   // Exported + JSON tag\n    Email string `json:\"email\"`\n    age   int                    // unexported\n}\n\n// Khởi tạo\nuser := User{Name: \"An\", Email: \"an@mail.com\"}\nuser2 := User{\"An\", \"an@mail.com\", 25} // Theo thứ tự\n\n// Value receiver (không thay đổi gốc)\nfunc (u User) FullInfo() string {\n    return fmt.Sprintf(\"%s <%s>\", u.Name, u.Email)\n}\n\n// Pointer receiver (thay đổi gốc)\nfunc (u *User) SetEmail(email string) {\n    u.Email = email\n}\n\n// Embedding (composition thay vì inheritance)\ntype Admin struct {\n    User         // Embed User\n    Role string\n}\n\nadmin := Admin{User: User{Name: \"An\"}, Role: \"super\"}\nfmt.Println(admin.Name) // Truy cập trực tiếp" }
        ]
      },
      {
        id: "go-interface",
        title: "Interface",
        description: "Interface định nghĩa tập method. Implicit implementation: kiểu nào có đủ methods → tự thỏa interface (không cần implements). Interface rỗng (any) chấp nhận mọi kiểu. Go khuyến khích interface nhỏ.",
        exampleText: "io.Reader (1 method), error (1 method) là ví dụ kinh điển.",
        codeBlocks: [
          { title: "Ví dụ", code: "type Shape interface {\n    Area() float64\n    Perimeter() float64\n}\n\ntype Circle struct { Radius float64 }\ntype Rect struct { W, H float64 }\n\nfunc (c Circle) Area() float64 { return 3.14 * c.Radius * c.Radius }\nfunc (c Circle) Perimeter() float64 { return 2 * 3.14 * c.Radius }\nfunc (r Rect) Area() float64 { return r.W * r.H }\nfunc (r Rect) Perimeter() float64 { return 2 * (r.W + r.H) }\n\n// Cả Circle và Rect thỏa Shape (implicit!)\nfunc printInfo(s Shape) {\n    fmt.Printf(\"Area: %.2f, Perimeter: %.2f\\n\", s.Area(), s.Perimeter())\n}\n\nprintInfo(Circle{5})\nprintInfo(Rect{3, 4})\n\n// Interface phổ biến\ntype Stringer interface { String() string }  // fmt\ntype Reader interface { Read(p []byte) (int, error) } // io\ntype Writer interface { Write(p []byte) (int, error) } // io\ntype error interface { Error() string } // builtin" }
        ]
      },
      {
        id: "go-pointer",
        title: "Pointer",
        description: "Pointer lưu địa chỉ bộ nhớ. & lấy địa chỉ, * truy cập giá trị. Dùng pointer khi: muốn thay đổi giá trị gốc, struct lớn (tránh copy), hoặc cần nil. Go không có pointer arithmetic.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "x := 42\np := &x      // p là pointer đến x\nfmt.Println(*p) // 42 (dereference)\n*p = 100     // Thay đổi x qua pointer\nfmt.Println(x)  // 100\n\n// Pointer trong function\nfunc increment(val *int) {\n    *val++\n}\n\ncount := 0\nincrement(&count)\nfmt.Println(count) // 1\n\n// new() tạo pointer\np := new(int)  // *int, giá trị = 0\n\n// Khi nào dùng pointer receiver?\n// ✅ Method cần thay đổi struct\n// ✅ Struct lớn (tránh copy)\n// ✅ Muốn nhất quán (nếu 1 method dùng pointer, tất cả nên dùng)\n// ❌ Struct nhỏ, read-only → value receiver ok" }
        ]
      },
      {
        id: "go-error-handling",
        title: "Error Handling",
        description: "Go không có try/catch. Lỗi là giá trị (error interface). Function trả về (result, error). Caller PHẢI check error. errors.New(), fmt.Errorf(\"%w\", err) để wrap error. errors.Is(), errors.As() để so sánh.",
        exampleText: "Pattern: if err != nil { return err } — câu code phổ biến nhất trong Go.",
        codeBlocks: [
          { title: "Ví dụ", code: "import (\n    \"errors\"\n    \"fmt\"\n)\n\n// Sentinel errors\nvar (\n    ErrNotFound = errors.New(\"not found\")\n    ErrUnauthorized = errors.New(\"unauthorized\")\n)\n\nfunc findUser(id int) (*User, error) {\n    if id <= 0 {\n        return nil, fmt.Errorf(\"invalid id %d: %w\", id, ErrNotFound)\n    }\n    user := db.Find(id)\n    if user == nil {\n        return nil, ErrNotFound\n    }\n    return user, nil\n}\n\n// Caller\nuser, err := findUser(1)\nif errors.Is(err, ErrNotFound) {\n    // Handle not found\n} else if err != nil {\n    return fmt.Errorf(\"findUser failed: %w\", err) // Wrap & propagate\n}\n\n// Custom error type\ntype ValidationError struct {\n    Field   string\n    Message string\n}\nfunc (e *ValidationError) Error() string {\n    return fmt.Sprintf(\"%s: %s\", e.Field, e.Message)\n}" }
        ]
      },
      {
        id: "go-defer-panic",
        title: "Defer, Panic & Recover",
        description: "defer: lên lịch chạy function khi hàm cha return (LIFO). Dùng cho cleanup: close file, unlock mutex. panic: dừng chương trình (dùng cho lỗi nghiêm trọng). recover: bắt panic (chỉ dùng trong defer).",
        exampleText: "Ưu tiên return error thay vì panic. Panic chỉ cho lỗi không thể recover.",
        codeBlocks: [
          { title: "Ví dụ", code: "// Defer (chạy khi function return)\nfunc readFile(path string) ([]byte, error) {\n    f, err := os.Open(path)\n    if err != nil { return nil, err }\n    defer f.Close() // Luôn đóng file, kể cả khi lỗi\n\n    return io.ReadAll(f)\n}\n\n// Mutex với defer\nvar mu sync.Mutex\nfunc safeIncrement() {\n    mu.Lock()\n    defer mu.Unlock() // Luôn unlock\n    counter++\n}\n\n// Defer chạy theo LIFO\ndefer fmt.Println(\"1\")\ndefer fmt.Println(\"2\")\ndefer fmt.Println(\"3\")\n// Output: 3, 2, 1\n\n// Panic & Recover\nfunc safeDiv(a, b int) (result int, err error) {\n    defer func() {\n        if r := recover(); r != nil {\n            err = fmt.Errorf(\"recovered: %v\", r)\n        }\n    }()\n    return a / b, nil // panic nếu b = 0\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "Concurrency",
    cards: [
      {
        id: "go-goroutine",
        title: "Goroutine",
        description: "Goroutine là lightweight thread (vài KB stack). Tạo bằng go func(). sync.WaitGroup chờ goroutines hoàn thành. Có thể chạy hàng triệu goroutines. QUAN TRỌNG: mỗi goroutine phải có cách kết thúc!",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import \"sync\"\n\n// WaitGroup\nvar wg sync.WaitGroup\n\nfor _, url := range urls {\n    wg.Add(1)\n    go func(u string) {\n        defer wg.Done()\n        resp, err := http.Get(u)\n        if err != nil { return }\n        defer resp.Body.Close()\n        fmt.Println(u, resp.StatusCode)\n    }(url) // Truyền url vào closure!\n}\nwg.Wait() // Chờ tất cả xong\n\n// ⚠️ Common mistake: goroutine leak\n// go func() { for { /* infinite loop without exit */ } }()\n// → Goroutine chạy mãi, chiếm tài nguyên!" }
        ]
      },
      {
        id: "go-channel",
        title: "Channel",
        description: "Channel giao tiếp giữa goroutines. Gửi: ch <- value. Nhận: value := <-ch. Unbuffered block cả 2 bên. Buffered có queue. close(ch) đóng channel. range duyệt cho đến khi đóng.",
        exampleText: "'Do not communicate by sharing memory; share memory by communicating.'",
        codeBlocks: [
          { title: "Ví dụ", code: "// Unbuffered\nch := make(chan string)\ngo func() {\n    ch <- \"Hello\" // Block cho đến khi có receiver\n}()\nmsg := <-ch // Block cho đến khi có sender\n\n// Buffered\nch := make(chan int, 3)\nch <- 1  // Không block (buffer chưa đầy)\nch <- 2\nch <- 3\n// ch <- 4 // Block! Buffer đầy\n\n// Directional channels\nfunc producer(out chan<- int) { out <- 42 }  // Chỉ gửi\nfunc consumer(in <-chan int) { v := <-in }   // Chỉ nhận\n\n// Pattern: Fan-out, Fan-in\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        results <- j * 2\n    }\n}\n\njobs := make(chan int, 100)\nresults := make(chan int, 100)\n\nfor w := 0; w < 3; w++ {\n    go worker(w, jobs, results)\n}" }
        ]
      },
      {
        id: "go-select",
        title: "Select",
        description: "select chờ nhiều channel operations. Giống switch cho channels. default tạo non-blocking. Kết hợp với time.After() cho timeout. context.Done() cho cancellation.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// Select - chờ channel nào sẵn sàng trước\nselect {\ncase msg := <-ch1:\n    fmt.Println(\"ch1:\", msg)\ncase msg := <-ch2:\n    fmt.Println(\"ch2:\", msg)\ncase <-time.After(5 * time.Second):\n    fmt.Println(\"Timeout!\")\n}\n\n// Non-blocking với default\nselect {\ncase msg := <-ch:\n    fmt.Println(msg)\ndefault:\n    fmt.Println(\"No message available\")\n}\n\n// Context cancellation\nctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\ndefer cancel()\n\nfor {\n    select {\n    case <-ctx.Done():\n        fmt.Println(\"Cancelled:\", ctx.Err())\n        return\n    case result := <-resultCh:\n        fmt.Println(result)\n    }\n}" }
        ]
      },
      {
        id: "go-mutex",
        title: "Mutex & Sync",
        description: "sync.Mutex bảo vệ shared data khỏi race condition. Lock() → truy cập → Unlock() (luôn defer Unlock). sync.RWMutex cho phép nhiều reader, 1 writer. sync.Once chạy function đúng 1 lần.",
        exampleText: "go test -race phát hiện race condition. Luôn chạy trong CI/CD.",
        codeBlocks: [
          { title: "Ví dụ", code: "import \"sync\"\n\ntype SafeCounter struct {\n    mu    sync.Mutex\n    count int\n}\n\nfunc (c *SafeCounter) Increment() {\n    c.mu.Lock()\n    defer c.mu.Unlock()\n    c.count++\n}\n\nfunc (c *SafeCounter) Value() int {\n    c.mu.Lock()\n    defer c.mu.Unlock()\n    return c.count\n}\n\n// RWMutex (nhiều reader, 1 writer)\ntype SafeCache struct {\n    mu   sync.RWMutex\n    data map[string]string\n}\n\nfunc (c *SafeCache) Get(key string) string {\n    c.mu.RLock()         // Read lock (nhiều goroutine cùng đọc)\n    defer c.mu.RUnlock()\n    return c.data[key]\n}\n\nfunc (c *SafeCache) Set(key, val string) {\n    c.mu.Lock()          // Write lock (exclusive)\n    defer c.mu.Unlock()\n    c.data[key] = val\n}\n\n// sync.Once (singleton pattern)\nvar once sync.Once\nvar db *Database\nfunc GetDB() *Database {\n    once.Do(func() { db = connectDB() })\n    return db\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "JSON, HTTP Server & Testing",
    cards: [
      {
        id: "go-json",
        title: "JSON & Struct Tags",
        description: "encoding/json cho serialize/deserialize. Struct tags (`json:\"name\"`) map field. json.Marshal() → []byte. json.Unmarshal() → struct. omitempty bỏ field zero-value. - bỏ hoàn toàn.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "type User struct {\n    ID       int    `json:\"id\"`\n    Name     string `json:\"name\"`\n    Email    string `json:\"email\"`\n    Password string `json:\"-\"`          // Không serialize\n    Age      int    `json:\"age,omitempty\"` // Bỏ nếu = 0\n}\n\n// Struct → JSON\nuser := User{ID: 1, Name: \"An\", Email: \"an@mail.com\"}\ndata, _ := json.Marshal(user)\nfmt.Println(string(data))\n// {\"id\":1,\"name\":\"An\",\"email\":\"an@mail.com\"}\n\n// JSON → Struct\nvar u User\njson.Unmarshal([]byte(`{\"id\":1,\"name\":\"An\"}`), &u)\n\n// JSON → map (khi không biết structure)\nvar result map[string]interface{}\njson.Unmarshal(jsonBytes, &result)\n\n// Pretty print\npretty, _ := json.MarshalIndent(user, \"\", \"  \")" }
        ]
      },
      {
        id: "go-context",
        title: "Context",
        description: "context.Context quản lý deadline, cancellation, request-scoped values. LUÔN truyền context làm tham số đầu tiên cho I/O operations. context.WithTimeout, context.WithCancel tạo child context.",
        exampleText: "Quy ước: tham số đầu tiên là ctx context.Context.",
        codeBlocks: [
          { title: "Ví dụ", code: "import \"context\"\n\n// Timeout\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)\ndefer cancel()\n\n// Truyền context vào DB query\nresult, err := db.QueryContext(ctx, \"SELECT * FROM users\")\n\n// Truyền context vào HTTP request\nreq, _ := http.NewRequestWithContext(ctx, \"GET\", url, nil)\nresp, err := http.DefaultClient.Do(req)\n\n// Cancel\nctx, cancel := context.WithCancel(context.Background())\ngo func() {\n    // ... làm gì đó\n    cancel() // Hủy khi xong\n}()\n\n<-ctx.Done() // Chờ cancel\nfmt.Println(ctx.Err()) // context canceled\n\n// Truyền values (dùng cho request-scoped data)\nctx = context.WithValue(ctx, \"userID\", 123)\nuserID := ctx.Value(\"userID\").(int)" }
        ]
      },
      {
        id: "go-http-server",
        title: "HTTP Server & Router",
        description: "net/http có sẵn HTTP server. http.HandleFunc() đăng ký handler. Gin và Chi là 2 router phổ biến nhất. Gin giống Express (middleware, JSON binding, validation).",
        exampleText: null,
        codeBlocks: [
          { title: "net/http", code: "package main\nimport (\n    \"encoding/json\"\n    \"net/http\"\n)\n\nfunc main() {\n    mux := http.NewServeMux()\n\n    mux.HandleFunc(\"GET /api/users\", func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set(\"Content-Type\", \"application/json\")\n        json.NewEncoder(w).Encode(users)\n    })\n\n    mux.HandleFunc(\"GET /api/users/{id}\", func(w http.ResponseWriter, r *http.Request) {\n        id := r.PathValue(\"id\") // Go 1.22+\n        // ...\n    })\n\n    http.ListenAndServe(\":8080\", mux)\n}" },
          { title: "Gin framework", code: "import \"github.com/gin-gonic/gin\"\n\nfunc main() {\n    r := gin.Default() // Logger + Recovery middleware\n\n    r.GET(\"/users\", func(c *gin.Context) {\n        page := c.DefaultQuery(\"page\", \"1\")\n        c.JSON(200, gin.H{\"users\": users, \"page\": page})\n    })\n\n    r.GET(\"/users/:id\", func(c *gin.Context) {\n        id := c.Param(\"id\")\n        c.JSON(200, gin.H{\"id\": id})\n    })\n\n    r.POST(\"/users\", func(c *gin.Context) {\n        var user User\n        if err := c.ShouldBindJSON(&user); err != nil {\n            c.JSON(400, gin.H{\"error\": err.Error()})\n            return\n        }\n        c.JSON(201, user)\n    })\n\n    r.Run(\":8080\")\n}" }
        ]
      },
      {
        id: "go-testing",
        title: "Testing",
        description: "Go có testing package built-in. File test: _test.go. Function test: TestXxx(t *testing.T). Table-driven tests là pattern phổ biến nhất. go test -race phát hiện race condition.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// math_test.go\npackage math\n\nimport \"testing\"\n\n// Basic test\nfunc TestAdd(t *testing.T) {\n    result := Add(2, 3)\n    if result != 5 {\n        t.Errorf(\"Add(2,3) = %d; want 5\", result)\n    }\n}\n\n// Table-driven tests (pattern phổ biến nhất)\nfunc TestAdd_TableDriven(t *testing.T) {\n    tests := []struct {\n        name     string\n        a, b     int\n        expected int\n    }{\n        {\"positive\", 2, 3, 5},\n        {\"negative\", -1, -2, -3},\n        {\"zero\", 0, 0, 0},\n    }\n\n    for _, tt := range tests {\n        t.Run(tt.name, func(t *testing.T) {\n            result := Add(tt.a, tt.b)\n            if result != tt.expected {\n                t.Errorf(\"got %d, want %d\", result, tt.expected)\n            }\n        })\n    }\n}\n\n// Benchmark\nfunc BenchmarkAdd(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        Add(2, 3)\n    }\n}" }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 6",
  "title": "Concurrency & Nâng cao",
  "cards": [
    {
      "id": "go-goroutines",
      "title": "Goroutines (Đa luồng)",
      "description": "Goroutines là tính năng mạnh mẽ nhất của Go, cho phép chạy các hàm đồng thời (concurrently) cực kỳ nhẹ (chỉ tốn vài KB RAM) thay vì tạo Thread nặng nề của hệ điều hành.",
      "exampleText": "Chỉ cần thêm từ khóa 'go' trước một lời gọi hàm.",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "package main\nimport (\n\t\"fmt\"\n\t\"time\"\n)\n\nfunc printNumbers() {\n\tfor i := 1; i <= 5; i++ {\n\t\tfmt.Println(i)\n\t\ttime.Sleep(100 * time.Millisecond)\n\t}\n}\n\nfunc main() {\n\tgo printNumbers() // Chạy ngầm đa luồng\n\tfmt.Println(\"Hàm main vẫn tiếp tục chạy\")\n\ttime.Sleep(1 * time.Second) // Chờ goroutine chạy xong\n}"
        }
      ]
    },
    {
      "id": "go-channels",
      "title": "Channels (Giao tiếp luồng)",
      "description": "Channel được dùng để truyền dữ liệu một cách an toàn giữa các Goroutines. Đây là triết lý của Go: 'Đừng giao tiếp bằng cách chia sẻ bộ nhớ, hãy chia sẻ bộ nhớ bằng cách giao tiếp'.",
      "exampleText": "Tạo channel bằng make(chan Type). Gửi/nhận bằng toán tử <-",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "package main\nimport \"fmt\"\n\nfunc calculateSum(a int, b int, c chan int) {\n\tsum := a + b\n\tc <- sum // Gửi dữ liệu vào channel\n}\n\nfunc main() {\n\tch := make(chan int) // Khởi tạo channel kiểu int\n\n\tgo calculateSum(10, 20, ch)\n\n\tresult := <-ch // Chờ và nhận dữ liệu từ channel\n\tfmt.Println(\"Tổng là:\", result)\n}"
        }
      ]
    },
    {
      "id": "go-defer",
      "title": "Từ khóa defer",
      "description": "Từ khóa defer giúp trì hoãn việc thực thi một hàm cho đến khi hàm chứa nó chuẩn bị kết thúc (return). Cực kỳ hữu ích để dọn dẹp tài nguyên (đóng file, ngắt kết nối database) mà không sợ quên.",
      "exampleText": "Các lệnh defer được thực thi theo thứ tự LIFO (Vào sau ra trước).",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "package main\nimport \"fmt\"\n\nfunc main() {\n\tdefer fmt.Println(\"Dọn dẹp tài nguyên (chạy cuối cùng)\")\n\n\tfmt.Println(\"Đang kết nối Database...\")\n\tfmt.Println(\"Đang thao tác dữ liệu...\")\n}"
        }
      ]
    }
  ]
},
{
  label: "Nhóm 5",
  title: "Generics, Error Handling & Packages",
  cards: [
    {
      id: "go-generics",
      title: "Generics (Go 1.18+)",
      description: "Generics cho phép viết function/struct hoạt động với nhiều kiểu dữ liệu. Dùng type parameters [T any] hoặc constraints [T comparable]. Go 1.18+ (2022). Giúp tránh duplicate code cho các kiểu khác nhau.",
      exampleText: "any = interface{}. comparable = kiểu có thể so sánh ==. Constraints giới hạn kiểu cho phép.",
      codeBlocks: [
        { title: "Ví dụ", code: `// Generic function
func Filter[T any](slice []T, predicate func(T) bool) []T {
    var result []T
    for _, v := range slice {
        if predicate(v) {
            result = append(result, v)
        }
    }
    return result
}

// Sử dụng
evens := Filter([]int{1,2,3,4,5}, func(n int) bool {
    return n%2 == 0
}) // [2, 4]

// Constraint
type Number interface {
    int | int64 | float64
}

func Sum[T Number](nums []T) T {
    var total T
    for _, n := range nums {
        total += n
    }
    return total
}

// Generic struct
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item, true
}` }
      ]
    },
    {
      id: "go-error-wrapping",
      title: "Error Wrapping",
      description: "Go 1.13+ hỗ trợ wrap errors bằng fmt.Errorf(\"%w\", err). errors.Is() kiểm tra error chain. errors.As() unwrap thành type cụ thể. Custom error type implement Error() method.",
      exampleText: "Luôn wrap error với context thay vì chỉ return err. Giúp debug dễ hơn.",
      codeBlocks: [
        { title: "Ví dụ", code: `import (
    "errors"
    "fmt"
)

// Custom error type
type NotFoundError struct {
    Entity string
    ID     int
}

func (e *NotFoundError) Error() string {
    return fmt.Sprintf("%s #%d not found", e.Entity, e.ID)
}

// Sentinel errors
var (
    ErrNotFound     = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized")
)

// Wrap error với context
func getUser(id int) (*User, error) {
    user, err := db.FindByID(id)
    if err != nil {
        // Wrap error - giữ original + thêm context
        return nil, fmt.Errorf("getUser(%d): %w", id, err)
    }
    return user, nil
}

// Check error chain
err := getUser(123)
if errors.Is(err, ErrNotFound) {
    // Handle not found
}

// Unwrap custom error type
var notFound *NotFoundError
if errors.As(err, &notFound) {
    fmt.Println(notFound.Entity, notFound.ID)
}` }
      ]
    },
    {
      id: "go-embedding",
      title: "Struct Embedding",
      description: "Go không có inheritance. Thay vào đó dùng embedding (nhúng struct). Struct nhúng sẽ 'thừa kế' tất cả fields và methods. Composition over inheritance. Có thể nhúng nhiều struct.",
      exampleText: "Embedding giống has-a nhưng các fields/methods được promote lên struct cha.",
      codeBlocks: [
        { title: "Ví dụ", code: `// Base struct
type Animal struct {
    Name string
    Age  int
}

func (a Animal) Speak() string {
    return fmt.Sprintf("I'm %s, age %d", a.Name, a.Age)
}

// Embedding (nhúng Animal vào Dog)
type Dog struct {
    Animal       // Embedded struct (không tên)
    Breed string
}

func main() {
    d := Dog{
        Animal: Animal{Name: "Buddy", Age: 3},
        Breed:  "Golden",
    }

    // Truy cập trực tiếp fields của Animal
    fmt.Println(d.Name)    // "Buddy" (promoted)
    fmt.Println(d.Speak()) // "I'm Buddy, age 3"
    fmt.Println(d.Breed)   // "Golden"
}

// Nhúng interface
type ReadWriter interface {
    Reader
    Writer
}` }
      ]
    },
    {
      id: "go-packages",
      title: "Packages & Go Modules",
      description: "Package tổ chức code thành nhóm. Tên package = tên thư mục. Exported names bắt đầu bằng chữ HOA. Go Modules (go.mod) quản lý dependencies. internal/ package chỉ dùng nội bộ.",
      exampleText: "go mod init myapp tạo module. go mod tidy dọn dependencies thừa.",
      codeBlocks: [
        { title: "Cấu trúc", code: `# Cấu trúc project phổ biến
myapp/
├── go.mod
├── go.sum
├── main.go              # Entry point
├── cmd/
│   └── server/
│       └── main.go      # CLI entry points
├── internal/            # Private packages
│   ├── handlers/
│   │   └── user.go
│   ├── models/
│   │   └── user.go
│   └── services/
│       └── user.go
├── pkg/                 # Public packages (reusable)
│   └── validator/
│       └── email.go
└── config/
    └── config.go

# Package rules
# - Tên package = tên thư mục
# - Chữ HOA đầu = exported (public)
# - Chữ thường đầu = unexported (private)
# - internal/ chỉ dùng trong project

# Commands
go mod init github.com/user/myapp
go mod tidy
go get github.com/gin-gonic/gin@latest
go list -m all  # List all dependencies` }
      ]
    },
    {
      id: "go-panic-recover",
      title: "Defer, Panic & Recover",
      description: "defer: trì hoãn thực thi đến khi function return (LIFO). panic: dừng chương trình ngay lập tức (giống throw). recover: bắt panic trong defer (giống catch). Pattern: defer + recover để xử lý panic gracefully.",
      exampleText: "Chỉ dùng panic cho lỗi không thể phục hồi. Hầu hết nên return error thay vì panic.",
      codeBlocks: [
        { title: "Ví dụ", code: `// Defer - dọn dẹp tài nguyên
func readFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close() // Luôn đóng file dù có lỗi

    // Đọc file...
    return nil
}

// Defer LIFO
func example() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    // Output: 3, 2, 1
}

// Panic & Recover
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered: %v", r)
        }
    }()

    if b == 0 {
        panic("division by zero!")
    }
    return a / b, nil
}

result, err := safeDiv(10, 0)
// err = "recovered: division by zero!"

// HTTP server recovery middleware
func recoveryMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        defer func() {
            if err := recover(); err != nil {
                http.Error(w, "Internal Error", 500)
                log.Printf("Panic: %v", err)
            }
        }()
        next.ServeHTTP(w, r)
    })
}` }
      ]
    }
  ]
}];
