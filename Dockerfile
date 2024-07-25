FROM node:22-alpine AS development

ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:9080
ARG APP_PORT=3000

ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}
ARG APP_PORT=$[APP_PORT]

#  Navigate to the container working directory 
WORKDIR /usr/src/app
#  Copy package.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${APP_PORT}

CMD [ "npm", "run", "dev"]
