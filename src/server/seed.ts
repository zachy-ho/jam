import { db } from './firebase';

async function seedFirestore() {
  const users = await db.collection('users').get();
  users.forEach((doc) => {
    console.log('user');
    console.log(doc);
  });
  // seed users

  // seed jams
}

seedFirestore();
