# Step 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
# RUN npm run build --prod

EXPOSE 80

CMD ["npm", "start"]

# Step 2: Serve the application using Nginx
# FROM nginx:1.23

# Copy the build output to Nginx's HTML directory
# COPY --from=build /app/dist/voca-tech /usr/share/nginx/html

# Copy custom Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
# EXPOSE 80

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
