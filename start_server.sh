#!/bin/bash

# Charlie Zheng Personal Website - 本地服务器启动脚本

echo "🚀 启动 Charlie Zheng 个人网站本地服务器..."
echo ""
echo "📁 项目路径: $(pwd)"
echo ""

# 检查 Python 版本
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python 3 启动服务器"
    echo "🌐 访问地址: http://localhost:8000"
    echo "📌 按 Ctrl+C 停止服务器"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 2 启动服务器"
    echo "🌐 访问地址: http://localhost:8000"
    echo "📌 按 Ctrl+C 停止服务器"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ 错误: 未找到 Python"
    echo "请安装 Python 后重试"
    exit 1
fi



