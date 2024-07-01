# Backend Template with ExpressJS and TypeScript

This repository provides a boilerplate template for a backend application using ExpressJS with TypeScript.

## Getting Started

Follow the steps below to set up and run the application.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install backend dependencies**

   Navigate to the `backend` folder and run to install the ESLint version compatible with TypeScript:

   ```sh
   cd backend
   npm install eslint@8.56.0
   ```

3. **Install peer dependencies**

   Run the following command to install the peer dependencies:

   ```sh
   npm install --legacy-peer-deps
   ```

4. **Install `nodemon` globally**

   Run the following command to install `nodemon` globally:

   ```sh
   npm install -g nodemon
   ```

5. **Install TypeScript and `ts-node`**

   Run the following command to install TypeScript and `ts-node` as dev dependencies:

   ```sh
   npm install typescript ts-node --save-dev
   ```

### Running the Application

1. **Start the backend server**

   Navigate to the `backend` folder and run the following command to start the Express server:

   ```sh
   npm run server
   ```

   The backend server will start, typically running on `http://localhost:5000`.

### Folder Structure

- **Backend**
  - `server.ts`: The main entry point for the Express server.
  - Additional backend files as required for your project.

### Additional Scripts

- `npm run server`: Starts the Express server.

### Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request. I welcome all contributions!

