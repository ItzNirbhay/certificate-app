// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLGRcPmYh4S5PHpN9bcRn7f-GzLq33gU",
  authDomain: "certificate-app-d0591.firebaseapp.com",
  databaseURL: "https://certificate-app-d0591-default-rtdb.firebaseio.com",
  projectId: "certificate-app-d0591",
  storageBucket: "certificate-app-d0591.appspot.com",
  messagingSenderId: "784726370144",
  appId: "1:784726370144:web:1afd613724c17995e92005",
  measurementId: "G-2WYEQ9FRQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);