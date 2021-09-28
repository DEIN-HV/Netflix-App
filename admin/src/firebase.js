import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBXcli5G9ukCPipKpX0kcMm5J8fmSlAgy0",
    authDomain: "netflix-a462c.firebaseapp.com",
    projectId: "netflix-a462c",
    storageBucket: "netflix-a462c.appspot.com",
    messagingSenderId: "98994557271",
    appId: "1:98994557271:web:ac7509b331ed5f892bee12",
    measurementId: "G-ST993N8QTX"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const storage = app.storage();
// export default storage;

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
export default firebase;
