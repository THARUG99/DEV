// Import the functions you need from the SDKs you need
import { getStorage } from 'firebase/storage';
import { initializeApp} from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMb9nOt-LZ27ri9B0CHqeP7LSzN1BfJl8",
  authDomain: "syntomi.firebaseapp.com",
  projectId: "syntomi",
  storageBucket: "syntomi.appspot.com",
  messagingSenderId: "113701413247",
  appId: "1:113701413247:web:9f6d2749a2183fcaf3fa4a"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, storage, database };


