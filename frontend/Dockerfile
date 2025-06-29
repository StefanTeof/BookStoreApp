# 1. Build Phase
FROM node:20.11.1-slim AS builder
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
WORKDIR /usr/src/frontend
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && mv build dist

# 2. Runtime Phase
FROM nginx:1.25.3-alpine
COPY --from=builder /usr/src/frontend/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
