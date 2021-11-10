FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV SERVER_PORT=9000
EXPOSE ${SERVER_PORT}
CMD [ "npm","start" ]