FROM node:10 AS builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:10-apline
WORKDIR /app

## Stop1의 build에서 만든 프로젝트를 가져온다.
COPY --from=builder /app ./
CMD ["npm", "rum", "start:prod"]