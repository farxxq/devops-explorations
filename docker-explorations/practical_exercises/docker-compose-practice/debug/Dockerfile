# Docker file

# Stage 1: BUILD
FROM node:lts-alpine
WORKDIR /app
COPY . .

# Stage 2: VOLUME DIRECTORY
RUN mkdir -p app/cache/

CMD ["echo", "'Docker file just worked'"]