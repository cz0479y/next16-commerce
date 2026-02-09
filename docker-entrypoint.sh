#!/bin/sh
set -e

# 如果数据卷中没有数据库文件，从模板复制一份（首次启动时）
if [ ! -f /app/data/dev.db ]; then
  echo "数据库不存在，正在从模板初始化..."
  cp /app/prisma/dev.db.template /app/data/dev.db
  echo "数据库初始化完成"
fi

# 启动 Next.js 服务
exec "$@"
