# Alpine build: only Docusaurus. Tina admin is prebuilt in static/tina-admin/
# (tinacms build OOMs on small VPS — run `npm run tina:admin` locally and commit).
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

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
