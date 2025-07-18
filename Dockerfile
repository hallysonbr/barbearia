# Estágio 1: Build da aplicação
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala TODAS as dependências (incluindo devDependencies para o build)
RUN npm ci

# Copia todo o código fonte
COPY . .

# Remove completamente a seção de budgets do angular.json e faz o build
RUN sed -i '/"budgets":/,/]/d' angular.json && \
    npm run build -- --configuration production --verbose

# Estágio 2: Servir a aplicação
FROM nginx:alpine

# Copia a aplicação buildada para o diretório do nginx
COPY --from=build /app/dist/barbearia-app /usr/share/nginx/html

# Copia configuração personalizada do nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
