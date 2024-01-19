FROM node:20-alpine

WORKDIR /src/app/

COPY package*.json  ./

RUN npm install

RUN npm run prepare

COPY . . 

EXPOSE 3000

CMD [ "npm","run","dev" ]
