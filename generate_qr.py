#!/usr/bin/env python3
# -*- coding: utf-8 -*-

try:
    import qrcode
    from PIL import Image
    import os
    
    # 网站URL
    url = "https://pureman-li.github.io/food/"
    
    # 创建二维码
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    
    # 添加数据
    qr.add_data(url)
    qr.make(fit=True)
    
    # 创建图像
    img = qr.make_image(fill_color="black", back_color="white")
    
    # 保存二维码
    filename = "食材组合器_二维码.png"
    img.save(filename)
    
    print(f"✅ 二维码生成成功！")
    print(f"📱 文件名: {filename}")
    print(f"🌐 网址: {url}")
    print(f"📏 尺寸: {img.size[0]}x{img.size[1]} 像素")
    
    # 显示文件大小
    file_size = os.path.getsize(filename)
    print(f"💾 文件大小: {file_size/1024:.1f} KB")
    
except ImportError:
    print("❌ 需要安装 qrcode 库")
    print("请运行: pip3 install qrcode[pil]")
    print("\n或者使用在线二维码生成器:")
    print("🌐 https://www.qr-code-generator.com/")
    print("🌐 https://www.qrcode-monkey.com/")
    print("🌐 https://goqr.me/")
