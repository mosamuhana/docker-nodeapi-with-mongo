FROM node:lts-alpine

ARG PORT
ENV PORT ${PORT:-8000}

WORKDIR /app

COPY package.json .

RUN npm install --omit=dev

COPY ./dist /app/dist

EXPOSE $PORT

CMD ["npm","start"]
