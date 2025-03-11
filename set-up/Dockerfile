# 1️⃣ Usa la imagen oficial de Node.js (versión LTS recomendada)
FROM node:18-alpine

# 2️⃣ Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# 4️⃣ Instala las dependencias
RUN npm install

# 5️⃣ Copia el resto del código de la aplicación
COPY . .

# 6️⃣ Expone el puerto 5173 (Vite) o 3000 (CRA)
EXPOSE 5173

# 7️⃣ Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "dev"]
