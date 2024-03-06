###FROM node:20 as builder
###WORKDIR /app
###COPY . .
###RUN npm install
###RUN npm run build
###
#### Etapa de producción
###FROM nginx:alpine
###COPY --from=builder /app/dist/visor-standalone/browser /usr/share/nginx/html



# Etapa de compilación
FROM node:20 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g yarn
RUN yarn install
RUN yarn run build

# Etapa de producción con Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/docker-visor/browser /usr/share/nginx/html
