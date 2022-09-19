import * as dotenv from 'dotenv';

// Should only need to run this once so we do it in this file and export the
// environment variables
// Change this to development
dotenv.config();

export const env = {
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL
};
