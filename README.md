# Backend Template with ExpressJS and TypeScript

This repository provides a boilerplate template for a backend application using ExpressJS with TypeScript. Additionally, Docker support is included for easier containerization and deployment.

## Getting Started

Follow the steps below to set up and run the application.

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (version 10 or higher)
- [Docker](https://www.docker.com/) (for containerizing and running the application with Docker)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Run the following command to install the peer dependencies:

   ```bash
   npm install
   ```

3. **Install `nodemon` globally** (optional for local development)

   If you plan to run the server locally without Docker, install `nodemon` globally to automatically restart the server when files change:

   ```bash
   npm install -g nodemon
   ```

4. **Install TypeScript and `ts-node`** (for development)

   If you’re working in a development environment, install TypeScript and `ts-node` as dev dependencies:

   ```bash
   npm install typescript ts-node --save-dev
   ```

### Running the Application Locally

To run the backend server locally, use the following command:

```bash
npm run server
```

This will start the Express server, and you can access it at `http://localhost:5500`.

## Using Docker to Run the Application

Docker is a great tool for running your application in a consistent environment. Below are the steps to use Docker to containerize and run your backend application.

### Docker Setup

1. **Create a Docker Image**

   Use the provided `Dockerfile` to build a Docker image for your application:

   ```bash
   docker build -t backend-nodejs-app .
   ```

2. **Run the Docker Container**

   You can now run the application inside a Docker container by exposing port `5500` (or the port specified in your `.env` file):

   ```bash
   docker run --env-file .env -p 5500:5500 backend-nodejs-app
   ```

   This will bind port `5500` on the container to port `5500` on your host machine, allowing you to access the server at `http://localhost:5500`.

### Using Docker Compose

If you have a more complex setup, or you simply want an easier way to manage services, you can use Docker Compose to orchestrate your containers.

#### 1. Create a `docker-compose.yml` File

A `docker-compose.yml` file is already provided in this repository:

```yaml
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5500:5500"
    env_file:
      - .env
    command: npm run server
```

#### 2. Run the Application with Docker Compose

To start the application using Docker Compose, run the following command:

```bash
docker-compose up
```

This will build the Docker image (if needed) and start the container with the configurations defined in the `docker-compose.yml` file.

To run it in detached mode (in the background), use:

```bash
docker-compose up -d
```

#### 3. Stop the Application

To stop the running containers, use the following command:

```bash
docker-compose down
```

### Dockerfile Overview

Below is the `Dockerfile` used to build your backend application:

```Dockerfile
# Start from the official Node.js 21 image, which is based on Alpine Linux (smaller image size)
FROM node:21-alpine

# Set the working directory to /src
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install all the dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose the port (read from .env)
EXPOSE 5500

# Set the default command to start the server
CMD ["npm", "run", "server"]
```

## Folder Structure

- **Backend**
  - `index.ts`: The main entry point for the Express server.
  - Additional backend files as required for your project.

## Environment Variables

The application reads environment variables from a `.env` file. Here’s an example of what the `.env` file might contain:

```
PORT=5500
```

This ensures that your server runs on port `5500` inside the Docker container and locally, unless another port is specified.

## Additional Scripts

- `npm run server`: Starts the Express server.

## Building for Production

To build the project for production, you can bundle the TypeScript files into JavaScript and optimize your server for deployment.

```bash
npm run build
```

This will compile your TypeScript code to JavaScript and output it to the `dist` directory.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

---

### Notes:

- **Docker**: This project supports Docker, which allows you to run your application in isolated containers for consistent environments across development, testing, and production.
- **Docker Compose**: If your project scales to include multiple services (such as databases), Docker Compose is an easy way to manage those services together.

---

Happy coding!

---

