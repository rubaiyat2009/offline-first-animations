# Offline-First Lottie Animation Management System

## Project Overview

This project is a React application with robust offline capabilities, enabling users to search, preview, upload, and download Lottie animations. It includes a detailed animation view showing basic metadata and provides offline support to access detailed metadata even when no internet connection is available.

## Technology Stack

- **Backend**: Node.js with Express/Fastify, GraphQL, MongoDB
- **Frontend**: React, TypeScript, Redux, IndexedDB/LocalStorage
- **Service Workers**: For offline support
- **CI/CD**: Azure DevOps pipelines
- **Code Analysis**: SonarQube

## Features

- **Search/Browse Animations**: Query animations based on different criteria
- **Upload/Download**: Enable users to upload and download Lottie animation files
- **Offline Capabilities**: Service workers for caching and offline access
- **GraphQL API**: Backend API to handle search queries, file upload/download, and metadata retrieval

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/OfflineDB
