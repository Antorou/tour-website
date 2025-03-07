FROM node:22.6.0-bookworm AS tester

# ARG USERNAME=node

WORKDIR /usr/src/web

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Builder Stage
FROM tester AS builder
RUN yarn build
RUN pwd
# RUN ls /dist
RUN ls /usr/src/web/dist

# # Production Executor
# FROM node:lts-alpine AS runner
# ENV VITE_ENV=production
# COPY nginx_prod.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf
# COPY nginx_prod.conf /etc/nginx/conf.d/default.conf
# COPY --chown=1001:0 --from=builder /usr/src/web/dist/ /app/
# EXPOSE 3001


# USER ${USERNAME}

# Development Executor
FROM tester AS dev
# ENV WEBPACK_ENV=development
ENV TMPDIR=/usr/src/web/tmp
RUN mkdir -p /usr/src/web/tmp
ENTRYPOINT ["yarn", "dev", "--port", "3001"]

# FROM builder AS vscode
# CMD [ "sleep", "infinity" ]



# ENV SHELL=/bin/bash
# SHELL ["/bin/bash"]



# CMD ["yarn", "dev", "&&"]