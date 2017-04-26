FROM node:7
RUN npm i -g mysql2api

EXPOSE 3307
CMD [ "mysql2api", "-c", "mysql://tang_poetry:tang_poetry@db/tang_poetry?multipleStatements=true" ]