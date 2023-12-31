FROM node:20-bookworm
RUN apt-get update
RUN apt-get install -y chromium
COPY package.json package*.json tsconfig.json* remotion.config.* .prettierrc* ./
COPY src ./src
COPY public ./public
RUN npm i
CMD ["npm", "start"]
