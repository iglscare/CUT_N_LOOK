# ============================================================
# Stage 1: Base — Node 20 Alpine with turbo installed globally
# ============================================================
FROM node:20-alpine AS base
RUN npm install -g turbo@^2.4.0
WORKDIR /app

# ============================================================
# Stage 2: Pruner — prune to only web app dependencies
# ============================================================
FROM base AS pruner-web
COPY . .
RUN turbo prune @skyelite/web --docker

# ============================================================
# Stage 3: Builder — install deps & build web app
# ============================================================
FROM base AS builder-web
COPY --from=pruner-web /app/out/json/ .
COPY --from=pruner-web /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=pruner-web /app/out/full/ .
RUN turbo run build --filter=@skyelite/web

# ============================================================
# Stage 4: Runner — minimal production image for web
# ============================================================
FROM node:20-alpine AS runner-web
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder-web /app/apps/web/.next/standalone ./
COPY --from=builder-web /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder-web /app/apps/web/public ./apps/web/public

USER nextjs
EXPOSE 3000

CMD ["node", "apps/web/server.js"]
