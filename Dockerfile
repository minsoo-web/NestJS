# Step 1
FROM node:10 AS builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# step 2
FROM node:10-alpine
WORKDIR /app
EXPOSE 3000

## Stop1의 build에서 만든 프로젝트를 가져온다.
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]