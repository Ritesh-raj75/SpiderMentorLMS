import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAooRUyKHeO9qAtTjxSETi-R1Co1f7UYbU",
  authDomain: "spider-newsletter.firebaseapp.com",
  projectId: "spider-newsletter",
  storageBucket: "spider-newsletter.appspot.com", // ✅ Fixed here
  messagingSenderId: "408413378837",
  appId: "1:408413378837:web:56503c3c0b0477de13311c",
  measurementId: "G-V9PK47RPQQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);