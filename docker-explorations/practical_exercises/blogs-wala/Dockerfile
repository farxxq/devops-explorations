# Docker file

# Stage 1: Build
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install express

# Stage 2: Production
FROM node:lts-alpine
WORKDIR /app
COPY package*.json .
COPY --from=builder /app/node_modules ./node_modules
COPY index.js .

# Directory save work
RUN mkdir -p /app/blogs

EXPOSE 3000

# Command to execute
CMD ["npm", "start"]
