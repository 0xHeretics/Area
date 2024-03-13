# Stage 1: Build the Vue application
FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g serve
RUN npm install vue-flatpickr-component flatpickr --save
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "dist"]