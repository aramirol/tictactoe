# Use NGINX unpriviledged image
FROM nginxinc/nginx-unprivileged:stable

# Copy website files into the container
COPY index.html style.css script.js /usr/share/nginx/html

# Expose port 8080 to make it accessible from outside the container
EXPOSE 8080
