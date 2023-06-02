# Use NGINX image
FROM nginx:latest

# Copy website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 to make it accessible from outside the container
EXPOSE 80
