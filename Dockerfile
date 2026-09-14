# 1. Base stage: Node.js LTS dengan corepack untuk pnpm
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 2. Dependencies stage: Menginstall seluruh dependensi berdasarkan pnpm-lock.yaml
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 3. Builder stage: Melakukan build aplikasi dengan Next.js output standalone
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm run build

# 4. Runner stage: Container produksi minimalis dan aman dengan non-root user
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Membuat user non-root khusus Next.js untuk aspek keamanan
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Menyalin asset publik
COPY --from=builder /app/public ./public

# Menyiapkan permission folder .next untuk prerender cache
RUN mkdir .next && chown nextjs:nodejs .next

# Memanfaatkan output traces standalone dari Next.js (sangat ringan < 150MB)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
