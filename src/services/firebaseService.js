import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJn7AhJktBQV4Hl8Et3i5nRcSJg4NRONE",
    authDomain: "comics-e-commerce.firebaseapp.com",
    projectId: "comics-e-commerce",
    storageBucket: "comics-e-commerce.appspot.com",
    messagingSenderId: "1040602319988",
    appId: "1:1040602319988:web:4663ad569ade4036741521"
}

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}

