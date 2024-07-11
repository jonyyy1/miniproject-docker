# My Node.js App with Docker

This project demonstrates how to set up a simple Node.js application using Docker and Docker Compose.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Exercise Steps](#exercise-steps)
  - [Step 1: Installing Docker](#step-1-installing-docker)
  - [Step 2: Writing a Dockerfile](#step-2-writing-a-dockerfile)
  - [Step 3: Building a Docker Image](#step-3-building-a-docker-image)
  - [Step 4: Running the Container](#step-4-running-the-container)
  - [Step 5: Interacting with the Container](#step-5-interacting-with-the-container)
  - [Step 6: Docker Compose](#step-6-docker-compose)
- [Adding Images](#adding-images)
- [Additional Commands](#additional-commands)

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- Node.js: [Installation Guide](https://nodejs.org/en/download/)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd my-node-app
    ```

2. Install Node.js dependencies:
    ```sh
    npm install
    ```

3. Create a `Dockerfile` with the following content:
    ```dockerfile
    # Use the official Node.js image as a base
    FROM node:14

    # Create and set the working directory
    WORKDIR /usr/src/app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application files
    COPY . .

    # Expose the port the app runs on
    EXPOSE 4000

    # Command to run the app
    CMD ["node", "app.js"]
    ```

4. Create a `Makefile` with the following content:
    ```makefile
    build:
        docker-compose build

    up:
        docker-compose up

    down:
        docker-compose down
    ```

5. Create an `app.js` file with the following content:
    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 4000;

    // MongoDB connection
    mongoose.connect('mongodb://db:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Could not connect to MongoDB', err));

    app.get('/', (req, res) => {
      res.send('Hello, Docker!');
    });

    app.listen(port, () => {
      console.log(`App running at http://localhost:${port}`);
    });
    ```

6. Create a `package.json` file with the following content:
    ```json
    {
      "name": "my-node-app",
      "version": "1.0.0",
      "description": "A simple Node.js app to demonstrate Docker",
      "main": "app.js",
      "scripts": {
        "start": "node app.js"
      },
      "dependencies": {
        "express": "^4.17.1",
        "mongoose": "^5.12.3"
      }
    }
    ```

7. Create a `docker-compose.yml` file with the following content:
    ```yaml
    version: '3'
    services:
      app:
        build: .
        ports:
          - "4000:4000"
        environment:
          - NODE_ENV=production
        depends_on:
          - db

      db:
        image: mongo
        ports:
          - "27017:27017"
        volumes:
          - mongo-data:/data/db

    volumes:
      mongo-data:
    ```

## Usage

### Building the Docker Image

To build the Docker image, run the following command:
```sh
make build
```


###  Exercise Steps
##  Step 1: Installing Docker
#  Before you start, ensure Docker is installed on your system. Follow the instructions at https://docs.docker.com/get-docker/.
<img width="544" alt="Captura de pantalla 2024-07-10 a la(s) 8 39 33 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/6f23cb77-39cd-44f0-881b-16b3849867d8">


##  Step 2: Writing a Dockerfile
#  Create files Dockerfile and Makefile, based on the ones present in the directory example1-latex. Understand very well how is it used, and attend the discussion in class about Docker images, Docker containers, and Dockerfiles.

<img width="336" alt="Captura de pantalla 2024-07-10 a la(s) 8 40 06 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/30850f5c-da0b-4bda-b025-ae98f71d0634">


##  Step 3: Building a Docker Image
#  Similarly, create a Dockerfile for your miniproject 1, and build it following the build command in the Makefile mentioned above.

<img width="491" alt="Captura de pantalla 2024-07-10 a la(s) 8 40 33 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/1e4b7e45-4671-493d-9b7e-50d82e916de2">

##  Step 4: Running the Container
#  Run a container of the image that you just created. Use the Makefile above as a reference. Your application should be accessible at http://localhost:4000.

<img width="480" alt="Captura de pantalla 2024-07-10 a la(s) 8 41 14 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/19c992c7-13f9-4666-8baa-c08dd4c78d81">


##  Step 5: Interacting with the Container
#  List running containers:
```
docker ps -a
```
<img width="917" alt="Captura de pantalla 2024-07-10 a la(s) 8 41 49 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/0a829941-5210-4845-af0d-a8309d153632">


##  Step 6: Docker Compose
#  The idea in Docker Compose will be to create a YAML file describing an orchestration of micro-services. (to be continued next class)

<img width="254" alt="Captura de pantalla 2024-07-10 a la(s) 8 42 13 p  m" src="https://github.com/jonyyy1/miniproject-docker/assets/103339596/d45c8594-2cfa-4a23-94b7-6c3331603643">









