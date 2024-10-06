# Use an official Node.js runtime as a parent image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dockerize tool
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

# Copy wait-for-it script to the container
COPY wait-for-it.sh /usr/src/app/

# Make the script executable
RUN chmod +x /usr/src/app/wait-for-it.sh

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Bind to port 5000
EXPOSE 5000

# Start the server
CMD [ "node", "server.js" ]
