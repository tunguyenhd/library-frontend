import type { KnowledgeGroup } from "../types/knowledge";

export const gitGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "Git cơ bản, cài đặt, cấu hình",
    "cards": [
      {
        "id": "git-introduction",
        "title": "Git là gì",
        "description": "Git là hệ thống quản lý phiên bản phân tán (distributed version control system). Git giúp: (1) Theo dõi lịch sử thay đổi code. (2) Nhiều người cùng làm việc trên một project mà không xung đột. (3) Quay lại phiên bản cũ khi cần. (4) Tạo nhánh (branch) để phát triển tính năng song song.",
        "exampleText": "Khi làm việc nhóm, mỗi người code trên branch riêng, sau đó merge lại vào branch chính. Nếu sai, có thể revert về bất kỳ commit nào trước đó.",
        "codeBlocks": [
          {
            "title": "Ý tưởng cơ bản",
            "code": "# Git theo dõi thay đổi trong 3 vùng:\n# 1. Working Directory — file đang sửa\n# 2. Staging Area — file đã chọn để commit\n# 3. Repository — lịch sử đã lưu\n\n# Working Dir → Staging → Repository\n#   git add       git commit"
          },
          {
            "title": "Tại sao dùng Git",
            "code": "# ✅ Theo dõi ai thay đổi gì, khi nào\n# ✅ Quay lại phiên bản cũ bất kỳ lúc nào\n# ✅ Làm việc nhóm không sợ ghi đè code\n# ✅ Tạo branch thử nghiệm tính năng mới\n# ✅ Backup code lên remote (GitHub, GitLab)\n# ✅ Tiêu chuẩn ngành — bắt buộc phải biết"
          }
        ]
      },
      {
        "id": "git-install",
        "title": "Cài đặt Git",
        "description": "Git có thể cài trên Windows, macOS và Linux. Sau khi cài, dùng lệnh git --version để kiểm tra. Trên Windows nên cài Git for Windows (bao gồm Git Bash).",
        "exampleText": "Sau khi cài Git, mở terminal gõ git --version để xác nhận đã cài thành công.",
        "codeBlocks": [
          {
            "title": "Cài đặt",
            "code": "# Windows: tải từ https://git-scm.com/download/win\n# Hoặc dùng winget:\nwinget install Git.Git\n\n# macOS:\nbrew install git\n\n# Ubuntu/Debian:\nsudo apt install git\n\n# Kiểm tra\ngit --version\n# git version 2.45.0"
          },
          {
            "title": "Gợi ý",
            "code": "# Windows: Git for Windows bao gồm:\n# - Git Bash (terminal giống Linux)\n# - Git GUI (giao diện đồ họa)\n# - Git Credential Manager (lưu mật khẩu)\n\n# IDE tích hợp sẵn Git:\n# - VS Code: Source Control panel\n# - WebStorm / IntelliJ: VCS menu\n# - Android Studio: VCS menu"
          }
        ]
      },
      {
        "id": "git-config",
        "title": "Cấu hình Git (git config)",
        "description": "Trước khi dùng Git, cần cấu hình tên và email. Thông tin này gắn vào mỗi commit. Dùng --global để áp dụng cho tất cả project, hoặc bỏ --global để cấu hình riêng cho từng project.",
        "exampleText": "Khi xem lịch sử commit, Git hiển thị tên và email của người đã commit. Nếu chưa cấu hình, commit sẽ báo lỗi.",
        "codeBlocks": [
          {
            "title": "Cấu hình cơ bản",
            "code": "# Đặt tên\ngit config --global user.name \"Tên của bạn\"\n\n# Đặt email\ngit config --global user.email \"email@example.com\"\n\n# Đặt editor mặc định\ngit config --global core.editor \"code --wait\"\n\n# Đặt branch mặc định là main\ngit config --global init.defaultBranch main"
          },
          {
            "title": "Xem cấu hình",
            "code": "# Xem tất cả cấu hình\ngit config --list\n\n# Xem cấu hình cụ thể\ngit config user.name\ngit config user.email\n\n# File cấu hình:\n# Global: ~/.gitconfig\n# Local (mỗi repo): .git/config"
          }
        ]
      },
      {
        "id": "git-init",
        "title": "git init",
        "description": "git init tạo repository Git mới trong thư mục hiện tại. Lệnh này tạo thư mục ẩn .git/ chứa toàn bộ lịch sử và metadata. Chỉ cần chạy một lần khi bắt đầu project.",
        "exampleText": "Khi bắt đầu project mới, chạy git init để Git bắt đầu theo dõi thay đổi trong thư mục đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Tạo repo mới\ngit init\n\n# Tạo repo với branch mặc định là main\ngit init -b main"
          },
          {
            "title": "Ví dụ",
            "code": "mkdir my-project\ncd my-project\ngit init\n# Initialized empty Git repository in .../my-project/.git/\n\n# Thư mục .git/ chứa:\n# .git/\n# ├── HEAD          # Con trỏ đến branch hiện tại\n# ├── config         # Cấu hình repo\n# ├── objects/       # Lưu trữ data (blobs, trees, commits)\n# └── refs/          # Con trỏ đến commits (branches, tags)"
          }
        ]
      },
      {
        "id": "git-clone",
        "title": "git clone",
        "description": "git clone tải một repository từ remote (GitHub, GitLab...) về máy local. Clone tải toàn bộ lịch sử commit, branches, và tự động thiết lập remote origin.",
        "exampleText": "Muốn lấy code của một project trên GitHub về máy để làm việc, dùng git clone với URL của repo.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Clone bằng HTTPS\ngit clone https://github.com/user/repo.git\n\n# Clone bằng SSH\ngit clone git@github.com:user/repo.git\n\n# Clone vào thư mục cụ thể\ngit clone https://github.com/user/repo.git my-folder\n\n# Clone chỉ branch cụ thể\ngit clone -b develop https://github.com/user/repo.git"
          },
          {
            "title": "Ví dụ",
            "code": "# Clone project React\ngit clone https://github.com/facebook/react.git\ncd react\n\n# Clone shallow (chỉ lấy commit mới nhất, nhanh hơn)\ngit clone --depth 1 https://github.com/user/repo.git\n\n# Sau khi clone:\n# ✅ Có toàn bộ code\n# ✅ Có toàn bộ lịch sử commit\n# ✅ Remote origin đã được thiết lập\n# ✅ Đang ở branch mặc định (main/master)"
          }
        ]
      },
      {
        "id": "git-gitignore",
        "title": ".gitignore",
        "description": ".gitignore là file chỉ định các file/thư mục mà Git sẽ bỏ qua, không theo dõi. Thường dùng để loại trừ node_modules, file build, file cấu hình cá nhân, và file chứa secret.",
        "exampleText": "Thư mục node_modules rất lớn và không cần commit vì ai clone về cũng sẽ chạy npm install. Đặt nó vào .gitignore.",
        "codeBlocks": [
          {
            "title": ".gitignore phổ biến",
            "code": "# Dependencies\nnode_modules/\n\n# Build output\ndist/\nbuild/\n.next/\n\n# Environment variables\n.env\n.env.local\n.env.production\n\n# IDE\n.vscode/\n.idea/\n*.swp\n\n# OS files\n.DS_Store\nThumbs.db\n\n# Logs\n*.log\nnpm-debug.log*"
          },
          {
            "title": "Patterns",
            "code": "# Bỏ qua file cụ thể\nsecret.txt\n\n# Bỏ qua theo đuôi file\n*.log\n*.tmp\n\n# Bỏ qua thư mục\nbuild/\ncoverage/\n\n# Ngoại trừ (không bỏ qua)\n!important.log\n\n# Bỏ qua trong mọi thư mục con\n**/*.test.js\n\n# Tạo .gitignore từ template:\n# https://github.com/github/gitignore"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Làm việc với file: add, commit, status, diff",
    "cards": [
      {
        "id": "git-status",
        "title": "git status",
        "description": "git status hiển thị trạng thái hiện tại của working directory và staging area. Cho biết file nào đã sửa, file nào đã stage, file nào chưa được track.",
        "exampleText": "Trước khi commit, chạy git status để kiểm tra xem đã stage đúng file chưa.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "git status\n\n# Hiển thị ngắn gọn\ngit status -s\n# hoặc\ngit status --short"
          },
          {
            "title": "Ví dụ output",
            "code": "$ git status\nOn branch main\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n        modified:   src/App.tsx       # Đã stage ✅\n        new file:   src/utils.ts      # File mới, đã stage ✅\n\nChanges not staged for commit:\n        modified:   src/index.css     # Đã sửa, chưa stage\n\nUntracked files:\n        src/temp.js                   # File mới, chưa track\n\n# git status -s output:\n# M  src/App.tsx        (M xanh = staged)\n#  M src/index.css      (M đỏ = modified)\n# A  src/utils.ts       (A = added)\n# ?? src/temp.js        (?? = untracked)"
          }
        ]
      },
      {
        "id": "git-add",
        "title": "git add",
        "description": "git add đưa file từ working directory vào staging area (index), chuẩn bị cho commit. Có thể add từng file, nhiều file, hoặc tất cả file đã thay đổi.",
        "exampleText": "Sau khi sửa xong App.tsx và index.css, dùng git add để chọn file muốn đưa vào commit tiếp theo.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Add từng file\ngit add src/App.tsx\ngit add src/index.css\n\n# Add nhiều file\ngit add src/App.tsx src/index.css\n\n# Add tất cả file đã thay đổi\ngit add .\n\n# Add tất cả (kể cả file bị xóa)\ngit add -A\n# hoặc\ngit add --all"
          },
          {
            "title": "Ví dụ",
            "code": "# Sửa 3 file nhưng chỉ muốn commit 2 file\ngit add src/App.tsx src/utils.ts\ngit commit -m \"Add utility functions\"\n\n# File thứ 3 commit riêng sau\ngit add src/index.css\ngit commit -m \"Update styles\"\n\n# Add theo pattern\ngit add *.tsx          # Tất cả file .tsx\ngit add src/           # Tất cả file trong src/\n\n# Xem file nào sẽ được add (dry run)\ngit add -n ."
          }
        ]
      },
      {
        "id": "git-commit",
        "title": "git commit",
        "description": "git commit lưu snapshot của staging area vào lịch sử repository. Mỗi commit có: hash ID duy nhất, message mô tả, tên tác giả, và timestamp. Commit message nên ngắn gọn, rõ ràng, mô tả thay đổi.",
        "exampleText": "Sau khi add file, chạy git commit -m \"message\" để tạo một bản ghi trong lịch sử.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Commit với message ngắn\ngit commit -m \"Add login page\"\n\n# Commit với message dài (mở editor)\ngit commit\n\n# Add + commit gộp (chỉ cho file đã tracked)\ngit commit -am \"Fix button styles\"\n\n# Sửa commit cuối (đổi message hoặc thêm file)\ngit commit --amend -m \"New message\"\ngit add forgotten-file.ts\ngit commit --amend --no-edit"
          },
          {
            "title": "Commit message tốt",
            "code": "# ✅ Tốt — mô tả rõ thay đổi\ngit commit -m \"Add user authentication with JWT\"\ngit commit -m \"Fix navbar not showing on mobile\"\ngit commit -m \"Refactor: extract API calls to service layer\"\ngit commit -m \"Update dependencies to latest versions\"\n\n# ❌ Không tốt — quá chung chung\ngit commit -m \"fix\"\ngit commit -m \"update\"\ngit commit -m \"changes\"\ngit commit -m \"asdf\"\n\n# Convention phổ biến (Conventional Commits):\n# feat: tính năng mới\n# fix: sửa lỗi\n# docs: thay đổi docs\n# style: format, không đổi logic\n# refactor: tái cấu trúc code\n# test: thêm/sửa test\n# chore: cập nhật build, dependencies"
          }
        ]
      },
      {
        "id": "git-diff",
        "title": "git diff",
        "description": "git diff hiển thị sự khác biệt giữa các phiên bản. Mặc định so sánh working directory với staging area. Có thể so sánh staging với commit cuối, hoặc giữa hai commits bất kỳ.",
        "exampleText": "Trước khi commit, chạy git diff để xem lại tất cả thay đổi đã làm, đảm bảo không commit nhầm.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# So sánh working dir với staging\ngit diff\n\n# So sánh staging với commit cuối\ngit diff --staged\n# hoặc\ngit diff --cached\n\n# So sánh working dir với commit cuối\ngit diff HEAD\n\n# So sánh 2 commits\ngit diff abc123 def456\n\n# So sánh 2 branches\ngit diff main..feature"
          },
          {
            "title": "Ví dụ output",
            "code": "$ git diff src/App.tsx\ndiff --git a/src/App.tsx b/src/App.tsx\n--- a/src/App.tsx\n+++ b/src/App.tsx\n@@ -10,7 +10,8 @@\n function App() {\n   return (\n     <main>\n-      <h1>Hello</h1>\n+      <h1>Hello World</h1>\n+      <p>Welcome to my app</p>\n     </main>\n   );\n }\n\n# Dòng bắt đầu bằng - : đã xóa\n# Dòng bắt đầu bằng + : đã thêm\n\n# Xem diff ngắn gọn (chỉ tên file)\ngit diff --stat"
          }
        ]
      },
      {
        "id": "git-log",
        "title": "git log",
        "description": "git log hiển thị lịch sử commit của repository. Mỗi commit hiện hash, author, date, và message. Có nhiều flag để tuỳ chỉnh format và lọc kết quả.",
        "exampleText": "Muốn xem ai đã commit gì, khi nào, dùng git log để duyệt lịch sử.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Log đầy đủ\ngit log\n\n# Log ngắn gọn (1 dòng/commit)\ngit log --oneline\n\n# Log với graph (hiển thị nhánh)\ngit log --oneline --graph --all\n\n# Giới hạn số commit\ngit log -5\ngit log --oneline -10\n\n# Log theo tác giả\ngit log --author=\"Tên\"\n\n# Log theo thời gian\ngit log --since=\"2024-01-01\"\ngit log --after=\"1 week ago\""
          },
          {
            "title": "Ví dụ",
            "code": "$ git log --oneline -5\na1b2c3d (HEAD -> main) Add search feature\ne4f5g6h Fix responsive layout\ni7j8k9l Update dependencies\nm0n1o2p Add dark mode toggle\nq3r4s5t Initial commit\n\n$ git log --oneline --graph --all\n* a1b2c3d (HEAD -> main) Merge feature/search\n|\\  \n| * d4e5f6g Add search component\n| * h7i8j9k Add search logic\n|/  \n* m0n1o2p Add dark mode\n* q3r4s5t Initial commit\n\n# Log thay đổi của file cụ thể\ngit log -- src/App.tsx\ngit log --oneline -p -- src/App.tsx"
          }
        ]
      },
      {
        "id": "git-restore",
        "title": "git restore",
        "description": "git restore dùng để huỷ thay đổi. Khôi phục file trong working directory về trạng thái đã commit cuối (--staged để unstage). Đây là lệnh thay thế cho git checkout -- <file> cũ.",
        "exampleText": "Sửa file nhưng muốn huỷ thay đổi và quay lại phiên bản cuối đã commit.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Huỷ thay đổi trong working directory\ngit restore src/App.tsx\n\n# Huỷ tất cả thay đổi\ngit restore .\n\n# Unstage file (bỏ khỏi staging)\ngit restore --staged src/App.tsx\n\n# Unstage tất cả\ngit restore --staged ."
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: sửa nhầm file, muốn quay lại\ngit status\n# modified: src/App.tsx\n\ngit restore src/App.tsx\n# File khôi phục về commit cuối\n\n# Tình huống: add nhầm file vào staging\ngit add .\ngit restore --staged src/debug.ts\n# src/debug.ts bị unstage, vẫn giữ thay đổi\n\n# Khôi phục file từ commit cụ thể\ngit restore --source abc123 src/App.tsx"
          }
        ]
      },
      {
        "id": "git-rm",
        "title": "git rm",
        "description": "git rm xoá file khỏi working directory VÀ staging area. Nếu chỉ muốn xoá khỏi Git tracking mà giữ file trên ổ cứng, dùng --cached.",
        "exampleText": "Muốn xoá file cũ không dùng nữa, hoặc xoá file đã commit nhầm (như .env).",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Xoá file khỏi Git + ổ cứng\ngit rm src/old-file.ts\n\n# Xoá khỏi Git, giữ trên ổ cứng\ngit rm --cached src/secret.env\n\n# Xoá thư mục\ngit rm -r dist/"
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: commit nhầm file .env\ngit rm --cached .env\necho \".env\" >> .gitignore\ngit add .gitignore\ngit commit -m \"Remove .env from tracking\"\n# .env vẫn còn trên máy, nhưng Git không track nữa\n\n# Xoá file cũ\ngit rm src/deprecated.ts\ngit commit -m \"Remove deprecated file\""
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Branch (nhánh)",
    "cards": [
      {
        "id": "git-branch",
        "title": "git branch",
        "description": "Branch (nhánh) cho phép phát triển tính năng song song mà không ảnh hưởng code chính. Mỗi branch là một dòng lịch sử commit riêng. Branch mặc định thường là main hoặc master.",
        "exampleText": "Muốn làm tính năng mới mà không ảnh hưởng code đang chạy tốt, tạo branch riêng để code thoải mái.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Xem danh sách branch\ngit branch\n\n# Xem tất cả branch (cả remote)\ngit branch -a\n\n# Tạo branch mới\ngit branch feature/login\n\n# Xoá branch (đã merge)\ngit branch -d feature/login\n\n# Xoá branch (chưa merge, force)\ngit branch -D feature/login\n\n# Đổi tên branch hiện tại\ngit branch -m new-name"
          },
          {
            "title": "Ví dụ",
            "code": "$ git branch\n  develop\n  feature/search\n* main              # * = branch hiện tại\n\n$ git branch -a\n  develop\n  feature/search\n* main\n  remotes/origin/main\n  remotes/origin/develop\n\n# Naming convention phổ biến:\n# feature/ten-tinh-nang  — tính năng mới\n# fix/ten-loi            — sửa lỗi\n# hotfix/ten-loi         — sửa lỗi khẩn cấp\n# refactor/mo-ta         — tái cấu trúc\n# release/version        — chuẩn bị release"
          }
        ]
      },
      {
        "id": "git-checkout-switch",
        "title": "git switch / git checkout",
        "description": "git switch chuyển sang branch khác (lệnh mới thay thế git checkout cho việc chuyển branch). git checkout vẫn hoạt động nhưng git switch rõ ràng hơn vì chỉ dùng cho chuyển branch.",
        "exampleText": "Đang ở branch main, muốn chuyển sang branch feature/login để tiếp tục code tính năng đăng nhập.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Chuyển branch\ngit switch feature/login\n# hoặc\ngit checkout feature/login\n\n# Tạo + chuyển sang branch mới\ngit switch -c feature/new\n# hoặc\ngit checkout -b feature/new\n\n# Quay lại branch trước đó\ngit switch -"
          },
          {
            "title": "Ví dụ",
            "code": "# Tạo branch mới từ main\ngit switch main\ngit switch -c feature/search\n# Bắt đầu code tính năng search...\n\n# Tạo branch từ commit cụ thể\ngit switch -c fix/bug --start-point abc123\n\n# Tạo branch từ remote\ngit switch -c develop --track origin/develop\n\n# Lưu ý: Chuyển branch khi có thay đổi chưa commit\n# → Git sẽ cảnh báo hoặc mang thay đổi sang branch mới\n# → Dùng git stash để cất tạm (xem Nhóm 5)"
          }
        ]
      },
      {
        "id": "git-merge",
        "title": "git merge",
        "description": "git merge gộp thay đổi từ branch khác vào branch hiện tại. Có 2 loại merge: fast-forward (lịch sử thẳng, không tạo merge commit) và 3-way merge (tạo merge commit kết hợp 2 nhánh).",
        "exampleText": "Sau khi hoàn thành tính năng trên branch feature/search, chuyển về main và merge để đưa code vào.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Merge branch vào branch hiện tại\ngit switch main\ngit merge feature/search\n\n# Merge và luôn tạo merge commit\ngit merge --no-ff feature/search\n\n# Huỷ merge (khi đang conflict)\ngit merge --abort"
          },
          {
            "title": "Ví dụ",
            "code": "# Workflow merge thông thường\ngit switch main\ngit pull origin main           # Cập nhật main mới nhất\ngit merge feature/search       # Merge feature vào main\ngit push origin main           # Push lên remote\ngit branch -d feature/search   # Xoá branch feature\n\n# Fast-forward merge (lịch sử thẳng):\n# main:    A → B → C\n# feature:           → D → E\n# Sau merge: A → B → C → D → E\n\n# 3-way merge (tạo merge commit):\n# main:    A → B → C → F (merge commit)\n# feature:       → D → E ↗\n# Dùng --no-ff để luôn tạo merge commit"
          }
        ]
      },
      {
        "id": "git-merge-conflict",
        "title": "Xử lý Merge Conflict",
        "description": "Merge conflict xảy ra khi hai branch sửa cùng một phần của cùng một file. Git không thể tự quyết định giữ phiên bản nào, cần người dùng giải quyết thủ công.",
        "exampleText": "Hai người cùng sửa dòng 10 của App.tsx trên branch khác nhau. Khi merge, Git báo conflict và đánh dấu chỗ xung đột.",
        "codeBlocks": [
          {
            "title": "Conflict markers",
            "code": "# Git đánh dấu conflict trong file:\n<<<<<<< HEAD\n<h1>Hello World</h1>\n=======\n<h1>Welcome to App</h1>\n>>>>>>> feature/new-header\n\n# <<<<<<< HEAD: phiên bản branch hiện tại\n# =======: ranh giới\n# >>>>>>>: phiên bản branch merge vào"
          },
          {
            "title": "Giải quyết conflict",
            "code": "# 1. Xem file bị conflict\ngit status\n# both modified: src/App.tsx\n\n# 2. Mở file, chọn/sửa phiên bản muốn giữ\n# Xoá conflict markers (<<<, ===, >>>)\n# Giữ lại code đúng:\n<h1>Welcome to App</h1>\n\n# 3. Stage file đã sửa\ngit add src/App.tsx\n\n# 4. Hoàn tất merge\ngit commit\n# Git tự tạo merge commit message\n\n# Tip: dùng VS Code merge editor\n# → Accept Current | Accept Incoming | Accept Both"
          }
        ]
      },
      {
        "id": "git-rebase",
        "title": "git rebase",
        "description": "git rebase di chuyển base của branch hiện tại lên đầu branch khác, tạo lịch sử commit thẳng hàng (linear history). Khác merge ở chỗ rebase viết lại lịch sử commit thay vì tạo merge commit.",
        "exampleText": "Branch feature bắt đầu từ commit B của main. Main đã có thêm commit C, D. Rebase sẽ di chuyển feature lên sau D.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Rebase branch hiện tại lên main\ngit switch feature/search\ngit rebase main\n\n# Interactive rebase (chỉnh sửa commits)\ngit rebase -i HEAD~3\n\n# Huỷ rebase\ngit rebase --abort\n\n# Tiếp tục rebase sau khi fix conflict\ngit rebase --continue"
          },
          {
            "title": "Merge vs Rebase",
            "code": "# Merge: giữ nguyên lịch sử, tạo merge commit\n# main: A → B → C --------→ M (merge)\n# feat:       → D → E → F ↗\n\n# Rebase: viết lại lịch sử, thẳng hàng\n# Trước: main: A → B → C\n#        feat:       → D → E\n# Sau:   main: A → B → C → D' → E'\n\n# ⚠️ QUAN TRỌNG:\n# KHÔNG rebase branch đã push và người khác đang dùng\n# Rebase an toàn cho branch local cá nhân\n# Nếu không chắc → dùng merge"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "Remote (GitHub, GitLab)",
    "cards": [
      {
        "id": "git-remote",
        "title": "git remote",
        "description": "git remote quản lý kết nối đến repository trên server (GitHub, GitLab, Bitbucket). Remote mặc định thường tên là origin. Có thể có nhiều remote (ví dụ: origin cho chính, upstream cho fork).",
        "exampleText": "Khi clone repo từ GitHub, Git tự tạo remote tên origin trỏ đến URL của repo đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Xem danh sách remote\ngit remote\ngit remote -v\n\n# Thêm remote\ngit remote add origin https://github.com/user/repo.git\n\n# Đổi URL remote\ngit remote set-url origin https://github.com/user/new-repo.git\n\n# Xoá remote\ngit remote remove origin\n\n# Đổi tên remote\ngit remote rename origin upstream"
          },
          {
            "title": "Ví dụ",
            "code": "$ git remote -v\norigin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)\n\n# Sau khi git init, thêm remote và push lần đầu:\ngit init\ngit add .\ngit commit -m \"Initial commit\"\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main\n\n# Fork workflow: thêm upstream\ngit remote add upstream https://github.com/original/repo.git\ngit fetch upstream\ngit merge upstream/main"
          }
        ]
      },
      {
        "id": "git-push",
        "title": "git push",
        "description": "git push đẩy commits từ local repository lên remote repository. Lần đầu push branch mới cần dùng -u (--set-upstream) để thiết lập tracking. Sau đó chỉ cần git push.",
        "exampleText": "Sau khi commit xong, push lên GitHub để chia sẻ code với team hoặc backup.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Push branch hiện tại lên remote\ngit push\n\n# Push lần đầu (set upstream)\ngit push -u origin main\n\n# Push branch cụ thể\ngit push origin feature/search\n\n# Push tất cả branches\ngit push --all\n\n# Push tags\ngit push --tags\n\n# Force push (cẩn thận!)\ngit push --force\n# Hoặc an toàn hơn:\ngit push --force-with-lease"
          },
          {
            "title": "Ví dụ",
            "code": "# Workflow thông thường\ngit add .\ngit commit -m \"Add search feature\"\ngit push\n\n# Push branch mới lên remote\ngit switch -c feature/dark-mode\n# ... code ...\ngit add .\ngit commit -m \"Add dark mode\"\ngit push -u origin feature/dark-mode\n# Lần sau chỉ cần: git push\n\n# ⚠️ Force push:\n# Chỉ dùng khi đã rebase hoặc amend commit\n# KHÔNG force push trên branch chung (main)\n# --force-with-lease an toàn hơn --force\n# vì nó kiểm tra remote chưa ai push thêm"
          }
        ]
      },
      {
        "id": "git-pull",
        "title": "git pull",
        "description": "git pull tải commits mới từ remote về local VÀ merge vào branch hiện tại. git pull = git fetch + git merge. Nên pull trước khi push để tránh conflict.",
        "exampleText": "Trước khi bắt đầu code, chạy git pull để lấy code mới nhất từ team về.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Pull branch hiện tại\ngit pull\n\n# Pull từ remote/branch cụ thể\ngit pull origin main\n\n# Pull với rebase (không tạo merge commit)\ngit pull --rebase\n\n# Cấu hình mặc định pull --rebase\ngit config --global pull.rebase true"
          },
          {
            "title": "Ví dụ",
            "code": "# Workflow hàng ngày\ngit pull                    # Lấy code mới nhất\n# ... code ...\ngit add .\ngit commit -m \"My changes\"\ngit push                    # Đẩy lên\n\n# Pull vs Fetch\n# git pull = git fetch + git merge\n# → Tự động merge, có thể conflict\n\n# git fetch chỉ tải về, không merge\ngit fetch origin\ngit log origin/main         # Xem commits mới\ngit merge origin/main       # Merge thủ công\n\n# ⚠️ Nếu pull bị conflict:\n# 1. Sửa conflict\n# 2. git add <file>\n# 3. git commit"
          }
        ]
      },
      {
        "id": "git-fetch",
        "title": "git fetch",
        "description": "git fetch tải thông tin mới nhất từ remote về local nhưng KHÔNG merge. An toàn hơn git pull vì cho phép xem trước thay đổi trước khi quyết định merge.",
        "exampleText": "Muốn xem team đã push những gì mà chưa muốn merge ngay, dùng git fetch rồi kiểm tra.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Fetch tất cả từ origin\ngit fetch\n\n# Fetch từ remote cụ thể\ngit fetch origin\n\n# Fetch branch cụ thể\ngit fetch origin main\n\n# Fetch và xoá branch remote đã bị xoá\ngit fetch --prune"
          },
          {
            "title": "Ví dụ",
            "code": "# Xem commits mới trên remote\ngit fetch origin\ngit log HEAD..origin/main --oneline\n# abc123 Add new feature\n# def456 Fix bug\n\n# Xem diff giữa local và remote\ngit diff main origin/main\n\n# Nếu muốn merge\ngit merge origin/main\n\n# Dọn dẹp branches remote đã xoá\ngit fetch --prune\n# Remote tracking branch 'origin/feature/old' đã bị xoá"
          }
        ]
      },
      {
        "id": "git-pull-request",
        "title": "Pull Request / Merge Request",
        "description": "Pull Request (GitHub) hoặc Merge Request (GitLab) là cơ chế yêu cầu merge branch vào branch chính. PR cho phép team review code, thảo luận, chạy CI/CD trước khi merge. Đây là workflow phổ biến nhất.",
        "exampleText": "Làm xong tính năng trên branch feature/search, tạo PR để team review code trước khi merge vào main.",
        "codeBlocks": [
          {
            "title": "Workflow PR",
            "code": "# 1. Tạo branch mới\ngit switch -c feature/search\n\n# 2. Code và commit\ngit add .\ngit commit -m \"Add search feature\"\n\n# 3. Push lên remote\ngit push -u origin feature/search\n\n# 4. Tạo PR trên GitHub/GitLab\n# → Compare & pull request\n# → Viết mô tả thay đổi\n# → Assign reviewer\n\n# 5. Review → Approve → Merge\n# 6. Xoá branch\ngit switch main\ngit pull\ngit branch -d feature/search"
          },
          {
            "title": "PR best practices",
            "code": "# ✅ PR tốt:\n# - Nhỏ, tập trung 1 tính năng/fix\n# - Mô tả rõ thay đổi và lý do\n# - Có screenshots nếu thay đổi UI\n# - Đã test\n# - Không quá 400 dòng thay đổi\n\n# ❌ PR không tốt:\n# - Quá lớn, thay đổi nhiều thứ\n# - Không có mô tả\n# - Chưa test\n# - Chứa code không liên quan\n\n# Template PR:\n# ## Mô tả\n# Thêm tính năng tìm kiếm...\n# ## Screenshots\n# ## Checklist\n# - [ ] Đã test\n# - [ ] Đã update docs"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "Stash, Tag, Reset",
    "cards": [
      {
        "id": "git-stash",
        "title": "git stash",
        "description": "git stash cất tạm thay đổi chưa commit vào một ngăn chứa riêng, đưa working directory về trạng thái sạch. Hữu ích khi cần chuyển branch mà chưa muốn commit code đang dở.",
        "exampleText": "Đang code dở tính năng, đột ngột cần fix bug trên branch khác. Stash code đang dở, fix bug, rồi quay lại lấy code dở ra tiếp tục.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Cất tạm thay đổi\ngit stash\n\n# Cất tạm với message\ngit stash push -m \"Dark mode WIP\"\n\n# Cất tạm kể cả untracked files\ngit stash -u\n\n# Xem danh sách stash\ngit stash list\n\n# Lấy stash ra (và xoá khỏi list)\ngit stash pop\n\n# Lấy stash ra (giữ trong list)\ngit stash apply\n\n# Xoá stash\ngit stash drop stash@{0}\ngit stash clear  # Xoá tất cả"
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: đang code feature, cần fix bug gấp\ngit stash push -m \"Search feature WIP\"\ngit switch main\ngit switch -c fix/urgent-bug\n# ... fix bug ...\ngit commit -am \"Fix critical bug\"\ngit switch main\ngit merge fix/urgent-bug\ngit push\n\n# Quay lại feature\ngit switch feature/search\ngit stash pop\n# Code dở đã quay lại!\n\n$ git stash list\nstash@{0}: On feature/search: Search feature WIP\nstash@{1}: On main: Experiment dark mode\n\n# Lấy stash cụ thể\ngit stash apply stash@{1}"
          }
        ]
      },
      {
        "id": "git-tag",
        "title": "git tag",
        "description": "git tag đánh dấu một commit cụ thể, thường dùng để đánh dấu phiên bản release (v1.0.0, v2.1.3). Tag không thay đổi theo thời gian, khác branch luôn di chuyển theo commit mới.",
        "exampleText": "Khi release phiên bản 1.0.0, tạo tag v1.0.0 để đánh dấu commit đó. Bất cứ lúc nào cũng có thể quay lại đúng phiên bản đó.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Tạo lightweight tag\ngit tag v1.0.0\n\n# Tạo annotated tag (có message)\ngit tag -a v1.0.0 -m \"Release version 1.0.0\"\n\n# Tag commit cụ thể\ngit tag -a v1.0.0 abc123\n\n# Xem danh sách tags\ngit tag\ngit tag -l \"v1.*\"\n\n# Xem chi tiết tag\ngit show v1.0.0\n\n# Push tags lên remote\ngit push origin v1.0.0\ngit push --tags\n\n# Xoá tag\ngit tag -d v1.0.0\ngit push origin --delete v1.0.0"
          },
          {
            "title": "Semantic Versioning",
            "code": "# Semantic Versioning: MAJOR.MINOR.PATCH\n# v1.0.0 → v1.0.1 (patch: sửa bug)\n# v1.0.0 → v1.1.0 (minor: thêm tính năng)\n# v1.0.0 → v2.0.0 (major: breaking changes)\n\n# Workflow release:\ngit switch main\ngit pull\ngit tag -a v1.2.0 -m \"Release 1.2.0: Add search\"\ngit push origin v1.2.0\n\n# Checkout tag (detached HEAD)\ngit checkout v1.0.0\n# Tạo branch từ tag\ngit switch -c fix/v1-bug v1.0.0"
          }
        ]
      },
      {
        "id": "git-reset",
        "title": "git reset",
        "description": "git reset di chuyển HEAD và branch pointer về commit trước đó. Có 3 mode: --soft (giữ staging + working), --mixed (giữ working, reset staging), --hard (reset tất cả). Cẩn thận vì reset thay đổi lịch sử.",
        "exampleText": "Commit nhầm, muốn quay lại và commit lại. Dùng soft reset để giữ code nhưng huỷ commit.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Soft reset: huỷ commit, giữ staged\ngit reset --soft HEAD~1\n\n# Mixed reset (mặc định): huỷ commit + unstage\ngit reset HEAD~1\n\n# Hard reset: huỷ tất cả (MẤT CODE!)\ngit reset --hard HEAD~1\n\n# Reset về commit cụ thể\ngit reset --soft abc123"
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: commit nhầm message\ngit reset --soft HEAD~1\ngit commit -m \"Correct message\"\n\n# Tình huống: commit nhầm file\ngit reset --soft HEAD~1\ngit restore --staged secret.env\ngit commit -m \"Add feature without secrets\"\n\n# Tình huống: muốn huỷ 3 commit gần nhất\ngit reset --hard HEAD~3\n# ⚠️ MẤT tất cả thay đổi!\n\n# So sánh 3 modes:\n# --soft:  commit ← | staging ✓ | working ✓\n# --mixed: commit ← | staging ← | working ✓\n# --hard:  commit ← | staging ← | working ←\n\n# ⚠️ KHÔNG reset commit đã push!\n# Dùng git revert thay thế (xem bên dưới)"
          }
        ]
      },
      {
        "id": "git-revert",
        "title": "git revert",
        "description": "git revert tạo commit MỚI đảo ngược thay đổi của commit cũ. Khác reset ở chỗ revert không thay đổi lịch sử — an toàn khi commit đã push lên remote.",
        "exampleText": "Commit đã push lên GitHub gây lỗi. Dùng revert để tạo commit mới huỷ thay đổi mà không phá lịch sử.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Revert commit cuối\ngit revert HEAD\n\n# Revert commit cụ thể\ngit revert abc123\n\n# Revert nhiều commits\ngit revert abc123..def456\n\n# Revert không tạo commit ngay\ngit revert --no-commit abc123"
          },
          {
            "title": "Reset vs Revert",
            "code": "# Reset: xoá commit khỏi lịch sử\n# A → B → C → D\n# git reset --hard B\n# A → B (C, D biến mất)\n# ⚠️ Nguy hiểm nếu đã push\n\n# Revert: tạo commit mới đảo ngược\n# A → B → C → D\n# git revert D\n# A → B → C → D → D' (D' huỷ D)\n# ✅ An toàn, không phá lịch sử\n\n# Quy tắc:\n# Chưa push → dùng reset\n# Đã push → dùng revert"
          }
        ]
      },
      {
        "id": "git-cherry-pick",
        "title": "git cherry-pick",
        "description": "git cherry-pick copy một commit cụ thể từ branch khác vào branch hiện tại. Hữu ích khi chỉ muốn lấy một vài commit thay vì merge toàn bộ branch.",
        "exampleText": "Branch develop có commit fix bug rất cần. Cherry-pick commit đó vào main mà không cần merge toàn bộ develop.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Cherry-pick một commit\ngit cherry-pick abc123\n\n# Cherry-pick nhiều commits\ngit cherry-pick abc123 def456\n\n# Cherry-pick không commit ngay\ngit cherry-pick --no-commit abc123\n\n# Huỷ cherry-pick\ngit cherry-pick --abort"
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: lấy fix bug từ develop sang main\ngit switch main\ngit cherry-pick e4f5g6h\n# Commit e4f5g6h được copy vào main\n\n# Tình huống: lấy nhiều commits liên tiếp\ngit cherry-pick abc123..def456\n# Copy commits từ abc123 (exclusive) đến def456\n\n# Nếu conflict:\n# 1. Sửa conflict\n# 2. git add <file>\n# 3. git cherry-pick --continue"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Workflow & Best Practices",
    "cards": [
      {
        "id": "git-flow",
        "title": "Git Flow Workflow",
        "description": "Git Flow là quy trình làm việc với Git phổ biến, dùng các branch cố định: main (production), develop (phát triển), feature/* (tính năng), release/* (chuẩn bị release), hotfix/* (sửa lỗi khẩn).",
        "exampleText": "Team phát triển app: mỗi người tạo feature branch từ develop, merge lại develop khi xong, tạo release branch khi chuẩn bị deploy.",
        "codeBlocks": [
          {
            "title": "Git Flow branches",
            "code": "# main    — code production, luôn stable\n# develop — code phát triển, merge features\n# feature/* — từng tính năng\n# release/* — chuẩn bị release\n# hotfix/*  — fix bug khẩn trên production\n\n#        feature   feature\n#          ↓         ↓\n# develop: ──●──●──●──●──●──●──\n#            ↑              ↓\n# main:    ──●──────────────●──\n#                 ↑\n#              hotfix"
          },
          {
            "title": "Workflow",
            "code": "# 1. Tạo feature từ develop\ngit switch develop\ngit switch -c feature/login\n# ... code ...\ngit commit -m \"Add login\"\n\n# 2. Merge feature vào develop\ngit switch develop\ngit merge --no-ff feature/login\ngit branch -d feature/login\n\n# 3. Tạo release từ develop\ngit switch -c release/1.0.0\n# ... fix bugs, update version ...\ngit switch main\ngit merge --no-ff release/1.0.0\ngit tag v1.0.0\ngit switch develop\ngit merge --no-ff release/1.0.0\n\n# 4. Hotfix từ main\ngit switch -c hotfix/critical-bug main\n# ... fix ...\ngit switch main\ngit merge --no-ff hotfix/critical-bug\ngit tag v1.0.1\ngit switch develop\ngit merge --no-ff hotfix/critical-bug"
          }
        ]
      },
      {
        "id": "git-github-flow",
        "title": "GitHub Flow",
        "description": "GitHub Flow là quy trình đơn giản hơn Git Flow, chỉ dùng main + feature branches. Phù hợp cho team nhỏ và CI/CD. Quy tắc: main luôn deployable, tạo branch cho mọi thay đổi, dùng PR để review và merge.",
        "exampleText": "Quy trình đơn giản: tạo branch → code → push → tạo PR → review → merge → deploy.",
        "codeBlocks": [
          {
            "title": "GitHub Flow",
            "code": "# 1. Tạo branch từ main\ngit switch main\ngit pull\ngit switch -c feature/search\n\n# 2. Code và commit\ngit add .\ngit commit -m \"Add search feature\"\n\n# 3. Push lên remote\ngit push -u origin feature/search\n\n# 4. Tạo Pull Request trên GitHub\n# 5. Team review code\n# 6. Merge PR (trên GitHub)\n# 7. Delete branch\n\n# 8. Update local\ngit switch main\ngit pull\ngit branch -d feature/search"
          },
          {
            "title": "So sánh",
            "code": "# GitHub Flow:\n# ✅ Đơn giản, dễ hiểu\n# ✅ Phù hợp CI/CD, deploy liên tục\n# ✅ Tốt cho team nhỏ/vừa\n# ⚠️ Không có staging environment\n\n# Git Flow:\n# ✅ Rõ ràng cho release cycles\n# ✅ Phù hợp release scheduled\n# ✅ Tốt cho team lớn\n# ⚠️ Phức tạp hơn\n\n# Trunk-Based Development:\n# ✅ Commit thẳng vào main\n# ✅ Feature flags thay branch\n# ✅ Rất nhanh\n# ⚠️ Cần CI/CD tốt, test tự động"
          }
        ]
      },
      {
        "id": "git-aliases",
        "title": "Git Aliases",
        "description": "Git aliases cho phép tạo lệnh tắt cho các lệnh dài hoặc hay dùng. Cấu hình trong ~/.gitconfig hoặc bằng git config --global alias.",
        "exampleText": "Thay vì gõ git log --oneline --graph --all, có thể tạo alias git lg để chạy nhanh hơn.",
        "codeBlocks": [
          {
            "title": "Tạo aliases",
            "code": "# Aliases phổ biến\ngit config --global alias.st status\ngit config --global alias.co checkout\ngit config --global alias.sw switch\ngit config --global alias.br branch\ngit config --global alias.cm \"commit -m\"\ngit config --global alias.lg \"log --oneline --graph --all\"\ngit config --global alias.last \"log -1 HEAD\"\ngit config --global alias.unstage \"restore --staged\""
          },
          {
            "title": "Sử dụng",
            "code": "# Sau khi cấu hình:\ngit st          # = git status\ngit co main     # = git checkout main\ngit sw -c feat  # = git switch -c feat\ngit br          # = git branch\ngit cm \"msg\"    # = git commit -m \"msg\"\ngit lg          # = git log --oneline --graph --all\ngit last        # = git log -1 HEAD\ngit unstage .   # = git restore --staged .\n\n# Hoặc sửa trực tiếp ~/.gitconfig:\n# [alias]\n#   st = status\n#   lg = log --oneline --graph --all"
          }
        ]
      },
      {
        "id": "git-best-practices",
        "title": "Git Best Practices",
        "description": "Các nguyên tắc khi dùng Git để làm việc hiệu quả và tránh rắc rối. Bao gồm quy tắc commit, branch, pull request, và những lỗi thường gặp cần tránh.",
        "exampleText": "Commit thường xuyên, push hàng ngày, luôn pull trước khi push, và không bao giờ force push trên branch chung.",
        "codeBlocks": [
          {
            "title": "Nên làm",
            "code": "# ✅ Commit thường xuyên, mỗi commit nhỏ\n# ✅ Viết commit message rõ ràng\n# ✅ Pull trước khi push\n# ✅ Tạo branch cho mỗi tính năng/fix\n# ✅ Review code trước khi merge (PR)\n# ✅ Dùng .gitignore từ đầu\n# ✅ Tag mỗi release\n# ✅ Giữ main/master luôn clean và deployable"
          },
          {
            "title": "Không nên làm",
            "code": "# ❌ Force push trên branch chung\ngit push --force origin main  # NGUY HIỂM!\n\n# ❌ Commit file nhạy cảm\ngit add .env            # Password, API keys!\ngit add node_modules/   # Quá lớn, không cần\n\n# ❌ Commit quá lớn\n# Một commit sửa 50 files → khó review\n\n# ❌ Commit message vô nghĩa\ngit commit -m \"fix\"     # Fix cái gì?\ngit commit -m \"asdf\"    # ???\n\n# ❌ Rebase branch đã push\n# → Gây rắc rối cho người khác\n\n# ❌ Không pull trước khi push\n# → Dễ conflict\n\n# ❌ Làm việc trực tiếp trên main\n# → Luôn tạo branch riêng"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Lệnh nâng cao & Khắc phục sự cố",
    "cards": [
      {
        "id": "git-reflog",
        "title": "git reflog",
        "description": "git reflog hiển thị lịch sử của mọi thao tác đã thực hiện trên HEAD. Reflog là \"lưới an toàn\" — cho phép khôi phục commits đã bị reset hoặc branch đã bị xoá. Reflog chỉ có trên local.",
        "exampleText": "Lỡ reset --hard mất code? Dùng reflog tìm lại commit trước đó và khôi phục.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Xem reflog\ngit reflog\n\n# Xem reflog chi tiết\ngit reflog show HEAD\n\n# Khôi phục về trạng thái trước đó\ngit reset --hard HEAD@{2}"
          },
          {
            "title": "Ví dụ",
            "code": "# Tình huống: lỡ reset --hard mất code\n$ git reflog\na1b2c3d HEAD@{0}: reset: moving to HEAD~3\ne4f5g6h HEAD@{1}: commit: Add search feature\ni7j8k9l HEAD@{2}: commit: Add components\nm0n1o2p HEAD@{3}: commit: Initial setup\n\n# Khôi phục về commit trước khi reset\ngit reset --hard e4f5g6h\n# Code đã quay lại!\n\n# Tình huống: lỡ xoá branch\ngit reflog\n# Tìm commit cuối của branch đã xoá\ngit switch -c recovered-branch abc123"
          }
        ]
      },
      {
        "id": "git-bisect",
        "title": "git bisect",
        "description": "git bisect dùng binary search để tìm commit gây ra bug. Chỉ cần đánh dấu commit tốt (good) và commit xấu (bad), Git sẽ tự checkout các commit giữa để thu hẹp phạm vi tìm kiếm.",
        "exampleText": "App chạy tốt tuần trước, giờ bị lỗi. Có 100 commits trong tuần. Bisect tìm commit gây lỗi chỉ trong ~7 bước.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Bắt đầu bisect\ngit bisect start\n\n# Đánh dấu commit hiện tại là bad\ngit bisect bad\n\n# Đánh dấu commit tốt cuối cùng\ngit bisect good abc123\n\n# Git checkout commit giữa, test rồi đánh dấu:\ngit bisect good    # Nếu commit này ok\ngit bisect bad     # Nếu commit này bị lỗi\n\n# Lặp lại cho đến khi tìm ra commit gây bug\n# Kết thúc bisect\ngit bisect reset"
          },
          {
            "title": "Ví dụ",
            "code": "# 100 commits, tìm commit gây lỗi\ngit bisect start\ngit bisect bad HEAD          # Commit hiện tại bị lỗi\ngit bisect good v1.0.0       # Version 1.0.0 chạy tốt\n\n# Git checkout commit giữa\n# Bisecting: 50 commits left to test\n# Test app → vẫn lỗi\ngit bisect bad\n\n# Bisecting: 25 commits left to test\n# Test app → chạy tốt\ngit bisect good\n\n# ... lặp lại 5-6 lần nữa ...\n\n# abc123 is the first bad commit\n# commit abc123\n# Author: Dev\n# Date: ...\n# \"Change database query\"\n\ngit bisect reset  # Quay lại HEAD"
          }
        ]
      },
      {
        "id": "git-blame",
        "title": "git blame",
        "description": "git blame hiển thị ai đã sửa từng dòng trong file, cùng commit hash và timestamp. Hữu ích để tìm hiểu tại sao một đoạn code được viết như vậy, hoặc ai chịu trách nhiệm cho đoạn code.",
        "exampleText": "Thấy đoạn code lạ trong App.tsx, dùng git blame để biết ai viết và commit nào.",
        "codeBlocks": [
          {
            "title": "Cú pháp",
            "code": "# Blame toàn bộ file\ngit blame src/App.tsx\n\n# Blame dòng cụ thể\ngit blame -L 10,20 src/App.tsx\n\n# Blame bỏ qua whitespace changes\ngit blame -w src/App.tsx"
          },
          {
            "title": "Ví dụ output",
            "code": "$ git blame src/App.tsx\na1b2c3d (An    2024-01-15) import React from 'react';\ne4f5g6h (Bình  2024-02-20) import { useState } from 'react';\ni7j8k9l (An    2024-01-15) \nm0n1o2p (Cường 2024-03-10) function App() {\nm0n1o2p (Cường 2024-03-10)   const [count, setCount] = useState(0);\na1b2c3d (An    2024-01-15)   return (\n\n# Mỗi dòng hiển thị:\n# commit_hash (author date) nội_dung_code\n\n# Xem commit chi tiết\ngit show a1b2c3d"
          }
        ]
      },
      {
        "id": "git-common-fixes",
        "title": "Sửa lỗi thường gặp",
        "description": "Tổng hợp các tình huống hay gặp khi dùng Git và cách xử lý: sửa commit nhầm, huỷ thay đổi, khôi phục file đã xoá, detached HEAD, và xử lý conflict.",
        "exampleText": "Các tình huống \"cứu cánh\" khi dùng Git — biết cách xử lý giúp tránh mất code.",
        "codeBlocks": [
          {
            "title": "Sửa commit",
            "code": "# Sửa commit message cuối\ngit commit --amend -m \"New message\"\n\n# Thêm file vào commit cuối\ngit add forgotten.ts\ngit commit --amend --no-edit\n\n# Huỷ commit cuối (giữ code)\ngit reset --soft HEAD~1\n\n# Huỷ tất cả thay đổi chưa commit\ngit checkout -- .\n# hoặc\ngit restore .\n\n# Khôi phục file đã xoá\ngit checkout HEAD -- deleted-file.ts\n# hoặc\ngit restore --source HEAD deleted-file.ts"
          },
          {
            "title": "Tình huống khác",
            "code": "# Detached HEAD (HEAD không trên branch nào)\ngit switch -c new-branch  # Tạo branch mới\n# hoặc\ngit switch main            # Quay lại branch\n\n# Lỡ commit trên branch sai\ngit switch correct-branch\ngit cherry-pick abc123     # Copy commit sang\ngit switch wrong-branch\ngit reset --hard HEAD~1    # Xoá commit sai\n\n# Xem file ở commit cũ (không thay đổi)\ngit show abc123:src/App.tsx\n\n# Tìm commit chứa text cụ thể\ngit log --all --oneline -S \"searchText\"\n\n# Xoá tất cả untracked files\ngit clean -fd"
          }
        ]
      }
    ]
  }
];
