FROM nginx:stable-alpine
RUN rm -f /etc/nginx/conf.d/*
COPY proxy/nginx.conf /etc/nginx/conf.d/app.conf