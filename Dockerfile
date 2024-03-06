FROM node:20 as builder

# Actualizar npm
RUN npm install -g npm@latest

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/dist/docker-visor/browser /usr/share/nginx/html

###
###FROM node:20 as builder
###WORKDIR /app
###COPY . .
###RUN npm install
###RUN npm run build
###
#### Etapa de producción
###FROM nginx:alpine
###COPY --from=builder /app/dist/docker-visor/browser /usr/share/nginx/html
###

