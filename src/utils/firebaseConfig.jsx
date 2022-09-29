import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4G_kh0JxA12KSalUIJqHeJ8wvnMwMIxI",
  authDomain: "vibes-zone-1fbe1.firebaseapp.com",
  projectId: "vibes-zone-1fbe1",
  storageBucket: "vibes-zone-1fbe1.appspot.com",
  messagingSenderId: "80342194351",
  appId: "1:80342194351:web:ff64562f13a0df995d9c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);