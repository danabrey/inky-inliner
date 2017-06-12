FROM node:6
MAINTAINER Dan Abrey <danabrey@gmail.com>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

ENV NODE_ENV production

USER node

EXPOSE 3000

CMD ["npm","start"]