# StoneKernel 技术博客

在线访问地址：**[https://blog.stonekernel.com](https://blog.stonekernel.com)**

本仓库为个人技术博客与生活记录的源码仓，基于 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 自动部署至 GitHub Pages。

## 专栏内容

- **嵌入式与底层系统**：MCU 固件架构、RTOS 移植实战、工业总线与底层驱动记录
- **系统架构与中间件**：音视频流媒体、网络协议分析与自托管服务实践
- **跨平台与工具链**：现代 C++ / Qt6 桌面开发、CMake 构建与效率工具配置
- **阅读与随笔**：阅读笔记与阶段性思考复盘
- **越野与山野**：长距离山地徒步路线复盘与户外装备实测

## 本地预览与构建

```bash
# 安装依赖
npm install

# 启动本地开发预览 (http://localhost:5173)
npm run docs:dev

# 构建静态网页产物
npm run docs:build
