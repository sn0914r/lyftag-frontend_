import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCb5BR3mDssjKWOdMuRGbWnEbcJYbjK6Ek",
  authDomain: "lyftag-fea6a.firebaseapp.com",
  projectId: "lyftag-fea6a",
  storageBucket: "lyftag-fea6a.firebasestorage.app",
  messagingSenderId: "1068115432380",
  appId: "1:1068115432380:web:4e0fbf0ac32bb427e111b9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
