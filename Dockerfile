ARG APP_DIR=/srv

# Base
FROM node:12.22.1-alpine AS node_base

FROM keymetrics/pm2:12-alpine AS node_pm2

# Install stage
FROM node_base AS deps
ARG APP_DIR
WORKDIR ${APP_DIR}
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile

# Build stage
FROM node_base as build
ARG APP_DIR
WORKDIR ${APP_DIR}
COPY --from=deps ${APP_DIR}/node_modules ./node_modules
# COPY src ./src
# COPY next.config.js .
# COPY package.json .
COPY . .
RUN yarn build

# Production run stage
FROM node_pm2 AS production
ARG APP_DIR
WORKDIR ${APP_DIR}
COPY --from=build ${APP_DIR} .
# COPY --from=build ${APP_DIR}/package.json ./package.json
# COPY --from=build ${APP_DIR}/node_modules ./node_modules
# COPY --from=build ${APP_DIR}/.next ./.next
RUN pm2 install pm2-logrotate
