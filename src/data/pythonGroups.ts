import type { KnowledgeGroup } from "../types/knowledge";

export const pythonGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "Python cơ bản & Kiểu dữ liệu",
    cards: [
      {
        id: "py-intro",
        title: "Python là gì",
        description: "Python là ngôn ngữ lập trình cấp cao, interpreted, dynamically typed. Cú pháp đơn giản, dùng indentation thay {}. Dùng cho web (Django, FastAPI), data science, AI/ML, automation, scripting. Phiên bản hiện tại: Python 3.x.",
        exampleText: null,
        codeBlocks: [
          { title: "Hello World", code: "# main.py\nprint('Hello, Python!')\n\n# Biến (không cần khai báo kiểu)\nname = 'An'          # str\nage = 25             # int\npi = 3.14            # float\nis_active = True     # bool\nnothing = None       # NoneType\n\n# Type checking\nprint(type(name))         # <class 'str'>\nprint(isinstance(age, int))  # True\n\n# Multiple assignment\nx, y, z = 1, 2, 3\na = b = c = 0" },
          { title: "Input/Output", code: "# Output\nprint('Hello', 'World', sep=', ')  # Hello, World\nprint('No newline', end=' ')\n\n# f-string (Python 3.6+)\nname = 'An'\nage = 25\nprint(f'Tên: {name}, Tuổi: {age}')\nprint(f'Năm sau: {age + 1}')\nprint(f'{name!r}')      # repr: 'An'\nprint(f'{pi:.2f}')       # 2 decimal: 3.14\nprint(f'{1000000:,}')    # 1,000,000\n\n# Input\nname = input('Tên: ')     # Luôn trả về string\nage = int(input('Tuổi: ')) # Convert sang int" }
        ]
      },
      {
        id: "py-string",
        title: "String",
        description: "String trong Python immutable. f-string là cách format hiện đại. Triple quotes cho multiline. Raw string (r'...') bỏ qua escape. Rất nhiều methods hữu ích.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "s = 'Hello World'\n\n# Slicing\ns[0]       # 'H'\ns[-1]      # 'd'\ns[0:5]     # 'Hello'\ns[:5]      # 'Hello'\ns[6:]      # 'World'\ns[::-1]    # 'dlroW olleH' (đảo ngược)\n\n# Methods\ns.upper()          # 'HELLO WORLD'\ns.lower()          # 'hello world'\ns.title()          # 'Hello World'\ns.strip()          # Bỏ khoảng trắng 2 đầu\ns.lstrip() / s.rstrip()\ns.split(' ')       # ['Hello', 'World']\n', '.join(['a', 'b', 'c'])  # 'a, b, c'\ns.replace('World', 'Python') # 'Hello Python'\ns.startswith('He') # True\ns.endswith('ld')   # True\ns.find('World')    # 6 (index, -1 nếu không có)\ns.count('l')       # 3\ns.isdigit()        # False\ns.isalpha()        # False (có space)\n\n# Multiline\ntext = '''Line 1\nLine 2\nLine 3'''\n\n# Raw string (regex)\npath = r'C:\\Users\\an\\docs'  # Không escape \\n" }
        ]
      },
      {
        id: "py-number",
        title: "Number & Math",
        description: "int (không giới hạn size), float (64-bit), complex. Python hỗ trợ // (chia nguyên), ** (lũy thừa), % (modulo). Module math cho hàm toán học.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# Operators\n10 / 3      # 3.333... (float division)\n10 // 3     # 3 (integer division)\n10 % 3      # 1 (modulo)\n2 ** 10     # 1024 (power)\n\n# Built-in\nabs(-5)     # 5\nround(3.7)  # 4\nround(3.14159, 2)  # 3.14\nmax(1, 5, 3)  # 5\nmin(1, 5, 3)  # 1\nsum([1,2,3])  # 6\n\n# math module\nimport math\nmath.sqrt(16)    # 4.0\nmath.ceil(3.1)   # 4\nmath.floor(3.9)  # 3\nmath.pi          # 3.14159...\nmath.log(100, 10) # 2.0\n\n# random\nimport random\nrandom.randint(1, 10)     # Random int 1-10\nrandom.choice(['a','b'])  # Random element\nrandom.shuffle(my_list)   # Xáo trộn" }
        ]
      },
      {
        id: "py-list",
        title: "List",
        description: "List là mảng động, ordered, mutable. Hỗ trợ mixed types. List comprehension là cú pháp mạnh mẽ tạo list ngắn gọn. Dùng cho hầu hết mọi collection.",
        exampleText: null,
        codeBlocks: [
          { title: "Thao tác", code: "nums = [1, 2, 3, 4, 5]\n\n# Access & Slice\nnums[0]       # 1\nnums[-1]      # 5\nnums[1:3]     # [2, 3]\nnums[::2]     # [1, 3, 5] (step 2)\n\n# Modify\nnums.append(6)        # [1,2,3,4,5,6]\nnums.insert(0, 0)     # [0,1,2,3,4,5,6]\nnums.extend([7, 8])   # Thêm nhiều\nnums.pop()            # Xóa cuối, trả về giá trị\nnums.pop(0)           # Xóa theo index\nnums.remove(3)        # Xóa theo giá trị (đầu tiên)\nnums.sort()           # Sắp xếp tại chỗ\nnums.sort(reverse=True)\nnums.reverse()        # Đảo ngược\nnums.clear()          # Xóa hết\n\n# Check\n3 in nums             # True\nlen(nums)             # Length\nnums.index(3)         # Vị trí (error nếu không có)\nnums.count(3)         # Đếm" },
          { title: "List Comprehension", code: "# [expression for item in iterable if condition]\nsquares = [x**2 for x in range(10)]\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\nevens = [x for x in range(20) if x % 2 == 0]\n# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\nwords = ['Hello', 'WORLD']\nlower = [w.lower() for w in words]\n# ['hello', 'world']\n\n# Nested\nmatrix = [[1,2], [3,4], [5,6]]\nflat = [x for row in matrix for x in row]\n# [1, 2, 3, 4, 5, 6]\n\n# With condition + transform\nresults = [x**2 if x > 0 else 0 for x in [-2, -1, 0, 1, 2]]" }
        ]
      },
      {
        id: "py-dict",
        title: "Dict (Dictionary)",
        description: "Dict là key-value store, ordered (Python 3.7+). Key phải hashable (str, int, tuple). Rất nhanh cho lookup O(1). Dict comprehension tương tự list comprehension.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "user = {'name': 'An', 'age': 25, 'email': 'an@mail.com'}\n\n# Access\nuser['name']              # 'An' (KeyError nếu không có)\nuser.get('name')          # 'An' (None nếu không có)\nuser.get('phone', 'N/A')  # 'N/A' (default)\n\n# Modify\nuser['age'] = 26          # Update\nuser['phone'] = '123'     # Add\ndel user['email']          # Delete\nuser.pop('age')           # Delete & return value\n\n# Methods\nuser.keys()    # dict_keys(['name', ...])\nuser.values()  # dict_values(['An', ...])\nuser.items()   # dict_items([('name','An'), ...])\nuser.update({'a': 1, 'b': 2})  # Merge\n\n# Duyệt\nfor key, value in user.items():\n    print(f'{key}: {value}')\n\n# Check\n'name' in user  # True\n\n# Dict comprehension\nword_len = {w: len(w) for w in ['hello', 'world']}\n# {'hello': 5, 'world': 5}\n\n# Merge (Python 3.9+)\nmerged = dict1 | dict2" }
        ]
      },
      {
        id: "py-tuple-set",
        title: "Tuple & Set",
        description: "Tuple: immutable list, dùng () hoặc không dấu. Nhanh hơn list, dùng cho data không đổi. Set: collection không trùng lặp, unordered. Hỗ trợ union, intersection, difference.",
        exampleText: null,
        codeBlocks: [
          { title: "Tuple", code: "# Tuple (immutable)\npoint = (10, 20)\ncolors = ('red', 'green', 'blue')\nsingle = (42,)  # 1 phần tử cần dấu phẩy\n\n# Unpacking\nx, y = point\nfirst, *rest = (1, 2, 3, 4)  # first=1, rest=[2,3,4]\na, _, c = (1, 2, 3)  # Bỏ qua giá trị\n\n# Swap\na, b = b, a\n\n# Named tuple\nfrom collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(10, 20)\nprint(p.x, p.y)  # 10 20" },
          { title: "Set", code: "# Set (không trùng lặp)\nnums = {1, 2, 3, 3, 2}  # {1, 2, 3}\nfrom_list = set([1, 1, 2, 3])  # {1, 2, 3}\n\nnums.add(4)\nnums.remove(1)    # KeyError nếu không có\nnums.discard(1)   # Không error\n\n# Set operations\na = {1, 2, 3}\nb = {2, 3, 4}\na | b   # Union: {1, 2, 3, 4}\na & b   # Intersection: {2, 3}\na - b   # Difference: {1}\na ^ b   # Symmetric difference: {1, 4}\n\n# Dùng set để loại trùng\nunique = list(set(my_list))" }
        ]
      },
      {
        id: "py-control-flow",
        title: "If, For, While",
        description: "Python dùng indentation (4 spaces). for duyệt qua iterable. range(n) tạo sequence 0..n-1. enumerate() lấy index + value. zip() duyệt song song. break/continue/else giống nhau.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# If/elif/else\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelse:\n    grade = 'C'\n\n# Ternary\nstatus = 'adult' if age >= 18 else 'minor'\n\n# For\nfor i in range(5):          # 0, 1, 2, 3, 4\nfor i in range(2, 10, 2):   # 2, 4, 6, 8\n\n# enumerate\nfor i, name in enumerate(['An', 'Bình', 'Chi']):\n    print(f'{i}: {name}')   # 0: An, 1: Bình, 2: Chi\n\n# zip (duyệt song song)\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')\n\n# while\nwhile count > 0:\n    count -= 1\n\n# for...else (else chạy khi KHÔNG break)\nfor n in range(2, 10):\n    for x in range(2, n):\n        if n % x == 0:\n            break\n    else:\n        print(f'{n} là số nguyên tố')" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "Function & Class",
    cards: [
      {
        id: "py-function",
        title: "Function",
        description: "Hàm dùng def. Hỗ trợ default params, *args (tuple), **kwargs (dict), keyword-only args. Type hints (Python 3.5+) cho tham số và return. Lambda cho hàm ẩn danh 1 dòng.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# Type hints\ndef greet(name: str, greeting: str = 'Xin chào') -> str:\n    return f'{greeting}, {name}!'\n\n# *args (nhận nhiều positional args)\ndef sum_all(*args: int) -> int:\n    return sum(args)\nsum_all(1, 2, 3)  # 6\n\n# **kwargs (nhận nhiều keyword args)\ndef create_user(**kwargs) -> dict:\n    return kwargs\ncreate_user(name='An', age=25)  # {'name': 'An', 'age': 25}\n\n# Kết hợp\ndef func(a, b, *args, key=None, **kwargs): ...\n\n# Lambda\nsquare = lambda x: x ** 2\nnums.sort(key=lambda x: x['age'])  # Sort by field\n\n# Higher-order functions\nlist(map(lambda x: x**2, [1,2,3]))    # [1, 4, 9]\nlist(filter(lambda x: x>2, [1,2,3]))  # [3]\n\nfrom functools import reduce\nreduce(lambda a,b: a+b, [1,2,3,4])    # 10" }
        ]
      },
      {
        id: "py-class",
        title: "Class & OOP",
        description: "Python hỗ trợ OOP: class, kế thừa (single + multiple), encapsulation. __init__ là constructor. self tham chiếu instance. _ prefix = convention private. Dunder methods (__str__, __repr__, __len__...).",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "class User:\n    # Class variable (shared)\n    count = 0\n\n    def __init__(self, name: str, age: int):\n        self.name = name      # Instance variable\n        self.age = age\n        self._email = None    # Convention private\n        User.count += 1\n\n    def greet(self) -> str:\n        return f'Hi, I am {self.name}'\n\n    @property\n    def email(self) -> str:\n        return self._email\n\n    @email.setter\n    def email(self, value: str):\n        if '@' not in value:\n            raise ValueError('Invalid email')\n        self._email = value\n\n    def __str__(self) -> str:    # print(user)\n        return f'User({self.name})'\n\n    def __repr__(self) -> str:   # Debug\n        return f'User(name={self.name!r}, age={self.age})'\n\n# Kế thừa\nclass Admin(User):\n    def __init__(self, name: str, age: int, role: str):\n        super().__init__(name, age)\n        self.role = role\n\nadmin = Admin('An', 25, 'superadmin')\nprint(admin.greet())  # Hi, I am An\n\n# Static & Class methods\nclass MathUtils:\n    @staticmethod\n    def add(a, b): return a + b\n\n    @classmethod\n    def from_string(cls, s): return cls()" }
        ]
      },
      {
        id: "py-decorator",
        title: "Decorator",
        description: "Decorator là hàm bọc hàm khác. Dùng @. Pattern phổ biến: logging, timing, caching, auth. Python built-in: @staticmethod, @classmethod, @property, @functools.lru_cache.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import time\nfrom functools import wraps\n\n# Timer decorator\ndef timer(func):\n    @wraps(func)  # Giữ tên/docstring gốc\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} took {time.time()-start:.2f}s')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n\n# Decorator with arguments\ndef repeat(times):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print('Hello!')\n\n# Built-in: caching\nfrom functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2: return n\n    return fibonacci(n-1) + fibonacci(n-2)" }
        ]
      },
      {
        id: "py-dataclass",
        title: "Dataclass (Python 3.7+)",
        description: "@dataclass tự tạo __init__, __repr__, __eq__ từ type annotations. Giảm boilerplate cho data classes. Hỗ trợ default values, frozen (immutable), field().",
        exampleText: "Tuyệt vời cho DTO, config, API response models.",
        codeBlocks: [
          { title: "Ví dụ", code: "from dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass User:\n    name: str\n    email: str\n    age: int = 0\n    role: str = 'user'\n    tags: list[str] = field(default_factory=list)\n\nuser = User(name='An', email='an@mail.com')\nprint(user)  # User(name='An', email='an@mail.com', age=0, ...)\n\n# So sánh tự động\nuser1 = User('An', 'an@mail.com')\nuser2 = User('An', 'an@mail.com')\nuser1 == user2  # True\n\n# Frozen (immutable)\n@dataclass(frozen=True)\nclass Point:\n    x: float\n    y: float\n\np = Point(1.0, 2.0)\n# p.x = 3.0  # ❌ FrozenInstanceError\n\n# Post-init\n@dataclass\nclass Product:\n    name: str\n    price: float\n    tax: float = field(init=False)\n\n    def __post_init__(self):\n        self.tax = self.price * 0.1" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "Module, Error & File I/O",
    cards: [
      {
        id: "py-module",
        title: "Module & Package",
        description: "Mỗi file .py là module. Thư mục chứa __init__.py là package. import để sử dụng. pip cài từ PyPI. Virtual environment (venv) cô lập dependencies.",
        exampleText: null,
        codeBlocks: [
          { title: "Import", code: "# Import cả module\nimport os\nimport json\n\n# Import cụ thể\nfrom pathlib import Path\nfrom typing import List, Dict, Optional\nfrom collections import Counter, defaultdict\n\n# Import với alias\nimport numpy as np\nimport pandas as pd\nfrom datetime import datetime as dt" },
          { title: "Virtual Environment", code: "# Tạo venv\npython -m venv venv\n\n# Activate\n# Windows: venv\\Scripts\\activate\n# Mac/Linux: source venv/bin/activate\n\n# Cài packages\npip install requests fastapi uvicorn\npip install -r requirements.txt\n\n# Export dependencies\npip freeze > requirements.txt\n\n# Deactivate\ndeactivate\n\n# Cấu trúc project\nmy-project/\n ┣ venv/            ← Không commit!\n ┣ src/\n ┃ ┣ __init__.py\n ┃ ┣ main.py\n ┃ ┗ utils.py\n ┣ tests/\n ┣ requirements.txt\n ┗ .gitignore" }
        ]
      },
      {
        id: "py-error",
        title: "Try/Except & Custom Exception",
        description: "try/except/else/finally xử lý lỗi. except bắt theo kiểu. else chạy khi OK. finally luôn chạy. raise throw exception. Tạo custom exception kế thừa Exception.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# Cú pháp đầy đủ\ntry:\n    result = 10 / int(input('Number: '))\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')\nexcept ValueError:\n    print('Invalid number!')\nexcept Exception as e:\n    print(f'Unexpected error: {e}')\nelse:\n    print(f'Result: {result}')  # Chạy khi OK\nfinally:\n    print('Always runs')  # Luôn chạy\n\n# Raise\ndef validate_age(age: int) -> None:\n    if age < 0:\n        raise ValueError(f'Invalid age: {age}')\n    if age > 150:\n        raise ValueError('Age too large')\n\n# Custom Exception\nclass UserNotFoundError(Exception):\n    def __init__(self, user_id: int):\n        self.user_id = user_id\n        super().__init__(f'User #{user_id} not found')\n\ntry:\n    raise UserNotFoundError(123)\nexcept UserNotFoundError as e:\n    print(e)           # User #123 not found\n    print(e.user_id)   # 123" }
        ]
      },
      {
        id: "py-file",
        title: "File I/O & JSON",
        description: "with statement tự đóng file (context manager). open() với mode: r (đọc), w (ghi đè), a (append), rb/wb (binary). json module đọc/ghi JSON. pathlib cho path hiện đại.",
        exampleText: null,
        codeBlocks: [
          { title: "File & JSON", code: "import json\nfrom pathlib import Path\n\n# Đọc file\nwith open('data.txt', 'r', encoding='utf-8') as f:\n    content = f.read()          # Đọc hết\n    # lines = f.readlines()     # List of lines\n    # for line in f: ...        # Đọc từng dòng (memory efficient)\n\n# Ghi file\nwith open('output.txt', 'w', encoding='utf-8') as f:\n    f.write('Hello\\n')\n    f.writelines(['Line 1\\n', 'Line 2\\n'])\n\n# JSON\nwith open('data.json', 'r') as f:\n    data = json.load(f)         # File → dict\n\nwith open('output.json', 'w') as f:\n    json.dump(data, f, indent=2, ensure_ascii=False)\n\n# String ↔ JSON\njson_str = json.dumps({'name': 'An'})\nobj = json.loads(json_str)\n\n# pathlib\np = Path('src/main.py')\np.exists()      # True/False\np.is_file()     # True\np.suffix        # '.py'\np.stem          # 'main'\np.parent        # Path('src')\n\n# List files\nfor f in Path('.').glob('**/*.py'):\n    print(f)\n\n# Create directory\nPath('output/images').mkdir(parents=True, exist_ok=True)" }
        ]
      },
      {
        id: "py-generator",
        title: "Generator & Iterator",
        description: "Generator dùng yield thay return. Lazy evaluation: tạo giá trị khi cần, không load hết vào RAM. Tuyệt vời cho data lớn. Generator expression: (x for x in range(n)).",
        exampleText: "Đọc file 10GB? Generator đọc từng dòng, chỉ dùng vài KB RAM.",
        codeBlocks: [
          { title: "Ví dụ", code: "# Generator function\ndef countdown(n):\n    while n > 0:\n        yield n    # Tạm dừng, trả giá trị\n        n -= 1\n\nfor i in countdown(5):\n    print(i)  # 5, 4, 3, 2, 1\n\n# Generator expression (giống list comp nhưng lazy)\nsquares = (x**2 for x in range(1000000))  # Không tạo list!\nnext(squares)  # 0\nnext(squares)  # 1\n\n# Đọc file lớn\ndef read_large_file(path):\n    with open(path) as f:\n        for line in f:\n            yield line.strip()\n\nfor line in read_large_file('huge.csv'):\n    process(line)  # Xử lý từng dòng, không load hết\n\n# Infinite generator\ndef fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Lấy 10 số Fibonacci đầu\nfrom itertools import islice\nlist(islice(fibonacci(), 10))  # [0,1,1,2,3,5,8,13,21,34]" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "Type Hints, Async & Regex",
    cards: [
      {
        id: "py-type-hints",
        title: "Type Hints (Python 3.5+)",
        description: "Type hints không ảnh hưởng runtime nhưng giúp IDE gợi ý, phát hiện lỗi. Dùng mypy để static type checking. FastAPI/Pydantic dùng type hints cho validation. Optional = Union[X, None].",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "from typing import Optional, Union, Any\n\n# Biến\nname: str = 'An'\nage: int = 25\nscores: list[int] = [90, 85, 92]\nuser: dict[str, str] = {'name': 'An'}\npoint: tuple[float, float] = (1.0, 2.0)\n\n# Function\ndef greet(name: str, times: int = 1) -> str:\n    return f'Hello {name}!' * times\n\n# Optional (có thể None)\ndef find_user(id: int) -> Optional[dict]:\n    return None  # hoặc user dict\n\n# Union\ndef process(data: str | int) -> str:  # Python 3.10+\n    return str(data)\n\n# Callable\nfrom typing import Callable\ndef apply(func: Callable[[int, int], int], a: int, b: int) -> int:\n    return func(a, b)\n\n# TypeAlias\ntype UserID = int | str  # Python 3.12+\nUserId = Union[int, str]  # Older\n\n# Generic\nfrom typing import TypeVar, Generic\nT = TypeVar('T')\ndef first(items: list[T]) -> T:\n    return items[0]" }
        ]
      },
      {
        id: "py-async",
        title: "Async/Await (asyncio)",
        description: "async def tạo coroutine. await chờ coroutine hoàn thành. asyncio.run() chạy event loop. asyncio.gather() chạy song song. Dùng cho I/O-bound tasks (network, file). FastAPI dùng async mặc định.",
        exampleText: "Không dùng async cho CPU-bound tasks (dùng multiprocessing thay thế).",
        codeBlocks: [
          { title: "Ví dụ", code: "import asyncio\nimport aiohttp  # pip install aiohttp\n\nasync def fetch_url(url: str) -> str:\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as resp:\n            return await resp.text()\n\n# Chạy 1 coroutine\nresult = asyncio.run(fetch_url('https://api.example.com'))\n\n# Chạy song song\nasync def main():\n    urls = ['https://api1.com', 'https://api2.com', 'https://api3.com']\n    tasks = [fetch_url(url) for url in urls]\n    results = await asyncio.gather(*tasks)  # Song song!\n    return results\n\nasyncio.run(main())\n\n# Timeout\nasync def with_timeout():\n    try:\n        result = await asyncio.wait_for(slow_task(), timeout=5.0)\n    except asyncio.TimeoutError:\n        print('Timeout!')\n\n# Sleep\nawait asyncio.sleep(1)  # Non-blocking sleep" }
        ]
      },
      {
        id: "py-regex",
        title: "Regular Expressions (re)",
        description: "Module re cho pattern matching. Luôn dùng raw string r'pattern'. re.search() tìm đầu tiên. re.findall() tìm tất cả. re.sub() thay thế. Compile pattern nếu dùng nhiều lần.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import re\n\ntext = 'My email is an@mail.com and phone is 0912345678'\n\n# Search (tìm match đầu tiên)\nmatch = re.search(r'\\d+', text)\nif match:\n    print(match.group())  # '0912345678'\n\n# FindAll (tìm tất cả)\nemails = re.findall(r'[\\w.]+@[\\w.]+', text)\n# ['an@mail.com']\n\nphones = re.findall(r'\\d{10}', text)\n# ['0912345678']\n\n# Sub (thay thế)\nclean = re.sub(r'\\d', '*', text)  # Ẩn số\n\n# Match groups\npattern = r'(\\w+)@(\\w+)\\.(\\w+)'\nm = re.search(pattern, 'an@mail.com')\nm.group(0)  # 'an@mail.com' (full match)\nm.group(1)  # 'an'\nm.group(2)  # 'mail'\n\n# Compile (dùng nhiều lần)\nemail_re = re.compile(r'[\\w.]+@[\\w.]+')\nresults = email_re.findall(text)\n\n# Common patterns\nr'\\d+'         # Số\nr'\\w+'         # Word chars\nr'\\s+'         # Whitespace\nr'^Start'      # Bắt đầu bằng\nr'end$'        # Kết thúc bằng\nr'a{2,4}'      # 2-4 lần 'a'" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 5",
    title: "Mẹo & Best Practices",
    cards: [
      {
        id: "py-comprehensions",
        title: "Comprehensions nâng cao",
        description: "List, dict, set comprehension là cú pháp mạnh mẽ nhất của Python. Nên dùng cho logic đơn giản. Nếu quá phức tạp, dùng for loop thông thường.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# Dict comprehension\n{k: v for k, v in zip(keys, values)}\n{k: v for k, v in d.items() if v > 0}   # Filter\n{k: v**2 for k, v in scores.items()}     # Transform\n\n# Set comprehension\nunique_words = {word.lower() for word in text.split()}\n\n# Nested dict comp\n{user.name: {p.title for p in user.posts} for user in users}\n\n# Walrus operator (Python 3.8+)\nresults = [y for x in data if (y := process(x)) is not None]\n\n# any() & all()\nhas_admin = any(u.is_admin for u in users)\nall_active = all(u.active for u in users)\nhas_email = any('@' in s for s in strings)" }
        ]
      },
      {
        id: "py-useful-stdlib",
        title: "Thư viện chuẩn hữu ích",
        description: "Python có standard library cực kỳ phong phú. Đây là những module thường dùng nhất.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "# collections\nfrom collections import Counter, defaultdict, deque\n\nCounter('aabbbcccc')  # Counter({'c': 4, 'b': 3, 'a': 2})\nCounter(words).most_common(5)  # Top 5 từ phổ biến\n\nd = defaultdict(list)\nd['key'].append(1)  # Không cần check key tồn tại\n\nq = deque([1, 2, 3])\nq.appendleft(0)  # O(1) thêm đầu\n\n# itertools\nfrom itertools import chain, islice, groupby, product\nlist(chain([1,2], [3,4]))     # [1, 2, 3, 4]\nlist(islice(range(100), 5))   # [0, 1, 2, 3, 4]\n\n# datetime\nfrom datetime import datetime, timedelta\nnow = datetime.now()\nyesterday = now - timedelta(days=1)\nnow.strftime('%Y-%m-%d %H:%M')  # '2024-01-15 14:30'\n\n# os & sys\nimport os, sys\nos.getenv('API_KEY', 'default')\nos.listdir('.')\nsys.argv  # CLI arguments\nsys.exit(1)" }
        ]
      },
      {
        id: "py-tips",
        title: "Mẹo Pythonic",
        description: "Code Python đẹp và Pythonic hơn với các mẹo này.",
        exampleText: null,
        codeBlocks: [
          { title: "Tips", code: "# 1. Swap\na, b = b, a\n\n# 2. Multiple comparison\nif 1 < x < 10:  # Thay vì: if x > 1 and x < 10\n\n# 3. Truthiness\nif my_list:      # Thay vì: if len(my_list) > 0\nif not my_list:  # Thay vì: if len(my_list) == 0\nif name:         # Thay vì: if name != ''\n\n# 4. Dictionary default\ncount = d.get(key, 0) + 1\n\n# 5. Unpacking\nfirst, *middle, last = [1, 2, 3, 4, 5]\n\n# 6. f-string debug (Python 3.8+)\nx = 42\nprint(f'{x = }')  # x = 42\n\n# 7. Underscore for readability\npopulation = 1_000_000_000\n\n# 8. Context manager\nfrom contextlib import contextmanager\n\n@contextmanager\ndef timer(name):\n    start = time.time()\n    yield\n    print(f'{name}: {time.time()-start:.2f}s')\n\nwith timer('fetch'):\n    data = fetch_data()\n\n# 9. Dùng enumerate thay range(len())\n# ❌ for i in range(len(items)):\n# ✅ for i, item in enumerate(items):\n\n# 10. Dùng zip thay index\n# ❌ for i in range(len(names)): print(names[i], scores[i])\n# ✅ for name, score in zip(names, scores): print(name, score)" }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 6",
  "title": "Nâng cao & Modules",
  "cards": [
    {
      "id": "python-try-except",
      "title": "Xử lý ngoại lệ (Try/Except)",
      "description": "Giúp chương trình không bị crash (văng lỗi) khi gặp tình huống bất ngờ (ví dụ: chia cho 0, đọc file không tồn tại).",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Lỗi: Không thể chia cho 0!\")\nexcept Exception as e:\n    print(f\"Lỗi không xác định: {e}\")\nfinally:\n    print(\"Khối lệnh này luôn được chạy\")"
        }
      ]
    },
    {
      "id": "python-file-io",
      "title": "Đọc/Ghi File (with open)",
      "description": "Thao tác với file cực kỳ ngắn gọn trong Python. Nên dùng cú pháp 'with open' để file tự động đóng lại sau khi thao tác xong, tránh rò rỉ bộ nhớ.",
      "exampleText": "Các chế độ: 'r' (đọc), 'w' (ghi đè), 'a' (ghi tiếp/append).",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "# Ghi file\nwith open('data.txt', 'w', encoding='utf-8') as file:\n    file.write('Xin chào thế giới!')\n\n# Đọc file\nwith open('data.txt', 'r', encoding='utf-8') as file:\n    content = file.read()\n    print(content)"
        }
      ]
    },
    {
      "id": "python-import",
      "title": "Modules (import)",
      "description": "Sử dụng lại mã từ các file khác hoặc từ các thư viện có sẵn (built-in) và thư viện ngoài (cài qua pip).",
      "exampleText": null,
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "import math\nprint(math.sqrt(16)) # Output: 4.0\n\n# Import cụ thể một hàm\nfrom datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d'))\n\n# Import và đặt tên tắt (alias)\nimport random as rd\nprint(rd.randint(1, 10))"
        }
      ]
    }
  ]
}];
