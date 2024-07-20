FROM node:21-alpine AS build

WORKDIR /usr/src

COPY . /usr/src/

RUN npm install
RUN npm run seed

FROM scratch

# Distribution configuration
COPY --from=build /etc/os-release /etc/os-release

# Express.js
COPY --from=build /usr/src/package.json /usr/src/package.json
COPY --from=build /usr/src/node_modules /usr/src/node_modules
COPY --from=build /usr/src/app /usr/src/app

