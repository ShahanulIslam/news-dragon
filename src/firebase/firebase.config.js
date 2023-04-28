// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS_6tfI7A5UMTZbfTwDdsnifi6XbYR4UE",
  authDomain: "the-news-dragon-b470f.firebaseapp.com",
  projectId: "the-news-dragon-b470f",
  storageBucket: "the-news-dragon-b470f.appspot.com",
  messagingSenderId: "361168193978",
  appId: "1:361168193978:web:4f5cc9f839c12980ba7583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;