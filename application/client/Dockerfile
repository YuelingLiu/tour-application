# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory to /client in the container
WORKDIR /client

# Copy the package.json and package-lock.json from your host to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your client's source code from your host to your working directory
COPY . .

# Build the project for production
RUN npm run build

# Install a server to serve the static files
RUN npm install -g serve

# Make the client's port available to the outside
EXPOSE 3000

# Serve the static files from the build directory on the specified port
CMD ["serve", "-s", "build", "-l", "3000"]
