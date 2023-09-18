FROM node:lts as dependencies
WORKDIR /crypto-swap
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /crypto-swap

COPY . .

COPY tsconfig.json .
COPY --from=dependencies /crypto-swap/node_modules ./node_modules
RUN npm run build


FROM node:lts as runner
WORKDIR /crypto-swap
ENV NODE_ENV production

COPY --from=builder /crypto-swap/public ./public
COPY --from=builder /crypto-swap/package.json ./package.json
COPY --from=builder /crypto-swap/.next ./.next
COPY --from=builder /crypto-swap/node_modules ./node_modules
COPY --from=builder /crypto-swap/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm","run", "start"]
