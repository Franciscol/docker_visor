FROM node:20 as builder

# Actualizar npm
RUN npm install -g npm@latest

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción
# Usar la imagen oficial de Nginx
FROM nginx:alpine

# Copiar los certificados SSL y el archivo de configuración de Nginx al contenedor
COPY wildcard_sdp_gov_co.crt /etc/nginx/ssl/wildcard_sdp_gov_co.crt
COPY wildcard_sdp_gov_co.key /etc/nginx/ssl/wildcard_sdp_gov_co.key
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 y 443
EXPOSE 80 443

# Iniciar Nginx en el foreground para que el contenedor no se cierre
CMD ["nginx", "-g", "daemon off;"]


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

