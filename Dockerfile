FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./


RUN npm install

COPY . .


RUN npx prisma generate
RUN npm run build

# exposing the port in docker file for docker-compose its not needed in latest version it can be and can not be specified in latest version.
EXPOSE 3000 

CMD ["npm", "run" ,"dev:docker"]