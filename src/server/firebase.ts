// https://stackoverflow.com/questions/69746672/unable-to-resolve-path-to-module-firebase-admin-app-eslint
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase-admin/app';
// eslint-disable-next-line import/no-unresolved
import { getFirestore } from 'firebase-admin/firestore';
import { credential } from 'firebase-admin';
import { env } from './environment';

// https://firebase.google.com/docs/admin/setup?authuser=1
initializeApp({
  credential: credential.cert({
    projectId: env.FIREBASE_PROJECT_ID,
    privateKey: env.FIREBASE_PRIVATE_KEY,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
  }),
});

export const db = getFirestore();
