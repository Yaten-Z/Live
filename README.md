# Moments - 个人朋友圈平台

一份简洁、美观、现代化的个人朋友圈展示平台，支持深色/浅色主题切换。

## 📖 小白使用指南

### 一、项目介绍

这是一个基于 React + Vite 构建的个人朋友圈展示平台，您可以用它来：
- 发布个人动态和照片
- 展示您的摄影作品
- 记录旅行足迹
- 与访客互动评论

### 二、本地运行（5分钟快速开始）

#### 1. 确保您的电脑已安装 Node.js
- 访问 https://nodejs.org/ 下载并安装最新版 Node.js
- 安装完成后，打开终端（Windows 用 PowerShell 或 CMD，Mac 用终端）输入：
  ```bash
  node -v
  npm -v
  ```
  如果显示版本号，说明安装成功

#### 2. 进入项目目录
在终端中输入：
```bash
cd d:\P-01-ME\Live
```

#### 3. 安装依赖
```bash
npm install
```

#### 4. 启动项目
```bash
npm run dev
```

#### 5. 在浏览器查看
打开浏览器访问：http://localhost:5173/

### 三、如何添加您的内容

#### 1. 修改个人信息
打开文件：[src/data/moments.ts](file:///d:\P-01-ME\Live\src\data\moments.ts)

找到第 17-20 行，修改为您的信息：
```typescript
export const author: Author = {
  name: "您的名字",  // 改成您的名字
  avatar: "您的头像图片链接",  // 可以放网络图片地址
};
```

#### 2. 发布新动态

每个动态都单独存放在 `src/data/moments/` 文件夹下，格式为 `序号-日期.ts`（例如 `006-2024-02-15.ts`）。

**步骤：**

1. 在 `src/data/moments/` 文件夹中创建新文件，命名为 `006-2024-02-15.ts`（序号递增，日期可以是任意）

2. 复制以下模板到新文件中，修改您的内容：

```typescript
import { Moment, author } from '../moments';

const moment: Moment = {
  id: 'moment-006',  // 唯一编号，每次序号+1
  author: author,
  content: '我的新动态内容...',  // 这里写您的内容
  images: [
    'https://图片链接1.jpg',
    'https://图片链接2.jpg',
  ],  // 放您的照片链接
  createdAt: '2024-02-15T18:00:00Z',  // 发布时间（ISO格式）
  tags: ['标签1', '标签2'],  // 标签
};

export default moment;
```

完成！系统会自动识别新文件，无需手动导入。动态会自动按照发布时间从新到旧排序显示。

**注意：**
- 动态会自动按照发布时间从新到旧排序显示
- `createdAt` 时间格式使用 ISO 8601 格式（例如 `2024-02-15T18:00:00Z`）

#### 3. 如何获取图片链接？
- 方法一：使用免费图床
  - 访问 https://imgur.com/
  - 上传您的照片
  - 复制图片链接

- 方法二：放到项目中
  - 把照片放到 `public/images` 文件夹
  - 链接写成 `/images/您的照片.jpg`

### 四、如何配置评论系统（可选）

#### 1. 注册 GitHub 账号
如果还没有，去 https://github.com 注册

#### 2. 创建仓库
- 点击右上角 "+" → "New repository"
- 填写仓库名称，点击 "Create repository"

#### 3. 启用 Discussions
- 在仓库页面点击 "Settings"
- 找到 "Features" 区域
- 勾选 "Discussions"

#### 4. 配置 Giscus
- 访问 https://giscus.app/zh-CN
- 按照页面提示配置
- 会得到配置信息，填入 [src/components/GiscusComments.tsx](file:///d:\P-01-ME\Live\src\components\GiscusComments.tsx)

### 五、如何部署到 GitHub Pages（免费！）

#### 1. 上传项目到 GitHub
在终端中依次执行：
```bash
git init
git add .
git commit -m "首次提交"
```

然后去 GitHub 创建新仓库，按照提示关联并推送代码。

#### 2. 启用 GitHub Pages
- 打开仓库的 "Settings"
- 找到 "Pages" 选项
- 在 "Build and deployment" 中选择 "GitHub Actions"
- 项目已经配置好工作流，推送后会自动部署

#### 3. 访问您的网站
稍等几分钟，您的网站就会在：
`https://您的用户名.github.io/仓库名/`

### 六、主题切换

- 点击导航栏右侧的月亮图标切换到深色主题
- 点击太阳图标切换到浅色主题
- 系统会记住您的偏好

### 七、常用命令

```bash
npm run dev        # 本地启动开发服务器
npm run build      # 构建生产版本
npm run preview    # 预览构建后的效果
```

### 八、文件结构说明

```
Live/
├── src/
│   ├── components/       # 组件文件夹
│   │   ├── Header.tsx   # 导航栏
│   │   ├── Footer.tsx   # 页脚
│   │   ├── MomentCard.tsx  # 动态卡片
│   │   ├── ImageGrid.tsx   # 图片网格
│   │   ├── GiscusComments.tsx  # 评论系统
│   │   └── ThemeToggle.tsx   # 主题切换
│   ├── pages/          # 页面文件夹
│   │   ├── Home.tsx    # 首页
│   │   ├── Moments.tsx # 朋友圈列表
│   │   └── MomentDetail.tsx  # 动态详情
│   ├── data/           # 数据文件夹
│   │   └── moments.ts  # 您的朋友圈数据
│   ├── App.tsx         # 路由配置
│   └── main.tsx        # 入口文件
├── public/             # 静态资源
└── index.html          # HTML 文件
```

### 九、常见问题

**Q: 修改内容后没变化？**
A: 开发服务器会自动刷新，如果没有，手动刷新浏览器。

**Q: 图片显示不出来？**
A: 检查图片链接是否正确，确保网络图片可以访问。

**Q: 如何修改网站标题？**
A: 打开 [index.html](file:///d:\P-01-ME\Live\index.html)，修改 `<title>` 标签里的内容。

**Q: 不想用 Giscus 评论系统？**
A: 在 [MomentDetail.tsx](file:///d:\P-01-ME\Live\src\pages\MomentDetail.tsx) 中删除 `<GiscusComments>` 组件即可。

### 十、技术说明

- 框架：React 18
- 构建工具：Vite
- 样式：Tailwind CSS
- 路由：React Router
- 图片查看：react-photo-view
- 评论系统：Giscus

### 十一、下一步

1. 修改个人信息
2. 添加您的动态和照片
3. 配置评论系统（可选）
4. 部署到 GitHub Pages
5. 分享给您的朋友！

---

祝您使用愉快！如有问题，欢迎提 Issue。
