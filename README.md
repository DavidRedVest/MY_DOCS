# StoneKernel 技术博客

在线访问地址：**[https://blog.stonekernel.com](https://blog.stonekernel.com)**

本仓库为个人技术博客与山野生活记录的源码仓，基于 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 自动部署至 GitHub Pages。

## 专栏与项目架构

- **项目专题（Projects）**：跨硬件、网络与桌面端的完整工程项目实战
  - **OmniLink 全场景工业互联体系**：涵盖 `OmniLink-Edge`（上位机+中控+多传感器）、`OmniLink-Cloud`（网络+云服务+GUI）与 `OmniLink-Core`（嵌入式 Linux）三套演进架构
  - **视频监控系统实战**：多路网络摄像机 RTSP 拉流、硬件解码、流媒体转发与录像存储回放
- **嵌入式与底层系统（Embedded）**：MCU 固件架构、Eclipse ThreadX / FreeRTOS 实时操作系统移植、工业现场总线与底层驱动实战
- **系统架构与中间件（Architecture）**：音视频流媒体推拉流、网络通信协议分析、高并发服务端架构设计与自托管 Homelab 实践
- **跨平台与工具链（Tooling）**：现代 C++ 与 Qt6 桌面应用开发、CMake 工程化构建、终端效率工具与自动化工作流配置
- **阅读与随笔（Notes）**：阅读笔记、技术哲学思考与阶段性复盘记录
- **越野与山野（Outdoors）**：长距离山地徒步路线复盘、户外装备实测与体能分配总结

## 目录结构

```text
MY_DOCS/
├── .github/workflows/      # GitHub Actions 自动部署配置
├── .vitepress/             # VitePress 站点配置与主题增强（搜索、图片灯箱等）
├── projects/               # 项目专题（OmniLink 系列、视频监控系统等独立连载项目）
├── embedded/               # 嵌入式与底层系统专栏
├── architecture/           # 系统架构与中间件专栏
├── tooling/                # 跨平台与工具链专栏
├── notes/                  # 阅读与随笔专栏
├── outdoors/               # 越野与山野专栏
├── index.md                # 博客首页
└── README.md               # 仓库说明文档
```

## 本地预览与构建

```bash
# 安装依赖
npm install

# 启动本地开发预览 (http://localhost:5173)
npm run docs:dev

# 构建静态网页产物
npm run docs:build
```


## 联系方式
- 邮箱：me@stonekernel.com
