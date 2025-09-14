// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITEapiKey,
  authDomain:import.meta.env.VITEauthDomain,
  projectId:import.meta.env.VITEprojectId,
  storageBucket:import.meta.env.VITEstorageBucket,
  messagingSenderId:import.meta.env.VITEmessagingSenderId,
  appId:import.meta.env.VITEappId,
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;