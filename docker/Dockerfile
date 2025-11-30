# Stage 1: Build Frontend
FROM node:18-alpine as build

WORKDIR /app/frontend

# Copy package files first for caching
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ .

# Build the frontend
# Note: vite.config.js builds to ../backend/static, which resolves to /app/backend/static inside the container
RUN npm run build

# Stage 2: Setup Backend
FROM python:3.12-slim

WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ .

# Copy built static files from the build stage
# We copy from /app/backend/static (where Vite built it) to /app/static (where Flask expects it)
COPY --from=build /app/backend/static ./static

EXPOSE 5001

CMD ["python", "app.py"]
