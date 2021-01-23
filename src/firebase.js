// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-TmQCrGcPEHyvllpFE_RMHmWB01-bKgo",
    authDomain: "challenge-adf3c.firebaseapp.com",
    projectId: "challenge-adf3c",
    storageBucket: "challenge-adf3c.appspot.com",
    messagingSenderId: "1074523655230",
    appId: "1:1074523655230:web:1c1e3961f8784236e0556f",
    measurementId: "G-2DNYCP2MFP"
  };

  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  console.log('fuck my ass');
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db ,auth};