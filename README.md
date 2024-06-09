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

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/OfflineDB
   ```
