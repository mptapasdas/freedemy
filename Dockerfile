FROM node:24-alpine

WORKDIR /freedemy/

COPY package.json package-lock.json /freedemy/
RUN npm install

COPY . /freedemy/

RUN npm run build

EXPOSE 3000

# Using a simple static server or vite preview to serve the build
# For production, it's better to use nginx, but keeping it simple for now
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
