// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: "programming-course-6d620.appspot.com",
  messagingSenderId: "260626350380",
  appId: "1:260626350380:web:ae737fbc99a6cb61d2ac89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app