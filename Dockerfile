# Etapa 1: Definir a imagem base
FROM node:22-alpine AS build

# Etapa 2: Definir o diretório de trabalho no contêiner
WORKDIR /app

# Etapa 3: Copiar o package.json e package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Etapa 4: Instalar dependências
RUN npm install

# Etapa 5: Copiar todos os outros arquivos para o contêiner
COPY . .

# Etapa 6: Instalar o Prisma CLI globalmente (opcional, mas recomendado)
RUN npm install -g prisma

# Etapa 7: Rodar as migrações e iniciar o servidor
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]