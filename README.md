# Offline-First Lottie Animation Management System

## Project Overview

This project involves creating a React application with strong offline functionality, allowing users to search for, preview, upload, and download Lottie animations. It includes a detailed view of animations, displaying essential metadata, and supports offline access to this information even without an internet connection.

## Technology Stack

- **Backend**: Node.js with Express/Fastify, GraphQL, MongoDB
- **Frontend**: React, TypeScript, Redux, IndexedDB/LocalStorage
- **Service Workers**: To enable offline support
- **CI/CD**: Azure DevOps pipelines
- **Code Analysis**: SonarQube

## Features

- **Search/Browse Animations**: Users can query animations using various criteria.
- **Upload/Download**: Allows users to upload and download Lottie animation files.
- **Offline Capabilities**: Utilizes service workers for caching and offline access.
- **GraphQL API**: Manages search queries, file uploads/downloads, and metadata retrieval.

## Setup Instructions

### Backend
Backend Setup
Install dependencies:

## bash command
cd lottie-animation-app/backend
npm install express mongoose aws-sdk multer body-parser cors

Configure environment variables:
Create a .env file in the backend folder and add your AWS credentials and MongoDB connection string.

## plaintext on .env
# AWS_ACCESS_KEY_ID=your_aws_access_key_id
# AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
# AWS_REGION=your_aws_region
# AWS_BUCKET_NAME=your_bucket_name

Start the backend server:

## bash command
node index.js


### Frontend
Frontend Setup
Install dependencies:

## bash command
# cd lottie-animation-app/frontend
# npm install
# npm install axios react-router-dom redux react-redux @material-ui/core @material-ui/icons lottie-web

## Register the service worker:
Add the following to src/index.js to register the service worker:

## Start the frontend development server:

# bash command
npm start

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/OfflineDB
   ```

### Outcome
## HomePage 

Home Page will Display
![image](https://github.com/rubaiyat2009/offline-first-lottie/assets/23079997/5ee1c68e-d0e4-4efb-8e97-8e334ba6b29e)


Search will show Serach results and Once you click on Manage Animations

## Manage Animations...
Manage Animations will display

![image](https://github.com/rubaiyat2009/offline-first-lottie/assets/23079997/06a5871b-c63a-43f0-9fa0-5b8b26703fab)

Here you can upload animations using your AWs necessary credentials in backend/.env fiile

- MONGO_URI=mongodb://localhost:27017/OfflineDB
- PORT=4000
- AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY
- AWS_REGION=us-east-1
- AWS_BUCKET_NAME=aws-file-storage

## Enjoy

