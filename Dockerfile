FROM node:20 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/dist/visor-standalone/browser /usr/share/nginx/html