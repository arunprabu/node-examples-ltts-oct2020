#Base image from docker hub -- this will have debian linux os + nodejs v 12 installed
FROM node:12

#Creating app directory inside the above image - where we will deploy our app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# will install the project dependencies
RUN npm install

#bundle app source -- copy the source code into the docker workdir
COPY . .

# port in which the app is going to run inside docker
EXPOSE 3000

#let's start the app
CMD [ "node", "./bin/www" ]

# if we don't have mongodb and other software dependencies for our project,
# we can build an image with the above setup by using following cmd in cmd prompt
# docker build -t phonebook-api-docker:latest .   
# in the above 'phonebook-api-docker' is the name of the image- 'latest' is the version

# but we need mongodb, so we will create docker-compose.yml -- refer the file in root
