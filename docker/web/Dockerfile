FROM node:16.14-alpine

RUN apk add --update-cache \
    git bash make g++ py3-pip

WORKDIR /web

ENV PATH /web/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]
