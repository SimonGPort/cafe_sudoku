FROM node:13-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]