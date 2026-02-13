// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG7kSDcms6C9vAUt6izixS94ouC_iCe4w",
    authDomain: "adgestor-bd9c8.firebaseapp.com",
    projectId: "adgestor-bd9c8",
    storageBucket: "adgestor-bd9c8.firebasestorage.app",
    messagingSenderId: "414270170043",
    appId: "1:414270170043:web:d5649b79620574c5a91a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
