import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCXbyQuD1KidwGKtEvaW3yY-0qTa5co4UI",
  authDomain: "tiktok---jornada-dev-76104.firebaseapp.com",
  projectId: "tiktok---jornada-dev-76104",
  storageBucket: "tiktok---jornada-dev-76104.appspot.com",
  messagingSenderId: "387351331473",
  appId: "1:387351331473:web:2affe5401be7eaad02f530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;