FROM node:12-alpine

ARG MY_ENV

EXPOSE 3000

WORKDIR /var/www

COPY package.json yarn.lock ./

RUN yarn install

ADD . /var/www

RUN yarn build
