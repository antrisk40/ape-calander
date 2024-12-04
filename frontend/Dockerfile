# Dockerfile for React Frontend
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose the port React runs on
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]
