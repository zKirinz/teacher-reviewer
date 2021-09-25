FROM node:14.17-alpine
WORKDIR /server
COPY server/package.json ./package.json
RUN yarn
COPY server/src ./src
COPY server/config ./config
COPY server/tsconfig.json ./tsconfig.json
COPY server/tsconfig.build.json ./tsconfig.build.json
COPY server/nest-cli.json ./nest-cli.json
EXPOSE 5000
CMD ["yarn", "start:dev"]