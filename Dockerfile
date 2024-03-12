# Etapa de construcción de Node.js
FROM node:20 as builder

# Actualizar npm a la última versión
RUN npm install -g npm@latest

# Establecer el directorio de trabajo
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


# Utiliza la misma etapa de construcción de Node.js que antes

# Etapa de producción usando Nginx
FROM nginx:latest

# Crear los directorios para los certificados SSL
RUN mkdir -p /etc/nginx/ssl

# Copiar los certificados SSL y la clave privada a su ubicación
COPY wildcard_sdp_gov_co.cer /etc/nginx/ssl/wildcard_sdp_gov_co.cer
COPY wildcard_sdp_gov_co.key /etc/nginx/ssl/wildcard_sdp_gov_co.key

# Copia los archivos de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copiar el contenido estático generado en la etapa de construcción a Nginx
COPY --from=builder /app/dist/visor-standalone/browser /usr/share/nginx/html

# Exponer los puertos para tráfico HTTP y HTTPS
EXPOSE 80 443

# Iniciar Nginx en primer plano para que el contenedor no se cierre automáticamente
CMD ["nginx", "-g", "daemon off;"]
