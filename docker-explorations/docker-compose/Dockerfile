# Docker file

#########################
# Author: Mohamed Farooq
# Date-modified: 1-06-26
#########################

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install express

# Stage 2: Production
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json .
COPY index.js .

# Directory to be saved in volume
RUN mkdir -p app/data/

# Optional: Expose the port
EXPOSE 3000

# Command to run after file execution
CMD ["npm", "start"]
