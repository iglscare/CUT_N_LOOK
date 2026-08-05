# ============================================================
# Stage 1: Base — Node 20 Alpine with turbo installed globally
# ============================================================
FROM node:20-alpine AS base
RUN npm install -g turbo@^2.4.0
WORKDIR /app

# ============================================================
# Stage 2: Pruner — prune to only admin app dependencies
# ============================================================
FROM base AS pruner-admin
COPY . .
RUN turbo prune @skyelite/admin --docker

# ============================================================
# Stage 3: Builder — install deps & build admin app
# ============================================================
FROM base AS builder-admin
COPY --from=pruner-admin /app/out/json/ .
COPY --from=pruner-admin /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=pruner-admin /app/out/full/ .
RUN turbo run build --filter=@skyelite/admin

# ============================================================
# Stage 4: Runner — minimal production image for admin
# ============================================================
FROM node:20-alpine AS runner-admin
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder-admin /app/apps/admin/.next/standalone ./
COPY --from=builder-admin /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=builder-admin /app/apps/admin/public ./apps/admin/public 2>/dev/null || true

USER nextjs
EXPOSE 3001

CMD ["node", "apps/admin/server.js"]
