from node:8.1.2

RUN mkdir -p /home/app/code

WORKDIR /home/app/code

COPY . /home/app/code

RUN yarn install

CMD ["yarn", "start"]