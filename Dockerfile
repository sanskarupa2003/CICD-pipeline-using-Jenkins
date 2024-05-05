# Use a lightweight base image, for example, Nginx
FROM nginx:alpine

# Copy all the contents of the current directory into the Nginx HTML folder
COPY . /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000
