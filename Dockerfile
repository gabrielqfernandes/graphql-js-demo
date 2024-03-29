FROM node:16
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
