FROM node:22-alpine AS base

# ---- 第一阶段：安装依赖 ----
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- 第二阶段：构建应用 ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 设置构建时的数据库连接（用于生成 Prisma Client 和预填充数据）
ENV DATABASE_URL="file:./dev.db"

# 生成 Prisma Client
RUN npx prisma generate

# 创建数据库并填充种子数据（作为模板）
RUN npx prisma db push
RUN npx tsx prisma/seed.ts

# 构建 Next.js（standalone 模式）
RUN npm run build

# ---- 第三阶段：生产运行 ----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制公共资源
COPY --from=builder /app/public ./public

# 复制 standalone 构建产物
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 复制 Prisma schema（运行时 Prisma Client 需要）
COPY --from=builder --chown=nextjs:nodejs /app/prisma/schema.prisma ./prisma/schema.prisma

# 复制预填充的数据库作为模板
COPY --from=builder --chown=nextjs:nodejs /app/prisma/dev.db ./prisma/dev.db.template

# 复制入口脚本
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

# 创建数据目录
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]
