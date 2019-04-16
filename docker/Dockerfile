FROM ubuntu:18.10

WORKDIR /usr/app

COPY package.json .

RUN apt-get update -y
RUN apt-get install curl software-properties-common -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install nodejs -y

RUN npm install --quiet

COPY . .
