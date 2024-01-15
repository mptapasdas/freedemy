FROM node:18-alpine

WORKDIR /freedemy/

COPY public/ /freedemy/public
COPY src/ /freedemy/src
COPY package.json /freedemy/

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]