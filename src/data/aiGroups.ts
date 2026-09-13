import type { KnowledgeGroup } from "../types/knowledge";

export const aiGroups: KnowledgeGroup[] = [
  {
    "label": "Nhóm 1",
    "title": "AI, Machine Learning, Deep Learning cơ bản",
    "cards": [
      {
        "id": "ai-introduction",
        "title": "AI là gì",
        "description": "AI (Artificial Intelligence — Trí tuệ nhân tạo) là lĩnh vực khoa học máy tính tạo ra hệ thống có khả năng thực hiện các tác vụ đòi hỏi trí thông minh như con người: nhận dạng hình ảnh, hiểu ngôn ngữ, ra quyết định, dự đoán. AI bao gồm nhiều nhánh: Machine Learning, Deep Learning, NLP, Computer Vision.",
        "exampleText": "ChatGPT hiểu và trả lời câu hỏi (NLP), Google Photos tự nhận diện khuôn mặt (Computer Vision), YouTube gợi ý video (Recommendation System) — tất cả đều là AI.",
        "codeBlocks": [
          {
            "title": "Phân loại AI",
            "code": "# AI (Trí tuệ nhân tạo)\n# └── Machine Learning (Học máy)\n#     └── Deep Learning (Học sâu)\n#         ├── NLP (Xử lý ngôn ngữ tự nhiên)\n#         ├── Computer Vision (Thị giác máy tính)\n#         └── Generative AI (AI sinh)\n\n# Narrow AI (AI hẹp): giỏi 1 việc cụ thể\n#   → ChatGPT, AlphaGo, xe tự lái\n# General AI (AGI): thông minh như con người\n#   → Chưa tồn tại, đang nghiên cứu"
          },
          {
            "title": "Ứng dụng thực tế",
            "code": "# Chatbot / Assistant: ChatGPT, Gemini, Claude\n# Dịch thuật: Google Translate\n# Tìm kiếm: Google Search ranking\n# Gợi ý: Netflix, Spotify, YouTube\n# Nhận diện: Face ID, voice assistant\n# Y tế: chẩn đoán bệnh qua ảnh X-ray\n# Lái xe: Tesla Autopilot\n# Tạo nội dung: DALL-E, Midjourney, Sora\n# Code: GitHub Copilot, Cursor"
          }
        ]
      },
      {
        "id": "ai-machine-learning",
        "title": "Machine Learning là gì",
        "description": "Machine Learning (ML — Học máy) là nhánh của AI, cho phép máy tính học từ dữ liệu mà không cần lập trình rõ ràng từng quy tắc. Thay vì viết if-else, ML học patterns từ data và đưa ra dự đoán. Có 3 loại ML chính: Supervised, Unsupervised, và Reinforcement Learning.",
        "exampleText": "Thay vì viết quy tắc 'nếu email có từ X, Y, Z thì là spam', ML học từ hàng triệu email đã gán nhãn spam/not-spam để tự phát hiện email spam mới.",
        "codeBlocks": [
          {
            "title": "3 loại Machine Learning",
            "code": "# 1. Supervised Learning (Học có giám sát)\n# → Có dữ liệu + nhãn (label)\n# → Học mapping: input → output\n# Ví dụ: Phân loại email spam, dự đoán giá nhà\n\n# 2. Unsupervised Learning (Học không giám sát)\n# → Chỉ có dữ liệu, không có nhãn\n# → Tìm cấu trúc ẩn, nhóm tương tự\n# Ví dụ: Phân nhóm khách hàng, giảm chiều dữ liệu\n\n# 3. Reinforcement Learning (Học tăng cường)\n# → Agent tương tác với môi trường\n# → Học qua thưởng/phạt\n# Ví dụ: AlphaGo, robot học đi, game AI"
          },
          {
            "title": "Workflow ML cơ bản",
            "code": "# 1. Thu thập dữ liệu (Data Collection)\n# 2. Tiền xử lý (Data Preprocessing)\n# 3. Chọn model (Model Selection)\n# 4. Huấn luyện (Training)\n# 5. Đánh giá (Evaluation)\n# 6. Tinh chỉnh (Tuning)\n# 7. Triển khai (Deployment)\n\n# Data → Model → Prediction\n# Dữ liệu tốt > Model phức tạp\n# \"Garbage in, garbage out\""
          }
        ]
      },
      {
        "id": "ai-deep-learning",
        "title": "Deep Learning là gì",
        "description": "Deep Learning (Học sâu) là nhánh của ML, sử dụng mạng nơ-ron nhân tạo (Neural Networks) có nhiều lớp (layers) để học từ dữ liệu. 'Deep' nghĩa là nhiều lớp. DL đặc biệt mạnh với dữ liệu phức tạp: hình ảnh, âm thanh, văn bản, video.",
        "exampleText": "Nhận diện mèo trong ảnh: lớp đầu nhận biết cạnh, lớp giữa nhận biết hình dạng, lớp cuối nhận biết 'đây là con mèo'.",
        "codeBlocks": [
          {
            "title": "Neural Network cơ bản",
            "code": "# Neural Network (Mạng nơ-ron):\n# Input Layer → Hidden Layers → Output Layer\n#\n# [x1] ─┐\n#       ├─→ [h1] ─┐\n# [x2] ─┤         ├─→ [y]\n#       ├─→ [h2] ─┘\n# [x3] ─┘\n#\n# Mỗi kết nối có weight (trọng số)\n# Mỗi neuron có activation function\n# Training = tìm weights tối ưu"
          },
          {
            "title": "Các loại Neural Network",
            "code": "# CNN (Convolutional Neural Network)\n# → Xử lý hình ảnh, video\n# → Image classification, object detection\n\n# RNN (Recurrent Neural Network)\n# → Xử lý chuỗi, thời gian\n# → Text, speech, time series\n\n# Transformer\n# → Kiến trúc hiện đại, thay thế RNN\n# → GPT, BERT, LLaMA, Gemini\n# → NLP, vision, multimodal\n\n# GAN (Generative Adversarial Network)\n# → Tạo dữ liệu mới (ảnh, nhạc)\n# → Generator vs Discriminator\n\n# Diffusion Models\n# → Tạo ảnh chất lượng cao\n# → DALL-E, Stable Diffusion, Midjourney"
          }
        ]
      },
      {
        "id": "ai-key-concepts",
        "title": "Thuật ngữ quan trọng",
        "description": "Các thuật ngữ cốt lõi trong AI/ML cần nắm: Model, Dataset, Training, Inference, Parameters, Hyperparameters, Epoch, Batch, Loss, Gradient, Overfitting, Underfitting.",
        "exampleText": "Model là 'bộ não', Dataset là 'sách giáo khoa', Training là 'quá trình học', Inference là 'thi cử' — áp dụng kiến thức đã học vào bài mới.",
        "codeBlocks": [
          {
            "title": "Thuật ngữ cơ bản",
            "code": "# Model: hàm toán học học từ dữ liệu\n# Dataset: tập dữ liệu (train/val/test)\n# Training: quá trình model học từ data\n# Inference: dùng model đã train để dự đoán\n\n# Parameters: trọng số model học được\n# Hyperparameters: cấu hình do người set\n#   → learning rate, batch size, epochs\n\n# Epoch: 1 lần duyệt hết toàn bộ dataset\n# Batch: nhóm nhỏ data xử lý cùng lúc\n# Batch size: số mẫu trong 1 batch\n# Iteration: 1 lần update weights trên 1 batch"
          },
          {
            "title": "Training concepts",
            "code": "# Loss (hàm mất mát)\n# → Đo sai số giữa dự đoán và thực tế\n# → Mục tiêu: giảm loss\n\n# Gradient Descent\n# → Thuật toán tối ưu, tìm minimum của loss\n# → Cập nhật weights theo hướng giảm loss\n\n# Learning Rate\n# → Bước nhảy khi cập nhật weights\n# → Quá lớn → không hội tụ\n# → Quá nhỏ → học quá chậm\n\n# Overfitting: model học thuộc data, kém trên data mới\n# Underfitting: model quá đơn giản, học không đủ\n# Regularization: kỹ thuật chống overfitting\n#   → Dropout, L1/L2, Data Augmentation"
          }
        ]
      },
      {
        "id": "ai-python-ecosystem",
        "title": "Python & Công cụ AI",
        "description": "Python là ngôn ngữ phổ biến nhất cho AI/ML nhờ hệ sinh thái thư viện phong phú. Các công cụ chính: NumPy (tính toán), Pandas (xử lý data), Matplotlib (biểu đồ), Scikit-learn (ML cổ điển), PyTorch/TensorFlow (Deep Learning), Hugging Face (NLP/LLM).",
        "exampleText": "Muốn làm AI, bắt đầu với Python → NumPy/Pandas → Scikit-learn → PyTorch → Hugging Face.",
        "codeBlocks": [
          {
            "title": "Thư viện cốt lõi",
            "code": "# Tính toán & Data\nimport numpy as np          # Mảng, ma trận\nimport pandas as pd         # DataFrame, CSV\nimport matplotlib.pyplot as plt  # Biểu đồ\n\n# Machine Learning cổ điển\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\n# Deep Learning\nimport torch                # PyTorch\nimport tensorflow as tf     # TensorFlow\n\n# NLP & LLM\nfrom transformers import pipeline  # Hugging Face"
          },
          {
            "title": "Môi trường phát triển",
            "code": "# Jupyter Notebook / JupyterLab\n# → Chạy code từng cell, xem kết quả ngay\npip install jupyterlab\njupyter lab\n\n# Google Colab (miễn phí GPU)\n# → colab.research.google.com\n# → Không cần cài đặt gì\n\n# Kaggle Notebooks\n# → kaggle.com\n# → Dataset + GPU miễn phí\n\n# Cài đặt môi trường\npip install numpy pandas matplotlib scikit-learn\npip install torch torchvision\npip install transformers datasets"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 2",
    "title": "Dữ liệu & Tiền xử lý",
    "cards": [
      {
        "id": "ai-dataset",
        "title": "Dataset (Tập dữ liệu)",
        "description": "Dataset là tập dữ liệu dùng để training và đánh giá model. Thường chia thành 3 phần: Training set (70-80%, để model học), Validation set (10-15%, để chọn hyperparameters), Test set (10-15%, để đánh giá cuối cùng).",
        "exampleText": "Có 10,000 ảnh mèo/chó: 8,000 dùng training, 1,000 dùng validation để chỉnh model, 1,000 dùng test để đánh giá kết quả cuối.",
        "codeBlocks": [
          {
            "title": "Chia dataset",
            "code": "from sklearn.model_selection import train_test_split\n\n# Chia data thành train/test\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.2,      # 20% test\n    random_state=42,    # Seed để kết quả lặp lại\n    stratify=y,         # Giữ tỉ lệ class\n)\n\n# Chia thêm validation\nX_train, X_val, y_train, y_val = train_test_split(\n    X_train, y_train,\n    test_size=0.15,\n    random_state=42,\n)\n\nprint(f'Train: {len(X_train)}')\nprint(f'Val: {len(X_val)}')\nprint(f'Test: {len(X_test)}')"
          },
          {
            "title": "Nguồn dataset phổ biến",
            "code": "# Kaggle: kaggle.com/datasets\n# → Hàng triệu datasets miễn phí\n\n# Hugging Face: huggingface.co/datasets\nfrom datasets import load_dataset\ndataset = load_dataset('imdb')  # Movie reviews\n\n# Scikit-learn built-in\nfrom sklearn.datasets import load_iris, load_digits\niris = load_iris()  # 150 mẫu hoa Iris\n\n# PyTorch built-in\nfrom torchvision.datasets import MNIST, CIFAR10\ntrain = MNIST(root='./data', train=True, download=True)\n\n# Datasets nổi tiếng:\n# MNIST: chữ số viết tay (28x28)\n# CIFAR-10: 60K ảnh 10 class\n# ImageNet: 14M ảnh 1000 class\n# IMDB: 50K movie reviews (sentiment)\n# SQuAD: 100K+ câu hỏi (QA)"
          }
        ]
      },
      {
        "id": "ai-data-preprocessing",
        "title": "Tiền xử lý dữ liệu",
        "description": "Tiền xử lý (preprocessing) là bước chuẩn bị dữ liệu trước khi đưa vào model. Bao gồm: xử lý missing values, chuẩn hoá (normalization/standardization), encoding categorical data, và feature engineering. Dữ liệu sạch → model tốt hơn.",
        "exampleText": "Dataset có cột tuổi từ 0-100 và cột thu nhập từ 0-1 tỷ. Cần chuẩn hoá để model không bị thiên vị về cột thu nhập có giá trị lớn hơn.",
        "codeBlocks": [
          {
            "title": "Xử lý dữ liệu với Pandas",
            "code": "import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\n\n# Xem thông tin tổng quan\ndf.info()\ndf.describe()\ndf.isnull().sum()  # Đếm missing values\n\n# Xử lý missing values\ndf['age'].fillna(df['age'].mean(), inplace=True)\ndf.dropna(subset=['target'], inplace=True)\n\n# Encoding categorical\ndf['gender'] = df['gender'].map({'M': 0, 'F': 1})\n\n# One-hot encoding\ndf = pd.get_dummies(df, columns=['city'], drop_first=True)"
          },
          {
            "title": "Chuẩn hoá dữ liệu",
            "code": "from sklearn.preprocessing import (\n    StandardScaler,\n    MinMaxScaler,\n    LabelEncoder,\n)\n\n# StandardScaler: mean=0, std=1\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n# ⚠️ fit trên train, transform trên test\n\n# MinMaxScaler: scale về [0, 1]\nscaler = MinMaxScaler()\nX_scaled = scaler.fit_transform(X)\n\n# Label Encoder: text → số\nle = LabelEncoder()\ny_encoded = le.fit_transform(y)  # ['cat','dog'] → [0,1]\n\n# Quy tắc:\n# Numerical: StandardScaler hoặc MinMaxScaler\n# Categorical ít giá trị: One-Hot Encoding\n# Categorical nhiều giá trị: Label Encoding\n# Target: LabelEncoder"
          }
        ]
      },
      {
        "id": "ai-data-augmentation",
        "title": "Data Augmentation",
        "description": "Data Augmentation tạo thêm dữ liệu bằng cách biến đổi dữ liệu hiện có. Cho ảnh: xoay, lật, crop, đổi màu. Cho text: paraphrase, back-translation, synonym replacement. Giúp tăng data, giảm overfitting.",
        "exampleText": "Có 1,000 ảnh mèo, augmentation tạo ra 5,000 ảnh bằng cách xoay, lật ngang, đổi độ sáng — model học tốt hơn vì thấy nhiều biến thể.",
        "codeBlocks": [
          {
            "title": "Augmentation cho ảnh (PyTorch)",
            "code": "from torchvision import transforms\n\ntrain_transform = transforms.Compose([\n    transforms.RandomResizedCrop(224),\n    transforms.RandomHorizontalFlip(),\n    transforms.RandomRotation(15),\n    transforms.ColorJitter(\n        brightness=0.2,\n        contrast=0.2,\n        saturation=0.2,\n    ),\n    transforms.ToTensor(),\n    transforms.Normalize(\n        mean=[0.485, 0.456, 0.406],\n        std=[0.229, 0.224, 0.225],\n    ),\n])\n\n# Không augment test data!\ntest_transform = transforms.Compose([\n    transforms.Resize(256),\n    transforms.CenterCrop(224),\n    transforms.ToTensor(),\n    transforms.Normalize(\n        mean=[0.485, 0.456, 0.406],\n        std=[0.229, 0.224, 0.225],\n    ),\n])"
          },
          {
            "title": "Augmentation cho text",
            "code": "# Kỹ thuật augmentation text:\n\n# 1. Synonym Replacement\n# \"Con mèo chạy nhanh\" → \"Con mèo phi nhanh\"\n\n# 2. Back Translation\n# Việt → Anh → Việt (câu khác nhưng cùng ý)\n\n# 3. Random Insertion/Deletion\n# Thêm/xóa từ ngẫu nhiên\n\n# 4. Paraphrase (dùng LLM)\n# Dùng GPT/Gemini viết lại câu\n\n# Thư viện: nlpaug\nimport nlpaug.augmenter.word as naw\n\naug = naw.SynonymAug(aug_src='wordnet')\naugmented = aug.augment('The cat runs fast')\nprint(augmented)\n# 'The cat sprints fast'"
          }
        ]
      },
      {
        "id": "ai-feature-engineering",
        "title": "Feature Engineering",
        "description": "Feature Engineering là quá trình tạo, chọn, và biến đổi features (đặc trưng) từ dữ liệu thô để model học hiệu quả hơn. Feature tốt quan trọng hơn model phức tạp. Bao gồm: tạo feature mới, chọn feature quan trọng, giảm chiều dữ liệu.",
        "exampleText": "Từ cột 'ngày sinh', tạo feature 'tuổi'. Từ 'ngày đặt hàng', tạo feature 'ngày trong tuần', 'tháng', 'cuối tuần hay không'.",
        "codeBlocks": [
          {
            "title": "Tạo features",
            "code": "import pandas as pd\n\n# Tạo feature từ datetime\ndf['date'] = pd.to_datetime(df['date'])\ndf['day_of_week'] = df['date'].dt.dayofweek\ndf['month'] = df['date'].dt.month\ndf['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)\n\n# Tạo feature tổ hợp\ndf['bmi'] = df['weight'] / (df['height'] / 100) ** 2\ndf['price_per_sqm'] = df['price'] / df['area']\n\n# Binning (chia nhóm)\ndf['age_group'] = pd.cut(\n    df['age'],\n    bins=[0, 18, 35, 60, 100],\n    labels=['teen', 'young', 'middle', 'senior'],\n)"
          },
          {
            "title": "Chọn features",
            "code": "from sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.decomposition import PCA\n\n# SelectKBest: chọn K features tốt nhất\nselector = SelectKBest(f_classif, k=10)\nX_selected = selector.fit_transform(X, y)\n\n# Feature importance từ Random Forest\nfrom sklearn.ensemble import RandomForestClassifier\n\nrf = RandomForestClassifier()\nrf.fit(X_train, y_train)\nimportances = rf.feature_importances_\n\n# PCA: giảm chiều dữ liệu\npca = PCA(n_components=50)\nX_reduced = pca.fit_transform(X)\nprint(f'Explained variance: {pca.explained_variance_ratio_.sum():.2%}')"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 3",
    "title": "Scikit-learn & ML cổ điển",
    "cards": [
      {
        "id": "ai-sklearn-workflow",
        "title": "Scikit-learn Workflow",
        "description": "Scikit-learn (sklearn) là thư viện ML phổ biến nhất cho Python. API nhất quán: fit() để train, predict() để dự đoán, score() để đánh giá. Hỗ trợ hàng trăm thuật toán ML cổ điển.",
        "exampleText": "Bất kể dùng thuật toán nào (Linear Regression, Random Forest, SVM), quy trình luôn giống nhau: tạo model, fit, predict.",
        "codeBlocks": [
          {
            "title": "Workflow chuẩn",
            "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# 1. Chuẩn bị data\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# 2. Tạo model\nmodel = RandomForestClassifier(\n    n_estimators=100,\n    max_depth=10,\n    random_state=42,\n)\n\n# 3. Training\nmodel.fit(X_train, y_train)\n\n# 4. Dự đoán\ny_pred = model.predict(X_test)\n\n# 5. Đánh giá\nprint(f'Accuracy: {accuracy_score(y_test, y_pred):.4f}')\nprint(classification_report(y_test, y_pred))"
          },
          {
            "title": "Pipeline",
            "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\n# Pipeline gom preprocessing + model\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('model', SVC(kernel='rbf', C=1.0)),\n])\n\n# fit + predict tự động qua pipeline\npipe.fit(X_train, y_train)\ny_pred = pipe.predict(X_test)\nscore = pipe.score(X_test, y_test)\n\n# Cross-validation\nfrom sklearn.model_selection import cross_val_score\nscores = cross_val_score(pipe, X, y, cv=5)\nprint(f'CV Accuracy: {scores.mean():.4f} ± {scores.std():.4f}')"
          }
        ]
      },
      {
        "id": "ai-classification",
        "title": "Classification (Phân loại)",
        "description": "Classification là bài toán dự đoán nhãn (class/category) cho dữ liệu mới. Binary classification: 2 class (spam/not spam). Multi-class: nhiều class (loại hoa, loại bệnh). Các thuật toán: Logistic Regression, Decision Tree, Random Forest, SVM, KNN.",
        "exampleText": "Phân loại email spam hay không, chẩn đoán bệnh, nhận dạng chữ viết tay 0-9 — đều là bài toán classification.",
        "codeBlocks": [
          {
            "title": "Các thuật toán phổ biến",
            "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.neighbors import KNeighborsClassifier\n\n# So sánh nhiều model\nmodels = {\n    'Logistic Regression': LogisticRegression(),\n    'Decision Tree': DecisionTreeClassifier(),\n    'Random Forest': RandomForestClassifier(),\n    'SVM': SVC(),\n    'KNN': KNeighborsClassifier(),\n}\n\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    score = model.score(X_test, y_test)\n    print(f'{name}: {score:.4f}')"
          },
          {
            "title": "Đánh giá Classification",
            "code": "from sklearn.metrics import (\n    accuracy_score,\n    precision_score,\n    recall_score,\n    f1_score,\n    confusion_matrix,\n    classification_report,\n)\n\ny_pred = model.predict(X_test)\n\n# Accuracy: tỉ lệ dự đoán đúng\nprint(f'Accuracy: {accuracy_score(y_test, y_pred):.4f}')\n\n# Precision: trong các dự đoán Positive, bao nhiêu đúng\n# Recall: trong các thực tế Positive, bao nhiêu được tìm ra\n# F1: trung bình hài hoà precision và recall\nprint(classification_report(y_test, y_pred))\n\n# Confusion Matrix\ncm = confusion_matrix(y_test, y_pred)\n#           Predicted\n#           Neg   Pos\n# Actual Neg [TN    FP]\n#        Pos [FN    TP]"
          }
        ]
      },
      {
        "id": "ai-regression",
        "title": "Regression (Hồi quy)",
        "description": "Regression là bài toán dự đoán giá trị liên tục (continuous value). Khác classification (dự đoán nhãn rời rạc), regression dự đoán số thực. Ví dụ: dự đoán giá nhà, nhiệt độ, doanh thu.",
        "exampleText": "Dự đoán giá nhà dựa trên diện tích, số phòng, vị trí — output là một con số (500 triệu, 1.2 tỷ...) chứ không phải nhãn.",
        "codeBlocks": [
          {
            "title": "Ví dụ Regression",
            "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\n# Linear Regression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\n\n# Đánh giá\nmse = mean_squared_error(y_test, y_pred)\nrmse = np.sqrt(mse)\nr2 = r2_score(y_test, y_pred)\n\nprint(f'RMSE: {rmse:.2f}')  # Sai số trung bình\nprint(f'R² Score: {r2:.4f}')  # 1.0 = perfect\n\n# Hệ số (coefficients)\nprint(f'Coefficients: {model.coef_}')\nprint(f'Intercept: {model.intercept_}')"
          },
          {
            "title": "Metrics Regression",
            "code": "# MAE (Mean Absolute Error)\n# → Trung bình sai số tuyệt đối\n# → Dễ hiểu: \"sai trung bình X đơn vị\"\n\n# MSE (Mean Squared Error)\n# → Trung bình bình phương sai số\n# → Phạt nặng sai số lớn\n\n# RMSE (Root MSE)\n# → Căn bậc 2 của MSE\n# → Cùng đơn vị với target\n\n# R² Score (Coefficient of Determination)\n# → 0 → 1 (1 = perfect)\n# → % variance mà model giải thích được\n\nfrom sklearn.metrics import (\n    mean_absolute_error,  # MAE\n    mean_squared_error,   # MSE\n    r2_score,             # R²\n)"
          }
        ]
      },
      {
        "id": "ai-hyperparameter-tuning",
        "title": "Hyperparameter Tuning",
        "description": "Hyperparameter tuning là quá trình tìm bộ hyperparameters tối ưu cho model. Hyperparameters là cấu hình do người dùng set (learning rate, n_estimators, max_depth...), khác parameters do model tự học. Phương pháp: Grid Search, Random Search, Bayesian Optimization.",
        "exampleText": "Random Forest có hyperparameters: bao nhiêu cây (n_estimators), mỗi cây sâu bao nhiêu (max_depth). Tuning tìm tổ hợp cho kết quả tốt nhất.",
        "codeBlocks": [
          {
            "title": "Grid Search",
            "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\n# Định nghĩa grid\nparam_grid = {\n    'n_estimators': [50, 100, 200],\n    'max_depth': [5, 10, 20, None],\n    'min_samples_split': [2, 5, 10],\n}\n\n# Grid Search + Cross Validation\ngrid = GridSearchCV(\n    RandomForestClassifier(random_state=42),\n    param_grid,\n    cv=5,\n    scoring='accuracy',\n    n_jobs=-1,  # Dùng tất cả CPU cores\n    verbose=1,\n)\n\ngrid.fit(X_train, y_train)\n\nprint(f'Best params: {grid.best_params_}')\nprint(f'Best score: {grid.best_score_:.4f}')\n\n# Dùng model tốt nhất\nbest_model = grid.best_estimator_\ny_pred = best_model.predict(X_test)"
          },
          {
            "title": "Random Search",
            "code": "from sklearn.model_selection import RandomizedSearchCV\nfrom scipy.stats import randint, uniform\n\n# Random Search: thử ngẫu nhiên từ phân phối\nparam_dist = {\n    'n_estimators': randint(50, 500),\n    'max_depth': randint(3, 30),\n    'min_samples_split': randint(2, 20),\n    'min_samples_leaf': randint(1, 10),\n}\n\nrandom_search = RandomizedSearchCV(\n    RandomForestClassifier(random_state=42),\n    param_dist,\n    n_iter=100,       # Số lần thử\n    cv=5,\n    scoring='accuracy',\n    random_state=42,\n    n_jobs=-1,\n)\n\nrandom_search.fit(X_train, y_train)\nprint(f'Best: {random_search.best_score_:.4f}')\nprint(f'Params: {random_search.best_params_}')\n\n# Random Search thường tốt hơn Grid Search\n# khi có nhiều hyperparameters"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 4",
    "title": "PyTorch & Deep Learning",
    "cards": [
      {
        "id": "ai-pytorch-basics",
        "title": "PyTorch cơ bản",
        "description": "PyTorch là framework Deep Learning phổ biến nhất (đặc biệt trong nghiên cứu). Được Facebook (Meta) phát triển. PyTorch dùng dynamic computation graph (eager execution), API Pythonic, và hỗ trợ GPU acceleration.",
        "exampleText": "PyTorch được dùng bởi OpenAI (GPT), Meta (LLaMA), Google (một phần), Tesla, và hầu hết nghiên cứu AI hiện đại.",
        "codeBlocks": [
          {
            "title": "Tensor cơ bản",
            "code": "import torch\n\n# Tạo tensor\nx = torch.tensor([1, 2, 3])\nx = torch.zeros(3, 4)       # 3x4 toàn số 0\nx = torch.ones(3, 4)        # 3x4 toàn số 1\nx = torch.randn(3, 4)       # 3x4 số ngẫu nhiên\n\n# Thuộc tính\nprint(x.shape)    # torch.Size([3, 4])\nprint(x.dtype)    # torch.float32\nprint(x.device)   # cpu hoặc cuda:0\n\n# Chuyển sang GPU\ndevice = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\nx = x.to(device)\n\n# Phép tính\ny = x + 2\nz = x @ x.T       # Nhân ma trận\nresult = x.mean()  # Trung bình"
          },
          {
            "title": "Autograd (tự động tính gradient)",
            "code": "import torch\n\n# requires_grad=True: theo dõi phép tính\nx = torch.tensor([2.0, 3.0], requires_grad=True)\n\n# Forward pass\ny = x ** 2 + 3 * x + 1\nloss = y.sum()\n\n# Backward pass (tính gradient)\nloss.backward()\n\n# Gradient\nprint(x.grad)  # dy/dx = 2x + 3 → [7.0, 9.0]\n\n# Autograd tự động tính đạo hàm\n# → Nền tảng của backpropagation\n# → Không cần tính tay gradient"
          }
        ]
      },
      {
        "id": "ai-pytorch-model",
        "title": "Xây dựng Model với PyTorch",
        "description": "Trong PyTorch, model được định nghĩa bằng class kế thừa nn.Module. Cần implement __init__ (định nghĩa layers) và forward (định nghĩa data flow). PyTorch cung cấp sẵn nhiều layers: Linear, Conv2d, LSTM, Transformer.",
        "exampleText": "Model phân loại ảnh có các lớp: Conv2d → BatchNorm → ReLU → MaxPool → Linear → Output.",
        "codeBlocks": [
          {
            "title": "Model cơ bản",
            "code": "import torch\nimport torch.nn as nn\n\nclass SimpleClassifier(nn.Module):\n    def __init__(self, input_size, hidden_size, num_classes):\n        super().__init__()\n        self.layers = nn.Sequential(\n            nn.Linear(input_size, hidden_size),\n            nn.ReLU(),\n            nn.Dropout(0.3),\n            nn.Linear(hidden_size, hidden_size),\n            nn.ReLU(),\n            nn.Dropout(0.3),\n            nn.Linear(hidden_size, num_classes),\n        )\n\n    def forward(self, x):\n        return self.layers(x)\n\n# Tạo model\nmodel = SimpleClassifier(\n    input_size=784,\n    hidden_size=256,\n    num_classes=10,\n)\nprint(model)\n\n# Đếm parameters\ntotal = sum(p.numel() for p in model.parameters())\nprint(f'Total parameters: {total:,}')"
          },
          {
            "title": "CNN Model",
            "code": "class CNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 32, kernel_size=3, padding=1),\n            nn.BatchNorm2d(32),\n            nn.ReLU(),\n            nn.MaxPool2d(2),\n\n            nn.Conv2d(32, 64, kernel_size=3, padding=1),\n            nn.BatchNorm2d(64),\n            nn.ReLU(),\n            nn.MaxPool2d(2),\n        )\n        self.classifier = nn.Sequential(\n            nn.Flatten(),\n            nn.Linear(64 * 8 * 8, 256),\n            nn.ReLU(),\n            nn.Dropout(0.5),\n            nn.Linear(256, num_classes),\n        )\n\n    def forward(self, x):\n        x = self.features(x)\n        x = self.classifier(x)\n        return x"
          }
        ]
      },
      {
        "id": "ai-training-loop",
        "title": "Training Loop",
        "description": "Training loop là vòng lặp huấn luyện model: forward pass (tính output), tính loss, backward pass (tính gradient), và update weights. Mỗi epoch duyệt hết dataset. Cần DataLoader để chia data thành batches.",
        "exampleText": "Mỗi epoch: duyệt từng batch data → forward → tính loss → backward → update weights → lặp lại.",
        "codeBlocks": [
          {
            "title": "Training loop chuẩn",
            "code": "import torch\nimport torch.nn as nn\nfrom torch.utils.data import DataLoader\n\n# Setup\nmodel = CNN().to(device)\ncriterion = nn.CrossEntropyLoss()\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\n\n# Training loop\nnum_epochs = 10\nfor epoch in range(num_epochs):\n    model.train()  # Bật training mode\n    total_loss = 0\n\n    for batch_idx, (data, target) in enumerate(train_loader):\n        data, target = data.to(device), target.to(device)\n\n        # Forward pass\n        output = model(data)\n        loss = criterion(output, target)\n\n        # Backward pass\n        optimizer.zero_grad()  # Reset gradients\n        loss.backward()        # Tính gradients\n        optimizer.step()       # Update weights\n\n        total_loss += loss.item()\n\n    avg_loss = total_loss / len(train_loader)\n    print(f'Epoch {epoch+1}/{num_epochs}, Loss: {avg_loss:.4f}')"
          },
          {
            "title": "Validation & Save",
            "code": "# Validation\ndef evaluate(model, val_loader, device):\n    model.eval()  # Tắt dropout, batchnorm\n    correct = 0\n    total = 0\n\n    with torch.no_grad():  # Không tính gradient\n        for data, target in val_loader:\n            data, target = data.to(device), target.to(device)\n            output = model(data)\n            _, predicted = output.max(1)\n            total += target.size(0)\n            correct += predicted.eq(target).sum().item()\n\n    accuracy = correct / total\n    return accuracy\n\n# Save model\ntorch.save(model.state_dict(), 'best_model.pth')\n\n# Load model\nmodel = CNN()\nmodel.load_state_dict(torch.load('best_model.pth'))\nmodel.eval()"
          }
        ]
      },
      {
        "id": "ai-transfer-learning",
        "title": "Transfer Learning",
        "description": "Transfer Learning dùng model đã được pre-trained trên dataset lớn (như ImageNet) và fine-tune cho bài toán cụ thể. Giúp tiết kiệm thời gian, data, và compute. Freeze các lớp đầu (feature extraction) và chỉ train lớp cuối.",
        "exampleText": "Thay vì train từ đầu trên 100 ảnh mèo/chó, dùng ResNet đã train trên ImageNet (14M ảnh) và chỉ fine-tune lớp cuối → kết quả tốt hơn nhiều.",
        "codeBlocks": [
          {
            "title": "Transfer Learning với PyTorch",
            "code": "import torchvision.models as models\nimport torch.nn as nn\n\n# Load pre-trained model\nmodel = models.resnet50(weights='IMAGENET1K_V2')\n\n# Freeze tất cả layers\nfor param in model.parameters():\n    param.requires_grad = False\n\n# Thay lớp cuối (classifier)\nnum_features = model.fc.in_features\nmodel.fc = nn.Sequential(\n    nn.Linear(num_features, 256),\n    nn.ReLU(),\n    nn.Dropout(0.3),\n    nn.Linear(256, num_classes),  # num_classes của bài toán\n)\n\nmodel = model.to(device)\n\n# Chỉ train lớp cuối\noptimizer = torch.optim.Adam(\n    model.fc.parameters(),  # Chỉ params lớp mới\n    lr=0.001,\n)"
          },
          {
            "title": "Fine-tuning",
            "code": "# Strategy 1: Chỉ train lớp cuối (Feature Extraction)\n# → Nhanh, ít data cũng ok\n# → Freeze hết, chỉ train classifier\n\n# Strategy 2: Fine-tune toàn bộ (learning rate nhỏ)\n# → Kết quả tốt hơn nếu đủ data\n# → Unfreeze hết, learning rate rất nhỏ\nfor param in model.parameters():\n    param.requires_grad = True\n\noptimizer = torch.optim.Adam(\n    model.parameters(),\n    lr=1e-5,  # Learning rate rất nhỏ\n)\n\n# Strategy 3: Gradual Unfreezing\n# → Unfreeze từng layer từ cuối lên\n# → Learning rate khác nhau cho mỗi layer\noptimizer = torch.optim.Adam([\n    {'params': model.layer4.parameters(), 'lr': 1e-4},\n    {'params': model.fc.parameters(), 'lr': 1e-3},\n])"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 5",
    "title": "NLP & Large Language Models",
    "cards": [
      {
        "id": "ai-nlp-basics",
        "title": "NLP cơ bản",
        "description": "NLP (Natural Language Processing — Xử lý ngôn ngữ tự nhiên) là lĩnh vực AI giúp máy tính hiểu và tạo ra ngôn ngữ con người. Các bài toán NLP: text classification, sentiment analysis, named entity recognition, machine translation, question answering, text generation.",
        "exampleText": "ChatGPT hiểu câu hỏi và trả lời, Google Translate dịch ngôn ngữ, Gmail tự phân loại email — tất cả là NLP.",
        "codeBlocks": [
          {
            "title": "NLP với Hugging Face",
            "code": "from transformers import pipeline\n\n# Sentiment Analysis\nsentiment = pipeline('sentiment-analysis')\nresult = sentiment('I love this product!')\n# [{'label': 'POSITIVE', 'score': 0.9998}]\n\n# Text Classification\nclassifier = pipeline('zero-shot-classification')\nresult = classifier(\n    'This movie was fantastic!',\n    candidate_labels=['positive', 'negative', 'neutral'],\n)\n\n# Named Entity Recognition\nner = pipeline('ner', grouped_entities=True)\nresult = ner('Elon Musk is the CEO of Tesla in California')\n# [{'entity_group': 'PER', 'word': 'Elon Musk'},\n#  {'entity_group': 'ORG', 'word': 'Tesla'},\n#  {'entity_group': 'LOC', 'word': 'California'}]"
          },
          {
            "title": "Text Preprocessing",
            "code": "# Tokenization: chia text thành tokens\nfrom transformers import AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')\ntokens = tokenizer('Hello, how are you?')\n# {'input_ids': [101, 7592, 1010, 2129, ...],\n#  'attention_mask': [1, 1, 1, 1, ...]}\n\n# Kỹ thuật preprocessing truyền thống:\n# 1. Lowercase: \"Hello\" → \"hello\"\n# 2. Remove punctuation: \"hello!\" → \"hello\"\n# 3. Remove stopwords: \"the\", \"is\", \"a\"\n# 4. Stemming: \"running\" → \"run\"\n# 5. Lemmatization: \"better\" → \"good\"\n\n# Modern NLP (Transformers):\n# → Tokenizer xử lý hết\n# → Subword tokenization (BPE, WordPiece)\n# → Không cần preprocessing thủ công nhiều"
          }
        ]
      },
      {
        "id": "ai-transformer",
        "title": "Transformer Architecture",
        "description": "Transformer là kiến trúc neural network cách mạng (2017, \"Attention Is All You Need\"). Dùng cơ chế Self-Attention để xử lý toàn bộ chuỗi cùng lúc (thay vì tuần tự như RNN). Nền tảng của GPT, BERT, LLaMA, Gemini, và hầu hết model AI hiện đại.",
        "exampleText": "Transformer như một người đọc bài văn và highlight các từ liên quan đến nhau, xử lý tất cả từ cùng lúc thay vì đọc từng từ.",
        "codeBlocks": [
          {
            "title": "Kiến trúc Transformer",
            "code": "# Transformer gồm:\n# 1. Encoder: hiểu input (BERT, RoBERTa)\n# 2. Decoder: tạo output (GPT)\n# 3. Encoder-Decoder: cả hai (T5, BART)\n\n# Self-Attention:\n# → Mỗi từ \"nhìn\" tất cả các từ khác\n# → Tính trọng số attention cho từng cặp\n# → Query, Key, Value matrices\n\n# Multi-Head Attention:\n# → Nhiều attention heads song song\n# → Mỗi head học pattern khác nhau\n\n# Positional Encoding:\n# → Thêm thông tin vị trí vì Transformer\n#   không xử lý tuần tự\n\n# Các model Transformer phổ biến:\n# BERT: encoder-only, hiểu ngữ cảnh 2 chiều\n# GPT: decoder-only, sinh text từ trái → phải\n# T5: encoder-decoder, text-to-text\n# LLaMA: decoder-only, open-source"
          },
          {
            "title": "Dùng pre-trained Transformer",
            "code": "from transformers import (\n    AutoTokenizer,\n    AutoModelForSequenceClassification,\n)\nimport torch\n\n# Load pre-trained model\nmodel_name = 'bert-base-uncased'\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForSequenceClassification.from_pretrained(\n    model_name,\n    num_labels=2,\n)\n\n# Tokenize input\ntext = 'This movie is great!'\ninputs = tokenizer(\n    text,\n    return_tensors='pt',\n    padding=True,\n    truncation=True,\n    max_length=512,\n)\n\n# Predict\nwith torch.no_grad():\n    outputs = model(**inputs)\n    predictions = torch.softmax(outputs.logits, dim=1)\n    print(predictions)  # [[0.1, 0.9]] → positive"
          }
        ]
      },
      {
        "id": "ai-llm",
        "title": "Large Language Models (LLM)",
        "description": "LLM (Large Language Models) là mô hình ngôn ngữ lớn với hàng tỷ parameters, được pre-train trên lượng text khổng lồ. LLM có khả năng: hiểu ngữ cảnh, sinh text, reasoning, code generation, và nhiều tác vụ khác. Các LLM nổi tiếng: GPT-4, Gemini, Claude, LLaMA, Mistral.",
        "exampleText": "GPT-4 có ~1.8 nghìn tỷ parameters, được train trên phần lớn text trên internet. Nó có thể viết văn, giải toán, code, và phân tích hình ảnh.",
        "codeBlocks": [
          {
            "title": "Gọi LLM qua API",
            "code": "# OpenAI API\nfrom openai import OpenAI\n\nclient = OpenAI(api_key='sk-...')\n\nresponse = client.chat.completions.create(\n    model='gpt-4',\n    messages=[\n        {'role': 'system', 'content': 'Bạn là trợ lý hữu ích.'},\n        {'role': 'user', 'content': 'Giải thích Transformer'},\n    ],\n    temperature=0.7,\n    max_tokens=500,\n)\n\nprint(response.choices[0].message.content)\n\n# Google Gemini API\nimport google.generativeai as genai\n\ngenai.configure(api_key='...')\nmodel = genai.GenerativeModel('gemini-pro')\nresponse = model.generate_content('Giải thích AI')\nprint(response.text)"
          },
          {
            "title": "LLM concepts",
            "code": "# Temperature: độ sáng tạo (0 → 2)\n# → 0: deterministic, chọn token xác suất cao nhất\n# → 1: balanced\n# → 2: rất random, sáng tạo\n\n# Tokens: đơn vị xử lý của LLM\n# \"Hello world\" → [\"Hello\", \" world\"] (2 tokens)\n# 1 token ≈ 4 ký tự tiếng Anh\n# 1 token ≈ 1-2 ký tự tiếng Việt\n\n# Context Window: số tokens tối đa\n# GPT-4: 128K tokens\n# Gemini 1.5: 1M+ tokens\n# Claude 3: 200K tokens\n\n# Prompt: input cho LLM\n# Completion: output từ LLM\n# System prompt: chỉ dẫn vai trò\n# Few-shot: cho ví dụ trong prompt"
          }
        ]
      },
      {
        "id": "ai-prompt-engineering",
        "title": "Prompt Engineering",
        "description": "Prompt Engineering là kỹ thuật thiết kế prompt (câu lệnh) để LLM trả lời chính xác và hiệu quả nhất. Bao gồm: viết system prompt, few-shot examples, chain-of-thought, structured output, và các kỹ thuật nâng cao.",
        "exampleText": "Thay vì hỏi 'Dịch câu này', prompt tốt hơn: 'Dịch câu sau sang tiếng Việt, giữ nguyên thuật ngữ kỹ thuật, giọng văn tự nhiên: ...'",
        "codeBlocks": [
          {
            "title": "Kỹ thuật Prompt",
            "code": "# 1. Rõ ràng và cụ thể\n# ❌ \"Viết về AI\"\n# ✅ \"Viết bài blog 500 từ giải thích\n#     Machine Learning cho người mới bắt đầu\"\n\n# 2. System Prompt (vai trò)\n# \"Bạn là chuyên gia Python với 10 năm kinh nghiệm.\n#  Trả lời ngắn gọn, có code ví dụ.\"\n\n# 3. Few-shot (cho ví dụ)\n# \"Phân loại sentiment:\n#  'Sản phẩm tuyệt vời!' → Positive\n#  'Giao hàng quá chậm' → Negative\n#  'Hàng đúng mô tả' → \"\n\n# 4. Chain-of-Thought\n# \"Hãy suy nghĩ từng bước:\n#  Bước 1: Phân tích vấn đề\n#  Bước 2: Liệt kê giải pháp\n#  Bước 3: Chọn giải pháp tốt nhất\""
          },
          {
            "title": "Structured Output",
            "code": "# 5. Output format\nprompt = '''\nPhân tích đánh giá sau và trả về JSON:\n{\n  \"sentiment\": \"positive/negative/neutral\",\n  \"score\": 0-10,\n  \"keywords\": [\"từ khóa\"]\n}\n\nĐánh giá: \"Sản phẩm chất lượng tốt, giao nhanh\"\n'''\n\n# 6. ReAct Pattern (Reasoning + Acting)\n# \"Thought: Tôi cần tìm thông tin...\n#  Action: Search('query')\n#  Observation: Kết quả...\n#  Thought: Dựa trên kết quả...\n#  Answer: ...\"\n\n# 7. Constrained Output\n# \"Chỉ trả lời YES hoặc NO\"\n# \"Trả lời trong 3 câu\"\n# \"Dùng format Markdown\""
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 6",
    "title": "Fine-tuning & RAG",
    "cards": [
      {
        "id": "ai-fine-tuning",
        "title": "Fine-tuning LLM",
        "description": "Fine-tuning là quá trình tiếp tục train model pre-trained trên dataset cụ thể của mình. Giúp model chuyên biệt hơn cho domain riêng. Các phương pháp: Full fine-tuning (train tất cả weights), LoRA/QLoRA (chỉ train adapter nhỏ, tiết kiệm GPU).",
        "exampleText": "Fine-tune LLaMA trên 10,000 cuộc hội thoại y tế để tạo chatbot chuyên về sức khoẻ. Model biết thuật ngữ y tế và trả lời chính xác hơn.",
        "codeBlocks": [
          {
            "title": "LoRA Fine-tuning",
            "code": "# LoRA (Low-Rank Adaptation)\n# → Chỉ train adapter nhỏ thêm vào model\n# → Tiết kiệm 90%+ GPU memory\n# → Kết quả gần bằng full fine-tuning\n\nfrom peft import LoraConfig, get_peft_model\nfrom transformers import AutoModelForCausalLM\n\n# Load base model\nmodel = AutoModelForCausalLM.from_pretrained(\n    'meta-llama/Llama-3-8B',\n    torch_dtype=torch.float16,\n    device_map='auto',\n)\n\n# LoRA config\nlora_config = LoraConfig(\n    r=16,                # Rank\n    lora_alpha=32,       # Scaling\n    target_modules=['q_proj', 'v_proj'],\n    lora_dropout=0.05,\n    task_type='CAUSAL_LM',\n)\n\n# Thêm LoRA adapter\nmodel = get_peft_model(model, lora_config)\nmodel.print_trainable_parameters()\n# trainable: 4M / 8B (0.05%)"
          },
          {
            "title": "Dataset cho fine-tuning",
            "code": "# Format dataset cho fine-tuning chat model\n# Instruction tuning format:\n[\n  {\n    \"instruction\": \"Dịch sang tiếng Anh\",\n    \"input\": \"Xin chào\",\n    \"output\": \"Hello\"\n  },\n  {\n    \"instruction\": \"Tóm tắt đoạn văn\",\n    \"input\": \"Đoạn văn dài...\",\n    \"output\": \"Tóm tắt ngắn...\"\n  }\n]\n\n# Chat format:\n[\n  {\n    \"messages\": [\n      {\"role\": \"system\", \"content\": \"Bạn là bác sĩ.\"},\n      {\"role\": \"user\", \"content\": \"Tôi bị đau đầu\"},\n      {\"role\": \"assistant\", \"content\": \"Đau đầu có thể do...\"}\n    ]\n  }\n]\n\n# Cần ít nhất 100-1000 mẫu chất lượng\n# Chất lượng > Số lượng"
          }
        ]
      },
      {
        "id": "ai-rag",
        "title": "RAG (Retrieval-Augmented Generation)",
        "description": "RAG kết hợp retrieval (tìm kiếm tài liệu) với generation (LLM sinh câu trả lời). Thay vì dựa vào kiến thức trong weights, RAG tìm tài liệu liên quan rồi đưa vào context cho LLM. Giải quyết vấn đề hallucination và kiến thức outdated.",
        "exampleText": "Chatbot hỗ trợ khách hàng: người dùng hỏi → RAG tìm tài liệu trong knowledge base → LLM đọc tài liệu và trả lời chính xác.",
        "codeBlocks": [
          {
            "title": "RAG workflow",
            "code": "# RAG Pipeline:\n# 1. Indexing: chia tài liệu → chunks → embeddings → vector DB\n# 2. Retrieval: query → embedding → tìm chunks tương tự\n# 3. Generation: chunks + query → LLM → câu trả lời\n\n# Bước 1: Tạo embeddings và lưu vào vector DB\nfrom langchain_community.document_loaders import TextLoader\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom langchain_community.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings\n\n# Load và chia tài liệu\nloader = TextLoader('knowledge.txt')\ndocs = loader.load()\n\nsplitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,\n    chunk_overlap=50,\n)\nchunks = splitter.split_documents(docs)\n\n# Tạo vector store\nvectorstore = Chroma.from_documents(\n    chunks,\n    OpenAIEmbeddings(),\n)"
          },
          {
            "title": "RAG query",
            "code": "from langchain_openai import ChatOpenAI\nfrom langchain.chains import RetrievalQA\n\n# Bước 2 & 3: Retrieval + Generation\nllm = ChatOpenAI(model='gpt-4', temperature=0)\n\nqa_chain = RetrievalQA.from_chain_type(\n    llm=llm,\n    retriever=vectorstore.as_retriever(\n        search_kwargs={'k': 3},  # Top 3 chunks\n    ),\n    return_source_documents=True,\n)\n\n# Query\nresult = qa_chain.invoke({'query': 'Cách cài đặt sản phẩm?'})\nprint(result['result'])           # Câu trả lời\nprint(result['source_documents'])  # Nguồn tài liệu\n\n# RAG giải quyết:\n# ✅ Hallucination (bịa thông tin)\n# ✅ Kiến thức outdated\n# ✅ Domain-specific knowledge\n# ✅ Trích dẫn nguồn"
          }
        ]
      },
      {
        "id": "ai-embeddings",
        "title": "Embeddings & Vector Database",
        "description": "Embedding là cách biểu diễn text/image thành vector số (mảng số thực). Các text có ý nghĩa tương tự sẽ có vector gần nhau. Vector Database lưu trữ và tìm kiếm nhanh theo similarity. Phổ biến: Chroma, Pinecone, Weaviate, Qdrant.",
        "exampleText": "'Con mèo' và 'cat' có embedding vectors gần nhau vì cùng ý nghĩa, dù khác ngôn ngữ.",
        "codeBlocks": [
          {
            "title": "Tạo Embeddings",
            "code": "# OpenAI Embeddings\nfrom openai import OpenAI\n\nclient = OpenAI()\n\nresponse = client.embeddings.create(\n    model='text-embedding-3-small',\n    input='Con mèo đang ngủ',\n)\n\nvector = response.data[0].embedding\nprint(len(vector))  # 1536 dimensions\n\n# Sentence Transformers (open-source)\nfrom sentence_transformers import SentenceTransformer\n\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\nsentences = ['Con mèo', 'The cat', 'Chiếc xe']\nembeddings = model.encode(sentences)\n\n# Cosine similarity\nfrom sklearn.metrics.pairwise import cosine_similarity\nsim = cosine_similarity([embeddings[0]], [embeddings[1]])\nprint(f'Similarity: {sim[0][0]:.4f}')  # ~0.85"
          },
          {
            "title": "Vector Database",
            "code": "# Chroma (lightweight, local)\nimport chromadb\n\nclient = chromadb.Client()\ncollection = client.create_collection('my_docs')\n\n# Thêm documents\ncollection.add(\n    documents=['Python là ngôn ngữ...', 'React là thư viện...'],\n    metadatas=[{'topic': 'python'}, {'topic': 'react'}],\n    ids=['doc1', 'doc2'],\n)\n\n# Tìm kiếm\nresults = collection.query(\n    query_texts=['Cách dùng Python'],\n    n_results=2,\n)\nprint(results['documents'])\n\n# Vector DB phổ biến:\n# Chroma: đơn giản, local/cloud\n# Pinecone: managed cloud\n# Weaviate: open-source, full-featured\n# Qdrant: high performance\n# Milvus: scalable, enterprise"
          }
        ]
      },
      {
        "id": "ai-agents",
        "title": "AI Agents",
        "description": "AI Agent là hệ thống dùng LLM làm \"bộ não\" để lập kế hoạch, ra quyết định, và thực hiện hành động. Agent có thể gọi tools (search, code execution, API calls), quản lý memory, và hoàn thành tác vụ phức tạp tự động.",
        "exampleText": "Agent nhận yêu cầu 'Tìm giá vé máy bay HN-SG ngày mai', nó lập kế hoạch → gọi API tìm kiếm → so sánh giá → trả kết quả.",
        "codeBlocks": [
          {
            "title": "Agent concepts",
            "code": "# AI Agent = LLM + Tools + Memory + Planning\n\n# Components:\n# 1. LLM (Brain): suy nghĩ và ra quyết định\n# 2. Tools: hành động với thế giới bên ngoài\n#    → Web search, calculator, code execution\n#    → API calls, database queries\n# 3. Memory: nhớ context và lịch sử\n#    → Short-term: conversation history\n#    → Long-term: vector database\n# 4. Planning: chia nhỏ task phức tạp\n#    → ReAct: Reasoning + Acting\n#    → Chain-of-Thought\n\n# Frameworks:\n# LangChain: popular, nhiều integration\n# LlamaIndex: tốt cho RAG\n# CrewAI: multi-agent\n# AutoGen: Microsoft, multi-agent\n# Semantic Kernel: Microsoft, enterprise"
          },
          {
            "title": "Agent với LangChain",
            "code": "from langchain_openai import ChatOpenAI\nfrom langchain.agents import tool, AgentExecutor\nfrom langchain.agents import create_react_agent\nfrom langchain import hub\n\n# Định nghĩa tools\n@tool\ndef search(query: str) -> str:\n    \"\"\"Tìm kiếm thông tin trên internet.\"\"\"\n    # Gọi search API\n    return f'Kết quả cho: {query}'\n\n@tool\ndef calculator(expression: str) -> str:\n    \"\"\"Tính toán biểu thức toán học.\"\"\"\n    return str(eval(expression))\n\n# Tạo agent\nllm = ChatOpenAI(model='gpt-4', temperature=0)\nprompt = hub.pull('hwchase17/react')\n\nagent = create_react_agent(llm, [search, calculator], prompt)\nagent_executor = AgentExecutor(\n    agent=agent,\n    tools=[search, calculator],\n    verbose=True,\n)\n\n# Chạy agent\nresult = agent_executor.invoke({\n    'input': 'GDP Việt Nam 2024 là bao nhiêu USD?'\n})"
          }
        ]
      }
    ]
  },
  {
    "label": "Nhóm 7",
    "title": "Computer Vision & Triển khai Model",
    "cards": [
      {
        "id": "ai-computer-vision",
        "title": "Computer Vision cơ bản",
        "description": "Computer Vision (CV) là lĩnh vực AI giúp máy tính \"nhìn\" và hiểu hình ảnh/video. Các bài toán: Image Classification (phân loại ảnh), Object Detection (phát hiện vật thể), Segmentation (phân vùng), Face Recognition, OCR (đọc chữ).",
        "exampleText": "Face ID trên iPhone (face recognition), Google Lens nhận diện vật thể, xe Tesla nhận diện biển báo giao thông.",
        "codeBlocks": [
          {
            "title": "Image Classification",
            "code": "from torchvision import models, transforms\nfrom PIL import Image\nimport torch\n\n# Load pre-trained model\nmodel = models.resnet50(weights='IMAGENET1K_V2')\nmodel.eval()\n\n# Preprocessing\ntransform = transforms.Compose([\n    transforms.Resize(256),\n    transforms.CenterCrop(224),\n    transforms.ToTensor(),\n    transforms.Normalize(\n        mean=[0.485, 0.456, 0.406],\n        std=[0.229, 0.224, 0.225],\n    ),\n])\n\n# Predict\nimg = Image.open('cat.jpg')\ninput_tensor = transform(img).unsqueeze(0)\n\nwith torch.no_grad():\n    output = model(input_tensor)\n    probabilities = torch.softmax(output, dim=1)\n    _, predicted = probabilities.max(1)\n    print(f'Class: {predicted.item()}')\n    print(f'Confidence: {probabilities.max():.4f}')"
          },
          {
            "title": "Object Detection (YOLO)",
            "code": "# YOLO (You Only Look Once)\n# → Real-time object detection\n# → Phát hiện nhiều vật thể trong 1 ảnh\n\nfrom ultralytics import YOLO\n\n# Load YOLOv8\nmodel = YOLO('yolov8n.pt')  # nano (nhanh)\n\n# Detect trên ảnh\nresults = model('street.jpg')\n\n# Xem kết quả\nfor result in results:\n    for box in result.boxes:\n        cls = result.names[int(box.cls)]\n        conf = float(box.conf)\n        print(f'{cls}: {conf:.2%}')\n        # person: 95.2%\n        # car: 89.7%\n        # bicycle: 72.1%\n\n# Detect trên video\nresults = model('video.mp4', stream=True)\n\n# YOLO variants:\n# yolov8n: nano (nhanh, nhẹ)\n# yolov8s: small\n# yolov8m: medium\n# yolov8l: large\n# yolov8x: extra large (chính xác nhất)"
          }
        ]
      },
      {
        "id": "ai-generative",
        "title": "Generative AI",
        "description": "Generative AI là nhánh AI tạo ra nội dung mới: text, ảnh, video, nhạc, code. Các model: GPT (text), DALL-E/Stable Diffusion/Midjourney (ảnh), Sora (video), Suno (nhạc), Copilot (code). Dựa trên Transformer, Diffusion Models, và GAN.",
        "exampleText": "Midjourney tạo ảnh từ mô tả text, Suno tạo bài hát từ lyrics, GitHub Copilot viết code từ comment.",
        "codeBlocks": [
          {
            "title": "Tạo ảnh với AI",
            "code": "# OpenAI DALL-E\nfrom openai import OpenAI\n\nclient = OpenAI()\n\nresponse = client.images.generate(\n    model='dall-e-3',\n    prompt='A cute cat wearing sunglasses on a beach',\n    size='1024x1024',\n    quality='standard',\n    n=1,\n)\n\nimage_url = response.data[0].url\n\n# Stable Diffusion (local)\nfrom diffusers import StableDiffusionPipeline\nimport torch\n\npipe = StableDiffusionPipeline.from_pretrained(\n    'stabilityai/stable-diffusion-xl-base-1.0',\n    torch_dtype=torch.float16,\n).to('cuda')\n\nimage = pipe(\n    prompt='A beautiful sunset over mountains',\n    num_inference_steps=30,\n).images[0]\nimage.save('sunset.png')"
          },
          {
            "title": "Generative AI applications",
            "code": "# Text Generation: GPT-4, Gemini, Claude\n# → Chatbot, viết văn, tóm tắt, dịch thuật\n\n# Image Generation: DALL-E, Midjourney, SD\n# → Tạo ảnh từ text, edit ảnh, style transfer\n\n# Video Generation: Sora, Runway, Pika\n# → Text-to-video, image-to-video\n\n# Audio/Music: Suno, Udio, Bark\n# → Text-to-speech, text-to-music\n\n# Code Generation: Copilot, Cursor, Codeium\n# → Autocomplete, code review, debug\n\n# 3D Generation: Point-E, Shap-E\n# → Text-to-3D models\n\n# Multimodal: GPT-4V, Gemini\n# → Hiểu + tạo text, ảnh, video cùng lúc"
          }
        ]
      },
      {
        "id": "ai-model-deployment",
        "title": "Triển khai Model (Deployment)",
        "description": "Sau khi train xong, cần triển khai model để sử dụng thực tế. Các cách: API server (FastAPI, Flask), cloud services (AWS SageMaker, Google Vertex AI), edge deployment (ONNX, TensorFlow Lite), hoặc dùng managed services (Hugging Face Inference).",
        "exampleText": "Model phân loại ảnh đã train xong, cần deploy thành API để mobile app gọi khi người dùng chụp ảnh.",
        "codeBlocks": [
          {
            "title": "Deploy với FastAPI",
            "code": "from fastapi import FastAPI, UploadFile\nimport torch\nfrom torchvision import transforms, models\nfrom PIL import Image\nimport io\n\napp = FastAPI()\n\n# Load model khi khởi động\nmodel = models.resnet50(weights='IMAGENET1K_V2')\nmodel.eval()\n\ntransform = transforms.Compose([\n    transforms.Resize(256),\n    transforms.CenterCrop(224),\n    transforms.ToTensor(),\n    transforms.Normalize([0.485, 0.456, 0.406],\n                         [0.229, 0.224, 0.225]),\n])\n\n@app.post('/predict')\nasync def predict(file: UploadFile):\n    image = Image.open(io.BytesIO(await file.read()))\n    input_tensor = transform(image).unsqueeze(0)\n\n    with torch.no_grad():\n        output = model(input_tensor)\n        probs = torch.softmax(output, dim=1)\n        _, predicted = probs.max(1)\n\n    return {\n        'class': predicted.item(),\n        'confidence': probs.max().item(),\n    }\n\n# Chạy: uvicorn main:app --reload"
          },
          {
            "title": "Optimization & Formats",
            "code": "# ONNX: format trao đổi model giữa frameworks\nimport torch.onnx\n\ntorch.onnx.export(\n    model,\n    dummy_input,\n    'model.onnx',\n    opset_version=11,\n)\n\n# Quantization: giảm kích thước model\n# FP32 → FP16 → INT8\n# → Model nhỏ hơn 2-4x\n# → Inference nhanh hơn\n# → Mất ít accuracy\n\n# Deployment options:\n# 🌐 Cloud: AWS SageMaker, Google Vertex AI\n# 🐳 Docker: containerize model + API\n# 📱 Mobile: TF Lite, Core ML, ONNX Runtime\n# 🤗 Hugging Face: Inference API, Spaces\n# ⚡ Edge: Jetson Nano, Raspberry Pi\n\n# Monitoring:\n# → Track latency, throughput\n# → Model drift detection\n# → A/B testing different models"
          }
        ]
      },
      {
        "id": "ai-ethics-safety",
        "title": "AI Ethics & Safety",
        "description": "AI Ethics bao gồm các vấn đề đạo đức và an toàn khi phát triển AI: bias (thiên kiến trong dữ liệu/model), privacy (quyền riêng tư), transparency (minh bạch), accountability (trách nhiệm), và safety alignment (căn chỉnh AI với giá trị con người).",
        "exampleText": "Model tuyển dụng thiên vị giới tính vì data training chủ yếu là nam giới. Deepfake tạo video giả gây thiệt hại. AI tự lái gây tai nạn — ai chịu trách nhiệm?",
        "codeBlocks": [
          {
            "title": "Vấn đề AI Ethics",
            "code": "# Bias (Thiên kiến)\n# → Data thiên lệch → model thiên kiến\n# → Ảnh hưởng: tuyển dụng, tín dụng, tư pháp\n# → Giải pháp: diverse data, fairness metrics\n\n# Privacy (Quyền riêng tư)\n# → Model có thể nhớ dữ liệu training\n# → GDPR, CCPA compliance\n# → Giải pháp: differential privacy, data anonymization\n\n# Hallucination\n# → LLM bịa thông tin không có thật\n# → Nguy hiểm trong y tế, pháp luật\n# → Giải pháp: RAG, fact-checking, citations\n\n# Deepfakes\n# → Tạo ảnh/video/giọng nói giả\n# → Lừa đảo, tin giả, tống tiền\n# → Giải pháp: watermarking, detection tools"
          },
          {
            "title": "Responsible AI",
            "code": "# Nguyên tắc Responsible AI:\n\n# 1. Fairness (Công bằng)\n# → Test model trên nhiều nhóm demographic\n# → Đo fairness metrics\n\n# 2. Transparency (Minh bạch)\n# → Giải thích cách model ra quyết định\n# → Explainable AI (XAI): SHAP, LIME\n\n# 3. Accountability (Trách nhiệm)\n# → Ai chịu trách nhiệm khi AI sai?\n# → Logging, auditing, human oversight\n\n# 4. Safety (An toàn)\n# → RLHF: train model từ chối yêu cầu có hại\n# → Red teaming: thử tấn công model\n# → Guardrails: lọc input/output nguy hiểm\n\n# 5. Privacy (Riêng tư)\n# → Không train trên dữ liệu cá nhân\n# → Federated learning: train không chia sẻ data\n# → Data governance policies"
          }
        ]
      }
    ]
  }
];
