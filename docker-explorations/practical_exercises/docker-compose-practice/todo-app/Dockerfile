# Stage 1: BUILD
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install express

# Stage 2: PRODUCTION
FROM node:lts-alpine
WORKDIR /app
COPY package*.json .
COPY --from=builder /app/node_modules ./node_modules
COPY index.js .

# Directory to be used in volume
RUN mkdir -p /app/data

# EXPOSE port (OPTIONAL)
EXPOSE 3000

# COMMAND to execute after all the above processes
CMD ["npm", "start"]