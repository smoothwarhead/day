import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBxXUNCJCbxgFpOyqNGH9fyNScJF56KFzI",
    authDomain: "day-app-afa44.firebaseapp.com",
    projectId: "day-app-afa44",
    storageBucket: "day-app-afa44.appspot.com",
    messagingSenderId: "974933627011",
    appId: "1:974933627011:web:00b170a50c8d6604f20bb6",
    measurementId: "G-23NPGPPC3Y"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);