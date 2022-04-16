import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable
const firebaseConfig = {
  apiKey: "AIzaSyABOp-WxkK-H_X0dHLik8O5o6Zt85rNyYY",
  authDomain: "coinstationpro-cedd6.firebaseapp.com",
  projectId: "coinstationpro-cedd6",
  storageBucket: "coinstationpro-cedd6.appspot.com",
  messagingSenderId: "623632024894",
  appId: "1:623632024894:web:8d4989dfbc7c0931b3d86f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
