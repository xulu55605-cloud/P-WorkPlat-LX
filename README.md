# Nozzle PM 工作平台 — PWA

> 集成项目看板、工具、快捷链接、自动化工作流  
> 支持手机/电脑**一键安装到桌面**，像 App 一样使用（无需应用商店）

---

## 📁 文件结构

```
├── index.html        # 主页面（含 PWA 注册逻辑）
├── manifest.json     # PWA 配置（名称、图标、主题色）
├── sw.js             # Service Worker（离线缓存）
├── icons/            # 各尺寸桌面图标（自动生成）
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md
```

---

## 🚀 部署方式（推荐 GitHub Pages）

1. 将所有文件上传到 GitHub 仓库
2. 进入仓库 **Settings → Pages**
3. Source 选择 `main` 分支，目录选 `/ (root)`
4. 保存后，几分钟内会生成访问地址，例如：  
   `https://your-username.github.io/your-repo/`

> ⚠️ **PWA 必须通过 HTTPS 访问才能安装**，GitHub Pages 默认支持 HTTPS，本地用 `file://` 打开无法触发安装横幅。

---

## 📲 手机安装步骤

### Android（Chrome / Edge）
1. 用手机浏览器打开 GitHub Pages 链接
2. 页面底部会出现「安装到桌面」横幅，点击**立即安装**
3. 或点击浏览器菜单 → **添加到主屏幕**

### iPhone / iPad（Safari）
1. 用 Safari 打开链接
2. 点击底部**分享按钮**（方块+箭头图标）
3. 选择**添加到主屏幕**
4. 确认名称后点击**添加**

### 电脑（Chrome / Edge）
1. 打开链接后，地址栏右侧会出现安装图标（⊕）
2. 点击即可安装为桌面应用

---

## ✨ PWA 特性

| 特性 | 说明 |
|------|------|
| 🏠 桌面图标 | 安装后在主屏幕显示，全屏打开无浏览器边框 |
| 📶 离线缓存 | 首次加载后，断网也可访问页面 |
| 🎨 主题色 | 状态栏自动变为深色，融入 UI 风格 |
| 📱 安全区适配 | 支持 iPhone 刘海/圆角屏 safe-area |
| ⚡ 自动更新 | 每次访问 SW 会在后台检查并更新缓存 |

---

## 🔗 本地文件链接说明

工具区和链接区中的 `file:///` 路径**只在本机电脑本地打开 HTML 时有效**。  
若通过 GitHub Pages 访问，点击这些链接时会弹出提示，建议在本地电脑双击 `index.html` 使用本地功能。

---

*Author：LU Xu @2026.5*
