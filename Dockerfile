FROM node:alpine as node-builder

LABEL maintainer="François López <francois@piscesmetadata.com>"
LABEL description="Pisces Metadata Website Dockerfile for production. This image is based on Node.js Alpine Linux powered by Remix and Tailwind CSS."

ENV WORKDIR /usr/local/piscesmetadata

WORKDIR $WORKDIR

COPY . .

RUN yarn install
RUN yarn build

FROM node:alpine as production

ENV WORKDIR /app

WORKDIR $WORKDIR

COPY --from=node-builder /usr/local/piscesmetadata/build $WORKDIR/build
COPY --from=node-builder /usr/local/piscesmetadata/package.json $WORKDIR/
COPY --from=node-builder /usr/local/piscesmetadata/yarn.lock $WORKDIR/
COPY --from=node-builder /usr/local/piscesmetadata/node_modules $WORKDIR/node_modules

EXPOSE 3000

CMD ["yarn", "start"]