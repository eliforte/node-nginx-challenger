FROM node:18

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION=v0.7.0

RUN apt-get update 
RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin 
RUN apt-get autoremove -yqq --purge wget
RUN rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]