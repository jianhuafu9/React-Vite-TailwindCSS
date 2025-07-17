# React + Vite + TailwindCSS 模板

一个现代化的 React 项目模板，集成了 Vite、TailwindCSS 和 TypeScript，提供了完整的开发工具链和最佳实践。

## ✨ 特性

- ⚡️ **Vite** - 极速的构建工具和开发服务器
- ⚛️ **React 18** - 最新版本的 React 框架
- 🎨 **TailwindCSS 4.0** - 实用优先的 CSS 框架
- 📝 **TypeScript** - 类型安全的 JavaScript
- 🧪 **Vitest** - 快速的单元测试框架
- 🔧 **ESLint** - 代码质量检查
- 💅 **Prettier** - 代码格式化
- 🎯 **Radix UI** - 无障碍的 UI 组件
- 🚀 **React Router** - 客户端路由
- 🎪 **Lucide React** - 美观的图标库

## 🏗️ 项目结构

```
src/
├── components/          # React 组件
│   ├── ui/             # 可复用的 UI 组件
│   ├── Navbar.tsx      # 导航栏组件
│   ├── HeroSection.tsx # 首页英雄区域
│   ├── ProductsSection.tsx # 产品展示区域
│   ├── FeaturesSection.tsx # 功能特性区域
│   ├── ReviewsSection.tsx  # 用户评价区域
│   └── Footer.tsx      # 页脚组件
├── lib/                # 工具函数
├── assets/             # 静态资源
├── App.tsx            # 主应用组件
├── main.tsx           # 应用入口点
└── index.css          # 全局样式
```

## 🚀 快速开始


### 安装依赖

```bash
npm install
# 或者使用 pnpm
pnpm install
```

> 💡 建议使用 Node.js 20+。你可以使用 `nvm use` 来设置正确的 Node.js 版本。

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:5173](http://localhost:5173) 查看你的应用。

## 📦 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本（包含 TypeScript 编译检查）
- `npm run preview` - 预览生产构建
- `npm run check` - 运行 ESLint 代码检查

## 🎨 样式系统

- **TailwindCSS 4.0** - 最新版本的 TailwindCSS
- **class-variance-authority** - 类型安全的样式变体
- **tailwind-merge** - 智能的 Tailwind 类名合并
- **clsx** - 条件类名工具

## 🔧 开发工具

- **ESLint** - 代码质量检查，配置了 React 相关规则
- **Prettier** - 代码格式化，集成了 TailwindCSS 插件
- **Pre-commit** - 提交前自动运行代码检查
- **TypeScript** - 类型检查和智能提示

## 📱 组件库

项目集成了以下 UI 组件和工具：

- **Radix UI** - 无障碍的底层 UI 组件
- **Lucide React** - 美观一致的图标库
- **React Error Boundary** - 错误边界处理
- **React Router DOM** - 客户端路由

## 🚀 部署

### 构建项目

```bash
npm run build
```

构建文件将生成在 `dist` 目录中。

### 部署到 zCloud

1. 在 [zcloud.ws](https://zcloud.ws) 创建账户
2. 连接你的 GitHub 仓库
3. 创建应用并完成部署

或者使用预配置的 [GitHub Action](./.github/workflows/deploy.yaml) 进行自动部署。

### 其他部署选项

- **Vercel**: `vercel --prod`
- **Netlify**: 拖拽 `dist` 文件夹到 Netlify
- **GitHub Pages**: 使用 GitHub Actions 自动部署

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

⭐ 如果这个模板对你有帮助，请给个 Star！
