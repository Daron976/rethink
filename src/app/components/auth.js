// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaz5TfjHGw0NqEaq_AAZIdyQEm7mM4Sro",
  authDomain: "rethinkproj.firebaseapp.com",
  projectId: "rethinkproj",
  storageBucket: "rethinkproj.appspot.com",
  messagingSenderId: "178179393616",
  appId: "1:178179393616:web:a41bd279aeb8957eafa955",
  measurementId: "G-LL6M6VZ4V2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export function auth() {
//   return app;
// }

export const emailExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
