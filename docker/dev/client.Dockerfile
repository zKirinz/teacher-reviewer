FROM node:14.17-alpine
WORKDIR /client
COPY client/package.json ./package.json
RUN yarn
COPY client/src ./src
COPY client/public ./public
COPY client/.env.production ./.env.production
RUN yarn build