# Stage 1: BUILD
FROM node:20-alpine AS todo-builder
WORKDIR /app
COPY package*.json ./
RUN npm install express

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
# Copy necessary files
COPY --from=todo-builder /app/node_modules ./node_modules
COPY package*.json .
COPY index.js .

# Directory for the docker volume
RUN mkdir -p /app/data/

# Command to execute after all the docker processes
CMD ["npm", "start"]
