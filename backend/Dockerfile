FROM node:18-alpine3.21

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY src ./src

RUN mkdir -p uploads

EXPOSE 3000
CMD ["npm", "start"]
