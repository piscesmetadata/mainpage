FROM node:alpine as node-builder

ENV WORKDIR /usr/local/piscesmetadata

WORKDIR $WORKDIR

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:alpine as production

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash 

COPY --from=node-builder /usr/lib /usr/lib
COPY --from=node-builder /usr/local/lib /usr/local/lib
COPY --from=node-builder /usr/local/include /usr/local/include
COPY --from=node-builder /usr/local/bin /usr/local/bin

RUN npm install --global --force yarn

COPY --from=node-builder /usr/local/piscesmetadata/build /var/www/html/build
COPY --from=node-builder /usr/local/piscesmetadata/etc/nginx/remix.conf /etc/nginx/conf.d/default.conf
COPY --from=node-builder /usr/local/piscesmetadata/node_modules /var/www/html/node_modules
COPY --from=node-builder /usr/local/piscesmetadata/package.json /var/www/html/package.json
COPY --from=node-builder /usr/local/piscesmetadata/yarn.lock /var/www/html/yarn.lock

WORKDIR /var/www/html

EXPOSE 80

CMD ["sh", "-c", "yarn --cwd /var/www/html start & nginx -g 'daemon off;'"]