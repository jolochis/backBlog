FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY prisma ./
# Install dependencies
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .
RUN npm run build
# Generate Prisma Client code
RUN npx prisma generate

# Expose the port the app runs on, here, I was using port 3333
EXPOSE 3000

# Command to run the app
CMD [  "npm", "run", "start:migrate:prod" ]