// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD33LqAw0OykJk5RCLYKPRf5zigok99nVE",
  authDomain: "proyecto-react-11c6b.firebaseapp.com",
  projectId: "proyecto-react-11c6b",
  storageBucket: "proyecto-react-11c6b.appspot.com",
  messagingSenderId: "243870544919",
  appId: "1:243870544919:web:ec9a0b553009601472d852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);