FROM node:20.11.0-alpine as front-end

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=front-end /app/dist /usr/share/nginx/html
EXPOSE 80

LABEL org.opencontainers.image.authors="tchan199616@gmail.com"

CMD ["nginx", "-g", "daemon off;"]
