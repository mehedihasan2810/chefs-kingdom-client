// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB0pa4H88F41F9TzwC68BjRkFVQMxzWZKY",
//   authDomain: "chefs-kingdom-96f43.firebaseapp.com",
//   projectId: "chefs-kingdom-96f43",
//   storageBucket: "chefs-kingdom-96f43.appspot.com",
//   messagingSenderId: "113295463844",
//   appId: "1:113295463844:web:01367aafbbdc0b37f61d31"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
