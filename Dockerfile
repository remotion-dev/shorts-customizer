FROM debian:bookworm
RUN apt-get update
RUN apt-get install -y nodejs npm chromium
COPY package.json package*.json tsconfig.json* remotion.config.* ./
COPY src ./src
COPY public ./public
RUN npm i
CMD ["npm", "start"]
