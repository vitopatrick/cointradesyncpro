import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

const firebaseConfig = {
  apiKey: "AIzaSyAGOXknTqQuxp4IAQPBZm9h8WPtTH8PSBM",
  authDomain: "investment-application-9072d.firebaseapp.com",
  projectId: "investment-application-9072d",
  storageBucket: "investment-application-9072d.appspot.com",
  messagingSenderId: "299174630339",
  appId: "1:299174630339:web:92e7781280e3aff4712376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
