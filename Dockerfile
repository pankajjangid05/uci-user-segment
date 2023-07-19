# # Use the official Node.js 14 image as the base image
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY *.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Start the Next.js server
# CMD ["npm", "run", "dev"]


# FROM node:14-alpine as dependencies
# WORKDIR /app
# COPY package.json .
# RUN npm install

# FROM node:14-alpine as build
# WORKDIR /app
# COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html


FROM node:16 AS install
WORKDIR /app
COPY package.json ./
RUN yarn install

FROM node:16 as build
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:16
WORKDIR /app
# COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
# CMD [ "npm", "run", "start" ]
CMD ["npm", "run", "dev"]