# base node image
FROM node:20-bookworm-slim as base

ENV NODE_ENV production
ENV PORT 3001
ENV DATABASE_URL="file:prod.db"

RUN apt-get update && apt-get install -y openssl

# build
FROM base 

WORKDIR /app
ADD . .
RUN npm install --include=dev
RUN npx prisma generate
RUN npm run build
RUN npx prisma db push
RUN npx prisma db seed

EXPOSE 3001
CMD ["npm", "start"]
