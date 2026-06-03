#Stage 1: Build
FROM node:20-alpine AS node-builder
WORKDIR /app
COPY package*.json ./
RUN npm install express

#Stage 2: Production
FROM node:20-alpine
WORKDIR /app

#copy the necessary files
COPY --from=node-builder /app/node_modules ./node_modules
COPY index.js .
COPY package*.json .

#directory for the docker volume
RUN mkdir -p /app/data/

EXPOSE 3000

CMD ["npm", "start"]
