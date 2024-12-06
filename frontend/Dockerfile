# Build the frontend

FROM node:10-alpine AS build

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY ./ /app/

EXPOSE 4200

RUN npm run build

# ---------------------------------------------------
# Use nxinx to serve the frontend

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/www /app/static/www