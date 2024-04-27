# This is where you define the image for
# the server B which processes the orders.

# You should then use Noje image from Docker Hub as the basis,
# and then follow the instructions linked to in assignment document.
# You should be able to produce a working installation by just
# following the instructions.

# Defines base image to be Node version 21. The server will
# on top of this.
FROM node:21

# Defines working directory of docker container.
WORKDIR /index

# Copies package.json file from local system to docker image.
COPY package*.json ./

# Run npm install inside docker image to install the dependencies.
RUN npm install

# Copy the rest of the files in /backend/server-b to the docker image.
COPY . .

# Sets proper host for Message Broker. When run in dev mode,
# host is 'localhost', but this is not the case when running all the
# services as containser.
ENV RABBITMQ_HOST=rabbitmq

# Commands to run Server B in the docker container.
# This command is only run when the docker container is started up.
CMD [ "node", "index.js" ]
