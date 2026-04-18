FROM node:18

WORKDIR /first-docker

COPY . .

RUN npm i

EXPOSE 5000 

CMD ["node", "index.js"]




