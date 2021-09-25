FROM node:14.17-alpine as build
WORKDIR /client
COPY client/package.json ./package.json
RUN yarn
COPY client/src ./src
COPY client/public ./public
COPY client/.env.production ./.env.production
RUN yarn build
# Setup Nginx as a Proxy
FROM nginx:stable-alpine
COPY --from=build /client/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]