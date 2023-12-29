# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory to /server in the container
WORKDIR /server

# Copy the package.json and package-lock.json from your host to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your server's source code from your host to your working directory
COPY . .

# Make the server's port available to the outside
EXPOSE 8080

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "server.js"]
