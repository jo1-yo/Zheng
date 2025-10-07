# Charlie Zheng Personal Website

> 一个展示多维身份和个人成长的现代化作品集网站

## 🌐 项目概述

**姓名**: Charlie Zheng  
**别名**: huNter  
**学校**: SSBS'26  
**性格**: ENFP  

这个网站旨在通过摄影、运动、自然和烹饪等方面，展示超越学术范畴的真实自我。

## 🎨 设计风格

- **配色方案**: 黑色背景 + 紫蓝渐变霓虹效果
- **字体**: Space Grotesk
- **布局**: 极简主义但电影感十足
- **动画**: 
  - 页面淡入效果
  - 平滑滚动
  - 图片悬停视差效果
  - 自动轮播图
- **图片风格**: 大尺寸、沉浸式、画廊优先；文字小巧精致

## 📁 项目结构

```
pw_zheng/
│
├── index.html                 # 主页（含 Hero Section、导航卡片、关于部分）
├── car-fashions.html          # 汽车时尚页
├── childhood-experiences.html # 童年经历页
├── fitness-deeds.html         # 健身活动页
├── exotic-cuisines.html       # 异国美食页
│
├── assets/
│   ├── photos/                # 📸 所有照片统一存放在这里
│   │   ├── p0.jpg            # 主页头像
│   │   ├── car1.jpg ~ car10.jpg       # 汽车照片
│   │   ├── childhood1.jpg ~ childhood10.jpg  # 童年照片
│   │   ├── fitness1.jpg ~ fitness9.jpg       # 健身照片
│   │   └── cuisine1.jpg ~ cuisine9.jpg       # 美食照片
│   └── logo/                  # Logo 文件
│
└── style/
    ├── main.css               # 主样式文件
    ├── animations.css         # 动画效果
    └── animations.js          # JavaScript 交互脚本
```

## 🚀 功能特性

### 主页 (index.html)
- **Hero Section**: 圆形头像 + 个人介绍
- **导航卡片**: 4个身份模块卡片，带悬停发光效果
- **关于部分**: 完整的个人介绍段落
- **页脚**: 联系方式和版权信息

### 汽车时尚页 (car-fashions.html)
- **Car Fashions**: 10张汽车照片的自动轮播

### 童年经历页 (childhood-experiences.html)
- **Childhood Experiences**: 10张童年照片轮播

### 健身活动页 (fitness-deeds.html)
- **Fitness Deeds**: 9张健身照片网格画廊

### 异国美食页 (exotic-cuisines.html)
- **Exotic Cuisines**: 9张美食照片网格画廊

## 💻 技术栈

- **HTML5**: 语义化标签
- **Tailwind CSS**: 快速响应式布局（通过 CDN）
- **自定义 CSS**: 渐变效果、动画、卡片样式
- **Vanilla JavaScript**: 
  - 滚动显示动画
  - 轮播图功能
  - 视差效果
  - 画廊灯箱

## 🎬 动画效果

- **淡入动画** (Fade In): 页面加载时元素渐入
- **滚动显示** (Scroll Reveal): 滚动时元素逐步显示
- **悬停缩放** (Hover Scale): 鼠标悬停时元素放大
- **浮动动画** (Floating): ENFP 标签浮动效果
- **轮播图** (Carousel): 自动播放，可手动控制
- **画廊灯箱** (Lightbox): 点击图片全屏查看
- **视差效果** (Parallax): 鼠标移动时图片轻微移动

## 📱 响应式设计

- ✅ 桌面端优化 (1920px+)
- ✅ 平板适配 (768px - 1024px)
- ✅ 移动端友好 (< 768px)
- ✅ 触摸手势支持（轮播图滑动）

## 🖼️ 图片准备说明

**所有照片统一放在 `assets/photos/` 文件夹中**，按照以下命名规则：

1. **主页头像**: `p0.jpg` (或 .png, .jpeg)
2. **汽车照片**: `car1.jpg ~ car10.jpg` (10张)
3. **童年照片**: `childhood1.jpg ~ childhood10.jpg` (10张)
4. **健身照片**: `fitness1.jpg ~ fitness9.jpg` (9张)
5. **美食照片**: `cuisine1.jpg ~ cuisine9.jpg` (9张)

### 快速添加照片步骤：
1. 将照片重命名为对应的文件名
2. 复制到 `/assets/photos/` 文件夹
3. 刷新浏览器即可

> **注意**: 如果图片不存在，网站会显示占位符图片，不会影响功能。详细说明请查看 `assets/photos/README.md`

## 🌐 如何使用

### 方法1：直接在浏览器中打开
1. 双击 `index.html` 文件
2. 页面将在默认浏览器中打开

### 方法2：使用本地服务器（推荐）
```bash
# 使用 Python 3
cd /Users/jane/Desktop/pw_zheng
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000

# 然后在浏览器中访问
# http://localhost:8000
```

### 方法3：使用 VS Code Live Server
1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 🎯 自定义指南

### 修改颜色
在每个 HTML 文件的 `<script>` 标签中修改 Tailwind 配置：
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neon-purple': '#a855f7',  // 修改这里
                'neon-blue': '#3b82f6',    // 修改这里
            }
        }
    }
}
```

### 修改文字内容
直接编辑 HTML 文件中的文字即可。

### 调整动画速度
在 `style/animations.js` 中修改：
```javascript
// 轮播图自动播放间隔（毫秒）
this.autoplayInterval = setInterval(() => this.nextSlide(), 5000); // 改为3000则3秒切换
```

## 📧 联系方式

- **邮箱**: hunter.zheng08@gmail.com
- **电话**: +86 17316400635

## 📄 许可证

© 2025 Charlie Zheng. All rights reserved.

---

**Made with ❤️ using HTML, CSS, JavaScript, and Tailwind CSS**


