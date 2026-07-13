
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmp6Q8gibUHrwpUw3xiTPE_XQ1XgWUha4",
  authDomain: "dx-stream-9cacf.firebaseapp.com",
  projectId: "dx-stream-9cacf",
  storageBucket: "dx-stream-9cacf.firebasestorage.app",
  messagingSenderId: "687551293069",
  appId: "1:687551293069:web:7b2496ff5c839aa63964c4",
  measurementId: "G-TB4N50ZVYL"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);