FROM node:23-alpine AS build
WORKDIR /htmx_express
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 2222
CMD ["npm", "run", "start"]
