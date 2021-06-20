import firebase from 'firebase/app';
import 'firebase/storage';
import env from "react-dotenv";

const firebaseConfig = {
    apiKey: env.STORAGE_KEY,
    authDomain: "resume-builder-fa93a.firebaseapp.com",
    projectId: "resume-builder-fa93a",
    storageBucket: "resume-builder-fa93a.appspot.com",
    messagingSenderId: "303018949184",
    appId: "1:303018949184:web:2f019e4072519e30bb3da5",
    measurementId: "G-DKBQ6G4RBF"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };