// firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, connectAuthEmulator 
} from "firebase/auth";
import { 
  getFirestore, connectFirestoreEmulator 
} from "firebase/firestore";
import { 
  getStorage, connectStorageEmulator 
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-t06eMaiog0b7abqqr_lavqmtOd5NwQ",
  authDomain: "coffeeshop-54f57.firebaseapp.com",
  projectId: "coffeeshop-54f57",
  storageBucket: "coffeeshop-54f57.firebasestorage.app",
  messagingSenderId: "433235862666",
  appId: "1:433235862666:web:333b9e93e45ffce08cb973",
  measurementId: "G-F5RCNQ35QC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// 👉 usa emulador APENAS no localhost
if (window.location.hostname === "localhost") {
  console.log("🔥 A usar Firebase Emulator!");

  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}

export default app;