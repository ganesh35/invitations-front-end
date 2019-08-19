# Create image based on the official Node image from dockerhub
FROM node:12.7.0-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY ./package.json ./package-lock.json /app/

# Install dependecies
RUN npm install @angular/cli
RUN npm install @angular/cli -g 
#RUN npm cache clean --force
RUN npm install
RUN node -v
RUN ng config -g cli.warnings.versionMismatch false

# Get all the code needed to run the app
COPY . /app/

# Build core library of angular project
RUN ng build core

# Expose the port the app runs in
EXPOSE 4000

# Build the app for SSR
RUN npm run build:ssr 

# Serve the app
CMD ["npm", "run", "serve:ssr"]
