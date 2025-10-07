# 🚀 快速入门指南

## 第一步：准备图片

1. 将您的照片放入相应的文件夹：
   ```
   assets/images/
   ├── portrait.jpg          # 您的头像
   ├── car_fashions/         # 10张汽车照片
   ├── nature/               # 9张自然照片
   ├── childhood/            # 10张童年照片
   ├── achievements/         # 8张成就照片
   ├── gym/                  # 6张健身照片
   ├── sports/               # 6张运动照片
   └── cuisine/              # 9张美食照片
   ```

2. 图片命名示例：
   - `car1.jpg, car2.jpg, ... car10.jpg`
   - `nature1.jpg, nature2.jpg, ... nature9.jpg`
   - 以此类推

> **提示**: 如果暂时没有图片，网站会显示占位符，不影响功能测试。

## 第二步：启动网站

### 方法 A：使用启动脚本（推荐）

```bash
# 在终端中运行
cd /Users/jane/Desktop/pw_zheng
./start_server.sh
```

然后在浏览器中访问：`http://localhost:8000`

### 方法 B：直接打开文件

双击 `index.html` 文件即可在浏览器中打开。

### 方法 C：使用其他服务器

```bash
# Node.js (需要先安装 http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

## 第三步：个性化定制

### 修改个人信息

编辑 `index.html`，找到以下部分并修改：

```html
<!-- 名字 -->
<h1>Charlie Zheng</h1>

<!-- 学校和性格 -->
<p>SSBS '26 | ENFP</p>

<!-- 个人简介 -->
<p>Hi! I'm Charlie, a twelve-grader...</p>

<!-- 联系方式 -->
<a href="mailto:hunter.zheng08@gmail.com">
<a href="tel:+8617316400635">
```

### 修改颜色主题

在每个 HTML 文件的 `<head>` 部分找到：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neon-purple': '#a855f7',  // 改为您喜欢的紫色
                'neon-blue': '#3b82f6',    // 改为您喜欢的蓝色
            }
        }
    }
}
```

### 修改页面标题和描述

编辑各个 HTML 文件中的：

```html
<!-- 页面标题 -->
<title>Charlie Zheng | huNter</title>

<!-- 主标题 -->
<h1>A New Lens through Photography</h1>

<!-- 描述文字 -->
<p>Aesthetic and emotional side through visual storytelling</p>
```

## 第四步：部署上线（可选）

### 部署到 GitHub Pages（免费）

1. 在 GitHub 创建新仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://yourusername.github.io/repository-name`

### 部署到 Netlify（免费）

1. 访问 [Netlify](https://www.netlify.com/)
2. 拖拽项目文件夹到网站
3. 几秒钟后获得免费域名

### 部署到 Vercel（免费）

1. 访问 [Vercel](https://vercel.com/)
2. 连接 GitHub 仓库或上传文件
3. 自动部署并获得域名

## 📱 功能特性测试清单

- [ ] 主页加载正常，所有卡片显示
- [ ] 点击4个导航卡片，跳转到对应页面
- [ ] 轮播图自动播放（5秒切换）
- [ ] 点击轮播图左右箭头可以手动切换
- [ ] 画廊图片点击后全屏显示（灯箱效果）
- [ ] 滚动页面时，元素淡入显示
- [ ] 返回主页按钮工作正常
- [ ] 移动端响应式布局正常
- [ ] 联系方式链接可点击

## 🎨 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 🆘 常见问题

### Q: 图片不显示？
**A**: 检查图片路径和文件名是否正确，注意大小写。

### Q: 动画不工作？
**A**: 确保 `style/animations.js` 文件加载正常，检查浏览器控制台是否有错误。

### Q: 轮播图不自动播放？
**A**: 检查 JavaScript 是否正常加载，或尝试刷新页面。

### Q: 移动端显示异常？
**A**: 清除浏览器缓存后重试。

## 📞 需要帮助？

如果遇到问题，请联系：
- 📧 Email: hunter.zheng08@gmail.com
- 📱 Phone: +86 17316400635

---

**祝你使用愉快！ 🎉**



