# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Install Angular CLI globally (if not already installed as a local dependency)
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of your Angular project files into the container
COPY . .

# Expose the default Angular development server port
EXPOSE 4200

# Run the Angular development server and bind it to all network interfaces
CMD ["ng", "serve", "--host", "0.0.0.0"]
