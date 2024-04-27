# Defines base image to be Node version 21. The server will
# on top of this. Uses Alpine version which is more lightweight version
# of Node and suitable for running the frontend
FROM node:21-alpine

# Defines working directory of docker container.
WORKDIR /app

# Copies package.json file from local system to docker image.
COPY package.json .

# Run npm install inside docker image to install the dependencies.
RUN npm install

# Copy the rest of the files in /frontend to the docker image.
COPY . .

# Expose port 5173
EXPOSE 5173

# Commands to run frontend in the docker container.
# This command is only run when the docker container is started up.
CMD [ "npm", "run", "dev"]