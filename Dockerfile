FROM node:18-alpine AS build
WORKDIR /usr/sqa/frontend
COPY package*.json ./
RUN npm install
COPY . ./
ENTRYPOINT ["npm", "start"]