# 说明 

vitepress官方网站：https://vitepress.dev/

![](images/vitepress_ins.png) 

开发环境

- Macbook pro m4

# 部署  

## 1.环境准备 

打开Mac的终端，检查是否已经安装node.js（VitePress需要Node.js18及以上版本）

```bash
node -v
```

- 已经安装：如果输出版本号，直接进行下一步

- 未安装：推荐使用Homebrew安装，或从Node.js官网下载

  ```bash
  # 使用 Homebrew安装 Node.js 
  brew install node
  ```

## 2.创建并初始化项目 

```bash
# 创建项目目录并进入
mkdir my-docs
cd my-docs

# 初始化package.json
npm init -y

# 安装VitePress
# 如果出错下面有解决方案
npm add -D vitepress
```

在安装vitepress这一步会报错：

```bash
npm error code EACCES
npm error syscall mkdir
npm error path /Users/liszt/.npm/_cacache/index-v5/f5/47
npm error errno EACCES
npm error
npm error Your cache folder contains root-owned files, due to a bug in previous versions of npm which has since been addressed.
npm error
npm error To permanently fix this problem, please run:
npm error   sudo chown -R 501:20 "/Users/liszt/.npm"
npm error A complete log of this run can be found in: /Users/liszt/.npm/_logs/2026-11-25T04_10_04_376Z-debug-0.log
```

解决办法：

```bash
sudo chown -R 501:20 "/Users/liszt/.npm"
```

并输入密码确认，然后再次安装VitePress

```bash
# 运行配置向导
npx vitepress init
# 会出现交换选项，默认配置即可

# 启动本地预览
npm run docs:dev
# 终端会输出本地访问地址，通常是：http://localhost:5173/

```

## 3.目录结构与常用命令 

完成上述步骤后，项目基础结构如下：

```te
my-docs/
├── .vitepress/                 # VitePress 配置目录（macOS 访达中默认隐藏，按 Command+Shift+. 可显示）
│   └── config.mts              # 初始配置文件（如果你在向导中选择 TypeScript 为 No，则为 config.mjs）
├── api-examples.md             # 官方自带的 API 示例页面
├── index.md                    # 网站默认首页
├── markdown-examples.md        # 官方自带的 Markdown 扩展语法示例页面
├── node_modules/               # 依赖包目录（执行 npm add -D vitepress 时生成）
├── package-lock.json           # 依赖版本锁文件
└── package.json                # 项目配置与启动脚本文件
```

常用脚本命令（在项目根目录执行）：

- 启动开发预览：`npm run docs:dev`（支持热更新，修改`MarkDown`保存后网页实时刷新）
- 构建静态网页：`npm run docs:build`（生成用于部署的`HTML/CSS/JS`文件，默认输出在`docx/.vitepress/dist`）
- 本地预览构建产物：`npm run docs:preview`



