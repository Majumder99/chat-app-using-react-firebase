import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcI9MlRkPoEhW3Ap5fYtuICZDnW2M--iw",
  authDomain: "chat-app-react-firebase-db364.firebaseapp.com",
  projectId: "chat-app-react-firebase-db364",
  storageBucket: "chat-app-react-firebase-db364.appspot.com",
  messagingSenderId: "987195379708",
  appId: "1:987195379708:web:f3c5a273915308033c6c79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
