FROM node
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi
EXPOSE 3000
CMD ["npm", "start"]
