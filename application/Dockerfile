FROM node:4.3
MAINTAINER Felipe Constantino <felipecdo50@gmail.com>

# Create user called node to run the service
RUN groupadd -r node && useradd -r -g node node

# Create the app folder and install the global dependencies
RUN mkdir -p /var/www/nodeapp 

# Give permission to node user read
RUN chown -R node /var/www/nodeapp

WORKDIR /var/www/nodeapp

COPY package.json package.json

RUN npm install --production

COPY . .

EXPOSE 3000

USER node

CMD ["/bin/bash", "-c", "npm start"]
