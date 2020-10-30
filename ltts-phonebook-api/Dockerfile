#Base image from docker hub - this will have os + nodejs v 12 installed
FROM node:12

#Creating app directory inside the above image - where we will deploy our app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# will install project dependencies
RUN npm install

# Bundle app source -- copying the local project folder into the above mentioned workdir 
COPY . .

# port in which the app will run inside docker container
EXPOSE 3000

# finally to start the app
CMD [ "node", "./bin/www" ]



