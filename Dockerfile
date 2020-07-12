# Pull from a base image
FROM node:13-alpine

# Use app as working directory
WORKDIR /app

# Copy files from current directory to app
COPY . /app

# Install dependancies
RUN npm ci

# Build production app
RUN npm run build

# Listen on the specified port
EXPOSE 3000

# Set node server
ENTRYPOINT npm run start