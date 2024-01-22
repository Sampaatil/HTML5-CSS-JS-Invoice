# Use the official Nginx base image
FROM nginx:latest

# Remove the default Nginx configuration
RUN rm -v /etc/nginx/nginx.conf

# Copy your application files to the Nginx document root
COPY . /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

