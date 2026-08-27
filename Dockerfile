# bookworm + build tools: Tina pulls better-sqlite3 (needs node-gyp)
FROM node:20-bookworm-slim AS build
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# TinaCloud credentials (optional). When set, builds /tina-admin into the site.
ARG TINA_CLIENT_ID=
ARG TINA_TOKEN=
ARG TINA_BRANCH=main
ENV TINA_CLIENT_ID=$TINA_CLIENT_ID \
    NEXT_PUBLIC_TINA_CLIENT_ID=$TINA_CLIENT_ID \
    TINA_TOKEN=$TINA_TOKEN \
    TINA_BRANCH=$TINA_BRANCH

RUN if [ -n "$TINA_CLIENT_ID" ] && [ -n "$TINA_TOKEN" ]; then \
      npx tinacms build && npm run build; \
    else \
      npm run build; \
    fi

FROM nginx:alpine
RUN apk add --no-cache openssl \
  && mkdir -p /etc/nginx/certs \
  && openssl req -x509 -nodes -days 825 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/selfsigned.key \
    -out /etc/nginx/certs/selfsigned.crt \
    -subj "/CN=taiga-iot-docs" \
    -addext "subjectAltName=IP:95.183.13.164,DNS:localhost"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 443
