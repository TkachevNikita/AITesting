FROM node:22 as build
WORKDIR /src
COPY . .
RUN npm install && \
    npm run build
FROM nginx:stable
COPY --from=build /src/dist/AITesting/browser /usr/share/nginx/html