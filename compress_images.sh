#!/bin/bash

# 创建压缩文件夹
mkdir -p compressed

# 压缩所有 PNG 图片
for file in *.png; do
    if [ -f "$file" ]; then
        echo "正在压缩: $file"
        # 压缩图片：格式选项60（质量），最大尺寸200px
        sips -s format png -s formatOptions 60 -Z 200 "$file" --out "compressed/${file%.*}_compressed.png"
        
        # 显示压缩前后的大小
        original_size=$(ls -lh "$file" | awk '{print $5}')
        compressed_size=$(ls -lh "compressed/${file%.*}_compressed.png" | awk '{print $5}')
        echo "  原始: $original_size -> 压缩后: $compressed_size"
        echo ""
    fi
done

echo "所有图片压缩完成！"
echo "压缩后的图片保存在 'compressed' 文件夹中"
